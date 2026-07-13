# Launch System Database Schema Review

## Scope and verdict

This review compares the supplied **DBML** model with *SRS Launch System v2-bis*. It assesses logical correctness, PostgreSQL 16+ readiness, traceability, concurrency, security, and performance. It does not provide executable SQL.

**Verdict: redesign before implementation.** The DBML has broad functional coverage and is a useful entity inventory, but it is not safe as a production physical schema. Its main risks are ambiguous stock ownership, mutable or weakly linked history, no stable PO-item identity across versions, non-reproducible simulations and prices, unenforced workflow gates, and a near-total absence of database constraints. Adding indexes alone will not make it correct; the core ledgers and identities must be fixed first.

## Input profile

The supplied DBML contains:

- 71 tables, 20 enums, and 181 inline references.
- 88 timestamp columns, but only 9 are declared `NOT NULL`.
- 65 decimal columns without precision/scale and 91 varchar columns without length limits.
- No `CHECK` constraints and no explicit foreign-key delete/update actions.
- 84 nullable foreign keys.
- Approximately 129 referencing foreign-key columns without a leading supporting index.

These numbers do not prove a design is wrong by themselves, but together they show that most business rules currently exist only in application assumptions.

## Priority findings

### P0 - resolve before migrations or API development

1. **Define the stock ownership model.** `stock_balances.project_id` is nullable, while the unique key is `(project_id, material_id)`. PostgreSQL permits multiple rows with a null project in such a key, so duplicate “global” balances are possible. Physical stock should normally be owned by a site/location and stock pool (warehouse, WIP, transit), with project reservations represented separately. If stock is genuinely project-owned, that must be an explicit rule everywhere.

2. **Replace mutable balances as the source of truth with an inventory ledger.** `stock_movements` has no debit/credit location, unit, idempotency key, or typed source link. `stock_corrections` is not guaranteed to create a movement, and theoretical stock is stored independently even though the SRS defines it as practical stock plus expected transit. Use immutable inventory events and balanced posting lines; treat balances as rebuildable projections.

3. **Introduce stable PO and PO-item identities.** Version lines are identities only inside one version. Deliveries, production, simulations, and launch allocations cannot reliably follow the same business item when V2 adds, removes, or reorders lines. Create a stable PO item under the PO and immutable item-version snapshots under each PO version. Link operational events to the stable item.

4. **Remove operational quantities from immutable PO snapshots.** `purchase_order_lines` carries delivered, remaining, and amount snapshots, although deliveries occur after version confirmation. Updating them violates version immutability; not updating them makes them stale. Derive delivered/remaining amounts from production and delivery events, using the price snapshot or price version required by the business rule.

5. **Make critical workflow gates enforceable and exactly once.** A nullable meeting-minutes FK does not prevent launch finalization. A signed reception can be validated more than once and is not uniquely tied to one stock transaction. Customer delivery status can become Delivered without a confirmation. State transitions, required evidence, actor/time consistency, and unique posting effects need transactional database invariants.

6. **Make history genuinely append-only and tamper-evident.** `audit_events`, generic JSON values, polymorphic entity IDs, and `immutable` booleans are ordinary mutable rows. Use append-only privileges, typed links, transaction/correlation IDs, a per-scope hash chain, immutable document checksums, and external/WORM anchoring where the threat model requires it. PostgreSQL can prevent ordinary application/admin roles from changing audit rows, but a database owner or superuser can bypass in-database controls. The SRS promise against even a privileged administrator therefore requires an explicit DBA threat model and external anchoring or independent custody.

7. **Replace untyped reference-list links.** A customer, contact, receiver, delivery method, or material type FK can currently point to an item from the wrong list type. Prefer dedicated typed tables. If a generic list is retained, use discriminator-aware composite foreign keys and preserve value snapshots for historical display.

8. **Freeze unresolved business decisions before hard constraints.** OP-01 through OP-13, plus stock scope and PO identity, affect keys, validation, authorization, state machines, calculations, and retention. They cannot be deferred to UI logic.

### P1 - complete before production readiness

1. Add sessions with token digests, last activity, idle expiry, absolute expiry, revocation, and login context. A login-event table does not implement the SRS 60-minute inactivity timeout.

2. Preserve one active role per user while recording temporal role history. Make project assignments effective-dated; the current unique triple prevents reassigning the same user/role after an earlier assignment ends.

3. Add optimistic-lock versions to every mutable aggregate. Do not use PO/BOM business version numbers as concurrency tokens.

4. Replace the BOM validity/cache design with complete immutable `.xlsx` revision snapshots and one explicitly activated revision per business scope. Record replacement confirmation and the exact revision used by every simulation.

5. Add explicit multi-PO simulation participants, priority order, planned-stock arrival rows, stock/BOM cutoffs, quantities already launched/in manufacturing, algorithm version, and policy snapshot.

6. Add customer delivery instruction lines and generated-document links. Snapshot the applicable transport cost once per shipment, not once per FGPN sales row.

7. Make FGPN prices, delivery-method costs, and ordered-material prices effective-dated and non-overlapping. Link each recognized sale to the price/cost version used.

8. Index all referencing FKs and actual access paths, including project/status/date filters. Add trigram indexes for the required three-character substring search on material number and description.

9. Use a transactional outbox for documents, dashboards, audit export, and other asynchronous work so committed business events cannot be lost between the database and a worker.

## Exact SRS-to-DBML mismatches

1. **PO extraction and confirmation (SRS pp. 12-16).** The confirmed PO schema omits Reason of Purchase Order and Car Model. Line staging tracks original/corrected/final values only for FGPN, quantity, and unit price; it omits the same correction evidence for item, development/engineering level, color, description, trim, PO level, and pick-up data. Mandatory-field confirmation is not enforceable.

2. **PO immutability and partial quantities (SRS pp. 15-18).** Version rows contain mutable-looking delivery snapshots, while `po_quantity_events` is header-level and free-text. There is no stable cross-version item identity and no proper partial-production event/line model, although M04-FR-03 requires production and delivery parts to be tracked separately.

3. **Multi-PO and future simulation (SRS pp. 19-20).** The simulation header has one nullable PO rather than selected-PO rows with priority. Planned future stock is one aggregate per material with no expected-arrival rows. Provenance for already-launched and already-in-manufacturing quantities is absent. A nullable meeting document does not enforce the finalization gate.

4. **BOM upload and replacement (SRS pp. 21-22).** The SRS requires `.xlsx`; `bom_imports.source_type` instead comments “example: xml” and uses `xml_hash`. Replacement confirmation has no confirmer/time. Multiple active or overlapping revisions are possible, and delta/cache rows can drift instead of preserving a complete uploaded workbook snapshot.

5. **Stock history and calculation (SRS pp. 23-25).** Immutability is not enforced. The deadline and `locked` flag can disagree. Corrections need not create a linked reversal/replacement movement. CutMan imports lack project/site scope and applied old/new/delta transaction detail. Theoretical stock can diverge from its defined calculation.

6. **Warehouse code and signed validation (SRS pp. 26-27).** Code hashes are indexed but not unique; generation/expiry/usage consistency is unchecked. Signed validation is not linked exactly once to the inventory transaction it authorizes, so retry or duplicate processing can double-decrement stock.

7. **Customer delivery instruction and confirmation (SRS pp. 28-29).** The instruction has no line table, generated document, or shipment link, so it cannot store the required PO reference, FGPN, quantity, method, and date as one traceable instruction. A delivery can reach Delivered without a confirmation. Confirmation cardinality and evidence rules are unconstrained.

8. **Delivery cost and temporal finance (SRS pp. 28-31).** The required transport-cost snapshot is absent from the delivery. Price and cost “active” rows may overlap or be overwritten, history is not tied to the exact source record, currency is nullable, and `actual_sales.transport_cost_used` can count one shipment cost once per FGPN line. Historical revenue is therefore not deterministically reproducible.

9. **Audit and signers (SRS p. 35).** The audit table is not append-only or tamper-evident. Generic entity IDs have no referential integrity. The signer-plus-uploader rule is modeled only for some reception documents, not every signed document.

10. **Security and concurrency (SRS pp. 37-38).** There is no session store or idle-expiration model, no systematic optimistic locking, and no database representation of the “read all but write assigned” distinction suitable for server-side enforcement. The SRS itself has role-scope contradictions covered by OP-02 through OP-04.

11. **Field and file constraints (SRS p. 39).** Exact/max lengths, four-decimal accuracy, positive/nonnegative quantities, allowed MIME/extension combinations, and maximum file size are not constrained. Document MIME, size, checksum, and upload time are not consistently mandatory.

## What the optimized dbdiagram.io redesign changes

The target diagram should be treated as a corrected logical model, not executable DDL. It makes these structural changes:

- **Identity and access:** typed roles/permissions, temporal user-role and project assignments, server sessions, and project-scope keys suitable for RLS. One concurrent business role per user can still be enforced, matching the current SRS.
- **Typed master data:** dedicated customers, contacts, FGPNs, materials, delivery methods, receivers, locations, and stock pools replace unsafe generic references.
- **Documents and evidence:** immutable document objects carry byte size, detected media type, checksum, storage version, uploader, and time; typed attachments and signer records identify the owning business record.
- **Purchase orders:** stable PO headers and items sit above immutable header/item version snapshots. Extraction facts retain source, corrected, final, validator, and confirmation evidence for every field. Status, production, and delivery quantities are event-based.
- **BOM:** every accepted `.xlsx` upload creates a complete immutable revision snapshot and component set. Activation/replacement is an explicit confirmed event, and simulations reference the exact revision.
- **Simulation:** participant rows support single and multiple POs; planned-stock rows preserve quantities and arrival dates; material inputs, inventory cutoffs, BOM versions, coefficient, priority policy, and algorithm version are snapshotted.
- **Inventory:** physical site/location/pool ownership is explicit. Immutable events and postings record receptions, CutMan/WIP changes, transit receipts, corrections, and warehouse deliveries. Practical/theoretical balances become projections; project reservations are separate from physical stock.
- **Launch and delivery:** instruction lines reference stable items/materials. Meeting minutes gate approval. Delivery-code consumption is atomic. Signed-document validation has one unique stock posting. Customer confirmation gates Delivered status.
- **Finance:** non-overlapping price/cost versions and immutable recognition rows make revenue reproducible. Shipment cost is applied once at the correct grain.
- **Audit and integration:** typed audit subjects, hash-chained audit entries, document hashes, and a transactional outbox preserve an independently verifiable event trail.

## PostgreSQL 16+ implementation guidance

- Use `timestamptz` for events, authentication, expiry, and audit times; use `date` for document, delivery, pick-up, and effective business dates. Derive ISO week with its ISO year rather than storing an unqualified week number.
- Prefer bigint identity keys for a centralized deployment, or application-generated UUIDs when offline/distributed creation is required. Keep business keys separately constrained.
- Define shared domains/types after confirming maxima: quantities around `numeric(18,4)`, money around `numeric(19,4)`, coefficient `numeric(10,4)`, and three-character ISO currency. Add positivity, nonnegativity, and arithmetic consistency checks.
- PostgreSQL gains no performance benefit from unconstrained `varchar` over `text`. Use `text` for narrative fields; enforce SRS lengths explicitly for PO number (10), PO part number (7), color code (4), PO level (max 6), descriptions (max 50), material part number (max 10), and FGPN after OP-01.
- Make lifecycle timestamps, actors, statuses, and source keys non-null when the event cannot validly exist without them. Use defaults only where the database is the authoritative clock.
- Use explicit FK actions. Default business, audit, document, price, and inventory history to `RESTRICT`/`NO ACTION`; use cascades only for truly owned draft children. Never cascade-delete audit, ledger, or accepted evidence.
- Add leading indexes for every FK used in joins, deletes, RLS, or validation. Add composite indexes that match project/status/date and PO/status queries, partial indexes for active/pending work, GIN trigram indexes for required substring search, and BRIN only for genuinely large append-only time-series tables.
- Use exclusion or equivalent non-overlap constraints for effective-dated prices and costs, partial unique constraints for one active assignment/revision, and unique idempotency/source keys for external imports and stock posting.
- Use `jsonb` only for supplemental snapshots/audit payloads; keep keys, money, quantities, states, and relations typed. Store SHA-256 and code digests as binary values, not free-form varchar.
- Enforce least privilege with separate owner, migration, application, read-only, and audit-writer roles; consider RLS for project-owned tables. RLS does not replace application authorization tests.
- Use explicit `lock_version` compare-and-swap on mutable aggregates. Post inventory, status changes, audit rows, and outbox messages in the same transaction.

## Decision register

| ID | Required decision | Schema consequence / safe provisional direction |
|---|---|---|
| OP-01 (SRS p. 40) | Is FGPN 12 or 15 characters, and do separators count? | Keep a normalized text value and defer the final length/format check until a real approved example is supplied. |
| OP-02 (p. 40) | Exact Launch Manager vs Launch Engineer permissions. | Provisional SRS rule: manager reads all, writes only assigned; engineer reads/writes assigned. Encode permission and scope separately. |
| OP-03 (p. 40) | Whether Plant Manager has system access and its scope. | If enabled, enforce global read-only with no business mutations. Resolve the conflict with NFR-03 before RLS is finalized. |
| OP-04 (p. 41) | Whether Warehouse Personnel is a distinct account role. | Keep distinct roles provisionally; resolve the conflict between “warehouse users” prose and the correction matrix. |
| OP-05 (p. 41) | Allowed backward PO transitions and actors. | Version the transition policy; require reason, actor, and immutable transition event for every approved backward move. |
| OP-06 (p. 41) | Multi-PO priority and tie-breaking rule. | Store priority order, policy ID/version, inputs, and deterministic algorithm version with each run. |
| OP-07 (p. 41) | Accepted delivery confirmation forms/evidence. | Use typed confirmation methods and conditional required evidence; gate Delivered status transactionally. |
| OP-08 (p. 42) | Final delivery-method list. | Use a typed maintainable reference with effective-dated cost; do not hard-code only Truck/DHL/Van. |
| OP-09 (p. 42) | Whether safety coefficient 2 is universal. | Store a versioned policy and snapshot the applied value on every simulation; do not use a hidden global constant. |
| OP-10 (p. 42) | Who validates signed warehouse reception and within what SLA. | Separate upload from validation; constrain validator role and create exactly one inventory posting per accepted document. |
| OP-11 (p. 42) | When an invoice is mandatory. | Model a versioned applicability rule and block financial completion only when that rule applies. |
| OP-12 (p. 43) | Whether future-simulation drafts persist and for how long. | Persist immutable drafts linked to project/simulation by default; confirm retention and audit-export inclusion. |
| OP-13 (p. 43) | Delivery-code validity duration. | Make duration configurable, snapshot `expires_at` when generated, and atomically enforce expiry/single use. |
| DS-14 | Is physical stock global, per plant/site, per location, or per project? | Recommended: site/location/pool physical ledger plus separate project reservations. Never use nullable project scope to mean “global.” |
| PI-15 | What makes a PO and a PO item the same business identity across resubmissions? | Confirm header key (for example project/customer/PO number) and stable item matching (source item number or approved rule). Versions snapshot that identity; operations reference the stable item. |

## Recommended implementation sequence

1. Obtain signed decisions for OP-01..OP-13, DS-14, and PI-15; define the DBA/audit threat model and retention rules.
2. Freeze the target data dictionary, grains, ownership scopes, state machines, and event/idempotency rules; review the optimized dbdiagram.io model with launch, warehouse, finance, audit, and security owners.
3. Build the constrained foundation: typed reference data, identity/RBAC/sessions, projects, immutable documents/signers, audit chain, and outbox.
4. Build stable PO/item versions, full BOM snapshots, and the inventory event/posting ledger. Prove reconstruction and exact-once behavior before adding dashboards.
5. Add simulation, launch, warehouse/customer delivery, and effective-dated finance workflows with transactional gates and optimistic locking.
6. Migrate and reconcile data, then run constraint, concurrency, authorization/RLS, idempotency, historical-rebuild, acceptance, load, backup/restore, and audit-tamper tests before cutover.

**Exit criterion:** implementation should not begin from the supplied DBML verbatim. Begin only after the target model can reproduce every accepted PO version, BOM revision, simulation input, stock balance, delivery quantity, price selection, and audit link from immutable facts.
