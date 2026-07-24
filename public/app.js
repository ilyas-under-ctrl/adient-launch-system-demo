    /* ================= ICONS ================= */
    const ICONS = {
      dashboard: `<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>`,
      projects: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 4v5"/>`,
      po: `<path d="M6 2h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M9 9h6M9 13h6M9 17h4"/>`,
      bom: `<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="8" y="13" width="8" height="8" rx="1.5"/>`,
      sim: `<path d="M4 19l4-10 4 6 4-8 4 4"/>`,
      stock: `<path d="M21 8L12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>`,
      reports: `<path d="M4 20V10M12 20V4M20 20v-7"/>`,
      history: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>`,
      upload: `<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 20h16"/>`,
      material: `<path d="M21 8L12 3 3 8v8l9 5 9-5V8z"/>`,
      createProject: `<path d="M12 5v14M5 12h14"/>`,
      plus: `<path d="M12 5v14M5 12h14"/>`,
      view: `<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>`,
      edit: `<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>`,
      trash: `<path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>`,
      folder: `<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>`,
      FolderOpen: `<path d="M3 7a2 2 0 012-2h4l2 2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/><path d="M3 7h8"/>`,
      FileText: `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M10 12h4"/><path d="M10 16h4"/>`,
      Package: `<path d="M21 16V8a2 2 0 00-1-1.73L13 3.27a2 2 0 00-2 0L4 6.27A2 2 0 003 8v8a2 2 0 001 1.73l6 3.46a2 2 0 002 0l6-3.46A2 2 0 0021 16z"/><path d="M3.27 6.96L12 11l8.73-4.04"/><path d="M12 22.08V11"/>`,
      Boxes: `<path d="M21 16V8a2 2 0 00-1-1.73L13 3.27a2 2 0 00-2 0L4 6.27A2 2 0 003 8v8a2 2 0 001 1.73l6 3.46a2 2 0 002 0l6-3.46A2 2 0 0021 16z"/><path d="M7 8.88l5 2.92 5-2.92"/><path d="M7 12.12v5.72"/><path d="M17 12.12v5.72"/>`,
      Activity: `<path d="M14 2l-4 10h5l-4 10"/>`,
      PackageOpen: `<path d="M16.5 9.4l2.5 1.4V16a2 2 0 01-2 2H7a2 2 0 01-2-2V10.8l2.5-1.4"/><path d="M12 18.5l-6-3.4V7.1l6 3.4 6-3.4v8"/><path d="M12 3v4"/>`,
      PackageCheck: `<path d="M21 16V8a2 2 0 00-1-1.73L13 3.27a2 2 0 00-2 0L4 6.27A2 2 0 003 8v8a2 2 0 001 1.73l6 3.46a2 2 0 002 0l6-3.46A2 2 0 0021 16z"/><path d="M9 12l2 2 4-4"/>`,
      BadgeDollarSign: `<path d="M12 3v2"/><path d="M12 19v2"/><path d="M6 7h12"/><path d="M6 17h12"/><path d="M12 7a3 3 0 010 6 3 3 0 010 6"/>`,
      search: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>`,
      refresh: `<path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 3v6h-6"/>`,
      copy: `<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2h3"/>`,
      download: `<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>`,
      columns: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>`,
      filter: `<path d="M4 5h16l-6 8v6l-4 2v-8L4 5z"/>`,
      close: `<path d="M6 6l12 12M18 6L6 18"/>`,
      chevLeft: `<path d="M15 6l-6 6 6 6"/>`,
      chevRight: `<path d="M9 6l6 6-6 6"/>`,
      sortUp: `<path d="M6 9l6-6 6 6"/>`,
      sortDown: `<path d="M6 15l6 6 6-6"/>`,
      check: `<path d="M20 6L9 17l-5-5"/>`,
      restore: `<path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`,
      truck: `<rect x="1" y="7" width="14" height="10" rx="1"/><path d="M15 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="17.5" cy="19" r="2"/>`,
      print: `<path d="M6 9V3h12v6"/><rect x="4" y="9" width="16" height="8" rx="1"/><path d="M6 17v4h12v-4"/>`,
      doc: `<path d="M6 2h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>`,
      money: `<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5c0-1.3 1.1-2 2.5-2s2.5.9 2.5 2c0 3-5 1.5-5 4.5 0 1.1 1.1 2 2.5 2s2.5-.7 2.5-2"/>`,
      invoice: `<path d="M6 2h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M9 9h6M9 13h6M9 17h3"/><circle cx="16" cy="17" r="2.4"/>`,
      audit: `<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>`,
      alert: `<path d="M10.3 3.7L2.4 18a2 2 0 001.8 3h15.6a2 2 0 001.8-3L13.7 3.7a2 2 0 00-3.4 0z"/><path d="M12 9v4M12 17h.01"/>`,
      scale: `<path d="M12 3v18M7 7l-4 8a4 4 0 008 0zM21 7l-4 8a4 4 0 008 0zM5 7h14M9 3h6"/>`,
      bell: `<path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/>`,
      lock: `<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>`,
      users: `<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>`,
    };
    ICONS.Truck = ICONS.truck;
    const icon = (n, cls = 'ic') => `<svg class="ui-icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;
    const chevIcon = `<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>`;
    const chevTree = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>`;

    /* ================= ROLE PERMISSIONS (M08–M12 spec + button matrix) =================
       Permissions are modeled per role per action-key. Every button/icon in the app that
       performs a create/edit/delete/approve-type action should be routed through can().
       Values: true = full access, 'view' = visible but disabled/read-only, false = hidden entirely.
    */
    const PERMISSIONS = {
      // Core (existing modules)
      newProject: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      uploadPo: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      uploadBom: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      // M05 — Launch Manufacturing Simulation. Plant Manager: No. Launch Manager/Engineer: Yes (own). Wh TL/Personnel: No.
      runSimulation: { engineer: true, manager: true, plant: 'view', wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      exportMissingMaterialList: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false },
      uploadMeetingMinutes: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false },
      editThresholds: { engineer: true, manager: true, plant: 'view', wh_lead: false, wh_staff: false },
      editRecord: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false }, // generic edit (project/po)
      deleteRecord: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false },

      // M08 – Manufacturing Delivery
      viewMfgDelivery: { engineer: true, manager: true, plant: true, wh_lead: true, wh_staff: false, prod_coord: false, admin: false },
      requestMfgDelivery: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false },
      approveMfgDelivery: { engineer: false, manager: true, plant: false, wh_lead: false, wh_staff: false },
      createMfgDelivery: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false }, // Engineer/Manager can create delivery instructions
      editMfgDelivery: { engineer: false, manager: false, plant: false, wh_lead: true, wh_staff: false },
      deleteMfgDelivery: { engineer: false, manager: false, plant: false, wh_lead: true, wh_staff: false }, // before confirmation only
      confirmMfgDelivery: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      updateMfgStatus: { engineer: false, manager: false, plant: false, wh_lead: true, wh_staff: false, prod_coord: false, admin: false },
      uploadSignedDoc: { engineer: false, manager: false, plant: false, wh_lead: true, wh_staff: false, prod_coord: false, admin: false },
      printDeliveryNote: { engineer: true, manager: true, plant: true, wh_lead: true, wh_staff: false },

      // M09 – Customer Delivery
      // Launch Engineer: can create delivery, generate delivery instruction, record confirmation, view deliveries for assigned projects. Cannot change transport cost or manage delivery methods.
      // Plant Manager: can view all deliveries and monitor progress. Cannot create or modify deliveries.
      // Warehouse Team Leader: read-only, can view delivery instructions related to shipments already sent.
      // Warehouse Personnel: no access.
      // System Administrator: manages delivery methods and transport costs, and confirmation methods.
      viewCustDelivery: { engineer: true, manager: true, plant: true, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      createCustDelivery: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, admin: false },
      generateDeliveryInstruction: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, admin: false },
      editCustDelivery: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, admin: false },
      deleteCustDelivery: { engineer: false, manager: true, plant: false, wh_lead: false, wh_staff: false, admin: true },
      // (confirmCustDelivery superseded — see recordDeliveryConfirmation, the single FR-07-compliant confirmation path)
      recordDeliveryConfirmation: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, admin: false },
      prepareFG: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false, prod_coord: true, admin: false },
      confirmShipment: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      changeTransportCost: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false, admin: true },
      manageDeliveryMethods: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false, admin: true },

      // M10 – Finance
      viewFinance: { engineer: 'summary', manager: true, plant: true, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      uploadInvoice: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      editInvoice: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      deleteInvoice: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      editPrice: { engineer: true, manager: true, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },

      // M12 – Audit
      viewAudit: { engineer: 'assigned', manager: 'all', plant: 'all', wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      deleteAuditLog: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      viewProduction: { engineer: true, manager: true, plant: true, wh_lead: false, wh_staff: false, prod_coord: true, admin: false },
      markProductionDone: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false, prod_coord: true, admin: false },
      markPackaged: { engineer: false, manager: false, plant: false, wh_lead: false, wh_staff: false, prod_coord: true, admin: false },
      rollbackPoStatus: { engineer: true, manager: false, plant: false, wh_lead: false, wh_staff: false, prod_coord: false, admin: false },
      createUser: { admin: true },
      editUser: { admin: true },
      deleteUser: { admin: false },
      lockUser: { admin: true },
      unlockUser: { admin: true },
      resetPassword: { admin: true },
      assignProjects: { admin: true },
      manageCustomers: { admin: true },
      manageFGPN: { admin: true },
      manageMaterialTypes: { admin: true },
      manageManufacturingReceivers: { admin: true },
      viewSystemActivity: { admin: true },
      configureSystem: { admin: true },
    };

    /* can(actionKey) -> true | 'view' | false  — resolves against currentRole */
    function can(actionKey) {
      const rule = PERMISSIONS[actionKey];
      if (!rule) return true; // unmodeled actions default open (existing behavior preserved)
      return Object.prototype.hasOwnProperty.call(rule, currentRole) ? rule[currentRole] : false;
    }
    /* Renders a button only if permitted; if 'view', renders it disabled with a tooltip */
    function permBtn(actionKey, label, iconName, onClick, extraClass) {
      const state = can(actionKey);
      if (state === false) return '';
      const cls = `btn sm ${extraClass || ''}`.trim();
      if (state === 'view') {
        return `<span class="btn-tip-wrap"><button class="${cls} disabled" disabled>${iconName ? icon(iconName, '') : ''} ${label}</button><span class="btn-tip">Insufficient permissions</span></span>`;
      }
      return `<button class="${cls}" onclick="${onClick}">${iconName ? icon(iconName, '') : ''} ${label}</button>`;
    }
    /* Same but for icon-only action buttons in row actions */
    function permIconBtn(actionKey, title, iconName, onClick, extraClass) {
      const state = can(actionKey);
      if (state === false) return '';
      if (state === 'view') {
        return `<div class="icon-btn disabled ${extraClass || ''}" title="">${icon(iconName, '')}<span class="btn-tip">Insufficient permissions</span></div>`;
      }
      return `<div class="icon-btn ${extraClass || ''}" title="${title}" onclick="${onClick}">${icon(iconName, '')}<span class="btn-tip">${title}</span></div>`;
    }

    /* ================= NAV (role-specific sidebars per spec) ================= */
    const NAV = {
      engineer: [
        { id: 'dashboard', label: 'Launch Dashboard', icon: 'dashboard' },
        { id: 'project-list', label: 'Projects', icon: 'projects' },
        { id: 'sim-launch', label: 'Simulation', icon: 'sim' },
        {
          id: 'stock', label: 'Stock', icon: 'stock', children: [
            { id: 'stock-dashboard', label: 'Stock Dashboard' },
            { id: 'stock-reception', label: 'Reception' },
            { id: 'stock-cutman', label: 'CutMan Import' },
            { id: 'stock-transit', label: 'Transit Stock' },
            { id: 'stock-thresholds', label: 'Thresholds' },
            { id: 'stock-history', label: 'History' },
          ]
        },
        { id: 'finance-dashboard', label: 'Finance', icon: 'money' },
        { id: 'audit-logs', label: 'Audit', icon: 'audit' },
      ],
      manager: [], // filled from engineer below, same menu per spec ("Assigned" scoping applied in data, not nav)
      plant: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'project-list', label: 'Projects', icon: 'projects' },
        { id: 'stock-dashboard', label: 'Stock', icon: 'stock' },
        { id: 'finance-dashboard', label: 'Finance', icon: 'money' },
        { id: 'reports', label: 'Reports', icon: 'reports' },
        { id: 'audit-logs', label: 'Audit', icon: 'audit' },
      ],
      wh_lead: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'mfg-delivery-list', label: 'Manufacturing Deliveries', icon: 'truck' },
        { id: 'wh-stock', label: 'Warehouse Stock', icon: 'bom' },
        { id: 'wh-cutting', label: 'Cutting Transfer', icon: 'sim' },
      ],
      wh_staff: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'stock-reception', label: 'Stock Reception', icon: 'stock' },
      ],
      prod_coord: [
        { id: 'dashboard', label: 'Operations Dashboard', icon: 'dashboard' },
        { id: 'production-packing', label: 'Production & Packing', icon: 'PackageCheck' },
      ],
      admin: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        {
          id: 'admin', label: 'Administration', icon: 'audit', children: [
            { id: 'admin-users', label: 'Users' },
            { id: 'admin-project-assignments', label: 'Project Assignments' },
            { id: 'admin-reference-data', label: 'Reference Lists' },
            { id: 'admin-system-activity', label: 'Login Audit' },
            { id: 'admin-roles', label: 'Roles & Access' },
          ]
        },
      ],
    };
    NAV.manager = JSON.parse(JSON.stringify(NAV.engineer));

    const ROLE_LABEL = { engineer: 'Launch Engineer', manager: 'Launch Manager', plant: 'Plant Manager', wh_lead: 'Warehouse Team Leader', wh_staff: 'Warehouse Personnel', prod_coord: 'Production & Packing Coordinator', admin: 'System Administrator' };
    const ROLE_PERSONA = {
      engineer:{ name:'Amina Rahal', initials:'AR', email:'a.rahal@launchops.example', site:'Tangier Plant 2' },
      manager:{ name:'Sara Ait Oubou', initials:'SA', email:'s.aitoubou@launchops.example', site:'Launch Department' },
      plant:{ name:'Karim Benali', initials:'KB', email:'k.benali@launchops.example', site:'Tangier Plant 2' },
      wh_lead:{ name:'Mehdi El Idrissi', initials:'ME', email:'m.elidrissi@launchops.example', site:'Main Warehouse' },
      wh_staff:{ name:'Imane Chafai', initials:'IC', email:'i.chafai@launchops.example', site:'Main Warehouse' },
      prod_coord:{ name:'Youssef Mansouri', initials:'YM', email:'y.mansouri@launchops.example', site:'Production & Packaging' },
      admin:{ name:'Rachid Benali', initials:'RB', email:'r.benali@launchops.example', site:'IT Administration' },
    };
    const READONLY_ROLES = ['plant'];

    const QUICK_ACTIONS = {
      engineer: [
        { label: 'Upload PO', icon: 'upload', page: 'po-upload' },
        { label: 'Upload BOM', icon: 'bom', page: 'bom-tree' },
        { label: 'Run Simulation', icon: 'sim', page: 'sim-launch' },
        { label: 'Import CutMan', icon: 'stock', page: 'stock-cutman' },
        { label: 'Create Project', icon: 'createProject', page: 'project-create' },
      ],
      manager: [
        { label: 'Upload PO', icon: 'upload', page: 'po-upload' },
        { label: 'Run Simulation', icon: 'sim', page: 'sim-launch' },
        { label: 'Create Project', icon: 'createProject', page: 'project-create' },
        { label: 'Create Customer Delivery', icon: 'truck', page: 'cust-delivery-list' },
        { label: 'Upload Invoice', icon: 'invoice', page: 'finance-dashboard' },
      ],
      wh_lead: [
        { label: 'Receive Stock', icon: 'upload', page: 'stock-reception' },
        { label: 'Cutting Transfer', icon: 'sim', page: 'wh-cutting' },
        { label: 'Create Delivery', icon: 'truck', page: 'mfg-delivery-list' },
      ],
      wh_staff: [
        { label: 'Receive Stock', icon: 'upload', page: 'stock-reception' },
      ],
      prod_coord: [
        { label: 'Open Production & Packing', icon: 'PackageCheck', page: 'production-packing' },
      ],
      plant: [],
      admin: [],
    };

    let currentRole = 'engineer';
    const launchApi = { connected:false, loading:false, error:'', snapshot:null };
    function launchApiRole() {
      return ['engineer','wh_lead','admin'].includes(currentRole) ? currentRole : 'engineer';
    }
    async function launchApiRequest(path, options = {}) {
      const localApi = ['127.0.0.1','localhost'].includes(window.location.hostname) ? 'http://127.0.0.1:8000/api' : '/api';
      const headers = new Headers(options.headers || {});
      headers.set('X-Demo-Role', launchApiRole());
      if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) headers.set('Content-Type','application/json');
      const response = await fetch(`${localApi}${path}`, { ...options, headers });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        const detail = typeof payload.detail === 'string' ? payload.detail : payload.detail?.message;
        throw new Error(detail || `Backend request failed (${response.status})`);
      }
      return response.status === 204 ? null : response.json();
    }
    function launchApiApplyLaunch(record) {
      const code = record.code;
      let delivery = MFG_DELIVERIES.find(item => item.code === code || item.backendId === record.id);
      const lines = (record.fgpn_quantities || []).map(line => ({
        fgpn:line.fgpn,
        qty:Number(line.qty || 0),
        ordered:Number(line.ordered || line.qty || 0),
        status:line.status || 'Unplanned',
        producedQty:Number(line.producedQty || 0),
        packagedQty:Number(line.packagedQty || 0),
        customerDeliveredQty:Number(line.customerDeliveredQty || 0),
      }));
      const mapped = {
        backendId:record.id,
        code,
        project:record.project,
        po:record.po,
        receiver:record.receiver || '',
        status:record.status,
        statusType:mfgStatusType(record.status),
        generatedAt:String(record.created_at || '').slice(0,16).replace('T',' '),
        expiresAt:String(record.expires_at || '').slice(0,16).replace('T',' '),
        used:!!record.used_at,
        codeUsedAt:String(record.used_at || '').slice(0,16).replace('T',' '),
        fgpn:lines[0]?.fgpn || '',
        fgpns:lines.map(line => line.fgpn),
        fgpnQuantities:lines,
        materials:(record.materials || []).map(line => ({ ...line, qty:Number(line.qty || line.required || 0) })),
        documentFileName:record.warehouse_document_name || '',
        documentGeneratedAt:record.warehouse_document_name ? String(record.created_at || '').slice(0,16).replace('T',' ') : '',
        signedFileName:record.signed_document_name || '',
        docUploaded:!!record.signed_document_name,
        createdBy:record.created_by || 'Launch Engineer',
        lifecycleStatus:record.status === 'Delivered' ? 'In Progress' : 'Unplanned',
      };
      if (delivery) Object.assign(delivery,mapped);
      else {
        delivery = mapped;
        MFG_DELIVERIES.unshift(delivery);
      }
      return delivery;
    }
    function launchApiHydrate(payload) {
      (payload.purchase_orders || []).forEach(record => {
        const existing = POS.find(item => item.id === record.id);
        if (existing) Object.assign(existing,{ stockCode:record.stock_code, backendStatus:record.status, delivery:record.delivery });
      });
      (payload.materials || []).forEach(record => {
        const material = MATERIALS.find(item => item.code === record.code);
        if (material) Object.assign(material,{ warehouse:Number(record.warehouse),wip:Number(record.wip),transit:Number(record.transit),supplier:record.supplier,type:record.type });
      });
      (payload.launches || []).forEach(launchApiApplyLaunch);
    }
    async function launchApiInit() {
      if (launchApi.loading) return;
      launchApi.loading = true;
      try {
        const payload = await launchApiRequest('/bootstrap');
        launchApiHydrate(payload);
        launchApi.connected = true;
        launchApi.error = '';
        if (currentRole === 'admin') launchApi.snapshot = await launchApiRequest('/admin-snapshot');
      } catch (error) {
        launchApi.connected = false;
        launchApi.error = error.message;
      } finally {
        launchApi.loading = false;
        renderAll();
      }
    }
    let currentPage = 'dashboard';
    let navigationHistory = [];
    const NAVIGATION_HISTORY_LIMIT = 40;
    let navigationBrowserDepth = 0;
    let navigationBackFallback = 'dashboard';
    let expandedGroups = {};
    let treeOpen = { proj: true, po: true, pn100: false };
    let sidebarCollapsed = JSON.parse(localStorage.getItem('sidebarCollapsed') || 'false');
    let notifOpen = false, qaOpen = false, gsOpen = false, globalSearchQuery = '';

    /* active workspace sub-tabs (persist per workspace type) */
    let activeTab = {
      project: 'Overview',
      po: 'Overview',
      pn: 'BOM',
    };
    /* which PN/PO is currently open, so workspaces + explorer stay in sync */
    let openContext = { project: 'BMW X5', po: 'PO-00045', pn: 'PN100', material: 'MAT-5512', compareType: 'po' };
    /* explorer tree expand state, keyed by node id */
    let explorerOpen = { 'PO-00045': true, 'PO-2025-011': false };

    /* ================= TABLE FILTER / SORT / PAGE STATE ================= */
    const PAGE_SIZE = 10;
    let projectFilters = { search: '', customer: '', engineer: '', status: '' };
    let projectSort = { key: null, dir: 1 };
    let projectPage = 1;
    let projectForm = { mode: 'create', projectId: '', draft: {}, errors: {} };
    let projectBomFilters = { search:'', fgpn:'', type:'' };
    let projectOpsSelectedPo = '';
    let poRollback = { open:false, po:'', reason:'' };

    let poFilters = { search: '', project: '', customer: '', status: '', version: '', simulation: '' };
    let poSort = { key: null, dir: 1 };
    let poPage = 1;
    let poSelected = new Set();
    let poColumns = { version: true, pnCount: true, delivery: true, simulation: true, status: true, lifecycle: true };
    let productionStatusFilter = 'All';
    let colMenuOpen = false;

    let pnFilters = { search: '', status: '', version: '', bom: '', simulation: '' };

    let materialFilters = { search: '', type: '', warehouse: '', missing: '' };
    let poBomUpload = { open:false, po:'', fileName:'', fileSize:'', validated:false, imported:false };
    let bomImport = { open:false, level:'', target:'', stage:'upload', fileName:'', fileSize:'', rows:[], validationRun:false, approvedRows:new Set(), importedRecord:null };

    /* ================= SIMULATION WORKSPACE STATE ================= */
    /* M05-FR-02 / OP-09 baseline: default coefficient 2.0; overrides are versioned and approved. */
    const SAFETY_COEFFICIENT = 2;
    let simScope = 'single';
    let simProject = 'BMW X5';
    let simSelectedPOs = new Set(['PO-00045', 'PO-2025-013']);
    let simSinglePO = 'PO-00045';
    let simSources = { warehouse: true, wip: true, transit: false };
    let simStockBasis = 'real';
    /* M05-FR-02: Safety coefficient defaults to 2.0 under the governed OP-09 baseline.
       Kept as a variable (not a hardcoded literal in the formula) only so Admin-level override is
       possible later without a code change — the UI does not expose it as an editable slider. */
    let simSafetyCoef = SAFETY_COEFFICIENT;
    /* M05-FR-13: 'current' = standard simulation against real stock only.
       'future' = future-stock simulation mode — combines real stock with planned incoming
       quantities, never writes to stored stock, and produces a labeled draft document (FR-16/17). */
    let simMode = 'current';
    let simPriorityRule = 'earliest_delivery';
    let simIncomingMaterials = [
      { material: 'MAT-4471', qty: 300, arrival: '2026-07-20', supplier: 'Amphenol', status: 'Expected' },
      { material: 'MAT-5512', qty: 400, arrival: '2026-07-22', supplier: 'TE Connectivity', status: 'Confirmed' },
    ];
    let simMeetingSaved = false;
    let simMeetingDate = '2026-07-15';
    let simMeetingParticipants = 'A. Haddad, M. Idrissi';
    let simMeetingMinutes = '';
    let simMeetingFileName = '';
    let simMeetingFile = null;
    let simIncomingMaterialDraft = { material: 'MAT-4471', qty: 0, arrival: '2026-07-20', supplier: '', status: 'Expected' };
    let simResult = null;
    let simPoVersion = 'v3';
    let simBomVersion = 'v3';
    let simUseCurrentVersions = true;

    let stockReceipts = [
      { material: 'MAT-5512', qty: 120, supplier: 'TE Connectivity', received: '2026-07-12', status: 'Received' },
      { material: 'MAT-2208', qty: 300, supplier: 'Leoni', received: '2026-07-11', status: 'In Transit' },
    ];
    let stockReceptionDraft = { material:'MAT-5512', qty:0, supplier:'TE Connectivity', received:new Date().toISOString().slice(0,10), destination:'Warehouse', reference:'' };
    let transitMaterials = [
      { code: 'MAT-4471', desc: 'Wiring harness clip', qty: 500, supplier: 'Supplier A', arrival: '2026-06-15', notes: 'Expected to arrive next week', status: 'In Transit' },
      { code: 'MAT-5512', desc: 'Connector housing 4-pin', qty: 100, supplier: 'Supplier B', arrival: '2026-06-13', notes: 'Priority shipment', status: 'In Transit' },
    ];
    let transitDraft = { code: '', desc: '', qty: 0, supplier: '', arrival: '', notes: '', status: 'In Transit' };
    let cutmanImports = [
      { file: 'cutman-20260712.csv', date: '2026-07-12', records: 34, status: 'Imported' },
    ];
    let stockTransferDraft = { code: 'MAT-5512', qty: 30, destination: 'Cutting' };
    let stockTransferLogs = [
      { code: 'MAT-5512', qty: 40, from: 'WIP', to: 'Cutting', date: '2026-07-12', by: 'S. Amrani' },
    ];

    let poVersionSelected = 'v3';
    let bomVersionSelected = 'v3';
    let poVersionCompareA = 'v2';
    let poVersionCompareB = 'v3';
    let bomVersionCompareA = 'v2';
    let bomVersionCompareB = 'v3';
    let versionCompareSearch = '';
    let versionCompareFilters = { Added: true, Modified: true, Removed: true, Moved: true, Unchanged: false };

    /* ================= THRESHOLDS STATE ================= */
    let thresholdEditing = null;
    let thresholdOverrides = {};
    const THRESHOLD_DEFAULTS = {};

    /* ================= NEW: M08 Manufacturing Delivery state ================= */
    let mfgFilters = { search: '', project: '', po: '', status: '', receiver: '', date: '' };
    let mfgSort = { key: null, dir: 1 };
    let mfgPage = 1;
    let mfgWizardStep = 1;
    let mfgWizard = {
      project: 'BMW X5',
      po: 'PO-00045',
      fgpn: 'FG-BX5-100',
      fgpns: ['FG-BX5-100'],
      fgpnQtys: { 'FG-BX5-100': 0 },
      selectedMaterials: {},
      qtys: {},
      itemTimes: {},
      receiver: '',
      deliveryDate: '2026-07-18',
      deliveryTime: '09:00',
      priority: 'Normal',
      notes: '',
      code: '',
      generatedAt: '',
      expiresAt: '',
      approval: null,
      feasibility: null,
    };
    let mfgSimulationContext = { active:false,returnStep:4 };
    let mfgLaunchSimulationResult = null;
    let mfgCodeVerification = { code: '', message: '', validDelivery: null };
    let openMfgDeliveryId = 'MD-0031';
    let mfgActiveTab = 'Overview';
    const MFG_DELIVERY_RECEIVERS = ['Cell 1 — Cutting Line', 'Cell 2 — Terminal Crimping', 'Cell 3 — Harness Assembly', 'Cell 4 — Final Assembly'];

    /* ================= NEW: M09 Customer Delivery state ================= */
    let custFilters = { search: '', customer: '', project: '', po: '', status: '', date: '' };
    let custSort = { key: null, dir: 1 };
    let custPage = 1;
    let custWizardStep = 1;
    let custWizard = { project: 'BMW X5', po: 'PO-00045', fgpn: '', fgpns: [], fgpnQtys: {}, method: 'Truck', tracking: '', deliveryDate: '', address: 'BMW Group Receiving Center', source: 'global' };
    let openCustDeliveryId = 'CD-0018';
    let custActiveTab = 'Overview';

    /* ================= NEW: M10 Finance state ================= */
    let financeTab = 'dashboard'; // dashboard | revenue | invoices | forecast | prices
    let revenueFilters = { project: '', customer: '', month: '', year: '2026' };
    let invoiceFilters = { search: '', project: '', customer: '', status: '' };

    /* ================= NEW: M12 Audit state ================= */
    let auditFilters = { search: '', module: '', project: '', po: '', pn: '', user: '', evidence: '', date: '' };
    let auditSort = { key: null, dir: 1 };
    let auditPage = 1;
    let openAuditId = null;

    /* ================= NEW: M00 Admin state ================= */
    let adminSelectedUserId = 'ADM-001';
    let adminSelectedRole = 'System Administrator';
    let adminReferenceModule = 'customers';
    let adminUserFilters = { search:'', role:'', status:'', security:'' };
    let adminUserForm = { open:false, mode:'create', editingId:'', draft:{}, errors:{} };
    let adminAssignmentDraft = { project:'BMW X5', userId:'ADM-004' };
    let adminReferenceForm = { open:false, mode:'create', editingId:'', draft:{ label:'', project:'', status:'Active' } };
    let adminLoginFilters = { search:'', result:'' };

    /* ================= SAMPLE DATA (existing) ================= */
    const PROJECTS = [
      { id: 'PRJ-001', name: 'BMW X5', customer: 'BMW Group', customerRef: 'G05 LCI', engineer: 'A. Haddad', site: 'Tangier Plant 2', startDate: '2026-01-12', targetDate: '2026-10-15', description: 'Launch readiness and series preparation for the BMW X5 seat program.', status: 'On Track', statusType: 'success', pos: 3, progress: 72, health: 88 },
      { id: 'PRJ-002', name: 'Renault Clio V', customer: 'Renault', customerRef: 'BJA Phase 2', engineer: 'S. Amrani', site: 'Tangier Plant 2', startDate: '2026-02-02', targetDate: '2026-09-30', description: 'Controlled launch preparation for the Clio V program.', status: 'At Risk', statusType: 'warning', pos: 2, progress: 41, health: 54 },
      { id: 'PRJ-003', name: 'Peugeot 208', customer: 'Stellantis', customerRef: 'P21', engineer: 'A. Haddad', site: 'Kenitra Plant', startDate: '2026-03-09', targetDate: '2026-11-20', description: 'Industrial launch project for the Peugeot 208 program.', status: 'Blocked', statusType: 'danger', pos: 1, progress: 18, health: 22 },
      { id: 'PRJ-004', name: 'Dacia Sandero', customer: 'Renault', customerRef: 'DJF', engineer: 'M. Idrissi', site: 'Tangier Plant 2', startDate: '2025-11-17', targetDate: '2026-08-22', description: 'Launch and ramp-up governance for the Sandero program.', status: 'On Track', statusType: 'success', pos: 4, progress: 88, health: 96 },
    ];

    const POS = [
      { id: 'PO-00045', project: 'BMW X5', customer: 'BMW Group', version: 'v3', pnCount: 3, status: 'Ready', statusType: 'success', date: '2026-07-08', delivery: '2026-08-15', simStatus: 'Passed', simType: 'success' },
      { id: 'PO-00046', project: 'BMW X5', customer: 'BMW Group', version: 'v1', pnCount: 2, status: 'Ready', statusType: 'success', date: '2026-07-10', delivery: '2026-08-22', simStatus: 'Passed', simType: 'success' },
      { id: 'PO-00047', project: 'BMW X5', customer: 'BMW Group', version: 'v2', pnCount: 2, status: 'Waiting BOM', statusType: 'warning', date: '2026-07-12', delivery: '2026-08-29', simStatus: 'Not Run', simType: 'neutral' },
      { id: 'PO-2025-013', project: 'Renault Clio V', customer: 'Renault', version: 'v1', pnCount: 2, status: 'Waiting BOM', statusType: 'warning', date: '2026-07-06', delivery: '2026-08-02', simStatus: 'Not Run', simType: 'neutral' },
      { id: 'PO-2025-012', project: 'Peugeot 208', customer: 'Stellantis', version: 'v2', pnCount: 1, status: 'Missing Stock', statusType: 'danger', date: '2026-07-02', delivery: '2026-07-28', simStatus: 'Failed', simType: 'danger' },
      { id: 'PO-2025-011', project: 'Dacia Sandero', customer: 'Renault', version: 'v1', pnCount: 4, status: 'Ready', statusType: 'success', date: '2026-06-29', delivery: '2026-07-20', simStatus: 'Passed', simType: 'success' },
    ];

    /* M02: realistic example of the structured payload returned by PO PDF extraction. */
    const PO_LINE_SEED = [
      ['00001','2026-08-03','SEAT-HARNESS','FG-BX5-100','Front seat wiring harness LH','BMW-7451001',120,145.50],
      ['00002','2026-08-03','SEAT-HARNESS','FG-BX5-101','Front seat wiring harness RH','BMW-7451002',80,142.25],
      ['00003','2026-08-05','SEAT-TRIM','FG-BX5-102','Driver seat cushion trim','BMW-7451003',150,89.40],
      ['00004','2026-08-05','SEAT-TRIM','FG-BX5-103','Passenger seat cushion trim','BMW-7451004',200,74.80],
      ['00005','2026-08-07','SEAT-FRAME','FG-BX5-104','Driver seat back frame','BMW-7451005',60,188.00],
      ['00006','2026-08-07','SEAT-FRAME','FG-BX5-105','Passenger seat back frame','BMW-7451006',90,132.75],
      ['00007','2026-08-10','SEAT-MOTOR','FG-BX5-106','Seat adjustment motor assembly','BMW-7451007',25,245.00],
      ['00008','2026-08-10','SEAT-MOTOR','FG-BX5-107','Lumbar support motor assembly','BMW-7451008',40,198.50],
      ['00009','2026-08-12','SEAT-FOAM','FG-BX5-108','Front seat cushion foam','BMW-7451009',75,96.20],
      ['00010','2026-08-12','SEAT-FOAM','FG-BX5-109','Front seat back foam','BMW-7451010',55,116.80],
      ['00011','2026-08-14','SEAT-HEAT','FG-BX5-110','Heated seat control module','BMW-7451011',30,215.40],
      ['00012','2026-08-14','SEAT-HEAT','FG-BX5-111','Seat heating element','BMW-7451012',110,84.60],
      ['00013','2026-08-17','SEAT-BELT','FG-BX5-112','Seat belt buckle assembly','BMW-7451013',95,102.40],
      ['00014','2026-08-17','SEAT-SENSOR','FG-BX5-113','Occupant detection sensor','BMW-7451014',48,171.50],
      ['00015','2026-08-19','SEAT-TRIM','FG-BX5-114','Rear bench trim cover','BMW-7451015',72,128.90],
      ['00016','2026-08-19','SEAT-FOAM','FG-BX5-115','Rear bench cushion foam','BMW-7451016',100,92.75],
      ['00017','2026-08-21','SEAT-FRAME','FG-BX5-116','Rear seat back frame','BMW-7451017',45,154.20],
      ['00018','2026-08-21','SEAT-HARNESS','FG-BX5-117','Rear seat wiring harness','BMW-7451018',88,107.60],
      ['00019','2026-08-24','SEAT-TRIM','FG-BX5-118','Headrest trim set','BMW-7451019',64,139.30],
      ['00020','2026-08-24','SEAT-FOAM','FG-BX5-119','Headrest foam set','BMW-7451020',130,76.50],
      ['00021','2026-08-26','SEAT-MECH','FG-BX5-120','Seat rail mechanism','BMW-7451021',36,204.80],
      ['00022','2026-08-26','SEAT-MECH','FG-BX5-121','Seat recliner mechanism','BMW-7451022',52,167.90],
      ['00023','2026-08-28','SEAT-TRIM','FG-BX5-122','Armrest leather cover','BMW-7451023',70,121.40],
      ['00024','2026-08-28','SEAT-MECH','FG-BX5-123','Center armrest assembly','BMW-7451024',42,182.60],
    ];
    const PO_EXTRACTION_SAMPLE = {
      po_number: '4500127841',
      version: '1',
      order_date: '2026-07-14',
      change_date: '2026-07-15',
      supplier_no: '100483',
      supplier_name: 'Covers Automotive Components SARL',
      supplier_address: "Zone Franche d'Exportation, Lot 23, Tangier, Morocco",
      buyer_name: 'Adient Automotive Seating Morocco',
      buyer_vat: 'MA40487126',
      buyer_register_nr: 'RC 186245',
      invoicing_party_taxid: 'MA100347829',
      delivery_contact: 'Olivier Martin',
      delivery_address: 'Adient Trim Plant, Tanger Automotive City, Tangier, Morocco',
      payment_terms: 'Immediate payment',
      incoterms: 'DAP Tangier',
      contact_name: 'Olivier Martin',
      contact_tel: '+212 539 40 18 76',
      contact_email: 'olivier.martin@example.com',
      header_text: 'Launch order for BMW X5 pilot-series seating components.',
      currency: 'EUR',
      jit_customer: 'BMW Group',
      development_level: 'DV2',
      engineering_phase: 'Pilot Series',
      reason_of_purchase: 'Launch manufacturing validation',
      stated_total: 0,
      computed_total: 0,
      totals_match: true,
      line_count: 24,
      lines: PO_LINE_SEED.map(row => ({
        line_no: row[0], plant: '1000', due_date: row[1], material_group: row[2], part_number: row[3],
        description: row[4], customer_part_ref: row[5], item_category: 'Standard', quantity: row[6],
        unit_price: row[7], total: Number((row[6] * row[7]).toFixed(2))
      })),
    };
    PO_EXTRACTION_SAMPLE.computed_total = Number(PO_EXTRACTION_SAMPLE.lines.reduce((sum, line) => sum + line.total, 0).toFixed(2));
    PO_EXTRACTION_SAMPLE.stated_total = PO_EXTRACTION_SAMPLE.computed_total;
    let poExtraction = JSON.parse(JSON.stringify(PO_EXTRACTION_SAMPLE));
    let poIntake = {
      step: 1, project: 'BMW X5', fileName: '', fileSize: '', uploadedAt: '', extracted: false,
      validated: false, saved: false, reviewTab: 'header', lineSearch: '', correctedFields: new Set(),
      correctedLines: new Set(), validationMessage: '', storedRecordId: '', sourceFile: null
    };
    /* Retained source documents and validated extraction snapshots for this mockup session. */
    const PO_SOURCE_FILES = new Map();
    const PO_EXTRACTION_RECORDS = new Map();
    let poValidationPage = 1;

    /* M04 + approved role extension: readiness and lifecycle are deliberately separate.
       Production & Packing Coordinator owns In Progress -> Done and Done -> Packaged.
       Launch roles monitor the chain and confirm Delivered only from M09 evidence. */
    const PO_STATUS_FLOW = ['Unplanned', 'In Progress', 'Done', 'Packaged', 'Delivered'];
    const PO_STATUS_OWNER = {
      'Unplanned': 'System · PO intake',
      'In Progress': 'Warehouse TL · signed M08 document',
      'Done': 'Production & Packing Coordinator',
      'Packaged': 'Production & Packing Coordinator',
      'Delivered': 'Launch Engineer · customer evidence',
    };
    const PO_STATUS_TRIGGER = {
      'Unplanned': 'PO uploaded and created',
      'In Progress': 'Signed manufacturing reception PDF uploaded',
      'Done': 'Production completion confirmed',
      'Packaged': 'Packaging completion confirmed',
      'Delivered': 'Final customer delivery confirmed with evidence',
    };
    const PRODUCTION_ORDERS = [
      { id:'WO-1048', po:'PO-00045', project:'BMW X5', customer:'BMW Group', fgpn:'FG-BX5-100', qty:1200, produced:1200, packaged:1200, status:'Packaged', due:'15 Aug', line:'Line A3', updatedBy:'Y. Mansouri', updatedAt:'Today, 08:42', priority:true },
      { id:'WO-1047', po:'PO-00045', project:'BMW X5', customer:'BMW Group', fgpn:'FG-BX5-101', qty:980, produced:760, packaged:0, status:'In Progress', due:'15 Aug', line:'Line A2', updatedBy:'Y. Mansouri', updatedAt:'Today, 08:18', priority:false },
      { id:'WO-1044', po:'PO-2025-011', project:'Dacia Sandero', customer:'Renault', fgpn:'FG-DS-210', qty:2400, produced:2400, packaged:0, status:'Done', due:'20 Jul', line:'Line B1', updatedBy:'N. El Fassi', updatedAt:'Yesterday, 17:26', priority:true },
      { id:'WO-1042', po:'PO-2025-012', project:'Peugeot 208', customer:'Stellantis', fgpn:'FG-P208-050', qty:600, produced:600, packaged:600, status:'Packaged', due:'28 Jul', line:'Line C2', updatedBy:'S. Alaoui', updatedAt:'12 Jul, 15:04', priority:false },
      { id:'WO-1038', po:'PO-2025-013', project:'Renault Clio V', customer:'Renault', fgpn:'FG-RCV-330', qty:640, produced:0, packaged:0, status:'Unplanned', due:'02 Aug', line:'Not assigned', updatedBy:'A. Rahal', updatedAt:'11 Jul, 09:40', priority:false },
      { id:'WO-1031', po:'PO-00045', project:'BMW X5', customer:'BMW Group', fgpn:'FG-BX5-101', qty:300, produced:300, packaged:300, status:'Delivered', due:'28 Jun', line:'Line A1', updatedBy:'A. Haddad', updatedAt:'30 Jun, 14:12', priority:false },
    ];
    const PO_STATUS_HISTORY = [
      { id:'PSH-0014', po:'PO-2025-013', from:null, to:'Unplanned', date:'2026-07-06 17:30', user:'A. Rahal', reason:'PO uploaded and created', evidence:'PO-2025-013_v1.pdf' },
      { id:'PSH-0013', po:'PO-2025-012', from:'Done', to:'Packaged', date:'2026-07-12 15:04', user:'S. Alaoui', reason:'Finished goods packaging completed', evidence:'Packaging confirmation' },
      { id:'PSH-0012', po:'PO-2025-012', from:'In Progress', to:'Done', date:'2026-07-12 11:42', user:'Y. Mansouri', reason:'Production quantity completed', evidence:'Shop floor confirmation' },
      { id:'PSH-0011', po:'PO-2025-012', from:'Unplanned', to:'In Progress', date:'2026-07-08 08:25', user:'M. El Idrissi', reason:'Signed manufacturing reception document uploaded', evidence:'MD-0027_signed.pdf' },
      { id:'PSH-0010', po:'PO-2025-011', from:'In Progress', to:'Done', date:'2026-07-18 17:26', user:'N. El Fassi', reason:'Production completed', evidence:'Shop floor confirmation' },
      { id:'PSH-0009', po:'PO-00045', from:'Unplanned', to:'In Progress', date:'2026-07-11 08:42', user:'M. El Idrissi', reason:'Signed manufacturing reception document uploaded', evidence:'MD-0031_signed.pdf' },
      { id:'PSH-0008', po:'PO-00045', from:null, to:'Unplanned', date:'2026-06-18 11:02', user:'A. Haddad', reason:'PO uploaded and created', evidence:'PO-00045_v1.pdf' },
    ];

    const BUSINESS_RULES = [
      { id:'OP-01', title:'FGPN format', decision:'Store 12 normalized alphanumeric characters; display the customer mask with separators. Keep the validation pattern configurable per customer.', owner:'Launch Manager · Master Data' },
      { id:'OP-02', title:'Launch Manager scope', decision:'Read all projects; write only on explicitly assigned projects. Emergency override is excluded from the baseline.', owner:'Plant Manager · Department Head' },
      { id:'OP-03', title:'Plant Manager access', decision:'Read-only access to all operational dashboards, PO records and audit documents. No business actions or exports containing edit controls.', owner:'Plant Manager · IT Security' },
      { id:'OP-04', title:'Warehouse roles', decision:'Keep distinct accounts. Warehouse Personnel record receptions only; Warehouse Team Leader owns corrections within 24 hours, transfer codes and signed documents.', owner:'Warehouse Manager' },
      { id:'OP-05', title:'Backward status changes', decision:'Only the assigned Launch Engineer may move a PO backward by one reachable status. A written reason is mandatory and the transition, actor, timestamp and reason are stored immutably in status history.', owner:'Launch Manager' },
      { id:'OP-06', title:'Multi-PO priority', decision:'Earliest committed delivery date first, then customer priority class, then PO creation timestamp as the deterministic tie-breaker.', owner:'Launch Manager · Planning' },
      { id:'OP-07', title:'Delivery confirmation', decision:'Accept a signed POD PDF or verified carrier electronic confirmation. Customer email may support the record but is not sufficient on its own.', owner:'Logistics · Launch Manager' },
      { id:'OP-08', title:'Delivery methods', decision:'Seed Truck, DHL and Van as active reference data. The System Administrator may add or deactivate methods without software changes.', owner:'Logistics' },
      { id:'OP-09', title:'Safety coefficient', decision:'Default to 2.0, versioned by project and material class. Any override requires an effective date, reason and Launch Manager approval.', owner:'Launch · Quality · Production' },
      { id:'OP-10', title:'Signed transfer validation', decision:'The assigned Launch Engineer validates the uploaded signed document; Launch Manager is the fallback. Stock updates only after validation.', owner:'Launch Manager · Warehouse Manager' },
      { id:'OP-11', title:'Invoice requirement', decision:'Require an invoice for every confirmed customer delivery unless the delivery is explicitly marked non-invoiceable with a Finance-approved reason.', owner:'Finance' },
      { id:'OP-12', title:'Future-stock draft retention', decision:'Persist every draft as an immutable project audit artifact using the same retention policy as the project audit record.', owner:'Audit · Finance' },
      { id:'OP-13', title:'Delivery code lifetime', decision:'Use a 48-hour, single-use delivery code. The Launch Engineer may regenerate it; each generation and failed access is audited.', owner:'Warehouse Manager · Launch Manager' },
    ];

    /* M01/M06 hierarchy: Project -> PO -> Part Number -> BOM.
       A PO BOM may be uploaded as a multi-FGPN workbook or generated from PN BOMs.
       Validated PO-level rows are mapped back to each FGPN to preserve PN traceability. */
    const PNS = [
      { pn:'PN100', po:'PO-00045', project:'BMW X5', desc:'Front wiring harness', qty:1200, unitPrice:145.50, currency:'EUR', version:'v3', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN100_BOM_v3.xlsx', bomUpdated:'2026-07-10' },
      { pn:'PN101', po:'PO-00045', project:'BMW X5', desc:'Rear light connector set', qty:640, unitPrice:142.25, currency:'EUR', version:'—', status:'Waiting BOM', statusType:'warning', bom:'Missing', bomFile:'—', bomUpdated:'—' },
      { pn:'PN102', po:'PO-00045', project:'BMW X5', desc:'Dashboard harness', qty:980, unitPrice:89.40, currency:'EUR', version:'v3', status:'In Simulation', statusType:'info', bom:'Uploaded', bomFile:'PN102_BOM_v3.xlsx', bomUpdated:'2026-07-10' },
      { pn:'PN103', po:'PO-00046', project:'BMW X5', desc:'Seat module interface harness', qty:400, unitPrice:118.60, currency:'EUR', version:'v1', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN103_BOM_v1.xlsx', bomUpdated:'2026-07-11' },
      { pn:'PN104', po:'PO-00046', project:'BMW X5', desc:'Battery cable assembly', qty:300, unitPrice:134.20, currency:'EUR', version:'v1', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN104_BOM_v1.xlsx', bomUpdated:'2026-07-11' },
      { pn:'PN105', po:'PO-00047', project:'BMW X5', desc:'Occupant sensor harness', qty:520, unitPrice:156.75, currency:'EUR', version:'v1', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN105_BOM_v1.xlsx', bomUpdated:'2026-07-13' },
      { pn:'PN106', po:'PO-00047', project:'BMW X5', desc:'Console power cable', qty:280, unitPrice:97.90, currency:'EUR', version:'—', status:'Waiting BOM', statusType:'warning', bom:'Missing', bomFile:'—', bomUpdated:'—' },
      { pn:'PN201', po:'PO-2025-013', project:'Renault Clio V', desc:'Door harness assembly', qty:760, unitPrice:121.80, currency:'EUR', version:'v1', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN201_BOM_v1.xlsx', bomUpdated:'2026-07-06' },
      { pn:'PN202', po:'PO-2025-013', project:'Renault Clio V', desc:'Console connector kit', qty:640, unitPrice:98.75, currency:'EUR', version:'—', status:'Waiting BOM', statusType:'warning', bom:'Missing', bomFile:'—', bomUpdated:'—' },
      { pn:'PN301', po:'PO-2025-012', project:'Peugeot 208', desc:'Cockpit harness', qty:600, unitPrice:160.00, currency:'EUR', version:'v2', status:'Missing Stock', statusType:'danger', bom:'Uploaded', bomFile:'PN301_BOM_v2.xlsx', bomUpdated:'2026-07-03' },
      { pn:'PN401', po:'PO-2025-011', project:'Dacia Sandero', desc:'Main body harness', qty:2400, unitPrice:62.00, currency:'EUR', version:'v2', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN401_BOM_v2.xlsx', bomUpdated:'2026-06-30' },
      { pn:'PN402', po:'PO-2025-011', project:'Dacia Sandero', desc:'Rear lamp harness', qty:1800, unitPrice:58.50, currency:'EUR', version:'v1', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN402_BOM_v1.xlsx', bomUpdated:'2026-06-30' },
      { pn:'PN403', po:'PO-2025-011', project:'Dacia Sandero', desc:'Door connector set', qty:1800, unitPrice:44.25, currency:'EUR', version:'v1', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN403_BOM_v1.xlsx', bomUpdated:'2026-07-01' },
      { pn:'PN404', po:'PO-2025-011', project:'Dacia Sandero', desc:'Battery cable kit', qty:2400, unitPrice:76.80, currency:'EUR', version:'v3', status:'Ready', statusType:'success', bom:'Uploaded', bomFile:'PN404_BOM_v3.xlsx', bomUpdated:'2026-07-02' },
    ];

    const PO_BOM_FILES = [
      { po:'PO-2025-011', file:'PO-2025-011_BOM_v2.xlsx', version:'v2', fgpnCount:4, materialCount:18, uploadedBy:'M. Idrissi', uploadedAt:'2026-07-02', status:'Validated' },
    ];
    const BOM_IMPORT_RECORDS = [];

    const PO_VERSION_HISTORY = [
      { version: 'v3', current: true, date: '2026-07-08', uploadedBy: 'A. Haddad', comment: 'Updated PN102 quantity and committed delivery dates', status: 'Current', file:'PO-00045_v3.pdf' },
      { version: 'v2', current: false, date: '2026-06-20', uploadedBy: 'A. Haddad', comment: 'Added PN102 and adjusted PN101 quantity', status: 'Previous', file:'PO-00045_v2.pdf' },
      { version: 'v1', current: false, date: '2026-06-01', uploadedBy: 'S. Amrani', comment: 'Initial validated purchase order', status: 'Archived', file:'PO-00045_v1.pdf' },
    ];

    const BOM_VERSION_HISTORY = [
      { version: 'v3', current: true, date: '2026-07-10', uploadedBy: 'A. Haddad', comment: 'Updated wire usage and clip description', status: 'Current', file:'PN100_BOM_v3.xlsx' },
      { version: 'v2', current: false, date: '2026-07-05', uploadedBy: 'A. Haddad', comment: 'Added terminal pin and adjusted wire usage', status: 'Previous', file:'PN100_BOM_v2.xlsx' },
      { version: 'v1', current: false, date: '2026-06-01', uploadedBy: 'S. Amrani', comment: 'Initial validated PN BOM', status: 'Archived', file:'PN100_BOM_v1.xlsx' },
    ];

    const PO_VERSION_SNAPSHOTS = {
      v1: [
        { pn:'PN100', description:'Front wiring harness', quantity:1100, unit:'PCS', dueDate:'2026-08-15', customerRef:'BMW-7451001' },
        { pn:'PN101', description:'Rear light connector set', quantity:600, unit:'PCS', dueDate:'2026-08-15', customerRef:'BMW-7451002' },
      ],
      v2: [
        { pn:'PN100', description:'Front wiring harness', quantity:1200, unit:'PCS', dueDate:'2026-08-15', customerRef:'BMW-7451001' },
        { pn:'PN101', description:'Rear light connector set', quantity:640, unit:'PCS', dueDate:'2026-08-15', customerRef:'BMW-7451002' },
        { pn:'PN102', description:'Dashboard harness', quantity:900, unit:'PCS', dueDate:'2026-08-20', customerRef:'BMW-7451003' },
      ],
      v3: [
        { pn:'PN100', description:'Front wiring harness', quantity:1200, unit:'PCS', dueDate:'2026-08-15', customerRef:'BMW-7451001' },
        { pn:'PN101', description:'Rear light connector set', quantity:640, unit:'PCS', dueDate:'2026-08-15', customerRef:'BMW-7451002' },
        { pn:'PN102', description:'Dashboard harness', quantity:980, unit:'PCS', dueDate:'2026-08-18', customerRef:'BMW-7451003' },
      ],
    };

    const BOM_VERSION_SNAPSHOTS = {
      v1: [
        { material:'MAT-4471', description:'Harness retention clip', materialType:'Connector', usageQty:1, unit:'PCS', supplier:'Amphenol', revision:'A' },
        { material:'MAT-3390', description:'Cable sleeve 8mm', materialType:'Tube', usageQty:1, unit:'M', supplier:'Sumitomo', revision:'A' },
        { material:'MAT-2208', description:'Primary wire 0.5mm red', materialType:'Wire', usageQty:1.8, unit:'M', supplier:'Leoni', revision:'A' },
      ],
      v2: [
        { material:'MAT-4471', description:'Harness retention clip', materialType:'Connector', usageQty:1, unit:'PCS', supplier:'Amphenol', revision:'A' },
        { material:'MAT-3390', description:'Cable sleeve 8mm', materialType:'Tube', usageQty:1, unit:'M', supplier:'Sumitomo', revision:'A' },
        { material:'MAT-2208', description:'Primary wire 0.5mm red', materialType:'Wire', usageQty:2, unit:'M', supplier:'Leoni', revision:'B' },
        { material:'MAT-1207', description:'Terminal pin, gold', materialType:'Terminal', usageQty:1, unit:'PCS', supplier:'Yazaki', revision:'A' },
      ],
      v3: [
        { material:'MAT-4471', description:'Wiring harness clip', materialType:'Connector', usageQty:1, unit:'PCS', supplier:'Amphenol', revision:'B' },
        { material:'MAT-3390', description:'Cable sleeve 8mm', materialType:'Tube', usageQty:1, unit:'M', supplier:'Sumitomo', revision:'A' },
        { material:'MAT-2208', description:'Primary wire 0.5mm red', materialType:'Wire', usageQty:2.2, unit:'M', supplier:'Leoni', revision:'C' },
        { material:'MAT-1207', description:'Terminal pin, gold', materialType:'Terminal', usageQty:1, unit:'PCS', supplier:'Yazaki', revision:'A' },
      ],
    };

    const PO_VERSION_DIFFS = [
      { pn: 'PN101', field: 'Quantity', old: '50', new: '70', change: 'Modified' },
      { pn: 'PN105', field: 'Added', old: '—', new: 'New PN', change: 'Added' },
      { pn: 'PN108', field: 'Description', old: 'Rear dash', new: 'Rear dash with sensor ring', change: 'Modified' },
      { pn: 'PN110', field: 'Removed', old: 'Legacy bracket', new: '—', change: 'Removed' },
      { pn: 'PN115', field: 'Order', old: '4', new: '3', change: 'Moved' },
    ];

    const BOM_VERSION_DIFFS = [
      { material: 'Foam A', field: 'Material', old: 'Foam A', new: 'Foam B', change: 'Modified' },
      { material: 'Clip C', field: 'Added', old: '—', new: 'Clip C', change: 'Added' },
      { material: 'Glue A', field: 'Quantity', old: '5', new: '6', change: 'Modified' },
      { material: 'Tape A', field: 'Removed', old: 'Tape A', new: '—', change: 'Removed' },
      { material: 'Cable D', field: 'Sequence', old: 'Line 3', new: 'Line 1', change: 'Moved' },
    ];

    const PROJECT_BOM_META = { version: 'v3', materialsCount: 24, lastUpload: '2026-07-08', uploadedBy: 'A. Haddad' };
    const SIM_META = { date: '2026-07-10 14:22', executedBy: 'A. Haddad', safetyCoefficient: '2.0 (governed default)', cutmanVersion: 'CM-2026-07-09' };

    const MATERIALS = [
      { code: 'MAT-4471', desc: 'Wiring harness clip', type: 'Connector', supplier: 'Amphenol', required: 1200, warehouse: 5200, cutman: 180, wip: 800, missing: 0, threshold: 500, transit: 120, projects: ['BMW X5', 'Peugeot 208'], pns: ['PN100', 'PN102'] },
      { code: 'MAT-3390', desc: 'Cable sleeve 8mm', type: 'Tube', supplier: 'Sumitomo', required: 640, warehouse: 4800, cutman: 0, wip: 600, missing: 0, threshold: 300, transit: 0, projects: ['BMW X5'], pns: ['PN100'] },
      { code: 'MAT-5512', desc: 'Connector housing 4-pin', type: 'Connector', supplier: 'TE Connectivity', required: 980, warehouse: 4600, cutman: 0, wip: 700, missing: 0, threshold: 600, transit: 200, projects: ['BMW X5', 'Renault Clio V'], pns: ['PN101', 'PN102'] },
      { code: 'MAT-1207', desc: 'Terminal pin, gold', type: 'Terminal', supplier: 'Yazaki', required: 2400, warehouse: 6200, cutman: 0, wip: 500, missing: 0, threshold: 1000, transit: 0, projects: ['Dacia Sandero'], pns: ['PN100'] },
      { code: 'MAT-2208', desc: 'Primary wire 0.5mm red', type: 'Wire', supplier: 'Leoni', required: 3000, warehouse: 7800, cutman: 400, wip: 900, missing: 0, threshold: 1500, transit: 300, projects: ['BMW X5'], pns: ['PN100'] },
      { code: 'MAT-6630', desc: 'PVC tape black 19mm', type: 'Tape', supplier: '3M', required: 180, warehouse: 210, cutman: 0, wip: 0, missing: 0, threshold: 100, transit: 0, projects: ['Renault Clio V'], pns: ['PN101'] },
    ];
    MATERIALS.forEach(m => { THRESHOLD_DEFAULTS[m.code] = m.threshold; });

    /* M05-FR-02/04: BOM Usage — quantity of each material consumed per 1 unit of a given PN.
       This is the real "BOM records (M06)" input the simulation formula requires:
       Material Requirement = BOM Usage x Safety Coefficient x PO Quantity. */
    const BOM_USAGE = {
      'PN100': { 'MAT-4471': 1, 'MAT-3390': 1, 'MAT-2208': 2, 'MAT-1207': 1 },
      'PN101': { 'MAT-6630': 1, 'MAT-5512': 1 },
      'PN102': { 'MAT-4471': 1, 'MAT-5512': 1 },
    };

    /* M05-FR-02: "Quantities already launched" and "Quantities already entered into manufacturing"
       — per-PO figures the simulation must subtract from the raw PO quantity before applying
       the safety coefficient, so a PO already partly launched doesn't re-demand full material. */
    const PO_LAUNCH_PROGRESS = {
      'PO-00045': { qty: 1200, pn: 'PN100', alreadyLaunched: 300, enteredToManufacturing: 150 },
      'PO-00046': { qty: 640, pn: 'PN101', alreadyLaunched: 220, enteredToManufacturing: 0 },
      'PO-00047': { qty: 980, pn: 'PN102', alreadyLaunched: 0, enteredToManufacturing: 0 },
      'PO-2025-013': { qty: 640, pn: 'PN101', alreadyLaunched: 0, enteredToManufacturing: 0 },
      'PO-2025-012': { qty: 980, pn: 'PN102', alreadyLaunched: 0, enteredToManufacturing: 100 },
      'PO-2025-011': { qty: 2400, pn: 'PN100', alreadyLaunched: 1000, enteredToManufacturing: 400 },
    };

    /* M05.4 BP / M05-FR-11: deterministic OP-06 baseline. Earliest committed delivery first;
       customer priority and creation timestamp are the production tie-breakers. */
    const SIM_PRIORITY_RULES = {
      earliest_delivery: { label: 'Earliest delivery date first', sort: (a, b) => new Date(a.delivery) - new Date(b.delivery) },
      highest_value: { label: 'Highest PO value first (by quantity, as a proxy)', sort: (a, b) => (PO_LAUNCH_PROGRESS[b.id]?.qty || 0) - (PO_LAUNCH_PROGRESS[a.id]?.qty || 0) },
    };

    const STOCK_ALERTS = [
      { code: 'MAT-5512', desc: 'Connector housing 4-pin', level: 'Critical', statusType: 'danger' },
      { code: 'MAT-4471', desc: 'Wiring harness clip', level: 'Low', statusType: 'warning' },
    ];

    const HISTORY_STEPS = [
      { title: 'Project created', time: 'Jun 12, 2026 — 09:14', done: true },
      { title: 'PO-00045 uploaded', time: 'Jun 18, 2026 — 11:02', done: true },
      { title: 'BOM validated', time: 'Jun 22, 2026 — 14:37', done: true },
      { title: 'Launch simulation run', time: 'Jul 05, 2026 — 10:20', done: true },
      { title: 'Warehouse allocation', time: 'Jul 09, 2026 — 08:45', done: true },
      { title: 'Production start', time: 'Pending', done: false },
      { title: 'Delivery', time: 'Pending', done: false },
    ];

    const DIFF_MATERIALS = [
      { code: 'MAT-4471', v2: 1000, v3: 1200, changed: true },
      { code: 'MAT-3390', v2: 640, v3: 640, changed: false },
      { code: 'MAT-5512', v2: 750, v3: 980, changed: true },
      { code: 'MAT-1207', v2: 2400, v3: 2100, changed: true },
    ];

    const SIMULATION_HISTORY = [
      { id: 'SIM-0091', date: '2026-07-10 14:22', project: 'BMW X5', pos: ['PO-00045'], executedBy: 'A. Haddad', sources: { warehouse: true, wip: true, transit: false }, safety: 2, result: 'YES', resultType: 'success', maxQty: 150, missingCount: 3 },
      { id: 'SIM-0088', date: '2026-07-08 09:47', project: 'BMW X5', pos: ['PO-00045', 'PO-2025-011'], executedBy: 'A. Haddad', sources: { warehouse: true, wip: true, transit: true }, safety: 2, result: 'YES', resultType: 'success', maxQty: 210, missingCount: 1 },
      { id: 'SIM-0084', date: '2026-07-05 16:03', project: 'Peugeot 208', pos: ['PO-2025-012'], executedBy: 'A. Haddad', sources: { warehouse: true, wip: false, transit: false }, safety: 2, result: 'NO', resultType: 'danger', maxQty: 0, missingCount: 6 },
      { id: 'SIM-0079', date: '2026-07-02 11:15', project: 'Renault Clio V', pos: ['PO-2025-013'], executedBy: 'S. Amrani', sources: { warehouse: true, wip: true, transit: false }, safety: 2, result: 'NO', resultType: 'danger', maxQty: 40, missingCount: 2 },
      { id: 'SIM-0073', date: '2026-06-29 08:30', project: 'Dacia Sandero', pos: ['PO-2025-011'], executedBy: 'M. Idrissi', sources: { warehouse: true, wip: true, transit: true }, safety: 2, result: 'YES', resultType: 'success', maxQty: 320, missingCount: 0 },
    ];

    /* ================= NEW SAMPLE DATA: M08 Manufacturing Deliveries (fictional) ================= */
    const MFG_DELIVERIES = [
      {
        code:'MD-0032', project:'BMW X5', po:'PO-00046', receiver:'Cell 4 — Final Assembly', date:'2026-07-16', status:'Delivered', statusType:'success', lifecycleStatus:'In Progress',
        fgpn:'FG-BX5-103', fgpns:['FG-BX5-103','FG-BX5-104'], fgpnQuantities:[
          { fgpn:'FG-BX5-103', qty:200, ordered:400, status:'In Progress', producedQty:0, packagedQty:0, customerDeliveredQty:0 },
          { fgpn:'FG-BX5-104', qty:300, ordered:300, status:'Done', producedQty:300, packagedQty:0, customerDeliveredQty:0 },
        ],
        materials:[
          { code:'MAT-4471', desc:'Wiring harness clip', required:500, warehouse:820, qty:500, unit:'PCS', fgpns:['FG-BX5-103','FG-BX5-104'], requiredTime:'2026-07-16T08:00' },
        ], docUploaded:true, signedFileName:'MD-0032_signed.pdf', signedBy:'M. El Idrissi', signedAt:'2026-07-16 07:45', notes:'Active split launch for production and packing coordination.'
      },
      {
        code: 'MD-0031', project: 'BMW X5', po: 'PO-00045', receiver: 'Cell 3 — Harness Assembly', date: '2026-07-11', status: 'Delivered', statusType: 'success',
        lifecycleStatus: 'Packaged', fgpn: 'FG-BX5-100', fgpns: ['FG-BX5-100','FG-BX5-101'], fgpnQuantities: [
          { fgpn:'FG-BX5-100', qty:800, ordered:1200, status:'Packaged', producedQty:800, packagedQty:800, customerDeliveredQty:0 },
          { fgpn:'FG-BX5-101', qty:640, ordered:640, status:'Packaged', producedQty:640, packagedQty:640, customerDeliveredQty:0 },
        ],
        materials: [
          { code: 'MAT-4471', desc: 'Wiring harness clip', required: 1200, warehouse: 820, qty: 800 },
          { code: 'MAT-3390', desc: 'Cable sleeve 8mm', required: 640, warehouse: 640, qty: 640 },
        ], docUploaded: true, notes: 'Delivered ahead of schedule for line trial.'
      },
      {
        code: 'MD-0030', project: 'BMW X5', po: 'PO-00045', receiver: 'Cell 1 — Cutting Line', date: '2026-07-09', status: 'In Transit', statusType: 'info',
        lifecycleStatus: 'Unplanned', fgpn: 'FG-BX5-100', fgpns: ['FG-BX5-100'], fgpnQuantities: [
          { fgpn:'FG-BX5-100', qty:400, ordered:1200, status:'Unplanned', producedQty:0, packagedQty:0, customerDeliveredQty:0 },
        ],
        materials: [
          { code: 'MAT-2208', desc: 'Primary wire 0.5mm red', required: 3000, warehouse: 1900, qty: 1500 },
        ], docUploaded: false, notes: ''
      },
      {
        code: 'MD-0029', project: 'Dacia Sandero', po: 'PO-2025-011', receiver: 'Cell 2 — Terminal Crimping', date: '2026-07-06', status: 'Pending Approval', statusType: 'warning',
        lifecycleStatus: 'Unplanned', fgpn: 'FG-DS-210', fgpns: ['FG-DS-210'], fgpnQuantities: [
          { fgpn:'FG-DS-210', qty:2000, ordered:2400, status:'Unplanned', producedQty:0, packagedQty:0, customerDeliveredQty:0 },
        ],
        materials: [
          { code: 'MAT-1207', desc: 'Terminal pin, gold', required: 2400, warehouse: 2400, qty: 2000 },
        ], docUploaded: false, notes: 'Awaiting manager sign-off.'
      },
      {
        code: 'MD-0028', project: 'Renault Clio V', po: 'PO-2025-013', receiver: 'Cell 3 — Harness Assembly', date: '2026-07-01', status: 'Cancelled', statusType: 'danger',
        lifecycleStatus: 'Unplanned', fgpn: 'FG-RCV-330', fgpns: ['FG-RCV-330'], fgpnQuantities: [
          { fgpn:'FG-RCV-330', qty:0, ordered:760, status:'Unplanned', producedQty:0, packagedQty:0, customerDeliveredQty:0 },
        ],
        materials: [
          { code: 'MAT-5512', desc: 'Connector housing 4-pin', required: 980, warehouse: 410, qty: 0 },
        ], docUploaded: false, notes: 'Cancelled — PO version changed after request.'
      },
      {
        code: 'MD-0027', project: 'Peugeot 208', po: 'PO-2025-012', receiver: 'Cell 1 — Cutting Line', date: '2026-06-27', status: 'Delivered', statusType: 'success',
        lifecycleStatus: 'Packaged', fgpn: 'FG-P208-050', fgpns: ['FG-P208-050'], fgpnQuantities: [
          { fgpn:'FG-P208-050', qty:600, ordered:600, status:'Packaged', producedQty:600, packagedQty:600, customerDeliveredQty:0 },
        ],
        materials: [
          { code: 'MAT-6630', desc: 'PVC tape black 19mm', required: 180, warehouse: 210, qty: 180 },
        ], docUploaded: true, notes: ''
      },
    ];

    /* ================= NEW SAMPLE DATA: M09 Customer Deliveries (fictional) ================= */
    /* M09-FR-04/05: delivery method list, maintained by System Administrator. Currently: Truck, DHL, Van (pending business confirmation — Open Point OP-08). */
    const DELIVERY_METHOD_COSTS = { 'Truck': 4500, 'DHL': 1800, 'Van': 2200 };
    function transportCostFor(method) { return DELIVERY_METHOD_COSTS[method] != null ? DELIVERY_METHOD_COSTS[method] : 0; }

    const CUST_DELIVERIES = [
      { code: 'CD-0018', customer: 'BMW Group', project: 'BMW X5', po: 'PO-00045', fgpn: 'FG-BX5-100', qty: 900, delivered: 900, method: 'Truck', tracking: 'TRK-88213-MA', date: '2026-07-15', status: 'Delivered', statusType: 'success', transportCost: 4500, unitValue: 145,
        shipments: [
          { id: 'SH-1', date: '2026-07-10', week: 'W28', po: 'PO-00045', fgpn: 'FG-BX5-100', description: '', level: 'Partial', qty: 900, method: 'Truck', value: 900 * 145, status: 'Delivered', statusType: 'success',
            confirmation: { date: '2026-07-12', method: 'Signed POD', confirmedBy: 'H. Vogel (BMW Group)', reference: 'POD-2026-3401', evidence: 'POD-2026-3401.pdf', comments: 'First batch received in full.' } },
        ] },
      { code: 'CD-0017', customer: 'Renault', project: 'Dacia Sandero', po: 'PO-2025-011', fgpn: 'FG-DS-210', qty: 2400, delivered: 2400, method: 'DHL', tracking: 'TRK-77410-CT', date: '2026-07-05', status: 'Awaiting Confirmation', statusType: 'warning', transportCost: 1800, unitValue: 62,
        shipments: [
          { id: 'SH-1', date: '2026-07-01', week: 'W27', po: 'PO-2025-011', fgpn: 'FG-DS-210', description: '', level: 'Partial', qty: 1200, method: 'DHL', value: 1200 * 62, status: 'Shipped', statusType: 'info', confirmation: null },
          { id: 'SH-2', date: '2026-07-05', week: 'W27', po: 'PO-2025-011', fgpn: 'FG-DS-210', description: '', level: 'Partial', qty: 1200, method: 'DHL', value: 1200 * 62, status: 'Shipped', statusType: 'info', confirmation: null },
        ] },
      { code: 'CD-0016', customer: 'Stellantis', project: 'Peugeot 208', po: 'PO-2025-012', fgpn: 'FG-P208-050', qty: 600, delivered: 0, method: 'Truck', tracking: '—', date: '2026-07-20', status: 'Created', statusType: 'neutral', transportCost: 4500, unitValue: 88,
        shipments: [] },
      { code: 'CD-0015', customer: 'Renault', project: 'Renault Clio V', po: 'PO-2025-013', fgpn: 'FG-RCV-330', qty: 640, delivered: 0, method: 'Van', tracking: '—', date: '2026-07-25', status: 'Packed', statusType: 'warning', transportCost: 2200, unitValue: 121,
        shipments: [] },
      { code: 'CD-0014', customer: 'BMW Group', project: 'BMW X5', po: 'PO-00045', fgpn: 'FG-BX5-102', qty: 980, delivered: 980, method: 'Truck', tracking: 'TRK-65302-MA', date: '2026-06-28', status: 'Delivered', statusType: 'success', transportCost: 4500, unitValue: 89.4,
        shipments: [
          { id: 'SH-1', date: '2026-06-28', week: 'W26', po: 'PO-00045', fgpn: 'FG-BX5-102', description: '', level: 'Full', qty: 980, method: 'Truck', value: 980 * 89.4, status: 'Delivered', statusType: 'success',
            confirmation: { date: '2026-06-30', method: 'Signed POD', confirmedBy: 'H. Vogel (BMW Group)', reference: 'POD-2026-3391', evidence: 'POD-2026-3391.pdf', comments: 'Received in full, no damage reported.' } },
        ] },
    ];
    const CUST_DELIVERY_STEPS = ['Created', 'Packed', 'Shipped', 'Partially Delivered', 'Awaiting Confirmation', 'Delivered'];
    const CONFIRMATION_METHODS = ['Signed POD', 'Customer Email', 'Courier Confirmation', 'Electronic Signature', 'Other'];

    /* ================= NEW SAMPLE DATA: M10 Finance (fictional) ================= */
    const REVENUE_ROWS = [
      { project: 'BMW X5', customer: 'BMW Group', revenue: 842000, forecast: 900000 },
      { project: 'Renault Clio V', customer: 'Renault', revenue: 311000, forecast: 410000 },
      { project: 'Peugeot 208', customer: 'Stellantis', revenue: 96000, forecast: 280000 },
      { project: 'Dacia Sandero', customer: 'Renault', revenue: 604000, forecast: 590000 },
    ];
    const INVOICES = [
      { id: 'INV-2026-0142', project: 'BMW X5', customer: 'BMW Group', amount: 212500, status: 'Paid', statusType: 'success', date: '2026-06-30' },
      { id: 'INV-2026-0143', project: 'Dacia Sandero', customer: 'Renault', amount: 151000, status: 'Paid', statusType: 'success', date: '2026-07-02' },
      { id: 'INV-2026-0144', project: 'Renault Clio V', customer: 'Renault', amount: 77500, status: 'Outstanding', statusType: 'warning', date: '2026-07-08' },
      { id: 'INV-2026-0145', project: 'Peugeot 208', customer: 'Stellantis', amount: 96000, status: 'Overdue', statusType: 'danger', date: '2026-06-15' },
      { id: 'INV-2026-0146', project: 'BMW X5', customer: 'BMW Group', amount: 210000, status: 'Draft', statusType: 'neutral', date: '2026-07-11' },
    ];
    const PRICES = [
      { fgpn: 'FG-BX5-100', customer: 'BMW Group', price: 702, updated: '2026-05-12' },
      { fgpn: 'FG-BX5-101', customer: 'BMW Group', price: 615, updated: '2026-05-12' },
      { fgpn: 'FG-DS-210', customer: 'Renault', price: 251, updated: '2026-04-02' },
      { fgpn: 'FG-P208-050', customer: 'Stellantis', price: 160, updated: '2026-03-18' },
      { fgpn: 'FG-RCV-330', customer: 'Renault', price: 121, updated: '2026-06-01' },
    ];
    const FORECAST_ROWS = [
      { month: 'Feb 2026', forecast: 520000, actual: 498000 },
      { month: 'Mar 2026', forecast: 560000, actual: 571000 },
      { month: 'Apr 2026', forecast: 590000, actual: 552000 },
      { month: 'May 2026', forecast: 610000, actual: 634000 },
      { month: 'Jun 2026', forecast: 640000, actual: 611000 },
      { month: 'Jul 2026', forecast: 670000, actual: null },
    ];

    /* ================= NEW SAMPLE DATA: M12 Audit Logs (fictional) ================= */
    const AUDIT_LOGS = [
      { id: 'AUD-10231', date: '2026-07-11 16:42', user: 'A. Haddad', module: 'Manufacturing Delivery', action: 'Confirmed', entity: 'MD-0031', project: 'BMW X5', po: 'PO-00045', details: 'Delivery MD-0031 confirmed as delivered to Cell 3.' },
      { id: 'AUD-10230', date: '2026-07-11 09:03', user: 'A. Haddad', module: 'Simulation', action: 'Executed', entity: 'SIM-0091', project: 'BMW X5', po: 'PO-00045', details: 'Simulation run with versioned safety coefficient 2.0 — result YES.' },
      { id: 'AUD-10229', date: '2026-07-10 14:22', user: 'S. Amrani', module: 'Purchase Order', action: 'Version Changed', entity: 'PO-2025-012', project: 'Peugeot 208', po: 'PO-2025-012', details: 'PO version bumped from v1 to v2.', diff: { field: 'Version', old: 'v1', new: 'v2' } },
      { id: 'AUD-10228', date: '2026-07-09 11:15', user: 'A. Haddad', module: 'BOM', action: 'Uploaded', entity: 'PO-00045 BOM v3', project: 'BMW X5', po: 'PO-00045', details: 'Project BOM updated to version 3, 24 materials.' },
      { id: 'AUD-10227', date: '2026-07-08 08:51', user: 'M. Idrissi', module: 'Stock', action: 'Threshold Modified', entity: 'MAT-4471', project: '—', po: '—', details: 'Low-stock threshold changed from 500 to 650.', diff: { field: 'Threshold', old: '500', new: '650' } },
      { id: 'AUD-10226', date: '2026-07-06 17:30', user: 'S. Amrani', module: 'Finance', action: 'Invoice Uploaded', entity: 'INV-2026-0144', project: 'Renault Clio V', po: 'PO-2025-013', details: 'Invoice INV-2026-0144 uploaded, amount €77,500.00.' },
      { id: 'AUD-10225', date: '2026-07-05 10:02', user: 'A. Haddad', module: 'Customer Delivery', action: 'Shipped', entity: 'CD-0018', project: 'BMW X5', po: 'PO-00045', details: 'Customer delivery CD-0018 marked as shipped, tracking TRK-88213-MA.' },
      { id: 'AUD-10224', date: '2026-06-29 08:30', user: 'M. Idrissi', module: 'Simulation', action: 'Executed', entity: 'SIM-0073', project: 'Dacia Sandero', po: 'PO-2025-011', details: 'Simulation run — result YES, max qty 320.' },
    ];
    const AUDIT_ENTITY_TIMELINE = [
      { title: 'Project Created', done: true },
      { title: 'PO Uploaded', done: true },
      { title: 'BOM Uploaded', done: true },
      { title: 'Simulation Executed', done: true },
      { title: 'Stock Updated', done: true },
      { title: 'Manufacturing Delivery', done: true },
      { title: 'Customer Delivery', done: false },
      { title: 'Invoice Uploaded', done: false },
    ];

    /* ================= NEW SAMPLE DATA: M00 Administration (fictional) ================= */
    const ADMIN_USERS = [
      { id:'ADM-001', name:'R. Benali', fullName:'Rachid Benali', username:'r.benali', email:'r.benali@launchops.example', role:'System Administrator', status:'Active', locked:false, failedAttempts:0, lastLogin:'2026-07-21 08:30', projects:[], phone:'+212 6 12 34 56 78', auth:'Password', location:'IT Administration' },
      { id:'ADM-002', name:'S. Ait Oubou', fullName:'Sara Ait Oubou', username:'s.aitoubou', email:'s.aitoubou@launchops.example', role:'Launch Manager', status:'Active', locked:false, failedAttempts:0, lastLogin:'2026-07-20 16:10', projects:['Peugeot 208'], phone:'+212 6 11 22 33 44', auth:'Password', location:'Launch Department' },
      { id:'ADM-003', name:'M. El Idrissi', fullName:'Mehdi El Idrissi', username:'m.elidrissi', email:'m.elidrissi@launchops.example', role:'Warehouse Team Leader', status:'Active', locked:true, failedAttempts:5, lastLogin:'2026-07-20 07:05', projects:[], phone:'+212 6 44 55 66 77', auth:'Password', location:'Main Warehouse' },
      { id:'ADM-004', name:'A. Rahal', fullName:'Amina Rahal', username:'a.rahal', email:'a.rahal@launchops.example', role:'Launch Engineer', status:'Active', locked:false, failedAttempts:1, lastLogin:'2026-07-20 18:40', projects:['Renault Clio V','BMW X5'], phone:'+212 6 98 76 54 32', auth:'Password', location:'Tangier Plant 2' },
      { id:'ADM-005', name:'Y. Mansouri', fullName:'Youssef Mansouri', username:'y.mansouri', email:'y.mansouri@launchops.example', role:'Production & Packing Coordinator', status:'Active', locked:false, failedAttempts:0, lastLogin:'2026-07-21 06:52', projects:[], phone:'+212 6 33 18 21 40', auth:'Password', location:'Tangier Production & Packaging' },
      { id:'ADM-006', name:'S. Alaoui', fullName:'Salma Alaoui', username:'s.alaoui', email:'s.alaoui@launchops.example', role:'Production & Packing Coordinator', status:'Active', locked:false, failedAttempts:0, lastLogin:'2026-07-21 07:14', projects:[], phone:'+212 6 71 42 16 83', auth:'Password', location:'Tangier Production & Packaging' },
      { id:'ADM-007', name:'I. Chafai', fullName:'Imane Chafai', username:'i.chafai', email:'i.chafai@launchops.example', role:'Warehouse Personnel', status:'Inactive', locked:false, failedAttempts:0, lastLogin:'2026-06-28 15:22', projects:[], phone:'+212 6 44 70 18 91', auth:'Password', location:'Main Warehouse' },
      { id:'ADM-008', name:'K. Benali', fullName:'Karim Benali', username:'k.benali', email:'k.benali@launchops.example', role:'Plant Manager', status:'Active', locked:false, failedAttempts:0, lastLogin:'2026-07-20 17:45', projects:[], phone:'+212 6 18 30 44 62', auth:'Password', location:'Tangier Plant 2' },
    ];
    const ADMIN_ASSIGNMENTS = [
      { user:'S. Ait Oubou',project:'Peugeot 208',role:'Responsible Manager' },
      { user:'A. Rahal',project:'Renault Clio V',role:'Responsible Engineer' },
      { user:'A. Rahal',project:'BMW X5',role:'Responsible Engineer' },
    ];
    const ADMIN_REFERENCE_LISTS = {
      customers:{ label:'JIT Customers', fields:'Customer name', entries:[
        { id:'CUS-001',label:'BMW Group',status:'Active',linkedRecords:3,project:'' },{ id:'CUS-002',label:'Renault',status:'Active',linkedRecords:3,project:'' },{ id:'CUS-003',label:'Stellantis',status:'Active',linkedRecords:1,project:'' },
      ]},
      contacts:{ label:'Contact Names', fields:'Contact name', entries:[
        { id:'CON-001',label:'Olivier Martin',status:'Active',linkedRecords:2,project:'' },{ id:'CON-002',label:'Nadia Bennis',status:'Active',linkedRecords:1,project:'' },{ id:'CON-003',label:'Former Customer Contact',status:'Inactive',linkedRecords:4,project:'' },
      ]},
      fgpn:{ label:'Finished Goods Part Numbers', fields:'FGPN and project', entries:[
        { id:'FG-BX5-100',label:'FG-BX5-100',status:'Active',linkedRecords:2,project:'BMW X5' },{ id:'FG-BX5-101',label:'FG-BX5-101',status:'Active',linkedRecords:1,project:'BMW X5' },{ id:'FG-RCV-330',label:'FG-RCV-330',status:'Active',linkedRecords:1,project:'Renault Clio V' },
      ]},
      receivers:{ label:'Manufacturing Receivers', fields:'Receiver name', entries:MFG_DELIVERY_RECEIVERS.map((label,index) => ({ id:`RCV-${String(index+1).padStart(3,'0')}`,label,status:'Active',linkedRecords:index < 3 ? index+1 : 0,project:'' })) },
      methods:{ label:'Delivery Methods', fields:'Method name', entries:[
        { id:'MET-001',label:'Truck',status:'Active',linkedRecords:4,project:'' },{ id:'MET-002',label:'DHL',status:'Active',linkedRecords:2,project:'' },{ id:'MET-003',label:'Van',status:'Active',linkedRecords:1,project:'' },
      ]},
      materialTypes:{ label:'Material Types', fields:'Material type', entries:[
        { id:'MT-001',label:'Wire',status:'Active',linkedRecords:8,project:'' },{ id:'MT-002',label:'Connector',status:'Active',linkedRecords:6,project:'' },{ id:'MT-003',label:'Tape',status:'Active',linkedRecords:3,project:'' },{ id:'MT-004',label:'Tube',status:'Active',linkedRecords:2,project:'' },
      ]},
    };
    const ADMIN_ACTIVITY = [];
    const ADMIN_LOGIN_EVENTS = [
      { time:'2026-07-21 08:31',username:'r.benali',result:'Successful',source:'10.24.8.14',reason:'Authenticated' },
      { time:'2026-07-21 08:12',username:'y.mansouri',result:'Successful',source:'10.24.22.31',reason:'Authenticated' },
      { time:'2026-07-21 07:58',username:'m.elidrissi',result:'Failed',source:'10.24.8.90',reason:'Account locked after 5 failed attempts' },
      { time:'2026-07-21 07:57',username:'m.elidrissi',result:'Failed',source:'10.24.8.90',reason:'Incorrect password · attempt 5 of 5' },
      { time:'2026-07-21 07:55',username:'m.elidrissi',result:'Failed',source:'10.24.8.90',reason:'Incorrect password · attempt 4 of 5' },
      { time:'2026-07-21 07:42',username:'s.alaoui',result:'Successful',source:'10.24.24.17',reason:'Authenticated' },
      { time:'2026-07-20 16:05',username:'i.chafai',result:'Failed',source:'10.24.18.42',reason:'Account inactive' },
    ];
    /* ================= GLOBAL SEARCH INDEX ================= */
    function buildSearchIndex() {
      const idx = [];
      PROJECTS.forEach(p => idx.push({ type: 'Project', label: p.name, sub: p.customer, action: `openProject('${p.id}')` }));
      POS.forEach(p => idx.push({ type: 'Purchase Order', label: p.id, sub: p.project, action: `openPo('${p.id}')` }));
      PNS.forEach(p => idx.push({ type: 'PN', label: p.pn, sub: p.desc, action: `openPn('${p.pn}')` }));
      MATERIALS.forEach(m => idx.push({ type: 'Material', label: m.code, sub: m.desc, action: `navigate('material-detail')` }));
      MFG_DELIVERIES.forEach(d => idx.push({ type: 'Manufacturing Delivery', label: d.code, sub: d.project, action: `openMfgDelivery('${d.code}')` }));
      CUST_DELIVERIES.forEach(d => idx.push({ type: 'Customer Delivery', label: d.code, sub: d.customer, action: `openCustDelivery('${d.code}')` }));
      INVOICES.forEach(i => idx.push({ type: 'Invoice', label: i.id, sub: i.project, action: `navigate('finance-invoices')` }));
      return idx;
    }
    const SEARCH_INDEX = buildSearchIndex();

    /* ================= GLOBAL NOTIFICATIONS (extended per spec) ================= */
    const NOTIFICATIONS = [
      { icon: 'danger', title: 'PO waiting validation', sub: 'PO-2025-013 — Renault Clio V needs review', time: '8 min ago' },
      { icon: 'warning', title: 'BOM missing', sub: 'PN101 — Renault Clio V has no BOM uploaded', time: '12 min ago' },
      { icon: 'danger', title: 'Stock below threshold', sub: 'MAT-5512 — Connector housing 4-pin', time: '1 hr ago' },
      { icon: 'success', title: 'Simulation completed', sub: 'PO-00045 — Launch: YES', time: 'Yesterday' },
      { icon: 'success', title: 'Manufacturing Delivery created', sub: 'MD-0031 delivered to Cell 3', time: 'Yesterday' },
      { icon: 'warning', title: 'Customer Delivery fully shipped', sub: 'CD-0017 awaiting confirmation from Renault', time: '2 days ago' },
      { icon: 'purple', title: 'Invoice uploaded', sub: 'INV-2026-0144 — Renault Clio V, €77,500.00', time: '3 days ago' },
      { icon: 'brown', title: 'Forecast updated', sub: 'July 2026 forecast revised to €670,000.00', time: '4 days ago' },
    ];
    const NOTIF_ICON_COLOR = { danger: 'var(--danger)', warning: 'var(--warning)', success: 'var(--success)', info: 'var(--info)', purple: 'var(--purple)', brown: 'var(--brown)' };

    /* ================= NAV RENDER ================= */
    function renderNav() {
      const items = NAV[currentRole] || [];
      let html = '';
      items.forEach(item => {
        if (item.children) {
          const isExpanded = expandedGroups[item.id] ?? item.children.some(c => c.id === currentPage);
          const groupActive = item.children.some(c => c.id === currentPage);
          html += `<div class="nav-group">
        <div class="nav-item ${isExpanded ? 'expanded' : ''} ${groupActive && !isExpanded ? 'active' : ''}" onclick="toggleGroup('${item.id}')">
          ${icon(item.icon)} <span>${item.label}</span> ${chevIcon}
        </div>
        <div class="nav-children ${isExpanded ? 'open' : ''}">
          ${item.children.map(c => `<div class="nav-sub ${c.id === currentPage ? 'active' : ''}" onclick="navigate('${c.id}')">${c.label}</div>`).join('')}
        </div>
      </div>`;
        } else {
          const sectionPages = {
            'project-list': ['project-list','project-workspace','project-form'],
            'mfg-delivery-list': ['mfg-delivery-list','mfg-delivery-create','mfg-delivery-workspace','mfg-delivery-verify','mfg-delivery-history'],
            'cust-delivery-list': ['cust-delivery-list','cust-delivery-create','cust-delivery-workspace','cust-delivery-history'],
            'finance-dashboard': ['finance-dashboard','finance-revenue','finance-invoices','finance-forecast','finance-prices'],
            'audit-logs': ['audit-logs','audit-detail'],
          };
          const directActive = (sectionPages[item.id] || [item.id]).includes(currentPage);
          html += `<div class="nav-item ${directActive ? 'active' : ''}" onclick="navigate('${item.id}')">${icon(item.icon)} <span>${item.label}</span></div>`;
        }
      });
      document.getElementById('navScroll').innerHTML = html;
    }
    function toggleGroup(id) { expandedGroups[id] = !(expandedGroups[id] ?? true); renderNav(); }
    function toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      const isMobile = window.innerWidth <= 980;
      if (isMobile) {
        sidebar.classList.toggle('mobile-open');
        return;
      }
      sidebarCollapsed = !sidebarCollapsed;
      sidebar.classList.toggle('collapsed', sidebarCollapsed);
      localStorage.setItem('sidebarCollapsed', JSON.stringify(sidebarCollapsed));
    }
    function initSidebarState() {
      const sidebar = document.querySelector('.sidebar');
      const isMobile = window.innerWidth <= 980;
      if (isMobile) {
        sidebar.classList.remove('collapsed');
      } else {
        sidebar.classList.toggle('collapsed', sidebarCollapsed);
      }
    }
    window.addEventListener('resize', initSidebarState);
    function captureNavigationState() {
      return {
        page: currentPage,
        openContext: { ...openContext },
        activeTab: { ...activeTab },
        openMfgDeliveryId,
        mfgActiveTab,
        openCustDeliveryId,
        custActiveTab,
        projectOpsSelectedPo,
        scrollY: window.scrollY || 0,
      };
    }
    function restoreNavigationState(state) {
      currentPage = state.page === 'sim-history' ? 'sim-launch' : (state.page === 'production-board' ? 'po-list' : state.page);
      openContext = { ...openContext, ...(state.openContext || {}) };
      activeTab = { ...activeTab, ...(state.activeTab || {}) };
      openMfgDeliveryId = state.openMfgDeliveryId || openMfgDeliveryId;
      mfgActiveTab = state.mfgActiveTab || 'Overview';
      openCustDeliveryId = state.openCustDeliveryId || openCustDeliveryId;
      custActiveTab = state.custActiveTab || 'Overview';
      projectOpsSelectedPo = state.projectOpsSelectedPo || '';
      notifOpen = false; qaOpen = false; gsOpen = false;
      renderAll();
      requestAnimationFrame(() => window.scrollTo({ top:Number(state.scrollY || 0), behavior:'auto' }));
    }
    function navigationStateLabel(state) {
      if (!state) return 'previous page';
      const context = state.openContext || {};
      return ({
        dashboard:'Dashboard',
        'project-list':'Projects',
        'project-workspace':`${context.project || 'Project'} workspace`,
        'po-list':'Purchase Orders',
        'po-workspace':`${context.po || 'PO'} workspace`,
        'pn-workspace':`${context.pn || 'PN'} workspace`,
        'po-upload':'PO upload',
        'mfg-delivery-list':'Manufacturing Deliveries',
        'mfg-delivery-create':'Manufacturing Delivery',
        'cust-delivery-list':'Customer Deliveries',
        'cust-delivery-create':'Customer Delivery',
        'sim-launch':'Simulation',
      })[state.page] || (PAGE_META[state.page]?.crumb?.slice(-1)[0]?.l || 'previous page');
    }
    function restorePreviousNavigation(fallbackPage = 'dashboard') {
      const previous = navigationHistory.pop();
      if (previous) return restoreNavigationState(previous);
      navigate(fallbackPage,{ replace:true });
    }
    function navigateBack(fallbackPage = 'dashboard') {
      navigationBackFallback = fallbackPage;
      if (navigationBrowserDepth > 0) {
        window.history.back();
        return;
      }
      restorePreviousNavigation(fallbackPage);
    }
    function resetBrowserNavigationState() {
      navigationBrowserDepth = 0;
      try { window.history.replaceState({ launchOpsNavigation:true, depth:0 },'',window.location.href); } catch (error) { /* file preview fallback */ }
    }
    window.addEventListener('popstate',event => {
      const previousDepth = navigationBrowserDepth;
      navigationBrowserDepth = Math.max(0,Number(event.state?.depth || 0));
      if (navigationBrowserDepth < previousDepth) restorePreviousNavigation(navigationBackFallback);
      navigationBackFallback = 'dashboard';
    });
    resetBrowserNavigationState();
    function setRole(role) { currentRole = role; expandedGroups = {}; currentPage = 'dashboard'; navigationHistory = []; resetBrowserNavigationState(); productionStatusFilter = 'All'; poSelected.clear(); renderAll(); launchApiInit(); }
    function navigate(page, options = {}) {
      if (page === 'sim-history') page = 'sim-launch';
      if (page === 'production-board') page = 'po-list';
      if (page === 'project-create') {
        openProjectForm('create');
        return;
      }
      const administratorPages = new Set(['admin-users', 'admin-roles', 'admin-project-assignments', 'admin-reference-data', 'admin-system-activity', 'admin-user-details']);
      if (administratorPages.has(page) && currentRole !== 'admin') {
        openModal('Administrator access required', 'This workspace is available only to the System Administrator.');
        return;
      }
      const adminAllowedPages = new Set(['dashboard', 'profile', 'admin-users', 'admin-roles', 'admin-project-assignments', 'admin-reference-data', 'admin-system-activity', 'admin-user-details']);
      if (currentRole === 'admin' && !adminAllowedPages.has(page)) {
        openModal('Restricted workspace', 'Administrators access the administration workspace only. Engineering, warehouse, and finance workflows remain unavailable for this role.');
        currentPage = 'admin-users';
        renderAll();
        return;
      }
      if (currentRole === 'engineer' && ['project-workspace','po-workspace','pn-workspace','pn-bom-upload','bom-tree'].includes(page)) {
        const assigned = assignedProjectNames();
        if (!assigned.has(openContext.project)) {
          const project = visibleProjects()[0];
          const po = project ? posForProject(project.name)[0] : null;
          const pn = po ? pnsForPo(po.id)[0] : null;
          if (project) openContext.project = project.name;
          if (po) openContext.po = po.id;
          if (pn) openContext.pn = pn.pn;
        }
      }
      if (page === 'po-upload' && !writableProjects().some(project => project.name === poIntake.project)) {
        poIntake.project = writableProjects()[0]?.name || '';
      }
      if (options.clearHistory) navigationHistory = [];
      if (!options.replace && page !== currentPage) {
        navigationHistory.push(captureNavigationState());
        if (navigationHistory.length > NAVIGATION_HISTORY_LIMIT) navigationHistory.shift();
        navigationBrowserDepth += 1;
        try { window.history.pushState({ launchOpsNavigation:true, depth:navigationBrowserDepth },'',window.location.href); } catch (error) { navigationBrowserDepth = 0; }
      }
      currentPage = page; notifOpen = false; qaOpen = false; gsOpen = false; renderAll();
      if (!options.preserveScroll) requestAnimationFrame(() => window.scrollTo({ top:0, behavior:'auto' }));
    }

    /* Open a specific PO / PN, updating context, then navigate to its workspace */
    function openPo(poId, tab, navOptions = {}) {
      const po = POS.find(item => item.id === poId);
      if (po && currentRole === 'engineer' && !assignedProjectNames().has(po.project)) {
        openModal('Purchase order outside your assignment', `${po.id} belongs to ${po.project}, which is not assigned to ${ROLE_PERSONA.engineer.name}.`);
        return;
      }
      openContext.po = poId;
      if (po) {
        openContext.project = po.project;
        const firstPn = PNS.find(item => item.po === poId);
        if (firstPn) openContext.pn = firstPn.pn;
      }
      activeTab.po = tab || 'Overview';
      navigate('po-workspace',navOptions);
    }
    function openPn(pnId, tab, navOptions = {}) {
      const pn = PNS.find(item => item.pn === pnId);
      if (pn && currentRole === 'engineer' && !assignedProjectNames().has(pn.project)) {
        openModal('Part Number outside your assignment', `${pn.pn} belongs to ${pn.project}, which is not assigned to ${ROLE_PERSONA.engineer.name}.`);
        return;
      }
      openContext.pn = pnId;
      if (pn) { openContext.po = pn.po; openContext.project = pn.project; }
      if (tab) activeTab.pn = tab;
      navigate('pn-workspace',navOptions);
    }
    function openPoVersionCompare(poId, versionA, versionB) {
      openContext.po = poId;
      openContext.compareType = 'po';
      poVersionCompareA = versionA;
      poVersionCompareB = versionB;
      versionCompareSearch = '';
      activeTab.po = 'PO Versions';
      navigate('po-version-compare');
    }
    function openBomVersionCompare(pnId, versionA, versionB) {
      openContext.pn = pnId;
      openContext.compareType = 'bom';
      bomVersionCompareA = versionA;
      bomVersionCompareB = versionB;
      versionCompareSearch = '';
      activeTab.pn = 'BOM Versions';
      navigate('bom-version-compare');
    }

    /* Functional workspace tab switching — re-renders in place, no page change */
    function showProjectTab(tab) { activeTab.project = tab; renderPage(); }
    function showPoTab(tab) { activeTab.po = tab; renderPage(); }
    function showPnTab(tab) { activeTab.pn = tab; renderPage(); }

    function toggleExplorer(key) { explorerOpen[key] = !explorerOpen[key]; renderPage(); }

    function openPnBomUpload(pnId) {
      const pn = PNS.find(item => item.pn === pnId);
      if (pn && currentRole === 'engineer' && !assignedProjectNames().has(pn.project)) {
        openModal('BOM upload not permitted', `${pn.pn} belongs to a project outside your assignment.`);
        return;
      }
      const project = PROJECTS.find(item => item.name === pn?.project);
      if (project && !canWriteProject(project)) {
        openModal('BOM upload not permitted', `Your role has read-only access to ${project.name}. Only an assigned Launch Engineer or Launch Manager may upload a BOM version.`);
        return;
      }
      openContext.pn = pnId;
      if (pn) { openContext.po = pn.po; openContext.project = pn.project; }
      beginBomImport('pn', pnId, false);
      navigate('pn-bom-upload');
    }

    function confirmDeletePo(poId) {
      const po = POS.find(item => item.id === poId);
      if (!po) return;
      document.getElementById('modalTitle').textContent = `Delete ${poId}?`;
      document.getElementById('modalBody').innerHTML = `<span class="delete-confirm-copy">This permanently removes the purchase order and its linked part-number records.</span><label class="delete-confirm-label">Type <strong>DELETE ME</strong> to confirm</label><input id="deletePoPhrase" class="delete-confirm-input" autocomplete="off" placeholder="DELETE ME" oninput="validateDeletePoPhrase(this.value)">`;
      modalConfirmAction = () => deletePoRecord(poId);
      const confirmButton = document.getElementById('modalConfirmBtn');
      confirmButton.textContent = 'Delete PO';
      confirmButton.classList.add('danger-action');
      confirmButton.disabled = true;
      document.getElementById('modalOverlay').classList.add('open');
      requestAnimationFrame(() => document.getElementById('deletePoPhrase')?.focus());
    }
    function validateDeletePoPhrase(value) {
      const confirmButton = document.getElementById('modalConfirmBtn');
      if (confirmButton) confirmButton.disabled = value.trim() !== 'DELETE ME';
    }
    function deletePoRecord(poId) {
      const poIndex = POS.findIndex(item => item.id === poId);
      if (poIndex < 0) return;
      const po = POS[poIndex];
      POS.splice(poIndex,1);
      for (let index = PNS.length - 1; index >= 0; index -= 1) {
        if (PNS[index].po === poId) PNS.splice(index,1);
      }
      for (let index = PO_BOM_FILES.length - 1; index >= 0; index -= 1) {
        if (PO_BOM_FILES[index].po === poId) PO_BOM_FILES.splice(index,1);
      }
      AUDIT_LOGS.unshift({
        id:`AUD-${10400 + AUDIT_LOGS.length}`,
        date:new Date().toISOString().slice(0,16).replace('T',' '),
        user:ROLE_PERSONA[currentRole].name,
        module:'Purchase Orders',
        action:'Purchase order deleted',
        entity:poId,
        project:po.project,
        po:poId,
        evidence:'Typed confirmation: DELETE ME',
        details:`${poId} and its linked part-number records were deleted.`,
      });
      closeModal();
      renderAll();
    }
    function confirmDeleteProject(projectId) {
      const project = PROJECTS.find(p => p.id === projectId || p.name === projectId);
      const linked = project ? POS.filter(po => po.project === project.name) : [];
      if (linked.length) {
        openModal('Project deletion blocked', `${project.name} contains ${linked.length} purchase order${linked.length === 1 ? '' : 's'}. M01-AC-05 requires every linked PO to be archived or reassigned before the project can be deleted.`);
        return;
      }
      openModal('Delete ' + (project?.name || projectId) + '?', 'This empty project can be deleted after confirmation. The action will be written to the audit history.');
    }
    function stop(e) { e.stopPropagation(); }

    /* ================= QUICK ACTIONS + NOTIFICATIONS + GLOBAL SEARCH ================= */
    function renderQuickActions() {
      const actions = QUICK_ACTIONS[currentRole] || [];
      if (actions.length === 0) { document.getElementById('quickActionsWrap').innerHTML = ''; return; }
      document.getElementById('quickActionsWrap').innerHTML = `
    <button class="qa-btn" onclick="toggleQA(event)">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
      Quick Action
    </button>
    <div class="qa-menu ${qaOpen ? 'open' : ''}" id="qaMenu">
      ${actions.map(a => `<div class="qa-item" onclick="navigate('${a.page}')">${icon(a.icon, '')} ${a.label}</div>`).join('')}
    </div>`;
    }
    function toggleQA(e) { e.stopPropagation(); qaOpen = !qaOpen; notifOpen = false; gsOpen = false; renderTopbarWidgets(); }
    function toggleNotif() { notifOpen = !notifOpen; qaOpen = false; gsOpen = false; renderTopbarWidgets(); }
    function renderNotifPanel() {
      document.getElementById('notifPanel').className = `notif-panel ${notifOpen ? 'open' : ''}`;
      document.getElementById('notifPanel').innerHTML = `
    <div class="notif-head">Notifications <span>Mark all read</span></div>
    <div class="notif-list">
      ${NOTIFICATIONS.map(n => `<div class="notif-row">
        <div class="notif-icon-dot" style="background:${NOTIF_ICON_COLOR[n.icon]}"></div>
        <div>
          <div class="n-title">${n.title}</div>
          <div class="n-sub">${n.sub}</div>
          <div class="n-time">${n.time}</div>
        </div>
      </div>`).join('')}
    </div>`;
    }
    function openGlobalSearch() { gsOpen = true; qaOpen = false; notifOpen = false; renderTopbarWidgets(); const el = document.getElementById('globalSearchInput'); if (el) el.focus(); }
    function setGlobalSearch(v) { globalSearchQuery = v; gsOpen = true; renderGsPanel(); }
    function gsResultsFor(query) {
      if (!query || query.trim().length === 0) return [];
      const q = query.toLowerCase();
      return SEARCH_INDEX.filter(i => `${i.label} ${i.sub}`.toLowerCase().includes(q)).slice(0, 8);
    }
    function renderGsPanel() {
      const panel = document.getElementById('gsPanel');
      panel.className = `gs-panel ${gsOpen ? 'open' : ''}`;
      const results = gsResultsFor(globalSearchQuery);
      if (!globalSearchQuery) {
        panel.innerHTML = `<div class="gs-empty">Search projects, purchase orders, PN, materials, deliveries, and invoices.</div>`;
        return;
      }
      if (results.length === 0) {
        panel.innerHTML = `<div class="gs-empty">No results for "${globalSearchQuery}"</div>`;
        return;
      }
      panel.innerHTML = `<div class="gs-results">
    ${results.map(r => `<div class="gs-row" onclick="${r.action}; gsOpen=false; document.getElementById('globalSearchInput').value=''; globalSearchQuery=''; renderTopbarWidgets();">
      <div class="gs-ic">${r.type.slice(0, 2).toUpperCase()}</div>
      <div><div class="gs-title">${r.label}</div><div class="gs-sub">${r.type} · ${r.sub}</div></div>
    </div>`).join('')}
  </div>`;
    }
    function renderTopbarWidgets() { renderQuickActions(); renderNotifPanel(); renderGsPanel(); }
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.quick-actions')) { qaOpen = false; }
      if (!e.target.closest('.notif-wrap')) { notifOpen = false; }
      if (!e.target.closest('.global-search-wrap')) { gsOpen = false; }
      renderTopbarWidgets();
      if (colMenuOpen && !e.target.closest('.col-menu')) { colMenuOpen = false; renderPage(); }
    });

    /* ================= BREADCRUMB ================= */
    const PAGE_META = {
      dashboard: { crumb: [{ l: 'Dashboard' }], title: null },
      'project-list': { crumb: [{ l: 'Projects', p: 'project-list' }, { l: 'Project List' }], title: 'Projects', sub: 'All active launch projects' },
      'project-form': { crumb: [{ l: 'Projects', p: 'project-list' }, { l: 'Project Form' }], title: null },
      'project-workspace': { crumb: [{ l: 'Projects', p: 'project-list' }, { l: 'BMW X5' }], title: null },
      'po-list': { crumb: [{ l: 'Purchase Orders', p: 'po-list' }, { l: 'All Purchase Orders' }], title: 'Purchase Orders', sub: 'Every PO across all projects' },
      'production-packing': { crumb: [{ l: 'Production & Packing' }], title: null, sub: null },
      'po-upload': { crumb: [{ l: 'Purchase Orders', p: 'po-list' }, { l: 'Upload Purchase Order' }], title: 'Upload Purchase Order', sub: 'A guided five-step wizard' },
      'pn-bom-upload': { crumb: [{ l: 'Projects', p: 'project-list' }, { l: 'BMW X5', p: 'project-workspace' }, { l: 'PO-00045', p: 'po-workspace' }, { l: 'Upload PN BOM' }], title: null },
      'po-workspace': { crumb: [{ l: 'Projects', p: 'project-list' }, { l: 'BMW X5', p: 'project-workspace' }, { l: 'PO-00045' }], title: null },
      'pn-workspace': { crumb: [{ l: 'Projects', p: 'project-list' }, { l: 'BMW X5', p: 'project-workspace' }, { l: 'PO-00045', p: 'po-workspace' }, { l: 'PN100' }], title: null },
      'bom-tree': { crumb: [{ l: 'BOM', p: 'bom-tree' }, { l: 'BOM Hierarchy' }], title: 'BOM Hierarchy', sub: 'Project → PO → PN → Materials' },
      'bom-po': { crumb: [{ l: 'BOM', p: 'bom-tree' }, { l: 'PO BOM' }], title: 'PO BOM', sub: 'Upload a multi-FGPN workbook or generate from PN BOMs' },
      'po-version-compare': { crumb: [{ l: 'Purchase Orders', p: 'po-list' }, { l: 'Purchase Order Version Comparison' }], title: 'Purchase Order Version Comparison', sub: 'Compare saved PO versions and trace changes' },
      'bom-version-compare': { crumb: [{ l: 'BOM', p: 'bom-tree' }, { l: 'BOM Version Comparison' }], title: 'BOM Version Comparison', sub: 'Compare saved BOM versions and trace material changes' },
      'sim-launch': { crumb: [{ l: 'Simulation' }], title: null },
      'sim-history': { crumb: [{ l: 'Simulation' }], title: null },
      'material-detail': { crumb: [{ l: 'Stock', p: 'stock-dashboard' }, { l: 'MAT-5512' }], title: null },
      'stock-dashboard': { crumb: [{ l: 'Stock', p: 'stock-dashboard' }, { l: 'Dashboard' }], title: null, sub: null },
      'stock-reception': { crumb: [{ l: 'Stock', p: 'stock-dashboard' }, { l: 'Reception' }], title: null, sub: null },
      'stock-cutman': { crumb: [{ l: 'Stock', p: 'stock-dashboard' }, { l: 'CutMan Import' }], title: null, sub: null },
      'stock-transit': { crumb: [{ l: 'Stock', p: 'stock-dashboard' }, { l: 'Transit Stock' }], title: null, sub: null },
      'stock-thresholds': { crumb: [{ l: 'Stock', p: 'stock-dashboard' }, { l: 'Thresholds' }], title: null, sub: null },
      'stock-history': { crumb: [{ l: 'Stock', p: 'stock-dashboard' }, { l: 'History' }], title: null, sub: null },
      'wh-stock': { crumb: [{ l: 'Warehouse Stock' }], title: null, sub: null },
      'wh-cutting': { crumb: [{ l: 'CutMan', p: 'stock-cutman' }, { l: 'WIP Transfer' }], title: null, sub: null },
      'login': { crumb: [{ l: 'Login' }], title: 'Login', sub: 'Sign in to Adient Launch Management ERP' },
      'reports': { crumb: [{ l: 'Reports' }], title: 'Reports', sub: 'Read-only summaries' },
      profile: { crumb: [{ l: 'Profile' }], title: 'Profile', sub: null },

      /* ---- M08 ---- */
      'mfg-delivery-list': { crumb: [{ l: 'Manufacturing Deliveries', p: 'mfg-delivery-list' }, { l: 'Deliveries' }], title: 'Manufacturing Deliveries', sub: 'Warehouse-to-manufacturing delivery requests' },
      'mfg-delivery-create': { crumb: [{ l: 'Manufacturing Deliveries', p: 'mfg-delivery-list' }, { l: 'Create Delivery' }], title: 'Create Manufacturing Delivery', sub: null },
      'mfg-delivery-workspace': { crumb: [{ l: 'Manufacturing Deliveries', p: 'mfg-delivery-list' }, { l: 'MD-0031' }], title: null },
      'mfg-delivery-verify': { crumb: [{ l: 'Manufacturing Deliveries', p: 'mfg-delivery-list' }, { l: 'Verify Delivery Code' }], title: 'Verify Delivery Code', sub: 'Warehouse Team Leader code entry for delivery access' },
      'mfg-delivery-history': { crumb: [{ l: 'Manufacturing Deliveries', p: 'mfg-delivery-list' }, { l: 'Delivery History' }], title: 'Manufacturing Delivery History', sub: 'Every delivery ever recorded' },

      /* ---- M09 ---- */
      'cust-delivery-list': { crumb: [{ l: 'Customer Deliveries', p: 'cust-delivery-list' }, { l: 'Deliveries' }], title: 'Customer Deliveries', sub: 'Finished goods delivered to customers' },
      'cust-delivery-create': { crumb: [{ l: 'Customer Deliveries', p: 'cust-delivery-list' }, { l: 'Create Delivery' }], title: null },
      'cust-delivery-workspace': { crumb: [{ l: 'Customer Deliveries', p: 'cust-delivery-list' }, { l: 'CD-0018' }], title: null },
      'cust-delivery-history': { crumb: [{ l: 'Customer Deliveries', p: 'cust-delivery-list' }, { l: 'Delivery History' }], title: 'Customer Delivery History', sub: 'Every customer delivery ever recorded' },

      /* ---- M10 ---- */
      'finance-dashboard': { crumb: [{ l: 'Finance', p: 'finance-dashboard' }, { l: 'Overview' }], title: null },
      'finance-revenue': { crumb: [{ l: 'Finance', p: 'finance-dashboard' }, { l: 'Revenue' }], title: 'Revenue', sub: 'Revenue and forecast by project and customer' },
      'finance-invoices': { crumb: [{ l: 'Finance', p: 'finance-dashboard' }, { l: 'Invoices' }], title: 'Invoice Management', sub: 'Track and manage customer invoices' },
      'finance-forecast': { crumb: [{ l: 'Finance', p: 'finance-dashboard' }, { l: 'Forecast' }], title: 'Forecast', sub: 'Monthly forecast vs actual revenue' },
      'finance-prices': { crumb: [{ l: 'Finance', p: 'finance-dashboard' }, { l: 'Prices' }], title: 'Price Management', sub: 'Unit prices per finished good, per customer' },

      /* ---- M12 ---- */
      'audit-logs': { crumb: [{ l: 'Audit', p: 'audit-logs' }, { l: 'Activity Logs' }], title: 'Audit Logs', sub: 'Every recorded action across the plant' },
      'audit-detail': { crumb: [{ l: 'Audit', p: 'audit-logs' }, { l: 'Entity Detail' }], title: null },

      /* ---- M00 Admin ---- */
      'admin-users': { crumb: [{ l: 'Administration', p: 'admin-users' }, { l: 'Users' }], title: null },
      'admin-user-details': { crumb: [{ l: 'Administration', p: 'admin-users' }, { l: 'User Details' }], title: null },
      'admin-roles': { crumb: [{ l: 'Administration', p: 'admin-users' }, { l: 'Roles & Access' }], title: null },
      'admin-project-assignments': { crumb: [{ l: 'Administration', p: 'admin-users' }, { l: 'Project Assignments' }], title: null },
      'admin-reference-data': { crumb: [{ l: 'Administration', p: 'admin-users' }, { l: 'Reference Lists' }], title: null },
      'business-rules': { crumb: [{ l: 'Administration', p: 'admin-users' }, { l: 'Business Rules' }], title: 'Business Rule Register', sub: 'Recommended resolutions for the SRS open points' },
      'admin-system-activity': { crumb: [{ l: 'Administration', p: 'admin-users' }, { l: 'Login Audit' }], title: null },
    };
    function renderBreadcrumb() {
      let meta = PAGE_META[currentPage] || { crumb: [{ l: currentPage }] };
      if (currentPage === 'project-form') {
        meta = { ...meta, crumb:[{ l:'Projects', p:'project-list' }, { l:projectForm.mode === 'edit' ? 'Edit Project' : 'New Project' }] };
      }
      if (['project-workspace','po-workspace','pn-workspace','pn-bom-upload'].includes(currentPage)) {
        const project = projectForContext();
        const dynamic = [{ l:'Projects', p:'project-list' }, { l:project.name, p:'project-workspace' }];
        if (currentPage !== 'project-workspace') dynamic.push({ l:openContext.po, p:'po-workspace' });
        if (currentPage === 'pn-workspace') dynamic.push({ l:openContext.pn });
        if (currentPage === 'pn-bom-upload') dynamic.push({ l:'Upload PN BOM' });
        meta = { ...meta, crumb:dynamic };
      }
      if (currentPage === 'po-upload' && ['project-workspace','po-workspace'].includes(navigationHistory.at(-1)?.page)) {
        const project = PROJECTS.find(item => item.name === poIntake.project) || projectForContext();
        meta = { ...meta, crumb:[{ l:'Projects',p:'project-list' },{ l:project.name,p:'project-workspace' },{ l:'Add Purchase Order' }] };
      }
      if (['mfg-delivery-create','mfg-delivery-workspace','cust-delivery-create','cust-delivery-workspace'].includes(currentPage)) {
        const manufacturing = currentPage.startsWith('mfg-');
        const delivery = manufacturing ? MFG_DELIVERIES.find(item => item.code === openMfgDeliveryId) : CUST_DELIVERIES.find(item => item.code === openCustDeliveryId);
        const projectName = currentPage.endsWith('-create') ? (manufacturing ? mfgWizard.project : custWizard.project) : delivery?.project;
        const poId = currentPage.endsWith('-create') ? (manufacturing ? mfgWizard.po : custWizard.po) : delivery?.po;
        const finalLabel = currentPage.endsWith('-create') ? `Create ${manufacturing ? 'Manufacturing' : 'Customer'} Delivery` : (delivery?.code || 'Delivery');
        if (projectName && poId) meta = { ...meta, crumb:[{ l:'Projects',p:'project-list' },{ l:projectName,p:'project-workspace' },{ l:poId,p:'po-workspace' },{ l:finalLabel }] };
      }
      const html = meta.crumb.map((seg, i) => {
        const isLast = i === meta.crumb.length - 1;
        return `${i > 0 ? '<span class="sep">/</span>' : ''}<span class="seg ${isLast ? 'current' : ''}" ${seg.p && !isLast ? `onclick="navigate('${seg.p}')"` : ''}>${seg.l}</span>`;
      }).join('');
      const previous = navigationHistory.at(-1);
      const backLabel = previous ? exportHtmlValue(navigationStateLabel(previous)) : '';
      const back = previous ? `<button class="nav-back-btn" onclick="navigateBack()" title="Back to ${backLabel}" aria-label="Back to ${backLabel}">${icon('chevLeft','')}<span>Back</span></button>` : '';
      document.getElementById('breadcrumb').innerHTML = back + html;
    }

    /* ================= HELPERS ================= */
    function isReadOnly() { return READONLY_ROLES.includes(currentRole); }
    function readonlyBanner() {
      if (!isReadOnly()) return '';
      return `<div class="readonly-banner">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
    Viewing in read-only mode — ${ROLE_LABEL[currentRole]} cannot edit records.
  </div>`;
    }
    function statusBadge(label, type) { return `<span class="badge ${type}">${label}</span>`; }
    function pageHeader(title, sub) {
      if (!title) return '';
      const subClass = currentPage === 'project-list' ? ' project-list-page-sub' : '';
      return `<div class="page-title-row"><div><div class="page-title">${title}</div>${sub ? `<div class="page-sub${subClass}">${sub}</div>` : ''}</div></div>`;
    }
    function healthRing(pct) {
      const color = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
      const r = 26, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
      return `<div class="health-ring">
    <svg width="64" height="64" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="${r}" fill="none" stroke="var(--border-soft)" stroke-width="6"/>
      <circle cx="32" cy="32" r="${r}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"/>
    </svg>
    <div class="hr-val" style="color:${color}">${pct}%</div>
  </div>`;
    }
    function money(n) { return new Intl.NumberFormat('en-GB',{ style:'currency', currency:'EUR', minimumFractionDigits:2, maximumFractionDigits:2 }).format(Number(n || 0)); }
    function financeMoney(n, currency = 'EUR') { return new Intl.NumberFormat('en-GB',{ style:'currency', currency, minimumFractionDigits:2, maximumFractionDigits:2 }).format(Number(n || 0)); }

    /* ================= TABLE UI HELPERS (search/filter/sort/paginate) ================= */
    function toggleColMenu() { colMenuOpen = !colMenuOpen; renderPage(); }
    function toggleColumn(key) { poColumns[key] = !poColumns[key]; renderPage(); }
    function columnMenuPanel() {
      const labels = { version: 'Version', pnCount: 'PN Count', delivery: 'Delivery Date', simulation: 'Simulation', status: 'Readiness', lifecycle: 'Lifecycle' };
      return `<div class="col-menu-panel open" onclick="event.stopPropagation()">
    ${Object.keys(labels).map(k => `<label class="col-menu-item"><input type="checkbox" ${poColumns[k] ? 'checked' : ''} onchange="toggleColumn('${k}')"/> ${labels[k]}</label>`).join('')}
  </div>`;
    }

    function filterChips(filters, labels, clearFnName, resetFnName) {
      const active = Object.keys(filters).filter(k => filters[k]);
      if (active.length === 0) return '';
      return `<div class="chip-row">
    ${active.map(k => `<div class="chip">${labels[k] || k} : ${filters[k]}
      <div class="chip-x" onclick="${clearFnName}('${k}')">${icon('close', '')}</div>
    </div>`).join('')}
    <div class="chip-reset" onclick="${resetFnName}()">Reset All</div>
  </div>`;
    }

    function statsRow(items) {
      return `<div class="stats-row">
    ${items.map(it => `<div class="stat-pill"><div class="sp-label">${it.label}</div><div class="sp-value" style="color:${it.color || 'var(--ink)'}">${it.value}</div></div>`).join('')}
  </div>`;
    }

    function sortTh(label, key, sortState, fnName) {
      const active = sortState.key === key;
      return `<th class="sortable" onclick="${fnName}('${key}')">${label}<span class="sort-arrows">
    <svg class="${active && sortState.dir === 1 ? 'active' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M6 15l6-6 6 6"/></svg>
    <svg class="${active && sortState.dir === -1 ? 'active' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M6 9l6 6 6-6"/></svg>
  </span></th>`;
    }

    function sortRows(rows, sortState) {
      if (!sortState.key) return rows;
      const key = sortState.key, dir = sortState.dir;
      return [...rows].sort((a, b) => {
        let av = a[key], bv = b[key];
        if (typeof av === 'string') av = av.toLowerCase();
        if (typeof bv === 'string') bv = bv.toLowerCase();
        if (av < bv) return -1 * dir;
        if (av > bv) return 1 * dir;
        return 0;
      });
    }

    function rowCountLabel(n, noun) {
      const plural = n === 1 ? noun : (noun.endsWith('y') && !/[aeiou]y$/i.test(noun) ? noun.slice(0, -1) + 'ies' : noun + 's');
      return `<div class="row-count">${n} ${plural}</div>`;
    }

    function paginationBar(total, page, pageSize, setPageFnName) {
      const totalPages = Math.max(1, Math.ceil(total / pageSize));
      page = Math.min(page, totalPages);
      const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
      const end = Math.min(total, page * pageSize);
      let pages = [];
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      if (pages.length > 5) {
        pages = [1, 2, '…', totalPages - 1, totalPages];
        if (page > 2 && page < totalPages - 1) pages = [1, '…', page, '…', totalPages];
      }
      return `<div class="pagination-bar">
    <div class="pagination-info">Showing ${start}–${end} of ${total}</div>
    <div class="pagination-pages">
      <div class="page-btn ${page <= 1 ? 'disabled' : ''}" onclick="${setPageFnName}(${page - 1})">${icon('chevLeft', '')}</div>
      ${pages.map(p => p === '…' ? `<div class="page-btn disabled">…</div>` : `<div class="page-btn ${p === page ? 'active' : ''}" onclick="${setPageFnName}(${p})">${p}</div>`).join('')}
      <div class="page-btn ${page >= totalPages ? 'disabled' : ''}" onclick="${setPageFnName}(${page + 1})">${icon('chevRight', '')}</div>
    </div>
  </div>`;
    }

    function emptyStateBlock(title, sub, resetFnName) {
      return `<div class="empty-state">
    ${icon('folder', '')}
    <div class="e-title">${title}</div>
    <div class="e-sub">${sub}</div>
    ${resetFnName ? `<button class="btn sm" style="margin-top:14px;" onclick="${resetFnName}()">Reset Filters</button>` : ''}
  </div>`;
    }

    function exportNotice() { openModal('Export', 'Use the PDF or Excel buttons beside a table title to export the visible table.'); }
    function inlineJsValue(value) { return String(value || '').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/[\r\n]+/g,' '); }
    function exportFileName(value) { return String(value || 'export').trim().replace(/[^a-z0-9_-]+/gi,'-').replace(/^-+|-+$/g,'') || 'export'; }
    function exportHtmlValue(value) { return String(value ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
    function tableExportActions(tableId, title) {
      const safeTitle = inlineJsValue(title);
      return `<div class="table-export-actions"><button class="btn sm" title="Export ${exportHtmlValue(title)} as PDF" onclick="exportWorkspaceTable('${tableId}','pdf','${safeTitle}')">${icon('FileText','')} PDF</button><button class="btn sm" title="Export ${exportHtmlValue(title)} as Excel" onclick="exportWorkspaceTable('${tableId}','excel','${safeTitle}')">${icon('download','')} Excel</button></div>`;
    }
    function workspaceTableData(tableId) {
      const table = document.getElementById(tableId);
      if (!table) return null;
      const headerCells = [...table.querySelectorAll('thead th')];
      const keepIndexes = headerCells.map((cell,index) => ({ cell,index })).filter(item => item.cell.dataset.export !== 'false' && !/^actions?$/i.test(item.cell.innerText.trim())).map(item => item.index);
      const headers = keepIndexes.map(index => headerCells[index]?.innerText.trim() || '');
      const rows = [...table.querySelectorAll('tbody tr, tfoot tr')].map(row => {
        const cells = [...row.querySelectorAll('td')];
        return keepIndexes.map(index => (cells[index]?.innerText || '').replace(/\s+/g,' ').trim());
      }).filter(row => row.some(Boolean));
      return { headers, rows };
    }
    function downloadWorkspaceBlob(content, mime, fileName) {
      const blob = new Blob([content], { type:mime });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob); link.download = fileName;
      document.body.appendChild(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(link.href),1000);
    }
    function exportWorkspaceTable(tableId, format, title) {
      const data = workspaceTableData(tableId);
      if (!data || !data.headers.length) return openModal('Export unavailable','The table is not currently visible. Open the table and try again.');
      const fileBase = exportFileName(title);
      const tableHtml = `<table><thead><tr>${data.headers.map(value => `<th>${exportHtmlValue(value)}</th>`).join('')}</tr></thead><tbody>${data.rows.map(row => `<tr>${row.map(value => `<td style="mso-number-format:'\\@'">${exportHtmlValue(value)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
      if (format === 'excel') {
        const workbook = `<!doctype html><html><head><meta charset="utf-8"></head><body><h2>${exportHtmlValue(title)}</h2>${tableHtml}</body></html>`;
        downloadWorkspaceBlob(workbook,'application/vnd.ms-excel;charset=utf-8',`${fileBase}.xls`);
        return;
      }
      const popup = window.open('','_blank','width=1200,height=800');
      if (!popup) return openModal('PDF export blocked','Allow pop-ups for this application, then select PDF again.');
      popup.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${exportHtmlValue(title)}</title><style>@page{size:landscape;margin:14mm}body{font-family:Arial,sans-serif;color:#111}h1{font-size:20px;margin:0 0 14px}p{font-size:10px;color:#555;margin:0 0 16px}table{width:100%;border-collapse:collapse;font-size:9px}th,td{padding:7px 8px;border:1px solid #cbd5e1;text-align:left;vertical-align:top}th{background:#eaf4f6;font-weight:700}tr:nth-child(even) td{background:#f8fafc}</style></head><body><h1>${exportHtmlValue(title)}</h1><p>Generated ${exportHtmlValue(new Date().toLocaleString())}</p>${tableHtml}<script>window.onload=()=>{window.focus();window.print();}<\/script></body></html>`);
      popup.document.close();
    }

    function poExtractionPayload(poId) {
      if (poId === 'draft') return JSON.parse(JSON.stringify(poExtraction));
      const stored = PO_EXTRACTION_RECORDS.get(poId);
      if (stored) return JSON.parse(JSON.stringify(stored));
      const po = POS.find(item => item.id === poId);
      if (!po) return null;
      const project = PROJECTS.find(item => item.name === po.project);
      const lines = pnsForPo(poId).map((item,index) => {
        const quantity = Number(item.qty || 0);
        const unitPrice = Number(item.unitPrice || 0);
        return {
          line_no:String(index + 1).padStart(5,'0'), plant:'1000', due_date:po.delivery || '',
          material_group:'FINISHED-GOOD', part_number:item.pn, description:item.desc,
          customer_part_ref:`${po.customer.replace(/\s+/g,'-').toUpperCase()}-${String(index + 1).padStart(4,'0')}`,
          item_category:'Standard', quantity, unit_price:unitPrice,
          total:Number((quantity * unitPrice).toFixed(2))
        };
      });
      const computedTotal = Number(lines.reduce((sum,line) => sum + line.total,0).toFixed(2));
      return {
        po_number:po.id, version:String(po.version || 'v1').replace(/^v/i,''), order_date:po.date || '', change_date:po.date || '',
        supplier_no:'SUP-100483', supplier_name:'Approved Automotive Components Supplier',
        supplier_address:"Tangier Automotive City, Morocco", buyer_name:'Adient Automotive Seating Morocco',
        buyer_vat:'MA40487126', buyer_register_nr:'RC 186245', invoicing_party_taxid:'MA100347829',
        delivery_contact:project?.engineer || 'Launch Engineer', delivery_address:project?.site || 'Tangier Plant 2',
        payment_terms:'Immediate payment', incoterms:'DAP Tangier', contact_name:project?.engineer || 'Launch Engineer',
        contact_tel:'+212 539 40 18 76', contact_email:'launch.engineering@example.com',
        header_text:`Validated purchase order for ${po.project}.`, currency:lines[0]?.currency || 'EUR',
        jit_customer:po.customer, development_level:'Production', engineering_phase:'Launch',
        reason_of_purchase:'Production launch requirement', stated_total:computedTotal, computed_total:computedTotal,
        totals_match:true, line_count:lines.length, lines
      };
    }

    function poExtractionWorkbookHtml(payload) {
      const headerLabels = {
        po_number:'PO Number', version:'Version', order_date:'Order Date', change_date:'Change Date',
        supplier_no:'Supplier Number', supplier_name:'Supplier Name', supplier_address:'Supplier Address',
        buyer_name:'Buyer Name', buyer_vat:'Buyer VAT', buyer_register_nr:'Buyer Register Number',
        invoicing_party_taxid:'Invoicing Party Tax ID', delivery_contact:'Delivery Contact',
        delivery_address:'Delivery Address', payment_terms:'Payment Terms', incoterms:'Incoterms',
        contact_name:'Contact Name', contact_tel:'Contact Telephone', contact_email:'Contact Email',
        header_text:'Header Text', currency:'Currency', jit_customer:'Customer', development_level:'Development Level',
        engineering_phase:'Engineering Phase', reason_of_purchase:'Reason of Purchase', stated_total:'Stated Total',
        computed_total:'Computed Total', totals_match:'Totals Match', line_count:'Line Count'
      };
      const lineColumns = [
        ['line_no','Line Number'],['plant','Plant'],['due_date','Due Date'],['material_group','Material Group'],
        ['part_number','Part Number'],['description','Description'],['customer_part_ref','Customer Part Reference'],
        ['item_category','Item Category'],['quantity','Quantity'],['unit_price','Unit Price'],['total','Line Total']
      ];
      const headerRows = Object.entries(headerLabels).map(([key,label]) => `<tr><th>${exportHtmlValue(label)}</th><td style="mso-number-format:'\\@'">${exportHtmlValue(payload[key] === true ? 'Yes' : payload[key] === false ? 'No' : payload[key])}</td></tr>`).join('');
      const lineRows = (payload.lines || []).map(line => `<tr>${lineColumns.map(([key]) => `<td ${['line_no','part_number','customer_part_ref'].includes(key) ? `style="mso-number-format:'\\@'"` : ''}>${exportHtmlValue(line[key])}</td>`).join('')}</tr>`).join('');
      return `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;color:#111827}h1{font-size:20px;margin:0 0 4px}h2{font-size:15px;margin:24px 0 8px;color:#086f86}p{color:#475569}table{border-collapse:collapse;min-width:900px}th,td{border:1px solid #cbd5e1;padding:7px 9px;text-align:left}th{background:#e7f4f7;font-weight:700}.meta{min-width:620px}.meta th{width:220px}</style></head><body><h1>Purchase Order Extraction — ${exportHtmlValue(payload.po_number)}</h1><p>Validated structured data · Version ${exportHtmlValue(payload.version)} · ${exportHtmlValue(payload.currency)}</p><h2>PO Header</h2><table class="meta"><tbody>${headerRows}</tbody></table><h2>Extracted Line Items</h2><table><thead><tr>${lineColumns.map(([,label]) => `<th>${exportHtmlValue(label)}</th>`).join('')}</tr></thead><tbody>${lineRows}</tbody></table></body></html>`;
    }

    function downloadPoExtractionExcel(poId) {
      const payload = poExtractionPayload(poId);
      if (!payload) return openModal('Excel export unavailable','The extracted purchase order data could not be found.');
      const filePo = poId === 'draft' ? payload.po_number : poId;
      downloadWorkspaceBlob(poExtractionWorkbookHtml(payload),'application/vnd.ms-excel;charset=utf-8',`${exportFileName(filePo)}_extracted_v${exportFileName(payload.version)}.xls`);
    }

    function pdfSafeText(value) {
      return String(value ?? '').normalize('NFKD').replace(/[^\x20-\x7E]/g,'').replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
    }

    function buildPoSourcePdf(payload) {
      const sourceLines = [
        'PURCHASE ORDER', `PO Number: ${payload.po_number}`, `Version: ${payload.version}`,
        `Order Date: ${payload.order_date || '-'}`, `Customer: ${payload.jit_customer || payload.buyer_name || '-'}`,
        `Supplier: ${payload.supplier_name || '-'}`, `Currency: ${payload.currency || 'EUR'}`,
        `Total: ${Number(payload.computed_total || 0).toFixed(2)} ${payload.currency || 'EUR'}`, '', 'LINE ITEMS'
      ];
      (payload.lines || []).slice(0,14).forEach(line => sourceLines.push(`${line.line_no}  ${line.part_number}  Qty ${line.quantity}  Unit ${Number(line.unit_price || 0).toFixed(2)}  Total ${Number(line.total || 0).toFixed(2)}`));
      if ((payload.lines || []).length > 14) sourceLines.push(`... ${(payload.lines || []).length - 14} additional line item(s)`);
      sourceLines.push('', 'Mockup source document for seeded demonstration data.');
      const commands = ['BT','/F1 17 Tf','50 748 Td',`(${pdfSafeText(sourceLines[0])}) Tj`,'/F1 10 Tf'];
      sourceLines.slice(1).forEach(line => commands.push('0 -22 Td',`(${pdfSafeText(line)}) Tj`));
      commands.push('ET');
      const stream = commands.join('\n');
      const objects = [
        '<< /Type /Catalog /Pages 2 0 R >>',
        '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
        '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
        '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
        `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
      ];
      let pdf = '%PDF-1.4\n% LaunchOps mockup\n';
      const offsets = [0];
      objects.forEach((object,index) => { offsets[index + 1] = pdf.length; pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
      const xrefOffset = pdf.length;
      pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
      for (let index = 1; index <= objects.length; index += 1) pdf += `${String(offsets[index]).padStart(10,'0')} 00000 n \n`;
      pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
      return pdf;
    }

    function poOriginalFileName(poId) {
      if (poId === 'draft') return poIntake.fileName || `${poExtraction.po_number}_original.pdf`;
      const source = PO_SOURCE_FILES.get(poId);
      if (source?.name) return source.name;
      const po = POS.find(item => item.id === poId);
      const version = po ? poVersionRecords(po).find(item => item.current) : null;
      return version?.file || `${poId}_original.pdf`;
    }

    function downloadOriginalPoPdf(poId) {
      if (poId === 'draft' && poIntake.sourceFile) {
        downloadWorkspaceBlob(poIntake.sourceFile,poIntake.sourceFile.type || 'application/pdf',poOriginalFileName(poId));
        return;
      }
      const source = PO_SOURCE_FILES.get(poId);
      if (source?.file) {
        downloadWorkspaceBlob(source.file,source.file.type || 'application/pdf',source.name || `${poId}_original.pdf`);
        return;
      }
      const payload = poExtractionPayload(poId);
      if (!payload) return openModal('PDF unavailable','The retained purchase order source document could not be found.');
      downloadWorkspaceBlob(buildPoSourcePdf(payload),'application/pdf',poOriginalFileName(poId));
    }

    function poDocumentDownloadButtons(poId, compact = false) {
      const size = compact ? ' sm' : '';
      return `<button class="btn${size}" title="Download the retained source PDF" onclick="downloadOriginalPoPdf('${inlineJsValue(poId)}')">${icon('FileText','')} Original PDF</button><button class="btn${size}" title="Download all validated extracted fields and line items" onclick="downloadPoExtractionExcel('${inlineJsValue(poId)}')">${icon('download','')} Extracted Excel</button>`;
    }
    function refreshNotice() { renderPage(); }

    /* ================= PAGE RENDER SWITCH ================= */
    function renderPage() {
      const meta = PAGE_META[currentPage] || { title: currentPage };
      let html = readonlyBanner() + pageHeader(meta.title, meta.sub);

      switch (currentPage) {
        case 'dashboard': html += roleDashboard(); break;
        case 'project-list': html += pageProjectList(); break;
        case 'project-form': html += pageProjectForm(); break;
        case 'project-workspace': html += pageProjectWorkspace(); break;
        case 'po-list': html += pagePoList(); break;
        case 'production-packing': html += pageProductionBoard(); break;
        case 'po-upload': html += pageUploadWizard('Purchase Order'); break;
        case 'pn-bom-upload': html += pagePnBomUpload(); break;
        case 'po-workspace': html += pagePoWorkspace(); break;
        case 'pn-workspace': html += pagePnWorkspace(); break;
        case 'bom-tree': html += pageBomTree(); break;
        case 'bom-po': html += pageBomPo(); break;
        case 'po-version-compare': html += pageVersionCompare(); break;
        case 'bom-version-compare': html += pageVersionCompare(); break;
        case 'sim-launch': html += pageSimLaunch(); break;
        case 'sim-history': html += pageSimLaunch(); break;
        case 'material-detail': html += pageMaterialDetail(); break;
        case 'stock-dashboard': html += pageStockDashboard(); break;
        case 'stock-reception': html += pageStockReception(); break;
        case 'stock-cutman': html += pageStockCutman(); break;
        case 'stock-transit': html += pageStockTransit(); break;
        case 'stock-thresholds': html += pageThresholds(); break;
        case 'stock-history': html += pageHistory(); break;
        case 'wh-stock': html += pageStockDashboard(); break;
        case 'wh-cutting': html += pageWhCutting(); break;
        case 'reports': html += pageReports(); break;
        case 'profile': html += pageProfile(); break;
        case 'login': html += pageLogin(); break;

        /* ---- M08 ---- */
        case 'mfg-delivery-list': html += pageMfgDeliveryList(); break;
        case 'mfg-delivery-create': html += pageMfgDeliveryCreate(); break;
        case 'mfg-delivery-workspace': html += pageMfgDeliveryWorkspace(); break;
        case 'mfg-delivery-verify': html += pageMfgDeliveryVerify(); break;
        case 'mfg-delivery-history': html += pageMfgDeliveryHistory(); break;

        /* ---- M09 ---- */
        case 'cust-delivery-list': html += pageCustDeliveryList(); break;
        case 'cust-delivery-create': html += pageCustDeliveryCreate(); break;
        case 'cust-delivery-workspace': html += pageCustDeliveryWorkspace(); break;
        case 'cust-delivery-history': html += pageCustDeliveryHistory(); break;

        /* ---- M10 ---- */
        case 'finance-dashboard': html += pageFinanceDashboard(); break;
        case 'finance-revenue': html += pageFinanceRevenue(); break;
        case 'finance-invoices': html += pageFinanceInvoices(); break;
        case 'finance-forecast': html += pageFinanceForecast(); break;
        case 'finance-prices': html += pageFinancePrices(); break;

        /* ---- M12 ---- */
        case 'audit-logs': html += pageAuditLogs(); break;
        case 'audit-detail': html += pageAuditDetail(); break;

        /* ---- M00 Admin ---- */
        case 'admin-users': html += pageAdminUsers(); break;
        case 'admin-user-details': html += pageAdminUserDetails(); break;
        case 'admin-roles': html += pageAdminRoles(); break;
        case 'admin-project-assignments': html += pageAdminProjectAssignments(); break;
        case 'admin-reference-data': html += pageAdminReferenceData(); break;
        case 'business-rules': html += pageBusinessRules(); break;
        case 'admin-system-activity': html += pageAdminSystemActivity(); break;

        default: html += `<div class="empty-state">Page not found.</div>`;
      }
      document.getElementById('content').innerHTML = html;
    }

    /* ============ ROLE-SPECIFIC DASHBOARDS ============ */
    function roleDashboard() {
      if (currentRole === 'engineer') return dashEngineer();
      if (currentRole === 'manager') return dashManager();
      if (currentRole === 'plant') return dashPlant();
      if (currentRole === 'wh_lead') return dashWarehouseLead();
      if (currentRole === 'wh_staff') return dashWarehouseStaff();
      if (currentRole === 'prod_coord') return dashProductionPackingCoordinator();
      if (currentRole === 'admin') return dashAdmin();
      return '';
    }

    function dashEngineer() {
      const projects = visibleProjects();
      const projectNames = new Set(projects.map(project => project.name));
      const pos = POS.filter(po => projectNames.has(po.project));
      const activePos = pos.filter(po => poLifecycle(po.id) !== 'Delivered');
      const manufacturing = MFG_DELIVERIES.filter(delivery => projectNames.has(delivery.project) && delivery.status !== 'Cancelled');
      const customerDeliveries = CUST_DELIVERIES.filter(delivery => projectNames.has(delivery.project));
      const activeManufacturing = manufacturing.filter(delivery => syncMfgDeliveryLifecycle(delivery) !== 'Delivered');
      const missingBoms = PNS.filter(part => projectNames.has(part.project) && part.bom !== 'Uploaded');
      const pendingSignedValidation = manufacturing.filter(delivery => delivery.docUploaded && delivery.status === 'Signed Document Uploaded');
      const pendingCustomerConfirmation = customerDeliveries.filter(delivery =>
        (delivery.shipments || []).some(shipment => shipment.status !== 'Planned' && !shipment.confirmation)
      );
      const packagedByPo = pos.map(po => ({
        po,
        quantity: customerEligibleOrders(po.id).reduce((sum, item) => sum + packagedQuantitySummary(po.id, item.fgpn).available, 0),
      })).filter(item => item.quantity > 0);
      const packagedReady = packagedByPo.reduce((sum, item) => sum + item.quantity, 0);

      const requiredActions = [
        ...pendingSignedValidation.map(delivery => ({
          tone:'blue', icon:'check', title:'Validate signed manufacturing document', meta:`${delivery.code} · ${delivery.po}`, action:`openMfgDelivery('${delivery.code}')`, label:'Review'
        })),
        ...missingBoms.map(part => ({
          tone:'amber', icon:'bom', title:`Upload BOM for ${part.pn}`, meta:`${part.po} · ${part.project}`, action:`openPo('${part.po}','Part Numbers')`, label:'Open PO'
        })),
        ...packagedByPo.map(item => ({
          tone:'green', icon:'PackageCheck', title:`${item.quantity.toLocaleString()} packaged units ready`, meta:`${item.po.id} · ${item.po.project}`, action:`startProjectCustomerDelivery('${item.po.id}','','po')`, label:'Create delivery'
        })),
        ...pendingCustomerConfirmation.map(delivery => ({
          tone:'amber', icon:'truck', title:'Customer confirmation required', meta:`${delivery.code} · ${delivery.po}`, action:`openCustDelivery('${delivery.code}')`, label:'Confirm'
        })),
      ].slice(0, 6);

      const deliveryActivity = [
        ...manufacturing.map(delivery => ({ code:delivery.code, type:'Manufacturing', po:delivery.po, project:delivery.project, date:delivery.date, status:syncMfgDeliveryLifecycle(delivery), statusType:productionStatusType(delivery.lifecycleStatus), action:`openMfgDelivery('${delivery.code}')` })),
        ...customerDeliveries.map(delivery => ({ code:delivery.code, type:'Customer', po:delivery.po, project:delivery.project, date:delivery.date, status:custEffectiveStatus(delivery).label, statusType:custEffectiveStatus(delivery).type, action:`openCustDelivery('${delivery.code}')` })),
      ].sort((a,b) => String(b.date).localeCompare(String(a.date))).slice(0, 6);

      return `<div class="engineer-dashboard">
        <div class="engineer-dashboard-head">
          <div><h1>Launch Engineer Dashboard</h1><p>${projects.length} assigned projects · ${activePos.length} active purchase orders</p></div>
          <div class="engineer-dashboard-head-actions"><button class="btn" onclick="navigate('project-list')">${icon('projects','')} Projects</button><button class="btn primary" onclick="navigate('po-list')">${icon('po','')} Purchase Orders</button></div>
        </div>

        <div class="engineer-kpi-grid">
          <button class="engineer-kpi-card" onclick="navigate('project-list')"><span class="engineer-kpi-icon blue">${icon('projects','')}</span><span class="engineer-kpi-copy"><span>Assigned Projects</span><strong>${projects.length}</strong><small>${pos.length} purchase orders</small></span></button>
          <button class="engineer-kpi-card" onclick="navigate('po-list')"><span class="engineer-kpi-icon navy">${icon('po','')}</span><span class="engineer-kpi-copy"><span>Active Purchase Orders</span><strong>${activePos.length}</strong><small>${pos.filter(po => poLifecycle(po.id) === 'Delivered').length} delivered</small></span></button>
          <button class="engineer-kpi-card" onclick="navigate('mfg-delivery-list')"><span class="engineer-kpi-icon violet">${icon('truck','')}</span><span class="engineer-kpi-copy"><span>Manufacturing Launches</span><strong>${activeManufacturing.length}</strong><small>Active launch records</small></span></button>
          <button class="engineer-kpi-card" onclick="navigate('cust-delivery-list')"><span class="engineer-kpi-icon green">${icon('PackageCheck','')}</span><span class="engineer-kpi-copy"><span>Packaged Units Ready</span><strong>${packagedReady.toLocaleString()}</strong><small>Available for customer delivery</small></span></button>
        </div>

        <div class="engineer-dashboard-grid">
          <section class="engineer-panel engineer-po-panel">
            <div class="engineer-panel-head"><div><h2>Purchase Order Control</h2><p>Current production and delivery position</p></div><button class="btn sm" onclick="navigate('po-list')">View all ${icon('chevRight','')}</button></div>
            <div class="engineer-table-wrap"><table class="engineer-po-table"><thead><tr><th>Purchase Order</th><th>Project</th><th>Status</th><th>Production</th><th>Packaged</th><th>Delivered</th><th></th></tr></thead><tbody>
              ${pos.map(po => { const quantities=poQuantitySummary(po.id), status=poLifecycle(po.id), pct=value => quantities.ordered ? Math.min(100,Math.round(value/quantities.ordered*100)) : 0; return `<tr onclick="openPo('${po.id}','Overview')"><td><strong class="mono">${po.id}</strong><span>${po.customer}</span></td><td><strong>${po.project}</strong><span>Due ${po.delivery}</span></td><td>${statusBadge(status,productionStatusType(status))}</td><td><div class="engineer-quantity"><strong>${quantities.produced.toLocaleString()} / ${quantities.ordered.toLocaleString()}</strong><span><i style="width:${pct(quantities.produced)}%"></i></span></div></td><td><div class="engineer-quantity"><strong>${quantities.packaged.toLocaleString()}</strong><span><i style="width:${pct(quantities.packaged)}%"></i></span></div></td><td><div class="engineer-quantity"><strong>${quantities.delivered.toLocaleString()}</strong><span><i style="width:${pct(quantities.delivered)}%"></i></span></div></td><td><button class="engineer-row-open" aria-label="Open ${po.id}">${icon('chevRight','')}</button></td></tr>`; }).join('')}
            </tbody></table></div>
          </section>

          <aside class="engineer-panel engineer-actions-panel">
            <div class="engineer-panel-head"><div><h2>Required Actions</h2><p>${requiredActions.length} open item${requiredActions.length === 1 ? '' : 's'}</p></div></div>
            <div class="engineer-action-list">${requiredActions.length ? requiredActions.map(item => `<div class="engineer-action-item"><span class="engineer-action-icon ${item.tone}">${icon(item.icon,'')}</span><div><strong>${item.title}</strong><span>${item.meta}</span></div><button class="btn sm" onclick="${item.action}">${item.label}</button></div>`).join('') : `<div class="engineer-no-action">${icon('check','')}<strong>No action required</strong></div>`}</div>
          </aside>
        </div>

        <section class="engineer-panel engineer-activity-panel">
          <div class="engineer-panel-head"><div><h2>Delivery Activity</h2><p>Manufacturing and customer delivery records</p></div><div class="engineer-panel-links"><button class="btn sm" onclick="navigate('mfg-delivery-list')">Manufacturing</button><button class="btn sm" onclick="navigate('cust-delivery-list')">Customer</button></div></div>
          <div class="engineer-activity-grid">${deliveryActivity.map(item => `<button class="engineer-activity-item" onclick="${item.action}"><span class="engineer-activity-type ${item.type === 'Manufacturing' ? 'manufacturing' : 'customer'}">${item.type === 'Manufacturing' ? icon('stock','') : icon('truck','')}</span><span class="engineer-activity-main"><strong class="mono">${item.code}</strong><small>${item.po} · ${item.project}</small></span><span class="engineer-activity-date">${item.date}</span>${statusBadge(item.status,item.statusType)}${icon('chevRight','')}</button>`).join('')}</div>
        </section>
      </div>`;
    }

    function dashManager() {
      const projects = visibleProjects();
      const projectNames = new Set(projects.map(project => project.name));
      const pos = POS.filter(po => projectNames.has(po.project));
      const assigned = assignedProjectNames();
      const activePos = pos.filter(po => poLifecycle(po.id) !== 'Delivered');
      const bomTotal = projects.reduce((sum, project) => sum + projectBomReadiness(project.name).total, 0);
      const bomUploaded = projects.reduce((sum, project) => sum + projectBomReadiness(project.name).uploaded, 0);
      const bomCoverage = bomTotal ? Math.round((bomUploaded / bomTotal) * 100) : 0;
      const portfolioValue = pos.flatMap(po => poFinanceRows(po.id)).reduce((sum, row) => sum + row.lineTotal, 0);
      const simulations = SIMULATION_HISTORY.filter(run => projectNames.has(run.project));
      const passedSimulations = simulations.filter(run => run.result === 'YES').length;
      const simulationRate = simulations.length ? Math.round((passedSimulations / simulations.length) * 100) : 0;
      const failedSimulations = simulations.filter(run => run.result !== 'YES');
      const manufacturing = MFG_DELIVERIES.filter(delivery => projectNames.has(delivery.project));
      const customerDeliveries = CUST_DELIVERIES.filter(delivery => projectNames.has(delivery.project));
      const activeManufacturing = manufacturing.filter(delivery => !['Delivered','Cancelled'].includes(syncMfgDeliveryLifecycle(delivery)));
      const openCustomerDeliveries = customerDeliveries.filter(delivery => !['Delivered','Cancelled'].includes(custEffectiveStatus(delivery).label));
      const pendingSignedValidation = manufacturing.filter(delivery => delivery.docUploaded && delivery.status === 'Signed Document Uploaded');
      const pendingCustomerConfirmation = customerDeliveries.filter(delivery =>
        (delivery.shipments || []).some(shipment => shipment.status !== 'Planned' && !shipment.confirmation)
      );
      const missingBoms = PNS.filter(part => projectNames.has(part.project) && part.bom !== 'Uploaded');
      const lowStock = MATERIALS.filter(material => material.warehouse < getThreshold(material.code));
      const lifecycleCounts = PO_STATUS_FLOW.map(status => ({
        status,
        count:pos.filter(po => poLifecycle(po.id) === status).length,
      }));

      const managementActions = [
        ...projects.filter(project => project.status === 'Blocked').map(project => ({
          tone:'red', icon:'alert', title:`${project.name} is blocked`, meta:`${project.engineer} · ${project.site}`, action:`openProject('${project.id}')`, label:'Open'
        })),
        ...projects.filter(project => project.status === 'At Risk').map(project => ({
          tone:'amber', icon:'alert', title:`${project.name} is at risk`, meta:`Target ${project.targetDate} · ${project.progress}% schedule`, action:`openProject('${project.id}')`, label:'Review'
        })),
        ...pendingSignedValidation.map(delivery => ({
          tone:'blue', icon:'check', title:'Signed transfer needs validation', meta:`${delivery.code} · ${delivery.po}`, action:`openMfgDelivery('${delivery.code}')`, label:'Validate'
        })),
        ...pendingCustomerConfirmation.map(delivery => ({
          tone:'violet', icon:'truck', title:'Customer confirmation required', meta:`${delivery.code} · ${delivery.po}`, action:`openCustDelivery('${delivery.code}')`, label:'Confirm'
        })),
        ...failedSimulations.map(run => ({
          tone:'red', icon:'sim', title:`Simulation blocked for ${run.project}`, meta:`${run.id} · ${run.missingCount} missing materials`, action:`navigate('sim-launch')`, label:'Open'
        })),
        ...missingBoms.slice(0, 2).map(part => ({
          tone:'amber', icon:'bom', title:`BOM missing for ${part.pn}`, meta:`${part.po} · ${part.project}`, action:`openPo('${part.po}','Part Numbers')`, label:'Open PO'
        })),
      ].filter(item => !/\bis blocked\b|\bis at risk\b/i.test(item.title));

      const deliveryActivity = [
        ...manufacturing.map(delivery => ({
          code:delivery.code, type:'Manufacturing', po:delivery.po, project:delivery.project, date:delivery.date,
          status:syncMfgDeliveryLifecycle(delivery), statusType:productionStatusType(delivery.lifecycleStatus),
          action:`openMfgDelivery('${delivery.code}')`
        })),
        ...customerDeliveries.map(delivery => ({
          code:delivery.code, type:'Customer', po:delivery.po, project:delivery.project, date:delivery.date,
          status:custEffectiveStatus(delivery).label, statusType:custEffectiveStatus(delivery).type,
          action:`openCustDelivery('${delivery.code}')`
        })),
      ].sort((a,b) => String(b.date).localeCompare(String(a.date))).slice(0, 6);

      const engineers = [...new Set(projects.map(project => project.engineer))].map(engineer => {
        const ownedProjects = projects.filter(project => project.engineer === engineer);
        const ownedNames = new Set(ownedProjects.map(project => project.name));
        const ownedPos = pos.filter(po => ownedNames.has(po.project));
        return {
          engineer,
          projects:ownedProjects,
          pos:ownedPos,
          risks:ownedProjects.filter(project => project.status !== 'On Track').length,
        };
      });

      const lifecycleSummary = poList => {
        const counts = PO_STATUS_FLOW.map(status => ({ status, count:poList.filter(po => poLifecycle(po.id) === status).length })).filter(item => item.count);
        return counts.length ? counts.map(item => `<span>${item.count} ${item.status}</span>`).join('') : '<span>No POs</span>';
      };

      return `<div class="manager-dashboard">
        <header class="manager-dashboard-head">
          <div>
            <h1>Launch Manager Dashboard</h1>
            <div class="manager-dashboard-scope"><span>${projects.length} projects</span><span>${pos.length} purchase orders</span><span>${assigned.size} assigned to you</span></div>
          </div>
          <div class="manager-dashboard-head-actions">
            <button class="btn" onclick="navigate('audit-logs')">${icon('audit','')} Audit</button>
            <button class="btn primary" onclick="navigate('project-list')">${icon('projects','')} Open Projects</button>
          </div>
        </header>

        <section class="manager-kpi-grid">
          <button class="manager-kpi-card" onclick="navigate('project-list')">
            <span class="manager-kpi-icon blue">${icon('projects','')}</span>
            <span><small>Portfolio Projects</small><strong>${projects.length}</strong><em>Assigned launch portfolio</em></span>
          </button>
          <button class="manager-kpi-card" onclick="navigate('project-list')">
            <span class="manager-kpi-icon navy">${icon('po','')}</span>
            <span><small>Active Purchase Orders</small><strong>${activePos.length}</strong><em>${pos.length - activePos.length} delivered</em></span>
          </button>
          <button class="manager-kpi-card" onclick="navigate('project-list')">
            <span class="manager-kpi-icon amber">${icon('bom','')}</span>
            <span><small>BOM Readiness</small><strong>${bomCoverage}%</strong><em>${missingBoms.length} PN BOM${missingBoms.length === 1 ? '' : 's'} missing</em></span>
          </button>
          <button class="manager-kpi-card" onclick="navigate('finance-dashboard')">
            <span class="manager-kpi-icon green">${icon('money','')}</span>
            <span><small>Portfolio PO Value</small><strong>${financeMoney(portfolioValue)}</strong><em>Current PO versions</em></span>
          </button>
        </section>

        <section class="manager-lifecycle-panel">
          <div class="manager-panel-title"><div><h2>Purchase Order Lifecycle</h2><span>${pos.length} purchase orders</span></div></div>
          <div class="manager-lifecycle-grid">
            ${lifecycleCounts.map((item,index) => `<button onclick="navigate('project-list')" class="manager-life-stage stage-${index}">
              <span class="manager-life-index">${index + 1}</span>
              <span class="manager-life-copy"><small>${item.status}</small><strong>${item.count}</strong></span>
            </button>`).join('')}
          </div>
        </section>

        <div class="manager-main-grid">
          <section class="manager-panel manager-portfolio-panel">
            <div class="manager-panel-head"><div><h2>Project Portfolio</h2><span>PO lifecycle and BOM coverage</span></div><button class="btn sm" onclick="navigate('project-list')">View all ${icon('chevRight','')}</button></div>
            <div class="manager-table-wrap"><table class="manager-project-table"><thead><tr><th>Project</th><th>Responsible</th><th>PO Lifecycle</th><th>BOM</th><th></th></tr></thead><tbody>
              ${projects.map(project => {
                const projectPos = posForProject(project.name);
                const readiness = projectBomReadiness(project.name);
                return `<tr onclick="openProject('${project.id}')">
                  <td><strong>${project.name}</strong><span>${project.id} · ${project.customer}</span></td>
                  <td><strong>${project.engineer}</strong><span>${project.site}</span></td>
                  <td><strong>${projectPos.length} purchase order${projectPos.length === 1 ? '' : 's'}</strong><div class="manager-lifecycle-summary">${lifecycleSummary(projectPos)}</div></td>
                  <td><strong>${readiness.percent}%</strong><div class="manager-progress bom"><i style="width:${readiness.percent}%"></i></div><span>${readiness.uploaded}/${readiness.total} PN BOMs</span></td>
                  <td><button class="manager-row-open" aria-label="Open ${project.name}">${icon('chevRight','')}</button></td>
                </tr>`;
              }).join('')}
            </tbody></table></div>
          </section>

          <aside class="manager-panel manager-actions-panel">
            <div class="manager-panel-head"><div><h2>Management Actions</h2><span>${managementActions.length} open item${managementActions.length === 1 ? '' : 's'}</span></div></div>
            <div class="manager-action-list">
              ${managementActions.length ? managementActions.slice(0, 7).map(item => `<div class="manager-action-item">
                <span class="manager-action-icon ${item.tone}">${icon(item.icon,'')}</span>
                <div><strong>${item.title}</strong><span>${item.meta}</span></div>
                <button class="btn sm" onclick="${item.action}">${item.label}</button>
              </div>`).join('') : `<div class="manager-empty">${icon('check','')}<strong>No action required</strong></div>`}
            </div>
          </aside>
        </div>

        <section class="manager-control-grid">
          <article class="manager-panel">
            <div class="manager-panel-head"><div><h2>Delivery Oversight</h2><span>${activeManufacturing.length} manufacturing · ${openCustomerDeliveries.length} customer open</span></div></div>
            <div class="manager-delivery-list">
              ${deliveryActivity.map(item => `<button class="manager-delivery-item" onclick="${item.action}">
                <span class="manager-delivery-icon ${item.type === 'Manufacturing' ? 'manufacturing' : 'customer'}">${icon(item.type === 'Manufacturing' ? 'stock' : 'truck','')}</span>
                <span class="manager-delivery-main"><strong class="mono">${item.code}</strong><small>${item.po} · ${item.project}</small></span>
                <span class="manager-delivery-date">${item.date}</span>
                ${statusBadge(item.status,item.statusType)}
                ${icon('chevRight','')}
              </button>`).join('')}
            </div>
          </article>

          <article class="manager-panel">
            <div class="manager-panel-head"><div><h2>Operational Control</h2><span>Current portfolio indicators</span></div></div>
            <div class="manager-control-metrics">
              <button onclick="navigate('sim-launch')"><span class="manager-control-icon blue">${icon('sim','')}</span><span><small>Simulation Success</small><strong>${simulationRate}%</strong><em>${passedSimulations}/${simulations.length} passed</em></span></button>
              <button onclick="navigate('stock-dashboard')"><span class="manager-control-icon red">${icon('alert','')}</span><span><small>Low Stock Materials</small><strong>${lowStock.length}</strong><em>Below configured threshold</em></span></button>
              <button onclick="navigate('project-list')"><span class="manager-control-icon amber">${icon('bom','')}</span><span><small>Missing PN BOMs</small><strong>${missingBoms.length}</strong><em>${bomCoverage}% portfolio coverage</em></span></button>
              <button onclick="navigate('audit-logs')"><span class="manager-control-icon violet">${icon('audit','')}</span><span><small>Pending Validations</small><strong>${pendingSignedValidation.length + pendingCustomerConfirmation.length}</strong><em>Documents and confirmations</em></span></button>
            </div>
          </article>

          <article class="manager-panel">
            <div class="manager-panel-head"><div><h2>Team Ownership</h2><span>${engineers.length} launch engineers</span></div></div>
            <div class="manager-team-list">
              ${engineers.map(member => `<button onclick="openProject('${member.projects[0].id}')" class="manager-team-item">
                <span class="manager-team-avatar">${member.engineer.split(' ').map(part => part[0]).join('').slice(0,2)}</span>
                <span><strong>${member.engineer}</strong><small>${member.projects.length} project${member.projects.length === 1 ? '' : 's'} · ${member.pos.length} POs</small></span>
                ${icon('chevRight','')}
              </button>`).join('')}
            </div>
          </article>
        </section>
      </div>`;
    }

    function dashPlant() {
      const projects = PROJECTS;
      const pos = POS;
      const totalRevenue = REVENUE_ROWS.reduce((sum, row) => sum + row.revenue, 0);
      const totalForecast = REVENUE_ROWS.reduce((sum, row) => sum + row.forecast, 0);
      const forecastAttainment = totalForecast ? Math.round((totalRevenue / totalForecast) * 100) : 0;
      const outstandingInvoices = INVOICES.filter(invoice => ['Outstanding','Overdue'].includes(invoice.status));
      const outstandingValue = outstandingInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
      const blockedProjects = [];
      const simulations = SIMULATION_HISTORY;
      const passedSimulations = simulations.filter(run => run.result === 'YES').length;
      const simulationRate = simulations.length ? Math.round((passedSimulations / simulations.length) * 100) : 0;
      const bomTotal = PNS.length;
      const bomUploaded = PNS.filter(part => part.bom === 'Uploaded').length;
      const bomCoverage = bomTotal ? Math.round((bomUploaded / bomTotal) * 100) : 0;
      const missingBoms = PNS.filter(part => part.bom !== 'Uploaded');
      const lowStock = MATERIALS.filter(material => material.warehouse < getThreshold(material.code));
      const lifecycleCounts = PO_STATUS_FLOW.map(status => ({
        status,
        count:pos.filter(po => poLifecycle(po.id) === status).length,
      }));
      const customerQuantity = CUST_DELIVERIES.reduce((sum, delivery) => sum + Number(delivery.qty || 0), 0);
      const customerDelivered = CUST_DELIVERIES.reduce((sum, delivery) => sum + Number(delivery.delivered || 0), 0);
      const deliveryRate = customerQuantity ? Math.round((customerDelivered / customerQuantity) * 100) : 0;
      const openCustomerDeliveries = CUST_DELIVERIES.filter(delivery => !['Delivered','Cancelled'].includes(custEffectiveStatus(delivery).label));
      const pendingCustomerConfirmation = CUST_DELIVERIES.filter(delivery =>
        (delivery.shipments || []).some(shipment => shipment.status !== 'Planned' && !shipment.confirmation)
      );
      const activeManufacturing = MFG_DELIVERIES.filter(delivery => delivery.status !== 'Cancelled' && syncMfgDeliveryLifecycle(delivery) !== 'Delivered');
      const auditThisWeek = AUDIT_LOGS.filter(log => log.date >= '2026-07-16').length;

      const executiveAlerts = [
        ...blockedProjects.map(project => ({
          tone:'red', icon:'alert', title:`${project.name} is blocked`, meta:`${project.engineer} · ${project.progress}% schedule`, action:`openProject('${project.id}')`, label:'View'
        })),
        ...projects.filter(project => project.status === 'At Risk').map(project => ({
          tone:'amber', icon:'alert', title:`${project.name} is at risk`, meta:`Target ${project.targetDate}`, action:`openProject('${project.id}')`, label:'Review'
        })),
        ...INVOICES.filter(invoice => invoice.status === 'Overdue').map(invoice => ({
          tone:'red', icon:'invoice', title:`Invoice ${invoice.id} is overdue`, meta:`${invoice.project} · ${financeMoney(invoice.amount)}`, action:`navigate('finance-invoices')`, label:'Finance'
        })),
        ...pendingCustomerConfirmation.map(delivery => ({
          tone:'violet', icon:'truck', title:'Customer confirmation pending', meta:`${delivery.code} · ${delivery.project}`, action:`openCustDelivery('${delivery.code}')`, label:'View'
        })),
        ...(lowStock.length ? [{
          tone:'amber', icon:'stock', title:`${lowStock.length} materials below threshold`, meta:lowStock.map(material => material.code).join(', '), action:`navigate('stock-dashboard')`, label:'Stock'
        }] : []),
        ...missingBoms.slice(0, 1).map(part => ({
          tone:'blue', icon:'bom', title:`BOM missing for ${part.pn}`, meta:`${part.po} · ${part.project}`, action:`openProject('${PROJECTS.find(project => project.name === part.project)?.id || ''}')`, label:'Project'
        })),
      ].filter(item => !/\bis blocked\b|\bis at risk\b/i.test(item.title));

      const revenueMax = Math.max(...REVENUE_ROWS.map(row => Math.max(row.revenue,row.forecast)), 1);
      const customerActivity = [...CUST_DELIVERIES]
        .sort((a,b) => String(b.date).localeCompare(String(a.date)))
        .slice(0, 5);

      return `<div class="plant-dashboard">
        <header class="plant-dashboard-head">
          <div>
            <h1>Plant Manager Dashboard</h1>
            <div class="plant-dashboard-scope">
              <span>${projects.length} projects</span>
              <span>${pos.length} purchase orders</span>
              <span>Plant-wide read-only view</span>
            </div>
          </div>
          <div class="plant-dashboard-head-actions">
            <button class="btn" onclick="navigate('reports')">${icon('reports','')} Reports</button>
            <button class="btn" onclick="navigate('audit-logs')">${icon('audit','')} Audit</button>
            <button class="btn primary" onclick="navigate('finance-dashboard')">${icon('money','')} Finance</button>
          </div>
        </header>

        <section class="plant-kpi-grid">
          <button class="plant-kpi-card" onclick="navigate('finance-dashboard')">
            <span class="plant-kpi-icon green">${icon('money','')}</span>
            <span><small>Revenue</small><strong>${financeMoney(totalRevenue)}</strong><em>${forecastAttainment}% of forecast</em></span>
          </button>
          <button class="plant-kpi-card" onclick="navigate('project-list')">
            <span class="plant-kpi-icon blue">${icon('projects','')}</span>
            <span><small>Projects</small><strong>${projects.length}</strong><em>Portfolio overview</em></span>
          </button>
          <button class="plant-kpi-card" onclick="navigate('project-list')">
            <span class="plant-kpi-icon navy">${icon('truck','')}</span>
            <span><small>Customer Delivery</small><strong>${deliveryRate}%</strong><em>${customerDelivered.toLocaleString()} of ${customerQuantity.toLocaleString()} units</em></span>
          </button>
          <button class="plant-kpi-card" onclick="navigate('finance-invoices')">
            <span class="plant-kpi-icon red">${icon('invoice','')}</span>
            <span><small>Outstanding Invoices</small><strong>${financeMoney(outstandingValue)}</strong><em>${outstandingInvoices.length} open invoice${outstandingInvoices.length === 1 ? '' : 's'}</em></span>
          </button>
        </section>

        <section class="plant-lifecycle-panel">
          <div class="plant-panel-head"><div><h2>Purchase Order Lifecycle</h2><span>${pos.length} purchase orders across all projects</span></div></div>
          <div class="plant-lifecycle-grid">
            ${lifecycleCounts.map((item,index) => `<button onclick="navigate('project-list')" class="plant-life-stage stage-${index}">
              <span>${index + 1}</span>
              <div><small>${item.status}</small><strong>${item.count}</strong></div>
            </button>`).join('')}
          </div>
        </section>

        <div class="plant-main-grid">
          <section class="plant-panel plant-project-panel">
            <div class="plant-panel-head"><div><h2>Project Performance</h2><span>Lifecycle, BOM coverage and financial position</span></div><button class="btn sm" onclick="navigate('project-list')">View Projects ${icon('chevRight','')}</button></div>
            <div class="plant-table-wrap"><table class="plant-project-table"><thead><tr><th>Project</th><th>Responsible</th><th>Purchase Orders</th><th>BOM</th><th>Revenue</th><th></th></tr></thead><tbody>
              ${projects.map(project => {
                const projectPos = posForProject(project.name);
                const readiness = projectBomReadiness(project.name);
                const revenue = REVENUE_ROWS.find(row => row.project === project.name) || { revenue:0, forecast:0 };
                const lifecycle = PO_STATUS_FLOW.map(status => ({ status, count:projectPos.filter(po => poLifecycle(po.id) === status).length })).filter(item => item.count);
                return `<tr onclick="openProject('${project.id}')">
                  <td><strong>${project.name}</strong><span>${project.id} · ${project.customer}</span></td>
                  <td><strong>${project.engineer}</strong><span>${project.site}</span></td>
                  <td><strong>${projectPos.length} purchase order${projectPos.length === 1 ? '' : 's'}</strong><div class="plant-po-summary">${lifecycle.map(item => `<span>${item.count} ${item.status}</span>`).join('')}</div></td>
                  <td><strong>${readiness.percent}%</strong><div class="plant-progress bom"><i style="width:${readiness.percent}%"></i></div><span>${readiness.uploaded}/${readiness.total} PN BOMs</span></td>
                  <td><strong>${financeMoney(revenue.revenue)}</strong><span>${revenue.forecast ? Math.round(revenue.revenue / revenue.forecast * 100) : 0}% of forecast</span></td>
                  <td><button class="plant-row-open" aria-label="Open ${project.name}">${icon('chevRight','')}</button></td>
                </tr>`;
              }).join('')}
            </tbody></table></div>
          </section>

          <aside class="plant-panel plant-alert-panel">
            <div class="plant-panel-head"><div><h2>Executive Attention</h2><span>${executiveAlerts.length} open item${executiveAlerts.length === 1 ? '' : 's'}</span></div></div>
            <div class="plant-alert-list">
              ${executiveAlerts.length ? executiveAlerts.slice(0, 7).map(item => `<div class="plant-alert-item">
                <span class="plant-alert-icon ${item.tone}">${icon(item.icon,'')}</span>
                <div><strong>${item.title}</strong><span>${item.meta}</span></div>
                <button class="btn sm" onclick="${item.action}">${item.label}</button>
              </div>`).join('') : `<div class="plant-empty">${icon('check','')}<strong>No executive action required</strong></div>`}
            </div>
          </aside>
        </div>

        <section class="plant-lower-grid">
          <article class="plant-panel">
            <div class="plant-panel-head"><div><h2>Financial Performance</h2><span>${financeMoney(totalRevenue)} actual · ${financeMoney(totalForecast)} forecast</span></div><button class="btn sm" onclick="navigate('finance-dashboard')">Open Finance</button></div>
            <div class="plant-finance-list">
              ${REVENUE_ROWS.map(row => {
                const actualPct = Math.min(100,Math.round(row.revenue / revenueMax * 100));
                const forecastPct = Math.min(100,Math.round(row.forecast / revenueMax * 100));
                const variance = row.revenue - row.forecast;
                return `<button onclick="openProject('${PROJECTS.find(project => project.name === row.project)?.id || ''}')" class="plant-finance-row">
                  <span class="plant-finance-name"><strong>${row.project}</strong><small>${row.customer}</small></span>
                  <span class="plant-finance-bars"><i class="forecast" style="width:${forecastPct}%"></i><i class="actual" style="width:${actualPct}%"></i></span>
                  <span class="plant-finance-values"><strong>${financeMoney(row.revenue)}</strong><small class="${variance < 0 ? 'negative' : 'positive'}">${variance < 0 ? '−' : '+'}${financeMoney(Math.abs(variance))}</small></span>
                </button>`;
              }).join('')}
            </div>
            <div class="plant-chart-legend"><span><i class="actual"></i>Actual</span><span><i class="forecast"></i>Forecast</span></div>
          </article>

          <article class="plant-panel">
            <div class="plant-panel-head"><div><h2>Customer Delivery Status</h2><span>${openCustomerDeliveries.length} open delivery records</span></div></div>
            <div class="plant-delivery-list">
              ${customerActivity.map(delivery => {
                const effective = custEffectiveStatus(delivery);
                return `<button onclick="openCustDelivery('${delivery.code}')">
                  <span class="plant-delivery-icon">${icon('truck','')}</span>
                  <span><strong class="mono">${delivery.code}</strong><small>${delivery.project} · ${delivery.po}</small></span>
                  <span class="plant-delivery-qty"><strong>${Number(delivery.delivered || 0).toLocaleString()} / ${Number(delivery.qty || 0).toLocaleString()}</strong><small>Delivered units</small></span>
                  ${statusBadge(effective.label,effective.type)}
                  ${icon('chevRight','')}
                </button>`;
              }).join('')}
            </div>
          </article>

          <article class="plant-panel">
            <div class="plant-panel-head"><div><h2>Plant Control</h2><span>Operational indicators</span></div></div>
            <div class="plant-control-grid">
              <button onclick="navigate('project-list')"><span class="plant-control-icon blue">${icon('sim','')}</span><span><small>Launch Simulations</small><strong>${simulationRate}%</strong><em>${passedSimulations}/${simulations.length} successful</em></span></button>
              <button onclick="navigate('project-list')"><span class="plant-control-icon amber">${icon('bom','')}</span><span><small>BOM Coverage</small><strong>${bomCoverage}%</strong><em>${missingBoms.length} missing</em></span></button>
              <button onclick="navigate('stock-dashboard')"><span class="plant-control-icon red">${icon('stock','')}</span><span><small>Stock Exposure</small><strong>${lowStock.length}</strong><em>Below threshold</em></span></button>
              <button onclick="navigate('project-list')"><span class="plant-control-icon violet">${icon('truck','')}</span><span><small>Active MFG Launches</small><strong>${activeManufacturing.length}</strong><em>Manufacturing transfers</em></span></button>
              <button onclick="navigate('audit-logs')"><span class="plant-control-icon navy">${icon('audit','')}</span><span><small>Audit Events</small><strong>${auditThisWeek}</strong><em>Since 16 July</em></span></button>
              <button onclick="navigate('reports')"><span class="plant-control-icon green">${icon('reports','')}</span><span><small>Plant Reports</small><strong>${projects.length}</strong><em>Project reporting scopes</em></span></button>
            </div>
          </article>
        </section>
      </div>`;
    }

    function dashWarehouseLead() {
      return `
  <div class="page-title-row"><div><div class="page-title">Warehouse Dashboard</div><div class="page-sub">Pending deliveries, today's deliveries, low stock, transit</div></div></div>
  <div class="grid g4" style="margin-bottom:16px;">
    <div class="kpi-card"><div class="kpi-label">Pending Deliveries</div><div class="kpi-value">${MFG_DELIVERIES.filter(d => d.status === 'Pending Approval').length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Today's Deliveries</div><div class="kpi-value">1</div></div>
    <div class="kpi-card"><div class="kpi-label">Transit Stock</div><div class="kpi-value">1,120</div></div>
    <div class="kpi-card"><div class="kpi-label">Low Stock Items</div><div class="kpi-value" style="color:var(--danger)">2</div></div>
  </div>
  <div class="card" style="margin-bottom:16px;">
    <div class="section-title">Warehouse Activity <span class="hint">Manufacturing deliveries</span></div>
    ${mfgTable(MFG_DELIVERIES.slice(0, 4))}
  </div>
  <div class="card"><div class="section-title">Low Stock</div>
    ${STOCK_ALERTS.map(a => `<div style="display:flex; justify-content:space-between; align-items:center; padding:9px 0; border-bottom:1px solid var(--border-soft);">
      <div><div class="mono" style="font-size:12px;">${a.code}</div><div style="font-size:11.5px; color:var(--ink-faint);">${a.desc}</div></div>
      ${statusBadge(a.level, a.statusType)}
    </div>`).join('')}
  </div>`;
    }

    function dashWarehouseStaff() {
      return `
  <div class="page-title-row"><div><div class="page-title">Reception Dashboard</div><div class="page-sub">Record supplier receipts only — other operational areas are restricted</div></div></div>
  <div class="grid g3" style="margin-bottom:16px;">
    <div class="kpi-card"><div class="kpi-label">Receipts today</div><div class="kpi-value">7</div></div>
    <div class="kpi-card"><div class="kpi-label">Units received</div><div class="kpi-value">1,840</div></div>
    <div class="kpi-card"><div class="kpi-label">Correction window</div><div class="kpi-value" style="font-size:16px;">24 hours</div></div>
  </div>
  <div class="card">
    <div class="section-title">Start a material reception</div>
    <p style="color:var(--ink-soft); font-size:12.5px; margin-bottom:14px;">Search by material part number or description, then record the quantity received. Your entry is timestamped and becomes immutable after 24 hours.</p>
    <button class="btn primary" onclick="navigate('stock-reception')">Open Stock Reception</button>
  </div>`;
    }

    function dashProductionPackingCoordinator() {
      const productionLines = mfgLaunchLines().filter(item => item.line.status === 'In Progress');
      const packingLines = mfgLaunchLines().filter(item => item.line.status === 'Done');
      const queue = MFG_DELIVERIES.filter(delivery => delivery.status !== 'Cancelled' && mfgDeliveryPnQuantities(delivery).some(line => ['In Progress','Done'].includes(mfgNormalizeLaunchLine(delivery,line).status)));
      return `
  <div class="page-title-row"><div><div class="page-title">Production &amp; Packing Dashboard</div><div class="page-sub">Confirm production completion and packaging from one controlled work queue</div></div></div>
  <div class="grid g4" style="margin-bottom:16px;">
    <div class="kpi-card"><div class="kpi-label">In production</div><div class="kpi-value">${productionLines.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Waiting to pack</div><div class="kpi-value" style="color:var(--warning)">${packingLines.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Active launches</div><div class="kpi-value" style="color:var(--success)">${queue.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Priority launches</div><div class="kpi-value">${queue.filter(delivery => delivery.priority === 'High' || delivery.priority === 'Urgent').length}</div></div>
  </div>
  <div class="card"><div class="section-title">Production &amp; packing queue <button class="btn sm primary" onclick="navigate('production-packing')">Open full queue</button></div>
    ${productionQueueHtml(queue)}
  </div>`;
    }

    function dashAdmin() {
      const active = ADMIN_USERS.filter(user => user.status === 'Active').length;
      const inactive = ADMIN_USERS.filter(user => user.status === 'Inactive').length;
      const locked = ADMIN_USERS.filter(user => user.locked).length;
      const failures = ADMIN_LOGIN_EVENTS.filter(event => event.result === 'Failed').length;
      const referenceEntries = Object.values(ADMIN_REFERENCE_LISTS).reduce((sum,list) => sum + list.entries.length,0);
      const attentionUsers = ADMIN_USERS.filter(user => user.locked || user.status === 'Inactive');
      const backend = launchApi.snapshot;
      const backendSummary = backend
        ? `<div class="admin-backend-strip"><span class="admin-backend-state online"></span><div><strong>${backend.backend}</strong><span>Persistent demo API connected</span></div><dl><div><dt>Users</dt><dd>${backend.users}</dd></div><div><dt>Projects</dt><dd>${backend.projects}</dd></div><div><dt>Assignments</dt><dd>${backend.assignments}</dd></div><div><dt>POs</dt><dd>${backend.purchase_orders}</dd></div><div><dt>Launches</dt><dd>${backend.launches}</dd></div></dl></div>`
        : `<div class="admin-backend-strip offline"><span class="admin-backend-state"></span><div><strong>Local demo mode</strong><span>${launchApi.loading ? 'Connecting to FastAPI...' : 'FastAPI is unavailable; current mock data remains usable.'}</span></div></div>`;
      return `<div class="admin-shell">
  <div class="admin-head"><div><h2>Administration</h2></div><div class="admin-head-actions"><button class="btn primary" onclick="adminOpenUserForm('create')">${icon('plus','')} Create User</button></div></div>
  ${backendSummary}
  <div class="admin-kpis">
    <div class="admin-kpi"><div class="admin-kpi-top"><span class="admin-kpi-label">Active Accounts</span><span class="admin-kpi-icon">${icon('users','')}</span></div><div class="admin-kpi-value">${active}</div></div>
    <div class="admin-kpi"><div class="admin-kpi-top"><span class="admin-kpi-label">Locked Accounts</span><span class="admin-kpi-icon">${icon('lock','')}</span></div><div class="admin-kpi-value" style="color:${locked ? 'var(--danger)' : '#000'};">${locked}</div></div>
    <div class="admin-kpi"><div class="admin-kpi-top"><span class="admin-kpi-label">Failed Logins</span><span class="admin-kpi-icon">${icon('alert','')}</span></div><div class="admin-kpi-value">${failures}</div></div>
    <div class="admin-kpi"><div class="admin-kpi-top"><span class="admin-kpi-label">Reference Entries</span><span class="admin-kpi-icon">${icon('columns','')}</span></div><div class="admin-kpi-value">${referenceEntries}</div></div>
  </div>
  <div class="admin-grid">
    <div class="card admin-card"><div class="admin-card-head"><h3>Access Attention</h3>${statusBadge(`${locked + inactive} records`,locked ? 'warning' : 'neutral')}</div>
      <div class="admin-attention-list">${attentionUsers.length ? attentionUsers.map(user => `<div class="admin-attention"><div class="admin-attention-icon ${user.locked ? 'danger' : ''}">${icon(user.locked ? 'lock' : 'users','')}</div><div><strong>${user.fullName}</strong><span>${user.locked ? `${user.failedAttempts} failed attempts · account locked` : 'Account inactive · login blocked'}</span></div><button class="btn sm" onclick="openAdminUser('${user.id}')">Review</button></div>`).join('') : `<div class="empty-state" style="padding:24px;"><div class="e-title">No access issues</div></div>`}</div>
    </div>
    <div class="card admin-card"><div class="admin-card-head"><h3>Administration Areas</h3></div>
      <div class="admin-quick-grid">
        <button class="admin-quick-action" onclick="navigate('admin-users')">${icon('users','')}<strong>User Accounts</strong></button>
        <button class="admin-quick-action" onclick="navigate('admin-project-assignments')">${icon('projects','')}<strong>Project Access</strong></button>
        <button class="admin-quick-action" onclick="navigate('admin-reference-data')">${icon('columns','')}<strong>Reference Lists</strong></button>
        <button class="admin-quick-action" onclick="navigate('admin-system-activity')">${icon('history','')}<strong>Login Audit</strong></button>
      </div>
    </div>
  </div>
  <div class="card admin-card"><div class="admin-card-head"><h3>Recent Login Events</h3><button class="btn sm" onclick="navigate('admin-system-activity')">Open Login Audit</button></div>
    <div class="table-scroll"><table><thead><tr><th>Timestamp</th><th>Username</th><th>Result</th><th>Reason</th><th>Source</th></tr></thead><tbody>${ADMIN_LOGIN_EVENTS.slice(0,5).map(event => `<tr><td class="mono">${event.time}</td><td class="mono">${event.username}</td><td>${statusBadge(event.result,event.result === 'Successful' ? 'success' : 'danger')}</td><td>${event.reason}</td><td class="mono">${event.source}</td></tr>`).join('')}</tbody></table></div>
  </div></div>`;
    }

    /* ============ SHARED TABLES ============ */
    function poTable(list) {
      return `<table><thead><tr><th>PO</th><th>Project</th><th>Customer</th><th>Version</th><th>Status</th><th>Delivery</th></tr></thead>
    <tbody>${list.map(po => `<tr class="clickable-row" onclick="navigate('po-workspace')">
      <td class="mono">${po.id}</td><td>${po.project}</td><td>${po.customer}</td>
      <td class="mono">${po.version}</td><td>${statusBadge(po.status, po.statusType)}</td><td>${po.delivery}</td>
    </tr>`).join('')}</tbody></table>`;
    }
    function timelineHtml(steps) {
      return `<div class="timeline">${steps.map(s => `<div class="tl-item">
    <div class="tl-dot ${s.done ? 'done' : ''}"></div><div class="tl-title">${s.title}</div><div class="tl-time">${s.time}</div>
  </div>`).join('')}</div>`;
    }
    function bomMaterialTable(cols, rows, tableId = '') {
      cols = cols || ['code', 'desc', 'required', 'warehouse', 'wip', 'missing'];
      rows = rows || MATERIALS;
      const headers = { code: 'Material', desc: 'Description', required: 'Required', warehouse: 'Warehouse', wip: 'WIP', missing: 'Missing', cutman: 'CutMan', transit: 'Transit', supplier: 'Supplier', type: 'Type' };
      if (rows.length === 0) return emptyStateBlock('No materials found', 'Try adjusting or resetting your filters.', 'resetMaterialFilters');
      return `<table${tableId ? ` id="${tableId}"` : ''}><thead><tr>${cols.map(c => `<th>${headers[c]}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(m => `<tr class="clickable-row" onclick="openMaterialDetail('${inlineJsValue(m.code)}')">
      ${cols.map(c => {
        const val = m[c];
        if (c === 'code') return `<td class="mono">${val}</td>`;
        if (c === 'desc') return `<td>${val}</td>`;
        if (c === 'type') return `<td>${val}</td>`;
        if (c === 'supplier') return `<td>${val}</td>`;
        if (c === 'missing') return `<td class="mono" style="color:${val > 0 ? 'var(--danger)' : 'var(--ink-soft)'}; font-weight:700;">${val}</td>`;
        return `<td class="mono">${val}</td>`;
      }).join('')}
    </tr>`).join('')}</tbody></table>`;
    }

    /* ---- Materials filtering + toolbar ---- */
    function setMaterialSearch(v) { materialFilters.search = v; renderPage(); }
    function setMaterialFilter(key, v) { materialFilters[key] = v; renderPage(); }
    function clearMaterialFilter(key) { materialFilters[key] = ''; renderPage(); }
    function resetMaterialFilters() { materialFilters = { search: '', type: '', warehouse: '', missing: '' }; renderPage(); }
    function filterMaterials() {
      const f = materialFilters;
      return MATERIALS.filter(m => {
        if (f.search && !(`${m.code} ${m.desc}`.toLowerCase().includes(f.search.toLowerCase()))) return false;
        if (f.type && m.type !== f.type) return false;
        if (f.warehouse === 'Available' && m.warehouse <= 0) return false;
        if (f.warehouse === 'Missing' && m.missing <= 0) return false;
        if (f.warehouse === 'Transit' && m.transit <= 0) return false;
        if (f.warehouse === 'WIP' && m.wip <= 0) return false;
        if (f.missing === 'Low Stock' && m.warehouse >= m.threshold) return false;
        if (f.missing === 'Missing Only' && m.missing <= 0) return false;
        return true;
      });
    }
    function uniqueValues(arr, key) { return [...new Set(arr.map(x => x[key]))].sort(); }
    function materialsToolbarHtml() {
      const opt = (key, list, placeholder) => `<select class="tt-select" onchange="setMaterialFilter('${key}', this.value)">
    <option value="">${placeholder}</option>
    ${list.map(v => `<option value="${v.value}" ${materialFilters[key] === v.value ? 'selected' : ''}>${v.label}</option>`).join('')}
  </select>`;
      return `<div class="table-toolbar">
    <div class="tt-search">${icon('search', '')}<input type="text" placeholder="Search material…" value="${materialFilters.search}" oninput="setMaterialSearch(this.value)"/></div>
    ${opt('type', uniqueValues(MATERIALS, 'type').map(v => ({ value: v, label: v })), 'Material Type')}
    ${opt('warehouse', [{ value: 'Available', label: 'Available' }, { value: 'Missing', label: 'Missing' }, { value: 'Transit', label: 'Transit' }, { value: 'WIP', label: 'WIP' }], 'Warehouse')}
    ${opt('missing', [{ value: 'Low Stock', label: 'Low Stock' }, { value: 'Missing Only', label: 'Missing Only' }], 'Missing')}
    <div class="tt-spacer"></div>
    <div class="tt-icon-btn" title="Refresh" onclick="refreshNotice()">${icon('refresh', '')}</div>
    <div class="tt-icon-btn" title="Export" onclick="exportNotice()">${icon('download', '')}</div>
  </div>`;
    }
    function materialsBlock(cols) {
      const rows = filterMaterials();
      return `${materialsToolbarHtml()}
    ${filterChips(materialFilters, { type: 'Type', warehouse: 'Warehouse', missing: 'Missing' }, 'clearMaterialFilter', 'resetMaterialFilters')}
    <div class="table-head-row">${rowCountLabel(rows.length, 'material')}</div>
    ${bomMaterialTable(cols, rows)}`;
    }

    function assignedProjectNames() {
      const shortName = currentRole === 'engineer' ? 'A. Rahal' : currentRole === 'manager' ? 'S. Ait Oubou' : '';
      return new Set(ADMIN_ASSIGNMENTS.filter(a => a.user === shortName).map(a => a.project));
    }
    function visibleProjects() {
      if (currentRole === 'engineer') {
        const assigned = assignedProjectNames();
        return PROJECTS.filter(project => assigned.has(project.name));
      }
      return PROJECTS;
    }
    function canWriteProject(project) {
      if (currentRole === 'plant') return false;
      if (currentRole === 'engineer' || currentRole === 'manager') return assignedProjectNames().has(project.name);
      return can('editRecord') === true;
    }
    function writableProjects() { return PROJECTS.filter(project => canWriteProject(project)); }
    function projectForContext() {
      const contextual = PROJECTS.find(p => p.name === openContext.project || p.id === openContext.project)
        || PROJECTS.find(p => p.name === POS.find(po => po.id === openContext.po)?.project)
        || PROJECTS[0];
      if (currentRole === 'engineer' && !assignedProjectNames().has(contextual.name)) return visibleProjects()[0] || contextual;
      return contextual;
    }
    function posForProject(projectName) { return POS.filter(po => po.project === projectName); }
    function pnsForPo(poId) { return PNS.filter(pn => pn.po === poId); }
    function pnsForProject(projectName) { return PNS.filter(pn => pn.project === projectName); }
    function bomReadinessForPns(pns) {
      const total = pns.length;
      const uploaded = pns.filter(pn => pn.bom === 'Uploaded').length;
      const missing = pns.filter(pn => pn.bom !== 'Uploaded');
      const percent = total ? Math.round(uploaded / total * 100) : 0;
      return { total, uploaded, missing, percent, ready: total > 0 && missing.length === 0 };
    }
    function poBomFileFor(poId) {
      return PO_BOM_FILES.filter(file => file.po === poId).slice(-1)[0] || null;
    }
    function poBomReadiness(poId) {
      return { ...bomReadinessForPns(pnsForPo(poId)), poBomFile:poBomFileFor(poId) };
    }
    function projectBomReadiness(projectName) { return bomReadinessForPns(pnsForProject(projectName)); }
    function bomImportScopePns(level, target) {
      if (level === 'pn') return PNS.filter(item => item.pn === target);
      if (level === 'po') return pnsForPo(target);
      return pnsForProject(target);
    }
    function bomImportProject(level, target) {
      if (level === 'project') return PROJECTS.find(item => item.name === target);
      if (level === 'po') return PROJECTS.find(item => item.name === POS.find(po => po.id === target)?.project);
      return PROJECTS.find(item => item.name === PNS.find(pn => pn.pn === target)?.project);
    }
    function bomImportLevelLabel(level) {
      return level === 'pn' ? 'PN BOM' : level === 'po' ? 'PO BOM' : 'Project BOM';
    }
    function bomImportTargetLabel(level, target) {
      return level === 'project' ? target : target;
    }
    function emptyBomImport(level, target) {
      return { open:true, level, target, stage:'upload', fileName:'', fileSize:'', rows:[], validationRun:false, approvedRows:new Set(), importedRecord:null };
    }
    function ensureBomImport(level, target) {
      if (!bomImport.open || bomImport.level !== level || bomImport.target !== target) bomImport = emptyBomImport(level, target);
    }
    function beginBomImport(level, target, renderNow = true) {
      const project = bomImportProject(level, target);
      if (!project || !canWriteProject(project)) {
        openModal('BOM upload not permitted', 'Only an assigned Launch Engineer or Launch Manager can import and validate this BOM.');
        return false;
      }
      bomImport = emptyBomImport(level, target);
      if (renderNow) renderPage();
      return true;
    }
    function closeBomImport() {
      const level = bomImport.level;
      if (level === 'po') poBomUpload = { open:false, po:'', fileName:'', fileSize:'', validated:false, imported:false };
      bomImport = { open:false, level:'', target:'', stage:'upload', fileName:'', fileSize:'', rows:[], validationRun:false, approvedRows:new Set(), importedRecord:null };
      if (level === 'pn' && currentPage === 'pn-bom-upload') navigate('pn-workspace'); else renderPage();
    }
    function bomImportExampleRows(level, target) {
      const scoped = bomImportScopePns(level, target);
      const fgpns = scoped.length ? scoped.map(item => item.pn) : [target];
      const shared = { material:'MAT-6630', description:'PVC tape black 19 mm', materialType:'Tape', usageQty:'0.35', unit:'M', supplier:'3M', scrapPct:'2.0' };
      const templates = [
        { material:'MAT-5512', description:'Connector housing 4-pin', materialType:'Connector', usageQty:'1', unit:'PCS', supplier:'TE Connectivity', scrapPct:'0.5' },
        { material:'MAT-4471', description:'Harness retention clip', materialType:'Clip', usageQty:'4', unit:'PCS', supplier:'Amphenol', scrapPct:'1.0' },
        { material:'MAT-2208', description:'Primary wire 0.5 mm red', materialType:'Wire', usageQty:'2.40', unit:'M', supplier:'Leoni', scrapPct:'3.0' },
        { material:'MAT-3390', description:'Cable sleeve 8 mm', materialType:'Tube', usageQty:'0.80', unit:'M', supplier:'Sumitomo', scrapPct:'1.5' },
        { material:'MAT-1207', description:'Terminal pin, gold plated', materialType:'Terminal', usageQty:'2', unit:'PCS', supplier:'Yazaki', scrapPct:'0.8' },
      ];
      let excelRow = 2;
      return fgpns.flatMap((fgpn, fgIndex) => {
        const materials = level === 'pn' ? [shared, templates[0], templates[1], templates[2]] : [shared, templates[(fgIndex + 1) % templates.length], templates[(fgIndex + 3) % templates.length]];
        return materials.map((material, index) => ({
          fgpn,
          material: material.material,
          description: material.description,
          materialType: material.materialType,
          usageQty: material.usageQty,
          unit: material.unit,
          supplier: material.supplier,
          scrapPct: material.scrapPct,
          effectiveDate: `2026-07-${String(1 + fgIndex).padStart(2,'0')}`,
          revision: `R${1 + fgIndex}`,
          sheet: 'BOM_Data',
          excelRow: excelRow++,
          approved: false,
        }));
      });
    }
    function bomImportUseExample() {
      const safeTarget = String(bomImport.target).replace(/[^A-Za-z0-9_-]+/g, '_');
      bomImport.fileName = `${safeTarget}_${bomImport.level.toUpperCase()}_BOM_example.xlsx`;
      bomImport.fileSize = '42 KB';
      bomImport.rows = bomImportExampleRows(bomImport.level, bomImport.target);
      bomImport.stage = 'extracted';
      bomImport.validationRun = false;
      bomImport.approvedRows = new Set();
      renderPage();
    }
    function bomImportSelectFile(event) {
      const file = event?.target?.files?.[0];
      if (!file) return;
      if (!/\.xlsx?$/i.test(file.name)) {
        openModal('Invalid BOM format', 'Select an Excel workbook in .xlsx or .xls format.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        openModal('BOM workbook is too large', 'The maximum accepted workbook size is 10 MB.');
        return;
      }
      bomImport.fileName = file.name;
      bomImport.fileSize = `${Math.max(1, Math.round(file.size / 1024))} KB`;
      bomImport.rows = bomImportExampleRows(bomImport.level, bomImport.target);
      bomImport.stage = 'extracted';
      bomImport.validationRun = false;
      bomImport.approvedRows = new Set();
      renderPage();
    }
    function bomImportAllowedFgpns() {
      return new Set(bomImportScopePns(bomImport.level, bomImport.target).map(item => item.pn));
    }
    function bomImportCellIssue(row, rowIndex, field) {
      const value = String(row[field] ?? '').trim();
      if (field === 'fgpn') {
        if (!value) return 'FGPN is required.';
        if (!bomImportAllowedFgpns().has(value)) return `FGPN is outside this ${bomImportLevelLabel(bomImport.level)} scope.`;
      }
      if (field === 'material') {
        if (!value) return 'Material PN is required.';
        if (!/^[A-Za-z0-9][A-Za-z0-9._-]{2,}$/.test(value)) return 'Use a valid material part number.';
        const duplicate = bomImport.rows.findIndex((other, index) => index !== rowIndex && String(other.fgpn).trim() === String(row.fgpn).trim() && String(other.material).trim().toLowerCase() === value.toLowerCase());
        if (duplicate >= 0) return `Duplicate of Excel row ${bomImport.rows[duplicate].excelRow}.`;
      }
      if (field === 'description' && value.length < 3) return 'Description is required.';
      if (field === 'materialType' && !value) return 'Material type is required.';
      if (field === 'usageQty' && (!(Number(value) > 0) || !Number.isFinite(Number(value)))) return 'Usage quantity must be greater than 0.';
      if (field === 'unit' && !['PCS','M','KG','L'].includes(value)) return 'Unit must be PCS, M, KG or L.';
      if (field === 'supplier' && value.length < 2) return 'Supplier is required.';
      if (field === 'scrapPct' && (!Number.isFinite(Number(value)) || Number(value) < 0 || Number(value) > 100)) return 'Scrap must be between 0 and 100.';
      if (field === 'effectiveDate' && !/^\d{4}-\d{2}-\d{2}$/.test(value)) return 'Use YYYY-MM-DD.';
      if (field === 'revision' && !value) return 'Revision is required.';
      return '';
    }
    const BOM_IMPORT_FIELDS = ['fgpn','material','description','materialType','usageQty','unit','supplier','scrapPct','effectiveDate','revision'];
    function bomImportRowIssues(row, index) {
      return BOM_IMPORT_FIELDS.map(field => ({ field, issue:bomImportCellIssue(row,index,field) })).filter(item => item.issue);
    }
    function bomImportStats() {
      const totalCells = bomImport.rows.length * BOM_IMPORT_FIELDS.length;
      const invalidCells = bomImport.rows.reduce((sum,row,index) => sum + bomImportRowIssues(row,index).length, 0);
      const fgpnCount = new Set(bomImport.rows.map(row => row.fgpn)).size;
      const materialCount = new Set(bomImport.rows.map(row => row.material)).size;
      const sharedMaterials = [...new Set(bomImport.rows.map(row => row.material))].filter(material => new Set(bomImport.rows.filter(row => row.material === material).map(row => row.fgpn)).size > 1).length;
      return { totalCells, invalidCells, validCells:totalCells-invalidCells, fgpnCount, materialCount, sharedMaterials };
    }
    function updateBomImportCell(index, field, value) {
      if (!bomImport.rows[index]) return;
      bomImport.rows[index][field] = value;
      bomImport.stage = 'extracted';
      bomImport.validationRun = true;
      bomImport.approvedRows.delete(index);
      renderPage();
    }
    function validateBomImportFields() {
      if (!bomImport.rows.length) {
        openModal('Extract a workbook first', 'Choose an Excel BOM file or load the example workbook before validation.');
        return;
      }
      bomImport.validationRun = true;
      const stats = bomImportStats();
      bomImport.stage = stats.invalidCells === 0 ? 'validated' : 'extracted';
      if (stats.invalidCells > 0) bomImport.approvedRows = new Set();
      renderPage();
      openModal(stats.invalidCells ? 'BOM fields need correction' : 'All extracted fields are valid', stats.invalidCells ? `${stats.invalidCells} extracted field${stats.invalidCells === 1 ? '' : 's'} must be corrected before row approval.` : `${stats.validCells} fields across ${bomImport.rows.length} BOM rows passed validation. Review and approve the rows before import.`);
    }
    function toggleBomImportRow(index) {
      if (bomImport.stage !== 'validated' || bomImportRowIssues(bomImport.rows[index],index).length) return;
      if (bomImport.approvedRows.has(index)) bomImport.approvedRows.delete(index); else bomImport.approvedRows.add(index);
      renderPage();
    }
    function approveAllBomImportRows() {
      if (bomImport.stage !== 'validated') return;
      bomImport.approvedRows = new Set(bomImport.rows.map((row,index) => index).filter(index => bomImportRowIssues(bomImport.rows[index],index).length === 0));
      renderPage();
    }
    function latestBomImportRecord(level, target) {
      return BOM_IMPORT_RECORDS.filter(record => record.level === level && record.target === target).slice(-1)[0] || null;
    }
    function importValidatedBom() {
      const stats = bomImportStats();
      if (bomImport.stage !== 'validated' || stats.invalidCells) {
        openModal('Field validation required', 'Validate every extracted field before importing the BOM.');
        return;
      }
      if (bomImport.approvedRows.size !== bomImport.rows.length) {
        openModal('Row approval required', `Approve all ${bomImport.rows.length} extracted BOM rows before the final import.`);
        return;
      }
      const level = bomImport.level;
      const target = bomImport.target;
      const scopedPns = bomImportScopePns(level, target);
      const currentVersions = level === 'po'
        ? PO_BOM_FILES.filter(file => file.po === target).map(file => Number(String(file.version).replace(/\D/g,'')) || 0)
        : level === 'project'
          ? [Number(String(PROJECT_BOM_META.version).replace(/\D/g,'')) || 0]
          : [Number(String(scopedPns[0]?.version).replace(/\D/g,'')) || 0];
      const version = `v${Math.max(0,...currentVersions) + 1}`;
      const now = new Date().toISOString().slice(0,10);
      const record = {
        id:`BOM-IMP-${String(BOM_IMPORT_RECORDS.length + 1).padStart(4,'0')}`,
        level,
        target,
        file:bomImport.fileName,
        fileSize:bomImport.fileSize,
        version,
        importedAt:now,
        importedBy:ROLE_PERSONA[currentRole].name,
        rows:bomImport.rows.map(row => ({ ...row, approved:true })),
        fgpnCount:stats.fgpnCount,
        materialCount:stats.materialCount,
        sharedMaterials:stats.sharedMaterials,
        validatedFields:stats.validCells,
        status:'Validated',
      };
      BOM_IMPORT_RECORDS.push(record);
      const uniqueFgpns = [...new Set(record.rows.map(row => row.fgpn))];
      uniqueFgpns.forEach(fgpn => { BOM_USAGE[fgpn] = {}; });
      record.rows.forEach(row => {
        BOM_USAGE[row.fgpn][row.material] = Number(row.usageQty);
        let material = MATERIALS.find(item => item.code === row.material);
        if (!material) {
          material = { code:row.material, desc:row.description, type:row.materialType, supplier:row.supplier, required:0, warehouse:0, cutman:0, wip:0, missing:0, threshold:0, transit:0, projects:[], pns:[] };
          MATERIALS.push(material);
          THRESHOLD_DEFAULTS[material.code] = 0;
        }
        if (!material.pns.includes(row.fgpn)) material.pns.push(row.fgpn);
        const pnProject = PNS.find(item => item.pn === row.fgpn)?.project;
        if (pnProject && !material.projects.includes(pnProject)) material.projects.push(pnProject);
      });
      scopedPns.forEach(pn => {
        pn.bom = 'Uploaded';
        pn.bomFile = `${record.file} · ${pn.pn}`;
        pn.bomUpdated = now;
        pn.version = version;
        pn.bomSource = `${bomImportLevelLabel(level)} Excel import`;
        if (pn.status === 'Waiting BOM') { pn.status = 'Ready'; pn.statusType = 'success'; }
      });
      if (level === 'po') {
        PO_BOM_FILES.push({ po:target, file:record.file, version, fgpnCount:record.fgpnCount, materialCount:record.rows.length, uploadedBy:record.importedBy, uploadedAt:now, status:'Validated' });
        const po = POS.find(item => item.id === target);
        if (po && po.status === 'Waiting BOM') { po.status = 'Ready'; po.statusType = 'success'; }
      }
      if (level === 'project') {
        PROJECT_BOM_META.version = version;
        PROJECT_BOM_META.materialsCount = record.materialCount;
        PROJECT_BOM_META.lastUpload = now;
        PROJECT_BOM_META.uploadedBy = record.importedBy;
      }
      const project = bomImportProject(level,target);
      AUDIT_LOGS.unshift({ id:`AUD-${10400 + AUDIT_LOGS.length}`, date:new Date().toISOString().slice(0,16).replace('T',' '), user:record.importedBy, module:'BOM', action:`${bomImportLevelLabel(level)} Excel imported`, entity:`${target} · ${version}`, project:project?.name || '', po:level === 'po' ? target : '', details:`${record.file}: ${record.fgpnCount} FGPNs, ${record.rows.length} rows and ${record.validatedFields} validated fields.` });
      bomImport.stage = 'imported';
      bomImport.importedRecord = record;
      renderPage();
      openModal(`${bomImportLevelLabel(level)} imported`, `${record.file} was stored as ${version}. Every extracted field and all ${record.rows.length} BOM rows were validated and approved.`);
    }
    function downloadBomExample() {
      const rows = bomImport.rows.length ? bomImport.rows : bomImportExampleRows(bomImport.level,bomImport.target);
      const headers = ['Finished Good PN','Material PN','Material Description','Material Type','Usage Quantity','Unit','Supplier','Scrap %','Effective Date','Revision'];
      const html = `<html><head><meta charset="UTF-8"></head><body><table><thead><tr>${headers.map(value => `<th>${value}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${[row.fgpn,row.material,row.description,row.materialType,row.usageQty,row.unit,row.supplier,row.scrapPct,row.effectiveDate,row.revision].map(value => `<td>${poEsc(value)}</td>`).join('')}</tr>`).join('')}</tbody></table></body></html>`;
      const blob = new Blob([html], { type:'application/vnd.ms-excel;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${String(bomImport.target).replace(/[^A-Za-z0-9_-]+/g,'_')}_BOM_Excel_example.xls`;
      document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url);
    }
    function bomImportCell(row, index, field, type = 'text', wide = false) {
      const issue = bomImportCellIssue(row,index,field);
      const stateClass = bomImport.validationRun ? (issue ? 'invalid' : 'valid') : '';
      const mark = bomImport.validationRun ? `<span class="bom-cell-mark">${issue ? '!' : '✓'}</span>` : '';
      let control = '';
      if (field === 'unit') {
        control = `<select class="bom-cell-input" onchange="updateBomImportCell(${index},'${field}',this.value)">${['PCS','M','KG','L'].map(value => `<option ${row[field] === value ? 'selected' : ''}>${value}</option>`).join('')}</select>`;
      } else if (field === 'materialType') {
        control = `<select class="bom-cell-input" onchange="updateBomImportCell(${index},'${field}',this.value)">${['Connector','Terminal','Wire','Tape','Tube','Clip','Other'].map(value => `<option ${row[field] === value ? 'selected' : ''}>${value}</option>`).join('')}</select>`;
      } else {
        control = `<input class="bom-cell-input" type="${type}" value="${poEsc(row[field])}" onchange="updateBomImportCell(${index},'${field}',this.value)"/>`;
      }
      return `<div class="bom-cell ${wide ? 'wide' : ''} ${stateClass}">${control}${mark}${issue && bomImport.validationRun ? `<div class="bom-cell-issue">${issue}</div>` : ''}</div>`;
    }
    function bomImportPanel(level, target) {
      ensureBomImport(level,target);
      const stats = bomImportStats();
      const stageIndex = bomImport.stage === 'upload' ? 0 : bomImport.stage === 'extracted' ? 1 : bomImport.stage === 'validated' ? 2 : 3;
      const levelLabel = bomImportLevelLabel(level);
      const allApproved = bomImport.rows.length > 0 && bomImport.approvedRows.size === bomImport.rows.length;
      const steps = ['Upload Excel','Review extraction','Validate & approve','Imported'];
      if (bomImport.stage === 'imported' && bomImport.importedRecord) {
        return `<div class="bom-import-shell"><div class="bom-import-header"><div><span class="ws-id">${levelLabel.toUpperCase()} IMPORT</span><strong>${poEsc(target)} · ${bomImport.importedRecord.version}</strong><span>Validated Excel extraction is now the current controlled BOM version.</span></div><button class="icon-btn" onclick="closeBomImport()">${icon('close','')}</button></div><div class="bom-import-body"><div class="bom-import-success">${icon('check','')}<strong>${bomImport.importedRecord.file} imported successfully</strong><span>${bomImport.importedRecord.fgpnCount} FGPNs · ${bomImport.importedRecord.rows.length} material rows · ${bomImport.importedRecord.validatedFields} validated fields</span></div>${bomImportedDashboard(level,target,bomImport.importedRecord)}</div></div>`;
      }
      return `<div class="bom-import-shell">
        <div class="bom-import-header">
          <div><span class="ws-id">${levelLabel.toUpperCase()} EXCEL IMPORT</span><strong>Extract, review and validate ${poEsc(target)}</strong><span>${level === 'pn' ? 'This workbook must contain one FGPN.' : `This workbook may contain multiple FGPNs; the same material may be reused by different FGPNs.`}</span></div>
          <button class="icon-btn" onclick="closeBomImport()" title="Close">${icon('close','')}</button>
        </div>
        <div class="bom-import-body">
          <div class="bom-import-steps">${steps.map((step,index) => `<div class="bom-import-step ${index < stageIndex ? 'done' : index === stageIndex ? 'active' : ''}"><b>${index < stageIndex ? '✓' : index + 1}</b>${step}</div>`).join('')}</div>
          <div class="bom-import-upload-grid">
            <div>
              <input id="bomImportFileInput" type="file" accept=".xlsx,.xls" style="display:none" onchange="bomImportSelectFile(event)"/>
              <label class="po-bom-dropzone" for="bomImportFileInput">${icon('upload','')}<strong>${bomImport.fileName ? poEsc(bomImport.fileName) : 'Choose Excel BOM workbook'}</strong><span>${bomImport.fileName ? `${poEsc(bomImport.fileSize)} · extraction completed` : '.xlsx or .xls · maximum 10 MB'}</span><span class="btn sm" style="margin-top:10px;pointer-events:none;">Browse workbook</span></label>
              <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:8px;"><button class="btn sm" onclick="bomImportUseExample()">${icon('FileText','')} Use example Excel</button><button class="btn sm" onclick="downloadBomExample()">${icon('download','')} Download Excel example</button></div>
            </div>
            <div class="bom-import-rules"><strong>Expected Excel columns</strong><p>Every extracted cell is editable and checked before import. Required fields cannot be empty.</p><div class="po-bom-column-chips"><span>Finished Good PN</span><span>Material PN</span><span>Description</span><span>Material Type</span><span>Usage Qty</span><span>Unit</span><span>Supplier</span><span>Scrap %</span><span>Effective Date</span><span>Revision</span></div><div class="bom-shared-note">${icon('bom','')}<div><strong>Controlled duplicate rule</strong><span>FGPN + Material PN must be unique. A Material PN may legitimately appear under several different FGPNs in PO and Project workbooks.</span></div></div></div>
          </div>
          ${bomImport.rows.length ? `
            <div class="bom-import-summary">
              <div class="kpi-card"><div class="kpi-label">FGPNs</div><div class="kpi-value">${stats.fgpnCount}</div></div>
              <div class="kpi-card"><div class="kpi-label">Material rows</div><div class="kpi-value">${bomImport.rows.length}</div></div>
              <div class="kpi-card"><div class="kpi-label">Validated fields</div><div class="kpi-value" style="color:${bomImport.validationRun ? (stats.invalidCells ? 'var(--warning)' : 'var(--success)') : 'var(--ink-faint)'}">${bomImport.validationRun ? stats.validCells : 0}/${stats.totalCells}</div></div>
              <div class="kpi-card"><div class="kpi-label">Shared materials</div><div class="kpi-value">${stats.sharedMaterials}</div></div>
              <div class="kpi-card"><div class="kpi-label">Approved rows</div><div class="kpi-value">${bomImport.approvedRows.size}/${bomImport.rows.length}</div></div>
            </div>
            <div class="bom-import-table-wrap"><table class="bom-import-table"><thead><tr><th>Excel row</th><th>Finished Good PN</th><th>Material PN</th><th>Description</th><th>Material Type</th><th>Usage Qty</th><th>Unit</th><th>Supplier</th><th>Scrap %</th><th>Effective Date</th><th>Revision</th><th>Row approval</th></tr></thead><tbody>${bomImport.rows.map((row,index) => `<tr><td class="mono">${row.sheet}!${row.excelRow}</td><td>${bomImportCell(row,index,'fgpn')}</td><td>${bomImportCell(row,index,'material')}</td><td>${bomImportCell(row,index,'description','text',true)}</td><td>${bomImportCell(row,index,'materialType')}</td><td>${bomImportCell(row,index,'usageQty','number')}</td><td>${bomImportCell(row,index,'unit')}</td><td>${bomImportCell(row,index,'supplier','text',true)}</td><td>${bomImportCell(row,index,'scrapPct','number')}</td><td>${bomImportCell(row,index,'effectiveDate','date')}</td><td>${bomImportCell(row,index,'revision')}</td><td><div class="bom-row-approval"><button class="btn sm ${bomImport.approvedRows.has(index) ? 'primary' : ''}" onclick="toggleBomImportRow(${index})" ${bomImport.stage === 'validated' ? '' : 'disabled'}>${bomImport.approvedRows.has(index) ? '✓ Approved' : 'Approve'}</button></div></td></tr>`).join('')}</tbody></table></div>
            <div class="bom-shared-note">${icon(stats.invalidCells ? 'alert' : 'check','')}<div><strong>${bomImport.validationRun ? (stats.invalidCells ? `${stats.invalidCells} field issue${stats.invalidCells === 1 ? '' : 's'} found` : 'Every extracted field passes validation') : 'Extraction ready for field validation'}</strong><span>${stats.sharedMaterials ? `${stats.sharedMaterials} material part number${stats.sharedMaterials === 1 ? ' is' : 's are'} shared across different FGPNs and accepted as valid.` : 'No cross-FGPN shared materials were detected in this workbook.'}</span></div></div>
          ` : ''}
          <div class="bom-import-actions"><span class="hint">Source workbook is preserved with the validated version and correction audit trail.</span><div><button class="btn" onclick="closeBomImport()">Cancel</button>${bomImport.rows.length ? `<button class="btn" onclick="validateBomImportFields()">${icon('audit','')} Validate all fields</button>${bomImport.stage === 'validated' ? `<button class="btn" onclick="approveAllBomImportRows()">${icon('check','')} Approve all rows</button><button class="btn primary" onclick="importValidatedBom()" ${allApproved ? '' : 'disabled'}>${icon('lock','')} Import validated ${levelLabel}</button>` : ''}` : ''}</div></div>
        </div>
      </div>`;
    }
    function bomImportedDashboard(level, target, suppliedRecord) {
      const record = suppliedRecord || latestBomImportRecord(level,target);
      if (!record) return '';
      const tableId = `${exportFileName(level)}-${exportFileName(target)}-bom-table`;
      const exportTitle = `${target} ${bomImportLevelLabel(level)}`;
      return `<div class="card" style="margin-top:14px;"><div class="section-title"><span>Validated Excel extraction <span class="hint">${record.file} · ${record.version}</span></span><div class="table-heading-actions">${statusBadge('All fields validated','success')}${tableExportActions(tableId,exportTitle)}</div></div><div class="grid g4" style="margin-bottom:12px;"><div class="kpi-card"><div class="kpi-label">FGPNs</div><div class="kpi-value" style="font-size:17px;">${record.fgpnCount}</div></div><div class="kpi-card"><div class="kpi-label">Rows</div><div class="kpi-value" style="font-size:17px;">${record.rows.length}</div></div><div class="kpi-card"><div class="kpi-label">Unique materials</div><div class="kpi-value" style="font-size:17px;">${record.materialCount}</div></div><div class="kpi-card"><div class="kpi-label">Validated fields</div><div class="kpi-value" style="font-size:17px;color:var(--success);">${record.validatedFields}</div></div></div><div class="table-scroll"><table id="${tableId}" class="bom-record-table"><thead><tr><th>FGPN</th><th>Material PN</th><th>Description</th><th>Type</th><th>Usage Qty</th><th>Unit</th><th>Supplier</th><th>Scrap</th><th>Effective</th><th>Revision</th><th>Status</th></tr></thead><tbody>${record.rows.map(row => `<tr><td class="mono">${row.fgpn}</td><td class="mono">${row.material}</td><td>${row.description}</td><td>${row.materialType}</td><td class="mono">${row.usageQty}</td><td>${row.unit}</td><td>${row.supplier}</td><td class="mono">${row.scrapPct}%</td><td class="mono">${row.effectiveDate}</td><td class="mono">${row.revision}</td><td>${statusBadge('Validated','success')}</td></tr>`).join('')}</tbody></table></div></div>`;
    }
    function bomCoverageHtml(readiness, compact) {
      const color = readiness.ready ? 'var(--success)' : readiness.percent >= 50 ? 'var(--warning)' : 'var(--danger)';
      return `<div class="bom-coverage ${compact ? 'compact' : ''}">
        <div class="bom-coverage-top"><strong>${readiness.percent}%</strong><span>${readiness.uploaded}/${readiness.total} PN BOMs</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${readiness.percent}%; background:${color}"></div></div>
      </div>`;
    }

    function poBomPreviewRows(poId) {
      const templates = [
        { material:'MAT-5512', desc:'Connector housing 4-pin', type:'Connector', usage:1, unit:'PCS', supplier:'TE Connectivity', scrap:0.5 },
        { material:'MAT-6630', desc:'PVC tape black 19mm', type:'Tape', usage:0.35, unit:'M', supplier:'3M', scrap:2.0 },
        { material:'MAT-4471', desc:'Harness retention clip', type:'Clip', usage:4, unit:'PCS', supplier:'Amphenol', scrap:1.0 },
        { material:'MAT-2208', desc:'Primary wire 0.5mm red', type:'Wire', usage:2.4, unit:'M', supplier:'Leoni', scrap:3.0 },
      ];
      return pnsForPo(poId).flatMap((pn, pnIndex) => [0,1].map(offset => {
        const material = templates[(pnIndex + offset) % templates.length];
        return { fgpn:pn.pn, ...material, effective:'2026-07-01' };
      }));
    }
    function openPoBomUploader(poId) {
      const po = POS.find(item => item.id === poId);
      const project = PROJECTS.find(item => item.name === po?.project);
      if (!po || !project || !canWriteProject(project)) {
        openModal('PO BOM upload not permitted', 'Only an assigned Launch Engineer or Launch Manager can upload a PO BOM version.');
        return;
      }
      openContext.po = poId; openContext.project = po.project;
      activeTab.po = 'PO BOM';
      poBomUpload = { open:true, po:poId, fileName:'', fileSize:'', validated:false, imported:false };
      beginBomImport('po', poId, false);
      if (currentPage !== 'po-workspace') navigate('po-workspace'); else renderPage();
    }
    function closePoBomUploader() {
      poBomUpload = { open:false, po:'', fileName:'', fileSize:'', validated:false, imported:false };
      closeBomImport();
    }
    function openProjectBomUploader(projectName) {
      const project = PROJECTS.find(item => item.name === projectName);
      if (!project || !canWriteProject(project)) {
        openModal('Project BOM upload not permitted', 'Only an assigned Launch Engineer or Launch Manager can import a Project BOM workbook.');
        return;
      }
      openContext.project = project.name;
      activeTab.project = 'Project BOM';
      beginBomImport('project', project.name, false);
      if (currentPage !== 'project-workspace') navigate('project-workspace'); else renderPage();
    }
    function poBomSelectFile(event) {
      const file = event?.target?.files?.[0];
      if (!file) return;
      if (!/\.xlsx?$/i.test(file.name)) {
        openModal('Invalid BOM format', 'Upload an Excel BOM workbook in .xlsx or .xls format.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        openModal('PO BOM file is too large', 'The workbook must be 10 MB or smaller.');
        return;
      }
      poBomUpload.fileName = file.name;
      poBomUpload.fileSize = `${Math.max(1, Math.round(file.size / 1024))} KB`;
      poBomUpload.validated = false;
      renderPage();
    }
    function poBomUseExample(poId) {
      poBomUpload = { open:true, po:poId, fileName:`${poId}_BOM_v1.xlsx`, fileSize:'84 KB', validated:false, imported:false };
      renderPage();
    }
    function validatePoBomUpload() {
      if (!poBomUpload.fileName) {
        openModal('Select a workbook', 'Choose an .xlsx PO BOM file or use the example workbook before validation.');
        return;
      }
      poBomUpload.validated = true;
      renderPage();
    }
    function importPoBomUpload(poId) {
      if (!poBomUpload.validated || poBomUpload.po !== poId) {
        openModal('Validation required', 'Validate the PO BOM workbook before importing it.');
        return;
      }
      const rows = poBomPreviewRows(poId);
      const versions = PO_BOM_FILES.filter(file => file.po === poId).map(file => Number(String(file.version).replace(/\D/g,'')) || 0);
      const version = `v${Math.max(0, ...versions) + 1}`;
      const now = new Date().toISOString().slice(0,10);
      const pns = pnsForPo(poId);
      PO_BOM_FILES.push({ po:poId, file:poBomUpload.fileName, version, fgpnCount:pns.length, materialCount:rows.length, uploadedBy:ROLE_PERSONA[currentRole].name, uploadedAt:now, status:'Validated' });
      pns.forEach(pn => {
        pn.bom = 'Uploaded'; pn.bomFile = `${poBomUpload.fileName} · ${pn.pn}`; pn.bomUpdated = now; pn.version = version; pn.bomSource = 'PO BOM upload';
        if (pn.status === 'Waiting BOM') { pn.status = 'Ready'; pn.statusType = 'success'; }
      });
      const po = POS.find(item => item.id === poId);
      if (po && po.status === 'Waiting BOM') { po.status = 'Ready'; po.statusType = 'success'; }
      AUDIT_LOGS.unshift({ id:`AUD-${10400 + AUDIT_LOGS.length}`, date:new Date().toISOString().slice(0,16).replace('T',' '), user:ROLE_PERSONA[currentRole].name, module:'BOM', action:'PO BOM uploaded', entity:`${poId} BOM ${version}`, project:po?.project || '', po:poId, details:`${poBomUpload.fileName} validated with ${pns.length} FGPNs and ${rows.length} material rows.` });
      poBomUpload.imported = true;
      poBomUpload.open = false;
      openModal('PO BOM imported', `${poBomUpload.fileName} was validated as ${version}. ${pns.length} Finished Good Part Numbers and ${rows.length} material rows are now linked to ${poId}.`);
      renderPage();
    }

    /* ============ PROJECT EXPLORER ============ */
    function projectExplorer(highlightType, highlightId) {
      const project = projectForContext();
      const projectPos = posForProject(project.name);
      return `<div class="explorer-panel">
    <div class="explorer-title">Project Explorer</div>
    <div class="explorer-tree">
      <div class="exp-row ${highlightType === 'project' ? 'active' : ''}" onclick="openProject('${project.id}')">
        ${icon('FolderOpen', 'exp-ic')}<span>${project.name}</span>
      </div>
      <div class="exp-children open">
        ${projectPos.map(po => {
        const isOpen = explorerOpen[po.id] ?? false;
        const poPns = pnsForPo(po.id);
        const poReady = poBomReadiness(po.id);
        return `
          <div class="exp-row" onclick="toggleExplorer('${po.id}')">
            <svg class="exp-chev ${isOpen ? 'open' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 6l6 6-6 6"/></svg>
            ${icon('FileText', 'exp-ic')}
            <span onclick="event.stopPropagation(); openPo('${po.id}')" style="${highlightType === 'po' && highlightId === po.id ? 'font-weight:700; color:var(--primary-dark);' : ''}">${po.id}</span>
            <span class="exp-status" style="color:${poReady.ready ? 'var(--success)' : 'var(--warning)'}" title="${poReady.ready ? 'PO BOM ready' : poReady.missing.length + ' PN BOM missing'}">${poReady.ready ? '✔' : '⚠'}</span>
          </div>
          <div class="exp-children ${isOpen ? 'open' : ''}">
            ${poPns.map(pn => {
          const isActive = highlightType === 'pn' && highlightId === pn.pn;
          const mark = pn.bom === 'Uploaded' ? '✔' : '⚠';
          const markColor = pn.bom === 'Uploaded' ? 'var(--success)' : 'var(--warning)';
          return `<div class="exp-row ${isActive ? 'active' : ''}" onclick="openPn('${pn.pn}')">
                ${icon('Package', 'exp-ic')}<span>${pn.pn}</span>
                <span class="exp-status" style="color:${markColor}" title="${pn.bom === 'Uploaded' ? pn.bomFile : 'Required PN BOM missing'}">${mark}</span>
              </div>`;
        }).join('')}
          </div>`;
      }).join('')}
        <div class="exp-row" onclick="showProjectTab('Project BOM'); navigate('project-workspace')">
          ${icon('Boxes', 'exp-ic')}<span>Project BOM</span>
        </div>
        <div class="exp-row" onclick="showProjectTab('Manufacturing Deliveries'); navigate('project-workspace')">
          ${icon('Truck', 'exp-ic')}<span>Manufacturing Deliveries</span>
        </div>
        <div class="exp-row" onclick="showProjectTab('Customer Deliveries'); navigate('project-workspace')">
          ${icon('PackageCheck', 'exp-ic')}<span>Customer Deliveries</span>
        </div>
        <div class="exp-row" onclick="showProjectTab('Finance'); navigate('project-workspace')">
          ${icon('BadgeDollarSign', 'exp-ic')}<span>Finance</span>
        </div>
      </div>
    </div>
  </div>`;
    }

    /* ============ PROJECT LIST / WORKSPACE ============ */
    function projectActorShortName() {
      return currentRole === 'engineer' ? 'A. Rahal' : currentRole === 'manager' ? 'S. Ait Oubou' : ROLE_PERSONA[currentRole]?.name || '';
    }
    function nextProjectId() {
      const highest = Math.max(0, ...PROJECTS.map(project => Number(String(project.id).replace(/\D/g, '')) || 0));
      return `PRJ-${String(highest + 1).padStart(3, '0')}`;
    }
    function projectStatusType(status) {
      return status === 'On Track' ? 'success' : status === 'At Risk' ? 'warning' : status === 'Blocked' ? 'danger' : 'neutral';
    }
    function projectHtmlValue(value) {
      return String(value ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    function openProjectForm(mode, projectId) {
      const isEdit = mode === 'edit';
      const project = isEdit ? PROJECTS.find(item => item.id === projectId || item.name === projectId) : null;
      if (!isEdit && can('newProject') !== true) {
        openModal('Project creation not permitted', 'Only Launch Engineers and Launch Managers can create projects.');
        return;
      }
      if (isEdit && (!project || !canWriteProject(project))) {
        openModal('Project editing not permitted', 'You can edit only projects assigned to you.');
        return;
      }
      const defaultEngineer = currentRole === 'engineer' ? 'A. Rahal' : 'A. Haddad';
      projectForm = {
        mode: isEdit ? 'edit' : 'create',
        projectId: project?.id || '',
        errors: {},
        draft: project ? {
          id: project.id,
          name: project.name,
          customer: project.customer,
          customerRef: project.customerRef || '',
          engineer: project.engineer || defaultEngineer,
          site: project.site || 'Tangier Plant 2',
          status: project.status || 'Draft',
          startDate: project.startDate || '2026-07-17',
          targetDate: project.targetDate || '2026-10-17',
          description: project.description || '',
          meetingMinutesFile: project.meetingMinutesFile || '',
        } : {
          id: nextProjectId(),
          name: '',
          customer: '',
          customerRef: '',
          engineer: defaultEngineer,
          site: 'Tangier Plant 2',
          status: 'Draft',
          startDate: '2026-07-17',
          targetDate: '2026-10-17',
          description: '',
          meetingMinutesFile: '',
        },
      };
      navigate('project-form');
    }
    function cancelProjectForm() {
      navigateBack('project-list');
    }
    function validateProjectForm() {
      const draft = projectForm.draft;
      const errors = {};
      ['name', 'customer', 'engineer', 'status'].forEach(key => {
        if (!String(draft[key] || '').trim()) errors[key] = 'This field is required.';
      });
      if (!String(draft.meetingMinutesFile || '').trim()) errors.meetingMinutesFile = 'A project creation meeting PDF is required.';
      const duplicate = PROJECTS.find(project => project.id !== projectForm.projectId && project.name.trim().toLowerCase() === String(draft.name || '').trim().toLowerCase());
      if (duplicate) errors.name = 'A project with this name already exists.';
      projectForm.errors = errors;
      return Object.keys(errors).length === 0;
    }
    function saveProjectForm() {
      if (!validateProjectForm()) {
        renderPage();
        const firstInvalid = document.querySelector('.project-input.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      const draft = Object.fromEntries(Object.entries(projectForm.draft).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value]));
      const isEdit = projectForm.mode === 'edit';
      const existing = isEdit ? PROJECTS.find(project => project.id === projectForm.projectId) : null;
      const previousProject = existing ? { ...existing } : null;
      const linkedPos = existing ? posForProject(existing.name) : [];
      if (isEdit && (!existing || !canWriteProject(existing))) {
        openModal('Project editing not permitted', 'The project could not be saved because it is outside your assignment.');
        return;
      }

      let savedProject;
      let oldName = '';
      if (existing) {
        oldName = existing.name;
        const identityLocked = linkedPos.length > 0;
        Object.assign(existing, {
          name: identityLocked ? existing.name : draft.name,
          customer: identityLocked ? existing.customer : draft.customer,
          customerRef: draft.customerRef,
          engineer: currentRole === 'manager' ? draft.engineer : existing.engineer,
          site: existing.site,
          status: draft.status,
          statusType: projectStatusType(draft.status),
          startDate: existing.startDate,
          targetDate: existing.targetDate,
          description: draft.description,
          meetingMinutesFile: draft.meetingMinutesFile,
        });
        if (oldName !== existing.name) {
          ADMIN_ASSIGNMENTS.forEach(assignment => { if (assignment.project === oldName) assignment.project = existing.name; });
          ADMIN_USERS.forEach(user => { user.projects = user.projects.map(name => name === oldName ? existing.name : name); });
          const searchRecord = SEARCH_INDEX.find(item => item.type === 'Project' && item.label === oldName);
          if (searchRecord) { searchRecord.label = existing.name; searchRecord.sub = existing.customer; searchRecord.action = `openProject('${existing.id}')`; }
        }
        savedProject = existing;
      } else {
        savedProject = {
          id: draft.id || nextProjectId(),
          name: draft.name,
          customer: draft.customer,
          customerRef: draft.customerRef,
          engineer: draft.engineer,
          site: 'Tangier Plant 2',
          status: draft.status,
          statusType: projectStatusType(draft.status),
          startDate: draft.startDate,
          targetDate: draft.targetDate,
          description: draft.description,
          meetingMinutesFile: draft.meetingMinutesFile,
          pos: 0,
          progress: 0,
          health: 100,
        };
        PROJECTS.push(savedProject);
        const actor = projectActorShortName();
        if (actor && !ADMIN_ASSIGNMENTS.some(item => item.user === actor && item.project === savedProject.name)) {
          ADMIN_ASSIGNMENTS.push({ user: actor, project: savedProject.name, role: 'Owner' });
        }
        const actorUser = ADMIN_USERS.find(user => user.name === actor);
        if (actorUser && !actorUser.projects.includes(savedProject.name)) actorUser.projects.push(savedProject.name);
        SEARCH_INDEX.push({ type: 'Project', label: savedProject.name, sub: savedProject.customer, action: `openProject('${savedProject.id}')` });
      }

      const changedProjectFields = previousProject ? ['name','customer','customerRef','engineer','site','status','description','meetingMinutesFile'].filter(key => String(previousProject[key] || '') !== String(savedProject[key] || '')).map(key => `${key}: ${previousProject[key] || '—'} → ${savedProject[key] || '—'}`) : [];
      AUDIT_LOGS.unshift({
        id: `AUD-${10400 + AUDIT_LOGS.length}`,
        date: new Date().toISOString().slice(0,16).replace('T',' '),
        user: ROLE_PERSONA[currentRole].name,
        module: 'Projects',
        action: isEdit ? 'Project updated' : 'Project created',
        entity: `${savedProject.id} · ${savedProject.name}`,
        project: savedProject.name,
        po: '',
        evidence:savedProject.meetingMinutesFile,
        details: isEdit ? `Project record updated. ${changedProjectFields.length ? changedProjectFields.join('; ') : 'No field value changed.'}` : `New project created for ${savedProject.customer}; site ${savedProject.site}; assigned Launch Engineer ${savedProject.engineer}; target SOP ${savedProject.targetDate}.`,
      });
      openProject(savedProject.id,{ replace:true });
      openModal(isEdit ? 'Project updated' : 'Project created', `${savedProject.id} · ${savedProject.name} was saved successfully and is ready for purchase orders and BOM governance.`);
    }
    function setProjectMeetingMinutes(input) {
      const file = input.files?.[0];
      if (!file) return;
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        input.value = '';
        projectForm.draft.meetingMinutesFile = '';
        projectForm.errors.meetingMinutesFile = 'Only PDF documents are accepted.';
      } else {
        projectForm.draft.meetingMinutesFile = file.name;
        delete projectForm.errors.meetingMinutesFile;
      }
      renderPage();
    }
    function pageProjectForm() {
      const draft = projectForm.draft || {};
      const errors = projectForm.errors || {};
      const isEdit = projectForm.mode === 'edit';
      const project = isEdit ? PROJECTS.find(item => item.id === projectForm.projectId) : null;
      const linkedPos = project ? posForProject(project.name) : [];
      const identityLocked = isEdit && linkedPos.length > 0;
      const engineerLocked = currentRole !== 'manager';
      const errorClass = key => errors[key] ? 'invalid' : '';
      const errorMessage = key => errors[key] ? `<div class="project-field-error">${errors[key]}</div>` : '';
      const engineerOptions = [...new Set(['A. Rahal', 'A. Haddad', 'S. Amrani', 'M. Idrissi', draft.engineer].filter(Boolean))];
      const customerOptions = ADMIN_REFERENCE_LISTS.customers.entries
        .filter(entry => entry.status === 'Active' || entry.label === draft.customer)
        .map(entry => entry.label)
        .sort((a,b) => a.localeCompare(b));
      return `<div class="project-editor-shell">
        <header class="project-editor-header">
          <div><h2>${isEdit ? `Edit Project` : 'Create Project'}</h2><span class="mono">${projectHtmlValue(draft.id || 'New project')}</span></div>
          <button class="btn project-editor-close" onclick="cancelProjectForm()">Close</button>
        </header>

        ${identityLocked ? `<div class="project-editor-lock">${icon('lock','')}<span>Project name and customer are locked because ${linkedPos.length} purchase order${linkedPos.length === 1 ? '' : 's'} already reference this project.</span></div>` : ''}

        <section class="card project-editor-card">
          <div class="project-editor-section-title"><h3>Project Information</h3></div>
          <div class="project-editor-grid">
            <div class="project-editor-field">
              <label>Project ID</label>
              <input class="project-input" value="${projectHtmlValue(draft.id)}" readonly aria-label="Project ID"/>
            </div>
            <div class="project-editor-field">
              <label>Project Name <em>*</em></label>
              <input class="project-input ${errorClass('name')}" value="${projectHtmlValue(draft.name)}" ${identityLocked ? 'readonly' : ''} oninput="projectForm.draft.name=this.value" placeholder="Enter project name" aria-label="Project name"/>
              ${errorMessage('name')}
            </div>
            <div class="project-editor-field">
              <label>Customer <em>*</em></label>
              <select class="project-input ${errorClass('customer')}" ${identityLocked ? 'disabled' : ''} onchange="projectForm.draft.customer=this.value" aria-label="Customer">
                <option value="" ${draft.customer ? '' : 'selected'} disabled>Select a customer</option>
                ${customerOptions.map(value => `<option value="${projectHtmlValue(value)}" ${draft.customer === value ? 'selected' : ''}>${projectHtmlValue(value)}</option>`).join('')}
              </select>
              <div class="project-field-hint">Customer records are managed by the System Administrator.</div>
              ${errorMessage('customer')}
            </div>
          </div>
        </section>

        <section class="card project-editor-card">
          <div class="project-editor-section-title"><h3>Planning and Responsibility</h3></div>
          <div class="project-editor-grid">
            <div class="project-editor-field">
              <label>Launch Engineer <em>*</em></label>
              <select class="project-input ${errorClass('engineer')}" ${engineerLocked ? 'disabled' : ''} onchange="projectForm.draft.engineer=this.value" aria-label="Assigned Launch Engineer">
                ${engineerOptions.map(value => `<option value="${projectHtmlValue(value)}" ${draft.engineer === value ? 'selected' : ''}>${projectHtmlValue(value)}</option>`).join('')}
              </select>
              ${errorMessage('engineer')}
            </div>
            <div class="project-editor-field full">
              <label>Project Description</label>
              <textarea class="project-input" oninput="projectForm.draft.description=this.value" placeholder="Enter project description" aria-label="Project description">${projectHtmlValue(draft.description)}</textarea>
            </div>
          </div>
        </section>

        <section class="card project-editor-card">
          <div class="project-editor-section-title"><h3>Project Creation Meeting</h3></div>
          <div class="project-editor-grid">
            <div class="project-editor-field full">
              <label>Meeting Minutes PDF <em>*</em></label>
              <input id="projectMeetingMinutes" type="file" accept=".pdf,application/pdf" class="meeting-file-input" onchange="setProjectMeetingMinutes(this)" aria-label="Project creation meeting minutes PDF"/>
              <div class="meeting-upload ${draft.meetingMinutesFile ? 'has-file' : ''} ${errorClass('meetingMinutesFile')}">
                <div class="meeting-upload-icon">${icon(draft.meetingMinutesFile ? 'FileText' : 'upload','')}</div>
                <div class="meeting-upload-copy"><strong>${draft.meetingMinutesFile ? projectHtmlValue(draft.meetingMinutesFile) : 'Attach meeting minutes'}</strong><span>${draft.meetingMinutesFile ? 'PDF attached and ready for the audit trail.' : 'PDF only · required before the project can be created.'}</span></div>
                <button type="button" class="btn meeting-upload-action" onclick="document.getElementById('projectMeetingMinutes').click()">${draft.meetingMinutesFile ? 'Replace PDF' : 'Choose PDF'}</button>
              </div>
              ${errorMessage('meetingMinutesFile')}
            </div>
          </div>
        </section>

        <footer class="project-editor-actions">
          <button class="btn" onclick="cancelProjectForm()">Cancel</button>
          <button class="btn primary" onclick="saveProjectForm()">${icon('check','')} ${isEdit ? 'Save Project' : 'Create Project'}</button>
        </footer>
      </div>`;
    }

    function setProjectSearch(v) { projectFilters.search = v; projectPage = 1; renderPage(); restoreFocus('#projSearchInput'); }
    function setProjectFilter(key, v) { projectFilters[key] = v; projectPage = 1; renderPage(); }
    function clearProjectFilter(key) { projectFilters[key] = ''; projectPage = 1; renderPage(); }
    function resetProjectFilters() { projectFilters = { search: '', customer: '', engineer: '', status: '' }; projectPage = 1; renderPage(); }
    function sortProjects(key) { projectSort.dir = (projectSort.key === key) ? -projectSort.dir : 1; projectSort.key = key; renderPage(); }
    function setProjectPage(n) { projectPage = Math.max(1, n); renderPage(); }

    function filterProjects() {
      const f = projectFilters;
      return visibleProjects().filter(p => {
        if (f.search && !(`${p.name} ${p.id} ${p.customer}`.toLowerCase().includes(f.search.toLowerCase()))) return false;
        if (f.customer && p.customer !== f.customer) return false;
        if (f.engineer && p.engineer !== f.engineer) return false;
        if (f.status && p.status !== f.status) return false;
        return true;
      });
    }

    function pageProjectList() {
      const scopeProjects = visibleProjects();
      const scopeNames = new Set(scopeProjects.map(p => p.name));
      const scopePos = POS.filter(po => scopeNames.has(po.project));
      const scopePns = PNS.filter(pn => scopeNames.has(pn.project));
      let rows = filterProjects().map(p => {
        const projectPos = posForProject(p.name);
        const readiness = projectBomReadiness(p.name);
        const lifecycleCounts = Object.fromEntries(PO_STATUS_FLOW.map(status => [status,0]));
        projectPos.forEach(po => { lifecycleCounts[poLifecycle(po.id)] += 1; });
        return { ...p, pos: projectPos.length, pnCount: readiness.total, bomCoverage: readiness.percent, poBomReady: projectPos.filter(po => poBomReadiness(po.id).ready).length, lifecycleCounts };
      });
      rows = sortRows(rows, projectSort);
      const total = rows.length;
      const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      projectPage = Math.min(projectPage, totalPages);
      const pageRows = rows.slice((projectPage - 1) * PAGE_SIZE, projectPage * PAGE_SIZE);

      const portfolioReadiness = bomReadinessForPns(scopePns);
      const bomBlocked = scopeProjects.filter(p => !projectBomReadiness(p.name).ready).length;
      const showOwner = currentRole === 'manager';

      const chips = filterChips(projectFilters, currentRole === 'manager' ? { customer: 'Customer', engineer: 'Engineer' } : { customer: 'Customer' }, 'clearProjectFilter', 'resetProjectFilters');

      const tableBody = pageRows.length ? `<div class="project-list-table-wrap"><table id="projectPortfolioTable" class="project-portfolio-table">
    <thead><tr>
      ${sortTh('Project', 'name', projectSort, 'sortProjects')}
      ${showOwner ? sortTh('Owner', 'engineer', projectSort, 'sortProjects') : ''}
      ${sortTh('Purchase Orders', 'pos', projectSort, 'sortProjects')}
      ${sortTh('BOM Coverage', 'bomCoverage', projectSort, 'sortProjects')}
      <th data-export="false">Actions</th>
    </tr></thead>
    <tbody>${pageRows.map(p => {
      const stateClass = p.statusType === 'danger' ? 'danger' : p.statusType === 'warning' ? 'warning' : '';
      const lifecycleBadges = PO_STATUS_FLOW.filter(status => p.lifecycleCounts[status]).map(status => statusBadge(`${p.lifecycleCounts[status]} ${status}`,productionStatusType(status))).join('');
      return `<tr class="clickable-row" onclick="openProject('${p.id}')">
      <td><div class="project-identity-cell"><div class="project-row-icon ${stateClass}">${icon('projects','')}</div><div class="project-identity-copy"><strong>${p.name}</strong><span class="mono">${p.id} · ${p.customer}</span></div></div></td>
      ${showOwner ? `<td><div class="project-owner-cell"><strong>${p.engineer}</strong></div></td>` : ''}
      <td><div class="project-po-cell"><div class="project-po-total"><strong>${p.pos}</strong><span>purchase order${p.pos === 1 ? '' : 's'}</span></div><div class="project-po-stages">${lifecycleBadges || statusBadge('No PO','neutral')}</div></div></td>
      <td><div class="project-bom-cell"><div class="project-bom-head"><strong>${p.bomCoverage}%</strong><span>${p.pnCount} PN${p.pnCount === 1 ? '' : 's'}</span></div><div class="project-bom-track"><div class="project-bom-fill ${p.bomCoverage === 100 ? 'ready' : ''}" style="width:${p.bomCoverage}%"></div></div><div class="project-bom-foot">${p.poBomReady}/${p.pos} PO BOMs ready</div></div></td>
      <td>${projectActionIcons(p.id, p.name)}</td>
    </tr>`; }).join('')}</tbody>
  </table></div>` : `<div style="padding:0 20px 20px;">${emptyStateBlock('No projects found', 'Try adjusting or resetting your filters.', 'resetProjectFilters')}</div>`;

      return `
  <div class="project-portfolio-summary">
    <div class="project-summary-metric"><div class="project-summary-icon">${icon('projects','')}</div><div class="project-summary-copy"><span>Projects</span><strong>${scopeProjects.length}</strong><small>In current access scope</small></div></div>
    <div class="project-summary-metric"><div class="project-summary-icon">${icon('po','')}</div><div class="project-summary-copy"><span>Purchase Orders</span><strong>${scopePos.length}</strong><small>${scopePns.length} finished-good part numbers</small></div></div>
    <div class="project-summary-metric ${portfolioReadiness.ready ? 'good' : 'warn'}"><div class="project-summary-icon">${icon('bom','')}</div><div class="project-summary-copy"><span>PN BOM Coverage</span><strong>${portfolioReadiness.percent}%</strong><small>${bomBlocked} project${bomBlocked === 1 ? '' : 's'} requiring BOM</small></div></div>
  </div>
  <div class="card project-list-card">
    <div class="project-list-card-head"><div><h3>All Projects</h3><p>${total} matching · ${scopeProjects.length} in current access scope</p></div><div class="project-list-card-tools">${pageRows.length ? tableExportActions('projectPortfolioTable','Project Portfolio') : ''}${permBtn('newProject', 'New Project', 'plus', "openProjectForm('create')", "primary")}</div></div>
    <div class="project-list-toolbar">${projectToolbarHtml()}</div>
    ${chips}
    <div class="project-list-count">${rowCountLabel(total, 'project')}</div>
    ${tableBody}
    ${pageRows.length ? paginationBar(total, projectPage, PAGE_SIZE, 'setProjectPage') : ''}
  </div>`;
    }

    function projectToolbarHtml() {
      const scopedProjects = visibleProjects();
      const custOpts = uniqueValues(scopedProjects, 'customer');
      const engOpts = uniqueValues(scopedProjects, 'engineer');
      return `<div class="table-toolbar">
    <div class="tt-search">
      ${icon('search', '')}
      <input id="projSearchInput" type="text" placeholder="Search project name or customer…" value="${projectFilters.search}" oninput="setProjectSearch(this.value)"/>
    </div>
    <select class="tt-select" onchange="setProjectFilter('customer', this.value)">
      <option value="">Customer</option>
      ${custOpts.map(c => `<option value="${c}" ${projectFilters.customer === c ? 'selected' : ''}>${c}</option>`).join('')}
    </select>
    ${currentRole === 'manager' ? `<select class="tt-select" onchange="setProjectFilter('engineer', this.value)">
      <option value="">Engineer</option>
      ${engOpts.map(c => `<option value="${c}" ${projectFilters.engineer === c ? 'selected' : ''}>${c}</option>`).join('')}
    </select>` : ''}
    <div class="tt-spacer"></div>
    <div class="tt-icon-btn" title="Refresh" onclick="refreshNotice()">${icon('refresh', '')}</div>
  </div>`;
    }

    function restoreFocus(selector) {
      const raf = (typeof requestAnimationFrame === 'function') ? requestAnimationFrame : (fn) => setTimeout(fn, 0);
      raf(() => {
        const el = document.querySelector(selector);
        if (el) { el.focus(); const v = el.value; el.value = ''; el.value = v; }
      });
    }

    function workspaceTabs(tabs, active, handlerFnName) {
      return `<div class="tabs">${tabs.map(t => `<div class="tab ${t === active ? 'active' : ''}" onclick="${handlerFnName}('${t}')">${t}</div>`).join('')}</div>`;
    }

    function poActionIcons(poId) {
      const po = POS.find(item => item.id === poId);
      const project = PROJECTS.find(item => item.name === po?.project);
      const writable = project && canWriteProject(project);
      return `<div class="icon-actions">
    <div class="icon-btn" title="View Workspace" onclick="stop(event); openPo('${poId}')">${icon('view', '')}</div>
    ${writable ? permIconBtn('editRecord', 'Edit', 'edit', `stop(event); openModal('Edit ${poId}', 'This opens the purchase order edit form — customer, version, delivery date.')`) : ''}
    ${writable ? permIconBtn('deleteRecord', 'Delete', 'trash', `stop(event); confirmDeletePo('${poId}')`, 'danger-hover') : ''}
  </div>`;
    }
    function poSummaryActionIcons(poId) {
      const po = POS.find(item => item.id === poId);
      const project = PROJECTS.find(item => item.name === po?.project);
      const writable = project && canWriteProject(project);
      return `<div class="icon-actions compact-actions">
        <div class="icon-btn" title="View Workspace" onclick="stop(event); openPo('${poId}')">${icon('view', '')}<span class="btn-tip">View Workspace</span></div>
        ${writable ? permIconBtn('editRecord', 'Edit', 'edit', `stop(event); openModal('Edit ${poId}', 'This opens the purchase order edit form — customer, version, delivery date.')`) : ''}
        ${writable ? permIconBtn('deleteRecord', 'Delete', 'trash', `stop(event); confirmDeletePo('${poId}')`, 'danger-hover') : ''}
      </div>`;
    }
    function openPoDeliveryTab(poId) {
      const po = POS.find(item => item.id === poId);
      openContext.po = poId; if (po) openContext.project = po.project;
      activeTab.po = 'Manufacturing';
      navigate('po-workspace');
    }
    function openPoDeliveryHistory(poId) {
      const po = POS.find(item => item.id === poId);
      openContext.po = poId; if (po) openContext.project = po.project;
      activeTab.po = 'History';
      navigate('po-workspace');
    }
    function projectActionIcons(projectId, projectName) {
      const project = PROJECTS.find(p => p.id === projectId || p.name === projectName);
      const writable = project && canWriteProject(project);
      return `<div class="icon-actions">
    <div class="icon-btn" title="View Project" onclick="stop(event); openProject('${projectId}')">${icon('view', '')}</div>
    ${writable ? permIconBtn('editRecord', 'Edit', 'edit', `stop(event); openProjectForm('edit', '${projectId}')`) : ''}
    ${writable ? permIconBtn('deleteRecord', 'Delete', 'trash', `stop(event); confirmDeleteProject('${projectId}')`, 'danger-hover') : ''}
  </div>`;
    }
    function openProject(projectId, navOptions = {}) {
      const project = PROJECTS.find(p => p.id === projectId || p.name === projectId) || PROJECTS[0];
      if (currentRole === 'engineer' && !assignedProjectNames().has(project.name)) {
        openModal('Project outside your assignment', `${project.name} is not assigned to ${ROLE_PERSONA.engineer.name}. The SRS limits Launch Engineers to their own projects.`);
        return;
      }
      const projectPo = POS.find(p => p.project === project.name);
      openContext.project = project.name;
      openContext.po = projectPo ? projectPo.id : '';
      openContext.pn = projectPo ? (pnsForPo(projectPo.id)[0]?.pn || '') : '';
      activeTab.project = 'Overview';
      navigate('project-workspace',navOptions);
    }

    function openProjectBomVersionCompare() {
      openContext.compareType = 'bom';
      openContext.pn = '';
      const currentBom = BOM_VERSION_HISTORY.find(v => v.current)?.version || 'v4';
      const previousBom = BOM_VERSION_HISTORY.filter(v => !v.current).slice(-1)[0]?.version || 'v3';
      bomVersionCompareA = previousBom;
      bomVersionCompareB = currentBom;
      navigate('bom-version-compare');
    }

    function poTableRich(list, compactActions = false, tableId = '') {
      if (!list.length) return emptyStateBlock('No purchase orders yet', 'Create the first PO after the project record has been saved.', null);
      return `<div class="po-readiness-table-wrap"><table${tableId ? ` id="${tableId}"` : ''} class="po-readiness-table ${compactActions ? 'summary-table' : ''}"><thead><tr><th>PO Number</th><th>Version</th><th>Part Numbers</th><th>PN BOM Coverage</th><th>PO BOM</th><th>Delivery Date</th><th>Status</th><th class="po-actions-col" data-export="false">Actions</th></tr></thead>
    <tbody>${list.map(po => { const readiness = poBomReadiness(po.id); return `<tr class="clickable-row" onclick="openPo('${po.id}')">
      <td class="mono">${po.id}</td>
      <td class="mono">${po.version}</td>
      <td class="mono">${readiness.total}</td>
      <td style="min-width:140px;">${bomCoverageHtml(readiness, true)}</td>
      <td>${statusBadge(readiness.ready ? 'Ready to generate' : `${readiness.missing.length} BOM missing`, readiness.ready ? 'success' : 'warning')}</td>
      <td>${po.delivery}</td>
      <td>${statusBadge(po.status, po.statusType)}</td>
      <td class="po-actions-cell">${compactActions ? poSummaryActionIcons(po.id) : poActionIcons(po.id)}</td>
    </tr>`; }).join('')}</tbody></table></div>`;
    }

    function pnActionIcons(pn) {
      const item = PNS.find(p => p.pn === pn);
      const project = PROJECTS.find(p => p.name === item?.project);
      const writable = project && canWriteProject(project);
      return `<div class="icon-actions">
    <div class="icon-btn" title="View PN" onclick="stop(event); openPn('${pn}')">${icon('view', '')}</div>
    ${writable ? permIconBtn('uploadBom', 'Upload BOM', 'upload', `stop(event); openPnBomUpload('${pn}')`) : ''}
    <div class="icon-btn" title="Simulation" onclick="stop(event); openPn('${pn}','Simulation'); navigate('sim-launch')">${icon('sim', '')}</div>
    <div class="icon-btn" title="History" onclick="stop(event); openPn('${pn}','History')">${icon('history', '')}</div>
  </div>`;
    }

    function setPnSearch(v) { pnFilters.search = v; renderPage(); }
    function setPnFilter(key, v) { pnFilters[key] = v; renderPage(); }
    function clearPnFilter(key) { pnFilters[key] = ''; renderPage(); }
    function resetPnFilters() { pnFilters = { search: '', status: '', version: '', bom: '', simulation: '' }; renderPage(); }
    function filterPNs(source = PNS) {
      const f = pnFilters;
      return source.filter(p => {
        if (f.search && !(`${p.pn} ${p.desc}`.toLowerCase().includes(f.search.toLowerCase()))) return false;
        if (f.status && p.status !== f.status) return false;
        if (f.version && p.version !== f.version) return false;
        if (f.bom && p.bom !== f.bom) return false;
        return true;
      });
    }
    function pnToolbarHtml(source = PNS) {
      const opt = (key, list, placeholder) => `<select class="tt-select" onchange="setPnFilter('${key}', this.value)">
    <option value="">${placeholder}</option>
    ${list.map(v => `<option value="${v}" ${pnFilters[key] === v ? 'selected' : ''}>${v}</option>`).join('')}
  </select>`;
      return `<div class="table-toolbar">
    <div class="tt-search">${icon('search', '')}<input type="text" placeholder="Search PN…" value="${pnFilters.search}" oninput="setPnSearch(this.value)"/></div>
    ${opt('status', uniqueValues(source, 'status'), 'Status')}
    ${opt('version', uniqueValues(source, 'version'), 'Version')}
    ${opt('bom', uniqueValues(source, 'bom'), 'BOM')}
    <div class="tt-spacer"></div>
    <div class="tt-icon-btn" title="Refresh" onclick="refreshNotice()">${icon('refresh', '')}</div>
    <div class="tt-icon-btn" title="Export" onclick="exportNotice()">${icon('download', '')}</div>
  </div>`;
    }

    function projectOverviewPoList(project, projectPos) {
      if (!projectPos.length) return `<div class="card project-po-overview">${emptyStateBlock('No purchase orders', 'Upload the first purchase order for this project.', null)}</div>`;
      return `<div class="card project-po-overview">
        <div class="project-po-overview-head"><div><h3>Purchase Orders</h3><p>${projectPos.length} purchase order${projectPos.length === 1 ? '' : 's'} linked to ${project.name}. Open a row for its workspace and complete audit history.</p></div><div class="table-heading-actions">${tableExportActions('projectPoOverviewTable',`${project.name} Purchase Orders`)}${canWriteProject(project) ? permBtn('uploadPo','Add Purchase Order','plus',`startPoUpload('${inlineJsValue(project.name)}')`,'primary') : ''}</div></div>
        <div class="table-scroll"><table id="projectPoOverviewTable" class="project-po-table"><thead><tr><th>PO Number</th><th>Version</th><th>Part Numbers</th><th>Order Date</th><th>Delivery Date</th><th>Current Status</th><th>Last Activity</th><th data-export="false"></th></tr></thead><tbody>${projectPos.map(po => { const status = poLifecycle(po.id); const last = poStatusEvents(po.id)[0]; return `<tr onclick="openPo('${po.id}','Overview')"><td><div class="project-po-number"><strong>${po.id}</strong><span>${po.customer}</span></div></td><td class="mono">${po.version}</td><td class="mono">${pnsForPo(po.id).length || po.pnCount || 0}</td><td class="mono">${po.date || '—'}</td><td class="mono">${po.delivery || '—'}</td><td class="po-status-primary">${statusBadge(status,productionStatusType(status))}</td><td><div class="po-last-activity"><strong>${last?.reason || 'PO record created'}</strong><span>${last ? `${last.date} · ${last.user}` : po.date || '—'}</span></div></td><td><button class="btn sm" onclick="stop(event);openPo('${po.id}','Overview')">View</button></td></tr>`; }).join('')}</tbody></table></div>
      </div>`;
    }

    function projectManufacturingDeliveryPanel(project) {
      const projectPos = posForProject(project.name);
      if (!projectPos.length) return '';
      const selected = projectSelectedPo(project);
      const eligible = selected ? mfgEligibleOrders(selected.id).length > 0 : false;
      const canCreate = selected && eligible && canWriteProject(project) && can('createMfgDelivery') === true;
      return `<div class="card project-mfg-simple">
        <div class="project-mfg-simple-head"><div><h3>New manufacturing delivery</h3><p>Select the purchase order and create its warehouse-to-manufacturing instruction.</p></div></div>
        <div class="project-mfg-simple-controls"><div><label class="sim-field-label">Purchase order</label><select class="sim-select" onchange="setProjectOpsPo(this.value)">${projectPos.map(po => `<option value="${po.id}" ${selected?.id === po.id ? 'selected' : ''}>${po.id} · ${mfgEligibleOrders(po.id).length} eligible PNs</option>`).join('')}</select></div>${canCreate ? permBtn('createMfgDelivery','Select PNs & Launch Qty','plus',`startProjectMfgDelivery('${selected.id}')`,'primary') : `<button class="btn primary" disabled>No Eligible PNs</button>`}</div>
      </div>`;
    }

    function projectCustomerDeliveryPanel(project) {
      const projectPos = posForProject(project.name);
      if (!projectPos.length) return '';
      const selected = projectSelectedPo(project);
      const eligibleCount = selected ? customerEligibleOrders(selected.id).length : 0;
      const canCreate = selected && eligibleCount > 0 && canWriteProject(project) && can('createCustDelivery') === true;
      return `<div class="card project-mfg-simple">
        <div class="project-mfg-simple-head"><div><h3>Customer delivery</h3><p>Create a full or partial instruction from packaged finished goods.</p></div></div>
        <div class="project-mfg-simple-controls"><div><label class="sim-field-label">Purchase order</label><select class="sim-select" onchange="setProjectOpsPo(this.value)">${projectPos.map(po => `<option value="${po.id}" ${selected?.id === po.id ? 'selected' : ''}>${po.id} · ${customerEligibleOrders(po.id).length} packaged PNs</option>`).join('')}</select></div>${canCreate ? permBtn('createCustDelivery','Select PNs & Quantities','plus',`startProjectCustomerDelivery('${selected.id}','','project')`,'primary') : `<button class="btn primary" disabled>No Packaged Quantity</button>`}</div>
      </div>`;
    }

    function poFinanceRows(poId) {
      return pnsForPo(poId).map((pn,index) => {
        const quantity = Number(pn.qty || 0);
        const unitPrice = Number(pn.unitPrice || 0);
        return { lineNo:String(index + 1).padStart(3,'0'), po:poId, pn:pn.pn, description:pn.desc, quantity, unitPrice, currency:pn.currency || 'EUR', lineTotal:Number((quantity * unitPrice).toFixed(2)) };
      });
    }
    function financeTotals(rows) {
      return { quantity:rows.reduce((sum,row) => sum + Number(row.quantity || 0),0), value:Number(rows.reduce((sum,row) => sum + Number(row.lineTotal || 0),0).toFixed(2)), partNumbers:rows.length };
    }
    function poFinanceWorkspace(po) {
      const rows = poFinanceRows(po.id);
      const totals = financeTotals(rows);
      return `<div class="finance-workspace">
        <div class="finance-head"><div class="finance-head-title"><div class="finance-head-icon">${icon('finance','')}</div><div><span>PO Financial Value</span><h3>${po.id}</h3></div></div><div class="table-heading-actions">${statusBadge('Current PO Version','success')}${statusBadge('Currency · EUR','info')}</div></div>
        <div class="finance-summary"><div class="finance-metric"><span>Part numbers</span><strong>${totals.partNumbers}</strong></div><div class="finance-metric"><span>Ordered quantity</span><strong>${totals.quantity.toLocaleString()} units</strong></div><div class="finance-metric"><span>PO version</span><strong>${po.version}</strong></div><div class="finance-metric total"><span>Total PO value</span><strong>${financeMoney(totals.value)}</strong></div></div>
        <div class="card finance-table-card"><div class="finance-table-head"><div><h3>Part-number pricing</h3><p>Unit prices and quantities extracted from the current purchase-order version.</p></div>${rows.length ? tableExportActions('poFinanceTable',`${po.id} Financial Detail`) : ''}</div><div class="table-scroll finance-table-wrap">${rows.length ? `<table id="poFinanceTable" class="finance-table"><thead><tr><th>Line</th><th>Part Number</th><th>Description</th><th class="finance-number">Quantity</th><th class="finance-number">Unit Price</th><th class="finance-number">Line Total</th></tr></thead><tbody>${rows.map(row => `<tr><td class="mono">${row.lineNo}</td><td class="mono"><strong>${row.pn}</strong></td><td>${row.description}</td><td class="finance-number">${row.quantity.toLocaleString()}</td><td class="finance-number">${financeMoney(row.unitPrice,row.currency)}</td><td class="finance-number"><strong>${financeMoney(row.lineTotal,row.currency)}</strong></td></tr>`).join('')}</tbody><tfoot><tr><td>PO Total</td><td></td><td></td><td class="finance-number">${totals.quantity.toLocaleString()}</td><td></td><td class="finance-number">${financeMoney(totals.value)}</td></tr></tfoot></table>` : emptyStateBlock('No priced part numbers','The PO must contain extracted quantities and unit prices before its financial value can be calculated.',null)}</div></div>
      </div>`;
    }
    function projectFinanceWorkspace(project) {
      const projectPos = posForProject(project.name);
      const lineRows = projectPos.flatMap(po => poFinanceRows(po.id));
      const totals = financeTotals(lineRows);
      const poRows = projectPos.map(po => { const rows = poFinanceRows(po.id); return { po, rows, totals:financeTotals(rows) }; });
      return `<div class="finance-workspace">
        <div class="finance-head"><div class="finance-head-title"><div class="finance-head-icon">${icon('finance','')}</div><div><span>Project Financial Consolidation</span><h3>${project.name}</h3></div></div><div class="table-heading-actions">${statusBadge(`${projectPos.length} purchase order${projectPos.length === 1 ? '' : 's'}`,'info')}${statusBadge('Currency · EUR','success')}</div></div>
        <div class="finance-summary"><div class="finance-metric"><span>Purchase orders</span><strong>${projectPos.length}</strong></div><div class="finance-metric"><span>Part-number lines</span><strong>${totals.partNumbers}</strong></div><div class="finance-metric"><span>Combined quantity</span><strong>${totals.quantity.toLocaleString()} units</strong></div><div class="finance-metric total"><span>Total project value</span><strong>${financeMoney(totals.value)}</strong></div></div>
        <div class="card finance-table-card"><div class="finance-table-head"><div><h3>Purchase-order totals</h3><p>Combined value of every current PO version in this project.</p></div>${poRows.length ? tableExportActions('projectFinancePoTable',`${project.name} PO Financial Summary`) : ''}</div><div class="table-scroll finance-table-wrap">${poRows.length ? `<table id="projectFinancePoTable" class="finance-table"><thead><tr><th>Purchase Order</th><th>Version</th><th>Part Numbers</th><th class="finance-number">Quantity</th><th class="finance-number">PO Total</th></tr></thead><tbody>${poRows.map(item => `<tr><td><span class="finance-po-link mono" onclick="openPo('${item.po.id}','Finance')">${item.po.id}</span></td><td class="mono">${item.po.version}</td><td>${item.totals.partNumbers}</td><td class="finance-number">${item.totals.quantity.toLocaleString()}</td><td class="finance-number"><strong>${financeMoney(item.totals.value)}</strong></td></tr>`).join('')}</tbody><tfoot><tr><td>Project Total</td><td></td><td>${totals.partNumbers}</td><td class="finance-number">${totals.quantity.toLocaleString()}</td><td class="finance-number">${financeMoney(totals.value)}</td></tr></tfoot></table>` : emptyStateBlock('No purchase orders','Add a purchase order to begin project financial consolidation.',null)}</div></div>
        <div class="card finance-table-card"><div class="finance-table-head"><div><h3>Consolidated part-number detail</h3><p>All priced PO lines combined without losing their purchase-order reference.</p></div>${lineRows.length ? tableExportActions('projectFinanceLinesTable',`${project.name} Consolidated Part Pricing`) : ''}</div><div class="table-scroll finance-table-wrap">${lineRows.length ? `<table id="projectFinanceLinesTable" class="finance-table"><thead><tr><th>Purchase Order</th><th>Part Number</th><th>Description</th><th class="finance-number">Quantity</th><th class="finance-number">Unit Price</th><th class="finance-number">Line Total</th></tr></thead><tbody>${lineRows.map(row => `<tr><td class="mono">${row.po}</td><td class="mono"><strong>${row.pn}</strong></td><td>${row.description}</td><td class="finance-number">${row.quantity.toLocaleString()}</td><td class="finance-number">${financeMoney(row.unitPrice,row.currency)}</td><td class="finance-number"><strong>${financeMoney(row.lineTotal,row.currency)}</strong></td></tr>`).join('')}</tbody><tfoot><tr><td>Project Total</td><td></td><td></td><td class="finance-number">${totals.quantity.toLocaleString()}</td><td></td><td class="finance-number">${financeMoney(totals.value)}</td></tr></tfoot></table>` : ''}</div></div>
      </div>`;
    }

    function projectStockWorkspace(project) {
      const rows = MATERIALS.filter(material => material.projects.includes(project.name));
      const warehouse = rows.reduce((sum,item) => sum + item.warehouse,0);
      const wip = rows.reduce((sum,item) => sum + item.wip,0);
      const transit = rows.reduce((sum,item) => sum + materialTransitQuantity(item.code),0);
      const low = rows.filter(item => item.warehouse < getThreshold(item.code)).length;
      return `<section class="stock-shell project-stock-shell">
        <div class="stock-command-bar"><div><span>${project.name}</span><h2>Project Material Stock</h2></div><div class="stock-page-actions"><button class="btn" onclick="navigate('stock-history')">${icon('history','')} Stock History</button><button class="btn primary" onclick="navigate('stock-dashboard')">${icon('stock','')} Stock Dashboard</button></div></div>
        <div class="stock-kpi-grid"><div class="stock-kpi"><span>Warehouse stock</span><strong>${warehouse.toLocaleString()}</strong><small>Project materials</small></div><div class="stock-kpi"><span>Work in progress</span><strong>${wip.toLocaleString()}</strong><small>Production quantity</small></div><div class="stock-kpi"><span>In transit</span><strong>${transit.toLocaleString()}</strong><small>Expected inbound</small></div><div class="stock-kpi ${low ? 'danger' : 'accent'}"><span>Low-stock materials</span><strong>${low}</strong><small>${rows.length} controlled materials</small></div></div>
        <div class="card stock-panel"><div class="stock-panel-head"><div><h3>Committed Materials</h3><span>${rows.length} materials used by this project</span></div>${rows.length ? tableExportActions('projectStockTable',`${project.name} Project Stock`) : ''}</div><div class="table-scroll"><table id="projectStockTable" class="stock-table"><thead><tr><th>Material</th><th>Type / Supplier</th><th>Required</th><th>Warehouse</th><th>WIP</th><th>Transit</th><th>Missing</th><th>Status</th><th></th></tr></thead><tbody>${rows.map(item => { const state=materialStockState(item); return `<tr onclick="openMaterialDetail('${item.code}')"><td><strong class="mono">${item.code}</strong><span>${item.desc}</span></td><td><strong>${item.type}</strong><span>${item.supplier}</span></td><td class="mono">${item.required.toLocaleString()}</td><td class="mono stock-qty-primary">${item.warehouse.toLocaleString()}</td><td class="mono">${item.wip.toLocaleString()}</td><td class="mono">${materialTransitQuantity(item.code).toLocaleString()}</td><td class="mono ${item.missing ? 'stock-danger-text' : ''}">${item.missing.toLocaleString()}</td><td>${statusBadge(state.label,state.type)}</td><td><button class="icon-btn" onclick="stop(event);openMaterialDetail('${item.code}')">${icon('view','')}</button></td></tr>`; }).join('')}</tbody></table></div></div>
      </section>`;
    }

    function projectOverviewDashboard(project) {
      const projectPos = posForProject(project.name);
      const projectPns = PNS.filter(part => part.project === project.name);
      const readiness = projectBomReadiness(project.name);
      const materials = MATERIALS.filter(material => material.projects.includes(project.name));
      const simulations = SIMULATION_HISTORY.filter(run => run.project === project.name);
      const manufacturing = MFG_DELIVERIES.filter(delivery => delivery.project === project.name);
      const customerDeliveries = CUST_DELIVERIES.filter(delivery => delivery.project === project.name);
      const projectValue = financeTotals(projectPos.flatMap(po => poFinanceRows(po.id))).value;
      const recentActivity = auditContextEvents({ project:project.name }).slice(0,5);
      const activeManufacturing = manufacturing.filter(delivery => !['Delivered','Cancelled'].includes(syncMfgDeliveryLifecycle(delivery))).length;
      const completedCustomerDeliveries = customerDeliveries.filter(delivery => custEffectiveStatus(delivery).label === 'Delivered').length;
      return `<div class="project-overview-dashboard">
        <div class="project-overview-kpis">
          <button class="project-overview-kpi" onclick="showProjectTab('Purchase Orders')"><span>${icon('po','')}</span><div><small>Purchase Orders</small><strong>${projectPos.length}</strong></div></button>
          <button class="project-overview-kpi" onclick="showProjectTab('Project BOM')"><span>${icon('bom','')}</span><div><small>BOM Coverage</small><strong>${readiness.percent}%</strong></div></button>
          <button class="project-overview-kpi" onclick="showProjectTab('Stock')"><span>${icon('stock','')}</span><div><small>Materials</small><strong>${materials.length}</strong></div></button>
          <button class="project-overview-kpi" onclick="showProjectTab('Simulation')"><span>${icon('sim','')}</span><div><small>Simulations</small><strong>${simulations.length}</strong></div></button>
          <button class="project-overview-kpi" onclick="showProjectTab('Manufacturing Deliveries')"><span>${icon('Package','')}</span><div><small>Active Launches</small><strong>${activeManufacturing}</strong></div></button>
          <button class="project-overview-kpi" onclick="showProjectTab('Finance')"><span>${icon('money','')}</span><div><small>Project Value</small><strong>${financeMoney(projectValue)}</strong></div></button>
        </div>
        <div class="project-overview-grid">
          <section class="card project-overview-panel">
            <div class="project-overview-panel-head"><h3>Execution Snapshot</h3></div>
            <div class="project-overview-facts">
              <button onclick="showProjectTab('Project BOM')"><span>Finished-good part numbers</span><strong>${projectPns.length}</strong></button>
              <button onclick="showProjectTab('Project BOM')"><span>Validated BOMs</span><strong>${readiness.uploaded}/${readiness.total}</strong></button>
              <button onclick="showProjectTab('Manufacturing Deliveries')"><span>Manufacturing launches</span><strong>${manufacturing.length}</strong></button>
              <button onclick="showProjectTab('Customer Deliveries')"><span>Customer deliveries</span><strong>${completedCustomerDeliveries}/${customerDeliveries.length}</strong></button>
            </div>
          </section>
          <section class="card project-overview-panel">
            <div class="project-overview-panel-head"><h3>Recent Activity</h3><button class="btn sm" onclick="showProjectTab('History')">View History</button></div>
            <div class="project-overview-activity">
              ${recentActivity.length ? recentActivity.map(event => `<div><span class="project-activity-dot"></span><p><strong>${event.action || event.module || 'Project activity'}</strong><small>${event.date || ''}</small></p></div>`).join('') : '<p class="project-overview-empty">No project activity recorded.</p>'}
            </div>
          </section>
        </div>
      </div>`;
    }

    function pageProjectWorkspace() {
      const project = projectForContext();
      const projectPos = posForProject(project.name);
      const tab = activeTab.project;
      let tabContent = '';
      if (tab === 'Overview') {
        tabContent = projectOverviewDashboard(project);
      } else if (tab === 'Purchase Orders') {
        tabContent = `
      <div class="card" style="margin-bottom:0;">
        <div class="section-title"><span>Purchase Orders</span><div class="table-heading-actions">${tableExportActions('projectPurchaseOrdersTable',`${project.name} Purchase Orders`)}
          ${canWriteProject(project) ? permBtn('uploadPo', 'Add Purchase Order', 'plus', `startPoUpload('${inlineJsValue(project.name)}')`, "primary") : ''}</div>
        </div>
        ${poTableRich(projectPos,false,'projectPurchaseOrdersTable')}
      </div>`;
      } else if (tab === 'Project BOM') {
        tabContent = pageBomProjectInline();
      } else if (tab === 'Stock') {
        tabContent = projectStockWorkspace(project);
      } else if (tab === 'Simulation') {
        tabContent = `<div class="card">
      <div class="section-title">Latest Simulation</div>
      <div class="empty-state" style="padding:24px;">
        ${icon('sim', '')}
        <div class="e-title">Run a simulation from the Simulation Workspace</div>
        <div class="e-sub">Simulations can be scoped to this entire project, to selected POs, or to a single PO. Set the scope on the Simulation Workspace.</div>
      </div>
      <button class="btn primary" onclick="simProject='${project.name}'; simScope='project'; navigate('sim-launch')" style="margin-top:6px;">Go to Simulation Workspace</button>
    </div>`;
      } else if (tab === 'Manufacturing Deliveries') {
        const projectMfgRows = MFG_DELIVERIES.filter(d => d.project === project.name);
        tabContent = `${projectManufacturingDeliveryPanel(project)}<div class="card">
      <div class="section-title"><span>Manufacturing Deliveries <span class="hint">${project.name}</span></span>${projectMfgRows.length ? tableExportActions('projectMfgDeliveriesTable',`${project.name} Manufacturing Deliveries`) : ''}</div>
      ${mfgTable(projectMfgRows,'projectMfgDeliveriesTable',true)}
    </div>`;
      } else if (tab === 'Customer Deliveries') {
        const projectCustomerRows = CUST_DELIVERIES.filter(d => d.project === project.name);
        tabContent = `${projectCustomerDeliveryPanel(project)}<div class="card">
      <div class="section-title"><span>Customer Deliveries <span class="hint">${project.name}</span></span>${projectCustomerRows.length ? tableExportActions('projectCustomerDeliveriesTable',`${project.name} Customer Deliveries`) : ''}</div>
      ${custTable(projectCustomerRows,'projectCustomerDeliveriesTable',true)}
    </div>`;
      } else if (tab === 'Finance') {
        const financeAccess = can('viewFinance');
        if (financeAccess === false) {
          tabContent = `<div class="card">${emptyStateBlock('No finance access', 'Your role does not have access to financial data for this project.', null)}</div>`;
        } else {
          tabContent = projectFinanceWorkspace(project);
        }
      } else if (tab === 'History') {
        tabContent = traceabilityWorkspace(auditContextEvents({ project:project.name }),`${project.name} project history`,'projectCompleteHistoryTable');
      }

      return `
  <div class="workspace-layout">
    ${projectExplorer('project')}
    <div>
      <div class="workspace-header">
        <div class="ws-header-grid" style="width:100%;">
          <div style="display:flex; gap:18px; align-items:flex-start;">
            <div>
              <span class="ws-id">${project.id}</span>
              <div class="ws-title">${project.name}</div>
              <div class="ws-meta">
                <div class="ws-meta-item"><span class="l">Customer</span><span class="v">${project.customer}</span></div>
                ${currentRole === 'manager' ? `<div class="ws-meta-item"><span class="l">Owner</span><span class="v">${project.engineer}</span></div>` : ''}
              </div>
            </div>
          </div>
          <div class="ws-actions-row">
            ${canWriteProject(project) ? permBtn('uploadPo', 'Add PO', 'plus', `startPoUpload('${inlineJsValue(project.name)}')`) : ''}
            ${canWriteProject(project) ? permBtn('editRecord', 'Edit Project', null, `openProjectForm('edit', '${project.id}')`, "primary") : ''}
          </div>
        </div>
      </div>
      ${workspaceTabs(['Overview', 'Purchase Orders', 'Project BOM', 'Stock', 'Simulation', 'Manufacturing Deliveries', 'Customer Deliveries', 'Finance', 'History'], tab, 'showProjectTab')}
      ${tabContent}
    </div>
  </div>`;
    }

    function projectBomDisplayRows(projectName) {
      const imported = latestBomImportRecord('project',projectName);
      return imported?.rows?.length ? imported.rows : bomImportExampleRows('project',projectName).map(row => ({ ...row, approved:true }));
    }

    function focusedBomImportPanel(level, target) {
      ensureBomImport(level,target);
      const levelLabel = bomImportLevelLabel(level);
      const stats = bomImportStats();
      const allApproved = bomImport.rows.length > 0 && bomImport.approvedRows.size === bomImport.rows.length;
      if (bomImport.stage === 'imported' && bomImport.importedRecord) {
        const record = bomImport.importedRecord;
        return `<div class="card project-bom-import"><div class="project-bom-import-head"><div><h3>${levelLabel} imported</h3><p>${record.file} is now the validated ${record.version} ${levelLabel}.</p></div><button class="btn" onclick="closeBomImport()">Close</button></div><div class="project-bom-upload-body"><div class="po-audit-summary" style="margin:0;"><div class="po-audit-metric"><span>FGPNs</span><strong>${record.fgpnCount}</strong></div><div class="po-audit-metric"><span>Material rows</span><strong>${record.rows.length}</strong></div><div class="po-audit-metric"><span>Validated fields</span><strong>${record.validatedFields}</strong></div><div class="po-audit-metric"><span>Status</span><strong>Validated</strong></div></div></div></div>`;
      }
      if (!bomImport.rows.length) {
        return `<div class="card project-bom-import"><div class="project-bom-import-head"><div><h3>Upload ${levelLabel}</h3><p>${target} · Excel workbook</p></div><button class="btn" onclick="closeBomImport()">Cancel</button></div><div class="project-bom-upload-body"><input id="focusedBomFileInput" type="file" accept=".xlsx,.xls" style="display:none" onchange="bomImportSelectFile(event)"><label class="project-bom-single-upload" for="focusedBomFileInput"><strong>Select ${levelLabel} workbook</strong><span>.xlsx or .xls · maximum 10 MB</span><span class="btn primary" style="display:inline-flex;margin-top:15px;pointer-events:none;">Browse Workbook</span></label><div class="project-bom-upload-actions"><button class="btn" onclick="closeBomImport()">Cancel</button><div><button class="btn" onclick="downloadBomExample()">Download Template</button><button class="btn" onclick="bomImportUseExample()">Use Example Workbook</button></div></div></div></div>`;
      }
      return `<div class="card project-bom-import">
        <div class="project-bom-import-head"><div><h3>Review ${levelLabel}</h3><p>${poEsc(bomImport.fileName)} · ${poEsc(bomImport.fileSize)}</p></div>${statusBadge(bomImport.stage === 'validated' ? 'Validated' : 'Review required',bomImport.stage === 'validated' ? 'success' : 'warning')}</div>
        <div class="project-bom-review-meta"><div><span>Finished Good PNs</span><strong>${stats.fgpnCount}</strong></div><div><span>Material rows</span><strong>${bomImport.rows.length}</strong></div><div><span>Approved rows</span><strong>${bomImport.approvedRows.size}/${bomImport.rows.length}</strong></div></div>
        <div class="project-bom-review-table"><div class="bom-import-table-wrap"><table class="bom-import-table"><thead><tr><th>Row</th><th>Finished Good PN</th><th>Material PN</th><th>Description</th><th>Type</th><th>Usage Qty</th><th>Unit</th><th>Supplier</th><th>Scrap %</th><th>Effective Date</th><th>Revision</th><th>Approval</th></tr></thead><tbody>${bomImport.rows.map((row,index) => `<tr><td class="mono">${row.excelRow}</td><td>${bomImportCell(row,index,'fgpn')}</td><td>${bomImportCell(row,index,'material')}</td><td>${bomImportCell(row,index,'description','text',true)}</td><td>${bomImportCell(row,index,'materialType')}</td><td>${bomImportCell(row,index,'usageQty','number')}</td><td>${bomImportCell(row,index,'unit')}</td><td>${bomImportCell(row,index,'supplier','text',true)}</td><td>${bomImportCell(row,index,'scrapPct','number')}</td><td>${bomImportCell(row,index,'effectiveDate','date')}</td><td>${bomImportCell(row,index,'revision')}</td><td><button class="btn sm ${bomImport.approvedRows.has(index) ? 'primary' : ''}" onclick="toggleBomImportRow(${index})" ${bomImport.stage === 'validated' ? '' : 'disabled'}>${bomImport.approvedRows.has(index) ? 'Approved' : 'Approve'}</button></td></tr>`).join('')}</tbody></table></div></div>
        <div class="project-bom-review-footer"><button class="btn" onclick="closeBomImport()">Cancel</button><div><button class="btn" onclick="validateBomImportFields()">Validate Fields</button>${bomImport.stage === 'validated' ? `<button class="btn" onclick="approveAllBomImportRows()">Approve All</button><button class="btn primary" onclick="importValidatedBom()" ${allApproved ? '' : 'disabled'}>Import ${levelLabel}</button>` : ''}</div></div>
      </div>`;
    }
    function projectBomImportPanel(projectName) { return focusedBomImportPanel('project',projectName); }
    function poBomFocusedImportPanel(poId) { return focusedBomImportPanel('po',poId); }

    function pageBomProjectInline() {
      const project = projectForContext();
      if (bomImport.open && bomImport.level === 'project' && bomImport.target === project.name) return projectBomImportPanel(project.name);
      const record = latestBomImportRecord('project',project.name);
      const rows = projectBomDisplayRows(project.name);
      const version = record?.version || PROJECT_BOM_META.version;
      const file = record?.file || `${project.name.replace(/\s+/g,'_')}_Project_BOM_${version}.xlsx`;
      const fgpnCount = new Set(rows.map(row => row.fgpn)).size;
      const materialCount = new Set(rows.map(row => row.material)).size;
      const fgpnOptions = [...new Set(rows.map(row => row.fgpn))].sort();
      const typeOptions = [...new Set(rows.map(row => row.materialType))].sort();
      const query = projectBomFilters.search.trim().toLowerCase();
      const filteredRows = rows.filter(row => {
        const poId = projectPnsForBomRow(project.name,row.fgpn);
        if (projectBomFilters.fgpn && row.fgpn !== projectBomFilters.fgpn) return false;
        if (projectBomFilters.type && row.materialType !== projectBomFilters.type) return false;
        if (query && ![poId,row.fgpn,row.material,row.description,row.materialType,row.supplier,row.revision].some(value => String(value || '').toLowerCase().includes(query))) return false;
        return true;
      });
      return `<div class="card project-bom-clean">
        <div class="project-bom-clean-head"><div class="project-bom-clean-title"><div class="project-bom-file-icon">${icon('FileText','')}</div><div><h3>Project BOM</h3><p>${file}</p></div></div><div class="project-bom-clean-actions">${tableExportActions('projectBomMaterialsTable',`${project.name} Project BOM`)}</div></div>
        <div class="project-bom-meta"><div class="project-bom-meta-item"><span>Version</span><strong>${version}</strong></div><div class="project-bom-meta-item"><span>Finished Good PNs</span><strong>${fgpnCount}</strong></div><div class="project-bom-meta-item"><span>Unique Materials</span><strong>${materialCount}</strong></div><div class="project-bom-meta-item"><span>Material Rows</span><strong>${rows.length}</strong></div></div>
        <div class="project-bom-table-wrap">
          <div class="project-bom-table-head"><h4>Project BOM Materials</h4><span>${filteredRows.length} of ${rows.length} rows</span></div>
          <div class="project-bom-toolbar">
            <div class="project-bom-search">${icon('search','')}<input id="projectBomSearch" value="${projectHtmlValue(projectBomFilters.search)}" oninput="setProjectBomFilter('search',this.value)" placeholder="Search material, description, supplier…"></div>
            <select onchange="setProjectBomFilter('fgpn',this.value)"><option value="">All finished-good PNs</option>${fgpnOptions.map(value => `<option value="${value}" ${projectBomFilters.fgpn === value ? 'selected' : ''}>${value}</option>`).join('')}</select>
            <select onchange="setProjectBomFilter('type',this.value)"><option value="">All material types</option>${typeOptions.map(value => `<option value="${value}" ${projectBomFilters.type === value ? 'selected' : ''}>${value}</option>`).join('')}</select>
            ${(projectBomFilters.search || projectBomFilters.fgpn || projectBomFilters.type) ? `<button class="btn sm" onclick="resetProjectBomFilters()">Clear</button>` : ''}
          </div>
          <div class="table-scroll"><table id="projectBomMaterialsTable" class="project-bom-table"><thead><tr><th>PO</th><th>Finished Good PN</th><th>Material PN</th><th>Description</th><th>Type</th><th>Usage Qty</th><th>Unit</th><th>Supplier</th><th>Revision</th></tr></thead><tbody>${filteredRows.length ? filteredRows.map(row => `<tr><td class="mono">${projectPnsForBomRow(project.name,row.fgpn)}</td><td class="mono">${row.fgpn}</td><td class="mono">${row.material}</td><td>${row.description}</td><td>${row.materialType}</td><td class="mono">${row.usageQty}</td><td>${row.unit}</td><td>${row.supplier}</td><td class="mono">${row.revision}</td></tr>`).join('') : `<tr><td colspan="9"><div class="project-bom-no-results">No BOM materials match these filters.</div></td></tr>`}</tbody></table></div>
        </div>
      </div>`;
    }
    function projectPnsForBomRow(projectName,fgpn) {
      return PNS.find(part => part.project === projectName && part.pn === fgpn)?.po || '—';
    }
    function setProjectBomFilter(key,value) {
      projectBomFilters[key] = value;
      renderPage();
      if (key === 'search') restoreFocus('#projectBomSearch');
    }
    function resetProjectBomFilters() {
      projectBomFilters = { search:'', fgpn:'', type:'' };
      renderPage();
    }

    /* ============ PO PRODUCTION CONTROL (M04 + Production & Packing Coordinator) ============ */
    function productionStatusType(status) {
      return ({ 'Unplanned':'neutral', 'In Progress':'info', 'Done':'success', 'Packaged':'warning', 'Delivered':'success' })[status] || 'neutral';
    }

    const FGPN_MASTER_MAP = {
      PN100:'FG-BX5-100', PN101:'FG-BX5-101', PN102:'FG-BX5-102',
      PN103:'FG-BX5-103', PN104:'FG-BX5-104', PN105:'FG-BX5-105', PN106:'FG-BX5-106',
      PN201:'FG-RCV-330', PN202:'FG-RCV-331', PN301:'FG-P208-050',
      PN401:'FG-DS-210', PN402:'FG-DS-211', PN403:'FG-DS-212', PN404:'FG-DS-213',
    };
    function poFinishedGoods(poId) {
      return pnsForPo(poId).map(part => ({ ...part, fgpn:FGPN_MASTER_MAP[part.pn] || part.pn, ordered:Number(part.qty || 0) }));
    }
    function mfgNormalizeLaunchLine(delivery,line) {
      const fallback = delivery.lifecycleStatus || (delivery.docUploaded ? 'In Progress' : 'Unplanned');
      line.status = PO_STATUS_FLOW.includes(line.status) ? line.status : fallback;
      line.qty = Number(line.qty || 0);
      line.producedQty = Number(line.producedQty ?? (PO_STATUS_FLOW.indexOf(line.status) >= 2 ? line.qty : 0));
      line.packagedQty = Number(line.packagedQty ?? (PO_STATUS_FLOW.indexOf(line.status) >= 3 ? line.qty : 0));
      line.customerDeliveredQty = Number(line.customerDeliveredQty || 0);
      return line;
    }
    function mfgLaunchLines(poId = '') {
      return MFG_DELIVERIES.filter(delivery => delivery.status !== 'Cancelled' && (!poId || delivery.po === poId)).flatMap(delivery =>
        mfgDeliveryPnQuantities(delivery).map(line => ({ delivery, line:mfgNormalizeLaunchLine(delivery,line) })).filter(item => item.line.qty > 0)
      );
    }
    function syncMfgDeliveryLifecycle(delivery) {
      const lines = mfgDeliveryPnQuantities(delivery).map(line => mfgNormalizeLaunchLine(delivery,line));
      delivery.lifecycleStatus = lines.length ? [...lines].sort((a,b) => PO_STATUS_FLOW.indexOf(a.status)-PO_STATUS_FLOW.indexOf(b.status))[0].status : 'Unplanned';
      return delivery.lifecycleStatus;
    }
    function manufacturingStageQty(poId,fgpn,stage) {
      const stageIndex = PO_STATUS_FLOW.indexOf(stage);
      return mfgLaunchLines(poId).filter(item => item.line.fgpn === fgpn && PO_STATUS_FLOW.indexOf(item.line.status) >= stageIndex).reduce((sum,item) => sum + item.line.qty,0);
    }
    function customerDeliveryItems(delivery) {
      if (Array.isArray(delivery?.items) && delivery.items.length) return delivery.items;
      return delivery?.fgpn ? [{ fgpn:delivery.fgpn, qty:Number(delivery.qty || 0), description:customerFgpnDetails(delivery.po,delivery.fgpn).desc, unitPrice:Number(delivery.unitValue || 0), launchAllocations:[] }] : [];
    }
    function customerShipmentItems(shipment) {
      if (Array.isArray(shipment?.items) && shipment.items.length) return shipment.items;
      return shipment?.fgpn ? [{ fgpn:shipment.fgpn, qty:Number(shipment.qty || 0), description:shipment.description || '', value:Number(shipment.value || 0), launchAllocations:[] }] : [];
    }
    function customerAllocatedQty(poId,fgpn) {
      return CUST_DELIVERIES.filter(delivery => delivery.po === poId && delivery.status !== 'Cancelled').flatMap(customerDeliveryItems).filter(item => item.fgpn === fgpn).reduce((sum,item) => sum + Number(item.qty || 0),0);
    }
    function customerConfirmedQty(poId,fgpn) {
      return CUST_DELIVERIES.filter(delivery => delivery.po === poId).flatMap(delivery => delivery.shipments || []).filter(shipment => !!shipment.confirmation).flatMap(customerShipmentItems).filter(item => item.fgpn === fgpn).reduce((sum,item) => sum + Number(item.qty || 0),0);
    }
    function packagedQuantitySummary(poId,fgpn) {
      const part = poFinishedGoods(poId).find(item => item.fgpn === fgpn);
      const ordered = Number(part?.ordered || 0);
      const packaged = Math.min(ordered,manufacturingStageQty(poId,fgpn,'Packaged'));
      const allocated = Math.min(packaged,customerAllocatedQty(poId,fgpn));
      const delivered = Math.min(ordered,customerConfirmedQty(poId,fgpn));
      return { ordered,packaged,allocated,delivered,available:Math.max(0,packaged-allocated),remaining:Math.max(0,ordered-delivered) };
    }
    function poLifecycle(poId) {
      const parts = poFinishedGoods(poId).filter(part => part.ordered > 0);
      if (!parts.length) return 'Unplanned';
      const complete = stage => parts.every(part => manufacturingStageQty(poId,part.fgpn,stage) >= part.ordered);
      if (parts.every(part => customerConfirmedQty(poId,part.fgpn) >= part.ordered)) return 'Delivered';
      if (complete('Packaged')) return 'Packaged';
      if (complete('Done')) return 'Done';
      if (complete('In Progress')) return 'In Progress';
      return 'Unplanned';
    }

    function productionActor() {
      return ({ prod_coord:'Y. Mansouri', engineer:'A. Rahal', manager:'S. Ait Oubou', wh_lead:'M. El Idrissi' })[currentRole] || ROLE_LABEL[currentRole];
    }

    function poWorkOrders(poId) { return PRODUCTION_ORDERS.filter(order => order.po === poId); }
    function poQuantitySummary(poId) {
      const parts = poFinishedGoods(poId);
      const ordered = parts.reduce((sum,part) => sum + part.ordered,0);
      const produced = Math.min(ordered,parts.reduce((sum,part) => sum + Math.min(part.ordered,manufacturingStageQty(poId,part.fgpn,'Done')),0));
      const packaged = Math.min(ordered,parts.reduce((sum,part) => sum + Math.min(part.ordered,manufacturingStageQty(poId,part.fgpn,'Packaged')),0));
      const delivered = Math.min(ordered,parts.reduce((sum,part) => sum + Math.min(part.ordered,customerConfirmedQty(poId,part.fgpn)),0));
      return { ordered, produced, packaged, delivered, remaining:Math.max(0,ordered-delivered) };
    }
    function fgpnQuantitySummary(poId, fgpn) {
      const summary = packagedQuantitySummary(poId,fgpn);
      return { ordered:summary.ordered, delivered:summary.delivered, packaged:summary.packaged, allocated:summary.allocated, available:summary.available, remaining:summary.remaining };
    }
    function customerEligibleOrders(poId) {
      return poFinishedGoods(poId).filter(part => packagedQuantitySummary(poId,part.fgpn).available > 0).map(part => ({ id:`PKG-${part.fgpn}`, po:poId, project:part.project, fgpn:part.fgpn, qty:part.ordered, status:'Packaged', desc:part.desc }));
    }
    function poStatusEvents(poId) { return PO_STATUS_HISTORY.filter(event => event.po === poId).sort((a,b) => b.date.localeCompare(a.date)); }
    function recordPoLifecycleChange(poId, from, to, user, reason, evidence) {
      if (!to || from === to) return;
      const po = POS.find(item => item.id === poId);
      const event = { id:`PSH-${String(PO_STATUS_HISTORY.length + 15).padStart(4,'0')}`, po:poId, from:from || null, to, date:new Date().toISOString().slice(0,16).replace('T',' '), user:user || productionActor(), reason, evidence:evidence || 'System event' };
      PO_STATUS_HISTORY.unshift(event);
      AUDIT_LOGS.unshift({ id:`AUD-${10300 + AUDIT_LOGS.length}`, date:event.date, user:event.user, module:'Purchase Order Status', action:from ? `${from} → ${to}` : `${to} created`, entity:poId, project:po?.project || '', po:poId, details:`${reason}. Evidence: ${event.evidence}.` });
    }
    function ensureProductionOrdersForPo(poId) {
      let orders = poWorkOrders(poId);
      if (orders.length) return orders;
      const po = POS.find(item => item.id === poId);
      const pns = pnsForPo(poId);
      pns.forEach((pn,index) => PRODUCTION_ORDERS.push({ id:`WO-${1100 + PRODUCTION_ORDERS.length + index}`, po:poId, project:po?.project || pn.project, customer:po?.customer || '', fgpn:pn.pn, qty:Number(pn.qty || 0), produced:0, packaged:0, status:'Unplanned', due:po?.delivery || 'Not set', line:'Not assigned', updatedBy:productionActor(), updatedAt:'Just now', priority:false }));
      orders = poWorkOrders(poId);
      return orders;
    }
    function poLifecycleFlowHtml(poId) {
      const current = poLifecycle(poId);
      const currentIndex = PO_STATUS_FLOW.indexOf(current);
      return `<div class="po-lifecycle-strip">${PO_STATUS_FLOW.map((status,index) => `<div class="po-life-node ${index < currentIndex ? 'complete' : index === currentIndex ? 'current' : ''}"><div class="po-life-node-name">${index < currentIndex ? '✓ ' : ''}${status}</div><div class="po-life-node-owner">${PO_STATUS_OWNER[status]}</div><div class="po-life-node-trigger">${PO_STATUS_TRIGGER[status]}</div></div>`).join('')}</div>`;
    }
    function materialsForPo(poId) {
      const codes = new Set();
      pnsForPo(poId).forEach(pn => Object.keys(BOM_USAGE[pn.pn] || {}).forEach(code => codes.add(code)));
      const rows = MATERIALS.filter(material => codes.has(material.code));
      return rows.length ? rows : MATERIALS.slice(0,4);
    }
    function projectSelectedPo(project) {
      const rows = posForProject(project.name);
      const selected = rows.find(po => po.id === projectOpsSelectedPo) || rows[0] || null;
      if (selected) projectOpsSelectedPo = selected.id;
      return selected;
    }
    function setProjectOpsPo(poId) { projectOpsSelectedPo = poId; poRollback = { open:false, po:'', reason:'' }; renderPage(); }
    function startProjectMfgDelivery(poId, fgpn = '') {
      const po = POS.find(item => item.id === poId);
      const project = PROJECTS.find(item => item.name === po?.project);
      if (!po || !project || !canWriteProject(project)) return openModal('Action not permitted','You can create manufacturing deliveries only for an assigned project.');
      if (!['Unplanned','In Progress'].includes(poLifecycle(poId))) return openModal('Manufacturing transfer closed',`${poId} is ${poLifecycle(poId)}. Manufacturing deliveries are available while the PO is Unplanned or In Progress.`);
      const eligible = mfgEligibleOrders(poId);
      const selectedFgpn = eligible.find(order => order.fgpn === fgpn)?.fgpn || eligible[0]?.fgpn || '';
      mfgWizard.project = po.project; mfgWizard.po = po.id; mfgWizard.fgpn = selectedFgpn; mfgWizard.fgpns = selectedFgpn ? [selectedFgpn] : []; mfgWizard.fgpnQtys = selectedFgpn ? { [selectedFgpn]:0 } : {}; mfgWizard.approval = null; mfgSimulationContext.active = false; mfgLaunchSimulationResult = null; mfgWizardStep = 1; mfgWizard.selectedMaterials = {}; mfgWizard.qtys = {}; mfgWizard.itemTimes = {}; mfgWizard.code = ''; mfgWizard.receiver = '';
      navigate('mfg-delivery-create');
    }
    function startProjectCustomerDelivery(poId, fgpn = '', source = 'project') {
      const po = POS.find(item => item.id === poId);
      const project = PROJECTS.find(item => item.name === po?.project);
      if (!po || !project || !canWriteProject(project)) return openModal('Action not permitted','You can create customer deliveries only for an assigned project.');
      const eligible = customerEligibleOrders(poId);
      const order = eligible.find(item => item.fgpn === fgpn) || eligible[0];
      if (!order) return openModal('No packaged part is ready',`${poId} has no packaged Finished Good Part Number with a remaining quantity. Current PO status: ${poLifecycle(poId)}.`);
      custWizard = { project:po.project, po:po.id, fgpn:'', fgpns:[], fgpnQtys:{}, method:'Truck', tracking:'', deliveryDate:'', address:`${po.customer} Receiving Center`, source };
      resetCustWizardScope(po.id,order.fgpn);
      custWizardStep = 1;
      navigate('cust-delivery-create');
    }
    function openPoRollback(poId) {
      const po = POS.find(item => item.id === poId);
      const project = PROJECTS.find(item => item.name === po?.project);
      if (currentRole !== 'engineer' || !project || !canWriteProject(project)) return openModal('Rollback not permitted','Only the assigned Launch Engineer can move a PO backward.');
      if (poLifecycle(poId) === 'Unplanned') return openModal('No earlier status','Unplanned is the first PO status.');
      poRollback = { open:true, po:poId, reason:'' }; renderPage();
    }
    function confirmPoRollback(poId) {
      const reason = String(poRollback.reason || '').trim();
      if (reason.length < 10) return openModal('Written reason required','Enter a clear rollback reason of at least 10 characters. It will be stored in immutable status history.');
      const current = poLifecycle(poId);
      const index = PO_STATUS_FLOW.indexOf(current);
      if (index <= 0) return;
      const previous = PO_STATUS_FLOW[index-1];
      mfgLaunchLines(poId).filter(item => item.line.status === current).forEach(({delivery,line}) => {
        line.status=previous;
        if (previous === 'In Progress') { line.producedQty=0; line.packagedQty=0; }
        if (previous === 'Done') line.packagedQty=0;
        if (previous === 'Packaged') line.customerDeliveredQty=0;
        syncMfgDeliveryLifecycle(delivery);
      });
      recordPoLifecycleChange(poId,current,previous,productionActor(),`Backward transition: ${reason}`,'Mandatory engineer reason');
      poRollback = { open:false, po:'', reason:'' }; renderAll();
      openModal('PO status rolled back',`${poId} moved from ${current} to ${previous}. The written reason is stored in status history.`);
    }
    function poNextActionCopy(status) {
      return {
        'Unplanned':['Create manufacturing delivery','Launch Engineer creates an M08 instruction. Production starts only after the Warehouse Team Leader uploads the signed receiver document.'],
        'In Progress':['Complete production','The Production & Packing Coordinator confirms each production quantity. The PO becomes Done only when every active work order is complete.'],
        'Done':['Confirm packaging','The Production & Packing Coordinator records packaged quantities and moves the PO to Packaged.'],
        'Packaged':['Deliver and confirm','Launch Engineer creates customer shipments. Delivered requires zero remaining quantity and customer evidence for every shipment.'],
        'Delivered':['Lifecycle complete','Customer delivery is fully confirmed. Status history and evidence remain available for audit.'],
      }[status];
    }
    function projectPoLifecycleCenter(project) {
      const projectPos = posForProject(project.name);
      if (!projectPos.length) return '';
      const selected = projectSelectedPo(project);
      const status = poLifecycle(selected.id);
      const totals = poQuantitySummary(selected.id);
      const next = poNextActionCopy(status);
      const events = poStatusEvents(selected.id).slice(0,4);
      return `<div class="card project-lifecycle-center">
        <div class="project-lifecycle-head"><div><h3>PO lifecycle & delivery control</h3><p>Five enforced statuses connected to real operational evidence. Select a PO to monitor it or start the next permitted delivery action.</p></div>${statusBadge(`${selected.id} · ${status}`,productionStatusType(status))}</div>
        <div class="project-po-pills">${projectPos.map(po => `<button class="project-po-pill ${po.id === selected.id ? 'active' : ''}" onclick="setProjectOpsPo('${po.id}')"><span class="mono">${po.id}</span>${statusBadge(poLifecycle(po.id),productionStatusType(poLifecycle(po.id)))}</button>`).join('')}</div>
        ${poLifecycleFlowHtml(selected.id)}
        <div class="project-ops-grid">
          <div class="project-ops-panel"><div class="project-ops-panel-title"><div><strong>Quantity control</strong><span>Partial manufacturing launches and customer deliveries remain visible until zero remaining.</span></div></div><div class="po-quantity-grid"><div class="po-quantity-tile"><span>Ordered</span><strong>${totals.ordered.toLocaleString()}</strong></div><div class="po-quantity-tile"><span>Production Done</span><strong>${totals.produced.toLocaleString()}</strong></div><div class="po-quantity-tile"><span>Packaged</span><strong>${totals.packaged.toLocaleString()}</strong></div><div class="po-quantity-tile"><span>Remaining delivery</span><strong style="color:${totals.remaining ? 'var(--warning)' : 'var(--success)'}">${totals.remaining.toLocaleString()}</strong></div></div><div class="po-next-action" style="margin-top:10px;">${icon('Activity','')}<div><strong>${next[0]}</strong><span>${next[1]}</span></div></div><div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:10px;">${mfgEligibleOrders(selected.id).length && canWriteProject(project) ? permBtn('createMfgDelivery','Create Manufacturing Delivery','truck',`startProjectMfgDelivery('${selected.id}')`,'primary') : ''}${customerEligibleOrders(selected.id).length && canWriteProject(project) ? permBtn('createCustDelivery','Create Customer Delivery','truck',`startProjectCustomerDelivery('${selected.id}')`,'primary') : ''}<button class="btn sm" onclick="showProjectTab('Manufacturing Deliveries')">Manufacturing records</button><button class="btn sm" onclick="showProjectTab('Customer Deliveries')">Customer records</button>${currentRole === 'engineer' && status !== 'Unplanned' && canWriteProject(project) ? `<button class="btn sm" onclick="openPoRollback('${selected.id}')">Rollback with reason</button>` : ''}</div>${poRollback.open && poRollback.po === selected.id ? `<div class="rollback-panel"><strong>Backward transition: ${status} → ${PO_STATUS_FLOW[PO_STATUS_FLOW.indexOf(status)-1]}</strong><textarea placeholder="Mandatory written reason…" oninput="poRollback.reason=this.value">${poRollback.reason}</textarea><div style="display:flex;justify-content:flex-end;gap:7px;"><button class="btn sm" onclick="poRollback={open:false,po:'',reason:''};renderPage()">Cancel</button><button class="btn sm primary" onclick="confirmPoRollback('${selected.id}')">Confirm rollback</button></div></div>` : ''}</div>
          <div class="project-ops-panel"><div class="project-ops-panel-title"><div><strong>Status history</strong><span>Date, user, reason and evidence are retained.</span></div><button class="btn sm" onclick="openPo('${selected.id}','History')">Full history</button></div><div class="po-history-list">${events.length ? events.map(event => `<div class="po-history-row"><span class="po-history-dot"></span><div><strong>${event.from ? `${event.from} → ` : ''}${event.to}</strong><span>${event.date} · ${event.user}<br>${event.reason} · ${event.evidence}</span></div></div>`).join('') : '<span class="hint">No status events recorded yet.</span>'}</div></div>
        </div>
      </div>`;
    }
    function poFullAuditEvents(poId) {
      const po = POS.find(item => item.id === poId);
      const events = [];
      const add = event => events.push({ date:event.date || 'Not recorded', module:event.module || 'Purchase Order', action:event.action || 'Activity recorded', actor:event.actor || 'System', role:event.role || 'System record', entity:event.entity || poId, details:event.details || '—', evidence:event.evidence || '—', result:event.result || 'Recorded' });

      poStatusEvents(poId).forEach(event => add({ date:event.date, module:'PO Lifecycle', action:event.from ? `${event.from} → ${event.to}` : `${event.to} created`, actor:event.user, role:PO_STATUS_OWNER[event.to], entity:poId, details:event.reason, evidence:event.evidence, result:event.to }));
      AUDIT_LOGS.filter(log => log.po === poId && !(log.module === 'Purchase Order Status' && (String(log.action).includes('→') || String(log.action).endsWith('created')))).forEach(log => add({ date:log.date, module:log.module, action:log.action, actor:log.user, role:'Application user', entity:log.entity, details:log.diff ? `${log.details} Changed ${log.diff.field}: ${log.diff.old} → ${log.diff.new}.` : log.details, evidence:log.evidence || log.entity, result:'Audited' }));

      const versions = poId === 'PO-00045' ? PO_VERSION_HISTORY : [{ version:po?.version || 'v1', current:true, date:po?.date || 'Not recorded', uploadedBy:poStatusEvents(poId).slice(-1)[0]?.user || 'System', comment:'Initial validated PO version stored', status:'Current' }];
      versions.forEach(version => add({ date:version.date, module:'PO Version', action:version.comment === 'Initial upload' || version.version === 'v1' ? 'Original PO uploaded' : 'PO version uploaded', actor:version.uploadedBy, role:'Launch user', entity:`${poId} · ${version.version}`, details:`${version.comment}. Version status: ${version.status}.`, evidence:`${poId}_${version.version}.pdf`, result:version.current ? 'Current' : 'Archived' }));

      PO_BOM_FILES.filter(file => file.po === poId).forEach(file => add({ date:file.uploadedAt, module:'BOM', action:'PO BOM uploaded and validated', actor:file.uploadedBy, role:'Launch user', entity:`${poId} BOM ${file.version}`, details:`${file.fgpnCount} finished-good part numbers and ${file.materialCount} material rows validated.`, evidence:file.file, result:file.status }));
      BOM_IMPORT_RECORDS.filter(record => record.level === 'po' && record.target === poId).forEach(record => add({ date:record.importedAt, module:'BOM Extraction', action:'Excel fields extracted and approved', actor:record.importedBy, role:'Launch user', entity:record.id, details:`${record.rows.length} rows, ${record.fgpnCount} FGPNs and ${record.materialCount} materials approved field by field.`, evidence:record.file, result:record.status }));
      SIMULATION_HISTORY.filter(sim => sim.pos.includes(poId)).forEach(sim => add({ date:sim.date, module:'Simulation', action:'Launch simulation executed', actor:sim.executedBy, role:'Launch user', entity:sim.id, details:`Result ${sim.result}; maximum quantity ${sim.maxQty}; ${sim.missingCount} missing material${sim.missingCount === 1 ? '' : 's'}; safety coefficient ${sim.safety}.`, evidence:`PO ${poId} · current stock snapshot`, result:sim.result }));

      MFG_DELIVERIES.filter(delivery => delivery.po === poId).forEach(delivery => {
        const deliveryFgpns = delivery.fgpns?.length ? delivery.fgpns : (delivery.fgpn ? [delivery.fgpn] : []);
        const launchQty = mfgDeliveryPnQuantities(delivery).reduce((sum,line) => sum + Number(line.qty || 0),0);
        add({ date:delivery.generatedAt || delivery.date, module:'Manufacturing Delivery', action:'Delivery instruction created', actor:delivery.createdBy || 'Launch Engineer', role:'Launch Engineer', entity:delivery.code, details:`${launchQty ? `${launchQty.toLocaleString()} finished-good units planned; ` : ''}${delivery.materials.length} material line${delivery.materials.length === 1 ? '' : 's'} prepared${deliveryFgpns.length ? ` for ${deliveryFgpns.join(', ')}` : ''}. Receiver: ${delivery.receiver || 'selected later by Warehouse Team Leader'}.${delivery.notes ? ` Comment: ${delivery.notes}` : ''}`, evidence:delivery.code, result:delivery.status });
        if (delivery.docUploaded) add({ date:delivery.signedAt || delivery.date, module:'Manufacturing Reception', action:'Receiver-signed document uploaded', actor:delivery.signedBy || 'Warehouse Team Leader', role:'Warehouse Team Leader', entity:delivery.code, details:`Signed reception stored for ${delivery.receiver || 'manufacturing receiver'}; production start evidence recorded.`, evidence:delivery.signedFileName || `${delivery.code}_signed.pdf`, result:'Accepted' });
        if (delivery.status === 'Delivered') add({ date:delivery.completedAt || delivery.date, module:'Stock', action:'Signed document validated and stock updated', actor:delivery.validatedBy || 'Launch Engineer / Manager', role:'Launch validation', entity:delivery.code, details:`Warehouse stock reduced for ${delivery.materials.length} transferred material line${delivery.materials.length === 1 ? '' : 's'}.`, evidence:delivery.signedFileName || `${delivery.code}_signed.pdf`, result:'Completed' });
      });

      CUST_DELIVERIES.filter(delivery => delivery.po === poId).forEach(delivery => {
        add({ date:delivery.createdAt || delivery.date, module:'Customer Delivery', action:'Customer delivery instruction created', actor:delivery.createdBy || 'Launch Engineer', role:'Launch Engineer', entity:delivery.code, details:`${delivery.qty.toLocaleString()} units of ${delivery.fgpn} planned for ${delivery.customer} by ${delivery.method}.`, evidence:delivery.tracking && delivery.tracking !== '—' ? delivery.tracking : delivery.code, result:delivery.status });
        delivery.shipments.forEach(shipment => {
          if (shipment.status !== 'Planned') add({ date:shipment.date, module:'Customer Shipment', action:'Partial or full shipment recorded', actor:shipment.recordedBy || 'Launch Engineer', role:'Launch Engineer', entity:`${delivery.code} · ${shipment.id}`, details:`${shipment.qty.toLocaleString()} units of ${shipment.fgpn} sent to ${delivery.customer} by ${shipment.method}; level ${shipment.level || 'not specified'}.`, evidence:delivery.tracking && delivery.tracking !== '—' ? delivery.tracking : shipment.id, result:shipment.status });
          if (shipment.confirmation) add({ date:shipment.confirmation.date, module:'Customer Confirmation', action:'Customer receipt confirmed', actor:shipment.confirmation.confirmedBy, role:'Customer / receiving party', entity:`${delivery.code} · ${shipment.id}`, details:`Confirmation method: ${shipment.confirmation.method}. Reference: ${shipment.confirmation.reference}. Recorded in the system by ${shipment.confirmation.recordedBy || 'Launch Engineer'}. ${shipment.confirmation.comments || 'No comments.'}`, evidence:shipment.confirmation.evidence, result:'Confirmed' });
        });
      });

      const unique = new Map();
      events.forEach(event => unique.set(`${event.date}|${event.module}|${event.action}|${event.entity}`,event));
      return [...unique.values()].sort((a,b) => {
        const aTime = Date.parse(String(a.date).replace(' ','T')) || 0;
        const bTime = Date.parse(String(b.date).replace(' ','T')) || 0;
        return bTime - aTime || String(b.date).localeCompare(String(a.date));
      });
    }

    function auditActorRole(actor,module='') {
      const known = {
        'A. Haddad':'Launch Engineer', 'A. Rahal':'Launch Engineer', 'S. Amrani':'Launch Engineer',
        'M. Idrissi':'Launch Manager', 'S. Ait Oubou':'Launch Manager', 'M. El Idrissi':'Warehouse Team Leader',
        'Y. Mansouri':'Production & Packing Coordinator', 'N. El Fassi':'Production & Packing Coordinator',
        'S. Alaoui':'Production & Packing Coordinator', 'H. Vogel (BMW Group)':'Customer Receiver'
      };
      if (known[actor]) return known[actor];
      if (/warehouse|reception|stock/i.test(module)) return 'Warehouse / Launch user';
      if (/customer confirmation/i.test(module)) return 'Customer / receiving party';
      return actor === 'System' ? 'System record' : 'Application user';
    }

    function auditEvidenceArtifacts(event) {
      const artifacts = [];
      const add = (name,type='Evidence',action='evidence',ref='') => {
        const clean = String(name || '').trim();
        if (!clean || clean === '—' || artifacts.some(item => item.name === clean)) return;
        artifacts.push({ name:clean, type, action, ref });
      };
      const evidence = String(event.evidence || '');
      if (/\.(pdf)$/i.test(evidence)) add(evidence,'PDF','evidence');
      else if (/\.(xlsx|xls|csv)$/i.test(evidence)) add(evidence,'Excel','evidence');
      else if (/\.(png|jpe?g)$/i.test(evidence)) add(evidence,'Image','evidence');

      const po = event.po && POS.find(item => item.id === event.po);
      if (po && /original po uploaded|po version uploaded|po uploaded|purchase order/i.test(`${event.action} ${event.module}`)) {
        add(/\.pdf$/i.test(evidence) ? evidence : `${po.id}_${po.version}.pdf`,'Original PDF','po-pdf',po.id);
        add(`${po.id}_extracted_data.xlsx`,'Extracted Excel','po-excel',po.id);
      }
      const mfg = event.mfgCode && MFG_DELIVERIES.find(item => item.code === event.mfgCode);
      if (mfg?.documentGeneratedAt && /document|instruction/i.test(`${event.module} ${event.action}`)) add(mfg.documentFileName || `warehouse-to-manufacturing_${mfg.code}.pdf`,'Generated PDF','mfg-pdf',mfg.code);
      if (mfg?.docUploaded && /signed|reception|stock/i.test(`${event.module} ${event.action} ${event.evidence}`)) add(mfg.signedFileName || `${mfg.code}_signed.pdf`,'Signed PDF','evidence',mfg.code);
      const customer = event.custCode && CUST_DELIVERIES.find(item => item.code === event.custCode);
      if ((customer?.instructionGenerated || customer?.instructionFile) && /instruction|customer document|delivery.*created/i.test(`${event.module} ${event.action}`)) add(customer.instructionFile || `${customer.code}_customer_delivery_instruction.pdf`,'Instruction PDF','cust-pdf',customer.code);
      return artifacts;
    }

    function completeAuditEvents() {
      const raw = [];
      const add = event => raw.push(event);

      PROJECTS.forEach(project => {
        const loggedCreation = AUDIT_LOGS.some(log => /project created/i.test(log.action) && log.project === project.name);
        if (!loggedCreation) add({
          date:`${project.startDate} 09:00`, module:'Project', action:'Project created', actor:'S. Ait Oubou', role:'Launch Manager',
          entity:project.id, project:project.name, details:`${project.name} created for ${project.customer}; site ${project.site}; assigned Launch Engineer ${project.engineer}. ${project.description || ''}`.trim(),
          evidence:'Project master record', result:'Created'
        });
      });

      POS.forEach(po => poFullAuditEvents(po.id).forEach(event => add({ ...event, project:po.project, po:po.id })));

      AUDIT_LOGS.filter(log => !POS.some(po => po.id === log.po)).forEach(log => add({
        date:log.date, module:log.module, action:log.action, actor:log.user, role:auditActorRole(log.user,log.module), entity:log.entity,
        project:log.project, po:log.po, details:log.diff ? `${log.details} ${log.diff.field}: ${log.diff.old} → ${log.diff.new}.` : log.details,
        evidence:log.evidence || 'System audit record', result:'Recorded', diff:log.diff
      }));

      PNS.filter(pn => pn.bom === 'Uploaded').forEach(pn => add({
        date:`${pn.bomUpdated} 10:00`, module:'PN BOM', action:'PN BOM validated', actor:PROJECTS.find(project => project.name === pn.project)?.engineer || 'Launch Engineer',
        role:'Launch Engineer', entity:pn.pn, project:pn.project, po:pn.po, pn:pn.pn,
        details:`${pn.bomFile} validated as the authoritative material structure for ${pn.pn}.`, evidence:pn.bomFile, result:'Validated'
      }));

      BOM_IMPORT_RECORDS.filter(record => record.level !== 'po').forEach(record => {
        const pn = record.level === 'pn' ? PNS.find(item => item.pn === record.target) : null;
        const projectName = record.level === 'project' ? record.target : pn?.project;
        add({ date:record.importedAt, module:`${record.level === 'project' ? 'Project' : 'PN'} BOM Extraction`, action:'Excel fields extracted and approved',
          actor:record.importedBy, role:'Launch user', entity:record.id, project:projectName, po:pn?.po || '', pn:pn?.pn || '',
          details:`${record.rows.length} rows, ${record.fgpnCount} finished-good part numbers and ${record.materialCount} materials approved field by field.`, evidence:record.file, result:record.status });
      });

      MFG_DELIVERIES.forEach(delivery => {
        const pns = mfgDeliveryFgpns(delivery);
        if (delivery.used) add({ date:delivery.usedAt || delivery.generatedAt || delivery.date, module:'Manufacturing Delivery', action:'Single-use delivery code accessed', actor:delivery.accessedBy || 'Warehouse Team Leader', role:'Warehouse Team Leader', entity:delivery.code, project:delivery.project, po:delivery.po, pns, mfgCode:delivery.code, details:`Delivery code used successfully. Receiver selection and document generation were unlocked.`, evidence:'Code access audit', result:'Used' });
        if (delivery.documentGeneratedAt) add({ date:delivery.documentGeneratedAt, module:'Manufacturing Document', action:'Delivery PDF generated', actor:delivery.documentGeneratedBy || 'Warehouse Team Leader', role:'Warehouse Team Leader', entity:delivery.code, project:delivery.project, po:delivery.po, pns, mfgCode:delivery.code, details:`Formal warehouse-to-manufacturing document generated for ${delivery.receiver || 'the selected receiver'}.`, evidence:delivery.documentFileName || `warehouse-to-manufacturing_${delivery.code}.pdf`, result:'Generated' });
        mfgDeliveryPnQuantities(delivery).forEach(line => {
          if (line.productionCompletedAt) add({ date:line.productionCompletedAt, module:'Production', action:'Production quantity completed', actor:line.productionCompletedBy || 'Production & Packing Coordinator', role:'Production & Packing Coordinator', entity:`${delivery.code} · ${line.fgpn}`, project:delivery.project, po:delivery.po, pn:line.fgpn, pns:[line.fgpn], mfgCode:delivery.code, details:`${Number(line.producedQty || line.qty).toLocaleString()} units marked Done.`, evidence:'Coordinator production confirmation', result:'Done' });
          if (line.packagedAt) add({ date:line.packagedAt, module:'Packaging', action:'Quantity packaged', actor:line.packagedBy || 'Production & Packing Coordinator', role:'Production & Packing Coordinator', entity:`${delivery.code} · ${line.fgpn}`, project:delivery.project, po:delivery.po, pn:line.fgpn, pns:[line.fgpn], mfgCode:delivery.code, details:`${Number(line.packagedQty || line.qty).toLocaleString()} units marked Packaged.`, evidence:'Coordinator packaging confirmation', result:'Packaged' });
        });
      });

      CUST_DELIVERIES.forEach(delivery => {
        if (delivery.instructionGenerated || delivery.instructionFile) add({ date:delivery.instructionGeneratedAt || delivery.createdAt || delivery.date, module:'Customer Document', action:'Customer delivery PDF generated', actor:delivery.createdBy || 'Launch Engineer', role:'Launch Engineer', entity:delivery.code, project:delivery.project, po:delivery.po, pns:customerDeliveryItems(delivery).map(item => item.fgpn), custCode:delivery.code, details:`Delivery instruction generated for ${delivery.customer} using ${delivery.method}.`, evidence:delivery.instructionFile || `${delivery.code}_customer_delivery_instruction.pdf`, result:'Generated' });
      });

      stockReceipts.forEach(receipt => add({
        date:receipt.recordedAt || `${receipt.received} 08:30`, module:'Stock Reception', action:'Material reception recorded', actor:receipt.recordedBy || 'Warehouse Personnel', role:'Warehouse Personnel',
        entity:receipt.material, project:'—', po:'—', details:`${Number(receipt.qty || 0).toLocaleString()} units received from ${receipt.supplier}. Destination: ${receipt.destination || 'Warehouse'}.${receipt.reference ? ` Reference: ${receipt.reference}.` : ''}`,
        evidence:receipt.reference || 'Reception register', result:receipt.status
      }));
      transitMaterials.forEach(item => add({
        date:item.createdAt || `${item.arrival} 09:00`, module:'Transit Stock', action:'Inbound material registered', actor:item.createdBy || 'Launch Engineer', role:'Launch user',
        entity:item.code, project:'—', po:'—', details:`${Number(item.qty || 0).toLocaleString()} units from ${item.supplier}; expected ${formatDate(item.arrival)}.${item.notes ? ` Comment: ${item.notes}` : ''}`,
        evidence:item.reference || 'Transit register', result:item.status
      }));
      cutmanImports.forEach(item => add({
        date:item.importedAt || `${item.date} 07:45`, module:'CutMan', action:'CutMan file imported', actor:item.importedBy || 'Warehouse Personnel', role:'Warehouse Personnel',
        entity:item.file, project:'—', po:'—', details:`${item.records} cutting records imported and WIP balances reconciled.`, evidence:item.file, result:item.status
      }));
      stockTransferLogs.forEach(item => add({
        date:String(item.date).includes(' ') ? item.date : `${item.date} 10:15`, module:'WIP Transfer', action:'Material quantity transferred', actor:item.by, role:'Warehouse Personnel',
        entity:item.code, project:'—', po:'—', details:`${Number(item.qty || 0).toLocaleString()} units moved from ${item.from} to ${item.to}.`, evidence:'Stock movement register', result:'Completed'
      }));

      const enriched = raw.map(event => {
        const text = `${event.entity || ''} ${event.details || ''} ${event.evidence || ''}`;
        const mfg = event.mfgCode ? MFG_DELIVERIES.find(item => item.code === event.mfgCode) : MFG_DELIVERIES.find(item => text.includes(item.code));
        const cust = event.custCode ? CUST_DELIVERIES.find(item => item.code === event.custCode) : CUST_DELIVERIES.find(item => text.includes(item.code));
        const poId = event.po && event.po !== '—' ? event.po : (mfg?.po || cust?.po || '');
        const po = POS.find(item => item.id === poId);
        const project = event.project && event.project !== '—' ? event.project : (po?.project || mfg?.project || cust?.project || '—');
        const inferredPns = event.pns?.length ? event.pns : event.pn ? [event.pn] : [
          ...PNS.filter(item => item.po === poId && text.includes(item.pn)).map(item => item.pn),
          ...(mfg ? mfgDeliveryFgpns(mfg) : []), ...(cust ? customerDeliveryItems(cust).map(item => item.fgpn) : [])
        ];
        const normalized = { ...event, user:event.actor || event.user || 'System', actor:event.actor || event.user || 'System', role:event.role || auditActorRole(event.actor || event.user,event.module), project, po:poId || '—', pn:event.pn || inferredPns[0] || '', pns:[...new Set(inferredPns.filter(Boolean))], mfgCode:mfg?.code || event.mfgCode || '', custCode:cust?.code || event.custCode || '' };
        normalized.artifacts = auditEvidenceArtifacts(normalized);
        return normalized;
      });

      const unique = new Map();
      enriched.forEach(event => unique.set(`${event.date}|${event.module}|${event.action}|${event.entity}`,event));
      return [...unique.values()].sort((a,b) => (Date.parse(String(b.date).replace(' ','T')) || 0) - (Date.parse(String(a.date).replace(' ','T')) || 0)).map((event,index) => ({ ...event, id:event.id || `AUD-FULL-${String(index + 1).padStart(5,'0')}` }));
    }

    function auditContextEvents(context={}) {
      return completeAuditEvents().filter(event => {
        if (context.project && event.project !== context.project) return false;
        if (context.po && event.po !== context.po) return false;
        if (context.pn) {
          const traceKey = String(context.pn).match(/(\d+)$/)?.[1] || String(context.pn);
          const pnMatch = event.pns.some(value => value === context.pn || (String(value).match(/(\d+)$/)?.[1] || String(value)) === traceKey);
          if (!pnMatch && event.pn !== context.pn && event.entity !== context.pn) return false;
        }
        if (context.mfgCode && event.mfgCode !== context.mfgCode) return false;
        if (context.custCode && event.custCode !== context.custCode) return false;
        return true;
      });
    }

    function openAuditEvidence(eventId,index=0) {
      const event = completeAuditEvents().find(item => item.id === eventId);
      const artifact = event?.artifacts?.[index];
      if (!event || !artifact) return;
      if (artifact.action === 'po-pdf') return downloadOriginalPoPdf(artifact.ref || event.po);
      if (artifact.action === 'po-excel') return downloadPoExtractionExcel(artifact.ref || event.po);
      if (artifact.action === 'mfg-pdf') return mfgRedownloadDeliveryPdf(artifact.ref || event.mfgCode);
      if (artifact.action === 'cust-pdf') return printCustomerDeliveryInstruction(artifact.ref || event.custCode);
      openModal(artifact.type,`${artifact.name} is retained with audit event ${event.id}. In production this action opens the immutable stored file.`);
    }

    function auditArtifactButtons(event) {
      if (!event.artifacts?.length) return `<span class="audit-no-proof">No file attached</span>`;
      return `<div class="audit-proof-list">${event.artifacts.map((artifact,index) => `<button class="audit-proof" onclick="stop(event);openAuditEvidence('${event.id}',${index})">${icon(artifact.type === 'Excel' || artifact.type === 'Extracted Excel' ? 'download' : 'doc','')}<span><strong>${poEsc(artifact.name)}</strong><small>${artifact.type}</small></span></button>`).join('')}</div>`;
    }

    function traceabilityTimeline(events) {
      if (!events.length) return emptyStateBlock('No history recorded','The first action on this record will appear here.',null);
      return `<div class="trace-timeline">${events.map(event => `<article class="trace-event">
        <div class="trace-rail"><span class="trace-dot"></span></div>
        <div class="trace-event-body">
          <div class="trace-event-top"><div><span class="trace-module">${poEsc(event.module)}</span><h4>${poEsc(event.action)}</h4></div><time>${poEsc(event.date)}</time></div>
          <div class="trace-actor"><span class="trace-avatar">${poEsc(String(event.actor).split(/\s+/).map(part => part[0]).join('').slice(0,2).toUpperCase())}</span><div><strong>${poEsc(event.actor)}</strong><span>${poEsc(event.role)}</span></div>${statusBadge(poEsc(event.result || 'Recorded'),['Confirmed','Completed','Delivered','Validated','Generated','Successful','Done','Packaged'].includes(event.result) ? 'success' : event.result === 'Failed' ? 'danger' : 'neutral')}</div>
          <p class="trace-details">${poEsc(event.details)}</p>
          <div class="trace-context"><span>${icon('projects','')}${poEsc(event.project || '—')}</span>${event.po && event.po !== '—' ? `<span>${icon('po','')}${poEsc(event.po)}</span>` : ''}${event.pns?.slice(0,4).map(pn => `<span>${icon('bom','')}${poEsc(pn)}</span>`).join('') || ''}${event.mfgCode ? `<span>${icon('truck','')}${poEsc(event.mfgCode)}</span>` : ''}${event.custCode ? `<span>${icon('truck','')}${poEsc(event.custCode)}</span>` : ''}</div>
          ${auditArtifactButtons(event)}
        </div>
      </article>`).join('')}</div>`;
    }

    function traceabilityWorkspace(events,title,tableId='traceabilityHistoryTable',extraActions='') {
      const actors = new Set(events.map(event => event.actor)).size;
      const proofs = events.reduce((sum,event) => sum + (event.artifacts?.length || 0),0);
      const modules = new Set(events.map(event => event.module)).size;
      return `<section class="trace-shell">
        <div class="trace-header"><div><span class="trace-eyebrow">Traceability</span><h3>${poEsc(title)}</h3></div><div class="trace-header-actions">${extraActions}${events.length ? tableExportActions(tableId,title) : ''}</div></div>
        <div class="trace-metrics"><div><span>Recorded events</span><strong>${events.length}</strong></div><div><span>People involved</span><strong>${actors}</strong></div><div><span>Evidence files</span><strong>${proofs}</strong></div><div><span>Modules covered</span><strong>${modules}</strong></div></div>
        <div class="trace-content">${traceabilityTimeline(events)}</div>
        <table id="${tableId}" class="trace-export-table"><thead><tr><th>Date</th><th>Module</th><th>Action</th><th>Person</th><th>Role</th><th>Project</th><th>PO</th><th>PN</th><th>Details</th><th>Evidence</th></tr></thead><tbody>${events.map(event => `<tr><td>${poEsc(event.date)}</td><td>${poEsc(event.module)}</td><td>${poEsc(event.action)}</td><td>${poEsc(event.actor)}</td><td>${poEsc(event.role)}</td><td>${poEsc(event.project)}</td><td>${poEsc(event.po)}</td><td>${poEsc(event.pns.join(', '))}</td><td>${poEsc(event.details)}</td><td>${poEsc(event.artifacts.map(item => item.name).join(', '))}</td></tr>`).join('')}</tbody></table>
      </section>`;
    }

    function poStatusHistoryCard(poId) {
      const status = poLifecycle(poId);
      const project = PROJECTS.find(item => item.name === POS.find(po => po.id === poId)?.project);
      const canRollback = currentRole === 'engineer' && canWriteProject(project) && status !== 'Unplanned';
      const unifiedEvents = auditContextEvents({ po:poId });
      const rollback = canRollback ? `<button class="btn sm" onclick="openPoRollback('${poId}')">Rollback with reason</button>` : '';
      return `${poRollback.open && poRollback.po === poId ? `<div class="rollback-panel" style="margin-bottom:14px;"><strong>Backward transition: ${status} → ${PO_STATUS_FLOW[PO_STATUS_FLOW.indexOf(status)-1]}</strong><textarea placeholder="Mandatory written reason…" oninput="poRollback.reason=this.value">${poRollback.reason}</textarea><div style="display:flex;justify-content:flex-end;gap:7px;"><button class="btn sm" onclick="poRollback={open:false,po:'',reason:''};renderPage()">Cancel</button><button class="btn sm primary" onclick="confirmPoRollback('${poId}')">Confirm rollback</button></div></div>` : ''}${traceabilityWorkspace(unifiedEvents,`${poId} complete history`,'poAuditHistoryTable',`${statusBadge(status,productionStatusType(status))}${rollback}`)}`;
    }

    function appendProductionAudit(delivery, line, action, detail) {
      AUDIT_LOGS.unshift({
        id:`AUD-${10300 + AUDIT_LOGS.length}`,
        date:new Date().toISOString().slice(0,16).replace('T',' '),
        user:productionActor(), module:'Purchase Order Status', action,
        entity:`${delivery.code} · ${line.fgpn}`, project:delivery.project, po:delivery.po, details:detail,
      });
    }

    function markProductionDone(code,fgpn) {
      const delivery = MFG_DELIVERIES.find(item => item.code === code);
      const line = delivery && mfgDeliveryPnQuantities(delivery).find(item => item.fgpn === fgpn);
      if (!delivery || !line || currentRole !== 'prod_coord') return;
      mfgNormalizeLaunchLine(delivery,line);
      if (line.status !== 'In Progress') return;
      const before = poLifecycle(delivery.po);
      line.status = 'Done'; line.producedQty = line.qty; line.productionCompletedBy = productionActor(); line.productionCompletedAt = new Date().toISOString().slice(0,16).replace('T',' ');
      syncMfgDeliveryLifecycle(delivery);
      appendProductionAudit(delivery,line,'Production completed',`${line.qty.toLocaleString()} units of ${line.fgpn} in manufacturing launch ${delivery.code} were marked Done by the Production & Packing Coordinator.`);
      const after = poLifecycle(delivery.po);
      recordPoLifecycleChange(delivery.po,before,after,productionActor(),after === 'Done' ? 'Every PO finished-good quantity completed production' : `${line.fgpn} quantity completed for manufacturing launch ${delivery.code}`,'Coordinator production confirmation');
      renderAll();
      openModal('Production confirmed', `${line.fgpn} · ${line.qty.toLocaleString()} units in ${delivery.code} are Done and ready for packaging.`);
    }

    function markPackaged(code,fgpn) {
      const delivery = MFG_DELIVERIES.find(item => item.code === code);
      const line = delivery && mfgDeliveryPnQuantities(delivery).find(item => item.fgpn === fgpn);
      if (!delivery || !line || currentRole !== 'prod_coord') return;
      mfgNormalizeLaunchLine(delivery,line);
      if (line.status !== 'Done') return;
      const before = poLifecycle(delivery.po);
      line.status = 'Packaged'; line.packagedQty = line.qty; line.packagedBy = productionActor(); line.packagedAt = new Date().toISOString().slice(0,16).replace('T',' ');
      syncMfgDeliveryLifecycle(delivery);
      appendProductionAudit(delivery,line,'Packaging completed',`${line.qty.toLocaleString()} units of ${line.fgpn} in manufacturing launch ${delivery.code} were marked Packaged by the Production & Packing Coordinator.`);
      const after = poLifecycle(delivery.po);
      recordPoLifecycleChange(delivery.po,before,after,productionActor(),after === 'Packaged' ? 'Every PO finished-good quantity was packaged' : `${line.fgpn} quantity packaged for manufacturing launch ${delivery.code}`,'Coordinator packaging confirmation');
      renderAll();
      openModal('Packaging confirmed', `${line.fgpn} · ${line.qty.toLocaleString()} units in ${delivery.code} are now available for customer delivery.`);
    }

    function setProductionStatusFilter(value) { productionStatusFilter = value; renderPage(); }

    function productionActionHtml(delivery,line) {
      if (currentRole === 'prod_coord' && line.status === 'In Progress') return `<button class="btn sm primary" onclick="markProductionDone('${delivery.code}','${line.fgpn}')">${icon('check','')} Mark Done</button>`;
      if (currentRole === 'prod_coord' && line.status === 'Done') return `<button class="btn sm primary" onclick="markPackaged('${delivery.code}','${line.fgpn}')">${icon('PackageCheck','')} Mark Packed</button>`;
      if (['engineer','manager'].includes(currentRole) && line.status === 'Packaged') return `<button class="btn sm" onclick="startProjectCustomerDelivery('${delivery.po}','${line.fgpn}','po')">Create Customer Delivery</button>`;
      return `<span class="owner-chip">${line.status === 'Unplanned' ? 'Waiting for signed manufacturing reception' : PO_STATUS_OWNER[line.status]}</span>`;
    }

    function productionQueueHtml(deliveries) {
      if (!deliveries.length) return emptyStateBlock('Queue is clear','No manufacturing launches match this status.',null);
      return `<div class="production-launch-list">${deliveries.map(delivery => {
        const allLines = mfgDeliveryPnQuantities(delivery).map(line => mfgNormalizeLaunchLine(delivery,line));
        const lines = productionStatusFilter === 'All' ? allLines : allLines.filter(line => line.status === productionStatusFilter);
        const total = allLines.reduce((sum,line) => sum + line.qty,0);
        return `<section class="production-launch-card"><div class="production-launch-head"><div><span class="production-launch-code">${delivery.code}</span><h3>${delivery.project} · ${delivery.po}</h3><p>${total.toLocaleString()} units · ${allLines.length} PN line${allLines.length === 1 ? '' : 's'} · Receiver: ${delivery.receiver || 'Not assigned'}</p></div><div>${statusBadge(syncMfgDeliveryLifecycle(delivery),productionStatusType(delivery.lifecycleStatus))}<button class="btn sm" onclick="openMfgDelivery('${delivery.code}')">View Launch</button></div></div><div class="production-line-list">${lines.map(line => {
          const progress = ({Unplanned:0,'In Progress':35,Done:70,Packaged:90,Delivered:100})[line.status] || 0;
          return `<div class="production-line-row"><div class="production-line-main"><strong class="mono">${line.fgpn}</strong><span>${line.qty.toLocaleString()} units in this launch</span></div><div class="production-line-stage">${statusBadge(line.status,productionStatusType(line.status))}<div class="progress-track"><div class="progress-fill" style="width:${progress}%;"></div></div></div><div class="production-line-qty"><span>Done</span><strong>${Number(line.producedQty || 0).toLocaleString()} / ${line.qty.toLocaleString()}</strong></div><div class="production-line-qty"><span>Packed</span><strong>${Number(line.packagedQty || 0).toLocaleString()} / ${line.qty.toLocaleString()}</strong></div><div class="production-line-action">${productionActionHtml(delivery,line)}</div></div>`;
        }).join('')}</div></section>`;
      }).join('')}</div>`;
    }

    function pageProductionBoard() {
      const selectable = PO_STATUS_FLOW;
      const rows = MFG_DELIVERIES.filter(delivery => delivery.status !== 'Cancelled' && mfgDeliveryPnQuantities(delivery).some(line => productionStatusFilter === 'All' || mfgNormalizeLaunchLine(delivery,line).status === productionStatusFilter));
      const monitor = ['engineer','manager','plant'].includes(currentRole);
      return `
  <div class="production-flow">
    ${PO_STATUS_FLOW.map((status, i) => {
      const colors = ['#94A3B8','#0B819F','#16844B','#D97706','#16844B'];
      const count=mfgLaunchLines().filter(item => item.line.status === status).length;
      return `<div class="flow-step" style="--step-color:${colors[i]}"><span class="flow-step-count">${count}</span><div class="flow-step-name">${status}</div><div class="flow-step-owner">PN quantity lines</div></div>`;
    }).join('')}
  </div>
  ${monitor ? `<div class="readonly-banner" style="background:var(--primary-light); color:var(--primary-dark); border-color:#BFE3EA;">${icon('view','')} Monitoring view — lifecycle actions stay with the operational owner shown in each stage.</div>` : ''}
  <div class="card">
    <div class="section-title">${currentRole === 'prod_coord' ? 'Manufacturing launch action queue' : 'Manufacturing launch lifecycle'}
      <select class="tt-select" onchange="setProductionStatusFilter(this.value)"><option value="All">All allowed statuses</option>${selectable.map(s=>`<option value="${s}" ${productionStatusFilter===s?'selected':''}>${s}</option>`).join('')}</select>
    </div>
    ${productionQueueHtml(rows)}
  </div>`;
    }

    /* ============ PO LIST / WORKSPACE ============ */
    function setPoSearch(v) { poFilters.search = v; poPage = 1; renderPage(); }
    function setPoFilter(key, v) { poFilters[key] = v; poPage = 1; renderPage(); }
    function clearPoFilter(key) { poFilters[key] = ''; poPage = 1; renderPage(); }
    function resetPoFilters() { poFilters = { search: '', project: '', customer: '', status: '', version: '', simulation: '' }; poPage = 1; renderPage(); }
    function sortPo(key) { poSort.dir = (poSort.key === key) ? -poSort.dir : 1; poSort.key = key; renderPage(); }
    function setPoPage(n) { poPage = Math.max(1, n); renderPage(); }

    function togglePoSelect(id) { poSelected.has(id) ? poSelected.delete(id) : poSelected.add(id); renderPage(); }
    function getPoPageRows() {
      let rows = sortRows(filterPOs(), poSort);
      const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
      poPage = Math.min(poPage, totalPages);
      return rows.slice((poPage - 1) * PAGE_SIZE, poPage * PAGE_SIZE);
    }
    function togglePoSelectAll() {
      const rows = getPoPageRows();
      const allSelected = rows.length > 0 && rows.every(r => poSelected.has(r.id));
      if (allSelected) { rows.forEach(r => poSelected.delete(r.id)); } else { rows.forEach(r => poSelected.add(r.id)); }
      renderPage();
    }
    function clearPoSelection() { poSelected.clear(); renderPage(); }
    function bulkPoAction(label) {
      if (label === 'Run Simulation' && poSelected.size > 0) {
        simScope = 'selected';
        simSelectedPOs = new Set(poSelected);
        navigate('sim-launch');
        return;
      }
      openModal(label, `This ${label.toLowerCase()} action would apply to ${poSelected.size} selected purchase order(s).`);
    }

    function filterPOs() {
      const f = poFilters;
      return POS.filter(po => {
        if (f.search && !(`${po.id} ${po.project} ${po.customer}`.toLowerCase().includes(f.search.toLowerCase()))) return false;
        if (f.project && po.project !== f.project) return false;
        if (f.customer && po.customer !== f.customer) return false;
        if (f.status && po.status !== f.status) return false;
        if (f.version && po.version !== f.version) return false;
        if (f.simulation && po.simStatus !== f.simulation) return false;
        return true;
      });
    }

    function poToolbarHtml() {
      const opt = (key, list, placeholder) => `<select class="tt-select" onchange="setPoFilter('${key}', this.value)">
    <option value="">${placeholder}</option>
    ${list.map(v => `<option value="${v}" ${poFilters[key] === v ? 'selected' : ''}>${v}</option>`).join('')}
  </select>`;
      return `<div class="table-toolbar">
    <div class="tt-search">
      ${icon('search', '')}
      <input type="text" placeholder="Search PO, project or customer…" value="${poFilters.search}" oninput="setPoSearch(this.value)"/>
    </div>
    ${opt('project', uniqueValues(POS, 'project'), 'Project')}
    ${opt('customer', uniqueValues(POS, 'customer'), 'Customer')}
    ${opt('status', uniqueValues(POS, 'status'), 'Readiness')}
    ${opt('version', uniqueValues(POS, 'version'), 'Version')}
    ${opt('simulation', uniqueValues(POS, 'simStatus'), 'Simulation')}
    <div class="tt-spacer"></div>
    <div class="tt-icon-btn" title="Refresh" onclick="refreshNotice()">${icon('refresh', '')}</div>
    <div class="col-menu">
      <div class="tt-icon-btn" title="Columns" onclick="event.stopPropagation(); toggleColMenu()">${icon('columns', '')}</div>
      ${colMenuOpen ? columnMenuPanel() : ''}
    </div>
    <div class="tt-icon-btn" title="Export" onclick="exportNotice()">${icon('download', '')}</div>
  </div>`;
    }

    function pagePoList() {
      const rows = sortRows(filterPOs(), poSort);
      const total = rows.length;
      const pageRows = getPoPageRows();

      const stats = [
        { label: 'Ready', value: POS.filter(p => p.status === 'Ready').length, color: 'var(--success)' },
        { label: 'Waiting BOM', value: POS.filter(p => p.status === 'Waiting BOM').length, color: 'var(--warning)' },
        { label: 'Missing Stock', value: POS.filter(p => p.status === 'Missing Stock').length, color: 'var(--danger)' },
        { label: 'In Production', value: POS.filter(po => poLifecycle(po.id) === 'In Progress').length, color: 'var(--primary)' },
      ];

      const chips = filterChips(poFilters, { project: 'Project', customer: 'Customer', status: 'Status', version: 'Version', simulation: 'Simulation' }, 'clearPoFilter', 'resetPoFilters');
      const allSelected = pageRows.length > 0 && pageRows.every(r => poSelected.has(r.id));

      const tableBody = pageRows.length ? `<table>
    <thead><tr>
      <th style="width:34px;"><input type="checkbox" class="head-check" ${allSelected ? 'checked' : ''} onchange="togglePoSelectAll()"/></th>
      ${sortTh('PO Number', 'id', poSort, 'sortPo')}
      ${poColumns.version ? sortTh('Version', 'version', poSort, 'sortPo') : ''}
      <th style="width:78px;">Current</th>
      ${poColumns.pnCount ? sortTh('PN Count', 'pnCount', poSort, 'sortPo') : ''}
      ${poColumns.delivery ? sortTh('Delivery Date', 'delivery', poSort, 'sortPo') : ''}
      ${poColumns.simulation ? `<th>Simulation</th>` : ''}
      ${poColumns.status ? `<th>Readiness</th>` : ''}
      ${poColumns.lifecycle ? `<th>Lifecycle</th>` : ''}
      <th>Actions</th>
    </tr></thead>
    <tbody>${pageRows.map(po => `<tr class="clickable-row" onclick="openPo('${po.id}')">
      <td onclick="stop(event)"><input type="checkbox" class="row-check" ${poSelected.has(po.id) ? 'checked' : ''} onchange="togglePoSelect('${po.id}')"/></td>
      <td class="mono">${po.id}<div style="font-size:11px; color:var(--ink-faint); font-weight:500;">${po.project}</div></td>
      ${poColumns.version ? `<td class="mono">${po.version}</td>` : ''}
      <td style="text-align:center;">${po.version === 'v3' ? statusBadge('Current', 'success') : '<span class="badge neutral">History</span>'}</td>
      ${poColumns.pnCount ? `<td class="mono">${po.pnCount}</td>` : ''}
      ${poColumns.delivery ? `<td>${po.delivery}</td>` : ''}
      ${poColumns.simulation ? `<td>${statusBadge(po.simStatus, po.simType)}</td>` : ''}
      ${poColumns.status ? `<td>${statusBadge(po.status, po.statusType)}</td>` : ''}
      ${poColumns.lifecycle ? `<td>${statusBadge(poLifecycle(po.id), productionStatusType(poLifecycle(po.id)))}</td>` : ''}
      <td>${poActionIcons(po.id)}</td>
    </tr>`).join('')}</tbody>
  </table>` : emptyStateBlock('No Purchase Orders Found', 'Try changing your filters.', 'resetPoFilters');

      return `
  <div class="page-title-row" style="margin-bottom:14px;">
    <div></div>
    ${permBtn('uploadPo', 'Upload Purchase Order', 'upload', "startPoUpload()", 'primary')}
  </div>
  ${statsRow(stats)}
  <div class="card">
    ${poToolbarHtml()}
    ${chips}
    ${poSelected.size > 0 ? `<div class="bulk-bar show">
      ${poSelected.size} selected
      <div class="bulk-actions">
        <button class="btn sm" onclick="bulkPoAction('Export')">Export</button>
        <button class="btn sm" onclick="bulkPoAction('Run Simulation')">Run Simulation</button>
        ${can('deleteRecord') === true ? `<button class="btn sm" style="color:var(--danger); border-color:#FCA5A5;" onclick="bulkPoAction('Delete')">Delete</button>` : ''}
        <button class="btn sm" onclick="clearPoSelection()">Clear</button>
      </div>
    </div>`: ''}
    <div class="table-head-row">${rowCountLabel(total, 'Purchase Order')}</div>
    ${tableBody}
    ${pageRows.length ? paginationBar(total, poPage, PAGE_SIZE, 'setPoPage') : ''}
  </div>`;
    }

    function poBomUploadPanel(poId) {
      if (!poBomUpload.open || poBomUpload.po !== poId) return '';
      return bomImportPanel('po',poId);
    }

    function poVersionRecords(po) {
      if (po.id === 'PO-00045') return PO_VERSION_HISTORY;
      return [{ version:po.version || 'v1', current:true, date:po.date || '—', uploadedBy:poStatusEvents(po.id).slice(-1)[0]?.user || 'System', comment:'Current validated purchase order', status:'Current', file:`${po.id}_${po.version || 'v1'}.pdf` }];
    }
    function poVersionRows(po, version) {
      if (po.id === 'PO-00045' && PO_VERSION_SNAPSHOTS[version]) return PO_VERSION_SNAPSHOTS[version];
      return pnsForPo(po.id).map(item => ({ pn:item.pn, description:item.desc, quantity:item.qty, unit:'PCS', dueDate:po.delivery || '—', customerRef:'—' }));
    }
    function bomVersionRecords(pn) {
      if (pn.pn === 'PN100') return BOM_VERSION_HISTORY;
      return [{ version:pn.version === '—' ? 'v1' : pn.version, current:true, date:pn.bomUpdated === '—' ? '—' : pn.bomUpdated, uploadedBy:'Launch Engineer', comment:'Current validated BOM workbook', status:'Current', file:pn.bomFile === '—' ? `${pn.pn}_BOM_v1.xlsx` : pn.bomFile }];
    }
    function bomVersionRows(pn, version) {
      if (pn.pn === 'PN100' && BOM_VERSION_SNAPSHOTS[version]) return BOM_VERSION_SNAPSHOTS[version];
      return MATERIALS.filter(material => material.pns.includes(pn.pn)).map(material => ({ material:material.code, description:material.desc, materialType:material.type, usageQty:(BOM_USAGE[pn.pn] || {})[material.code] || 1, unit:material.type === 'Wire' || material.type === 'Tube' || material.type === 'Tape' ? 'M' : 'PCS', supplier:material.supplier, revision:'A' }));
    }
    function selectPoVersion(version) { poVersionSelected = version; renderPage(); }
    function selectBomVersion(version) { bomVersionSelected = version; renderPage(); }
    function setPoWorkspaceCompareA(version) { poVersionCompareA = version; renderPage(); }
    function setPoWorkspaceCompareB(version) { poVersionCompareB = version; renderPage(); }
    function setBomWorkspaceCompareA(version) { bomVersionCompareA = version; renderPage(); }
    function setBomWorkspaceCompareB(version) { bomVersionCompareB = version; renderPage(); }

    function poVersionsWorkspace(po, writable) {
      const versions = poVersionRecords(po);
      const current = versions.find(item => item.current) || versions[0];
      if (!versions.some(item => item.version === poVersionSelected)) poVersionSelected = current.version;
      if (!versions.some(item => item.version === poVersionCompareA)) poVersionCompareA = versions[1]?.version || current.version;
      if (!versions.some(item => item.version === poVersionCompareB)) poVersionCompareB = current.version;
      const selected = versions.find(item => item.version === poVersionSelected) || current;
      const rows = poVersionRows(po,selected.version);
      const totalQty = rows.reduce((sum,row) => sum + Number(row.quantity || 0),0);
      const canCompare = versions.length > 1 && poVersionCompareA !== poVersionCompareB;
      return `<div class="version-hub">
        <div class="version-domain-head"><div class="version-domain-title"><div class="version-domain-icon">${icon('FileText','')}</div><div><span>Purchase Order Versions</span><h3>${po.id} document history</h3></div></div><div class="table-heading-actions">${statusBadge(`${versions.length} version${versions.length === 1 ? '' : 's'}`,'info')}${writable ? permBtn('uploadPo','Upload New PO Version','upload',`startPoUpload('${inlineJsValue(po.project)}','${inlineJsValue(po.id)}')`,'primary') : ''}</div></div>
        <div class="version-compare-strip"><div class="version-compare-field"><label>PO version A</label><select onchange="setPoWorkspaceCompareA(this.value)">${versions.map(item => `<option value="${item.version}" ${item.version === poVersionCompareA ? 'selected' : ''}>${item.version} · ${item.date}</option>`).join('')}</select></div><div class="version-compare-arrow">${icon('chevRight','')}</div><div class="version-compare-field"><label>PO version B</label><select onchange="setPoWorkspaceCompareB(this.value)">${versions.map(item => `<option value="${item.version}" ${item.version === poVersionCompareB ? 'selected' : ''}>${item.version}${item.current ? ' · Current' : ''}</option>`).join('')}</select></div><button class="btn primary" onclick="openPoVersionCompare('${po.id}',poVersionCompareA,poVersionCompareB)" ${canCompare ? '' : 'disabled'}>${icon('scale','')} Compare PO Versions</button></div>
        <div class="version-hub-grid"><div class="card version-catalog"><div class="version-catalog-head"><strong>Available PO versions</strong><span>Select a version to inspect its line items.</span></div><div class="version-list">${versions.map(item => `<button class="version-list-item ${item.version === selected.version ? 'active' : ''}" onclick="selectPoVersion('${item.version}')"><span class="version-list-code">${item.version.toUpperCase()}</span><span class="version-list-copy"><strong>${item.file}</strong><span>${item.date} · ${item.uploadedBy}</span></span>${item.current ? statusBadge('Current','success') : ''}</button>`).join('')}</div></div>
        <div class="card version-detail"><div class="version-detail-head"><div><h3>${po.id} · ${selected.version}</h3><p>${selected.comment}</p></div>${selected.current ? statusBadge('Current PO Version','success') : statusBadge('Historical PO Version','neutral')}</div><div class="version-detail-meta"><div><span>Imported</span><strong>${selected.date}</strong></div><div><span>Uploaded by</span><strong>${selected.uploadedBy}</strong></div><div><span>Source document</span><strong>${selected.file}</strong></div><div><span>Total quantity</span><strong>${totalQty.toLocaleString()}</strong></div></div><div class="version-content"><div class="version-content-head"><h4>PO line-item snapshot</h4>${tableExportActions('poSelectedVersionTable',`${po.id} ${selected.version} Line Items`)}</div><div class="table-scroll"><table id="poSelectedVersionTable"><thead><tr><th>Part Number</th><th>Description</th><th>Quantity</th><th>Unit</th><th>Due Date</th><th>Customer Reference</th></tr></thead><tbody>${rows.map(row => `<tr><td class="mono"><strong>${row.pn}</strong></td><td>${row.description}</td><td class="mono">${Number(row.quantity || 0).toLocaleString()}</td><td>${row.unit}</td><td class="mono">${row.dueDate}</td><td class="mono">${row.customerRef}</td></tr>`).join('')}</tbody></table></div></div></div></div>
      </div>`;
    }

    function bomVersionsWorkspace(pn, writable) {
      const versions = bomVersionRecords(pn);
      const current = versions.find(item => item.current) || versions[0];
      if (!versions.some(item => item.version === bomVersionSelected)) bomVersionSelected = current.version;
      if (!versions.some(item => item.version === bomVersionCompareA)) bomVersionCompareA = versions[1]?.version || current.version;
      if (!versions.some(item => item.version === bomVersionCompareB)) bomVersionCompareB = current.version;
      const selected = versions.find(item => item.version === bomVersionSelected) || current;
      const rows = bomVersionRows(pn,selected.version);
      const canCompare = versions.length > 1 && bomVersionCompareA !== bomVersionCompareB;
      return `<div class="version-hub">
        <div class="version-domain-head"><div class="version-domain-title"><div class="version-domain-icon bom">${icon('bom','')}</div><div><span>BOM Versions</span><h3>${pn.pn} material-structure history</h3></div></div><div class="table-heading-actions">${statusBadge(`${versions.length} BOM version${versions.length === 1 ? '' : 's'}`,'purple')}${writable ? permBtn('uploadBom','Upload New BOM Version','upload',`openPnBomUpload('${pn.pn}')`,'primary') : ''}</div></div>
        <div class="version-compare-strip"><div class="version-compare-field"><label>BOM version A</label><select onchange="setBomWorkspaceCompareA(this.value)">${versions.map(item => `<option value="${item.version}" ${item.version === bomVersionCompareA ? 'selected' : ''}>${item.version} · ${item.date}</option>`).join('')}</select></div><div class="version-compare-arrow">${icon('chevRight','')}</div><div class="version-compare-field"><label>BOM version B</label><select onchange="setBomWorkspaceCompareB(this.value)">${versions.map(item => `<option value="${item.version}" ${item.version === bomVersionCompareB ? 'selected' : ''}>${item.version}${item.current ? ' · Current' : ''}</option>`).join('')}</select></div><button class="btn primary" onclick="openBomVersionCompare('${pn.pn}',bomVersionCompareA,bomVersionCompareB)" ${canCompare ? '' : 'disabled'}>${icon('scale','')} Compare BOM Versions</button></div>
        <div class="version-hub-grid"><div class="card version-catalog"><div class="version-catalog-head"><strong>Available BOM versions</strong><span>Select a workbook version to inspect its materials.</span></div><div class="version-list">${versions.map(item => `<button class="version-list-item bom ${item.version === selected.version ? 'active' : ''}" onclick="selectBomVersion('${item.version}')"><span class="version-list-code">${item.version.toUpperCase()}</span><span class="version-list-copy"><strong>${item.file}</strong><span>${item.date} · ${item.uploadedBy}</span></span>${item.current ? statusBadge('Current','success') : ''}</button>`).join('')}</div></div>
        <div class="card version-detail"><div class="version-detail-head"><div><h3>${pn.pn} BOM · ${selected.version}</h3><p>${selected.comment}</p></div>${selected.current ? statusBadge('Current BOM Version','success') : statusBadge('Historical BOM Version','neutral')}</div><div class="version-detail-meta"><div><span>Uploaded</span><strong>${selected.date}</strong></div><div><span>Uploaded by</span><strong>${selected.uploadedBy}</strong></div><div><span>Source workbook</span><strong>${selected.file}</strong></div><div><span>Material rows</span><strong>${rows.length}</strong></div></div><div class="version-content"><div class="version-content-head"><h4>BOM material snapshot</h4>${tableExportActions('bomSelectedVersionTable',`${pn.pn} BOM ${selected.version}`)}</div><div class="table-scroll"><table id="bomSelectedVersionTable"><thead><tr><th>Material PN</th><th>Description</th><th>Type</th><th>Usage Qty</th><th>Unit</th><th>Supplier</th><th>Revision</th></tr></thead><tbody>${rows.map(row => `<tr><td class="mono"><strong>${row.material}</strong></td><td>${row.description}</td><td>${row.materialType}</td><td class="mono">${row.usageQty}</td><td>${row.unit}</td><td>${row.supplier}</td><td class="mono">${row.revision}</td></tr>`).join('')}</tbody></table></div></div></div></div>
      </div>`;
    }

    function pagePoWorkspace() {
      const poId = openContext.po;
      const po = POS.find(p => p.id === poId) || POS[0];
      const poPns = pnsForPo(po.id);
      const bomReadiness = poBomReadiness(po.id);
      const currentPoBomFile = bomReadiness.poBomFile;
      const poProject = PROJECTS.find(project => project.name === po.project) || PROJECTS[0];
      const writable = canWriteProject(poProject);
      const tabAliases = { Information:'Overview', PN:'Part Numbers', Versions:'PO Versions', 'Manufacturing Delivery':'Manufacturing', 'Delivery History':'History' };
      const tab = tabAliases[activeTab.po] || activeTab.po || 'Overview';
      if (activeTab.po !== tab) activeTab.po = tab;
      let tabContent = '';

      if (tab === 'Overview') {
        const status = poLifecycle(poId);
        const lastStatusEvent = poStatusEvents(poId)[0];
        const totals = poQuantitySummary(poId);
        tabContent = `<div class="po-information-status">
      <div class="po-current-status-card"><span>Current PO status</span><strong>${status}</strong><small>${PO_STATUS_TRIGGER[status]}${lastStatusEvent ? ` · ${lastStatusEvent.user} · ${lastStatusEvent.date}` : ''}</small><div style="margin-top:15px;">${statusBadge(status,productionStatusType(status))}</div></div>
      <div class="po-information-grid">
        <div class="po-information-item"><span>Customer</span><strong>${po.customer}</strong></div>
        <div class="po-information-item"><span>Current version</span><strong class="mono">${po.version}</strong></div>
        <div class="po-information-item"><span>Order date</span><strong class="mono">${po.date || '—'}</strong></div>
        <div class="po-information-item"><span>Delivery date</span><strong class="mono">${po.delivery || '—'}</strong></div>
        <div class="po-information-item"><span>Part numbers</span><strong>${poPns.length}</strong></div>
        <div class="po-information-item"><span>Remaining quantity</span><strong>${totals.remaining.toLocaleString()}</strong></div>
      </div>
    </div>`;
      } else if (tab === 'Part Numbers') {
        tabContent = `<div class="card">
      <div class="section-title"><span>Part Numbers</span><div class="table-heading-actions"><span class="hint">${poPns.length} linked to ${poId}</span>${poPns.length ? tableExportActions('poPartNumbersTable',`${poId} Part Numbers`) : ''}</div></div>
      ${poPns.length ? `<div class="table-scroll"><table id="poPartNumbersTable"><thead><tr><th>Part Number</th><th>Description</th><th>Quantity</th><th>BOM Version</th><th>BOM Status</th><th>Production Status</th><th data-export="false">Action</th></tr></thead><tbody>${poPns.map(p => `<tr class="clickable-row" onclick="openPn('${p.pn}')"><td class="mono"><strong>${p.pn}</strong></td><td>${p.desc}</td><td class="mono">${Number(p.qty || 0).toLocaleString()}</td><td class="mono">${p.version}</td><td>${statusBadge(p.bom === 'Uploaded' ? 'Validated' : 'Required',p.bom === 'Uploaded' ? 'success' : 'warning')}</td><td>${statusBadge(p.status,p.statusType)}</td><td><div class="po-simple-actions"><button class="btn sm" onclick="stop(event);openPn('${p.pn}')">View</button>${writable && p.bom !== 'Uploaded' ? permBtn('uploadBom','Upload BOM','upload',`stop(event);openPnBomUpload('${p.pn}')`,'sm') : ''}</div></td></tr>`).join('')}</tbody></table></div>` : emptyStateBlock('No part numbers', 'This purchase order does not contain any part numbers.', null)}
    </div>`;
      } else if (tab === 'PO BOM') {
        if (poBomUpload.open && poBomUpload.po === po.id && bomImport.open && bomImport.level === 'po') {
          tabContent = poBomFocusedImportPanel(po.id);
        } else {
          const record = latestBomImportRecord('po',po.id);
          const bomFile = record?.file || currentPoBomFile?.file || '';
          const bomVersion = record?.version || currentPoBomFile?.version || '—';
          const bomRows = record?.rows?.length ? record.rows : currentPoBomFile ? poBomPreviewRows(po.id).map(row => ({ ...row, description:row.desc, materialType:row.type, usageQty:row.usage, revision:'A' })) : [];
          const materialCount = record?.materialCount || currentPoBomFile?.materialCount || new Set(bomRows.map(row => row.material)).size;
          const fgpnCount = record?.fgpnCount || currentPoBomFile?.fgpnCount || new Set(bomRows.map(row => row.fgpn)).size;
          tabContent = `<div class="card project-bom-clean">
        <div class="project-bom-clean-head"><div class="project-bom-clean-title"><div class="project-bom-file-icon">${icon('FileText','')}</div><div><h3>PO BOM</h3><p>${bomFile ? `${poEsc(bomFile)} · ${poId}` : `${poId} · no workbook uploaded`}</p></div></div><div class="project-bom-clean-actions">${statusBadge(bomFile ? 'Validated' : 'Required',bomFile ? 'success' : 'warning')}${bomFile ? `${tableExportActions('poBomMaterialsTable',`${poId} PO BOM`)}${writable ? permBtn('uploadBom','Upload New Version','upload',`openPoBomUploader('${po.id}')`,'primary') : ''}` : ''}</div></div>
        ${bomFile ? `<div class="project-bom-meta"><div class="project-bom-meta-item"><span>Version</span><strong>${bomVersion}</strong></div><div class="project-bom-meta-item"><span>Finished Good PNs</span><strong>${fgpnCount}</strong></div><div class="project-bom-meta-item"><span>Unique Materials</span><strong>${materialCount}</strong></div><div class="project-bom-meta-item"><span>Material Rows</span><strong>${bomRows.length || currentPoBomFile?.materialCount || 0}</strong></div></div><div class="project-bom-table-wrap"><h4>PO BOM Materials</h4><div class="table-scroll"><table id="poBomMaterialsTable" class="project-bom-table"><thead><tr><th>Finished Good PN</th><th>Material PN</th><th>Description</th><th>Type</th><th>Usage Qty</th><th>Unit</th><th>Supplier</th><th>Revision</th></tr></thead><tbody>${bomRows.map(row => `<tr><td class="mono">${row.fgpn}</td><td class="mono">${row.material}</td><td>${row.description || row.desc || '—'}</td><td>${row.materialType || row.type || '—'}</td><td class="mono">${row.usageQty ?? row.usage ?? '—'}</td><td>${row.unit || '—'}</td><td>${row.supplier || '—'}</td><td class="mono">${row.revision || 'A'}</td></tr>`).join('')}</tbody></table></div></div>` : `<div class="po-workspace-empty">${icon('bom','')}<strong>No PO BOM uploaded</strong><span>Upload one Excel workbook containing the Finished Good Part Numbers and their material lines.</span>${writable ? permBtn('uploadBom','Upload PO BOM','upload',`openPoBomUploader('${po.id}')`,'primary') : ''}</div>`}
      </div>`;
        }
      } else if (tab === 'PO Versions') {
        tabContent = poVersionsWorkspace(po,writable);
      } else if (tab === 'Manufacturing') {
        const canCreate = writable && ['Unplanned','In Progress'].includes(poLifecycle(poId));
        const poMfgRows = MFG_DELIVERIES.filter(delivery => delivery.po === poId);
        tabContent = `<div class="card project-mfg-simple"><div class="project-mfg-simple-head"><div><h3>Manufacturing delivery</h3><p>Select finished-good PNs and partial launch quantities, then set the material transfer.</p></div></div><div class="project-mfg-simple-controls"><div><label class="sim-field-label">Current purchase order</label><div class="po-workspace-context"><strong class="mono">${poId}</strong><span>${mfgEligibleOrders(poId).length} eligible PNs</span></div></div>${canCreate ? permBtn('createMfgDelivery','Select PNs & Launch Qty','plus',`startProjectMfgDelivery('${poId}')`,'primary') : `<button class="btn primary" disabled>No Eligible PNs</button>`}</div></div><div class="card"><div class="section-title"><span>Manufacturing Deliveries</span>${poMfgRows.length ? tableExportActions('poMfgDeliveriesTable',`${poId} Manufacturing Deliveries`) : ''}</div>${mfgTable(poMfgRows,'poMfgDeliveriesTable',true)}</div>`;
      } else if (tab === 'Customer Delivery') {
        const canCreate = writable && customerEligibleOrders(poId).length > 0;
        const poCustomerRows = CUST_DELIVERIES.filter(delivery => delivery.po === poId);
        tabContent = `<div class="card project-mfg-simple"><div class="project-mfg-simple-head"><div><h3>Customer delivery</h3><p>Create one full or partial delivery from one, several, or all packaged PN quantities.</p></div></div><div class="project-mfg-simple-controls"><div><label class="sim-field-label">Current purchase order</label><div class="po-workspace-context"><strong class="mono">${poId}</strong><span>${customerEligibleOrders(poId).length} packaged PNs · ${po.customer}</span></div></div>${canCreate ? permBtn('createCustDelivery','Select PNs & Quantities','plus',`startProjectCustomerDelivery('${poId}','','po')`,'primary') : `<button class="btn primary" disabled>No Packaged Quantity</button>`}</div></div><div class="card"><div class="section-title"><span>Customer Deliveries</span>${poCustomerRows.length ? tableExportActions('poCustomerDeliveriesTable',`${poId} Customer Deliveries`) : ''}</div>${custTable(poCustomerRows,'poCustomerDeliveriesTable',true)}</div>`;
      } else if (tab === 'Finance') {
        const financeAccess = can('viewFinance');
        tabContent = financeAccess === false ? `<div class="card">${emptyStateBlock('No finance access','Your role does not have access to this purchase order financial value.',null)}</div>` : poFinanceWorkspace(po);
      } else if (tab === 'History') {
        tabContent = poStatusHistoryCard(poId);
      }

      return `
  <div class="workspace-layout">
    ${projectExplorer('po', poId)}
    <div>
      <div class="workspace-header">
        <div class="ws-header-grid" style="width:100%;">
          <div>
            <span class="ws-id">${poId}</span>
            <div class="ws-title">Purchase Order — ${po.project}</div>
            <div class="ws-meta">
              <div class="ws-meta-item"><span class="l">Customer</span><span class="v">${po.customer}</span></div>
              <div class="ws-meta-item"><span class="l">Version</span><span class="v mono">${po.version}</span></div>
              <div class="ws-meta-item"><span class="l">Delivery</span><span class="v">${po.delivery}</span></div>
              <div class="ws-meta-item"><span class="l">Current Status</span>${statusBadge(poLifecycle(poId), productionStatusType(poLifecycle(poId)))}</div>
            </div>
          </div>
          <div class="ws-actions-row">
            ${poDocumentDownloadButtons(poId,true)}
            ${writable ? permBtn('runSimulation','Run Simulation',null,`simScope='single';simSinglePO='${poId}';simProject='${po.project}';navigate('sim-launch')`,'primary') : ''}
            ${writable ? permBtn('uploadPo','Upload New Version','upload',`startPoUpload('${inlineJsValue(po.project)}','${inlineJsValue(po.id)}')`) : ''}
          </div>
        </div>
      </div>
      ${workspaceTabs(['Overview','Part Numbers','PO BOM','PO Versions','Manufacturing','Customer Delivery','Finance','History'],tab,'showPoTab')}
      ${tabContent}
    </div>
  </div>`;
    }

    /* ============ PN WORKSPACE ============ */
    function pagePnWorkspace() {
      const pnId = openContext.pn;
      const pn = PNS.find(p => p.pn === pnId) || PNS[0];
      const parentPo = POS.find(po => po.id === pn.po) || POS[0];
      const pnProject = PROJECTS.find(project => project.name === pn.project) || PROJECTS[0];
      const writable = canWriteProject(pnProject);
      const pnMaterials = MATERIALS.filter(material => material.pns.includes(pn.pn));
      const tab = activeTab.pn;
      let tabContent = '';

      if (tab === 'Overview') {
        tabContent = `<div class="grid g2" style="grid-template-columns:1.1fr .9fr;">
          <div class="card"><div class="section-title">Part Number information</div>
            <div class="detail-grid">
              <div><span>Project</span><strong>${pn.project}</strong></div><div><span>Purchase Order</span><strong class="mono">${pn.po}</strong></div>
              <div><span>Ordered Quantity</span><strong class="mono">${pn.qty.toLocaleString()}</strong></div><div><span>Operational Status</span>${statusBadge(pn.status,pn.statusType)}</div>
            </div>
          </div>
          <div class="card"><div class="section-title">Mandatory BOM</div>
            <div class="pn-bom-state ${pn.bom === 'Uploaded' ? 'ready' : 'missing'}">${icon(pn.bom === 'Uploaded' ? 'check' : 'audit','')}<div><strong>${pn.bom === 'Uploaded' ? 'Validated BOM available' : 'BOM mapping required'}</strong><span>${pn.bom === 'Uploaded' ? `${pn.bomFile} · ${pn.version} · ${pn.bomUpdated}` : 'Provide an individual PN BOM or upload the parent PO BOM workbook containing this FGPN.'}</span></div></div>
            ${pn.bom !== 'Uploaded' && writable ? `<div class="attention-actions">${permBtn('uploadBom','Upload PN BOM','upload',`openPnBomUpload('${pn.pn}')`,'primary')}${permBtn('uploadBom','Upload Parent PO BOM','bom',`openPoBomUploader('${pn.po}')`)}</div>` : ''}
          </div>
        </div>`;
      } else if (tab === 'BOM') {
        tabContent = pn.bom === 'Uploaded' ? `${bomImportedDashboard('pn',pnId)}<div class="grid g2" style="grid-template-columns:1fr 1fr;">
      <div class="card">
        <div class="section-title">Authoritative BOM Structure <span class="hint">${pn.bomFile}</span></div>
        ${miniTree(pnId, pn.desc)}
      </div>
      <div class="card">
        <div class="section-title"><span>Materials used by ${pnId}</span>${pnMaterials.length ? tableExportActions('pnBomMaterialsTable',`${pnId} PN BOM Materials`) : ''}</div>
        ${pnMaterials.length ? bomMaterialTable(['code', 'desc', 'required', 'missing'], pnMaterials,'pnBomMaterialsTable') : emptyStateBlock('No preview rows in this sample', 'The BOM file is validated; material lines will appear here after parsing.', null)}
      </div>
    </div>` : `<div class="card bom-required-empty">
      ${icon('bom','')}
      <div><strong>No BOM mapping is attached to ${pn.pn}</strong><span>This FGPN needs material rows containing Material PN, usage quantity and unit. Supply them through an individual PN BOM or through the parent PO BOM workbook.</span></div>
      ${writable ? `<div class="attention-actions">${permBtn('uploadBom','Upload PN BOM','upload',`openPnBomUpload('${pn.pn}')`,'primary')}${permBtn('uploadBom','Upload Parent PO BOM','bom',`openPoBomUploader('${pn.po}')`)}</div>` : statusBadge('Read-only · BOM required','warning')}
    </div>`;
      } else if (tab === 'Materials') {
        tabContent = `<div class="card"><div class="section-title"><span>Materials</span>${tableExportActions('pnMaterialsTable',`${pnId} Materials`)}</div>${bomMaterialTable(null,null,'pnMaterialsTable')}</div>`;
      } else if (tab === 'BOM Versions') {
        tabContent = pn.bom === 'Uploaded' ? bomVersionsWorkspace(pn,writable) : `<div class="card">${emptyStateBlock('No BOM versions', 'Upload the first validated PN BOM to start version history.', null)}</div>`;
      } else if (tab === 'History') {
        tabContent = traceabilityWorkspace(auditContextEvents({ pn:pnId }),`${pnId} part-number history`,'pnCompleteHistoryTable');
      } else if (tab === 'Simulation') {
        tabContent = `<div class="card">
      <div class="section-title">Simulation</div>
      <p style="font-size:12.5px; color:var(--ink-soft); margin-bottom:12px;">Run a launch simulation scoped to the parent PO of ${pnId}.</p>
      ${permBtn('runSimulation', 'Run Simulation', null, `simScope='single'; simSinglePO='${openContext.po}'; navigate('sim-launch')`, 'primary')}
    </div>`;
      }

      return `
  <div class="workspace-layout">
    ${projectExplorer('pn', pnId)}
    <div>
      <div class="workspace-header">
        <div class="ws-header-grid" style="width:100%;">
          <div>
            <span class="ws-id">${pnId}</span>
            <div class="ws-title">${pn.desc}</div>
            <div class="ws-meta">
              <div class="ws-meta-item"><span class="l">Quantity</span><span class="v mono">${pn.qty.toLocaleString()}</span></div>
              <div class="ws-meta-item"><span class="l">Project</span><span class="v">${pn.project}</span></div>
              <div class="ws-meta-item"><span class="l">Parent PO</span><span class="v mono">${parentPo.id}</span></div>
              <div class="ws-meta-item"><span class="l">Current BOM Version</span><span class="v mono">${pn.version}</span></div>
              <div class="ws-meta-item"><span class="l">BOM Requirement</span>${statusBadge(pn.bom === 'Uploaded' ? 'Validated' : 'Required', pn.bom === 'Uploaded' ? 'success' : 'warning')}</div>
              <div class="ws-meta-item"><span class="l">Status</span>${statusBadge(pn.status, pn.statusType)}</div>
            </div>
          </div>
          <div class="ws-actions-row">
            ${writable ? permBtn('uploadBom', 'Upload BOM', 'upload', `openPnBomUpload('${pnId}')`) : ''}
            ${pn.bom === 'Uploaded' ? `<button class="btn" onclick="showPnTab('BOM Versions')">${icon('history','')} BOM Versions</button>` : ''}
            ${writable ? permBtn('runSimulation', 'Run Simulation', null, `simScope='single'; simSinglePO='${openContext.po}'; navigate('sim-launch')`, 'primary') : ''}
          </div>
        </div>
      </div>
      ${workspaceTabs(['Overview', 'BOM', 'BOM Versions', 'Simulation', 'History'], tab, 'showPnTab')}
      ${tabContent}
    </div>
  </div>`;
    }

    function miniTree(pnId, desc) {
      return `<div class="bom-tree">
    <div class="tree-row"><span class="tw open">${chevTree}</span><span class="t-label">${pnId}</span><span class="t-meta">${desc}</span></div>
    <div class="tree-children open">
      ${MATERIALS.slice(0, 3).map(m => `<div class="tree-row" onclick="navigate('material-detail')"><span style="width:14px"></span><span class="t-label mono" style="font-size:12px;">${m.code}</span><span class="t-meta">${m.desc}</span></div>`).join('')}
    </div>
  </div>`;
    }

    /* ============ BOM HIERARCHY TREE ============ */
    function pageBomTree() {
      const project = projectForContext();
      const projectPos = posForProject(project.name);
      return `
  <div class="card">
    <div class="section-title">Hierarchy <span class="hint">Project → PO BOM → FGPN → Materials</span></div>
    <div class="aggregate-explainer compact">${icon('bom','')}<div><strong>Traceable BOM lineage</strong><span>Each material row is traced to its Finished Good Part Number and the validated PO BOM or individual PN BOM version that supplied it.</span></div></div>
    <div class="bom-tree">
      <div class="tree-row" onclick="toggleTree('proj')"><span class="tw ${treeOpen.proj ? 'open' : ''}">${chevTree}</span><span class="t-label">${project.name}</span><span class="t-meta">Project · ${projectBomReadiness(project.name).percent}% PN BOM coverage</span></div>
      <div class="tree-children ${treeOpen.proj ? 'open' : ''}">
        ${projectPos.map((po, poIndex) => { const poKey = 'po-' + po.id; const ready = poBomReadiness(po.id); return `
          <div class="tree-row" onclick="toggleTree('${poKey}')"><span class="tw ${treeOpen[poKey] ? 'open' : ''}">${chevTree}</span><span class="t-label mono">${po.id}</span><span class="t-meta">PO BOM (uploaded or generated) · ${ready.ready ? 'Ready' : ready.missing.length + ' FGPN mapping missing'}</span></div>
          <div class="tree-children ${treeOpen[poKey] ? 'open' : ''}">
            ${pnsForPo(po.id).map((p, pnIndex) => { const pnKey = `pn-${poIndex}-${pnIndex}`; const linkedMaterials = MATERIALS.filter(m => m.pns.includes(p.pn)); return `
              <div class="tree-row" onclick="toggleTree('${pnKey}')"><span class="tw ${treeOpen[pnKey] ? 'open' : ''}">${chevTree}</span><span class="t-label mono">${p.pn}</span><span class="t-meta">${p.desc} · ${statusBadge(p.bom === 'Uploaded' ? p.version : 'BOM required', p.bom === 'Uploaded' ? 'success' : 'warning')}</span></div>
              <div class="tree-children ${treeOpen[pnKey] ? 'open' : ''}">
                ${p.bom !== 'Uploaded' ? `<div class="tree-row"><span style="width:14px"></span><span class="t-meta">Upload a PN BOM or a PO BOM containing this FGPN to reveal material lines.</span></div>` : (linkedMaterials.length ? linkedMaterials : MATERIALS.slice(0,2)).map(m => `<div class="tree-row" onclick="navigate('material-detail')"><span style="width:14px"></span><span class="t-label mono" style="font-size:12px;">${m.code}</span><span class="t-meta">${m.desc} · required ${m.required}</span></div>`).join('')}
              </div>`; }).join('')}
          </div>`; }).join('')}
      </div>
    </div>
  </div>`;
    }
    function toggleTree(key) { treeOpen[key] = !treeOpen[key]; renderPage(); }

    function pageBomPo() {
      const availablePos = POS.filter(po => visibleProjects().some(project => project.name === po.project));
      const selectedPo = availablePos.find(po => po.id === openContext.po) || availablePos[0] || POS[0];
      openContext.po = selectedPo.id; openContext.project = selectedPo.project;
      return `
  <div class="card" style="margin-bottom:16px;">
    <div class="section-title">Select PO</div>
    <div style="display:flex; gap:10px; align-items:center;">
      <select onchange="openContext.po=this.value; openContext.project=POS.find(po=>po.id===this.value).project; renderPage()" style="flex:1; padding:8px 10px; border:1px solid var(--border); border-radius:7px; font-size:13px;">
        ${availablePos.map(po => `<option value="${po.id}" ${po.id === selectedPo.id ? 'selected' : ''}>${po.id} — ${po.project}</option>`).join('')}
      </select>
      ${canWriteProject(PROJECTS.find(project => project.name === selectedPo.project)) ? `<button class="btn" onclick="openPoBomUploader('${selectedPo.id}')">${icon('upload','')} Upload PO BOM</button>` : ''}
      <button class="btn primary" onclick="openModal('PO BOM generated', 'A PO BOM version was generated from the validated PN BOM mappings.')">Generate from PN BOMs</button>
    </div>
  </div>
  <div class="card">
    <div class="section-title">PO BOM Preview <span class="hint">Uploaded or generated version</span></div>
    ${bomMaterialTable()}
    <div style="margin-top:14px; display:flex; justify-content:flex-end;"><button class="btn primary">Export</button></div>
  </div>`;
    }

    /* ============ VERSION COMPARISON ============ */
    function buildVersionDiffs(kind, contextId, versionA, versionB) {
      const isPo = kind === 'po';
      const context = isPo ? (POS.find(item => item.id === contextId) || POS[0]) : (PNS.find(item => item.pn === contextId) || PNS[0]);
      const rowsA = isPo ? poVersionRows(context,versionA) : bomVersionRows(context,versionA);
      const rowsB = isPo ? poVersionRows(context,versionB) : bomVersionRows(context,versionB);
      const key = isPo ? 'pn' : 'material';
      const fields = isPo
        ? [['description','Description'],['quantity','Quantity'],['unit','Unit'],['dueDate','Due Date'],['customerRef','Customer Reference']]
        : [['description','Description'],['materialType','Material Type'],['usageQty','Usage Quantity'],['unit','Unit'],['supplier','Supplier'],['revision','Revision']];
      const mapA = new Map(rowsA.map(row => [row[key],row]));
      const mapB = new Map(rowsB.map(row => [row[key],row]));
      const keys = [...new Set([...mapA.keys(),...mapB.keys()])];
      const diffs = [];
      keys.forEach(recordKey => {
        const before = mapA.get(recordKey), after = mapB.get(recordKey);
        if (!before) {
          diffs.push({ key:recordKey, field:isPo ? 'PO line item' : 'BOM material', old:'—', new:after.description, change:'Added' });
          return;
        }
        if (!after) {
          diffs.push({ key:recordKey, field:isPo ? 'PO line item' : 'BOM material', old:before.description, new:'—', change:'Removed' });
          return;
        }
        let changed = false;
        fields.forEach(([field,label]) => {
          if (String(before[field] ?? '') !== String(after[field] ?? '')) {
            diffs.push({ key:recordKey, field:label, old:String(before[field] ?? '—'), new:String(after[field] ?? '—'), change:'Modified' });
            changed = true;
          }
        });
        if (!changed) diffs.push({ key:recordKey, field:'All fields', old:'No change', new:'No change', change:'Unchanged' });
      });
      return diffs;
    }

    function pageVersionCompare() {
      const isPo = openContext.compareType === 'po';
      const contextId = isPo ? openContext.po : openContext.pn;
      const context = isPo ? (POS.find(item => item.id === contextId) || POS[0]) : (PNS.find(item => item.pn === contextId) || PNS[0]);
      const versions = isPo ? poVersionRecords(context) : bomVersionRecords(context);
      let compareA = isPo ? poVersionCompareA : bomVersionCompareA;
      let compareB = isPo ? poVersionCompareB : bomVersionCompareB;
      if (!versions.some(item => item.version === compareA)) compareA = versions[1]?.version || versions[0].version;
      if (!versions.some(item => item.version === compareB)) compareB = versions[0].version;
      if (isPo) { poVersionCompareA = compareA; poVersionCompareB = compareB; } else { bomVersionCompareA = compareA; bomVersionCompareB = compareB; }
      const dataList = buildVersionDiffs(isPo ? 'po' : 'bom',contextId,compareA,compareB);
      const filteredDiffs = dataList.filter(item => (versionCompareFilters[item.change] || false) && (!versionCompareSearch || Object.values(item).some(value => String(value).toLowerCase().includes(versionCompareSearch.toLowerCase()))));
      const itemCount = change => new Set(dataList.filter(item => item.change === change).map(item => item.key)).size;
      const contextTitle = isPo ? `${context.id} line-item comparison` : `${context.pn} material-structure comparison`;
      const subtitle = isPo ? `${context.id} · ${context.project} · purchase-order line items` : `${context.pn} · ${context.project} · BOM material structure`;
      const itemLabel = isPo ? 'Part Number' : 'Material PN';
      const domainLabel = isPo ? 'PO Versions Only' : 'BOM Versions Only';
      const filters = ['Added','Modified','Removed','Unchanged'];
      return `<div class="version-comparison-shell">
        <div class="version-comparison-hero"><div class="version-domain-title"><div class="version-domain-icon ${isPo ? '' : 'bom'}">${icon(isPo ? 'FileText' : 'bom','')}</div><div><span>${domainLabel}</span><h2>${contextTitle}</h2><p>${subtitle}</p></div></div><button class="btn" onclick="backFromVersionCompare()">${icon('chevLeft','')} Back to ${isPo ? 'PO Versions' : 'BOM Versions'}</button></div>
        <div class="card version-comparison-controls"><div class="version-compare-field"><label>${isPo ? 'PO' : 'BOM'} version A</label><select onchange="setVersionCompareA(this.value)">${versions.map(item => `<option value="${item.version}" ${item.version === compareA ? 'selected' : ''}>${item.version} · ${item.date}</option>`).join('')}</select></div><button class="btn" onclick="swapVersionComparison()" title="Swap compared versions">${icon('refresh','')}</button><div class="version-compare-field"><label>${isPo ? 'PO' : 'BOM'} version B</label><select onchange="setVersionCompareB(this.value)">${versions.map(item => `<option value="${item.version}" ${item.version === compareB ? 'selected' : ''}>${item.version}${item.current ? ' · Current' : ''}</option>`).join('')}</select></div><span>${statusBadge(`${compareA} → ${compareB}`,isPo ? 'info' : 'purple')}</span></div>
        <div class="version-comparison-summary"><div class="version-change-metric"><span>${isPo ? 'Added PNs' : 'Added materials'}</span><strong>${itemCount('Added')}</strong></div><div class="version-change-metric"><span>${isPo ? 'Modified PNs' : 'Modified materials'}</span><strong>${itemCount('Modified')}</strong></div><div class="version-change-metric"><span>${isPo ? 'Removed PNs' : 'Removed materials'}</span><strong>${itemCount('Removed')}</strong></div><div class="version-change-metric"><span>Unchanged</span><strong>${itemCount('Unchanged')}</strong></div></div>
        <div class="card"><div class="section-title"><span>${isPo ? 'PO line-item changes' : 'BOM material changes'}</span>${tableExportActions('versionComparisonTable',`${contextId} ${compareA} to ${compareB} ${isPo ? 'PO' : 'BOM'} Comparison`)}</div><div class="compare-filter-row"><div class="compare-filter-group">${filters.map(type => `<button class="compare-filter ${versionCompareFilters[type] ? 'active' : ''}" onclick="toggleVersionCompareFilter('${type}')">${type}</button>`).join('')}</div><div class="compare-control compare-search"><input type="text" placeholder="Search ${isPo ? 'part number' : 'material'} or field…" value="${versionCompareSearch}" oninput="setVersionCompareSearch(this.value)"></div></div><div class="table-scroll"><table id="versionComparisonTable" class="compare-table"><thead><tr><th>${itemLabel}</th><th>Field</th><th>${compareA.toUpperCase()}</th><th>${compareB.toUpperCase()}</th><th>Change</th></tr></thead><tbody>${filteredDiffs.length ? filteredDiffs.map(item => `<tr><td class="mono"><strong>${item.key}</strong></td><td>${item.field}</td><td class="${item.change === 'Removed' ? 'diff-old' : item.change === 'Modified' ? 'diff-modified' : 'diff-unchanged'}">${item.old}</td><td class="${item.change === 'Added' ? 'diff-new' : item.change === 'Modified' ? 'diff-modified' : item.change === 'Removed' ? 'diff-removed' : 'diff-unchanged'}">${item.new}</td><td>${statusBadge(item.change,item.change === 'Added' ? 'success' : item.change === 'Removed' ? 'danger' : item.change === 'Modified' ? 'warning' : 'neutral')}</td></tr>`).join('') : `<tr><td colspan="5"><div class="empty-state" style="padding:24px;"><div class="e-title">No matching changes</div><div class="e-sub">Adjust the change filters or search.</div></div></td></tr>`}</tbody></table></div></div>
      </div>`;
    }

    /* ============ SIMULATION WORKSPACE ============ */
    function setSimScope(scope) {
      if (mfgSimulationContext.active || !['single','selected'].includes(scope)) return;
      simScope = scope;
      simResult = null;
      renderPage();
    }
    function setSimProject(v) { if (mfgSimulationContext.active) return; simProject = v; renderPage(); }
    function toggleSimUseCurrentVersions(v) {
      simUseCurrentVersions = v;
      if (mfgSimulationContext.active) mfgInvalidateLaunchApproval();
      renderPage();
    }
    function setSimPoVersion(v) {
      simPoVersion = v;
      if (mfgSimulationContext.active) mfgInvalidateLaunchApproval();
      renderPage();
    }
    function setSimBomVersion(v) {
      simBomVersion = v;
      if (mfgSimulationContext.active) mfgInvalidateLaunchApproval();
      renderPage();
    }
    function toggleVersionCompareFilter(type) { versionCompareFilters[type] = !versionCompareFilters[type]; renderPage(); }
    function setVersionCompareA(v) { if (openContext.compareType === 'po') poVersionCompareA = v; else bomVersionCompareA = v; renderPage(); }
    function setVersionCompareB(v) { if (openContext.compareType === 'po') poVersionCompareB = v; else bomVersionCompareB = v; renderPage(); }
    function swapVersionComparison() {
      if (openContext.compareType === 'po') [poVersionCompareA,poVersionCompareB] = [poVersionCompareB,poVersionCompareA];
      else [bomVersionCompareA,bomVersionCompareB] = [bomVersionCompareB,bomVersionCompareA];
      renderPage();
    }
    function backFromVersionCompare() {
      if (openContext.compareType === 'po') { activeTab.po = 'PO Versions'; navigate('po-workspace'); }
      else { activeTab.pn = 'BOM Versions'; navigate('pn-workspace'); }
    }
    function setVersionCompareSearch(v) { versionCompareSearch = v; renderPage(); }
    function toggleSimPo(id) { simSelectedPOs.has(id) ? simSelectedPOs.delete(id) : simSelectedPOs.add(id); simResult = null; renderPage(); }
    function toggleSimAllPos() {
      const list = POS.filter(p => poLifecycle(p.id) !== 'Delivered');
      const allSelected = list.length > 0 && list.every(p => simSelectedPOs.has(p.id));
      if (allSelected) { list.forEach(p => simSelectedPOs.delete(p.id)); } else { list.forEach(p => simSelectedPOs.add(p.id)); }
      simResult = null;
      renderPage();
    }
    function setSimSinglePo(id) {
      if (mfgSimulationContext.active) return;
      simSinglePO = id;
      simProject = POS.find(po => po.id === id)?.project || simProject;
      simResult = null;
      renderPage();
    }
    function setSimStockBasis(basis) {
      if (!['real','net_reserved'].includes(basis)) return;
      simStockBasis = basis;
      simResult = null;
      if (mfgSimulationContext.active) mfgInvalidateLaunchApproval();
      renderPage();
    }
    function toggleSimSource(key) {
      simSources[key] = !simSources[key];
      if (mfgSimulationContext.active) mfgInvalidateLaunchApproval();
      renderPage();
    }
    /* M05-FR-02: safety coefficient is fixed at 2 — no user-facing setter. */
    function setSimMode(mode) { if (mfgSimulationContext.active && mode !== 'current') return; simMode = mode; simResult = null; renderPage(); }
    function setSimPriorityRule(rule) { simPriorityRule = rule; renderPage(); }
    function setSimMeetingDate(v) {
      simMeetingDate = v;
      if (mfgSimulationContext.active) mfgInvalidateLaunchApproval();
      renderPage();
    }
    function setSimMeetingParticipants(v) {
      simMeetingParticipants = v;
      if (mfgSimulationContext.active) mfgInvalidateLaunchApproval();
      renderPage();
    }
    function setSimMeetingMinutes(v) {
      simMeetingMinutes = v;
      simMeetingSaved = false;
      if (mfgSimulationContext.active) mfgInvalidateLaunchApproval();
      const status = document.getElementById('simMeetingStatus');
      if (status) status.textContent = 'Unsaved changes — click Save Minutes.';
      const runButton = document.getElementById('simRunButton');
      if (runButton) runButton.disabled = true;
      const requirement = document.getElementById('simMeetingRequirement');
      if (requirement) requirement.textContent = 'Save the meeting minutes before running the simulation.';
    }
    function saveMeetingMinutes() {
      if (!simMeetingMinutes.trim()) {
        return openModal('Meeting minutes required', 'Enter meeting notes before saving.');
      }
      simMeetingMinutes = simMeetingMinutes.trim();
      simMeetingSaved = true;
      renderPage();
    }
    function uploadMfgMeetingMinutes(input) {
      const file = input?.files?.[0];
      if (!file) return;
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        input.value = '';
        return openModal('PDF required', 'Upload the meeting minutes as a PDF document.');
      }
      simMeetingFileName = file.name;
      simMeetingFile = file;
      simMeetingMinutes = file.name;
      simMeetingSaved = true;
      renderPage();
    }
    function setSimIncomingDraft(key, value) {
      simIncomingMaterialDraft[key] = value;
      renderPage();
    }
    function addSimIncomingMaterial() {
      if (!simIncomingMaterialDraft.material || simIncomingMaterialDraft.qty <= 0 || !simIncomingMaterialDraft.supplier) {
        return openModal('Invalid incoming material', 'Please provide a material code/name, quantity, and supplier.');
      }
      simIncomingMaterials = [...simIncomingMaterials, { ...simIncomingMaterialDraft, qty: Number(simIncomingMaterialDraft.qty), status: 'Expected' }];
      simIncomingMaterialDraft = { material: '', qty: 0, arrival: new Date().toISOString().slice(0, 10), supplier: '', status: 'Expected' };
      renderPage();
    }
    function removeSimIncomingMaterial(index) {
      simIncomingMaterials = simIncomingMaterials.filter((_, i) => i !== index);
      renderPage();
    }

    function getSimTargetPOs() {
      if (mfgSimulationContext.active) return POS.filter(p => p.id === mfgWizard.po);
      if (simScope === 'selected') return POS.filter(p => simSelectedPOs.has(p.id));
      if (simScope === 'single') return POS.filter(p => p.id === simSinglePO);
      return [];
    }

    function simReservedByMaterial() {
      const reserved = {};
      MFG_DELIVERIES
        .filter(delivery => !['Delivered','Cancelled','Expired'].includes(delivery.status))
        .forEach(delivery => (delivery.materials || []).forEach(line => {
          reserved[line.code] = (reserved[line.code] || 0) + Number(line.qty || line.required || 0);
        }));
      return reserved;
    }

    /* Total available material = warehouse stock + remaining usable WIP material.
       In reservation-aware mode, quantities frozen by open launch instructions are deducted
       before allocation. Transit and planned inbound quantities are excluded from both bases. */
    function simAvailableByMaterial() {
      const avail = {};
      const reserved = simStockBasis === 'net_reserved' ? simReservedByMaterial() : {};
      MATERIALS.forEach(m => {
        const a = Number(m.warehouse || 0) + Number(m.cutman || 0) + Number(m.wip || 0);
        avail[m.code] = Math.max(0, a - Number(reserved[m.code] || 0));
      });
      return avail;
    }

    /* M05-FR-04: Material Requirement = BOM Usage x Safety Coefficient x PO Quantity.
       PO Quantity here is net of quantities already launched and already entered into
       manufacturing (M05-FR-02), since that material demand has already been satisfied. */
    function simNetPoQty(po) {
      const prog = PO_LAUNCH_PROGRESS[po.id];
      if (!prog) return { netQty: 0, pn: null, alreadyLaunched: 0, enteredToManufacturing: 0, totalQty: 0 };
      const netQty = Math.max(0, prog.qty - prog.alreadyLaunched - prog.enteredToManufacturing);
      return { netQty, pn: prog.pn, alreadyLaunched: prog.alreadyLaunched, enteredToManufacturing: prog.enteredToManufacturing, totalQty: prog.qty };
    }

    /* Requirement (before safety/PO-qty scaling doesn't apply here — this returns per-unit BOM
       usage x safety, so it can be multiplied by however many units of net PO qty are being
       tested at any point in the priority allocation loop below. */
    function simRequirementPerUnit(pn) {
      const usage = BOM_USAGE[pn] || {};
      const req = {};
      Object.keys(usage).forEach(matCode => { req[matCode] = usage[matCode] * simSafetyCoef; });
      return req;
    }

    /* M05-FR-09/10/11/12: multi-PO simulation. POs are ordered by the selected priority rule
       (M05.4 BP, Open Point OP-06) and each is greedily allocated against the shared remaining
       pool, so the simulation maximizes the number of POs fully launched rather than splitting
       stock evenly. Returns per-PO full/partial/none results plus the remaining shared pool. */
    function runMfgLaunchSimulation() {
      const po = POS.find(item => item.id === mfgWizard.po);
      const selectedFgpns = [...new Set(mfgWizard.fgpns || [])];
      const fgpnPlan = selectedFgpns.map(fgpn => {
        const summary = mfgPnLaunchSummary(mfgWizard.po,fgpn);
        return { fgpn,qty:Number(mfgWizard.fgpnQtys?.[fgpn] || 0),ordered:summary.ordered,launched:summary.launched,reserved:summary.reserved,available:summary.remaining };
      });
      if (!po || !fgpnPlan.length || fgpnPlan.some(line => !(line.qty > 0) || line.qty > line.available)) {
        return openModal('Invalid manufacturing launch scope', 'Return to the instruction and verify every selected PN launch quantity.');
      }
      const availableByMaterial = simAvailableByMaterial();
      const materialRows = mfgMaterialsForSelection(mfgWizard.po,selectedFgpns,mfgWizard.fgpnQtys).map(row => {
        const required = Math.ceil(Number(row.required || 0) * simSafetyCoef);
        const available = Number(availableByMaterial[row.code] || 0);
        return { code:row.code,desc:row.desc,type:row.type,unit:row.unit,fgpns:[...row.fgpns],baseRequired:Number(row.required || 0),required,available,shortfall:Math.max(0,required-available) };
      });
      const missingRows = materialRows.filter(row => row.shortfall > 0);
      const totalRequired = materialRows.reduce((sum,row) => sum + row.required,0);
      const totalCovered = materialRows.reduce((sum,row) => sum + Math.min(row.required,row.available),0);
      const readiness = totalRequired > 0 ? Math.round((totalCovered/totalRequired)*100) : 0;
      const canLaunch = materialRows.length > 0 && missingRows.length === 0;
      const executedAt = new Date().toISOString().slice(0,16).replace('T',' ');
      simResult = {
        mode:'current',scope:'manufacturing_launch',targetPOs:[mfgWizard.po],project:mfgWizard.project,sources:{ ...simSources },stockBasis:simStockBasis,safety:simSafetyCoef,
        poVersion:simUseCurrentVersions ? 'Current' : simPoVersion,bomVersion:simUseCurrentVersions ? 'Current' : simBomVersion,
        date:executedAt,executedBy:productionActor(),canLaunch,readiness,missingCount:missingRows.length,missingRows,materialRows,fgpnPlan,
        fingerprint:mfgLaunchFingerprint(),fullyLaunched:canLaunch ? 1 : 0,partiallyLaunched:0,notLaunched:canLaunch ? 0 : 1,
      };
      mfgLaunchSimulationResult = simResult;
      mfgWizard.approval = canLaunch ? { approved:true,fingerprint:mfgLaunchFingerprint(),approvedAt:executedAt,approvedBy:productionActor(),readiness } : null;
      AUDIT_LOGS.unshift({ id:`AUD-${AUDIT_LOGS.length + 12500}`,date:executedAt,user:productionActor(),module:'Simulation',action:canLaunch ? 'Manufacturing launch approved' : 'Manufacturing launch blocked',entity:`${mfgWizard.po} · ${selectedFgpns.join(', ')}`,project:mfgWizard.project,po:mfgWizard.po,details:`Launch-specific simulation for ${fgpnPlan.reduce((sum,line) => sum + line.qty,0).toLocaleString()} units; readiness ${readiness}%; ${missingRows.length} material shortfall${missingRows.length === 1 ? '' : 's'}.` });
      renderPage();
    }
    function runSimulation() {
      if (mfgSimulationContext.active && !simMeetingSaved) {
        openModal('Meeting minutes required', 'Return to the manufacturing instruction and save the meeting minutes before running its approval simulation.');
        return;
      }
      if (mfgSimulationContext.active) return runMfgLaunchSimulation();
      const rawTargetPOs = getSimTargetPOs();
      if (rawTargetPOs.length === 0) { return; }

      const pool = simAvailableByMaterial(); // shared stock pool, consumed as POs are allocated
      const priorityFn = SIM_PRIORITY_RULES[simPriorityRule].sort;
      const orderedPOs = [...rawTargetPOs].sort(priorityFn);

      const poResults = [];
      const materialLedger = {}; // tracks required/available/shortfall across all target POs combined

      orderedPOs.forEach(po => {
        const net = simNetPoQty(po);
        if (!net.pn || net.netQty <= 0) {
          poResults.push({ po, netQty: net.netQty, totalQty: net.totalQty, alreadyLaunched: net.alreadyLaunched, enteredToManufacturing: net.enteredToManufacturing, launchableQty: net.totalQty, result: net.netQty <= 0 ? 'Full' : 'None', missingMaterials: [] });
          return;
        }
        const perUnitReq = simRequirementPerUnit(net.pn);
        const matCodes = Object.keys(perUnitReq);

        // Determine the maximum units of this PO's net quantity the *current* shared pool can support.
        let maxUnits = net.netQty;
        matCodes.forEach(matCode => {
          const perUnit = perUnitReq[matCode];
          if (perUnit <= 0) return;
          const supportable = Math.floor((pool[matCode] || 0) / perUnit);
          maxUnits = Math.min(maxUnits, Math.max(0, supportable));
        });

        const launchableUnits = Math.max(0, Math.min(maxUnits, net.netQty));
        const result = launchableUnits >= net.netQty ? 'Full' : (launchableUnits > 0 ? 'Partial' : 'None');

        // Consume the pool for the units actually allocated to this PO.
        matCodes.forEach(matCode => {
          const perUnit = perUnitReq[matCode];
          pool[matCode] = (pool[matCode] || 0) - perUnit * launchableUnits;
        });

        // Record missing materials against this PO's FULL net requirement (not just what was
        // allocated), so the missing-material list reflects the true shortfall (M05-FR-07).
        const missingMaterials = matCodes.map(matCode => {
          const required = Math.ceil(perUnitReq[matCode] * net.netQty);
          const shortfall = Math.max(0, required - Math.ceil(perUnitReq[matCode] * launchableUnits));
          const mat = MATERIALS.find(m => m.code === matCode);
          if (!materialLedger[matCode]) materialLedger[matCode] = { code: matCode, desc: mat ? mat.desc : matCode, required: 0, available: pool[matCode] != null ? Math.max(0, pool[matCode]) : 0 };
          materialLedger[matCode].required += required;
          return { code: matCode, desc: mat ? mat.desc : matCode, required, availableAtAllocation: Math.max(0, Math.ceil(perUnitReq[matCode] * launchableUnits)), shortfall };
        }).filter(mm => mm.shortfall > 0);

        poResults.push({
          po, netQty: net.netQty, totalQty: net.totalQty, alreadyLaunched: net.alreadyLaunched, enteredToManufacturing: net.enteredToManufacturing,
          launchableQty: net.totalQty - net.netQty + launchableUnits, // already-progressed units + newly launchable units
          launchableUnitsThisRun: launchableUnits, remainingOpenQty: net.netQty - launchableUnits,
          result, missingMaterials,
        });
      });

      const originalPool = simAvailableByMaterial(); // pre-allocation snapshot, for reporting only
      const missingRows = Object.values(materialLedger).map(row => ({
        ...row,
        available: originalPool[row.code] != null ? originalPool[row.code] : 0,
        shortfall: Math.max(0, row.required - (originalPool[row.code] || 0)),
      })).filter(r => r.shortfall > 0);

      const fullyLaunched = poResults.filter(r => r.result === 'Full').length;
      const partiallyLaunched = poResults.filter(r => r.result === 'Partial').length;
      const notLaunched = poResults.filter(r => r.result === 'None').length;
      const canLaunch = poResults.length > 0 && notLaunched === 0 && partiallyLaunched === 0;
      const totalRequired = Object.values(materialLedger).reduce((s, r) => s + r.required, 0);
      const totalAvailableCapped = Object.values(materialLedger).reduce((s, r) => s + Math.min(originalPool[r.code] || 0, r.required), 0);
      const readiness = totalRequired > 0 ? Math.round((totalAvailableCapped / totalRequired) * 100) : 100;

      simResult = {
        mode: simMode,
        targetPOs: orderedPOs.map(p => p.id),
        project: [...new Set(orderedPOs.map(po => po.project))].join(', '),
        scope: simScope,
        stockBasis: simStockBasis,
        reservedByMaterial: simStockBasis === 'net_reserved' ? simReservedByMaterial() : {},
        sources: { ...simSources },
        safety: simSafetyCoef,
        priorityRule: simPriorityRule,
        poVersion: simUseCurrentVersions ? 'Current' : simPoVersion,
        bomVersion: simUseCurrentVersions ? 'Current' : simBomVersion,
        date: '2026-07-15 ' + new Date().toTimeString().slice(0, 5),
        executedBy: 'A. Haddad',
        canLaunch, readiness,
        missingCount: missingRows.length,
        missingRows,
        poResults,
        fullyLaunched, partiallyLaunched, notLaunched,
        incomingMaterials: simMode === 'future' ? [...simIncomingMaterials] : [],
      };
      renderPage();
    }

    /* M05-FR-08/AC-06: export missing-material list as a downloadable CSV with the four
       required columns (material part number, required, available, shortfall). */
    function exportMissingMaterialList() {
      if (!simResult || !simResult.missingRows || simResult.missingRows.length === 0) {
        openModal('Nothing to export', 'There are no missing materials in the current simulation result.');
        return;
      }
      const header = 'Material Part Number,Description,Required Quantity,Available Quantity,Shortfall Quantity\n';
      const lines = simResult.missingRows.map(r => `${r.code},"${(r.desc || '').replace(/"/g, '""')}",${r.required},${r.available},${r.shortfall}`).join('\n');
      const csv = header + lines;
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `missing-materials_${simResult.targetPOs.join('-')}_${simResult.date.split(' ')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    /* M05-FR-17/18/19 + BP M05.6: generates the future-stock draft document, clearly labeled as
       not confirmed, and stores it in the audit trail (SIM_DRAFT_DOCUMENTS acts as that trail here). */
    let SIM_DRAFT_DOCUMENTS = [];
    function generateFutureStockDraft() {
      if (!simResult || simResult.mode !== 'future') {
        openModal('Not available', 'Draft documents are only generated for future-stock simulations.');
        return;
      }
      const doc = {
        id: `DRAFT-${String(SIM_DRAFT_DOCUMENTS.length + 1).padStart(4, '0')}`,
        label: 'Based on real stock and planned future stock — not confirmed',
        date: simResult.date,
        project: simResult.project,
        pos: [...simResult.targetPOs],
        executedBy: simResult.executedBy,
        incomingMaterials: [...simResult.incomingMaterials],
        missingRows: [...simResult.missingRows],
        canLaunch: simResult.canLaunch,
      };
      SIM_DRAFT_DOCUMENTS = [doc, ...SIM_DRAFT_DOCUMENTS];
      openModal('Draft Document Generated', `${doc.id} has been generated and stored in the audit trail, clearly labeled "${doc.label}". No stored stock values were changed.`);
      renderPage();
    }

    function simScopeSummary() {
      const targetPOs = getSimTargetPOs();
      const versionText = simUseCurrentVersions
        ? `Using <strong>current</strong> PO and BOM versions.`
        : `Using <strong>PO ${simPoVersion}</strong> and <strong>BOM ${simBomVersion}</strong>.`;
      if (simScope === 'project') {
        return `Simulating <strong>${targetPOs.length}</strong> PO${targetPOs.length === 1 ? '' : 's'} across the entire <strong>${simProject}</strong> project. ${versionText}`;
      }
      if (simScope === 'selected') {
        return targetPOs.length > 0
          ? `Simulating <strong>${targetPOs.length}</strong> selected PO${targetPOs.length === 1 ? '' : 's'}: ${targetPOs.map(p => p.id).join(', ')}. ${versionText}`
          : `No purchase orders selected yet — check at least one below.`;
      }
      if (simScope === 'single') {
        return targetPOs.length > 0 ? `Simulating a single purchase order: <strong>${simSinglePO}</strong>. ${versionText}` : `Select a purchase order to simulate.`;
      }
      return '';
    }

    function pageSimLaunch() {
      const launchContext = mfgSimulationContext.active;
      const launchFgpns = launchContext ? (mfgWizard.fgpns || []) : [];
      const launchQty = launchContext ? launchFgpns.reduce((sum,fgpn) => sum + Number(mfgWizard.fgpnQtys?.[fgpn] || 0),0) : 0;
      const simulationPos = POS.filter(po => poLifecycle(po.id) !== 'Delivered');
      const projectOptions = [...new Set(simulationPos.map(po => po.project))];
      const poGroups = projectOptions.map(project => ({ project, pos:simulationPos.filter(po => po.project === project) }));
      const allProjectPosSelected = simulationPos.length > 0 && simulationPos.every(p => simSelectedPOs.has(p.id));
      const targetPOs = getSimTargetPOs();
      const selectedProjects = [...new Set(targetPOs.map(po => po.project))];
      const meetingReady = !launchContext || simMeetingSaved;
      const canRun = targetPOs.length > 0 && meetingReady && can('runSimulation') === true;
      const isMultiPo = targetPOs.length > 1;

      const configPanel = `
  <div class="sim-config-panel sim-control-card">
    <div class="sim-config-title">${launchContext ? 'Launch Check' : 'Simulation Setup'}</div>

    ${launchContext ? `<div class="sim-launch-scope">${icon('check','')}<div><strong class="mono">${mfgWizard.po}</strong><span>${launchFgpns.length} PN${launchFgpns.length === 1 ? '' : 's'} · ${launchQty.toLocaleString()} units</span></div></div>` : `
    <div class="sim-control-section">
      <div class="sim-field">
        <label class="sim-field-label">Simulation Scope</label>
        <div class="sim-segmented sim-scope-switch">
          <button class="${simScope === 'single' ? 'active' : ''}" onclick="setSimScope('single')">Single PO</button>
          <button class="${simScope === 'selected' ? 'active' : ''}" onclick="setSimScope('selected')">Multiple POs</button>
        </div>
      </div>
    </div>

    <div class="sim-control-section sim-version-section">
      <div class="sim-section-line"><label class="sim-field-label">Data Versions</label><label class="sim-compact-check"><input type="checkbox" ${simUseCurrentVersions ? 'checked' : ''} onchange="toggleSimUseCurrentVersions(this.checked)"> Current versions</label></div>
      <div class="sim-compact-grid">
        <div class="sim-field"><label class="sim-field-label">PO</label><select class="sim-select" onchange="setSimPoVersion(this.value)" ${simUseCurrentVersions ? 'disabled' : ''}>${PO_VERSION_HISTORY.map(v => `<option value="${v.version}" ${simPoVersion === v.version ? 'selected' : ''}>${v.version}${v.current ? ' · Current' : ''}</option>`).join('')}</select></div>
        <div class="sim-field"><label class="sim-field-label">BOM</label><select class="sim-select" onchange="setSimBomVersion(this.value)" ${simUseCurrentVersions ? 'disabled' : ''}>${BOM_VERSION_HISTORY.map(v => `<option value="${v.version}" ${simBomVersion === v.version ? 'selected' : ''}>${v.version}${v.current ? ' · Current' : ''}</option>`).join('')}</select></div>
      </div>
    </div>

    ${simScope === 'selected' ? `
    <div class="sim-control-section sim-field">
      <div class="sim-section-line"><label class="sim-field-label">Purchase Orders</label><span class="sim-selection-total">${targetPOs.length} selected across ${selectedProjects.length} project${selectedProjects.length === 1 ? '' : 's'}</span></div>
      <div class="select-all-row" onclick="toggleSimAllPos()">
        <input type="checkbox" onclick="event.stopPropagation(); toggleSimAllPos()" ${allProjectPosSelected ? 'checked' : ''}/> Select all available POs
      </div>
      <div class="sim-po-groups">
        ${poGroups.map(group => `<section class="sim-po-group"><header><strong>${group.project}</strong><span>${group.pos.length} PO${group.pos.length === 1 ? '' : 's'}</span></header><div class="po-check-list">${group.pos.map(p => `
          <label class="po-check-row">
            <input type="checkbox" onchange="toggleSimPo('${p.id}')" ${simSelectedPOs.has(p.id) ? 'checked' : ''}/>
            <span><b class="pc-id">${p.id}</b><small>${p.customer} · Delivery ${p.delivery}</small></span>
            <span class="pc-status">${statusBadge(poLifecycle(p.id), productionStatusType(poLifecycle(p.id)))}</span>
          </label>`).join('')}</div></section>`).join('')}
      </div>
    </div>` : ''}

    ${simScope === 'single' ? `
    <div class="sim-control-section sim-field">
      <label class="sim-field-label">Purchase Order</label>
      <select class="sim-select" onchange="setSimSinglePo(this.value)" ${launchContext ? 'disabled' : ''}>
        ${poGroups.map(group => `<optgroup label="${group.project}">${group.pos.map(p => `<option value="${p.id}" ${simSinglePO === p.id ? 'selected' : ''}>${p.id} · ${p.customer} · ${poLifecycle(p.id)}</option>`).join('')}</optgroup>`).join('')}
      </select>
      ${targetPOs[0] ? `<div class="sim-single-po-context"><span>${targetPOs[0].project}</span><strong>${targetPOs[0].customer}</strong><small>Required delivery ${targetPOs[0].delivery}</small></div>` : ''}
    </div>` : ''}

    ${isMultiPo ? `
    <div class="sim-control-section sim-field">
      <label class="sim-field-label">Priority</label>
      <select class="sim-select" onchange="setSimPriorityRule(this.value)">
        ${Object.entries(SIM_PRIORITY_RULES).map(([key, r]) => `<option value="${key}" ${simPriorityRule === key ? 'selected' : ''}>${r.label}</option>`).join('')}
      </select>
    </div>` : ''}`}

    <div class="sim-control-section sim-field">
      <label class="sim-field-label">Stock Calculation</label>
      <div class="sim-stock-basis" role="radiogroup" aria-label="Stock calculation basis">
        <button role="radio" aria-checked="${simStockBasis === 'real'}" class="${simStockBasis === 'real' ? 'active' : ''}" onclick="setSimStockBasis('real')">
          <span class="sim-basis-radio"></span><span><strong>Real stock only</strong><small>Warehouse stock + usable WIP</small></span>
        </button>
        <button role="radio" aria-checked="${simStockBasis === 'net_reserved'}" class="${simStockBasis === 'net_reserved' ? 'active' : ''}" onclick="setSimStockBasis('net_reserved')">
          <span class="sim-basis-radio"></span><span><strong>Account for reserved stock</strong><small>Real stock minus quantities frozen by planned launches</small></span>
        </button>
      </div>
      <div class="sim-formula-note">${icon('info','')}<span>${simStockBasis === 'real' ? 'Available = warehouse + usable WIP' : 'Available = warehouse + usable WIP − frozen/reserved quantities'}</span></div>
    </div>

    <div class="sim-safety-row">
      <span>Safety Coefficient</span><strong>${simSafetyCoef}×</strong>
    </div>

    <div class="sim-run-area">
      ${can('runSimulation') === false ? '' : `<button id="simRunButton" class="sim-run-btn" ${canRun ? '' : 'disabled'} onclick="runSimulation()">${icon('sim', '')} ${launchContext ? 'Run Launch Approval Simulation' : 'Run Simulation'}</button>`}
      ${can('runSimulation') === 'view' ? `<div class="locked-note">${icon('lock', '')} View only — your role cannot run simulations</div>` : ''}
      ${launchContext && !meetingReady && can('runSimulation') === true ? `<div class="sim-inline-warning">Meeting minutes must be saved in the manufacturing instruction.</div>` : ''}
    </div>
  </div>`;

      const resultPanel = simResult ? (simResult.scope === 'manufacturing_launch' ? mfgLaunchSimulationResultBlock(simResult) : simResultBlock(simResult)) : launchContext ? `
    <div class="card sim-empty-card">
      <div class="sim-empty-icon">${icon('sim', '')}</div>
      <div class="sim-empty-title">Launch check ready</div>
      <div class="sim-empty-copy">Confirm the stock sources and run the simulation.</div>
    </div>` : `
    <div class="card sim-empty-card">
      <div class="sim-empty-icon">${icon('sim', '')}</div>
      <div class="sim-empty-title">Ready to simulate</div>
      <div class="sim-empty-copy">Select the scope and run the material check.</div>
    </div>`;

      const stockBasisLabel = simStockBasis === 'net_reserved' ? 'Net of reservations' : 'Real stock only';
      const projectSummary = selectedProjects.length > 1 ? `${selectedProjects.length} projects` : (selectedProjects[0] || simProject);

      return `
  <div class="page-title-row sim-page-head"><div><div class="page-title">${launchContext ? 'Manufacturing Launch Simulation' : 'Launch Simulation'}</div><div class="page-sub">${launchContext ? `${mfgWizard.po} · ${launchQty.toLocaleString()} units` : 'Material availability and launch capacity'}</div></div>
    ${launchContext ? `<button class="btn" onclick="returnToMfgInstruction()">${icon('chevLeft', '')} Return to Instruction</button>` : ''}
  </div>
  ${launchContext ? `<div class="mfg-sim-context"><div class="mfg-sim-context-main"><div class="mfg-sim-context-icon">${icon('sim','')}</div><div><strong>Launch Approval</strong><span>${mfgWizard.project}</span></div></div><div class="mfg-sim-context-stat"><span>Purchase Order</span><strong>${mfgWizard.po}</strong></div><div class="mfg-sim-context-stat"><span>Selected PNs</span><strong>${launchFgpns.length}</strong></div><div class="mfg-sim-context-stat"><span>Quantity</span><strong>${launchQty.toLocaleString()}</strong></div></div>` : ''}
  <div class="sim-overview-strip">
    <div class="sim-summary-card"><div class="sim-summary-top"><span class="sim-summary-label">${selectedProjects.length > 1 ? 'Projects' : 'Project'}</span>${icon('projects','')}</div><div class="sim-summary-value">${projectSummary}</div></div>
    <div class="sim-summary-card"><div class="sim-summary-top"><span class="sim-summary-label">Target</span>${icon('po','')}</div><div class="sim-summary-value">${launchContext ? `${launchFgpns.length} PNs · ${launchQty.toLocaleString()} units` : targetPOs.length ? `${targetPOs.length} purchase order${targetPOs.length===1?'':'s'}` : 'Not selected'}</div></div>
    <div class="sim-summary-card"><div class="sim-summary-top"><span class="sim-summary-label">Stock basis</span>${icon('stock','')}</div><div class="sim-summary-value">${stockBasisLabel}</div></div>
    <div class="sim-summary-card"><div class="sim-summary-top"><span class="sim-summary-label">Safety Coefficient</span>${icon('scale','')}</div><div class="sim-summary-value">${simSafetyCoef}×</div></div>
  </div>
  <div class="sim-layout">
    ${configPanel}
    <div>${resultPanel}</div>
  </div>`;
    }

    function mfgLaunchSimulationResultBlock(res) {
      const totalLaunchQty = res.fgpnPlan.reduce((sum,line) => sum + Number(line.qty || 0),0);
      const decisionTone = res.canLaunch ? 'var(--success)' : 'var(--danger)';
      return `
  <div class="sim-result-hero">
    <div>
      <div class="sim-result-kicker">Manufacturing instruction check · ${res.date}</div>
      <div class="sim-result-title" style="color:${decisionTone}">${res.canLaunch ? 'Launch approved for this instruction' : 'Launch approval blocked'}</div>
      <div class="sim-result-copy">${res.canLaunch ? `The selected stock sources cover the materials required for the exact ${totalLaunchQty.toLocaleString()}-unit launch plan.` : `${res.missingCount} material shortfall${res.missingCount === 1 ? '' : 's'} must be resolved before this instruction can generate a delivery code.`}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;">
        ${statusBadge(res.canLaunch ? 'Approval recorded' : 'Approval not granted',res.canLaunch ? 'success' : 'danger')}
        ${statusBadge(`${res.fgpnPlan.length} selected PN${res.fgpnPlan.length === 1 ? '' : 's'}`,'info')}
      </div>
    </div>
    <div class="sim-result-ring" style="--pct:${Math.min(100,res.readiness)};--ring:${res.readiness >= 100 ? 'var(--success)' : res.readiness >= 60 ? 'var(--warning)' : 'var(--danger)'}"><span>${res.readiness}%</span></div>
  </div>
  <div class="sim-metadata-grid">
    <div class="sim-meta-card"><div class="sim-meta-label">Purchase Order</div><div class="sim-meta-value mono">${res.targetPOs[0]}</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Partial launch</div><div class="sim-meta-value">${totalLaunchQty.toLocaleString()} units</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Versions</div><div class="sim-meta-value">PO ${res.poVersion} · BOM ${res.bomVersion}</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Safety coefficient</div><div class="sim-meta-value">${res.safety}×</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Executed by</div><div class="sim-meta-value">${res.executedBy}</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Decision</div><div class="sim-meta-value" style="color:${decisionTone}">${res.canLaunch ? 'Approved' : 'Blocked'}</div></div>
  </div>
  <div class="card" style="margin-bottom:16px;">
    <div class="section-title">PN Launch Scope <span class="hint">Approval applies only to these quantities</span></div>
    <div class="table-scroll"><table><thead><tr><th>Finished-Good PN</th><th>Ordered</th><th>Launched</th><th>Reserved</th><th>This Launch</th><th>Remaining After</th></tr></thead><tbody>
      ${res.fgpnPlan.map(line => `<tr><td class="mono" style="font-weight:750;">${line.fgpn}</td><td class="mono">${line.ordered.toLocaleString()}</td><td class="mono">${line.launched.toLocaleString()}</td><td class="mono">${line.reserved.toLocaleString()}</td><td class="mono" style="font-weight:800;color:var(--primary);">${line.qty.toLocaleString()}</td><td class="mono">${Math.max(0,line.available-line.qty).toLocaleString()}</td></tr>`).join('')}
    </tbody></table></div>
  </div>
  <div class="card">
    <div class="section-title">Material Approval Check <span class="hint">BOM requirement × ${res.safety} safety coefficient</span></div>
    <div class="table-scroll"><table><thead><tr><th>Material PN</th><th>Description</th><th>Linked PNs</th><th>Base Requirement</th><th>Controlled Requirement</th><th>Available</th><th>Shortfall</th><th>Status</th></tr></thead><tbody>
      ${res.materialRows.map(row => `<tr><td class="mono" style="font-weight:750;">${row.code}</td><td>${row.desc}</td><td><div class="mfg-pn-tags">${row.fgpns.map(fgpn => `<span class="mfg-pn-tag">${fgpn}</span>`).join('')}</div></td><td class="mono">${row.baseRequired.toLocaleString()} ${row.unit}</td><td class="mono">${row.required.toLocaleString()} ${row.unit}</td><td class="mono">${row.available.toLocaleString()} ${row.unit}</td><td class="mono" style="color:${row.shortfall ? 'var(--danger)' : 'var(--success)'};font-weight:750;">${row.shortfall ? row.shortfall.toLocaleString() : '0'} ${row.unit}</td><td>${statusBadge(row.shortfall ? 'Shortage' : 'Covered',row.shortfall ? 'danger' : 'success')}</td></tr>`).join('')}
    </tbody></table></div>
    <div class="mfg-sim-result-actions">
      ${!res.canLaunch && res.missingRows.length ? `<button class="btn secondary" onclick="exportMissingMaterialList()">${icon('download','')} Export Shortages</button>` : '<span></span>'}
      <button class="btn ${res.canLaunch ? 'primary' : ''}" onclick="returnToMfgInstruction()">${icon(res.canLaunch ? 'check' : 'chevLeft','')} ${res.canLaunch ? 'Approval Complete · Return to Instruction' : 'Return to Instruction'}</button>
    </div>
  </div>`;
    }

    function simResultBlock(res) {
      const multiPo = res.targetPOs.length > 1;
      return `
  ${res.mode === 'future' ? `
  <div class="card" style="margin-bottom:16px; border:1.5px dashed var(--warning); background:var(--warning-light, #FFFBEB);">
    <div style="display:flex; align-items:center; gap:10px; font-weight:700; color:var(--brown, #92400E);">
      ${icon('history', '')} Future-stock planning result
    </div>
    <div style="margin-top:10px;"><button class="btn secondary sm" onclick="generateFutureStockDraft()">${icon('doc', '')} Generate Draft Document</button></div>
  </div>` : ''}
  <div class="sim-result-hero">
    <div>
      <div class="sim-result-kicker">Simulation decision · ${res.date}</div>
      <div class="sim-result-title" style="color:${res.canLaunch?'var(--success)':res.partiallyLaunched>0?'var(--warning)':'var(--danger)'}">${res.canLaunch ? 'Ready for full launch' : res.partiallyLaunched > 0 ? 'Partial launch is possible' : 'Launch is currently blocked'}</div>
      <div class="sim-result-copy">${multiPo ? `${res.fullyLaunched} of ${res.targetPOs.length} purchase orders can launch fully. ` : ''}${res.missingCount ? `${res.missingCount} material shortfall${res.missingCount===1?' requires':'s require'} attention.` : 'All required material is covered by the selected stock sources.'}</div>
      <div style="display:flex; gap:7px; flex-wrap:wrap; margin-top:12px;">
        ${statusBadge(`${res.fullyLaunched} full`,'success')}
        ${res.partiallyLaunched ? statusBadge(`${res.partiallyLaunched} partial`,'warning') : ''}
        ${res.notLaunched ? statusBadge(`${res.notLaunched} blocked`,'danger') : ''}
      </div>
    </div>
    <div class="sim-result-ring" style="--pct:${Math.min(100,res.readiness)};--ring:${res.readiness>=100?'var(--success)':res.readiness>=60?'var(--warning)':'var(--danger)'}"><span>${res.readiness}%</span></div>
  </div>
  <div class="sim-metadata-grid">
    <div class="sim-meta-card"><div class="sim-meta-label">Stock calculation</div><div class="sim-meta-value">${res.stockBasis === 'net_reserved' ? 'Real stock minus reservations' : 'Real stock only'}</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Project</div><div class="sim-meta-value">${res.project}</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Purchase orders</div><div class="sim-meta-value mono">${res.targetPOs.join(', ')}</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Versions</div><div class="sim-meta-value">PO ${res.poVersion} · BOM ${res.bomVersion}</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Safety coefficient</div><div class="sim-meta-value">${res.safety}×</div></div>
    <div class="sim-meta-card"><div class="sim-meta-label">Executed by</div><div class="sim-meta-value">${res.executedBy}</div></div>
  </div>
  <div class="card" style="margin-bottom:16px;">
    <div class="section-title">Readiness <span class="hint">${res.readiness}% of required materials available</span></div>
    <div class="progress-track" style="height:14px;"><div class="progress-fill" style="width:${Math.min(100, res.readiness)}%; background:${res.readiness >= 100 ? 'var(--success)' : res.readiness >= 60 ? 'var(--warning)' : 'var(--danger)'};"></div></div>
  </div>
  <div class="card" style="margin-bottom:16px;">
    <div class="section-title">Purchase Order Breakdown</div>
    <table>
      <thead><tr><th>PO</th><th>Ordered Qty</th><th>Already Launched</th><th>Entered to Mfg</th><th>Net Qty to Launch</th><th>Launchable Now</th><th>Remaining Open Qty</th><th>Result</th></tr></thead>
      <tbody>
        ${res.poResults.map(r => `<tr class="clickable-row" onclick="navigate('po-detail')">
            <td class="mono">${r.po.id}</td>
            <td class="mono">${r.totalQty.toLocaleString()}</td>
            <td class="mono">${r.alreadyLaunched.toLocaleString()}</td>
            <td class="mono">${r.enteredToManufacturing.toLocaleString()}</td>
            <td class="mono">${r.netQty.toLocaleString()}</td>
            <td class="mono">${(r.launchableUnitsThisRun != null ? r.launchableUnitsThisRun : r.netQty).toLocaleString()}</td>
            <td class="mono" style="color:${r.remainingOpenQty > 0 ? 'var(--warning)' : 'var(--ink-soft)'};">${(r.remainingOpenQty || 0).toLocaleString()}</td>
            <td>${statusBadge(r.result === 'Full' ? 'Fully Launchable' : r.result === 'Partial' ? 'Partially Launchable' : 'Not Launchable', r.result === 'Full' ? 'success' : r.result === 'Partial' ? 'warning' : 'danger')}</td>
          </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <div class="card">
    <div class="section-title">Missing Materials</div>
    ${res.missingRows.length === 0 ? `<div class="e-sub" style="padding:10px 0;">No missing materials — all requirements are covered by the included stock sources.</div>` : `
    <table>
      <thead><tr><th>Material PN</th><th>Description</th><th>Required Qty</th><th>Available Qty</th><th>Shortfall Qty</th></tr></thead>
      <tbody>
        ${res.missingRows.map(m => `<tr class="clickable-row" onclick="navigate('material-detail')">
            <td class="mono">${m.code}</td><td>${m.desc}</td><td class="mono">${m.required.toLocaleString()}</td>
            <td class="mono">${m.available.toLocaleString()}</td>
            <td class="mono" style="color:var(--danger); font-weight:700;">${m.shortfall.toLocaleString()}</td>
          </tr>`).join('')}
      </tbody>
    </table>`}
    <div style="margin-top:14px; display:flex; justify-content:flex-end;">
      ${permBtn('exportMissingMaterialList', 'Export Missing Material List', 'download', 'exportMissingMaterialList()')}
    </div>
  </div>`;
    }

    /* ============ MATERIAL DETAIL ============ */
    function openMaterialDetail(code) {
      openContext.material = code;
      navigate('material-detail');
    }
    function materialTransitQuantity(code) {
      return transitMaterials.filter(item => item.code === code).reduce((sum,item) => sum + Number(item.qty || 0),0);
    }
    function materialStockState(material) {
      const threshold = getThreshold(material.code);
      if (material.warehouse < threshold) return { label:'Below Threshold', type:'danger' };
      if (material.warehouse < threshold * 1.25) return { label:'Watch', type:'warning' };
      return { label:'Available', type:'success' };
    }
    function stockLedgerEvents(materialCode='') {
      return completeAuditEvents().filter(event => {
        const stockModule = /stock|cutman|wip|reception/i.test(event.module);
        if (!stockModule) return false;
        if (materialCode && !(`${event.entity} ${event.details}`.includes(materialCode))) return false;
        return true;
      });
    }
    function pageMaterialDetail() {
      const m = MATERIALS.find(item => item.code === openContext.material) || MATERIALS[2];
      const threshold = getThreshold(m.code);
      const transit = materialTransitQuantity(m.code);
      const projected = m.warehouse + m.wip + transit;
      const state = materialStockState(m);
      const events = stockLedgerEvents(m.code);
      return `
  <section class="stock-shell">
    <div class="stock-material-hero">
      <div class="stock-material-title"><div class="stock-material-icon">${icon('material','')}</div><div><span class="mono">${m.code}</span><h2>${m.desc}</h2><p>${m.type} · ${m.supplier}</p></div></div>
      <div class="stock-page-actions"><button class="btn" onclick="navigateBack('stock-dashboard')">${icon('chevLeft','')} Stock Dashboard</button><button class="btn primary" onclick="navigate('stock-reception')">${icon('plus','')} Receive Material</button></div>
    </div>
    <div class="stock-kpi-grid">
      <div class="stock-kpi"><span>Warehouse</span><strong>${m.warehouse.toLocaleString()}</strong><small>Current quantity</small></div>
      <div class="stock-kpi"><span>Work in progress</span><strong>${m.wip.toLocaleString()}</strong><small>Active production</small></div>
      <div class="stock-kpi"><span>In transit</span><strong>${transit.toLocaleString()}</strong><small>Expected inbound</small></div>
      <div class="stock-kpi accent"><span>Projected available</span><strong>${projected.toLocaleString()}</strong><small>${statusBadge(state.label,state.type)}</small></div>
    </div>
    <div class="stock-detail-grid">
      <div class="card stock-panel">
        <div class="stock-panel-head"><h3>Material Control</h3>${statusBadge(state.label,state.type)}</div>
        <div class="stock-fact-grid"><div><span>Required quantity</span><strong>${m.required.toLocaleString()}</strong></div><div><span>Low-stock threshold</span><strong>${threshold.toLocaleString()}</strong></div><div><span>Missing quantity</span><strong class="${m.missing ? 'stock-danger-text' : ''}">${m.missing.toLocaleString()}</strong></div><div><span>CutMan quantity</span><strong>${m.cutman.toLocaleString()}</strong></div></div>
        <button class="btn" onclick="navigate('stock-thresholds')">Manage Threshold</button>
      </div>
      <div class="card stock-panel">
        <div class="stock-panel-head"><h3>Usage</h3><span>${m.projects.length} projects · ${m.pns.length} PNs</span></div>
        <div class="stock-usage-list">${m.projects.map(project => `<button onclick="openProject('${PROJECTS.find(item => item.name === project)?.id || project}')"><span>${icon('projects','')}${project}</span><strong>Project</strong></button>`).join('')}${m.pns.map(pn => `<button onclick="openPn('${pn}')"><span>${icon('bom','')}<span class="mono">${pn}</span></span><strong>Part Number</strong></button>`).join('')}</div>
      </div>
    </div>
    ${traceabilityWorkspace(events,`${m.code} stock history`,'materialStockHistoryTable')}
  </section>`;
    }

    /* ============ STOCK ============ */
    function pageStockDashboard() {
      const practicalTotal = MATERIALS.reduce((sum, m) => sum + m.warehouse, 0);
      const wipTotal = MATERIALS.reduce((sum, m) => sum + m.wip, 0);
      const transitTotal = transitMaterials.reduce((sum, item) => sum + item.qty, 0);
      const lowStock = MATERIALS.filter(material => material.warehouse < getThreshold(material.code));
      const movements = stockLedgerEvents().slice(0,4);
      return `
  <section class="stock-shell">
    <div class="stock-command-bar"><div><span>Inventory Control</span><h2>Material Stock</h2></div><div class="stock-page-actions"><button class="btn" onclick="navigate('stock-history')">${icon('history','')} Movement History</button><button class="btn" onclick="navigate('stock-transit')">${icon('truck','')} Transit Stock</button><button class="btn primary" onclick="navigate('stock-reception')">${icon('plus','')} Receive Material</button></div></div>
    <div class="stock-kpi-grid">
      <div class="stock-kpi"><span>Warehouse stock</span><strong>${practicalTotal.toLocaleString()}</strong><small>Available units</small></div>
      <div class="stock-kpi"><span>Work in progress</span><strong>${wipTotal.toLocaleString()}</strong><small>Production units</small></div>
      <div class="stock-kpi"><span>In transit</span><strong>${transitTotal.toLocaleString()}</strong><small>${transitMaterials.length} inbound records</small></div>
      <div class="stock-kpi ${lowStock.length ? 'danger' : 'accent'}"><span>Low-stock materials</span><strong>${lowStock.length}</strong><small>${lowStock.length ? 'Action required' : 'No alerts'}</small></div>
    </div>
    <div class="card stock-inventory-card">
      <div class="stock-panel-head"><div><h3>Inventory by Material</h3><span>${MATERIALS.length} controlled materials</span></div>${tableExportActions('stockInventoryTable','Material Stock')}</div>
      ${materialsToolbarHtml()}
      ${filterChips(materialFilters,{ type:'Type',warehouse:'Warehouse',missing:'Missing' },'clearMaterialFilter','resetMaterialFilters')}
      <div class="table-scroll"><table id="stockInventoryTable" class="stock-table"><thead><tr><th>Material</th><th>Type / Supplier</th><th>Required</th><th>Warehouse</th><th>WIP</th><th>Transit</th><th>Projected</th><th>Threshold</th><th>Status</th><th></th></tr></thead><tbody>${filterMaterials().map(m => { const transit=materialTransitQuantity(m.code), state=materialStockState(m); return `<tr onclick="openMaterialDetail('${m.code}')"><td><strong class="mono">${m.code}</strong><span>${m.desc}</span></td><td><strong>${m.type}</strong><span>${m.supplier}</span></td><td class="mono">${m.required.toLocaleString()}</td><td class="mono stock-qty-primary">${m.warehouse.toLocaleString()}</td><td class="mono">${m.wip.toLocaleString()}</td><td class="mono">${transit.toLocaleString()}</td><td class="mono">${(m.warehouse+m.wip+transit).toLocaleString()}</td><td class="mono">${getThreshold(m.code).toLocaleString()}</td><td>${statusBadge(state.label,state.type)}</td><td><button class="icon-btn" onclick="stop(event);openMaterialDetail('${m.code}')" title="Open material">${icon('view','')}</button></td></tr>`; }).join('')}</tbody></table></div>
    </div>
    <div class="stock-bottom-grid">
      <div class="card stock-panel"><div class="stock-panel-head"><h3>Low-Stock Alerts</h3><button class="btn sm" onclick="navigate('stock-thresholds')">Thresholds</button></div><div class="stock-alert-list">${lowStock.length ? lowStock.map(m => `<button onclick="openMaterialDetail('${m.code}')"><span class="stock-alert-icon">${icon('alert','')}</span><div><strong class="mono">${m.code}</strong><span>${m.desc}</span></div><div><strong>${m.warehouse.toLocaleString()}</strong><span>Threshold ${getThreshold(m.code).toLocaleString()}</span></div></button>`).join('') : `<div class="stock-clean-state">${icon('check','')} All materials are above threshold</div>`}</div></div>
      <div class="card stock-panel"><div class="stock-panel-head"><h3>Recent Movements</h3><button class="btn sm" onclick="navigate('stock-history')">View All</button></div><div class="stock-movement-list">${movements.map(event => `<button onclick="openAuditDetail('${event.id}')"><span class="stock-movement-dot"></span><div><strong>${event.action}</strong><span>${event.entity} · ${event.actor}</span></div><time class="mono">${event.date}</time></button>`).join('')}</div></div>
    </div>
  </section>`;
    }

    /* ============ THRESHOLDS ============ */
    function getThreshold(code) {
      return thresholdOverrides.hasOwnProperty(code) ? thresholdOverrides[code] : (MATERIALS.find(m => m.code === code)?.threshold ?? 0);
    }
    function startEditThreshold(code) {
      if (can('editThresholds') !== true) return;
      thresholdEditing = code;
      renderPage();
      const raf = (typeof requestAnimationFrame === 'function') ? requestAnimationFrame : (fn) => setTimeout(fn, 0);
      raf(() => {
        const el = document.getElementById('threshInput-' + code);
        if (el) { el.focus(); el.select(); }
      });
    }
    function cancelEditThreshold() { thresholdEditing = null; renderPage(); }
    function saveThreshold(code) {
      const el = document.getElementById('threshInput-' + code);
      if (!el) return;
      const previous = getThreshold(code);
      let v = parseInt(el.value, 10);
      if (isNaN(v) || v < 0) v = getThreshold(code);
      thresholdOverrides[code] = v;
      const m = MATERIALS.find(x => x.code === code);
      if (m) m.threshold = v;
      if (previous !== v) AUDIT_LOGS.unshift({ id:`AUD-${16000 + AUDIT_LOGS.length}`,date:new Date().toISOString().slice(0,16).replace('T',' '),user:productionActor(),module:'Stock Threshold',action:'Low-stock threshold updated',entity:code,project:'—',po:'—',details:`Threshold changed from ${previous} to ${v}.`,diff:{ field:'Threshold',old:String(previous),new:String(v) } });
      thresholdEditing = null;
      renderPage();
    }
    function restoreThresholdDefault(code) {
      const previous = getThreshold(code);
      const def = THRESHOLD_DEFAULTS[code];
      delete thresholdOverrides[code];
      const m = MATERIALS.find(x => x.code === code);
      if (m) m.threshold = def;
      if (previous !== def) AUDIT_LOGS.unshift({ id:`AUD-${16000 + AUDIT_LOGS.length}`,date:new Date().toISOString().slice(0,16).replace('T',' '),user:productionActor(),module:'Stock Threshold',action:'Default threshold restored',entity:code,project:'—',po:'—',details:`Threshold restored from ${previous} to default ${def}.`,diff:{ field:'Threshold',old:String(previous),new:String(def) } });
      thresholdEditing = null;
      renderPage();
    }

    function thresholdCell(m) {
      const current = getThreshold(m.code);
      const isModified = thresholdOverrides.hasOwnProperty(m.code) && thresholdOverrides[m.code] !== THRESHOLD_DEFAULTS[m.code];
      const editAccess = can('editThresholds');
      if (thresholdEditing === m.code) {
        return `<div class="thresh-cell" onclick="stop(event)">
      <div class="thresh-edit-row">
        <input id="threshInput-${m.code}" class="thresh-input" type="number" min="0" value="${current}"
          onkeydown="if(event.key==='Enter'){saveThreshold('${m.code}')} if(event.key==='Escape'){cancelEditThreshold()}"/>
        <button class="thresh-ok-btn" onclick="saveThreshold('${m.code}')" title="Save">${icon('check', '')}</button>
        <button class="thresh-cancel-btn" onclick="cancelEditThreshold()" title="Cancel">${icon('close', '')}</button>
      </div>
    </div>`;
      }
      return `<div class="thresh-cell" onclick="stop(event)">
    <div class="thresh-display" onclick="startEditThreshold('${m.code}')" style="${editAccess !== true ? 'cursor:default;' : ''}">
      ${isModified ? '<span class="thresh-modified-dot" title="Modified from default"></span>' : ''}
      <span class="mono">${current}</span>
      ${editAccess === true ? `<span class="thresh-edit-ic">${icon('edit', '')}</span>` : editAccess === 'view' ? `<span class="thresh-edit-ic" title="View only">${icon('lock', '')}</span>` : ''}
    </div>
    ${isModified ? `<span class="thresh-restore-btn" onclick="restoreThresholdDefault('${m.code}')" title="Restore default (${THRESHOLD_DEFAULTS[m.code]})">${icon('restore', '')} Restore</span>` : ''}
  </div>`;
    }

    function pageStockReception() {
      return `<section class="stock-shell">
  <div class="stock-command-bar"><div><span>Warehouse Operation</span><h2>Receive Material</h2></div><div class="stock-page-actions"><button class="btn" onclick="navigate('stock-dashboard')">${icon('chevLeft','')} Stock Dashboard</button><button class="btn" onclick="navigate('stock-history')">${icon('history','')} History</button></div></div>
  <div class="stock-workspace-grid">
    <div class="card stock-form-card">
      <div class="stock-panel-head"><h3>Reception Record</h3>${statusBadge('New','info')}</div>
      <div class="stock-form-grid">
        <div class="stock-field full"><label>Material</label><select onchange="stockReceptionDraft.material=this.value;stockReceptionDraft.supplier=MATERIALS.find(m=>m.code===this.value)?.supplier||'';renderPage()">${MATERIALS.map(m => `<option value="${m.code}" ${stockReceptionDraft.material === m.code ? 'selected' : ''}>${m.code} · ${m.desc}</option>`).join('')}</select></div>
        <div class="stock-field"><label>Quantity</label><input type="number" min="1" value="${stockReceptionDraft.qty || ''}" oninput="stockReceptionDraft.qty=Number(this.value)" placeholder="0"/></div>
        <div class="stock-field"><label>Received Date</label><input type="date" value="${stockReceptionDraft.received}" onchange="stockReceptionDraft.received=this.value"/></div>
        <div class="stock-field"><label>Supplier</label><input value="${poEsc(stockReceptionDraft.supplier)}" oninput="stockReceptionDraft.supplier=this.value"/></div>
        <div class="stock-field"><label>Destination</label><select onchange="stockReceptionDraft.destination=this.value"><option ${stockReceptionDraft.destination === 'Warehouse' ? 'selected' : ''}>Warehouse</option><option ${stockReceptionDraft.destination === 'WIP' ? 'selected' : ''}>WIP</option></select></div>
        <div class="stock-field full"><label>Delivery Reference</label><input value="${poEsc(stockReceptionDraft.reference)}" oninput="stockReceptionDraft.reference=this.value" placeholder="Delivery note or supplier reference"/></div>
      </div>
      <div class="stock-form-actions"><button class="btn" onclick="stockReceptionDraft={material:'MAT-5512',qty:0,supplier:'TE Connectivity',received:new Date().toISOString().slice(0,10),destination:'Warehouse',reference:''};renderPage()">Clear</button><button class="btn primary" onclick="recordStockReception()">${icon('check','')} Record Reception</button></div>
    </div>
    <div class="card stock-panel">
      <div class="stock-panel-head"><h3>Recent Receptions</h3><span>${stockReceipts.length} records</span></div>
      <div class="table-scroll"><table class="stock-table"><thead><tr><th>Material</th><th>Quantity</th><th>Supplier</th><th>Date</th><th>Destination</th><th>Status</th></tr></thead><tbody>${stockReceipts.slice(0,8).map(r => `<tr onclick="openMaterialDetail('${r.material}')"><td><strong class="mono">${r.material}</strong></td><td class="mono stock-qty-primary">${Number(r.qty).toLocaleString()}</td><td>${r.supplier}</td><td class="mono">${r.received}</td><td>${r.destination || 'Warehouse'}</td><td>${statusBadge(r.status,r.status === 'Received' ? 'success' : 'warning')}</td></tr>`).join('')}</tbody></table></div>
    </div>
  </div>
</section>`;
    }

    function recordStockReception() {
      const draft = stockReceptionDraft;
      if (!draft.material || !(draft.qty > 0) || !draft.supplier || !draft.received) return openModal('Complete the reception','Material, quantity, supplier and reception date are required.');
      const material = MATERIALS.find(item => item.code === draft.material);
      if (!material) return openModal('Material not found','Select an existing material from the list.');
      if (draft.destination === 'WIP') material.wip += Number(draft.qty);
      else material.warehouse += Number(draft.qty);
      const now = new Date().toISOString().slice(0,16).replace('T',' ');
      const receipt = { ...draft,status:'Received',recordedBy:productionActor(),recordedAt:now };
      stockReceipts.unshift(receipt);
      AUDIT_LOGS.unshift({ id:`AUD-${16100 + AUDIT_LOGS.length}`,date:now,user:productionActor(),module:'Stock Reception',action:'Material reception recorded',entity:draft.material,project:'—',po:'—',evidence:draft.reference || 'Reception register',details:`${draft.qty} units received from ${draft.supplier}. Destination: ${draft.destination}.` });
      stockReceptionDraft = { material:draft.material,qty:0,supplier:material.supplier,received:new Date().toISOString().slice(0,10),destination:'Warehouse',reference:'' };
      renderAll();
      openModal('Reception recorded',`${receipt.material} · ${Number(receipt.qty).toLocaleString()} units added to ${receipt.destination}.`);
    }

    function pageStockTransit() {
      const transitTotal = transitMaterials.reduce((sum,item) => sum + Number(item.qty || 0),0);
      const suppliers = new Set(transitMaterials.map(item => item.supplier)).size;
      const nextArrival = [...transitMaterials].sort((a,b) => String(a.arrival).localeCompare(String(b.arrival)))[0]?.arrival;
      return `<section class="stock-shell">
  <div class="stock-command-bar"><div><span>Inbound Inventory</span><h2>Transit Stock</h2></div><div class="stock-page-actions"><button class="btn" onclick="navigate('stock-dashboard')">${icon('chevLeft','')} Stock Dashboard</button><button class="btn" onclick="navigate('stock-history')">${icon('history','')} History</button></div></div>
  <div class="stock-mini-kpis"><div><span>Inbound quantity</span><strong>${transitTotal.toLocaleString()}</strong></div><div><span>Open records</span><strong>${transitMaterials.length}</strong></div><div><span>Suppliers</span><strong>${suppliers}</strong></div><div><span>Next arrival</span><strong class="stock-date-value">${nextArrival ? formatDate(nextArrival) : '—'}</strong></div></div>
  <div class="stock-workspace-grid">
    <div class="card stock-form-card">
      <div class="stock-panel-head"><h3>Add Inbound Material</h3>${statusBadge('In Transit','info')}</div>
      <div class="stock-form-grid">
        <div class="stock-field full"><label>Material</label><select onchange="const m=MATERIALS.find(item=>item.code===this.value);transitDraft.code=m?.code||'';transitDraft.desc=m?.desc||'';transitDraft.supplier=m?.supplier||'';renderPage()"><option value="">Select material</option>${MATERIALS.map(m => `<option value="${m.code}" ${transitDraft.code === m.code ? 'selected' : ''}>${m.code} · ${m.desc}</option>`).join('')}</select></div>
        <div class="stock-field"><label>Quantity</label><input type="number" min="1" value="${transitDraft.qty || ''}" oninput="transitDraft.qty=Number(this.value)" placeholder="0"/></div>
        <div class="stock-field"><label>Expected Arrival</label><input type="date" value="${transitDraft.arrival}" onchange="transitDraft.arrival=this.value"/></div>
        <div class="stock-field full"><label>Supplier</label><input value="${poEsc(transitDraft.supplier)}" oninput="transitDraft.supplier=this.value"/></div>
        <div class="stock-field full"><label>Internal Note</label><textarea oninput="transitDraft.notes=this.value" placeholder="Optional">${poEsc(transitDraft.notes)}</textarea></div>
      </div>
      <div class="stock-form-actions"><button class="btn" onclick="transitDraft={code:'',desc:'',qty:0,supplier:'',arrival:'',notes:'',status:'In Transit'};renderPage()">Clear</button><button class="btn primary" onclick="addTransitMaterial()">${icon('plus','')} Add Transit Record</button></div>
    </div>
    <div class="card stock-panel">
      <div class="stock-panel-head"><h3>Inbound Material List</h3>${tableExportActions('transitStockTable','Transit Stock')}</div>
      <div class="table-scroll"><table id="transitStockTable" class="stock-table"><thead><tr><th>Material</th><th>Quantity</th><th>Supplier</th><th>Expected Arrival</th><th>Status</th><th></th></tr></thead><tbody>${transitMaterials.map((item,index) => `<tr onclick="openMaterialDetail('${item.code}')"><td><strong class="mono">${item.code}</strong><span>${item.desc}</span></td><td class="mono stock-qty-primary">${Number(item.qty).toLocaleString()}</td><td>${item.supplier}</td><td class="mono">${formatDate(item.arrival)}</td><td>${statusBadge(item.status,'info')}</td><td><button class="icon-btn" onclick="stop(event);removeTransitMaterial(${index})" title="Delete transit record">${icon('trash','')}</button></td></tr>`).join('')}</tbody></table></div>
    </div>
  </div>
</section>`;
    }

    function addTransitMaterial() {
      if (!transitDraft.code || !transitDraft.desc || transitDraft.qty <= 0 || !transitDraft.supplier || !transitDraft.arrival) {
        openModal('Missing information', 'Please fill in Material Code, Material Name, Quantity, Supplier, and Expected Arrival Date before saving.');
        return;
      }
      const now = new Date().toISOString().slice(0,16).replace('T',' ');
      transitMaterials.unshift({ ...transitDraft,createdAt:now,createdBy:productionActor() });
      AUDIT_LOGS.unshift({ id:`AUD-${16200 + AUDIT_LOGS.length}`,date:now,user:productionActor(),module:'Transit Stock',action:'Inbound material registered',entity:transitDraft.code,project:'—',po:'—',details:`${transitDraft.qty} units from ${transitDraft.supplier}; expected ${formatDate(transitDraft.arrival)}.${transitDraft.notes ? ` Comment: ${transitDraft.notes}` : ''}` });
      transitDraft = { code: '', desc: '', qty: 0, supplier: '', arrival: '', notes: '', status: 'In Transit' };
      renderAll();
    }

    function removeTransitMaterial(index) {
      const item = transitMaterials[index];
      if (!item) return;
      AUDIT_LOGS.unshift({ id:`AUD-${16200 + AUDIT_LOGS.length}`,date:new Date().toISOString().slice(0,16).replace('T',' '),user:productionActor(),module:'Transit Stock',action:'Inbound record removed',entity:item.code,project:'—',po:'—',details:`Transit record for ${item.qty} units from ${item.supplier} was removed.` });
      transitMaterials.splice(index,1);
      renderAll();
    }

    function formatDate(value) {
      if (!value) return '—';
      const date = new Date(value);
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function pageStockCutman() {
      const latest = cutmanImports[0];
      const wip = MATERIALS.reduce((sum,m) => sum + m.wip,0);
      const cutting = MATERIALS.reduce((sum,m) => sum + m.cutman,0);
      return `<section class="stock-shell">
  <div class="stock-command-bar"><div><span>Cutting Integration</span><h2>CutMan Import</h2></div><div class="stock-page-actions"><button class="btn" onclick="navigate('stock-dashboard')">${icon('chevLeft','')} Stock Dashboard</button><button class="btn" onclick="navigate('wh-cutting')">${icon('refresh','')} Manual Transfer</button><label class="btn primary" for="cutmanFileInput">${icon('upload','')} Import File</label><input id="cutmanFileInput" type="file" accept=".csv,.xlsx,.xls" hidden onchange="importCutmanFile(this)"/></div></div>
  <div class="stock-kpi-grid">
    <div class="stock-kpi"><span>WIP quantity</span><strong>${wip.toLocaleString()}</strong><small>Active materials</small></div>
    <div class="stock-kpi"><span>CutMan quantity</span><strong>${cutting.toLocaleString()}</strong><small>Cutting area</small></div>
    <div class="stock-kpi"><span>Imported records</span><strong>${latest?.records || 0}</strong><small>Latest file</small></div>
    <div class="stock-kpi accent"><span>Import status</span><strong class="stock-status-value">${latest?.status || 'No Import'}</strong><small>${latest?.date || '—'}</small></div>
  </div>
  <div class="card stock-panel">
    <div class="stock-panel-head"><div><h3>Import History</h3><span>${cutmanImports.length} files</span></div>${tableExportActions('cutmanHistoryTable','CutMan Import History')}</div>
    <div class="table-scroll"><table id="cutmanHistoryTable" class="stock-table"><thead><tr><th>File</th><th>Imported At</th><th>Records</th><th>Imported By</th><th>Status</th></tr></thead><tbody>${cutmanImports.map(item => `<tr><td><strong>${item.file}</strong></td><td class="mono">${item.date}</td><td class="mono stock-qty-primary">${item.records}</td><td>${item.importedBy || 'Warehouse Personnel'}</td><td>${statusBadge(item.status,'success')}</td></tr>`).join('')}</tbody></table></div>
  </div>
</section>`;
    }

    function importCutmanFile(input) {
      const file = input.files?.[0];
      if (!file) return;
      const now = new Date().toISOString().slice(0,16).replace('T',' ');
      const record = { file:file.name,date:now.slice(0,10),importedAt:now,records:Math.max(1,Math.round(file.size / 180)),status:'Imported',importedBy:productionActor() };
      cutmanImports.unshift(record);
      AUDIT_LOGS.unshift({ id:`AUD-${16300 + AUDIT_LOGS.length}`,date:now,user:productionActor(),module:'CutMan',action:'CutMan file imported',entity:file.name,project:'—',po:'—',evidence:file.name,details:`${record.records} cutting records imported and WIP balances reconciled.` });
      renderAll();
      openModal('CutMan file imported',`${file.name} · ${record.records} records processed.`);
    }

    function pageWhCutting() {
      const material = MATERIALS.find(item => item.code === stockTransferDraft.code) || MATERIALS[0];
      return `<section class="stock-shell">
  <div class="stock-command-bar"><div><span>Warehouse Operation</span><h2>WIP Transfer</h2></div><div class="stock-page-actions"><button class="btn" onclick="navigate('stock-cutman')">${icon('chevLeft','')} CutMan</button><button class="btn" onclick="navigate('stock-history')">${icon('history','')} History</button></div></div>
  <div class="stock-workspace-grid">
    <div class="card stock-form-card">
      <div class="stock-panel-head"><h3>Transfer Quantity</h3>${statusBadge('Manual','neutral')}</div>
      <div class="stock-form-grid">
        <div class="stock-field full"><label>Material</label><select onchange="stockTransferDraft.code=this.value;renderPage()">${MATERIALS.map(m => `<option value="${m.code}" ${stockTransferDraft.code === m.code ? 'selected' : ''}>${m.code} · ${m.desc}</option>`).join('')}</select></div>
        <div class="stock-field"><label>Available WIP</label><input value="${material.wip}" disabled/></div>
        <div class="stock-field"><label>Quantity</label><input type="number" min="1" max="${material.wip}" value="${stockTransferDraft.qty || ''}" oninput="stockTransferDraft.qty=Number(this.value)"/></div>
        <div class="stock-field full"><label>Destination</label><select onchange="stockTransferDraft.destination=this.value"><option value="Cutting" ${stockTransferDraft.destination === 'Cutting' ? 'selected' : ''}>Cutting</option><option value="Warehouse" ${stockTransferDraft.destination === 'Warehouse' ? 'selected' : ''}>Warehouse</option></select></div>
      </div>
      <div class="stock-form-actions"><button class="btn primary" onclick="executeWipTransfer()">${icon('check','')} Execute Transfer</button></div>
    </div>
    <div class="card stock-panel"><div class="stock-panel-head"><h3>Recent Transfers</h3>${tableExportActions('wipTransferTable','WIP Transfers')}</div><div class="table-scroll"><table id="wipTransferTable" class="stock-table"><thead><tr><th>Material</th><th>Quantity</th><th>From</th><th>To</th><th>Date</th><th>Performed By</th></tr></thead><tbody>${stockTransferLogs.map(log => `<tr onclick="openMaterialDetail('${log.code}')"><td><strong class="mono">${log.code}</strong></td><td class="mono stock-qty-primary">${Number(log.qty).toLocaleString()}</td><td>${log.from}</td><td>${log.to}</td><td class="mono">${log.date}</td><td>${log.by}</td></tr>`).join('')}</tbody></table></div></div>
  </div>
</section>`;
    }

    function executeWipTransfer() {
      const material = MATERIALS.find(item => item.code === stockTransferDraft.code);
      const qty = Number(stockTransferDraft.qty || 0);
      if (!material || !(qty > 0) || qty > material.wip) return openModal('Check transfer quantity','Quantity must be greater than zero and cannot exceed available WIP.');
      material.wip -= qty;
      if (stockTransferDraft.destination === 'Warehouse') material.warehouse += qty;
      else material.cutman += qty;
      const now = new Date().toISOString().slice(0,16).replace('T',' ');
      const log = { code:material.code,qty,from:'WIP',to:stockTransferDraft.destination,date:now,by:productionActor() };
      stockTransferLogs.unshift(log);
      AUDIT_LOGS.unshift({ id:`AUD-${16400 + AUDIT_LOGS.length}`,date:now,user:productionActor(),module:'WIP Transfer',action:'Material quantity transferred',entity:material.code,project:'—',po:'—',details:`${qty} units moved from WIP to ${stockTransferDraft.destination}.` });
      stockTransferDraft.qty = 0;
      renderAll();
      openModal('Transfer completed',`${material.code} · ${qty.toLocaleString()} units moved to ${log.to}.`);
    }

    function pageThresholds() {
      const low = MATERIALS.filter(m => m.warehouse < getThreshold(m.code)).length;
      const modified = MATERIALS.filter(m => thresholdOverrides.hasOwnProperty(m.code) && thresholdOverrides[m.code] !== THRESHOLD_DEFAULTS[m.code]).length;
      return `<section class="stock-shell">
  <div class="stock-command-bar"><div><span>Inventory Control</span><h2>Low-Stock Thresholds</h2></div><div class="stock-page-actions"><button class="btn" onclick="navigate('stock-dashboard')">${icon('chevLeft','')} Stock Dashboard</button><button class="btn" onclick="navigate('stock-history')">${icon('history','')} History</button></div></div>
  <div class="stock-mini-kpis"><div><span>Controlled materials</span><strong>${MATERIALS.length}</strong></div><div><span>Below threshold</span><strong class="stock-danger-text">${low}</strong></div><div><span>Modified values</span><strong>${modified}</strong></div><div><span>Access</span><strong class="stock-status-value">${can('editThresholds') === true ? 'Editable' : 'Read Only'}</strong></div></div>
  <div class="card stock-panel">
    <div class="stock-panel-head"><div><h3>Threshold Register</h3><span>${can('editThresholds') === true ? 'Select a threshold value to edit' : 'View-only access'}</span></div>${tableExportActions('stockThresholdTable','Stock Thresholds')}</div>
    <div class="table-scroll"><table id="stockThresholdTable" class="stock-table threshold-table">
      <thead><tr><th>Material</th><th>Warehouse</th><th>Threshold</th><th>Default</th><th>Gap</th><th>Updated By</th><th>Status</th></tr></thead>
      <tbody>${MATERIALS.map(m => {
        const current = getThreshold(m.code);
        const low = m.warehouse < current;
        const isModified = thresholdOverrides.hasOwnProperty(m.code) && thresholdOverrides[m.code] !== THRESHOLD_DEFAULTS[m.code];
        return `<tr>
          <td onclick="openMaterialDetail('${m.code}')"><strong class="mono">${m.code}</strong><span>${m.desc}</span></td>
          <td class="mono stock-qty-primary">${m.warehouse.toLocaleString()}</td>
          <td>${thresholdCell(m)}</td>
          <td class="mono">${THRESHOLD_DEFAULTS[m.code].toLocaleString()}</td>
          <td class="mono ${m.warehouse-current < 0 ? 'stock-danger-text' : ''}">${(m.warehouse-current).toLocaleString()}</td>
          <td>${isModified ? 'A. Haddad' : '—'}</td>
          <td>${statusBadge(low ? 'Below Threshold' : 'OK', low ? 'danger' : 'success')}</td>
        </tr>`;
      }).join('')}</tbody>
    </table></div>
  </div>
</section>`;
    }

    /* ============ PO PDF INTAKE — M02 five-step extraction workflow ============ */
    function poEsc(value) {
      return String(value == null ? '' : value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[char]));
    }

    function poMoney(value) {
      return new Intl.NumberFormat('en-GB', { style:'currency', currency:poExtraction.currency || 'EUR' }).format(Number(value) || 0);
    }

    function poStatusBadge(status) {
      const tone = status === 'Validated' ? 'success' : status === 'Corrected by user' ? 'info' : status === 'Missing' ? 'danger' : status === 'Mismatch' ? 'warning' : 'neutral';
      return statusBadge(status, tone);
    }

    function poHeaderStatus(key) {
      if (poIntake.correctedFields.has(key)) return 'Corrected by user';
      if (key === 'totals_match' && !poExtraction.totals_match) return 'Mismatch';
      if (key === 'stated_total' && !poExtraction.totals_match) return 'Mismatch';
      const value = poExtraction[key];
      return value === '' || value == null ? 'Not Applicable' : (poIntake.validated ? 'Validated' : 'Extracted');
    }

    function poLineStatus(index) {
      const prefix = `${index}.`;
      return [...poIntake.correctedLines].some(key => key.startsWith(prefix)) ? 'Corrected by user' : (poIntake.validated ? 'Validated' : 'Extracted');
    }

    function poRecalculateTotals() {
      poExtraction.lines.forEach(line => { line.total = Number(((Number(line.quantity) || 0) * (Number(line.unit_price) || 0)).toFixed(2)); });
      poExtraction.line_count = poExtraction.lines.length;
      poExtraction.computed_total = Number(poExtraction.lines.reduce((sum, line) => sum + line.total, 0).toFixed(2));
      poExtraction.totals_match = Math.abs(Number(poExtraction.stated_total) - poExtraction.computed_total) < .01;
    }

    function poValidationIssues() {
      const requiredHeader = ['po_number','version','order_date','supplier_name','buyer_name','delivery_contact','delivery_address','contact_name','contact_tel','contact_email','currency','jit_customer','development_level','reason_of_purchase'];
      const issues = requiredHeader.filter(key => !String(poExtraction[key] == null ? '' : poExtraction[key]).trim()).map(key => `${key.replaceAll('_',' ')} is missing`);
      poExtraction.lines.forEach((line, index) => {
        ['line_no','plant','due_date','part_number','description','quantity','unit_price'].forEach(key => {
          const missing = line[key] === '' || line[key] == null || ((key === 'quantity' || key === 'unit_price') && Number(line[key]) <= 0);
          if (missing) issues.push(`Line ${index + 1}: ${key.replaceAll('_',' ')} is missing`);
          else if (key === 'plant' && !/^\d{4}$/.test(String(line[key]))) issues.push(`Line ${index + 1}: plant must contain exactly four digits`);
        });
      });
      const plantCodes = new Set(poExtraction.lines.map(line => String(line.plant || '').trim()).filter(Boolean));
      if (plantCodes.size > 1) issues.push('All PO line items must use the same four-digit plant code');
      if (!poExtraction.totals_match) issues.push('Stated total does not match the computed line total');
      return issues;
    }

    function poSelectFile(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        event.target.value = '';
        openModal('Only PDF files are accepted', 'The selected file is not a PDF. Choose a Covers Purchase Order document in PDF format.');
        return;
      }
      poIntake.fileName = file.name;
      poIntake.fileSize = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
      poIntake.uploadedAt = new Date().toLocaleString('en-GB');
      poIntake.sourceFile = file;
      poIntake.extracted = false;
      poIntake.validated = false;
      renderPage();
    }

    function poUseExampleFile() {
      poIntake.fileName = 'Covers_PO_4500127841.pdf';
      poIntake.fileSize = '1.84 MB';
      poIntake.uploadedAt = new Date().toLocaleString('en-GB');
      poIntake.sourceFile = null;
      poIntake.extracted = false;
      poIntake.validated = false;
      renderPage();
    }

    function poContinueUpload() {
      if (!poIntake.project) { openModal('Project required', 'Select an existing project before submitting a purchase order.'); return; }
      if (!poIntake.fileName) { openModal('PDF required', 'Upload a purchase order PDF or load the example PDF before continuing.'); return; }
      poIntake.step = 2;
      renderPage();
    }

    function poStartExtraction() {
      poIntake.extracted = true;
      poIntake.validated = false;
      poValidationPage = 1;
      poIntake.step = 3;
      poRecalculateTotals();
      renderPage();
    }

    function poValidateExtraction() {
      poRecalculateTotals();
      const issues = poValidationIssues();
      poIntake.validated = issues.length === 0;
      poIntake.validationMessage = issues.length ? `${issues.length} blocking issue${issues.length === 1 ? '' : 's'} must be corrected.` : `All required header fields and ${poExtraction.line_count} line items are valid.`;
      if (issues.length) openModal('Validation requires attention', issues.slice(0, 5).join(' · '));
      renderPage();
    }

    function poSetHeaderField(key, value) {
      poExtraction[key] = key === 'stated_total' ? Number(value) : value;
      poIntake.correctedFields.add(key);
      poIntake.validated = false;
      poRecalculateTotals();
      renderPage();
    }

    function poSetLineField(index, key, value) {
      if (key === 'plant') {
        const plantCode = String(value || '').replace(/\D/g,'').slice(0,4);
        poExtraction.lines.forEach((line,lineIndex) => { line.plant = plantCode; poIntake.correctedLines.add(`${lineIndex}.plant`); });
      } else {
        poExtraction.lines[index][key] = key === 'quantity' || key === 'unit_price' ? Number(value) : value;
        poIntake.correctedLines.add(`${index}.${key}`);
      }
      poIntake.validated = false;
      poRecalculateTotals();
      renderPage();
    }

    function poSetReviewTab(tab) { poIntake.reviewTab = tab; renderPage(); }
    function poSetLineSearch(value) { poIntake.lineSearch = value; renderPage(); }
    function setPoValidationPage(page) {
      const totalPages = Math.max(1,Math.ceil(poExtraction.lines.length / 10));
      poValidationPage = Math.max(1,Math.min(Number(page) || 1,totalPages));
      renderPage();
    }

    function poSaveExtraction() {
      poRecalculateTotals();
      const issues = poValidationIssues();
      if (!poIntake.validated || issues.length) {
        openModal('Validation required', 'Validate the extracted purchase order after completing any corrections before saving it.');
        return;
      }
      const targetProject = PROJECTS.find(project => project.name === poIntake.project);
      if (!targetProject) {
        openModal('Project required', 'M01 requires the parent project to exist before a purchase order can be saved. Create or select a valid project first.');
        return;
      }
      if (!canWriteProject(targetProject)) {
        openModal('Project access is read-only', `You cannot save a purchase order to ${targetProject.name}. Select a project assigned to your account.`);
        return;
      }
      const storedId = `PO-${poExtraction.po_number}`;
      const uniqueLines = [...new Map(poExtraction.lines.map(line => [line.part_number, line])).values()];
      PO_EXTRACTION_RECORDS.set(storedId,JSON.parse(JSON.stringify(poExtraction)));
      PO_SOURCE_FILES.set(storedId,{ file:poIntake.sourceFile, name:poIntake.fileName || `${storedId}_v${poExtraction.version}.pdf` });
      if (!POS.some(po => po.id === storedId)) {
        POS.unshift({ id:storedId, project:poIntake.project, customer:poExtraction.jit_customer, version:`v${poExtraction.version}`, pnCount:uniqueLines.length, status:'Waiting BOM', statusType:'warning', date:poExtraction.order_date, delivery:poExtraction.lines[0]?.due_date || '', simStatus:'Not Run', simType:'neutral' });
        const workOrderBase = 1200 + PRODUCTION_ORDERS.length;
        uniqueLines.forEach(line => {
          if (!PNS.some(pn => pn.pn === line.part_number && pn.po === storedId)) {
            PNS.push({ pn:line.part_number, po:storedId, project:poIntake.project, desc:line.description, qty:Number(line.quantity || 0), unitPrice:Number(line.unit_price || 0), currency:poExtraction.currency || 'EUR', version:'—', status:'Waiting BOM', statusType:'warning', bom:'Missing', bomFile:'—', bomUpdated:'—' });
          }
          PRODUCTION_ORDERS.push({ id:`WO-${workOrderBase + PRODUCTION_ORDERS.filter(order => order.po === storedId).length + 1}`, po:storedId, project:poIntake.project, customer:poExtraction.jit_customer, fgpn:line.part_number, qty:Number(line.quantity || 0), produced:0, packaged:0, status:'Unplanned', due:line.due_date || 'Not set', line:'Not assigned', updatedBy:productionActor(), updatedAt:'Just now', priority:false });
        });
        recordPoLifecycleChange(storedId,null,'Unplanned',productionActor(),'Purchase order uploaded, extracted, validated and created',poIntake.fileName || `${storedId}.pdf`);
      } else {
        const existingPo = POS.find(po => po.id === storedId);
        const previousVersion = existingPo.version;
        const nextVersion = `v${poExtraction.version}`;
        existingPo.version = nextVersion;
        existingPo.pnCount = uniqueLines.length;
        existingPo.date = poExtraction.order_date;
        existingPo.delivery = poExtraction.lines[0]?.due_date || existingPo.delivery;
        uniqueLines.forEach(line => {
          let pn = PNS.find(item => item.pn === line.part_number && item.po === storedId);
          if (!pn) {
            pn = { pn:line.part_number, po:storedId, project:poIntake.project, desc:line.description, qty:Number(line.quantity || 0), version:'—', status:'Waiting BOM', statusType:'warning', bom:'Missing', bomFile:'—', bomUpdated:'—' };
            PNS.push(pn);
            PRODUCTION_ORDERS.push({ id:`WO-${1200 + PRODUCTION_ORDERS.length + 1}`, po:storedId, project:poIntake.project, customer:poExtraction.jit_customer, fgpn:line.part_number, qty:Number(line.quantity || 0), produced:0, packaged:0, status:'Unplanned', due:line.due_date || 'Not set', line:'Not assigned', updatedBy:productionActor(), updatedAt:'Just now', priority:false });
          } else {
            pn.desc = line.description; pn.qty = Number(line.quantity || 0); pn.unitPrice = Number(line.unit_price || 0); pn.currency = poExtraction.currency || 'EUR';
            const order = PRODUCTION_ORDERS.find(item => item.po === storedId && item.fgpn === line.part_number && item.status === 'Unplanned');
            if (order) { order.qty = Number(line.quantity || 0); order.due = line.due_date || order.due; order.updatedBy = productionActor(); order.updatedAt = 'Just now'; }
          }
        });
        const now = new Date().toISOString().slice(0,16).replace('T',' ');
        AUDIT_LOGS.unshift({ id:`AUD-${10300 + AUDIT_LOGS.length}`, date:now, user:productionActor(), module:'Purchase Order', action:previousVersion === nextVersion ? 'PO information updated' : 'Version Changed', entity:`${storedId} · ${nextVersion}`, project:existingPo.project, po:storedId, evidence:poIntake.fileName || `${storedId}_${nextVersion}.pdf`, details:`Validated PO update stored with ${uniqueLines.length} part numbers and ${poExtraction.line_count} extracted lines. Original PDF retained: ${poIntake.fileName || `${storedId}_${nextVersion}.pdf`}.`, diff:{ field:'Version', old:previousVersion, new:nextVersion } });
      }
      poIntake.saved = true;
      poIntake.storedRecordId = storedId;
      poIntake.step = 5;
      renderPage();
    }

    function poResetIntake() {
      const projectName = poIntake.project;
      resetPoIntakeState(projectName);
      renderPage();
    }

    function resetPoIntakeState(projectName = '') {
      poExtraction = JSON.parse(JSON.stringify(PO_EXTRACTION_SAMPLE));
      poValidationPage = 1;
      const project = writableProjects().find(item => item.name === projectName) || writableProjects()[0];
      poIntake = { step:1, project:project?.name || '', fileName:'', fileSize:'', uploadedAt:'', extracted:false, validated:false, saved:false, reviewTab:'header', lineSearch:'', correctedFields:new Set(), correctedLines:new Set(), validationMessage:'', storedRecordId:'', sourceFile:null };
    }

    function startPoUpload(projectName = '', poId = '') {
      const po = POS.find(item => item.id === poId);
      const targetProject = projectName || po?.project || writableProjects()[0]?.name || '';
      resetPoIntakeState(targetProject);
      if (po) {
        openContext.po = po.id;
        openContext.project = po.project;
        poExtraction.po_number = po.id.replace(/^PO-/, '');
        poExtraction.version = String((Number(String(po.version || 'v0').replace(/\D/g,'')) || 0) + 1);
        poExtraction.jit_customer = po.customer;
      } else if (targetProject) {
        openContext.project = targetProject;
      }
      navigate('po-upload');
    }

    function poIntakeStepper() {
      const labels = ['Upload PDF','Extract','Review','Validate','Confirm'];
      return `<div class="po-intake-stepper">${labels.map((label, index) => {
        const number = index + 1;
        const state = number < poIntake.step ? 'done' : number === poIntake.step ? 'active' : '';
        return `<div class="po-intake-step ${state}"><div class="po-intake-step-index">${number < poIntake.step ? '✓' : number}</div><div class="po-intake-step-label">${label}</div></div>`;
      }).join('')}</div>`;
    }

    function poFileSummary() {
      return `<div class="po-file-card"><div class="po-file-icon">${icon('FileText','')}</div><div style="min-width:0;flex:1;"><div class="po-file-name">${poEsc(poIntake.fileName)}</div><div class="po-file-meta">${poEsc(poIntake.fileSize)} · ${poEsc(poIntake.uploadedAt)}</div></div>${statusBadge('PDF accepted','success')}</div>`;
    }

    function poHeaderSections() {
      return [
        { title:'Order identification', fields:[['po_number','PO Number'],['version','Version'],['order_date','Order Date','date'],['change_date','Change Date','date'],['currency','Currency'],['reason_of_purchase','Reason of Purchase','wide']] },
        { title:'Supplier', fields:[['supplier_no','Supplier No.'],['supplier_name','Supplier Name','wide'],['supplier_address','Supplier Address','full']] },
        { title:'Buyer and invoicing', fields:[['buyer_name','Buyer Name','wide'],['buyer_vat','Buyer VAT'],['buyer_register_nr','Buyer Register No.'],['invoicing_party_taxid','Invoicing Party Tax ID'],['payment_terms','Payment Terms'],['incoterms','Incoterms']] },
        { title:'Delivery and contact', fields:[['delivery_contact','Delivery Contact'],['delivery_address','Delivery Address','wide'],['contact_name','Contact Name'],['contact_tel','Contact Telephone'],['contact_email','Contact Email'],['jit_customer','JIT Customer'],['development_level','Development Level'],['engineering_phase','Engineering Phase']] },
        { title:'Document text', fields:[['header_text','Header Text','full']] },
        { title:'Totals', fields:[['stated_total','Stated Total','number'],['computed_total','Computed Total','readonly'],['totals_match','Totals Match','readonly']] },
      ];
    }

    function poHeaderField(key, label, option) {
      const status = poHeaderStatus(key);
      const wideClass = option === 'wide' ? 'wide' : option === 'full' ? 'full' : '';
      const corrected = status === 'Corrected by user' ? 'corrected' : '';
      let value = poExtraction[key];
      if (key === 'computed_total') value = poMoney(value);
      if (key === 'totals_match') value = value ? 'Yes — totals match' : 'No — discrepancy detected';
      const readonly = option === 'readonly';
      return `<div class="po-field ${wideClass} ${corrected}"><div class="po-field-head"><label class="po-field-label">${label}</label><span class="po-field-status">${poStatusBadge(status)}</span></div><input class="po-extract-input" type="${option === 'date' ? 'date' : option === 'number' ? 'number' : 'text'}" value="${poEsc(value)}" ${readonly ? 'readonly' : `onchange="poSetHeaderField('${key}', this.value)"`}></div>`;
    }

    function poHeaderReview() {
      return poHeaderSections().map(section => `<div class="po-field-section"><div class="po-field-section-title"><span>${section.title}</span></div><div class="po-field-grid">${section.fields.map(field => poHeaderField(field[0], field[1], field[2])).join('')}</div></div>`).join('');
    }

    function poLineInput(index, key, numeric = false) {
      const line = poExtraction.lines[index];
      const plant = key === 'plant';
      return `<input class="po-line-input ${numeric || plant ? 'numeric' : ''}" type="${numeric ? 'number' : 'text'}" value="${poEsc(line[key])}" ${plant ? 'inputmode="numeric" maxlength="4" pattern="[0-9]{4}" title="Four-digit plant code; applies to every line"' : ''} onchange="poSetLineField(${index}, '${key}', this.value)">`;
    }

    function poLinesReview() {
      const q = poIntake.lineSearch.trim().toLowerCase();
      const filtered = poExtraction.lines.map((line, index) => ({ line, index })).filter(item => !q || Object.values(item.line).join(' ').toLowerCase().includes(q));
      return `<div class="po-lines-toolbar"><div><div class="section-title" style="margin:0;">Extracted Line Items</div><div class="hint">${filtered.length} of ${poExtraction.line_count}</div></div><div style="display:flex;gap:8px;"><input class="sim-select po-lines-search" value="${poEsc(poIntake.lineSearch)}" placeholder="Search part number or description…" onchange="poSetLineSearch(this.value)"><button class="btn sm" onclick="poSetLineSearch(document.querySelector('.po-lines-search').value)">${icon('search','')} Search</button></div></div>
      <div class="table-scroll"><table class="po-lines-table"><thead><tr><th>Line</th><th>Plant</th><th>Due Date</th><th>Material Group</th><th>Part Number</th><th>Description</th><th>Customer Ref.</th><th>Category</th><th>Qty</th><th>Unit Price</th><th>Total</th><th>Review Status</th></tr></thead><tbody>${filtered.map(({line,index}) => `<tr><td>${poLineInput(index,'line_no')}</td><td>${poLineInput(index,'plant')}</td><td>${poLineInput(index,'due_date')}</td><td>${poLineInput(index,'material_group')}</td><td>${poLineInput(index,'part_number')}</td><td style="min-width:210px;">${poLineInput(index,'description')}</td><td>${poLineInput(index,'customer_part_ref')}</td><td>${poLineInput(index,'item_category')}</td><td>${poLineInput(index,'quantity',true)}</td><td>${poLineInput(index,'unit_price',true)}</td><td class="mono" style="text-align:right;">${poMoney(line.total)}</td><td>${poStatusBadge(poLineStatus(index))}</td></tr>`).join('')}</tbody></table></div>`;
    }

    function poUploadStep() {
      return `<div class="card" style="max-width:920px;margin:0 auto;"><div class="section-title">Step 1 — Upload Purchase Order</div><div class="sim-field"><label class="sim-field-label">Project <span style="color:var(--danger);">*</span></label><select class="sim-select" onchange="poIntake.project=this.value">${writableProjects().map(project => `<option value="${poEsc(project.name)}" ${poIntake.project === project.name ? 'selected' : ''}>${poEsc(project.name)} · ${poEsc(project.customer)}</option>`).join('')}</select></div><input id="poPdfInput" type="file" accept="application/pdf,.pdf" style="display:none;" onchange="poSelectFile(event)"><label class="po-dropzone" for="poPdfInput"><div class="po-dropzone-icon">${icon('upload','')}</div><div class="po-dropzone-title">Choose a purchase order PDF</div><div class="po-dropzone-copy">PDF · maximum 10 MB</div><span class="btn sm primary" style="margin-top:14px;pointer-events:none;">Browse PDF</span></label>${poIntake.fileName ? poFileSummary() : ''}<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:15px;"><button class="btn sm" onclick="poUseExampleFile()">Use Example PDF</button><button class="btn primary" onclick="poContinueUpload()">Continue ${icon('chevRight','')}</button></div></div>`;
    }

    function poExtractStep() {
      return `<div class="card" style="max-width:920px;margin:0 auto;"><div class="section-title">Step 2 — Extract Purchase Order</div>${poFileSummary()}<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-top:18px;"><button class="btn" onclick="poIntake.step=1;renderPage()">Back</button><button class="btn primary" onclick="poStartExtraction()">Run Extraction ${icon('chevRight','')}</button></div></div>`;
    }

    function poValidateStep() {
      const previewFields = [['PO Number',poExtraction.po_number],['Supplier',poExtraction.supplier_name],['Buyer',poExtraction.buyer_name],['Delivery Contact',poExtraction.delivery_contact],['Currency',poExtraction.currency],['Stated Total',poMoney(poExtraction.stated_total)]];
      const pageSize = 10;
      const totalPages = Math.max(1,Math.ceil(poExtraction.lines.length / pageSize));
      poValidationPage = Math.min(poValidationPage,totalPages);
      const pageLines = poExtraction.lines.slice((poValidationPage - 1) * pageSize,poValidationPage * pageSize);
      return `<div class="po-extract-kpis"><div class="po-extract-kpi"><div class="po-extract-kpi-label">Header fields</div><div class="po-extract-kpi-value">27</div></div><div class="po-extract-kpi"><div class="po-extract-kpi-label">Line items</div><div class="po-extract-kpi-value">${poExtraction.line_count}</div></div><div class="po-extract-kpi"><div class="po-extract-kpi-label">Computed total</div><div class="po-extract-kpi-value">${poMoney(poExtraction.computed_total)}</div></div><div class="po-extract-kpi"><div class="po-extract-kpi-label">Totals match</div><div class="po-extract-kpi-value" style="color:${poExtraction.totals_match ? '#16844B' : 'var(--danger)'};">${poExtraction.totals_match ? 'Yes' : 'No'}</div></div></div><div class="card"><div class="section-title"><span>Step 4 — Final Validation</span>${statusBadge(poIntake.validated ? 'Validation passed' : 'Pending validation',poIntake.validated ? 'success' : 'warning')}</div><div class="po-preview-grid">${previewFields.map(field => `<div class="po-preview-field"><div class="po-preview-label">${field[0]}</div><div class="po-preview-value">${poEsc(field[1])}</div></div>`).join('')}</div><div class="section-title" style="margin-top:20px;"><span>Line Items</span><span class="hint">10 rows per page</span></div><div class="table-scroll"><table id="poValidationLinesTable"><thead><tr><th>Line</th><th>Plant</th><th>Due Date</th><th>Material Group</th><th>Part Number</th><th>Description</th><th>Customer Ref.</th><th>Category</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead><tbody>${pageLines.map(line => `<tr><td class="mono">${line.line_no}</td><td>${line.plant || '—'}</td><td class="mono">${line.due_date}</td><td>${line.material_group}</td><td class="mono">${line.part_number}</td><td>${line.description}</td><td class="mono">${line.customer_part_ref}</td><td>${line.item_category}</td><td class="mono">${line.quantity}</td><td class="mono">${poMoney(line.unit_price)}</td><td class="mono">${poMoney(line.total)}</td></tr>`).join('')}</tbody></table></div>${paginationBar(poExtraction.lines.length,poValidationPage,pageSize,'setPoValidationPage')}<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-top:16px;"><button class="btn" onclick="poIntake.step=3;renderPage()">Back to Review</button><div style="display:flex;flex-wrap:wrap;gap:8px;">${!poIntake.validated ? `<button class="btn primary" onclick="poValidateExtraction()">${icon('check','')} Run Final Validation</button>` : `${poDocumentDownloadButtons('draft',true)}<button class="btn" onclick="poValidateExtraction()">Validate Again</button><button class="btn primary" onclick="poSaveExtraction()">${icon('lock','')} Confirm & Save PO</button>`}</div></div></div>`;
    }

    function poReviewStep() {
      const tabs = [['header','Header Data'],['lines',`Line Items (${poExtraction.line_count})`]];
      const reviewBody = poIntake.reviewTab === 'lines' ? poLinesReview() : poHeaderReview();
      const corrections = poIntake.correctedFields.size + poIntake.correctedLines.size;
      return `<div class="card"><div class="section-title"><span>Step 3 — Review Extracted Information</span>${statusBadge(`${corrections} correction${corrections === 1 ? '' : 's'}`,corrections ? 'info' : 'neutral')}</div><div class="po-review-tabs">${tabs.map(tab => `<button class="po-review-tab ${poIntake.reviewTab === tab[0] ? 'active' : ''}" onclick="poSetReviewTab('${tab[0]}')">${tab[1]}</button>`).join('')}</div>${reviewBody}<div class="po-review-actions"><span class="hint">${poExtraction.line_count} extracted line items</span><div style="display:flex;flex-wrap:wrap;gap:8px;">${poDocumentDownloadButtons('draft',true)}<button class="btn" onclick="poIntake.step=2;renderPage()">Back</button><button class="btn primary" onclick="poIntake.step=4;poIntake.validated=false;renderPage()">Continue to Validation ${icon('chevRight','')}</button></div></div></div>`;
    }

    function poConfirmStep() {
      return `<div class="card po-save-success"><div class="po-save-success-icon">${icon('check','')}</div><div class="po-save-success-title">Purchase Order Saved</div><div class="po-save-success-copy">${poEsc(poIntake.storedRecordId)} · Version V${poEsc(poExtraction.version)}</div><div class="po-extract-kpis" style="max-width:760px;margin:24px auto 0;text-align:left;"><div class="po-extract-kpi"><div class="po-extract-kpi-label">Project</div><div class="po-extract-kpi-value" style="font-size:14px;">${poEsc(poIntake.project)}</div></div><div class="po-extract-kpi"><div class="po-extract-kpi-label">PO version</div><div class="po-extract-kpi-value">V${poEsc(poExtraction.version)}</div></div><div class="po-extract-kpi"><div class="po-extract-kpi-label">Line items</div><div class="po-extract-kpi-value">${poExtraction.line_count}</div></div><div class="po-extract-kpi"><div class="po-extract-kpi-label">Stored total</div><div class="po-extract-kpi-value" style="font-size:14px;">${poMoney(poExtraction.computed_total)}</div></div></div><div style="display:flex;justify-content:center;flex-wrap:wrap;gap:9px;margin-top:22px;">${poDocumentDownloadButtons(poIntake.storedRecordId)}<button class="btn" onclick="poResetIntake()">Upload Another PO</button><button class="btn" onclick="navigateBack('po-list')">Return</button><button class="btn primary" onclick="openPo('${inlineJsValue(poIntake.storedRecordId)}','Overview',{replace:true})">Open PO Workspace</button></div></div>`;
    }

    function pageUploadWizard() {
      const content = poIntake.step === 1 ? poUploadStep() : poIntake.step === 2 ? poExtractStep() : poIntake.step === 3 ? poReviewStep() : poIntake.step === 4 ? poValidateStep() : poConfirmStep();
      return `${poIntakeStepper()}${content}`;
    }

    function pagePnBomUpload() {
      const pnId = openContext.pn;
      return focusedBomImportPanel('pn',pnId);
    }

    function pageHistory() {
      const events = stockLedgerEvents();
      const movementCount = events.filter(event => /transfer|reception|stock updated/i.test(`${event.module} ${event.action}`)).length;
      const people = new Set(events.map(event => event.actor)).size;
      const materials = new Set(events.map(event => event.entity).filter(value => /^MAT-/i.test(value))).size;
      return `<section class="stock-shell">
  <div class="stock-command-bar"><div><span>Inventory Traceability</span><h2>Stock Movement History</h2></div><div class="stock-page-actions"><button class="btn" onclick="navigate('stock-dashboard')">${icon('chevLeft','')} Stock Dashboard</button></div></div>
  <div class="stock-mini-kpis"><div><span>Recorded events</span><strong>${events.length}</strong></div><div><span>Stock movements</span><strong>${movementCount}</strong></div><div><span>Materials</span><strong>${materials}</strong></div><div><span>People involved</span><strong>${people}</strong></div></div>
  ${traceabilityWorkspace(events,'Complete stock history','completeStockHistoryTable')}
</section>`;
    }

    function pageReports() {
      return `<div class="card"><div class="section-title">Reports <span class="hint">Read-only</span></div>
    <div class="empty-state">
      ${icon('reports', '')}
      <div class="e-title">No report generated yet</div>
      <div class="e-sub">Reports summarize project, PO, and stock activity across the plant. Select a date range to generate one.</div>
    </div>
  </div>`;
    }

    function pageProfile() {
      const person = ROLE_PERSONA[currentRole];
      const account = ADMIN_USERS.find(user => user.fullName === person.name);
      const projects = account?.projects || [];
      const auditAliases = {
        engineer: ['A. Rahal','A. Haddad'],
        manager: ['S. Ait Oubou','S. Amrani'],
        plant: ['K. Benali'],
        wh_lead: ['M. El Idrissi'],
        wh_staff: ['I. Chafai'],
        prod_coord: ['Y. Mansouri'],
        admin: ['R. Benali'],
      };
      const recentActivity = AUDIT_LOGS
        .filter(event => (auditAliases[currentRole] || [account?.name]).includes(event.user))
        .slice(0,5);
      const accessCopy = currentRole === 'manager'
        ? 'Portfolio visibility across all projects. Changes are limited to assigned projects.'
        : currentRole === 'engineer'
          ? 'Operational access to assigned projects and their launch workflows.'
          : currentRole === 'admin'
            ? 'System-wide administration without operational record ownership.'
            : 'Role-specific operational access for the current workspace.';
      const allowedActions = Object.entries(PERMISSIONS)
        .filter(([, rule]) => rule[currentRole] === true || typeof rule[currentRole] === 'string')
        .slice(0,8)
        .map(([key]) => key.replace(/([A-Z])/g,' $1').replace(/^./, value => value.toUpperCase()));
      const activityAction = currentRole === 'admin'
        ? `<button class="btn sm" onclick="navigate('admin-system-activity')">Open login audit</button>`
        : can('viewAudit')
          ? `<button class="btn sm" onclick="navigate('audit-logs')">Open audit</button>`
          : '';
      return `<section class="profile-shell">
    <div class="profile-identity">
      <div class="profile-avatar">${person.initials}</div>
      <div class="profile-title">
        <span class="profile-eyebrow">User profile</span>
        <h2>${person.name}</h2>
        <p>${ROLE_LABEL[currentRole]}</p>
      </div>
      <div class="profile-actions">
        <button class="btn" onclick="openModal('Profile editing','Profile editing will be connected to authenticated user accounts.')">${icon('edit','')} Edit profile</button>
        <button class="btn" onclick="openModal('Password security','Password changes will be enabled when authentication is connected.')">${icon('lock','')} Change password</button>
        <button class="btn" onclick="signOutDemo()">${icon('close','')} Sign out</button>
      </div>
    </div>
    <div class="profile-grid">
      <div class="card profile-section">
        <div class="profile-section-head">
          <div><span>Account</span><h3>Contact information</h3></div>
          ${statusBadge(account?.status || 'Active','success')}
        </div>
        <dl class="profile-details">
          <div><dt>Full name</dt><dd>${person.name}</dd></div>
          <div><dt>Email</dt><dd>${person.email}</dd></div>
          <div><dt>Phone</dt><dd>${account?.phone || 'Not provided'}</dd></div>
          <div><dt>Department / Site</dt><dd>${person.site}</dd></div>
          <div><dt>Username</dt><dd class="mono">${account ? `@${account.username}` : 'Demo account'}</dd></div>
          <div><dt>Authentication</dt><dd>${account?.auth || 'Demo role access'}</dd></div>
        </dl>
      </div>
      <div class="card profile-section">
        <div class="profile-section-head">
          <div><span>Access</span><h3>Role and scope</h3></div>
          ${statusBadge(ROLE_LABEL[currentRole],'info')}
        </div>
        <p class="profile-scope-copy">${accessCopy}</p>
        <div class="profile-projects">
          <span>Assigned projects</span>
          <div>${projects.length ? projects.map(project => `<button onclick="openProject('${project}')">${project}</button>`).join('') : '<small>No project-specific assignment</small>'}</div>
        </div>
        <div class="profile-permissions">
          <span>Key permissions</span>
          <div>${allowedActions.map(action => `<span>${icon('check','')} ${action}</span>`).join('')}</div>
        </div>
      </div>
      <div class="card profile-section">
        <div class="profile-section-head"><div><span>Security</span><h3>Session and account status</h3></div></div>
        <dl class="profile-details compact">
          <div><dt>Account status</dt><dd>${account?.status || 'Active'}</dd></div>
          <div><dt>Security state</dt><dd>${account?.locked ? 'Locked' : 'Unlocked'}</dd></div>
          <div><dt>Last login</dt><dd class="mono">${account?.lastLogin || 'Current demo session'}</dd></div>
          <div><dt>Failed attempts</dt><dd>${account?.failedAttempts || 0} of 5</dd></div>
          <div><dt>Session</dt><dd>Active in this browser</dd></div>
          <div><dt>Password reset</dt><dd>${account?.passwordResetRequired ? 'Required' : 'Not required'}</dd></div>
        </dl>
      </div>
      <div class="card profile-section">
        <div class="profile-section-head">
          <div><span>Activity</span><h3>Recent actions</h3></div>
          ${activityAction}
        </div>
        <div class="profile-activity">${recentActivity.length ? recentActivity.map(event => `<div><span class="profile-activity-icon">${icon('history','')}</span><p><strong>${event.action}</strong><small>${event.module} / ${event.entity}</small></p><time>${event.date}</time></div>`).join('') : '<div class="profile-no-activity">No recent actions recorded for this account.</div>'}</div>
      </div>
    </div>
  </section>`;
    }

    function pageLogin() {
      return `<div class="login-page">
    <div class="login-card">
      <div class="login-logo"><img src="./adinet-.png" alt="Adient logo"></div>
      <div class="login-title">LaunchOps PO Control</div>
      <div class="login-sub">Secure manufacturing workflow</div>
      <div class="login-field"><label>Username</label><input type="text" placeholder="Username"></div>
      <div class="login-field"><label>Password</label><input type="password" placeholder="Password"></div>
      <button class="btn primary login-button">Login</button>
    </div>
  </div>`;
    }

    /* =====================================================================
       ============ NEW MODULE: M08 — MANUFACTURING DELIVERY ==============
       ===================================================================== */
    function mfgStatusType(s) {
      return {
        Draft: 'neutral',
        'Code Generated': 'info',
        'Code Used': 'purple',
        'Document Generated': 'orange',
        'Waiting for Signed PDF': 'warning',
        'Signed Document Uploaded': 'info',
        Delivered: 'success',
        Expired: 'danger',
        'In Transit': 'info',
        'Pending Approval': 'warning',
        Cancelled: 'danger',
      }[s] || 'neutral';
    }

    function mfgTable(list, tableId = '', workspaceActions = false) {
      if (list.length === 0) return emptyStateBlock('No manufacturing deliveries', 'No deliveries match this view yet.', null);
      return `<table${tableId ? ` id="${tableId}"` : ''}><thead><tr><th>Launch</th><th>Project</th><th>PO</th><th>PNs · Launch Qty</th><th>Receiver</th><th>Required Date</th><th>Transfer</th><th>Production</th><th data-export="false">Actions</th></tr></thead>
    <tbody>${list.map(d => `<tr class="clickable-row" onclick="openMfgDelivery('${d.code}')">
      <td class="mono">${d.code}</td><td>${d.project}</td><td class="mono">${d.po}</td><td class="mono">${mfgDeliveryPnLabel(d)}</td><td>${d.receiver || '<span class="badge neutral">Awaiting Warehouse TL</span>'}</td><td>${d.date || '—'}</td>
      <td>${statusBadge(d.status, d.statusType)}</td>
      <td>${statusBadge(syncMfgDeliveryLifecycle(d),productionStatusType(d.lifecycleStatus))}</td>
      <td>${mfgActionIcons(d,workspaceActions)}</td>
    </tr>`).join('')}</tbody></table>`;
    }
    function mfgDeliveryCanBeDeleted(d) {
      return !d.docUploaded && d.status !== 'Delivered';
    }
    function workspaceCanDeleteDelivery(d) {
      const project = PROJECTS.find(item => item.name === d.project);
      return !!project && canWriteProject(project);
    }
    function workspaceDeleteIcon(type,d) {
      const manufacturing = type === 'manufacturing';
      const deletable = manufacturing ? mfgDeliveryCanBeDeleted(d) : custDeliveryCanBeDeleted(d);
      const title = deletable ? `Delete ${d.code}` : `Cannot delete ${d.code} after confirmation`;
      const action = manufacturing ? `requestDeleteMfgDelivery('${d.code}')` : `requestDeleteCustDelivery('${d.code}')`;
      return `<div class="icon-btn danger-hover${deletable ? '' : ' disabled'}" title="${title}"${deletable ? ` onclick="stop(event); ${action}"` : ''}>${icon('trash', '')}<span class="btn-tip">${title}</span></div>`;
    }
    function requestDeleteMfgDelivery(code) {
      const delivery = MFG_DELIVERIES.find(item => item.code === code);
      if (!delivery) return openModal('Delivery not found', `${code} is no longer available.`);
      if (!workspaceCanDeleteDelivery(delivery) && can('deleteMfgDelivery') !== true) return openModal('Deletion not permitted', 'Only an authorized user may delete this manufacturing delivery.');
      if (!mfgDeliveryCanBeDeleted(delivery)) return openModal('Deletion unavailable', `${code} has already been confirmed. Keep it in the history for traceability.`);
      openModal(`Delete ${code}?`, 'The manufacturing delivery will be removed and its PN quantities will become available for a new launch.', () => deleteMfgDeliveryRecord(code), 'Delete');
    }
    function deleteMfgDeliveryRecord(code) {
      const index = MFG_DELIVERIES.findIndex(item => item.code === code);
      if (index < 0 || !mfgDeliveryCanBeDeleted(MFG_DELIVERIES[index])) return;
      const [delivery] = MFG_DELIVERIES.splice(index,1);
      if (openMfgDeliveryId === code) openMfgDeliveryId = MFG_DELIVERIES[0]?.code || '';
      if (mfgCodeVerification.validDelivery?.code === code) mfgCodeVerification = { code:'', message:'', validDelivery:null };
      AUDIT_LOGS.unshift({ id:`AUD-${13000 + AUDIT_LOGS.length}`, date:new Date().toISOString().slice(0,16).replace('T',' '), user:productionActor(), module:'Manufacturing Delivery', action:'Deleted before confirmation', entity:delivery.code, project:delivery.project, po:delivery.po, details:`${delivery.code} was removed before signed reception confirmation. Its PN launch quantities were released.` });
      renderPage();
    }
    function mfgActionIcons(d,workspaceActions = false) {
      const workspaceDelete = workspaceActions && workspaceCanDeleteDelivery(d) ? workspaceDeleteIcon('manufacturing',d) : '';
      return `<div class="icon-actions">
    <div class="icon-btn" title="View" onclick="stop(event); openMfgDelivery('${d.code}')">${icon('view', '')}</div>
    ${permIconBtn('editMfgDelivery', 'Edit', 'edit', `stop(event); openModal('Edit ${d.code}', 'This opens the delivery edit form.')`)}
    ${workspaceDelete || (d.status !== 'Delivered' ? permIconBtn('deleteMfgDelivery', 'Delete', 'trash', `stop(event); requestDeleteMfgDelivery('${d.code}')`, 'danger-hover') : '')}
    ${permIconBtn('printDeliveryNote', 'Download PDF', 'download', `stop(event); mfgRedownloadDeliveryPdf('${d.code}')`)}
  </div>`;
    }

    function setMfgSearch(v) { mfgFilters.search = v; mfgPage = 1; renderPage(); }
    function setMfgFilter(key, v) { mfgFilters[key] = v; mfgPage = 1; renderPage(); }
    function clearMfgFilter(key) { mfgFilters[key] = ''; mfgPage = 1; renderPage(); }
    function resetMfgFilters() { mfgFilters = { search: '', project: '', po: '', status: '', receiver: '', date: '' }; mfgPage = 1; renderPage(); }
    function sortMfg(key) { mfgSort.dir = (mfgSort.key === key) ? -mfgSort.dir : 1; mfgSort.key = key; renderPage(); }
    function setMfgPage(n) { mfgPage = Math.max(1, n); renderPage(); }
    function filterMfg() {
      const f = mfgFilters;
      return MFG_DELIVERIES.filter(d => {
        if (f.search && !(`${d.code} ${d.project} ${d.po} ${mfgDeliveryPnLabel(d)} ${d.receiver}`.toLowerCase().includes(f.search.toLowerCase()))) return false;
        if (f.project && d.project !== f.project) return false;
        if (f.po && d.po !== f.po) return false;
        if (f.status && d.status !== f.status) return false;
        if (f.receiver && d.receiver !== f.receiver) return false;
        if (f.date && d.date !== f.date) return false;
        return true;
      });
    }
    function mfgToolbarHtml() {
      const opt = (key, list, placeholder) => `<select class="tt-select" onchange="setMfgFilter('${key}', this.value)">
    <option value="">${placeholder}</option>
    ${list.map(v => `<option value="${v}" ${mfgFilters[key] === v ? 'selected' : ''}>${v}</option>`).join('')}
  </select>`;
      return `<div class="table-toolbar">
    <div class="tt-search">${icon('search', '')}<input type="text" placeholder="Search delivery…" value="${mfgFilters.search}" oninput="setMfgSearch(this.value)"/></div>
    ${opt('project', uniqueValues(MFG_DELIVERIES, 'project'), 'Project')}
    ${opt('po', uniqueValues(MFG_DELIVERIES, 'po'), 'Purchase Order')}
    ${opt('status', uniqueValues(MFG_DELIVERIES, 'status'), 'Status')}
    ${opt('receiver', uniqueValues(MFG_DELIVERIES, 'receiver'), 'Receiver')}
    ${opt('date', uniqueValues(MFG_DELIVERIES, 'date'), 'Date')}
    <div class="tt-spacer"></div>
    <div class="tt-icon-btn" title="Reset" onclick="resetMfgFilters()">${icon('close', '')}</div>
    <div class="tt-icon-btn" title="Refresh" onclick="refreshNotice()">${icon('refresh', '')}</div>
    <div class="tt-icon-btn" title="Export" onclick="exportNotice()">${icon('download', '')}</div>
  </div>`;
    }

    function pageMfgDeliveryList() {
      const rows = sortRows(filterMfg(), mfgSort);
      const total = rows.length;
      const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      mfgPage = Math.min(mfgPage, totalPages);
      const pageRows = rows.slice((mfgPage - 1) * PAGE_SIZE, mfgPage * PAGE_SIZE);

      const stats = ['Unplanned','In Progress','Done','Packaged','Delivered'].map(status => ({ label:status, value:MFG_DELIVERIES.filter(d => d.status !== 'Cancelled' && syncMfgDeliveryLifecycle(d) === status).length, color:status === 'Delivered' || status === 'Done' ? 'var(--success)' : status === 'In Progress' ? 'var(--info)' : status === 'Packaged' ? 'var(--warning)' : undefined }));
      const chips = filterChips(mfgFilters, { project: 'Project', po: 'PO', status: 'Status', receiver: 'Receiver', date: 'Date' }, 'clearMfgFilter', 'resetMfgFilters');
      const tableBody = pageRows.length ? `<table>
    <thead><tr>
      ${sortTh('Delivery Code', 'code', mfgSort, 'sortMfg')}
      ${sortTh('Project', 'project', mfgSort, 'sortMfg')}
      ${sortTh('PO', 'po', mfgSort, 'sortMfg')}
      <th>PNs · Launch Qty</th>
      ${sortTh('Receiver', 'receiver', mfgSort, 'sortMfg')}
      ${sortTh('First Required Date', 'date', mfgSort, 'sortMfg')}
      ${sortTh('Status', 'status', mfgSort, 'sortMfg')}
      <th>Production</th>
      <th>Actions</th>
    </tr></thead>
    <tbody>${pageRows.map(d => `<tr class="clickable-row" onclick="openMfgDelivery('${d.code}')">
      <td class="mono">${d.code}</td><td>${d.project}</td><td class="mono">${d.po}</td><td class="mono">${mfgDeliveryPnLabel(d)}</td><td>${d.receiver || '<span class="badge neutral">Awaiting Warehouse TL</span>'}</td><td>${d.date || '—'}</td>
      <td>${statusBadge(d.status, d.statusType)}</td>
      <td>${statusBadge(syncMfgDeliveryLifecycle(d),productionStatusType(d.lifecycleStatus))}</td>
      <td>${mfgActionIcons(d)}</td>
    </tr>`).join('')}</tbody>
  </table>` : emptyStateBlock('No Manufacturing Deliveries Found', 'Try changing your filters.', 'resetMfgFilters');

      const createBtn = permBtn('createMfgDelivery', 'Create Delivery', 'plus', "navigate('mfg-delivery-create')", "primary")
        || permBtn('requestMfgDelivery', 'Request Delivery', 'plus', "navigate('mfg-delivery-create')", "primary");
      const verifyBtn = currentRole === 'wh_lead' ? `<button class="btn secondary" onclick="navigate('mfg-delivery-verify')">Enter Delivery Code</button>` : '';
      const historyBtn = `<button class="btn" onclick="navigate('mfg-delivery-history')">${icon('history','')} Delivery History</button>`;

      return `
  <div class="page-title-row" style="margin-bottom:2px;">
    <div>${verifyBtn}</div>
    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">${historyBtn}${createBtn}</div>
  </div>
  ${statsRow(stats)}
  <div class="card">
    ${mfgToolbarHtml()}
    ${chips}
    <div class="table-head-row">${rowCountLabel(total, 'delivery')}</div>
    ${tableBody}
    ${pageRows.length ? paginationBar(total, mfgPage, PAGE_SIZE, 'setMfgPage') : ''}
  </div>`;
    }

    function pageMfgDeliveryHistory() {
      return `
  <div class="page-title-row" style="margin-bottom:12px;"><div></div><button class="btn" onclick="navigateBack('mfg-delivery-list')">${icon('chevLeft','')} Back to Deliveries</button></div>
  <div class="card">
    <div class="section-title">Manufacturing Delivery History <span class="hint">${MFG_DELIVERIES.length} records</span></div>
    ${mfgTable(MFG_DELIVERIES)}
  </div>`;
    }

    function pageMfgDeliveryVerify() {
      if (currentRole !== 'wh_lead') {
        return `<div class="card">${emptyStateBlock('Access denied', 'Only Warehouse Team Leader can validate delivery codes.', null)}</div>`;
      }
      const delivery = mfgCodeVerification.validDelivery;
      const receiverAssigned = delivery && MFG_DELIVERY_RECEIVERS.includes(delivery.receiver);
      const documentAction = delivery?.documentGeneratedAt ? `mfgRedownloadDeliveryPdf('${delivery.code}')` : 'mfgGenerateDeliveryDocument()';
      const documentLabel = delivery?.documentGeneratedAt ? 'Download PDF Again' : 'Generate PDF Document';
      return `
  <div class="card">
    <div class="section-title">Warehouse Code Verification</div>
    <div class="sim-field"><label class="sim-field-label">Delivery Code</label><input class="sim-select" type="text" value="${mfgCodeVerification.code}" oninput="mfgCodeVerification.code = this.value" placeholder="DEL-2026-000451" /></div>
    <div style="display:flex; gap:10px; margin-top:12px;"><button class="btn primary" onclick="mfgValidateDeliveryCode()">Validate Code</button>${delivery ? `<button class="btn secondary" onclick="${documentAction}" ${receiverAssigned ? '' : 'disabled'}>${icon('download','')} ${documentLabel}</button>` : ''}</div>
    ${mfgCodeVerification.message ? `<div class="hint" style="margin-top:12px;">${mfgCodeVerification.message}</div>` : ''}
    ${delivery ? `<div class="card" style="margin-top:16px; background:var(--bg);">
      <div class="section-title">Delivery Details</div>
      ${!receiverAssigned ? `<div class="sim-field" style="margin-bottom:14px;"><label class="sim-field-label">Select Manufacturing Receiver</label><select class="sim-select" onchange="mfgSetDeliveryReceiver(this.value)"><option value="">Choose receiver</option>${MFG_DELIVERY_RECEIVERS.map(r => `<option value="${r}" ${delivery.receiver === r ? 'selected' : ''}>${r}</option>`).join('')}</select></div>` : ''}
      <div class="result-row"><span class="r-label">Project</span><span class="r-value">${delivery.project}</span></div>
      <div class="result-row"><span class="r-label">PO</span><span class="r-value mono">${delivery.po}</span></div>
      <div class="result-row"><span class="r-label">PN Launch Quantities</span><span class="r-value mono">${mfgDeliveryPnLabel(delivery)}</span></div>
      <div class="result-row"><span class="r-label">Launch</span><span class="r-value">Approved</span></div>
      <div class="result-row"><span class="r-label">Receiver</span><span class="r-value">${delivery.receiver || 'Not assigned'}</span></div>
      <div class="result-row"><span class="r-label">First Required Time</span><span class="r-value">${delivery.date || '—'} ${delivery.time || ''}</span></div>
      <div class="result-row"><span class="r-label">Prepared by</span><span class="r-value">${delivery.documentGeneratedBy || 'Warehouse Team Leader'}</span></div>
      <div class="section-title" style="margin-top:16px;">PN Launch Plan</div>
      <table><thead><tr><th>Finished-Good PN</th><th>Launch Quantity</th><th>Remaining After</th></tr></thead><tbody>${mfgDeliveryPnQuantities(delivery).map(line => `<tr><td class="mono">${line.fgpn}</td><td class="mono">${line.qty == null ? '—' : Number(line.qty).toLocaleString()}</td><td class="mono">${line.remainingAfter == null ? '—' : Number(line.remainingAfter).toLocaleString()}</td></tr>`).join('')}</tbody></table>
      <div class="section-title" style="margin-top:16px;">Goods List</div>
      <div class="table-scroll"><table class="mfg-material-table"><thead><tr><th>Goods Type</th><th>Material PN</th><th>Description</th><th>Linked PNs · Requirement</th><th>Qty</th><th>Unit</th><th>Required Time</th></tr></thead>
        <tbody>${delivery.materials.map(item => `<tr><td>${item.type || 'Material'}</td><td class="mono">${item.code}</td><td>${item.desc}</td><td><div class="mfg-pn-tags">${(item.fgpns || mfgDeliveryFgpns(delivery)).map(fgpn => `<span class="mfg-pn-tag">${fgpn}${item.fgpnRequirements?.[fgpn] ? ` · ${Number(item.fgpnRequirements[fgpn]).toLocaleString()}` : ''}</span>`).join('')}</div></td><td class="mono">${Number(item.qty || 0).toLocaleString()}</td><td class="mono">${item.unit || 'PCS'}</td><td class="mono">${String(item.requiredTime || `${delivery.date || ''}T${delivery.time || ''}`).replace('T',' ') || '—'}</td></tr>`).join('')}</tbody></table></div>
    </div>` : ''}
  </div>`;
    }

    /* ---- Create Delivery Wizard ---- */
    function mfgWizardGoStep(n) { mfgWizardStep = n; renderPage(); }
    function mfgDeliveryPnQuantities(delivery) {
      if (Array.isArray(delivery?.fgpnQuantities)) return delivery.fgpnQuantities;
      if (delivery?.fgpnQuantities && typeof delivery.fgpnQuantities === 'object') return Object.entries(delivery.fgpnQuantities).map(([fgpn,qty]) => ({ fgpn,qty:Number(qty || 0) }));
      return mfgDeliveryFgpns(delivery).map(fgpn => ({ fgpn,qty:null }));
    }
    function mfgPnLaunchSummary(poId, fgpn) {
      const part = poFinishedGoods(poId).find(item => item.fgpn === fgpn);
      const ordered = Number(part?.ordered || 0);
      const allocations = MFG_DELIVERIES.filter(delivery => delivery.po === poId && delivery.status !== 'Cancelled').reduce((totals,delivery) => {
        const line = mfgDeliveryPnQuantities(delivery).find(item => item.fgpn === fgpn);
        const qty = Number(line?.qty || 0);
        if (!qty) return totals;
        const productionStarted = PO_STATUS_FLOW.indexOf(mfgNormalizeLaunchLine(delivery,line).status) >= 1;
        if (productionStarted) totals.launched += qty; else totals.reserved += qty;
        return totals;
      },{ launched:0,reserved:0 });
      const launched = Math.min(ordered,allocations.launched);
      const reserved = Math.min(Math.max(0,ordered - launched),allocations.reserved);
      const allocated = launched + reserved;
      return { ordered,baseline:0,instructed:allocations.launched + allocations.reserved,launched,reserved,allocated,remaining:Math.max(0,ordered - allocated) };
    }
    function mfgEligibleOrders(poId) { return poFinishedGoods(poId).filter(part => mfgPnLaunchSummary(poId,part.fgpn).remaining > 0).map(part => ({ id:`PLAN-${part.fgpn}`, po:poId, project:part.project, customer:POS.find(po => po.id === poId)?.customer || '', fgpn:part.fgpn, qty:part.ordered, status:'Unplanned', due:POS.find(po => po.id === poId)?.delivery || 'Not set', desc:part.desc })); }
    function mfgEligiblePos(projectName) { return POS.filter(po => po.project === projectName && ['Unplanned','In Progress'].includes(poLifecycle(po.id)) && mfgEligibleOrders(po.id).length > 0); }
    function mfgResetLineSelection() { mfgWizard.selectedMaterials = {}; mfgWizard.qtys = {}; mfgWizard.itemTimes = {}; mfgWizard.feasibility = null; }
    function mfgWizardSetPo(v) {
      mfgInvalidateLaunchApproval();
      mfgWizard.po = v;
      const first = mfgEligibleOrders(v)[0]?.fgpn || '';
      mfgWizard.fgpn = first;
      mfgWizard.fgpns = first ? [first] : [];
      mfgWizard.fgpnQtys = first ? { [first]:0 } : {};
      mfgResetLineSelection();
      renderPage();
    }
    function mfgWizardSetProject(v) {
      mfgInvalidateLaunchApproval();
      mfgWizard.project = v;
      const firstPo = mfgEligiblePos(v)[0];
      mfgWizard.po = firstPo?.id || '';
      const first = mfgEligibleOrders(mfgWizard.po)[0]?.fgpn || '';
      mfgWizard.fgpn = first;
      mfgWizard.fgpns = first ? [first] : [];
      mfgWizard.fgpnQtys = first ? { [first]:0 } : {};
      mfgResetLineSelection();
      renderPage();
    }
    function mfgWizardToggleFgpn(fgpn, checked) {
      mfgInvalidateLaunchApproval();
      const selected = new Set(mfgWizard.fgpns || []);
      if (checked) {
        selected.add(fgpn);
        if (mfgWizard.fgpnQtys[fgpn] === undefined) mfgWizard.fgpnQtys[fgpn] = 0;
      } else {
        selected.delete(fgpn);
        delete mfgWizard.fgpnQtys[fgpn];
      }
      mfgWizard.fgpns = [...selected];
      mfgWizard.fgpn = mfgWizard.fgpns[0] || '';
      mfgResetLineSelection();
      mfgWizardPrefillMaterials();
      renderPage();
    }
    function mfgWizardSelectAllFgpns(checked) {
      mfgInvalidateLaunchApproval();
      const eligible = mfgEligibleOrders(mfgWizard.po);
      mfgWizard.fgpns = checked ? eligible.map(order => order.fgpn) : [];
      mfgWizard.fgpnQtys = {};
      if (checked) eligible.forEach(order => { mfgWizard.fgpnQtys[order.fgpn] = mfgPnLaunchSummary(mfgWizard.po,order.fgpn).remaining; });
      mfgWizard.fgpn = mfgWizard.fgpns[0] || '';
      mfgResetLineSelection();
      mfgWizardPrefillMaterials();
      renderPage();
    }
    function mfgWizardSanitizeFgpns() {
      const eligible = new Set(mfgEligibleOrders(mfgWizard.po).map(order => order.fgpn));
      mfgWizard.fgpns = (mfgWizard.fgpns || []).filter(fgpn => eligible.has(fgpn));
      Object.keys(mfgWizard.fgpnQtys || {}).forEach(fgpn => {
        if (!eligible.has(fgpn)) delete mfgWizard.fgpnQtys[fgpn];
      });
      mfgWizard.fgpn = mfgWizard.fgpns[0] || '';
      return mfgWizard.fgpns;
    }
    function mfgWizardSetFgpnQty(fgpn, value) {
      mfgInvalidateLaunchApproval();
      const remaining = mfgPnLaunchSummary(mfgWizard.po,fgpn).remaining;
      mfgWizard.fgpnQtys[fgpn] = Math.max(0,Math.min(remaining,parseInt(value,10) || 0));
      mfgResetLineSelection();
      mfgWizardPrefillMaterials();
      renderPage();
    }
    function mfgBomKeyForFgpn(fgpn, poId) {
      if (BOM_USAGE[fgpn]) return fgpn;
      const directPn = pnsForPo(poId).find(row => row.pn === fgpn);
      if (directPn && BOM_USAGE[directPn.pn]) return directPn.pn;
      const number = String(fgpn || '').match(/(\d+)$/)?.[1];
      const matchedPn = number ? pnsForPo(poId).find(row => row.pn.endsWith(number)) : null;
      return matchedPn && BOM_USAGE[matchedPn.pn] ? matchedPn.pn : '';
    }
    function mfgMaterialsForSelection(poId, selectedFgpns, fgpnQtys = mfgWizard.fgpnQtys) {
      const selected = new Set(selectedFgpns || []);
      const orders = mfgEligibleOrders(poId).filter(order => selected.has(order.fgpn));
      const aggregate = new Map();
      orders.forEach(order => {
        const launchQty = Number(fgpnQtys?.[order.fgpn] || 0);
        if (!(launchQty > 0)) return;
        const bomKey = mfgBomKeyForFgpn(order.fgpn,poId);
        Object.entries(BOM_USAGE[bomKey] || {}).forEach(([code,usage]) => {
          const material = MATERIALS.find(item => item.code === code);
          if (!material) return;
          if (!aggregate.has(code)) aggregate.set(code,{ ...material, required:0, fgpns:[], fgpnRequirements:{}, unit:material.type === 'Tape' ? 'ROLL' : ['Wire','Tube'].includes(material.type) ? 'M' : 'PCS' });
          const row = aggregate.get(code);
          const requirement = Math.ceil(Number(usage || 0) * launchQty);
          row.required += requirement;
          row.fgpnRequirements[order.fgpn] = Number(row.fgpnRequirements[order.fgpn] || 0) + requirement;
          if (!row.fgpns.includes(order.fgpn)) row.fgpns.push(order.fgpn);
        });
      });
      const launchableOrders = orders.filter(order => Number(fgpnQtys?.[order.fgpn] || 0) > 0);
      if (!aggregate.size && launchableOrders.length) {
        const orderedTotal = launchableOrders.reduce((sum,order) => sum + Number(order.qty || 0),0);
        const partialTotal = launchableOrders.reduce((sum,order) => sum + Number(fgpnQtys?.[order.fgpn] || 0),0);
        const factor = orderedTotal > 0 ? partialTotal / orderedTotal : 0;
        materialsForPo(poId).forEach(material => aggregate.set(material.code,{ ...material, required:Math.ceil(Number(material.required || 0) * factor), fgpns:launchableOrders.map(order => order.fgpn), fgpnRequirements:{}, unit:material.type === 'Tape' ? 'ROLL' : ['Wire','Tube'].includes(material.type) ? 'M' : 'PCS' }));
      }
      return [...aggregate.values()];
    }
    function mfgDefaultItemTime() { return `${mfgWizard.deliveryDate || new Date().toISOString().slice(0,10)}T${mfgWizard.deliveryTime || '09:00'}`; }
    function mfgWizardPrefillMaterials() {
      mfgMaterialsForSelection(mfgWizard.po,mfgWizard.fgpns).forEach(row => {
        mfgWizard.selectedMaterials[row.code] = true;
        mfgWizard.qtys[row.code] = Number(row.required || 0);
        mfgWizard.itemTimes[row.code] = mfgDefaultItemTime();
      });
      mfgWizard.feasibility = null;
    }
    function mfgWizardToggleMaterial(code, checked) {
      const row = mfgMaterialsForSelection(mfgWizard.po,mfgWizard.fgpns).find(item => item.code === code);
      if (checked && row) {
        mfgWizard.selectedMaterials[code] = true;
        if (!(Number(mfgWizard.qtys[code]) > 0)) mfgWizard.qtys[code] = Math.min(Number(row.required || 0),Number(row.warehouse || 0));
        if (!mfgWizard.itemTimes[code]) mfgWizard.itemTimes[code] = mfgDefaultItemTime();
      } else {
        delete mfgWizard.selectedMaterials[code]; delete mfgWizard.qtys[code]; delete mfgWizard.itemTimes[code];
      }
      renderPage();
    }
    function mfgWizardSelectAllMaterials(checked) {
      mfgMaterialsForSelection(mfgWizard.po,mfgWizard.fgpns).forEach(row => {
        if (checked) {
          mfgWizard.selectedMaterials[row.code] = true;
          if (!(Number(mfgWizard.qtys[row.code]) > 0)) mfgWizard.qtys[row.code] = Math.min(Number(row.required || 0),Number(row.warehouse || 0));
          if (!mfgWizard.itemTimes[row.code]) mfgWizard.itemTimes[row.code] = mfgDefaultItemTime();
        } else {
          delete mfgWizard.selectedMaterials[row.code]; delete mfgWizard.qtys[row.code]; delete mfgWizard.itemTimes[row.code];
        }
      });
      renderPage();
    }
    function mfgWizardSetQty(code, v) {
      const row = mfgMaterialsForSelection(mfgWizard.po,mfgWizard.fgpns).find(item => item.code === code);
      const available = Number(row?.warehouse || 0) + Number(row?.wip || 0);
      mfgWizard.qtys[code] = Math.max(0,Math.min(available,parseInt(v,10) || 0));
      mfgWizard.feasibility = null;
      renderPage();
    }
    function mfgWizardFeasibilityFingerprint() {
      return JSON.stringify({ po:mfgWizard.po,fgpns:mfgWizard.fgpns,fgpnQtys:mfgWizard.fgpnQtys,qtys:mfgWizard.qtys });
    }
    function mfgWizardCheckFeasibility() {
      mfgWizardSanitizeFgpns();
      const rows = mfgMaterialsForSelection(mfgWizard.po,mfgWizard.fgpns);
      const shortages = rows.reduce((list,row) => {
        const required = Number(row.required || 0);
        mfgWizard.qtys[row.code] = required;
        const requested = Number(mfgWizard.qtys[row.code] || 0);
        const available = Number(row.warehouse || 0) + Number(row.wip || 0);
        if (requested < required || requested > available) list.push({
          code:row.code,
          required,
          requested,
          available,
          missing:Math.max(0,required - Math.min(requested,available))
        });
        return list;
      },[]);
      mfgWizard.feasibility = { ok:rows.length > 0 && shortages.length === 0,shortages,fingerprint:mfgWizardFeasibilityFingerprint() };
      renderPage();
    }
    function mfgWizardFeasibilityPassed() {
      return !!(mfgWizard.feasibility?.ok && mfgWizard.feasibility.fingerprint === mfgWizardFeasibilityFingerprint());
    }
    function mfgWizardSetItemTime(code, value) { mfgWizard.itemTimes[code] = value; }
    function mfgWizardContinueFromContext() {
      if (!mfgWizard.po || !mfgEligibleOrders(mfgWizard.po).length) return openModal('No eligible PO','Select a PO in Unplanned or In Progress status.');
      mfgWizardStep = 2; renderPage();
    }
    function mfgWizardContinueFromParts() {
      mfgWizardSanitizeFgpns();
      if (!(mfgWizard.fgpns || []).length) return openModal('Select at least one PN','Choose one or more eligible Finished Good Part Numbers.');
      const invalid = mfgWizard.fgpns.find(fgpn => {
        const qty = Number(mfgWizard.fgpnQtys[fgpn] || 0);
        const remaining = mfgPnLaunchSummary(mfgWizard.po,fgpn).remaining;
        return !(qty > 0) || qty > remaining;
      });
      if (invalid) return openModal('Launch quantity required',`Enter a launch quantity between 1 and ${mfgPnLaunchSummary(mfgWizard.po,invalid).remaining.toLocaleString()} for ${invalid}.`);
      if (!mfgWizardFeasibilityPassed()) return;
      mfgMaterialsForSelection(mfgWizard.po,mfgWizard.fgpns).forEach(row => {
        mfgWizard.selectedMaterials[row.code] = true;
        mfgWizard.itemTimes[row.code] = mfgWizard.itemTimes[row.code] || mfgDefaultItemTime();
      });
      mfgWizardStep = 3; renderPage();
    }
    function mfgWizardContinueFromItems() {
      const selected = Object.keys(mfgWizard.selectedMaterials || {}).filter(code => mfgWizard.selectedMaterials[code]);
      if (!selected.length) return openModal('Select at least one material','Choose the material part numbers to transfer.');
      if (selected.some(code => !(Number(mfgWizard.qtys[code]) > 0))) return openModal('Quantity required','Enter a quantity greater than zero for every selected material.');
      if (selected.some(code => !mfgWizard.itemTimes[code])) return openModal('Required delivery time missing','Set the required delivery date and time for every selected material.');
      mfgWizardStep = 4; renderPage();
    }
    function generateMfgDeliveryCodeString() {
      const prefix = 'DEL-';
      const date = new Date();
      const year = date.getFullYear();
      let code = '';
      do {
        const serial = String(Math.floor(100000 + Math.random() * 900000));
        code = `${prefix}${year}-${serial}`;
      } while (MFG_DELIVERIES.some(delivery => delivery.code === code));
      return code;
    }
    function mfgWizardGenerateCode() {
      mfgWizard.code = generateMfgDeliveryCodeString();
      const now = new Date();
      mfgWizard.generatedAt = now.toISOString().slice(0, 16).replace('T', ' ');
      mfgWizard.expiresAt = new Date(now.getTime() + 48 * 60 * 60 * 1000).toISOString().slice(0, 16).replace('T', ' ');
      renderPage();
    }
    function mfgWizardRegenerateCode() {
      mfgWizardGenerateCode();
      openModal('New delivery code generated', `A new code has been created: ${mfgWizard.code}`);
    }
    function mfgWizardCopyCode() {
      if (!mfgWizard.code) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mfgWizard.code);
        openModal('Code Copied', `${mfgWizard.code} copied to clipboard.`);
      } else {
        openModal('Copy Delivery Code', `Copy this code manually: ${mfgWizard.code}`);
      }
    }
    function mfgWizardPrintCode() {
      if (!mfgWizard.code) return;
      openModal('Print Delivery Code', `Print this code from your browser or use the document print function.\n\n${mfgWizard.code}`);
    }
    function formatRemainingTime(expiresAt) {
      if (!expiresAt) return '—';
      const diff = new Date(expiresAt.replace(' ', 'T')) - new Date();
      if (diff <= 0) return 'Expired';
      const hours = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      return `${hours}h ${mins}m`;
    }
    function formatExpiresInText(expiresAt) {
      if (!expiresAt) return '—';
      const diff = new Date(expiresAt.replace(' ', 'T')) - new Date();
      if (diff <= 0) return 'Expired';
      const hours = Math.floor(diff / 3600000);
      return `${hours} Hours`;
    }
    function isCodeExpired(expiresAt) {
      if (!expiresAt) return false;
      return new Date(expiresAt.replace(' ', 'T')) <= new Date();
    }
    function mfgLaunchFingerprint() {
      const plan = [...new Set(mfgWizard.fgpns || [])].sort().map(fgpn => `${fgpn}:${Number(mfgWizard.fgpnQtys?.[fgpn] || 0)}`).join('|');
      return `${mfgWizard.project}|${mfgWizard.po}|${plan}`;
    }
    function mfgWizardLaunchApproved() {
      return !!(mfgWizard.approval?.approved && mfgWizard.approval.fingerprint === mfgLaunchFingerprint());
    }
    function mfgInvalidateLaunchApproval() {
      mfgWizard.approval = null;
      mfgLaunchSimulationResult = null;
      if (mfgSimulationContext.active) simResult = null;
    }
    function openMfgLaunchSimulation() {
      const selected = mfgWizard.fgpns || [];
      if (!selected.length || selected.some(fgpn => !(Number(mfgWizard.fgpnQtys?.[fgpn]) > 0))) return openModal('Complete the PN launch plan', 'Select at least one finished-good PN and enter its partial launch quantity before opening the simulation.');
      mfgSimulationContext = { active:true,returnStep:4 };
      simProject = mfgWizard.project;
      simScope = 'single';
      simSinglePO = mfgWizard.po;
      simMode = 'current';
      simUseCurrentVersions = true;
      simResult = mfgLaunchSimulationResult?.fingerprint === mfgLaunchFingerprint() ? mfgLaunchSimulationResult : null;
      navigate('sim-launch');
    }
    function returnToMfgInstruction() {
      const returnStep = mfgSimulationContext.returnStep || 4;
      mfgSimulationContext.active = false;
      simResult = null;
      mfgWizardStep = returnStep;
      navigateBack('mfg-delivery-create');
    }
    function mfgWizardCanCreateDelivery() {
      return simMeetingSaved && mfgWizardFeasibilityPassed();
    }
    function mfgAuditEvent(action, delivery, details) {
      AUDIT_LOGS.unshift({
        id:`AUD-${AUDIT_LOGS.length + 12000}`,
        date:new Date().toISOString().slice(0,16).replace('T',' '),
        user:productionActor(),
        module:'Manufacturing Delivery',
        action,
        entity:delivery?.code || mfgCodeVerification.code || 'Unknown code',
        project:delivery?.project || '',
        po:delivery?.po || '',
        details,
      });
    }
    async function mfgWizardSaveInstruction() {
      if (!mfgWizardCanCreateDelivery()) {
        return openModal('Cannot create delivery', 'Delivery instructions require a passed feasibility check and meeting minutes PDF.');
      }
      const eligibleFgpns = new Set(mfgEligibleOrders(mfgWizard.po).map(order => order.fgpn));
      const selectedFgpns = [...new Set(mfgWizard.fgpns || [])].filter(fgpn => eligibleFgpns.has(fgpn));
      if (!selectedFgpns.length) return openModal('Eligible PN required', 'Select at least one Unplanned or In Progress Finished Good Part Number.');
      const fgpnQuantities = selectedFgpns.map(fgpn => {
        const summary = mfgPnLaunchSummary(mfgWizard.po,fgpn);
        const qty = Number(mfgWizard.fgpnQtys[fgpn] || 0);
        return { fgpn,qty,ordered:summary.ordered,previouslyLaunched:summary.launched,previouslyReserved:summary.reserved,remainingAfter:Math.max(0,summary.remaining - qty),status:'Unplanned',producedQty:0,packagedQty:0,customerDeliveredQty:0 };
      });
      const invalidFgpn = fgpnQuantities.find(line => !(line.qty > 0) || line.qty > mfgPnLaunchSummary(mfgWizard.po,line.fgpn).remaining);
      if (invalidFgpn) return openModal('Check PN launch quantities', `The launch quantity for ${invalidFgpn.fgpn} must be greater than zero and cannot exceed its remaining quantity.`);
      if (!mfgWizard.priority) return openModal('Priority required', 'Select a delivery priority before saving.');
      const selectedMaterials = mfgMaterialsForSelection(mfgWizard.po,selectedFgpns)
        .filter(row => mfgWizard.selectedMaterials[row.code])
        .map(row => ({
          code:row.code,
          desc:row.desc,
          type:row.type,
          required:Number(row.required || 0),
          warehouse:Number(row.warehouse || 0),
          qty:Number(mfgWizard.qtys[row.code] || 0),
          unit:row.unit,
          fgpns:[...row.fgpns],
          fgpnRequirements:{ ...(row.fgpnRequirements || {}) },
          requiredTime:mfgWizard.itemTimes[row.code] || '',
        }));
      if (!selectedMaterials.length) return openModal('No materials selected', 'Select at least one material part number to transfer.');
      if (selectedMaterials.some(item => !(item.qty > 0) || item.qty > item.warehouse)) return openModal('Check quantities', 'Each selected quantity must be greater than zero and cannot exceed warehouse availability.');
      if (selectedMaterials.some(item => !item.requiredTime)) return openModal('Required delivery time missing', 'Set a required delivery date and time for every selected material.');
      const earliestRequiredTime = [...selectedMaterials].sort((a,b) => a.requiredTime.localeCompare(b.requiredTime))[0].requiredTime;
      const [deliveryDate,deliveryTime = ''] = earliestRequiredTime.split('T');
      const now = new Date();
      let backendRecord = null;
      if (launchApi.connected) {
        if (!simMeetingFile) return openModal('Meeting minutes PDF required','Choose the meeting minutes PDF again before saving this instruction.');
        const form = new FormData();
        form.append('project',mfgWizard.project);
        form.append('po',mfgWizard.po);
        form.append('created_by',productionActor());
        form.append('launch_lines',JSON.stringify(fgpnQuantities));
        form.append('material_lines',JSON.stringify(selectedMaterials));
        form.append('meeting_minutes',simMeetingFile,simMeetingFile.name);
        try {
          backendRecord = await launchApiRequest('/launches',{ method:'POST',body:form });
        } catch (error) {
          return openModal('Backend could not save the instruction',error.message);
        }
      }
      const code = backendRecord?.code || generateMfgDeliveryCodeString();
      const generatedAt = backendRecord ? String(backendRecord.created_at || '').slice(0,16).replace('T',' ') : now.toISOString().slice(0,16).replace('T',' ');
      const expiresAt = backendRecord ? String(backendRecord.expires_at || '').slice(0,16).replace('T',' ') : new Date(now.getTime() + 48 * 60 * 60 * 1000).toISOString().slice(0,16).replace('T',' ');
      const newDelivery = {
        backendId:backendRecord?.id || '',
        code,
        project: mfgWizard.project,
        po: mfgWizard.po,
        fgpn: selectedFgpns[0],
        fgpns: selectedFgpns,
        fgpnQuantities,
        receiver: '',
        date: deliveryDate,
        time: deliveryTime,
        priority: mfgWizard.priority,
        materials: selectedMaterials,
        notes: mfgWizard.notes,
        status: 'Code Generated',
        statusType: mfgStatusType('Code Generated'),
        generatedAt,
        expiresAt,
        used: false,
        docUploaded: false,
        signedFileName: '',
        signedBy: '',
        signedAt: '',
        documentGeneratedAt: '',
        createdBy: productionActor(),
        lifecycleStatus: 'Unplanned',
      };
      MFG_DELIVERIES.unshift(newDelivery);
      const totalLaunchQty = fgpnQuantities.reduce((sum,line) => sum + line.qty,0);
      mfgAuditEvent('Partial manufacturing launch created',newDelivery,`${totalLaunchQty.toLocaleString()} finished-good units across ${selectedFgpns.length} PN${selectedFgpns.length === 1 ? '' : 's'}; ${selectedMaterials.length} material line${selectedMaterials.length === 1 ? '' : 's'} saved with transfer quantities and required delivery times.`);
      mfgAuditEvent('Single-use delivery code generated',newDelivery,`Code generated with a 48-hour validity period; expires ${expiresAt}.`);
      openMfgDeliveryId = code;
      mfgActiveTab = 'Overview';
      mfgWizardStep = 1;
      mfgWizard.fgpns = [];
      mfgWizard.fgpn = '';
      mfgWizard.fgpnQtys = {};
      mfgWizard.approval = null;
      mfgSimulationContext.active = false;
      mfgLaunchSimulationResult = null;
      mfgWizard.selectedMaterials = {};
      mfgWizard.qtys = {};
      mfgWizard.itemTimes = {};
      mfgWizard.receiver = '';
      mfgWizard.deliveryDate = new Date().toISOString().slice(0, 10);
      mfgWizard.deliveryTime = '09:00';
      mfgWizard.priority = 'Normal';
      mfgWizard.notes = '';
      mfgWizard.code = '';
      mfgWizard.generatedAt = '';
      mfgWizard.expiresAt = '';
      simMeetingFile = null;
      simMeetingFileName = '';
      simMeetingSaved = false;
      openModal('Instruction saved · code generated', `${code} is valid for 48 hours and can be used once by the Warehouse Team Leader.`);
      navigate('mfg-delivery-workspace',{ replace:true });
    }
    function mfgFindDeliveryByCode(code) {
      return MFG_DELIVERIES.find(d => d.code.toUpperCase() === (code || '').toUpperCase());
    }
    function mfgDeliveryFgpns(delivery) {
      return delivery?.fgpns?.length ? delivery.fgpns : (delivery?.fgpn ? [delivery.fgpn] : []);
    }
    function mfgDeliveryPnLabel(delivery) {
      const lines = mfgDeliveryPnQuantities(delivery);
      return lines.map(line => `${line.fgpn}${line.qty == null ? '' : ` · ${Number(line.qty).toLocaleString()}`}`).join(', ') || 'PO scope';
    }
    async function mfgValidateDeliveryCode() {
      if (currentRole !== 'wh_lead') return openModal('Warehouse Team Leader action', 'Only the Warehouse Team Leader can access a delivery instruction with its code.');
      const code = mfgCodeVerification.code.trim();
      if (launchApi.connected) {
        try {
          const record = await launchApiRequest('/warehouse/verify',{ method:'POST',body:JSON.stringify({ code }) });
          const delivery = launchApiApplyLaunch(record);
          openMfgDeliveryId = delivery.code;
          mfgCodeVerification.message = 'Code accepted. Select the Manufacturing Receiver, then generate the delivery document.';
          mfgCodeVerification.validDelivery = delivery;
          mfgAuditEvent('Delivery code accessed',delivery,'Warehouse Team Leader successfully used the API-backed single-use delivery code.');
          renderPage();
          return;
        } catch (error) {
          mfgCodeVerification.message = error.message;
          mfgCodeVerification.validDelivery = null;
          renderPage();
          return;
        }
      }
      const delivery = mfgFindDeliveryByCode(code);
      if (!delivery) {
        mfgCodeVerification.message = 'Invalid delivery code.';
        mfgCodeVerification.validDelivery = null;
        mfgAuditEvent('Delivery code access failed',null,`Invalid code entered: ${code || 'blank'}.`);
        renderPage();
        return;
      }
      const now = new Date();
      const expiry = delivery.expiresAt ? new Date(delivery.expiresAt.replace(' ', 'T')) : null;
      if (delivery.used) {
        mfgCodeVerification.message = 'This code has already been used.';
        mfgCodeVerification.validDelivery = null;
        mfgAuditEvent('Delivery code access failed',delivery,'Access rejected because the single-use code was already used.');
        renderPage();
        return;
      }
      if (delivery.status === 'Expired' || (expiry && now > expiry)) {
        delivery.status = 'Expired';
        delivery.statusType = mfgStatusType('Expired');
        mfgCodeVerification.message = 'This code has expired. Please contact the Launch Engineer to generate a new delivery instruction.';
        mfgCodeVerification.validDelivery = null;
        mfgAuditEvent('Delivery code access failed',delivery,'Access rejected because the 48-hour delivery code expired.');
        renderPage();
        return;
      }
      delivery.used = true;
      delivery.status = 'Code Used';
      delivery.statusType = mfgStatusType('Code Used');
      delivery.codeUsedAt = now.toISOString().slice(0, 16).replace('T', ' ');
      mfgCodeVerification.message = 'Code accepted. Select the Manufacturing Receiver, then generate the delivery document.';
      mfgCodeVerification.validDelivery = delivery;
      mfgAuditEvent('Delivery code accessed',delivery,'Warehouse Team Leader successfully used the single-use delivery code.');
      renderPage();
    }
    async function mfgSetDeliveryReceiver(value) {
      if (currentRole !== 'wh_lead') return openModal('Warehouse Team Leader action', 'Only the Warehouse Team Leader can select the Manufacturing Receiver.');
      const delivery = mfgCodeVerification.validDelivery || MFG_DELIVERIES.find(d => d.code === openMfgDeliveryId);
      if (!delivery) return;
      delivery.receiver = value;
      if (launchApi.connected && delivery.backendId) {
        try {
          const record = await launchApiRequest(`/warehouse/launches/${encodeURIComponent(delivery.backendId)}/receiver`,{ method:'PATCH',body:JSON.stringify({ receiver:value }) });
          launchApiApplyLaunch(record);
        } catch (error) {
          return openModal('Receiver was not saved',error.message);
        }
      }
      renderPage();
    }
    function mfgDeliveryCopyCode(code) {
      if (!code) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code);
        openModal('Code Copied', `${code} copied to clipboard.`);
      } else {
        openModal('Copy Delivery Code', `Copy this code manually: ${code}`);
      }
    }
    function mfgDeliveryPrintCode(code) {
      if (!code) return;
      openModal('Print Delivery Code', `Print this code from your browser or use the document print function.\n\n${code}`);
    }
    function mfgDeliveryRegenerateCode(code) {
      if (!['engineer','manager'].includes(currentRole)) return openModal('Launch action required', 'Only the assigned Launch Engineer or Launch Manager can regenerate this delivery code.');
      const delivery = MFG_DELIVERIES.find(d => d.code === code);
      if (!delivery) return;
      const newCode = generateMfgDeliveryCodeString();
      delivery.code = newCode;
      delivery.generatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
      delivery.expiresAt = new Date(new Date().getTime() + 48 * 60 * 60 * 1000).toISOString().slice(0, 16).replace('T', ' ');
      delivery.status = 'Code Generated';
      delivery.statusType = mfgStatusType('Code Generated');
      delivery.used = false;
      openMfgDeliveryId = newCode;
      if (mfgCodeVerification.validDelivery && mfgCodeVerification.validDelivery.code === code) {
        mfgCodeVerification.validDelivery = delivery;
      }
      mfgAuditEvent('Single-use delivery code regenerated',delivery,`Previous code ${code} replaced; new code expires ${delivery.expiresAt}.`);
      openModal('New delivery code generated', `A new code has been created: ${newCode}`);
      renderPage();
    }

    function mfgPdfText(value) {
      return String(value == null ? '' : value)
        .replace(/[–—]/g,'-').replace(/·/g,' | ').replace(/×/g,'x').replace(/[‘’]/g,"'").replace(/[“”]/g,'"')
        .normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\x20-\x7E]/g,'?');
    }
    function mfgPdfEscape(value) { return mfgPdfText(value).replace(/([\\()])/g,'\\$1'); }
    function mfgPdfShort(value, max) {
      const text = mfgPdfText(value);
      return text.length > max ? `${text.slice(0,Math.max(0,max-3))}...` : text;
    }
    function mfgPdfWrap(value, max) {
      const clean = mfgPdfText(value);
      if (clean.length <= max) return [clean];
      let splitAt = clean.lastIndexOf(' ',max);
      if (splitAt < Math.floor(max*.55)) splitAt = max;
      return [clean.slice(0,splitAt),mfgPdfShort(clean.slice(splitAt).trim(),max)];
    }
    function mfgPdfStream(delivery, rows, pageIndex, pageCount, firstPage, lastPage) {
      const commands = [];
      const text = (x,y,size,value,bold=false,color='0 0 0') => commands.push(`${color} rg BT /${bold ? 'F2' : 'F1'} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${mfgPdfEscape(value)}) Tj ET`);
      const fill = (x,y,w,h,color) => commands.push(`${color} rg ${x} ${y} ${w} ${h} re f`);
      const stroke = (x,y,w,h,color='0.82 0.86 0.89',width=.7) => commands.push(`${color} RG ${width} w ${x} ${y} ${w} ${h} re S`);
      const line = (x1,y1,x2,y2,color='0.82 0.86 0.89',width=.7) => commands.push(`${color} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
      const warehouseLeader = delivery.documentGeneratedBy || productionActor();
      const generatedDate = delivery.documentGeneratedAt || new Date().toISOString().slice(0,16).replace('T',' ');

      fill(0,770,595,72,'0.04 0.36 0.45');
      text(40,808,17,'WAREHOUSE-TO-MANUFACTURING DELIVERY',true,'1 1 1');
      text(40,789,9,'ADIENT LAUNCHOPS  |  CONTROLLED TRANSFER DOCUMENT',false,'0.82 0.94 0.96');
      text(470,805,9,`PAGE ${pageIndex + 1} / ${pageCount}`,true,'1 1 1');
      text(470,789,8,delivery.code,false,'0.82 0.94 0.96');

      let tableTop;
      if (firstPage) {
        fill(40,705,515,48,'0.95 0.98 0.98'); stroke(40,705,515,48,'0.63 0.78 0.82');
        text(52,738,7.5,'DELIVERY CODE',true,'0.22 0.29 0.34'); text(52,718,13,delivery.code,true,'0.02 0.29 0.37');
        text(315,738,7.5,'DOCUMENT GENERATED',true,'0.22 0.29 0.34'); text(315,718,9.5,generatedDate,true);

        const meta = [
          ['PROJECT',delivery.project],['PURCHASE ORDER',delivery.po],['FIRST REQUIRED TIME',`${delivery.date || '-'} ${delivery.time || ''}`],['PRIORITY',delivery.priority || 'Normal'],
        ];
        const metaX = [40,170,300,440], metaW = [130,130,140,115];
        meta.forEach((item,index) => { fill(metaX[index],638,metaW[index],49,index % 2 ? '0.98 0.985 0.99' : '0.96 0.97 0.98'); stroke(metaX[index],638,metaW[index],49); text(metaX[index]+10,672,7,item[0],true,'0.30 0.35 0.39'); text(metaX[index]+10,652,9,mfgPdfShort(item[1],index === 2 ? 21 : 18),true); });

        fill(40,578,515,45,'0.98 0.985 0.99'); stroke(40,578,515,45);
        text(52,609,7,'WAREHOUSE TEAM LEADER',true,'0.30 0.35 0.39'); text(52,590,9.5,warehouseLeader,true);
        text(310,609,7,'MANUFACTURING RECEIVER',true,'0.30 0.35 0.39'); text(310,590,9.5,mfgPdfShort(delivery.receiver,35),true);

        text(40,550,8,'APPROVED PN LAUNCH SCOPE',true,'0.02 0.36 0.45');
        const pnSummary = mfgDeliveryPnQuantities(delivery).map(item => `${item.fgpn} x ${item.qty == null ? '-' : Number(item.qty).toLocaleString('en-US')}`).join('  |  ');
        text(40,532,9,mfgPdfShort(pnSummary || 'PO scope',92),true);
        tableTop = 490;
      } else {
        text(40,738,11,'GOODS LIST - CONTINUED',true,'0.02 0.36 0.45');
        tableTop = 705;
      }

      text(40,tableTop+15,9,firstPage ? 'GOODS TO TRANSFER' : `GOODS TO TRANSFER - CONTINUED`,true,'0.02 0.36 0.45');
      const headerY = tableTop-13;
      fill(40,headerY,515,22,'0.04 0.36 0.45');
      const columns = [40,95,180,315,410,455,490,555];
      const headers = ['TYPE','MATERIAL PN','DESCRIPTION','LINKED FGPN','QTY','UNIT','REQUIRED'];
      headers.forEach((label,index) => text(columns[index]+5,headerY+7,6.6,label,true,'1 1 1'));
      const rowHeight = 32;
      rows.forEach((item,index) => {
        const y = headerY-rowHeight*(index+1);
        if (index % 2 === 0) fill(40,y,515,rowHeight,'0.975 0.98 0.985');
        line(40,y,555,y);
        const linked = (item.fgpns || mfgDeliveryFgpns(delivery)).join(', ');
        const requiredTime = String(item.requiredTime || `${delivery.date || ''} ${delivery.time || ''}`).replace('T',' ');
        const descriptionLines = mfgPdfWrap(item.desc,34), linkedLines = mfgPdfWrap(linked,23);
        const values = [mfgPdfShort(item.type || 'Material',9),mfgPdfShort(item.code,14),null,null,Number(item.qty || 0).toLocaleString('en-US'),item.unit || 'PCS',mfgPdfShort(requiredTime,16)];
        values.forEach((value,col) => { if (value != null) text(columns[col]+5,y+13,col === 6 ? 6.2 : 7,value,col === 1 || col === 4); });
        descriptionLines.forEach((value,lineIndex) => text(columns[2]+5,y+(lineIndex ? 7 : 19),6.7,value));
        linkedLines.forEach((value,lineIndex) => text(columns[3]+5,y+(lineIndex ? 7 : 19),6.5,value));
      });
      stroke(40,headerY-rowHeight*rows.length,515,22+rowHeight*rows.length);
      columns.slice(1,-1).forEach(x => line(x,headerY-rowHeight*rows.length,x,headerY+22));

      if (lastPage) {
        if (delivery.notes) { text(40,180,7,'WAREHOUSE NOTES',true,'0.30 0.35 0.39'); text(40,166,8,mfgPdfShort(delivery.notes,105)); }
        text(40,143,8,'TRANSFER SIGNATURES',true,'0.02 0.36 0.45');
        stroke(40,63,245,65); stroke(310,63,245,65);
        line(56,88,269,88,'0.55 0.60 0.64'); line(326,88,539,88,'0.55 0.60 0.64');
        text(56,112,7,'WAREHOUSE TEAM LEADER',true,'0.30 0.35 0.39'); text(56,73,7,warehouseLeader);
        text(326,112,7,'MANUFACTURING RECEIVER',true,'0.30 0.35 0.39'); text(326,73,7,delivery.receiver);
      }
      text(40,27,6.5,`Generated by LaunchOps on ${generatedDate} | Audit reference: ${delivery.code}`,false,'0.42 0.47 0.51');
      return commands.join('\n');
    }
    function mfgCreateDeliveryPdfBlob(delivery) {
      const materials = delivery.materials?.length ? delivery.materials : [{ type:'Material',code:'-',desc:'No material lines recorded',fgpns:mfgDeliveryFgpns(delivery),qty:0,unit:'-',requiredTime:`${delivery.date || ''} ${delivery.time || ''}` }];
      const chunks = [materials.slice(0,8)];
      for (let index=8; index<materials.length; index+=14) chunks.push(materials.slice(index,index+14));
      const streams = chunks.map((rows,index) => mfgPdfStream(delivery,rows,index,chunks.length,index===0,index===chunks.length-1));
      const objects = [null,'','',
        '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
        '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
      ];
      const pageRefs = [];
      streams.forEach((stream,index) => {
        const pageObject = 5 + index*2, contentObject = pageObject + 1;
        pageRefs.push(`${pageObject} 0 R`);
        objects[pageObject] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObject} 0 R >>`;
        objects[contentObject] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
      });
      objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
      objects[2] = `<< /Type /Pages /Kids [${pageRefs.join(' ')}] /Count ${pageRefs.length} >>`;
      let pdf = '%PDF-1.4\n';
      const offsets = [0];
      for (let index=1; index<objects.length; index++) { offsets[index] = pdf.length; pdf += `${index} 0 obj\n${objects[index]}\nendobj\n`; }
      const xrefOffset = pdf.length;
      pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
      for (let index=1; index<objects.length; index++) pdf += `${String(offsets[index]).padStart(10,'0')} 00000 n \n`;
      pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
      return new Blob([pdf],{ type:'application/pdf' });
    }
    function mfgDownloadDeliveryPdf(delivery) {
      const blob = mfgCreateDeliveryPdfBlob(delivery);
      const fileName = delivery.documentFileName || `warehouse-to-manufacturing_${String(delivery.code).replace(/[^A-Za-z0-9_-]/g,'-')}.pdf`;
      delivery.documentFileName = fileName;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = fileName;
      document.body.appendChild(link); link.click(); document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return fileName;
    }
    function mfgRedownloadDeliveryPdf(code) {
      const delivery = MFG_DELIVERIES.find(item => item.code === code);
      if (!delivery?.documentGeneratedAt || !MFG_DELIVERY_RECEIVERS.includes(delivery.receiver)) return openModal('Document not available', 'Generate the delivery document after selecting the Manufacturing Receiver.');
      mfgDownloadDeliveryPdf(delivery);
    }
    async function mfgGenerateDeliveryDocument() {
      if (currentRole !== 'wh_lead') return openModal('Warehouse Team Leader action', 'Only the Warehouse Team Leader can generate the warehouse-to-manufacturing delivery document.');
      const delivery = mfgCodeVerification.validDelivery || MFG_DELIVERIES.find(d => d.code === openMfgDeliveryId);
      if (!delivery) return;
      if (!MFG_DELIVERY_RECEIVERS.includes(delivery.receiver)) {
        return openModal('Receiver required', 'Select a manufacturing receiver from the predefined list before generating the document.');
      }
      if (launchApi.connected && delivery.backendId) {
        try {
          const record = await launchApiRequest(`/warehouse/launches/${encodeURIComponent(delivery.backendId)}/document`, { method:'POST' });
          launchApiApplyLaunch(record);
        } catch (error) {
          return openModal('Document could not be generated', error.message);
        }
      }
      delivery.status = 'Document Generated';
      delivery.statusType = mfgStatusType('Document Generated');
      delivery.documentGeneratedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
      delivery.documentGeneratedBy = productionActor();
      const generatedFileName = mfgDownloadDeliveryPdf(delivery);
      if (!delivery.docUploaded) {
        delivery.status = 'Waiting for Signed PDF';
        delivery.statusType = mfgStatusType('Waiting for Signed PDF');
      }
      mfgAuditEvent('Delivery document generated',delivery,`${generatedFileName} generated by ${delivery.documentGeneratedBy} for ${delivery.materials.length} goods line${delivery.materials.length === 1 ? '' : 's'}; Manufacturing Receiver: ${delivery.receiver}.`);
      openModal('PDF document generated', `${generatedFileName} has been downloaded. Print it for the Manufacturing Receiver to sign, then upload the signed PDF.`);
      renderPage();
    }
    function mfgSetSignedFile(field, value) {
      if (!openMfgDeliveryId) return;
      const delivery = MFG_DELIVERIES.find(d => d.code === openMfgDeliveryId);
      if (!delivery) return;
      if (!delivery.documentGeneratedAt || !MFG_DELIVERY_RECEIVERS.includes(delivery.receiver)) {
        fileInput.value = '';
        return openModal('Generate the delivery document first', 'Validate the delivery code, select the Manufacturing Receiver, and generate the formal document before uploading its signed PDF.');
      }
      delivery[field] = value;
      renderPage();
    }
    async function mfgHandleSignedUpload(fileInput) {
      if (currentRole !== 'wh_lead') return openModal('Warehouse Team Leader action', 'Only the Warehouse Team Leader can upload the receiver-signed manufacturing reception document.');
      const file = fileInput.files[0];
      if (!file) return;
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        openModal('Invalid file', 'Only PDF files are accepted for signed delivery documents.');
        fileInput.value = '';
        return;
      }
      const delivery = MFG_DELIVERIES.find(d => d.code === openMfgDeliveryId);
      if (!delivery) return;
      if (launchApi.connected && delivery.backendId) {
        const form = new FormData();
        form.append('signed_pdf', file, file.name);
        try {
          const record = await launchApiRequest(`/warehouse/launches/${encodeURIComponent(delivery.backendId)}/signed-reception`, { method:'POST', body:form });
          launchApiApplyLaunch(record);
        } catch (error) {
          fileInput.value = '';
          return openModal('Signed document was not saved', error.message);
        }
      }
      delivery.signedFileName = file.name;
      delivery.signedBy = productionActor();
      delivery.signedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
      delivery.docUploaded = true;
      delivery.status = 'Signed Document Uploaded';
      delivery.statusType = mfgStatusType('Signed Document Uploaded');
      const before = poLifecycle(delivery.po);
      const deliveryFgpns = delivery.fgpns?.length ? delivery.fgpns : (delivery.fgpn ? [delivery.fgpn] : []);
      mfgDeliveryPnQuantities(delivery).forEach(line => {
        mfgNormalizeLaunchLine(delivery,line);
        if (line.status === 'Unplanned') line.status = 'In Progress';
        line.startedAt = delivery.signedAt;
        line.startedBy = delivery.signedBy;
      });
      syncMfgDeliveryLifecycle(delivery);
      const after = poLifecycle(delivery.po);
      recordPoLifecycleChange(delivery.po,before,after,productionActor(),`Warehouse Team Leader uploaded the receiver-signed manufacturing reception document${deliveryFgpns.length ? ` for ${deliveryFgpns.join(', ')}` : ''}`,file.name);
      mfgAuditEvent('Receiver-signed document uploaded',delivery,`${file.name} uploaded by ${delivery.signedBy} at ${delivery.signedAt}; Manufacturing Receiver: ${delivery.receiver}.`);
      openModal('Signed document uploaded · production started', `${delivery.po} is now ${after}. The signed reception document is stored and awaits Launch validation before warehouse stock is reduced.`);
      renderPage();
    }
    async function mfgConfirmDelivery() {
      const delivery = MFG_DELIVERIES.find(d => d.code === openMfgDeliveryId);
      if (!delivery) return;
      if (!['engineer','manager'].includes(currentRole)) {
        return openModal('Launch validation required', 'The assigned Launch Engineer or Launch Manager must validate the signed document before stock is updated.');
      }
      if (!delivery.docUploaded) {
        return openModal('Cannot confirm delivery', 'Signed document upload is required before stock can be updated.');
      }
      if (delivery.status === 'Delivered') {
        return openModal('Already completed', 'This delivery has already been confirmed.');
      }
      if (launchApi.connected && delivery.backendId) {
        try {
          const record = await launchApiRequest(`/launches/${encodeURIComponent(delivery.backendId)}/confirm-reception`, { method:'POST' });
          launchApiApplyLaunch(record);
        } catch (error) {
          return openModal('Reception could not be confirmed', error.message);
        }
      }
      delivery.status = 'Delivered';
      delivery.statusType = mfgStatusType('Delivered');
      delivery.completedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
      delivery.validatedBy = productionActor();
      delivery.materials.forEach(item => {
        const m = MATERIALS.find(x => x.code === item.code);
        if (m) m.warehouse = Math.max(0, m.warehouse - item.qty);
      });
      AUDIT_LOGS.unshift({ id:`AUD-${AUDIT_LOGS.length + 11000}`, date:delivery.completedAt, user:productionActor(), module:'Manufacturing Delivery', action:'Signed Document Validated', entity:delivery.code, project:delivery.project, po:delivery.po, details:`Signed reception document validated; warehouse stock reduced for ${delivery.materials.length} material rows.` });
      openModal('Signed document validated · stock updated', 'The evidence is validated and warehouse stock quantities have been adjusted. The PO production status remains In Progress.');
      renderPage();
    }

    function pageMfgDeliveryCreate() {
      if (can('createMfgDelivery') !== true && can('requestMfgDelivery') !== true) {
        return `<div class="card">${emptyStateBlock('Insufficient permissions', 'Your role cannot create manufacturing deliveries.', null)}</div>`;
      }
      const step = mfgWizardStep;
      const steps = ['Project & PO', 'Launch Quantities', 'Review & Save'];
      const simulationReady = mfgWizardFeasibilityPassed();
      const minutesReady = !!simMeetingSaved;
      const meetingReady = simulationReady && minutesReady;
      const selectedFgpns = mfgWizardSanitizeFgpns();

      let body = '';
      if (step === 1) {
        const projectPos = mfgEligiblePos(mfgWizard.project);
        const selectedPo = POS.find(po => po.id === mfgWizard.po);
        const eligibleParts = mfgEligibleOrders(mfgWizard.po);
        body = `<div class="card mfg-create-card">
      <div class="mfg-create-head"><div><h3>Project and Purchase Order</h3></div>${selectedPo ? statusBadge(poLifecycle(selectedPo.id),productionStatusType(poLifecycle(selectedPo.id))) : ''}</div>
      <div class="mfg-create-body">
      <div class="mfg-create-grid">
        <div class="mfg-create-field">
          <label>Project</label>
          <select class="sim-select" onchange="mfgWizardSetProject(this.value)">
            ${writableProjects().map(p => `<option value="${p.name}" ${mfgWizard.project === p.name ? 'selected' : ''}>${p.name}</option>`).join('')}
          </select>
        </div>
        <div class="mfg-create-field">
          <label>Purchase Order</label>
          <select class="sim-select" onchange="mfgWizardSetPo(this.value)">
            ${projectPos.map(po => `<option value="${po.id}" ${mfgWizard.po === po.id ? 'selected' : ''}>${po.id} · ${poLifecycle(po.id)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="mfg-context-strip">
        <div class="mfg-context-item"><span>Project</span><strong>${selectedPo?.project || '—'}</strong></div>
        <div class="mfg-context-item"><span>Customer</span><strong>${selectedPo?.customer || '—'}</strong></div>
        <div class="mfg-context-item"><span>Eligible PNs</span><strong>${eligibleParts.length}</strong></div>
        <div class="mfg-context-item"><span>Required delivery</span><strong>${selectedPo?.delivery || 'Not set'}</strong></div>
      </div>
      </div>
      <div class="mfg-create-actions"><div></div><div><button class="btn primary" onclick="mfgWizardContinueFromContext()">Continue</button></div></div>
    </div>`;
      } else if (step === 2) {
        const eligibleParts = mfgEligibleOrders(mfgWizard.po);
        const totalLaunchQty = selectedFgpns.reduce((sum,fgpn) => sum + Number(mfgWizard.fgpnQtys[fgpn] || 0),0);
        const allPartsSelected = eligibleParts.length > 0 && eligibleParts.every(order => selectedFgpns.includes(order.fgpn));
        const materialRows = mfgMaterialsForSelection(mfgWizard.po,selectedFgpns);
        const feasibilityPassed = mfgWizardFeasibilityPassed();
        const feasibility = mfgWizard.feasibility;
        body = `<div class="card mfg-create-card">
      <div class="mfg-create-head"><div><h3>PN Launch Quantities</h3><span class="mfg-create-head-context mono">${mfgWizard.po}</span></div>${statusBadge(poLifecycle(mfgWizard.po),productionStatusType(poLifecycle(mfgWizard.po)))}</div>
      <div class="mfg-create-body">
        <div class="mfg-scope-toolbar"><div class="mfg-selection-count"><strong>${eligibleParts.length}</strong><span>Available PNs</span></div><label class="mfg-select-all"><input type="checkbox" ${allPartsSelected ? 'checked' : ''} onchange="mfgWizardSelectAllFgpns(this.checked)"> Select all</label></div>
        <div class="mfg-pn-grid">${eligibleParts.map(order => {
          const selected = selectedFgpns.includes(order.fgpn);
          const pnKey = mfgBomKeyForFgpn(order.fgpn,mfgWizard.po);
          const pn = pnsForPo(mfgWizard.po).find(item => item.pn === pnKey);
          const summary = mfgPnLaunchSummary(mfgWizard.po,order.fgpn);
          const fgMaterials = materialRows.filter(row => row.fgpns.includes(order.fgpn));
          return `<div class="mfg-pn-option ${selected ? 'selected' : ''}"><input type="checkbox" aria-label="Select ${order.fgpn}" ${selected ? 'checked' : ''} onchange="mfgWizardToggleFgpn('${order.fgpn}',this.checked)"><div class="mfg-pn-main"><strong>${order.fgpn}</strong><span>${pn?.desc || order.desc || 'Finished good'} · Due ${order.due || 'not set'}</span></div><div class="mfg-pn-launch"><div class="mfg-pn-launch-meta"><div><span>PO Quantity</span><strong>${summary.ordered.toLocaleString()}</strong></div><div><span>In Manufacturing</span><strong>${summary.launched.toLocaleString()}</strong></div><div><span>Pending Transfer</span><strong>${summary.reserved.toLocaleString()}</strong></div><div><span>Available</span><strong>${summary.remaining.toLocaleString()}</strong></div></div><div class="mfg-pn-launch-input"><label>This Launch</label><input class="mfg-inline-input qty" type="number" min="1" max="${summary.remaining}" placeholder="0" value="${selected && Number(mfgWizard.fgpnQtys[order.fgpn]) > 0 ? mfgWizard.fgpnQtys[order.fgpn] : ''}" ${selected ? '' : 'disabled'} onchange="mfgWizardSetFgpnQty('${order.fgpn}',this.value)"></div></div>${selected && Number(mfgWizard.fgpnQtys[order.fgpn]) > 0 ? `<details class="mfg-fg-materials"><summary><span>Materials for ${order.fgpn}</span><strong>${fgMaterials.length} material${fgMaterials.length === 1 ? '' : 's'}</strong></summary><div class="mfg-fg-material-list">${fgMaterials.map(row => { const required = Number(row.fgpnRequirements?.[order.fgpn] || 0); const available = Number(row.warehouse || 0) + Number(row.wip || 0); const shortage = Math.max(0,required - available); return `<div class="mfg-fg-material-row"><div><strong class="mono">${row.code}</strong><span>${row.desc}</span></div><div><span>Required</span><strong>${required.toLocaleString()} ${row.unit}</strong></div><div><span>Stock + WIP</span><strong class="${shortage ? 'stock-danger-text' : ''}">${available.toLocaleString()} ${row.unit}</strong></div><div><span>Used this launch</span><strong>${required.toLocaleString()} ${row.unit}</strong></div></div>`; }).join('')}</div></details>` : ''}</div>`;
        }).join('')}</div>
        ${feasibility ? `<div class="mfg-feasibility ${feasibilityPassed ? 'passed' : 'failed'}"><div>${icon(feasibilityPassed ? 'check' : 'warning','')}<div><strong>${feasibilityPassed ? 'Configuration is feasible' : 'Configuration cannot be launched'}</strong><span>${feasibilityPassed ? 'Warehouse stock and usable WIP cover the selected material quantities.' : 'Correct the material quantities below, then run the check again.'}</span></div></div>${!feasibilityPassed ? `<div class="mfg-shortage-list">${feasibility.shortages.map(item => `<div><strong class="mono">${item.code}</strong><span>Required ${item.required.toLocaleString()} · entered ${item.requested.toLocaleString()} · available ${item.available.toLocaleString()}</span><b>${item.missing.toLocaleString()} missing</b></div>`).join('')}</div>` : ''}</div>` : ''}
      </div>
      <div class="mfg-create-actions"><div><button class="btn" onclick="mfgWizardGoStep(1)">Back</button></div><div><span class="mfg-action-total">${selectedFgpns.length} PN${selectedFgpns.length === 1 ? '' : 's'} · ${totalLaunchQty.toLocaleString()} units</span><button class="btn secondary" onclick="mfgWizardCheckFeasibility()">${icon('sim','')} Check feasibility</button><button class="btn primary" onclick="mfgWizardContinueFromParts()" ${feasibilityPassed ? '' : 'disabled'}>Review Delivery</button></div></div>
    </div>`;
      } else if (step === 3) {
        const rows = mfgMaterialsForSelection(mfgWizard.po,selectedFgpns).filter(row => mfgWizard.selectedMaterials[row.code]);
        const launchPlan = selectedFgpns.map(fgpn => ({ fgpn,qty:Number(mfgWizard.fgpnQtys[fgpn] || 0),summary:mfgPnLaunchSummary(mfgWizard.po,fgpn) }));
        const totalLaunchQty = launchPlan.reduce((sum,line) => sum + line.qty,0);
        body = `<div class="card mfg-create-card">
      <div class="mfg-create-head"><div><h3>Review and Save</h3><span class="mfg-create-head-context mono">${mfgWizard.po}</span></div>${statusBadge(meetingReady ? 'Ready' : 'Approval Required',meetingReady ? 'success' : 'warning')}</div>
      <div class="mfg-create-body">
        <div class="mfg-review-summary"><div><span>Project</span><strong>${mfgWizard.project}</strong></div><div><span>Purchase Order</span><strong class="mono">${mfgWizard.po}</strong></div><div><span>Partial Launch Qty</span><strong class="mono">${totalLaunchQty.toLocaleString()} units</strong></div><div><span>Priority</span><strong>${mfgWizard.priority}</strong></div></div>
        <div class="section-title">PN Launch Plan</div><div class="table-scroll" style="margin-bottom:16px;"><table><thead><tr><th>Finished-Good PN</th><th>Ordered</th><th>Previously Launched</th><th>Already Reserved</th><th>This Launch</th><th>Available After</th></tr></thead><tbody>${launchPlan.map(line => `<tr><td class="mono" style="font-weight:600;">${line.fgpn}</td><td class="mono">${line.summary.ordered.toLocaleString()}</td><td class="mono">${line.summary.launched.toLocaleString()}</td><td class="mono">${line.summary.reserved.toLocaleString()}</td><td class="mono" style="font-weight:600;color:var(--primary);">${line.qty.toLocaleString()}</td><td class="mono">${Math.max(0,line.summary.remaining-line.qty).toLocaleString()}</td></tr>`).join('')}</tbody></table></div>
        <div class="section-title">Material Transfer</div>
        <div class="table-scroll"><table class="mfg-material-table"><thead><tr><th>Material PN</th><th>Description</th><th>Linked PNs</th><th>Quantity</th><th>Unit</th><th>Required Time</th></tr></thead><tbody>${rows.map(row => `<tr><td class="mono" style="font-weight:600;">${row.code}</td><td>${row.desc}</td><td><div class="mfg-pn-tags">${row.fgpns.map(fgpn => `<span class="mfg-pn-tag">${fgpn}${row.fgpnRequirements?.[fgpn] ? ` · ${Number(row.fgpnRequirements[fgpn]).toLocaleString()}` : ''}</span>`).join('')}</div></td><td class="mono" style="font-weight:600;">${Number(mfgWizard.qtys[row.code] || 0).toLocaleString()}</td><td class="mono">${row.unit}</td><td class="mono">${String(mfgWizard.itemTimes[row.code] || '').replace('T',' ') || '—'}</td></tr>`).join('')}</tbody></table></div>
        <div class="mfg-code-policy"><div class="mfg-code-policy-icon">${icon('history','')}</div><div><strong>Delivery Code</strong><span>Generated after save · Valid 48 hours · Single use</span></div></div>
        <div class="mfg-gate-row"><span class="mfg-gate-pill">${icon('check','')} Feasibility checked</span><span class="mfg-gate-pill ${minutesReady ? '' : 'pending'}">${icon(minutesReady ? 'check' : 'doc','')} ${minutesReady ? 'Meeting minutes attached' : 'Meeting minutes PDF required'}</span></div>
        <div class="mfg-minutes-panel">
          <input id="mfgMeetingMinutesFile" type="file" accept=".pdf,application/pdf" class="meeting-file-input" onchange="uploadMfgMeetingMinutes(this)">
          <div class="meeting-upload ${minutesReady ? 'has-file' : ''}">
            <div class="meeting-upload-icon">${icon(minutesReady ? 'FileText' : 'upload','')}</div>
            <div class="meeting-upload-copy"><strong>${minutesReady ? poEsc(simMeetingFileName || 'Meeting minutes.pdf') : 'Attach meeting minutes'}</strong><span>${minutesReady ? 'PDF attached to this delivery instruction.' : 'PDF only · required before generating the delivery code.'}</span></div>
            <button type="button" class="btn meeting-upload-action" onclick="document.getElementById('mfgMeetingMinutesFile').click()">${minutesReady ? 'Replace PDF' : 'Choose PDF'}</button>
          </div>
        </div>
      </div>
      <div class="mfg-create-actions"><div><button class="btn" onclick="mfgWizardGoStep(2)">Back</button></div><div><button class="btn primary" onclick="mfgWizardSaveInstruction()" ${meetingReady ? '' : 'disabled'}>Save Instruction & Generate Code</button></div></div>
    </div>`;
      }

      return `<div class="mfg-create-shell">
  <div class="stepper">
    ${steps.map((s, i) => `
      <div class="step ${i + 1 < step ? 'done' : i + 1 === step ? 'active' : ''}"><div class="step-circle">${i + 1 < step ? '✓' : i + 1}</div><div class="step-label">${s}</div></div>
      ${i < steps.length - 1 ? `<div class="step-line ${i + 1 < step ? 'done' : ''}"></div>` : ''}
    `).join('')}
  </div>
  ${body}</div>`;
    }

    /* ---- Manufacturing Delivery Workspace ---- */
    function openMfgDelivery(code) {
      const delivery = MFG_DELIVERIES.find(item => item.code === code);
      if (!delivery) return;
      openMfgDeliveryId = code;
      openContext.project = delivery.project;
      openContext.po = delivery.po;
      mfgActiveTab = 'Overview';
      navigate('mfg-delivery-workspace');
    }
    function showMfgTab(tab) { mfgActiveTab = tab; renderPage(); }
    const MFG_STEPS_ORDER = ['Code Generated', 'Code Used', 'Document Generated', 'Waiting for Signed PDF', 'Signed Document Uploaded', 'Delivered'];

    function pageMfgDeliveryWorkspace() {
      const d = MFG_DELIVERIES.find(x => x.code === openMfgDeliveryId) || MFG_DELIVERIES[0];
      const tab = mfgActiveTab;
      const stepIdx = MFG_STEPS_ORDER.indexOf(d.status);
      const expired = d.expiresAt && isCodeExpired(d.expiresAt);
      const remaining = d.expiresAt ? formatRemainingTime(d.expiresAt) : '—';
      const pnLaunchLines = mfgDeliveryPnQuantities(d);
      const totalPnLaunch = pnLaunchLines.reduce((sum,line) => sum + Number(line.qty || 0),0);
      const generatedMs = d.generatedAt ? new Date(d.generatedAt.replace(' ', 'T')).getTime() : 0;
      const expiresMs = d.expiresAt ? new Date(d.expiresAt.replace(' ', 'T')).getTime() : 0;
      const validityWindow = generatedMs && expiresMs ? Math.max(1,expiresMs-generatedMs) : 1;
      const validityLeft = expiresMs ? Math.max(0,expiresMs-Date.now()) : 0;
      const validityPct = expired || d.used ? 0 : Math.max(0,Math.min(100,Math.round((validityLeft/validityWindow)*100)));
      const codeState = expired ? 'Expired' : d.used ? 'Used · Locked' : 'Active · Single-use';
      const codeStateClass = expired ? 'danger' : d.used ? 'warning' : '';
      const validityClass = expired ? 'danger' : validityPct < 25 ? 'warning' : '';
      const nextActionByStatus = {
        'Code Generated':'Warehouse Team Leader enters the delivery code',
        'Code Used':'Select receiver and generate the delivery document',
        'Document Generated':'Upload the receiver-signed PDF',
        'Waiting for Signed PDF':'Upload the receiver-signed PDF',
        'Signed Document Uploaded':'Launch team validates the signed document',
        'Delivered':'Warehouse transfer completed',
        'Cancelled':'No further action',
      };
      const nextAction = expired ? 'Launch Engineer regenerates the delivery code' : (nextActionByStatus[d.status] || 'Continue the manufacturing delivery workflow');
      let tabContent = '';

      const detailsCard = `<div class="card mfg-delivery-command" style="margin-bottom:16px;">
      <div class="mfg-command-layout">
        <section class="mfg-code-console" aria-label="Delivery code control">
          <div class="mfg-code-console-head"><div class="mfg-code-console-label">${icon('lock','')} Delivery Code</div><span class="mfg-code-state ${codeStateClass}">${codeState}</span></div>
          <div class="mfg-code-value">${d.code}</div>
          <div class="mfg-code-copy">Warehouse access code · valid once for a maximum of 48 hours</div>
          <div class="mfg-validity-block">
            <div class="mfg-validity-row"><div><span>Remaining validity</span><strong>${expired ? 'Expired' : d.used ? 'Code used' : remaining}</strong></div><small>${d.expiresAt ? `Until ${d.expiresAt}` : 'No expiry recorded'}</small></div>
            <div class="mfg-validity-track" aria-label="${validityPct}% code validity remaining"><div class="mfg-validity-fill ${validityClass}" style="width:${validityPct}%;"></div></div>
            ${['engineer','manager'].includes(currentRole) ? `<div class="mfg-code-actions"><button class="btn primary" onclick="mfgDeliveryCopyCode('${d.code}')">${icon('copy','')} Copy Code</button><button class="btn" onclick="mfgDeliveryPrintCode('${d.code}')">${icon('print','')} Print</button><button class="btn" onclick="mfgDeliveryRegenerateCode('${d.code}')">${icon('refresh','')} Regenerate</button></div>` : ''}
          </div>
        </section>
        <section class="mfg-command-summary" aria-label="Delivery summary">
          <div class="mfg-command-summary-head"><div><span>Delivery Summary</span><h3>${d.project} Manufacturing Transfer</h3></div>${statusBadge(expired ? 'Code Expired' : d.status,expired ? 'danger' : d.statusType)}</div>
          <div class="mfg-command-primary">
            <div class="mfg-command-field"><span>Project</span><strong>${d.project}</strong></div>
            <div class="mfg-command-field"><span>Purchase Order</span><strong class="mono">${d.po}</strong></div>
          </div>
          <div class="mfg-launch-scope">
            <div class="mfg-launch-scope-head"><span>PN Launch Scope</span><strong>${totalPnLaunch.toLocaleString()} units</strong></div>
            <div class="mfg-launch-scope-lines">${pnLaunchLines.length ? pnLaunchLines.map(line => `<span class="mfg-launch-scope-line">${line.fgpn}<b>${line.qty == null ? '—' : Number(line.qty).toLocaleString()}</b></span>`).join('') : '<span class="hint">No PN launch quantities recorded</span>'}</div>
          </div>
          <div class="mfg-command-handover">
            <div class="mfg-command-field"><span>Manufacturing Receiver</span><strong style="color:${d.receiver ? '#000' : 'var(--warning)'};">${d.receiver || 'Awaiting Warehouse Team Leader'}</strong></div>
            <div class="mfg-command-field"><span>First Required Time</span><strong class="mono">${d.date || '—'} ${d.time || ''}</strong></div>
            <div class="mfg-command-field"><span>Priority</span><strong>${d.priority || 'Normal'}</strong></div>
          </div>
        </section>
      </div>
      <div class="mfg-command-footer">
        <div class="mfg-command-trace"><div class="mfg-command-trace-icon">${icon(d.used ? 'lock' : 'check','')}</div><div><span>Code Usage</span><strong>${d.used ? 'Used once · no longer valid' : 'Unused · ready for Warehouse TL'}</strong></div></div>
        <div class="mfg-command-trace"><div class="mfg-command-trace-icon">${icon('history','')}</div><div><span>Generated</span><strong class="mono">${d.generatedAt || '—'}</strong></div></div>
        <div class="mfg-command-trace"><div class="mfg-command-trace-icon">${icon(expired ? 'alert' : 'history','')}</div><div><span>Expires</span><strong class="mono">${d.expiresAt || '—'}</strong></div></div>
        <div class="mfg-command-trace mfg-command-next"><div class="mfg-command-trace-icon">${icon(expired ? 'refresh' : 'chevRight','')}</div><div><span>Next Action</span><strong>${nextAction}</strong></div></div>
      </div>
    </div>`;

      if (tab === 'Overview') {
        tabContent = `${detailsCard}<div class="card" style="margin-bottom:16px;"><div class="section-title">PN Launch Plan</div><div class="table-scroll"><table><thead><tr><th>Finished-Good PN</th><th>Launch Quantity</th><th>Production Done</th><th>Packaged</th><th>Customer Delivered</th><th>Lifecycle Status</th></tr></thead><tbody>${pnLaunchLines.map(line => { mfgNormalizeLaunchLine(d,line); return `<tr><td class="mono" style="font-weight:750;">${line.fgpn}</td><td class="mono">${Number(line.qty || 0).toLocaleString()}</td><td class="mono">${Number(line.producedQty || 0).toLocaleString()}</td><td class="mono">${Number(line.packagedQty || 0).toLocaleString()}</td><td class="mono">${Number(line.customerDeliveredQty || 0).toLocaleString()}</td><td>${statusBadge(line.status,productionStatusType(line.status))}</td></tr>`; }).join('')}</tbody></table></div></div><div class="card" style="margin-bottom:16px;">
      <div class="section-title">Delivery Progress</div>
      <div class="h-timeline">
        ${MFG_STEPS_ORDER.map((s, i) => `<div class="h-tl-step ${d.status === 'Cancelled' ? '' : (i < stepIdx ? 'done' : i === stepIdx ? 'active' : '')}">
          <div class="h-tl-line"></div>
          <div class="h-tl-dot">${i < stepIdx || (i === stepIdx && d.status === 'Delivered') ? '✓' : i + 1}</div>
          <div class="h-tl-label">${s}</div>
        </div>`).join('')}
      </div>
      ${d.status === 'Cancelled' ? `<div class="readonly-banner" style="margin-top:14px; margin-bottom:0;">${icon('close', '')} This delivery was cancelled and will not proceed.</div>` : ''}
    </div>
    <div class="grid g4" style="margin-bottom:16px;">
      <div class="kpi-card"><div class="kpi-label">Launch Quantity</div><div class="kpi-value">${totalPnLaunch ? totalPnLaunch.toLocaleString() : '—'}</div></div>
      <div class="kpi-card"><div class="kpi-label">Materials</div><div class="kpi-value">${d.materials.length}</div></div>
      <div class="kpi-card"><div class="kpi-label">Signed Document</div><div class="kpi-value" style="font-size:16px; color:${d.docUploaded ? 'var(--success)' : 'var(--warning)'}">${d.docUploaded ? 'Uploaded' : 'Missing'}</div></div>
      <div class="kpi-card"><div class="kpi-label">Notes</div><div style="font-size:12.5px; color:var(--ink-soft); margin-top:6px;">${d.notes || '—'}</div></div>
    </div>`;
      } else if (tab === 'Materials') {
        tabContent = `<div class="card">
      <div class="section-title">Materials Delivered</div>
      <div class="table-scroll"><table class="mfg-material-table"><thead><tr><th>Material PN</th><th>Description</th><th>Type</th><th>Linked PNs · Requirement</th><th>BOM Required</th><th>Available at Creation</th><th>Transfer Qty</th><th>Unit</th><th>Required Time</th></tr></thead>
      <tbody>${d.materials.map(m => `<tr><td class="mono">${m.code}</td><td>${m.desc}</td><td>${m.type || 'Material'}</td><td><div class="mfg-pn-tags">${(m.fgpns || mfgDeliveryFgpns(d)).map(fgpn => `<span class="mfg-pn-tag">${fgpn}${m.fgpnRequirements?.[fgpn] ? ` · ${Number(m.fgpnRequirements[fgpn]).toLocaleString()}` : ''}</span>`).join('')}</div></td><td class="mono">${Number(m.required || 0).toLocaleString()}</td><td class="mono">${Number(m.warehouse || 0).toLocaleString()}</td><td class="mono" style="font-weight:700;">${Number(m.qty || 0).toLocaleString()}</td><td class="mono">${m.unit || 'PCS'}</td><td class="mono">${String(m.requiredTime || `${d.date || ''}T${d.time || ''}`).replace('T',' ') || '—'}</td></tr>`).join('')}</tbody></table></div>
    </div>`;
      } else if (tab === 'Documents') {
        tabContent = `<div class="card">
      <div class="section-title">Generated Delivery Document</div>
      ${d.documentGeneratedAt ? `<div style="display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:13px 0 18px;border-bottom:1px solid var(--border);"><div style="display:flex;align-items:center;gap:10px;">${icon('doc','')}<div><strong style="display:block;font-size:13px;">${d.documentFileName || `warehouse-to-manufacturing_${d.code}.pdf`}</strong><span class="hint">Generated ${d.documentGeneratedAt} by ${d.documentGeneratedBy || 'Warehouse Team Leader'} · Receiver: ${d.receiver}</span></div>${statusBadge('Generated PDF','info')}</div>${permBtn('printDeliveryNote','Download Again','download',`mfgRedownloadDeliveryPdf('${d.code}')`)}</div>` : `<div class="empty-state" style="padding:24px;">${icon('doc','')}<div class="e-title">Delivery PDF not generated</div><div class="e-sub">The Warehouse Team Leader selects the receiver and generates the PDF after validating the delivery code.</div></div>`}
      <div class="section-title" style="margin-top:18px;">Signed Reception Document</div>
      ${d.docUploaded ? `<div style="display:flex; align-items:center; gap:10px; padding:10px 0;">${icon('doc', '')} <span style="font-size:13px; font-weight:600;">${d.signedFileName || 'signed-delivery-note.pdf'}</span>${statusBadge('Signed', 'success')}</div>`
            : `<div class="empty-state" style="padding:24px;">${icon('doc', '')}<div class="e-title">No signed document uploaded</div><div class="e-sub">Upload the delivery document after the Manufacturing Receiver has signed it.</div></div>`}
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:14px;">
        ${permBtn('uploadSignedDoc', 'Upload Signed Document', 'upload', "document.getElementById('signedDocInput').click()")}
        ${d.documentGeneratedAt ? permBtn('printDeliveryNote', 'Download Generated PDF', 'download', `mfgRedownloadDeliveryPdf('${d.code}')`) : ''}
      </div>
      <input id="signedDocInput" type="file" accept="application/pdf" style="display:none" onchange="mfgHandleSignedUpload(this)" />
    </div>`;
      } else if (tab === 'History') {
        tabContent = traceabilityWorkspace(auditContextEvents({ mfgCode:d.code }),`${d.code} manufacturing history`,'mfgCompleteHistoryTable');
      }

      return `
  <div class="workspace-header">
    <div>
      <span class="ws-id">${d.code}</span>
      <div class="ws-title">Manufacturing Delivery — ${d.project}</div>
      <div class="ws-meta">
        <div class="ws-meta-item"><span class="l">Project</span><span class="v">${d.project}</span></div>
        <div class="ws-meta-item"><span class="l">Purchase Order</span><span class="v mono">${d.po}</span></div>
        <div class="ws-meta-item"><span class="l">PN Launch Quantities</span><span class="v mono">${mfgDeliveryPnLabel(d)}</span></div>
        <div class="ws-meta-item"><span class="l">Receiver</span><span class="v">${d.receiver || 'Awaiting Warehouse Team Leader'}</span></div>
        <div class="ws-meta-item"><span class="l">Delivery Code</span><span class="v mono">${d.code}</span></div>
        <div class="ws-meta-item"><span class="l">Transfer Status</span>${statusBadge(d.status, d.statusType)}</div>
        <div class="ws-meta-item"><span class="l">Production Status</span>${statusBadge(syncMfgDeliveryLifecycle(d), productionStatusType(d.lifecycleStatus))}</div>
      </div>
    </div>
    <div class="ws-actions-row">
      ${permBtn('printDeliveryNote', 'Download Delivery PDF', 'download', `mfgRedownloadDeliveryPdf('${d.code}')`)}
      ${permBtn('uploadSignedDoc', 'Upload Signed Document', 'upload', "showMfgTab('Documents')")}
      ${d.docUploaded && d.status !== 'Delivered' && d.status !== 'Cancelled' ? permBtn('confirmMfgDelivery', 'Validate Signed Document', 'check', 'mfgConfirmDelivery()', 'primary') : ''}
      ${d.status === 'Pending Approval' ? permBtn('approveMfgDelivery', 'Approve', null, `openModal('Approve Delivery', 'This approves ${d.code} for the warehouse team to prepare and confirm.')`, 'primary') : ''}
    </div>
  </div>
  ${workspaceTabs(['Overview', 'Materials', 'Documents', 'History'], tab, 'showMfgTab')}
  ${tabContent}`;
    }

    /* =====================================================================
       ============ NEW MODULE: M09 — CUSTOMER DELIVERY TRACKING ==========
       ===================================================================== */
    /* Status is now a genuine field (set only via recordShipment/recordConfirmation), so this is a
       thin passthrough kept for call-site compatibility across list/workspace views. */
    function custEffectiveStatus(d) {
      return { label: d.status, type: d.statusType };
    }

    /* Breaks a PO's shipments into confirmed / shipped-unconfirmed / remaining buckets so the
       list view can show real progress instead of collapsing everything into one status word. */
    function custShipmentBreakdown(d) {
      const recorded=d.shipments.filter(shipment => shipment.status !== 'Planned');
      const confirmedQty = recorded.filter(shipment => !!shipment.confirmation).reduce((sum, shipment) => sum + shipment.qty, 0);
      const unconfirmedShippedQty = recorded.filter(shipment => !shipment.confirmation).reduce((sum, shipment) => sum + shipment.qty, 0);
      const remainingQty = Math.max(0,d.qty - d.delivered);
      return { confirmedQty, unconfirmedShippedQty, remainingQty };
    }

    function custTable(list, tableId = '', workspaceActions = false) {
      if (list.length === 0) return emptyStateBlock('No customer deliveries', 'No deliveries match this view yet.', null);
      return `<table${tableId ? ` id="${tableId}"` : ''}><thead><tr><th>Delivery</th><th>Customer</th><th>Project</th><th>PO</th><th>Quantity</th><th>Progress</th><th>Status</th><th data-export="false">Actions</th></tr></thead>
    <tbody>${list.map(d => {
        const es = custEffectiveStatus(d);
        const b = custShipmentBreakdown(d);
        const confirmedPct = d.qty > 0 ? Math.round((b.confirmedQty / d.qty) * 100) : 0;
        const shippedPct = d.qty > 0 ? Math.round((b.unconfirmedShippedQty / d.qty) * 100) : 0;
        const hasSplit = b.confirmedQty > 0 && (b.unconfirmedShippedQty > 0 || b.remainingQty > 0);
        return `<tr class="clickable-row" onclick="openCustDelivery('${d.code}')">
      <td class="mono">${d.code}</td><td>${d.customer}</td><td>${d.project}</td><td class="mono">${d.po}</td>
      <td class="mono">${b.confirmedQty.toLocaleString()} / ${d.qty.toLocaleString()}</td>
      <td style="min-width:130px;">
        <div class="progress-track" style="display:flex; overflow:hidden;" title="${b.confirmedQty.toLocaleString()} confirmed, ${b.unconfirmedShippedQty.toLocaleString()} shipped (unconfirmed), ${b.remainingQty.toLocaleString()} remaining">
          ${confirmedPct > 0 ? `<div style="width:${confirmedPct}%; background:var(--success);"></div>` : ''}
          ${shippedPct > 0 ? `<div style="width:${shippedPct}%; background:var(--warning);"></div>` : ''}
        </div>
        ${hasSplit ? `<div style="font-size:11px; color:var(--ink-faint); margin-top:3px;">${b.confirmedQty.toLocaleString()} confirmed${b.unconfirmedShippedQty > 0 ? `, ${b.unconfirmedShippedQty.toLocaleString()} in transit` : ''}</div>` : ''}
      </td>
      <td>${statusBadge(es.label, es.type)}</td>
      <td>${custActionIcons(d,workspaceActions)}</td>
    </tr>`;
      }).join('')}</tbody></table>`;
    }
    function custDeliveryCanBeDeleted(d) {
      return d.status !== 'Delivered' && !(d.shipments || []).some(shipment => !!shipment.confirmation);
    }
    function requestDeleteCustDelivery(code) {
      const delivery = CUST_DELIVERIES.find(item => item.code === code);
      if (!delivery) return openModal('Delivery not found', `${code} is no longer available.`);
      if (!workspaceCanDeleteDelivery(delivery) && can('deleteCustDelivery') !== true) return openModal('Deletion not permitted', 'Only an authorized user may delete this customer delivery.');
      if (!custDeliveryCanBeDeleted(delivery)) return openModal('Deletion unavailable', `${code} has a customer confirmation. Keep it in the history for traceability.`);
      openModal(`Delete ${code}?`, 'The customer delivery will be removed and its packaged PN quantities will become available for another delivery.', () => deleteCustDeliveryRecord(code), 'Delete');
    }
    function deleteCustDeliveryRecord(code) {
      const index = CUST_DELIVERIES.findIndex(item => item.code === code);
      if (index < 0 || !custDeliveryCanBeDeleted(CUST_DELIVERIES[index])) return;
      const [delivery] = CUST_DELIVERIES.splice(index,1);
      if (openCustDeliveryId === code) openCustDeliveryId = CUST_DELIVERIES[0]?.code || '';
      AUDIT_LOGS.unshift({ id:`AUD-${13000 + AUDIT_LOGS.length}`, date:new Date().toISOString().slice(0,16).replace('T',' '), user:productionActor(), module:'Customer Delivery', action:'Deleted before confirmation', entity:delivery.code, project:delivery.project, po:delivery.po, details:`${delivery.code} was removed before customer confirmation. Its packaged PN quantities were released.` });
      renderPage();
    }
    function custActionIcons(d,workspaceActions = false) {
      const workspaceDelete = workspaceActions && workspaceCanDeleteDelivery(d) ? workspaceDeleteIcon('customer',d) : '';
      return `<div class="icon-actions">
    <div class="icon-btn" title="View" onclick="stop(event); openCustDelivery('${d.code}')">${icon('view', '')}</div>
    <div class="icon-btn" title="Documents" onclick="stop(event); openCustDelivery('${d.code}'); custActiveTab='Documents'; renderPage();">${icon('doc', '')}</div>
    ${workspaceDelete}
  </div>`;
    }

    function setCustSearch(v) { custFilters.search = v; custPage = 1; renderPage(); }
    function setCustFilter(key, v) { custFilters[key] = v; custPage = 1; renderPage(); }
    function clearCustFilter(key) { custFilters[key] = ''; custPage = 1; renderPage(); }
    function resetCustFilters() { custFilters = { search: '', customer: '', project: '', po: '', status: '', date: '' }; custPage = 1; renderPage(); }
    function sortCust(key) { custSort.dir = (custSort.key === key) ? -custSort.dir : 1; custSort.key = key; renderPage(); }
    function setCustPage(n) { custPage = Math.max(1, n); renderPage(); }
    function visibleCustomerDeliveries() {
      if (currentRole === 'engineer') { const assigned=assignedProjectNames(); return CUST_DELIVERIES.filter(delivery => assigned.has(delivery.project)); }
      return CUST_DELIVERIES;
    }
    function filterCust() {
      const f = custFilters;
      return visibleCustomerDeliveries().filter(d => {
        if (f.search && !(`${d.code} ${d.customer} ${d.project} ${d.po}`.toLowerCase().includes(f.search.toLowerCase()))) return false;
        if (f.customer && d.customer !== f.customer) return false;
        if (f.project && d.project !== f.project) return false;
        if (f.po && d.po !== f.po) return false;
        if (f.status && d.status !== f.status) return false;
        if (f.date && d.date !== f.date) return false;
        return true;
      });
    }
    function custToolbarHtml() {
      const source=visibleCustomerDeliveries();
      const opt = (key, list, placeholder) => `<select class="tt-select" onchange="setCustFilter('${key}', this.value)">
    <option value="">${placeholder}</option>
    ${list.map(v => `<option value="${v}" ${custFilters[key] === v ? 'selected' : ''}>${v}</option>`).join('')}
  </select>`;
      return `<div class="table-toolbar">
    <div class="tt-search">${icon('search', '')}<input type="text" placeholder="Search delivery…" value="${custFilters.search}" oninput="setCustSearch(this.value)"/></div>
    ${opt('customer', uniqueValues(source, 'customer'), 'Customer')}
    ${opt('project', uniqueValues(source, 'project'), 'Project')}
    ${opt('po', uniqueValues(source, 'po'), 'Purchase Order')}
    ${opt('status', uniqueValues(source, 'status'), 'Status')}
    ${opt('date', uniqueValues(source, 'date'), 'Delivery Date')}
    <div class="tt-spacer"></div>
    <div class="tt-icon-btn" title="Reset" onclick="resetCustFilters()">${icon('close', '')}</div>
    <div class="tt-icon-btn" title="Refresh" onclick="refreshNotice()">${icon('refresh', '')}</div>
    <div class="tt-icon-btn" title="Export" onclick="exportNotice()">${icon('download', '')}</div>
  </div>`;
    }

    function pageCustDeliveryList() {
      if (can('viewCustDelivery') === false) {
        return `<div class="card">${emptyStateBlock('No access', 'Your role does not have access to customer deliveries.', null)}</div>`;
      }
      const rows = sortRows(filterCust(), custSort);
      const source=visibleCustomerDeliveries();
      const total = rows.length;
      const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      custPage = Math.min(custPage, totalPages);
      const pageRows = rows.slice((custPage - 1) * PAGE_SIZE, custPage * PAGE_SIZE);

      const totalUnitsOrdered = source.reduce((s, d) => s + d.qty, 0);
      const totalUnitsConfirmed = source.reduce((s, d) => s + custShipmentBreakdown(d).confirmedQty, 0);
      const stats = [
        { label: 'Created', value: source.filter(d => d.status === 'Created').length },
        { label: 'Shipped', value: source.filter(d => d.status === 'Shipped').length, color: 'var(--info)' },
        { label: 'Awaiting Confirmation', value: source.filter(d => d.status === 'Awaiting Confirmation').length, color: 'var(--warning)' },
        { label: 'Delivered', value: source.filter(d => d.status === 'Delivered').length, color: 'var(--success)' },
        { label: 'Units Confirmed', value: `${totalUnitsConfirmed.toLocaleString()} / ${totalUnitsOrdered.toLocaleString()}`, color: 'var(--success)' },
      ];
      const chips = filterChips(custFilters, { customer: 'Customer', project: 'Project', po: 'PO', status: 'Status', date: 'Date' }, 'clearCustFilter', 'resetCustFilters');
      const tableBody = pageRows.length ? `<table>
    <thead><tr>
      ${sortTh('Delivery', 'code', custSort, 'sortCust')}
      ${sortTh('Customer', 'customer', custSort, 'sortCust')}
      ${sortTh('Project', 'project', custSort, 'sortCust')}
      <th>PO</th>
      ${sortTh('Quantity', 'qty', custSort, 'sortCust')}
      <th>Progress</th>
      ${sortTh('Status', 'status', custSort, 'sortCust')}
      <th>Actions</th>
    </tr></thead>
    <tbody>${pageRows.map(d => {
        const b = custShipmentBreakdown(d);
        const confirmedPct = d.qty > 0 ? Math.round((b.confirmedQty / d.qty) * 100) : 0;
        const shippedPct = d.qty > 0 ? Math.round((b.unconfirmedShippedQty / d.qty) * 100) : 0;
        const hasSplit = b.confirmedQty > 0 && (b.unconfirmedShippedQty > 0 || b.remainingQty > 0);
        return `<tr class="clickable-row" onclick="openCustDelivery('${d.code}')">
      <td class="mono">${d.code}</td><td>${d.customer}</td><td>${d.project}</td><td class="mono">${d.po}</td>
      <td class="mono">${b.confirmedQty.toLocaleString()} / ${d.qty.toLocaleString()}</td>
      <td style="min-width:130px;">
        <div class="progress-track" style="display:flex; overflow:hidden;" title="${b.confirmedQty.toLocaleString()} confirmed, ${b.unconfirmedShippedQty.toLocaleString()} shipped (unconfirmed), ${b.remainingQty.toLocaleString()} remaining">
          ${confirmedPct > 0 ? `<div style="width:${confirmedPct}%; background:var(--success);"></div>` : ''}
          ${shippedPct > 0 ? `<div style="width:${shippedPct}%; background:var(--warning);"></div>` : ''}
        </div>
        ${hasSplit ? `<div style="font-size:11px; color:var(--ink-faint); margin-top:3px;">${b.confirmedQty.toLocaleString()} confirmed${b.unconfirmedShippedQty > 0 ? `, ${b.unconfirmedShippedQty.toLocaleString()} in transit` : ''}</div>` : ''}
      </td>
      <td>${statusBadge(d.status, d.statusType)}</td>
      <td>${custActionIcons(d)}</td>
    </tr>`;
      }).join('')}</tbody>
  </table>` : emptyStateBlock('No Customer Deliveries Found', 'Try changing your filters.', 'resetCustFilters');

      return `
  <div class="page-title-row" style="margin-bottom:2px;"><div></div>
    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
      <button class="btn" onclick="navigate('cust-delivery-history')">${icon('history','')} Delivery History</button>
      ${permBtn('createCustDelivery', 'Create Delivery', 'plus', "startGlobalCustomerDelivery()", "primary")}
    </div>
  </div>
  ${statsRow(stats)}
  <div class="card">
    ${custToolbarHtml()}
    ${chips}
    <div class="table-head-row">${rowCountLabel(total, 'delivery')}</div>
    ${tableBody}
    ${pageRows.length ? paginationBar(total, custPage, PAGE_SIZE, 'setCustPage') : ''}
  </div>`;
    }

    function pageCustDeliveryHistory() {
      if (can('viewCustDelivery') === false) {
        return `<div class="card">${emptyStateBlock('No access', 'Your role does not have access to customer delivery history.', null)}</div>`;
      }
      return `<div class="card">
    <div class="page-title-row" style="margin-bottom:12px;"><div></div><button class="btn" onclick="navigateBack('cust-delivery-list')">${icon('chevLeft','')} Back to Deliveries</button></div>
    <div class="section-title">Customer Delivery History <span class="hint">${visibleCustomerDeliveries().length} records</span></div>
    ${custTable(visibleCustomerDeliveries())}
  </div>`;
    }

    /* ---- Create Customer Delivery — contextual M09 workflow ---- */
    function activeCustomerDeliveryMethods() {
      const configured = ADMIN_REFERENCE_LISTS.methods.entries.filter(entry => entry.status === 'Active').map(entry => entry.label);
      return configured.filter(method => DELIVERY_METHOD_COSTS[method] != null);
    }
    function custEligibleProjects() { return writableProjects().filter(project => POS.some(po => po.project === project.name && customerEligibleOrders(po.id).length)); }
    function custEligiblePos(projectName) { return POS.filter(po => po.project === projectName && customerEligibleOrders(po.id).length); }
    function customerFgpnDetails(poId,fgpn) {
      const master=poFinishedGoods(poId).find(item => item.fgpn === fgpn), pn=pnsForPo(poId).find(item => item.pn === fgpn || item.pn === master?.pn), extracted=PO_LINE_SEED.find(row => row[3] === fgpn || row[3] === master?.pn), price=PRICES.find(item => item.fgpn === fgpn);
      return { desc:extracted?.[4] || pn?.desc || 'Finished good',unitPrice:Number(extracted?.[7] ?? pn?.unitPrice ?? price?.price ?? 0),currency:pn?.currency || 'EUR' };
    }
    function custSelectedItems() { return (custWizard.fgpns || []).map(fgpn => ({ fgpn,qty:Number(custWizard.fgpnQtys?.[fgpn] || 0),...customerFgpnDetails(custWizard.po,fgpn),summary:packagedQuantitySummary(custWizard.po,fgpn) })); }
    function resetCustWizardScope(poId,preferredFgpn = '') {
      const eligible=customerEligibleOrders(poId), preferred=eligible.find(item => item.fgpn === preferredFgpn) || eligible[0];
      custWizard.fgpns=preferred ? [preferred.fgpn] : [];
      custWizard.fgpn=preferred?.fgpn || '';
      custWizard.fgpnQtys=preferred ? { [preferred.fgpn]:packagedQuantitySummary(poId,preferred.fgpn).available } : {};
    }
    function startGlobalCustomerDelivery() {
      const project=custEligibleProjects()[0], po=project ? custEligiblePos(project.name)[0] : null, order=po ? customerEligibleOrders(po.id)[0] : null;
      if (!project || !po || !order) return openModal('No packaged quantity','No assigned project currently has a packaged FGPN with quantity remaining to deliver.');
      custWizard={project:project.name,po:po.id,fgpn:'',fgpns:[],fgpnQtys:{},method:activeCustomerDeliveryMethods()[0] || 'Truck',tracking:'',deliveryDate:'',address:`${po.customer} Receiving Center`,source:'global'};
      resetCustWizardScope(po.id,order.fgpn);
      custWizardStep=1; navigate('cust-delivery-create');
    }
    function custWizardGoStep(n) { custWizardStep=Math.max(1,Math.min(3,n)); renderPage(); }
    function custWizardSetProject(value) {
      custWizard.project=value; const po=custEligiblePos(value)[0]; custWizard.po=po?.id || ''; custWizard.address=po ? `${po.customer} Receiving Center` : ''; resetCustWizardScope(custWizard.po); renderPage();
    }
    function custWizardSetPo(value) { custWizard.po=value; const po=POS.find(item => item.id === value); custWizard.address=po ? `${po.customer} Receiving Center` : ''; resetCustWizardScope(value); renderPage(); }
    function custWizardToggleFgpn(fgpn,checked) {
      const selected=new Set(custWizard.fgpns || []);
      if (checked) { selected.add(fgpn); custWizard.fgpnQtys[fgpn]=packagedQuantitySummary(custWizard.po,fgpn).available; }
      else { selected.delete(fgpn); delete custWizard.fgpnQtys[fgpn]; }
      custWizard.fgpns=[...selected]; custWizard.fgpn=custWizard.fgpns[0] || ''; renderPage();
    }
    function custWizardSetFgpnQty(fgpn,value) { const available=packagedQuantitySummary(custWizard.po,fgpn).available; custWizard.fgpnQtys[fgpn]=Math.max(0,Math.min(available,parseInt(value,10) || 0)); renderPage(); }
    function custWizardSelectAllFgpns(checked) {
      const eligible=customerEligibleOrders(custWizard.po); custWizard.fgpns=checked ? eligible.map(item => item.fgpn) : []; custWizard.fgpnQtys={};
      if (checked) eligible.forEach(item => { custWizard.fgpnQtys[item.fgpn]=packagedQuantitySummary(custWizard.po,item.fgpn).available; });
      custWizard.fgpn=custWizard.fgpns[0] || ''; renderPage();
    }
    function custWizardSetMethod(value) { custWizard.method=value; renderPage(); }
    function custWizardCancel() {
      if (navigationHistory.length) return navigateBack();
      if (custWizard.source === 'po') return openPo(custWizard.po,'Customer Delivery');
      if (custWizard.source === 'project') { openContext.project=custWizard.project; activeTab.project='Customer Deliveries'; return navigate('project-workspace'); }
      navigate('cust-delivery-list');
    }
    function custWizardValidateStep(step) {
      if (step === 1) {
        const items=custSelectedItems();
        if (!items.length) { openModal('Packaged FGPN required','Select at least one packaged finished-good part number.'); return false; }
        const invalid=items.find(item => !(item.qty > 0) || item.qty > item.summary.available);
        if (invalid) { openModal('Check delivery quantity',`Enter a quantity between 1 and ${invalid.summary.available.toLocaleString()} for ${invalid.fgpn}.`); return false; }
      }
      if (step === 2) {
        if (!activeCustomerDeliveryMethods().includes(custWizard.method)) { openModal('Delivery method unavailable','Select an active delivery method maintained by the System Administrator.'); return false; }
        if (!custWizard.deliveryDate) { openModal('Delivery date required','Select the planned delivery date.'); return false; }
      }
      return true;
    }
    function custWizardNext() { if (custWizardValidateStep(custWizardStep)) custWizardGoStep(custWizardStep + 1); }
    function custWizardSummaryHtml() {
      const po=POS.find(item => item.id === custWizard.po), items=custSelectedItems(), total=items.reduce((sum,item) => sum + item.qty,0);
      return `<div class="card cust-create-summary"><h3>Delivery Summary</h3><div class="cust-summary-row"><span>Project</span><strong>${custWizard.project || '—'}</strong></div><div class="cust-summary-row"><span>Purchase Order</span><strong class="mono">${custWizard.po || '—'}</strong></div><div class="cust-summary-row"><span>Customer</span><strong>${po?.customer || '—'}</strong></div><div class="cust-summary-row"><span>Selected PNs</span><strong>${items.length}</strong></div><div class="cust-summary-lines">${items.length ? items.map(item => `<div><span class="mono">${item.fgpn}</span><strong>${item.qty.toLocaleString()}</strong></div>`).join('') : '<span>No PN selected</span>'}</div><div class="cust-summary-row"><span>Total quantity</span><strong>${total.toLocaleString()} units</strong></div><div class="cust-summary-row"><span>Method</span><strong>${custWizard.method}</strong></div><div class="cust-summary-row"><span>Planned date</span><strong>${custWizard.deliveryDate || 'Not selected'}</strong></div><div class="cust-summary-total"><span>Transport Cost</span><strong>${money(transportCostFor(custWizard.method))}</strong></div></div>`;
    }
    function customerInstructionPrintHtml(delivery) {
      const items=customerDeliveryItems(delivery);
      const rows=items.map(item => `<tr><td>${item.fgpn}</td><td>${item.description || customerFgpnDetails(delivery.po,item.fgpn).desc}</td><td>${Number(item.qty || 0).toLocaleString()}</td><td>${delivery.tracking || '—'}</td></tr>`).join('');
      return `<!doctype html><html><head><meta charset="utf-8"><title>${delivery.code} Customer Delivery Instruction</title><style>@page{size:A4;margin:16mm}*{box-sizing:border-box}body{font-family:Arial,sans-serif;color:#111;margin:0}.head{padding:20px 22px;background:#0c2b3e;color:#fff}.head small{font-size:10px;letter-spacing:.08em;text-transform:uppercase}.head h1{font-size:22px;margin:6px 0 0}.meta{display:grid;grid-template-columns:1fr 1fr;border:1px solid #cbd5e1;margin-top:18px}.field{padding:12px;border-right:1px solid #cbd5e1;border-bottom:1px solid #cbd5e1}.field:nth-child(2n){border-right:0}.field span{display:block;color:#475569;font-size:9px;text-transform:uppercase;letter-spacing:.05em}.field strong{display:block;margin-top:5px;font-size:12px}.goods{width:100%;border-collapse:collapse;margin-top:18px;font-size:11px}.goods th,.goods td{padding:10px;border:1px solid #cbd5e1;text-align:left}.goods th{background:#eef5f7;font-size:9px;text-transform:uppercase}.foot{display:flex;justify-content:space-between;margin-top:34px;padding-top:12px;border-top:1px solid #cbd5e1;font-size:9px;color:#475569}</style></head><body><div class="head"><small>Customer Delivery Instruction</small><h1>${delivery.code}</h1></div><div class="meta"><div class="field"><span>Project</span><strong>${delivery.project}</strong></div><div class="field"><span>Customer</span><strong>${delivery.customer}</strong></div><div class="field"><span>Purchase Order</span><strong>${delivery.po}</strong></div><div class="field"><span>Planned Delivery Date</span><strong>${delivery.date}</strong></div><div class="field"><span>Delivery Method</span><strong>${delivery.method}</strong></div><div class="field"><span>Delivery Address</span><strong>${delivery.address || '—'}</strong></div></div><table class="goods"><thead><tr><th>Finished Goods Part Number</th><th>Description</th><th>Quantity</th><th>Tracking Reference</th></tr></thead><tbody>${rows}</tbody></table><div class="meta"><div class="field"><span>Transport Cost</span><strong>${money(delivery.transportCost)}</strong></div><div class="field"><span>Prepared By</span><strong>${delivery.createdBy}</strong></div></div><div class="foot"><span>Generated ${delivery.instructionGeneratedAt}</span><span>${delivery.instructionFile}</span></div><script>window.onload=()=>{window.focus();window.print();}<\/script></body></html>`;
    }
    function printCustomerDeliveryInstruction(code) {
      const delivery=CUST_DELIVERIES.find(item => item.code === code); if (!delivery) return;
      const popup=window.open('','_blank','width=900,height=900');
      if (!popup) return openModal('PDF preview blocked','Allow pop-ups to open the delivery instruction, then use Print or Save as PDF.');
      popup.document.write(customerInstructionPrintHtml(delivery)); popup.document.close();
    }
    function customerLaunchAllocations(poId,fgpn,quantity) {
      let remaining=Number(quantity || 0);
      const previouslyAllocated=new Map();
      CUST_DELIVERIES.flatMap(customerDeliveryItems).forEach(item => (item.launchAllocations || []).forEach(allocation => previouslyAllocated.set(`${allocation.launchCode}|${allocation.fgpn}`,Number(previouslyAllocated.get(`${allocation.launchCode}|${allocation.fgpn}`) || 0)+Number(allocation.qty || 0))));
      const allocations=[];
      mfgLaunchLines(poId).filter(item => item.line.fgpn === fgpn && PO_STATUS_FLOW.indexOf(item.line.status) >= PO_STATUS_FLOW.indexOf('Packaged')).forEach(({delivery,line}) => {
        if (remaining <= 0) return;
        const used=Number(previouslyAllocated.get(`${delivery.code}|${fgpn}`) || 0), available=Math.max(0,line.qty-used), qty=Math.min(available,remaining);
        if (qty > 0) { allocations.push({launchCode:delivery.code,fgpn,qty}); remaining-=qty; }
      });
      return remaining === 0 ? allocations : [];
    }
    function custWizardSaveDelivery() {
      if (!custWizardValidateStep(1) || !custWizardValidateStep(2)) return;
      const po=POS.find(item => item.id === custWizard.po), project=PROJECTS.find(item => item.name === po?.project);
      if (!po || !project || !canWriteProject(project)) return openModal('Delivery cannot be created','Select a purchase order from an assigned project.');
      const selectedItems=custSelectedItems(), number=Math.max(0,...CUST_DELIVERIES.map(item => Number(String(item.code).replace(/\D/g,'')) || 0))+1;
      const createdAt=new Date().toISOString().slice(0,16).replace('T',' '), code=`CD-${String(number).padStart(4,'0')}`;
      const items=selectedItems.map(item => ({ fgpn:item.fgpn,qty:item.qty,description:item.desc,unitPrice:item.unitPrice,value:item.qty*item.unitPrice,launchAllocations:customerLaunchAllocations(po.id,item.fgpn,item.qty) }));
      const unallocated=items.find(item => !item.launchAllocations.length);
      if (unallocated) return openModal('Packaged allocation changed',`${unallocated.fgpn} no longer has enough unallocated packaged quantity. Review the delivery scope again.`);
      const quantity=items.reduce((sum,item) => sum + item.qty,0), value=items.reduce((sum,item) => sum + item.value,0);
      const shipment={id:'SH-1',date:custWizard.deliveryDate,week:deliveryWeekLabel(custWizard.deliveryDate),po:po.id,fgpn:items.length === 1 ? items[0].fgpn : `${items.length} FGPNs`,description:items.length === 1 ? items[0].description : 'Multi-PN customer delivery',level:items.every(item => item.qty === packagedQuantitySummary(po.id,item.fgpn).remaining) ? 'Full' : 'Partial',qty:quantity,items:items.map(item => ({...item})),method:custWizard.method,transportCost:transportCostFor(custWizard.method),value,status:'Shipped',statusType:'info',recordedBy:productionActor(),confirmation:null};
      const delivery={code,customer:po.customer,project:po.project,po:po.id,fgpn:shipment.fgpn,items,qty:quantity,delivered:quantity,method:custWizard.method,tracking:custWizard.tracking || '—',date:custWizard.deliveryDate,createdAt,createdBy:productionActor(),address:custWizard.address || '',status:'Awaiting Confirmation',statusType:'warning',transportCost:transportCostFor(custWizard.method),unitValue:quantity ? value/quantity : 0,instructionGenerated:true,instructionGeneratedAt:createdAt,instructionFile:`${code}_customer_delivery_instruction.pdf`,shipments:[shipment]};
      CUST_DELIVERIES.unshift(delivery);
      AUDIT_LOGS.unshift({id:`AUD-${10300 + AUDIT_LOGS.length}`,date:createdAt,user:productionActor(),module:'Customer Delivery',action:'Delivery instruction and shipment created',entity:delivery.code,project:delivery.project,po:delivery.po,details:`${delivery.qty} units across ${items.length} finished-good PN${items.length === 1 ? '' : 's'} shipped by ${delivery.method}; awaiting customer confirmation; transport cost ${money(delivery.transportCost)}; instruction ${delivery.instructionFile}.`});
      openCustDeliveryId=delivery.code; custActiveTab='Overview'; custWizardStep=1; navigate('cust-delivery-workspace',{ replace:true }); printCustomerDeliveryInstruction(delivery.code);
    }
    function pageCustDeliveryCreate() {
      if (can('createCustDelivery') !== true) return `<div class="card">${emptyStateBlock('Insufficient permissions','Your role cannot create customer deliveries.',null)}</div>`;
      const step=custWizardStep, po=POS.find(item => item.id === custWizard.po), parts=customerEligibleOrders(custWizard.po), selected=custSelectedItems();
      const projects=custEligibleProjects(), projectPos=custEligiblePos(custWizard.project), methods=activeCustomerDeliveryMethods();
      const totalQty=selected.reduce((sum,item) => sum + item.qty,0), allSelected=parts.length > 0 && parts.every(part => custWizard.fgpns.includes(part.fgpn));
      const steps=['Scope','Delivery','Review'];
      let body='';
      if (step === 1) body=`<div class="card cust-form-card"><div class="cust-form-head"><div><h3>Packaged Quantities</h3></div>${statusBadge('Packaged','success')}</div><div class="cust-form-body"><div class="cust-field-grid"><div class="cust-field"><label>Project</label><select onchange="custWizardSetProject(this.value)" ${custWizard.source !== 'global' ? 'disabled' : ''}>${projects.map(project => `<option value="${project.name}" ${custWizard.project === project.name ? 'selected' : ''}>${project.name}</option>`).join('')}</select></div><div class="cust-field"><label>Purchase Order</label><select onchange="custWizardSetPo(this.value)" ${custWizard.source === 'po' ? 'disabled' : ''}>${projectPos.map(item => `<option value="${item.id}" ${custWizard.po === item.id ? 'selected' : ''}>${item.id} · ${customerEligibleOrders(item.id).length} packaged PN${customerEligibleOrders(item.id).length === 1 ? '' : 's'}</option>`).join('')}</select></div></div><div class="cust-scope-toolbar"><div><strong>${parts.length} packaged PN${parts.length === 1 ? '' : 's'}</strong></div><label class="mfg-select-all"><input type="checkbox" ${allSelected ? 'checked' : ''} onchange="custWizardSelectAllFgpns(this.checked)"> Select all</label></div><div class="cust-multi-pn-list">${parts.map(part => { const summary=packagedQuantitySummary(custWizard.po,part.fgpn), checked=custWizard.fgpns.includes(part.fgpn), detail=customerFgpnDetails(custWizard.po,part.fgpn); return `<div class="cust-multi-pn-row ${checked ? 'selected' : ''}"><input type="checkbox" aria-label="Select ${part.fgpn}" ${checked ? 'checked' : ''} onchange="custWizardToggleFgpn('${part.fgpn}',this.checked)"><div class="cust-multi-pn-main"><strong class="mono">${part.fgpn}</strong><span>${detail.desc}</span></div><div class="cust-multi-stat"><span>Packaged</span><strong>${summary.packaged.toLocaleString()}</strong></div><div class="cust-multi-stat"><span>Allocated</span><strong>${summary.allocated.toLocaleString()}</strong></div><div class="cust-multi-stat available"><span>Available</span><strong>${summary.available.toLocaleString()}</strong></div><div class="cust-multi-qty"><label>This Delivery</label><input type="number" min="1" max="${summary.available}" value="${checked ? (custWizard.fgpnQtys[part.fgpn] || '') : ''}" ${checked ? '' : 'disabled'} onchange="custWizardSetFgpnQty('${part.fgpn}',this.value)"></div></div>`; }).join('')}</div><div class="cust-selection-total"><span>${selected.length} PN${selected.length === 1 ? '' : 's'}</span><strong>${totalQty.toLocaleString()} units</strong></div><div class="cust-form-actions"><button class="btn" onclick="custWizardCancel()">Cancel</button><button class="btn primary" onclick="custWizardNext()">Continue ${icon('chevRight','')}</button></div></div></div>`;
      if (step === 2) body=`<div class="card cust-form-card"><div class="cust-form-head"><div><h3>Delivery Method and Schedule</h3><span>${selected.length} PN${selected.length === 1 ? '' : 's'} · ${totalQty.toLocaleString()} units</span></div></div><div class="cust-form-body"><div class="cust-method-grid">${methods.map(method => `<button class="cust-method-card ${custWizard.method === method ? 'selected' : ''}" onclick="custWizardSetMethod('${method}')"><strong>${method}</strong><span>${money(transportCostFor(method))}</span></button>`).join('')}</div><div class="cust-field-grid"><div class="cust-field"><label>Planned Delivery Date</label><input type="date" value="${custWizard.deliveryDate}" oninput="custWizard.deliveryDate=this.value"></div><div class="cust-field"><label>Tracking Reference</label><input value="${poEsc(custWizard.tracking)}" oninput="custWizard.tracking=this.value" placeholder="Optional"></div><div class="cust-field" style="grid-column:1/-1;"><label>Delivery Address</label><input value="${poEsc(custWizard.address)}" oninput="custWizard.address=this.value"></div></div><div class="cust-form-actions"><button class="btn" onclick="custWizardGoStep(1)">${icon('chevLeft','')} Back</button><button class="btn primary" onclick="custWizardNext()">Continue to Review ${icon('chevRight','')}</button></div></div></div>`;
      if (step === 3) body=`<div class="card cust-form-card"><div class="cust-form-head"><div><h3>Review and Generate</h3></div>${statusBadge('Ready','success')}</div><div class="cust-form-body"><div class="cust-review-header"><div><span>Customer</span><strong>${po?.customer || '—'}</strong></div><div><span>Purchase Order</span><strong class="mono">${custWizard.po}</strong></div><div><span>Delivery Method</span><strong>${custWizard.method}</strong></div><div><span>Planned Date</span><strong>${custWizard.deliveryDate}</strong></div></div><div class="table-scroll"><table><thead><tr><th>Finished-Good PN</th><th>Description</th><th>Available</th><th>This Delivery</th><th>Available After</th><th>Value</th></tr></thead><tbody>${selected.map(item => `<tr><td class="mono"><strong>${item.fgpn}</strong></td><td>${item.desc}</td><td class="mono">${item.summary.available.toLocaleString()}</td><td class="mono"><strong>${item.qty.toLocaleString()}</strong></td><td class="mono">${Math.max(0,item.summary.available-item.qty).toLocaleString()}</td><td class="mono">${money(item.qty*item.unitPrice)}</td></tr>`).join('')}</tbody><tfoot><tr><td colspan="3"><strong>Total</strong></td><td class="mono"><strong>${totalQty.toLocaleString()}</strong></td><td></td><td class="mono"><strong>${money(selected.reduce((sum,item) => sum + item.qty*item.unitPrice,0))}</strong></td></tr></tfoot></table></div><div class="cust-form-actions"><button class="btn" onclick="custWizardGoStep(2)">${icon('chevLeft','')} Back</button><button class="btn primary" onclick="custWizardSaveDelivery()">${icon('doc','')} Create & Generate PDF</button></div></div></div>`;
      return `<div class="cust-create-shell"><div class="cust-create-head"><div><h2>Create Customer Delivery</h2></div><button class="btn" onclick="custWizardCancel()">Close</button></div><div class="cust-context-bar"><div class="cust-context-item"><span>Project</span><strong>${custWizard.project}</strong></div><div class="cust-context-item"><span>Purchase Order</span><strong class="mono">${custWizard.po}</strong></div><div class="cust-context-item"><span>Customer</span><strong>${po?.customer || '—'}</strong></div><div class="cust-context-item"><span>PO Status</span><strong>${poLifecycle(custWizard.po)}</strong></div></div><div class="cust-step-nav">${steps.map((item,index) => { const number=index+1; return `<div class="cust-step-button ${number === step ? 'active' : number < step ? 'done' : ''}"><span class="cust-step-number">${number < step ? '✓' : number}</span><div class="cust-step-copy"><strong>${item}</strong></div></div>`; }).join('')}</div><div class="cust-create-layout"><div>${body}</div>${custWizardSummaryHtml()}</div></div>`;
    }

    /* ---- Customer Delivery Workspace ---- */
    function openCustDelivery(code) {
      const delivery=CUST_DELIVERIES.find(item => item.code === code);
      if (!delivery) return;
      if (currentRole === 'engineer' && !assignedProjectNames().has(delivery.project)) return openModal('Delivery outside your assignment',`${delivery.code} belongs to ${delivery.project}, which is not assigned to you.`);
      openCustDeliveryId=code; openContext.project=delivery.project; openContext.po=delivery.po; custActiveTab='Overview'; navigate('cust-delivery-workspace');
    }
    function showCustTab(tab) { custActiveTab = tab; renderPage(); }

    /* M09-FR-11/12/13/14: each shipment is its own delivery record with its own confirmation.
       This recomputes the parent PO's overall status from its individual shipments: it is only
       "Delivered" once every shipment is both recorded AND individually confirmed. */
    function custRecalcStatus(d) {
      const remaining = d.qty - d.delivered;
      const recorded=d.shipments.filter(shipment => shipment.status !== 'Planned');
      if (recorded.length === 0) return;
      const allConfirmed = recorded.every(shipment => !!shipment.confirmation);
      if (remaining === 0 && allConfirmed) {
        d.status = 'Delivered';
        d.statusType = 'success';
      } else if (remaining === 0 && !allConfirmed) {
        d.status = 'Awaiting Confirmation';
        d.statusType = 'warning';
      } else if (recorded.some(shipment => !!shipment.confirmation)) {
        d.status = 'Partially Delivered';
        d.statusType = 'brown';
      } else {
        d.status = 'Shipped';
        d.statusType = 'info';
      }
    }
    function poCustomerEvidenceComplete(poId) {
      const parts=poFinishedGoods(poId);
      return parts.length > 0 && parts.every(part => customerConfirmedQty(poId,part.fgpn) >= part.ordered);
    }
    function fgpnCustomerEvidenceComplete(poId, fgpn) {
      const part=poFinishedGoods(poId).find(item => item.fgpn === fgpn);
      return !!part && customerConfirmedQty(poId,fgpn) >= part.ordered;
    }
    function applyCustomerConfirmationToLaunches(shipment) {
      if (shipment.launchLifecycleApplied) return;
      customerShipmentItems(shipment).forEach(item => (item.launchAllocations || []).forEach(allocation => {
        const delivery=MFG_DELIVERIES.find(record => record.code === allocation.launchCode);
        const line=delivery && mfgDeliveryPnQuantities(delivery).find(record => record.fgpn === allocation.fgpn);
        if (!delivery || !line) return;
        mfgNormalizeLaunchLine(delivery,line);
        line.customerDeliveredQty=Math.min(line.qty,Number(line.customerDeliveredQty || 0)+Number(allocation.qty || 0));
        if (line.customerDeliveredQty >= line.qty && line.status === 'Packaged') line.status='Delivered';
        syncMfgDeliveryLifecycle(delivery);
      }));
      shipment.launchLifecycleApplied=true;
    }
    function completePoFromCustomerEvidence(poId, evidence, before) {
      const after = poLifecycle(poId);
      const completedParts=poFinishedGoods(poId).filter(part => fgpnCustomerEvidenceComplete(poId,part.fgpn)).map(part => part.fgpn);
      AUDIT_LOGS.unshift({ id:`AUD-${10300 + AUDIT_LOGS.length}`, date:new Date().toISOString().slice(0,16).replace('T',' '), user:productionActor(), module:'Customer Delivery', action:'Packaged quantity delivery confirmed', entity:poId, project:POS.find(po => po.id === poId)?.project || '', po:poId, details:`Customer evidence confirmed delivered quantities for ${completedParts.join(', ') || 'a partial PN quantity'}. Evidence: ${evidence}.` });
      recordPoLifecycleChange(poId,before,after,productionActor(),after === 'Delivered' ? 'All PO PN quantities delivered and customer confirmation evidence recorded' : 'Partial customer delivery confirmed; remaining PO quantities stay visible',evidence);
      return after === 'Delivered';
    }

    function deliveryWeekLabel(dateString) {
      const date=new Date(`${dateString}T00:00:00`); if (Number.isNaN(date.getTime())) return '—';
      const utc=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));
      utc.setUTCDate(utc.getUTCDate()+4-(utc.getUTCDay() || 7));
      const yearStart=new Date(Date.UTC(utc.getUTCFullYear(),0,1));
      return `W${String(Math.ceil((((utc-yearStart)/86400000)+1)/7)).padStart(2,'0')}`;
    }

    /* M09-FR-07/08/09 + BP M09.6: confirms ONE shipment, based on evidence that specific batch was
       received. The overall PO only becomes "Delivered" once every shipment is confirmed this way. */
    function recordShipmentConfirmation(code, shipmentId) {
      if (can('recordDeliveryConfirmation') !== true) { openModal('Not permitted', 'Your role cannot record delivery confirmations.'); return; }
      const d = CUST_DELIVERIES.find(x => x.code === code);
      if (!d) return;
      const s = d.shipments.find(x => x.id === shipmentId);
      if (!s) return;

      const dateEl = document.getElementById('confDate_' + shipmentId);
      const methodEl = document.getElementById('confMethod_' + shipmentId);
      const byEl = document.getElementById('confBy_' + shipmentId);
      const refEl = document.getElementById('confRef_' + shipmentId);
      const commentsEl = document.getElementById('confComments_' + shipmentId);
      const evidenceEl = document.getElementById('confEvidence_' + shipmentId);

      if (!dateEl.value || !byEl.value.trim()) {
        openModal('Missing information', 'Confirmation date and confirmed-by name are required (M09-FR-08).');
        return;
      }
      if (!evidenceEl?.files?.[0]) {
        openModal('Customer evidence required', 'Upload a signed POD or verified carrier confirmation before confirming this shipment.');
        return;
      }

      const poBefore=poLifecycle(d.po);
      s.confirmation = {
        date: dateEl.value,
        method: methodEl.value,
        confirmedBy: byEl.value.trim(),
        reference: refEl.value.trim() || '—',
        evidence: evidenceEl.files[0].name,
        comments: commentsEl.value.trim(),
        recordedBy: productionActor(),
      };
      s.status='Delivered'; s.statusType='success';
      applyCustomerConfirmationToLaunches(s);
      AUDIT_LOGS.unshift({id:`AUD-${10300 + AUDIT_LOGS.length}`,date:new Date().toISOString().slice(0,16).replace('T',' '),user:productionActor(),module:'Customer Delivery',action:'Customer confirmation recorded',entity:`${d.code} · ${s.id}`,project:d.project,po:d.po,details:`Confirmed by ${s.confirmation.confirmedBy} using ${s.confirmation.method}. Evidence: ${s.confirmation.evidence}.`});

      custRecalcStatus(d);

      const allDone = d.shipments.every(x => !!x.confirmation) && (d.qty - d.delivered) === 0;
      const poDelivered = completePoFromCustomerEvidence(d.po,s.confirmation.evidence,poBefore);
      const totals = poQuantitySummary(d.po);
      openModal('Shipment Confirmed', `${shipmentId} confirmed as received by ${s.confirmation.confirmedBy}.` + (poDelivered ? ` ${d.po} now has zero remaining quantity and is Delivered.` : allDone ? ` This delivery record is confirmed; ${d.po} remains ${poLifecycle(d.po)} with ${totals.remaining.toLocaleString()} units remaining across the PO.` : ` ${d.shipments.filter(x => !x.confirmation).length} shipment(s) still need confirmation.`));
      renderAll();
    }

    function pageCustDeliveryWorkspace() {
      if (can('viewCustDelivery') === false) {
        return `<div class="card">${emptyStateBlock('No access', 'Your role does not have access to this customer delivery.', null)}</div>`;
      }
      const allowed=visibleCustomerDeliveries();
      const d = allowed.find(item => item.code === openCustDeliveryId) || allowed[0];
      if (!d) return `<div class="card">${emptyStateBlock('No customer deliveries','No delivery records are available in your assigned projects.',null)}</div>`;
      const tab = custActiveTab;
      const stepIdx = CUST_DELIVERY_STEPS.indexOf(d.status);
      const confirmedQty = (d.shipments || []).filter(shipment => !!shipment.confirmation).reduce((sum,shipment) => sum + Number(shipment.qty || 0),0);
      const remaining = Math.max(0,d.qty - confirmedQty);
      const deliveryItems = customerDeliveryItems(d);
      let tabContent = '';

      if (tab === 'Overview') {
        tabContent = `<div class="card"><div class="section-title">Delivery Timeline</div>
      <div class="h-timeline">
        ${CUST_DELIVERY_STEPS.map((s, i) => `<div class="h-tl-step ${i < stepIdx ? 'done' : i === stepIdx ? 'active' : ''}">
          <div class="h-tl-line"></div>
          <div class="h-tl-dot">${i < stepIdx ? '✓' : i + 1}</div>
          <div class="h-tl-label">${s}</div>
        </div>`).join('')}
      </div>
    </div>`;
      } else if (tab === 'Confirmation') {
        const pct = d.qty > 0 ? Math.round((confirmedQty / d.qty) * 100) : 0;
        const canConfirm = can('recordDeliveryConfirmation') === true;
        tabContent = `<div class="card">
      <div class="section-title">Delivery Quantity</div>
      <table><thead><tr><th>FGPN</th><th>Description</th><th>Shipment Quantity</th><th>Customer Confirmed</th></tr></thead>
      <tbody>${deliveryItems.map(item => `<tr><td class="mono">${item.fgpn}</td><td>${item.description || customerFgpnDetails(d.po,item.fgpn).desc}</td><td class="mono">${Number(item.qty || 0).toLocaleString()}</td><td>${d.status === 'Delivered' ? statusBadge('Confirmed','success') : statusBadge('Awaiting evidence','warning')}</td></tr>`).join('')}</tbody></table>
      <div style="margin-top:14px;">
        <div style="display:flex; justify-content:space-between; font-size:12.5px; color:var(--ink-soft); margin-bottom:4px;">
          <span>Customer confirmed</span><span>${confirmedQty.toLocaleString()} / ${d.qty.toLocaleString()} (${pct}%)</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%; background:${pct >= 100 ? 'var(--success)' : 'var(--primary)'}"></div></div>
      </div>
    </div>
    <div class="section-title" style="margin:16px 0 8px;">Customer Confirmation</div>
    ${d.shipments.map(s => `
    <div class="card" style="margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
        <div>
          <span class="mono" style="font-weight:700;">${s.id}</span>
          <span style="color:var(--ink-soft); font-size:12.5px;"> — ${s.qty.toLocaleString()} units, ${s.method}, ${s.date}${s.week && s.week !== '—' ? ' (' + s.week + ')' : ''}</span>
        </div>
        ${s.confirmation ? statusBadge('Confirmed', 'success') : statusBadge('Awaiting Confirmation', 'warning')}
      </div>
      <table style="margin-bottom:${s.confirmation ? '0' : '12px'};"><thead><tr><th>PO</th><th>FGPN</th><th>Description</th><th>Level</th><th>Qty</th><th>Value</th></tr></thead>
      <tbody>${customerShipmentItems(s).map(item => `<tr><td class="mono">${s.po}</td><td class="mono">${item.fgpn}</td><td>${item.description || '—'}</td><td>${s.level || '—'}</td><td class="mono">${Number(item.qty || 0).toLocaleString()}</td><td class="mono">${money(Number(item.value || 0))}</td></tr>`).join('')}</tbody></table>
      ${s.confirmation ? `
      <div style="border-top:1px solid var(--border-soft); margin-top:10px; padding-top:10px;">
        <div class="result-row"><span class="r-label">Confirmation Date</span><span class="r-value">${s.confirmation.date}</span></div>
        <div class="result-row"><span class="r-label">Confirmation Method</span><span class="r-value">${s.confirmation.method}</span></div>
        <div class="result-row"><span class="r-label">Confirmed By</span><span class="r-value">${s.confirmation.confirmedBy}</span></div>
        <div class="result-row"><span class="r-label">Reference Number</span><span class="r-value mono">${s.confirmation.reference}</span></div>
        <div class="result-row"><span class="r-label">Evidence File</span><span class="r-value mono">${s.confirmation.evidence}</span></div>
        ${s.confirmation.comments ? `<div class="result-row"><span class="r-label">Comments</span><span class="r-value">${s.confirmation.comments}</span></div>` : ''}
        <div style="display:flex; gap:8px; margin-top:10px;">
          <button class="btn sm" onclick="openModal('View Evidence', 'This would open ${s.confirmation.evidence} in a viewer.')">View Evidence</button>
          <button class="btn sm" onclick="openModal('Download', 'This would download ${s.confirmation.evidence}.')">Download</button>
        </div>
      </div>` : (canConfirm ? `
      <div style="border-top:1px solid var(--border-soft); margin-top:4px; padding-top:12px;">
        <div class="grid g2" style="margin-bottom:10px;">
          <div><label class="sim-field-label">Confirmation Date *</label><input class="coef-input" type="date" id="confDate_${s.id}"/></div>
          <div><label class="sim-field-label">Confirmation Method</label>
            <select class="sim-select" id="confMethod_${s.id}">${CONFIRMATION_METHODS.map(m => `<option>${m}</option>`).join('')}</select>
          </div>
        </div>
        <div class="grid g2" style="margin-bottom:10px;">
          <div><label class="sim-field-label">Confirmed By *</label><input class="coef-input" type="text" id="confBy_${s.id}" placeholder="Name / customer contact"/></div>
          <div><label class="sim-field-label">Reference Number</label><input class="coef-input" type="text" id="confRef_${s.id}" placeholder="POD / reference number"/></div>
        </div>
        <label class="sim-field-label">Customer Confirmation Evidence *</label>
        <input id="confEvidence_${s.id}" type="file" accept="application/pdf,image/*" style="display:none;" onchange="this.nextElementSibling.querySelector('.u-sub').textContent=this.files[0]?.name || 'PDF or image required'">
        <label class="upload-area" for="confEvidence_${s.id}" style="display:block; margin-bottom:10px; padding:16px; cursor:pointer;">
          ${icon('upload', '')}
          <div class="u-title" style="font-size:13px;">Choose signed POD or verified carrier evidence</div>
          <div class="u-sub">PDF or image required</div>
        </label>
        <label class="sim-field-label">Comments</label>
        <textarea class="coef-input" rows="2" id="confComments_${s.id}" style="width:100%; margin-bottom:10px; resize:vertical;" placeholder="Optional comments"></textarea>
        <button class="btn primary sm" onclick="recordShipmentConfirmation('${d.code}', '${s.id}')">Confirm This Shipment</button>
      </div>` : `<div class="e-sub" style="margin-top:8px;">Your role cannot record shipment confirmations.</div>`)}
    </div>`).join('')}`;
      } else if (tab === 'Documents') {
        tabContent = `<div class="card">
      <div class="section-title"><span>Delivery Instruction</span><button class="btn sm primary" onclick="printCustomerDeliveryInstruction('${d.code}')">${icon('download','')} Open PDF</button></div>
      <div class="doc-item"><div class="doc-icon">${icon('doc','')}</div><div><div class="doc-name mono">${d.instructionFile || `${d.code}_customer_delivery_instruction.pdf`}</div><div class="doc-meta">Generated ${d.instructionGeneratedAt || d.createdAt || d.date} · ${d.createdBy || 'Launch Engineer'}</div></div>${statusBadge('Generated','success')}</div>
    </div>`;
      } else if (tab === 'Finance') {
        const deliveryValue = d.qty * (d.unitValue || 0);
        const invoice = INVOICES.find(i => i.project === d.project);
        tabContent = `<div class="card">
      <div class="section-title">Finance</div>
      <div class="result-row"><span class="r-label">Transport Cost</span><span class="r-value">${money(d.transportCost)}${can('changeTransportCost') !== true ? ' <span class="hint">(locked — Admin only)</span>' : ''}</span></div>
      <div class="result-row"><span class="r-label">Delivery Value</span><span class="r-value">${money(deliveryValue)}</span></div>
      <div class="result-row"><span class="r-label">Invoice Status</span><span class="r-value">${invoice ? statusBadge(invoice.status, invoice.status === 'Paid' ? 'success' : invoice.status === 'Overdue' ? 'danger' : 'warning') : 'Not invoiced'}</span></div>
      <div class="result-row"><span class="r-label">Actual Revenue</span><span class="r-value">${d.status === 'Delivered' ? money(deliveryValue) : '—'}</span></div>
    </div>`;
      } else if (tab === 'Audit') {
        tabContent = traceabilityWorkspace(auditContextEvents({ custCode:d.code }),`${d.code} customer-delivery audit`,'customerDeliveryAuditTable');
      } else if (tab === 'History') {
        tabContent = traceabilityWorkspace(auditContextEvents({ custCode:d.code }),`${d.code} customer-delivery history`,'customerDeliveryHistoryTable');
      }

      const es = custEffectiveStatus(d);
      const effectiveStatus = es.label;
      const effectiveStatusType = es.type;

      return `
  <div class="workspace-header">
    <div>
      <span class="ws-id">${d.code}</span>
      <div class="ws-title">Customer Delivery — ${d.customer}</div>
      <div class="ws-meta">
        <div class="ws-meta-item"><span class="l">Customer</span><span class="v">${d.customer}</span></div>
        <div class="ws-meta-item"><span class="l">Project</span><span class="v">${d.project}</span></div>
        <div class="ws-meta-item"><span class="l">Purchase Order</span><span class="v mono">${d.po}</span></div>
        <div class="ws-meta-item"><span class="l">Status</span>${statusBadge(effectiveStatus, effectiveStatusType)}</div>
      </div>
    </div>
  </div>
  <div class="grid g4" style="margin-bottom:16px;">
    <div class="kpi-card"><div class="kpi-label">Ordered</div><div class="kpi-value" style="font-size:18px;">${d.qty.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Customer Confirmed</div><div class="kpi-value" style="font-size:18px;">${confirmedQty.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Remaining</div><div class="kpi-value" style="font-size:18px;">${remaining.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Transport Cost</div><div class="kpi-value" style="font-size:18px;">${money(d.transportCost)}</div></div>
  </div>
  <div class="ws-actions-row" style="margin-bottom:14px;"><button class="btn" onclick="printCustomerDeliveryInstruction('${d.code}')">${icon('download','')} Delivery Instruction PDF</button>${d.status !== 'Delivered' && can('recordDeliveryConfirmation') === true ? `<button class="btn primary" onclick="showCustTab('Confirmation')">Customer Confirmation</button>` : ''}</div>
  ${workspaceTabs(['Overview', 'Confirmation', 'Documents', 'Finance', 'History'], tab, 'showCustTab')}
  ${tabContent}`;
    }

    /* =====================================================================
       ============ NEW MODULE: M10 — FINANCE, REVENUE & FORECASTING ======
       ===================================================================== */
    function financeAccessGate() {
      const access = can('viewFinance');
      if (access === false) return `<div class="card">${emptyStateBlock('No finance access', 'Your role does not have access to financial data.', null)}</div>`;
      return null;
    }

    function pageFinanceDashboard() {
      const gate = financeAccessGate(); if (gate) return gate;
      const access = can('viewFinance');
      const totalRevenue = REVENUE_ROWS.reduce((s, r) => s + r.revenue, 0);
      const totalForecast = REVENUE_ROWS.reduce((s, r) => s + r.forecast, 0);
      const totalInvoiced = INVOICES.reduce((s, i) => s + i.amount, 0);
      const outstanding = INVOICES.filter(i => i.status === 'Outstanding' || i.status === 'Overdue').reduce((s, i) => s + i.amount, 0);
      const profit = Math.round(totalRevenue * 0.22);

      return `
  <div class="page-title-row"><div><div class="page-title">Finance ${access === 'summary' ? 'Summary' : 'Dashboard'}</div><div class="page-sub">${access === 'summary' ? 'Revenue and forecast overview for your projects' : 'Revenue, invoices, forecast and profitability'}</div></div></div>
  <div class="grid g5" style="margin-bottom:16px;">
    <div class="kpi-card"><div class="kpi-label">Revenue</div><div class="kpi-value" style="font-size:17px;">${money(totalRevenue)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Forecast</div><div class="kpi-value" style="font-size:17px;">${money(totalForecast)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Invoices</div><div class="kpi-value" style="font-size:17px;">${money(totalInvoiced)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Outstanding</div><div class="kpi-value" style="font-size:17px; color:var(--danger)">${money(outstanding)}</div></div>
    ${access === true ? `<div class="kpi-card"><div class="kpi-label">Profit</div><div class="kpi-value" style="font-size:17px; color:var(--success)">${money(profit)}</div></div>` : ''}
  </div>
  <div class="grid g2" style="margin-bottom:16px;">
    <div class="card">
      <div class="section-title">Revenue by Month</div>
      <div class="bar-chart">${FORECAST_ROWS.map(r => `<div class="bar-col"><div class="bar" style="height:${Math.round((r.actual || r.forecast) / 700000 * 130)}px; background:${r.actual ? 'var(--primary)' : 'var(--border)'}"></div><div class="bar-label">${r.month.split(' ')[0]}</div></div>`).join('')}</div>
    </div>
    <div class="card">
      <div class="section-title">Forecast vs Actual</div>
      <div class="bar-chart">${FORECAST_ROWS.map(r => `<div class="bar-col"><div class="bar-dual" style="height:130px;">
        <div class="bar" style="height:${Math.round(r.forecast / 700000 * 130)}px; background:var(--border);"></div>
        <div class="bar" style="height:${r.actual ? Math.round(r.actual / 700000 * 130) : 0}px; background:var(--primary);"></div>
      </div><div class="bar-label">${r.month.split(' ')[0]}</div></div>`).join('')}</div>
    </div>
  </div>
  <div class="grid g2" style="margin-bottom:16px;">
    <div class="card">
      <div class="section-title">Revenue by Customer</div>
      ${uniqueValues(REVENUE_ROWS, 'customer').map(c => {
        const total = REVENUE_ROWS.filter(r => r.customer === c).reduce((s, r) => s + r.revenue, 0);
        return `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-soft);"><span style="font-size:13px;">${c}</span><span class="mono" style="font-weight:700;">${money(total)}</span></div>`;
      }).join('')}
    </div>
    <div class="card">
      <div class="section-title">Revenue by Project</div>
      ${REVENUE_ROWS.map(r => `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-soft);"><span style="font-size:13px;">${r.project}</span><span class="mono" style="font-weight:700;">${money(r.revenue)}</span></div>`).join('')}
    </div>
  </div>
  <div class="card"><div class="section-title">Quick Links</div>
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <button class="btn sm" onclick="navigate('finance-revenue')">Revenue Table</button>
      <button class="btn sm" onclick="navigate('finance-invoices')">Invoices</button>
      <button class="btn sm" onclick="navigate('finance-forecast')">Forecast</button>
      ${access === true ? `<button class="btn sm" onclick="navigate('finance-prices')">Prices</button>` : ''}
    </div>
  </div>`;
    }

    function setRevenueFilter(key, v) { revenueFilters[key] = v; renderPage(); }
    function pageFinanceRevenue() {
      const gate = financeAccessGate(); if (gate) return gate;
      const f = revenueFilters;
      const rows = REVENUE_ROWS.filter(r => {
        if (f.project && r.project !== f.project) return false;
        if (f.customer && r.customer !== f.customer) return false;
        return true;
      });
      return `
  <div class="card">
    <div class="table-toolbar">
      <select class="tt-select" onchange="setRevenueFilter('project', this.value)"><option value="">Project</option>${uniqueValues(REVENUE_ROWS, 'project').map(p => `<option value="${p}" ${f.project === p ? 'selected' : ''}>${p}</option>`).join('')}</select>
      <select class="tt-select" onchange="setRevenueFilter('customer', this.value)"><option value="">Customer</option>${uniqueValues(REVENUE_ROWS, 'customer').map(c => `<option value="${c}" ${f.customer === c ? 'selected' : ''}>${c}</option>`).join('')}</select>
      <select class="tt-select"><option>2026</option><option>2025</option></select>
      <div class="tt-spacer"></div>
      <div class="tt-icon-btn" title="Export" onclick="exportNotice()">${icon('download', '')}</div>
    </div>
    <table><thead><tr><th>Project</th><th>Customer</th><th>Revenue</th><th>Forecast</th><th>Difference</th></tr></thead>
    <tbody>${rows.map(r => {
        const diff = r.revenue - r.forecast;
        return `<tr><td>${r.project}</td><td>${r.customer}</td><td class="mono">${money(r.revenue)}</td><td class="mono">${money(r.forecast)}</td>
        <td class="mono" style="font-weight:700; color:${diff >= 0 ? 'var(--success)' : 'var(--danger)'}">${diff >= 0 ? '+' : ''}${money(diff)}</td></tr>`;
      }).join('')}</tbody></table>
  </div>`;
    }

    function setInvoiceSearch(v) { invoiceFilters.search = v; renderPage(); }
    function setInvoiceFilter(key, v) { invoiceFilters[key] = v; renderPage(); }
    function clearInvoiceFilter(key) { invoiceFilters[key] = ''; renderPage(); }
    function resetInvoiceFilters() { invoiceFilters = { search: '', project: '', customer: '', status: '' }; renderPage(); }
    function filterInvoices() {
      const f = invoiceFilters;
      return INVOICES.filter(i => {
        if (f.search && !(`${i.id} ${i.project} ${i.customer}`.toLowerCase().includes(f.search.toLowerCase()))) return false;
        if (f.project && i.project !== f.project) return false;
        if (f.customer && i.customer !== f.customer) return false;
        if (f.status && i.status !== f.status) return false;
        return true;
      });
    }
    function invoiceTable(list) {
      if (list.length === 0) return emptyStateBlock('No invoices found', 'No invoices match this view yet.', null);
      return `<table><thead><tr><th>Invoice</th><th>Project</th><th>Customer</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody>${list.map(i => `<tr>
      <td class="mono">${i.id}</td><td>${i.project}</td><td>${i.customer}</td><td class="mono">${money(i.amount)}</td>
      <td>${statusBadge(i.status, i.statusType)}</td>
      <td><div class="icon-actions">
        <div class="icon-btn" title="View" onclick="openModal('${i.id}', 'This opens the invoice preview for ${i.id} — ${money(i.amount)}, status ${i.status}.')">${icon('view', '')}</div>
        <div class="icon-btn" title="Download" onclick="openModal('Download Invoice', 'This downloads a PDF copy of ${i.id}.')">${icon('download', '')}</div>
        ${permIconBtn('editInvoice', 'Edit', 'edit', `openModal('Edit ${i.id}', 'This opens the invoice edit form.')`)}
        ${permIconBtn('deleteInvoice', 'Delete', 'trash', `openModal('Delete ${i.id}?', 'This invoice will be permanently removed.')`, 'danger-hover')}
      </div></td>
    </tr>`).join('')}</tbody></table>`;
    }
    function pageFinanceInvoices() {
      const gate = financeAccessGate(); if (gate) return gate;
      const rows = filterInvoices();
      const stats = [
        { label: 'Paid', value: INVOICES.filter(i => i.status === 'Paid').length, color: 'var(--success)' },
        { label: 'Outstanding', value: INVOICES.filter(i => i.status === 'Outstanding').length, color: 'var(--warning)' },
        { label: 'Overdue', value: INVOICES.filter(i => i.status === 'Overdue').length, color: 'var(--danger)' },
        { label: 'Draft', value: INVOICES.filter(i => i.status === 'Draft').length },
      ];
      return `
  <div class="page-title-row" style="margin-bottom:2px;"><div></div>
    ${permBtn('uploadInvoice', 'Upload Invoice', 'upload', "openModal('Upload Invoice', 'This attaches a new invoice PDF and links it to a project and customer.')", "primary")}
  </div>
  ${statsRow(stats)}
  <div class="card">
    <div class="table-toolbar">
      <div class="tt-search">${icon('search', '')}<input type="text" placeholder="Search invoice…" value="${invoiceFilters.search}" oninput="setInvoiceSearch(this.value)"/></div>
      <select class="tt-select" onchange="setInvoiceFilter('project', this.value)"><option value="">Project</option>${uniqueValues(INVOICES, 'project').map(p => `<option value="${p}" ${invoiceFilters.project === p ? 'selected' : ''}>${p}</option>`).join('')}</select>
      <select class="tt-select" onchange="setInvoiceFilter('customer', this.value)"><option value="">Customer</option>${uniqueValues(INVOICES, 'customer').map(c => `<option value="${c}" ${invoiceFilters.customer === c ? 'selected' : ''}>${c}</option>`).join('')}</select>
      <select class="tt-select" onchange="setInvoiceFilter('status', this.value)"><option value="">Status</option>${uniqueValues(INVOICES, 'status').map(s => `<option value="${s}" ${invoiceFilters.status === s ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <div class="tt-spacer"></div>
      <div class="tt-icon-btn" title="Reset" onclick="resetInvoiceFilters()">${icon('close', '')}</div>
      <div class="tt-icon-btn" title="Export" onclick="exportNotice()">${icon('download', '')}</div>
    </div>
    ${filterChips(invoiceFilters, { project: 'Project', customer: 'Customer', status: 'Status' }, 'clearInvoiceFilter', 'resetInvoiceFilters')}
    <div class="table-head-row">${rowCountLabel(rows.length, 'invoice')}</div>
    ${invoiceTable(rows)}
  </div>`;
    }

    function pageFinanceForecast() {
      const gate = financeAccessGate(); if (gate) return gate;
      const nextForecast = FORECAST_ROWS[FORECAST_ROWS.length - 1].forecast;
      const lastActual = [...FORECAST_ROWS].reverse().find(r => r.actual !== null);
      return `
  <div class="grid g3" style="margin-bottom:16px;">
    <div class="kpi-card"><div class="kpi-label">Monthly Forecast</div><div class="kpi-value" style="font-size:18px;">${money(nextForecast)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Actual Revenue (last closed month)</div><div class="kpi-value" style="font-size:18px;">${money(lastActual.actual)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Difference</div><div class="kpi-value" style="font-size:18px; color:${lastActual.actual - lastActual.forecast >= 0 ? 'var(--success)' : 'var(--danger)'}">${money(lastActual.actual - lastActual.forecast)}</div></div>
  </div>
  <div class="card">
    <div class="section-title">Forecast vs Actual by Month</div>
    <table><thead><tr><th>Month</th><th>Forecast</th><th>Actual</th><th>Difference</th></tr></thead>
    <tbody>${FORECAST_ROWS.map(r => {
        const diff = r.actual !== null ? r.actual - r.forecast : null;
        return `<tr><td>${r.month}</td><td class="mono">${money(r.forecast)}</td><td class="mono">${r.actual !== null ? money(r.actual) : '—'}</td>
        <td class="mono" style="font-weight:700; color:${diff === null ? 'var(--ink-faint)' : diff >= 0 ? 'var(--success)' : 'var(--danger)'}">${diff === null ? 'Pending' : (diff >= 0 ? '+' : '') + money(diff)}</td></tr>`;
      }).join('')}</tbody></table>
  </div>`;
    }

    function pageFinancePrices() {
      if (can('editPrice') === false && can('viewFinance') !== true) {
        return `<div class="card">${emptyStateBlock('No price access', 'Your role does not have access to price management.', null)}</div>`;
      }
      return `<div class="card">
    <div class="section-title">Price Management <span class="hint">${can('editPrice') === true ? '' : 'View only'}</span></div>
    <table><thead><tr><th>FGPN</th><th>Customer</th><th>Unit Price</th><th>Last Updated</th><th>Actions</th></tr></thead>
    <tbody>${PRICES.map(p => `<tr>
      <td class="mono">${p.fgpn}</td><td>${p.customer}</td><td class="mono">${financeMoney(p.price,'EUR')}</td><td>${p.updated}</td>
      <td><div class="icon-actions">
        ${permIconBtn('editPrice', 'Edit', 'edit', `openModal('Edit Price', 'This opens the price edit form for ${p.fgpn} — ${p.customer}.')`)}
        <div class="icon-btn" title="History" onclick="openModal('Price History', 'This shows the full price change history for ${p.fgpn}.')">${icon('history', '')}</div>
      </div></td>
    </tr>`).join('')}</tbody></table>
  </div>`;
    }

    /* =====================================================================
       ============ NEW MODULE: M12 — AUDIT & TRACEABILITY ================
       ===================================================================== */
    function auditScopedRows() {
      const scope = can('viewAudit');
      const rows = completeAuditEvents();
      if (scope === 'all') return rows;
      if (scope === 'assigned') return rows.filter(a => ['BMW X5', 'Dacia Sandero'].includes(a.project) || a.project === '—');
      if (scope === 'warehouse') return rows.filter(a => /Manufacturing|Warehouse|Reception|Stock/i.test(a.module));
      if (scope === 'own') return rows.filter(a => a.user === 'A. Haddad');
      return rows;
    }
    function setAuditSearch(v) { auditFilters.search = v; auditPage = 1; renderPage(); }
    function setAuditFilter(key, v) { auditFilters[key] = v; auditPage = 1; renderPage(); }
    function clearAuditFilter(key) { auditFilters[key] = ''; auditPage = 1; renderPage(); }
    function resetAuditFilters() { auditFilters = { search: '', module: '', project: '', po: '', pn: '', user: '', evidence: '', date: '' }; auditPage = 1; renderPage(); }
    function sortAudit(key) { auditSort.dir = (auditSort.key === key) ? -auditSort.dir : 1; auditSort.key = key; renderPage(); }
    function setAuditPage(n) { auditPage = Math.max(1, n); renderPage(); }
    function filterAudit() {
      const f = auditFilters;
      return auditScopedRows().filter(a => {
        if (f.search && !(`${a.id} ${a.entity} ${a.details} ${a.action} ${a.actor} ${a.artifacts.map(item => item.name).join(' ')}`.toLowerCase().includes(f.search.toLowerCase()))) return false;
        if (f.module && a.module !== f.module) return false;
        if (f.project && a.project !== f.project) return false;
        if (f.po && a.po !== f.po) return false;
        if (f.pn && !a.pns.includes(f.pn)) return false;
        if (f.user && a.user !== f.user) return false;
        if (f.evidence === 'with' && !a.artifacts.length) return false;
        if (f.evidence === 'without' && a.artifacts.length) return false;
        if (f.date && !a.date.startsWith(f.date)) return false;
        return true;
      });
    }
    function auditTable(list) {
      if (list.length === 0) return emptyStateBlock('No audit entries', 'No activity recorded for this view yet.', null);
      return `<div class="table-scroll"><table class="audit-ledger-table"><thead><tr><th>Date & time</th><th>Person</th><th>Module & action</th><th>Project / PO / PN</th><th>Evidence</th><th></th></tr></thead>
    <tbody>${list.map(a => `<tr class="clickable-row" onclick="openAuditDetail('${a.id}')">
      <td class="mono audit-date-cell">${poEsc(a.date)}</td>
      <td><div class="audit-person"><span>${poEsc(String(a.actor).split(/\s+/).map(part => part[0]).join('').slice(0,2).toUpperCase())}</span><div><strong>${poEsc(a.actor)}</strong><small>${poEsc(a.role)}</small></div></div></td>
      <td><div class="audit-action-cell"><span>${poEsc(a.module)}</span><strong>${poEsc(a.action)}</strong><small>${poEsc(a.details)}</small></div></td>
      <td><div class="audit-scope-cell"><strong>${poEsc(a.project)}</strong>${a.po !== '—' ? `<span class="mono">${poEsc(a.po)}</span>` : ''}${a.pns.length ? `<small class="mono">${poEsc(a.pns.slice(0,3).join(', '))}${a.pns.length > 3 ? ` +${a.pns.length - 3}` : ''}</small>` : ''}</div></td>
      <td>${a.artifacts.length ? `<span class="audit-proof-count">${icon('doc','')}${a.artifacts.length} file${a.artifacts.length === 1 ? '' : 's'}</span>` : '<span class="audit-no-proof">No file</span>'}</td>
      <td><div class="icon-btn" title="Open complete record" onclick="stop(event); openAuditDetail('${a.id}')">${icon('view', '')}</div></td>
    </tr>`).join('')}</tbody></table></div>`;
    }

    function auditUnique(rows,key) { return [...new Set(rows.map(row => row[key]).filter(value => value && value !== '—'))].sort(); }

    function pageAuditLogs() {
      const scope = can('viewAudit');
      const sourceRows = auditScopedRows();
      const rows = sortRows(filterAudit(), auditSort);
      const total = rows.length;
      const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      auditPage = Math.min(auditPage, totalPages);
      const pageRows = rows.slice((auditPage - 1) * PAGE_SIZE, auditPage * PAGE_SIZE);
      const actors = new Set(sourceRows.map(row => row.actor)).size;
      const proofs = sourceRows.reduce((sum,row) => sum + row.artifacts.length,0);
      const projects = new Set(sourceRows.map(row => row.project).filter(project => project !== '—')).size;
      const pnOptions = [...new Set(sourceRows.flatMap(row => row.pns))].sort();

      return `
  <section class="audit-page-shell">
    <div class="audit-page-head"><div><span>Audit & Traceability</span><h2>Application Activity Ledger</h2></div><button class="btn" onclick="exportNotice()">${icon('download','')} Export ledger</button></div>
    <div class="audit-kpi-grid"><div><span>Recorded events</span><strong>${sourceRows.length}</strong></div><div><span>People identified</span><strong>${actors}</strong></div><div><span>Evidence files</span><strong>${proofs}</strong></div><div><span>Projects covered</span><strong>${projects}</strong></div></div>
    <div class="card audit-ledger-card">
      <div class="audit-filter-grid">
        <div class="audit-search">${icon('search','')}<input type="text" placeholder="Search action, person, record or evidence" value="${poEsc(auditFilters.search)}" oninput="setAuditSearch(this.value)"/></div>
        <select onchange="setAuditFilter('project',this.value)"><option value="">All projects</option>${auditUnique(sourceRows,'project').map(value => `<option ${auditFilters.project === value ? 'selected' : ''}>${poEsc(value)}</option>`).join('')}</select>
        <select onchange="setAuditFilter('po',this.value)"><option value="">All purchase orders</option>${auditUnique(sourceRows,'po').map(value => `<option ${auditFilters.po === value ? 'selected' : ''}>${poEsc(value)}</option>`).join('')}</select>
        <select onchange="setAuditFilter('pn',this.value)"><option value="">All part numbers</option>${pnOptions.map(value => `<option ${auditFilters.pn === value ? 'selected' : ''}>${poEsc(value)}</option>`).join('')}</select>
        <select onchange="setAuditFilter('module',this.value)"><option value="">All modules</option>${auditUnique(sourceRows,'module').map(value => `<option ${auditFilters.module === value ? 'selected' : ''}>${poEsc(value)}</option>`).join('')}</select>
        <select onchange="setAuditFilter('user',this.value)"><option value="">All people</option>${auditUnique(sourceRows,'user').map(value => `<option ${auditFilters.user === value ? 'selected' : ''}>${poEsc(value)}</option>`).join('')}</select>
        <select onchange="setAuditFilter('evidence',this.value)"><option value="">Any evidence</option><option value="with" ${auditFilters.evidence === 'with' ? 'selected' : ''}>With evidence file</option><option value="without" ${auditFilters.evidence === 'without' ? 'selected' : ''}>Without evidence file</option></select>
        <input type="date" value="${auditFilters.date}" onchange="setAuditFilter('date',this.value)"/>
        <button class="btn" onclick="resetAuditFilters()">Reset filters</button>
      </div>
      ${filterChips(auditFilters, { module:'Module',project:'Project',po:'PO',pn:'PN',user:'Person',evidence:'Evidence',date:'Date' }, 'clearAuditFilter', 'resetAuditFilters')}
      <div class="audit-results-head"><strong>${total} event${total === 1 ? '' : 's'}</strong><span>Immutable chronological record</span></div>
      ${auditTable(pageRows)}
      ${pageRows.length ? paginationBar(total,auditPage,PAGE_SIZE,'setAuditPage') : ''}
    </div>
  </section>`;
    }

    function openAuditDetail(id) { openAuditId = id; navigate('audit-detail'); }
    function pageAuditDetail() {
      const ledger = completeAuditEvents();
      const a = ledger.find(x => x.id === openAuditId) || ledger[0];
      const related = ledger.filter(event => event.id !== a.id && ((a.po !== '—' && event.po === a.po) || (a.mfgCode && event.mfgCode === a.mfgCode) || (a.custCode && event.custCode === a.custCode))).slice(0,6);
      return `
  <section class="audit-detail-shell">
    <div class="audit-detail-head"><button class="btn" onclick="navigateBack('audit-logs')">${icon('chevLeft','')} Back to audit</button><span class="mono">${poEsc(a.id)}</span></div>
    <div class="audit-detail-hero"><div><span>${poEsc(a.module)}</span><h2>${poEsc(a.action)}</h2><p>${poEsc(a.entity)}</p></div>${statusBadge(poEsc(a.result || 'Recorded'),['Confirmed','Completed','Delivered','Validated','Generated','Successful','Done','Packaged'].includes(a.result) ? 'success' : 'neutral')}</div>
    <div class="audit-detail-grid">
      <div class="card audit-detail-main">
        <div class="audit-detail-section"><h3>Action record</h3><p>${poEsc(a.details)}</p></div>
        <div class="audit-facts"><div><span>Date & time</span><strong class="mono">${poEsc(a.date)}</strong></div><div><span>Performed by</span><strong>${poEsc(a.actor)}</strong><small>${poEsc(a.role)}</small></div><div><span>Project</span><strong>${poEsc(a.project)}</strong></div><div><span>Purchase order</span><strong class="mono">${poEsc(a.po)}</strong></div><div><span>Part numbers</span><strong class="mono">${poEsc(a.pns.join(', ') || '—')}</strong></div><div><span>Record</span><strong class="mono">${poEsc(a.entity)}</strong></div></div>
        ${a.diff ? `<div class="audit-change"><h3>Field change</h3><span>${poEsc(a.diff.field)}</span><div><strong>${poEsc(a.diff.old)}</strong>${icon('chevRight','')}<strong>${poEsc(a.diff.new)}</strong></div></div>` : ''}
      </div>
      <aside class="card audit-detail-evidence"><h3>Evidence & documents</h3>${auditArtifactButtons(a)}<div class="audit-integrity">${icon('lock','')}<div><strong>Audit record retained</strong><span>Actor, timestamp, context and linked evidence stay attached to this event.</span></div></div></aside>
    </div>
    ${related.length ? `<div class="audit-related"><div class="audit-related-head"><h3>Related activity</h3><span>${a.po !== '—' ? poEsc(a.po) : poEsc(a.entity)}</span></div>${traceabilityTimeline(related)}</div>` : ''}
  </section>`;
    }

    const ADMIN_ROLE_OPTIONS = ['Plant Manager','Launch Manager','Launch Engineer','Warehouse Team Leader','Warehouse Personnel','Production & Packing Coordinator','System Administrator'];
    const ADMIN_ROLE_DEFINITIONS = {
      'System Administrator':{ scope:'Administration only', permissions:['User accounts','Project assignments','Reference lists','Login audit'] },
      'Plant Manager':{ scope:'All projects · read only', permissions:['Plant dashboard','PO status','Delivery records','Audit documents'] },
      'Launch Manager':{ scope:'All projects; write assigned', permissions:['Projects and POs','Simulation','Deliveries','Finance'] },
      'Launch Engineer':{ scope:'Assigned projects only', permissions:['Projects and POs','BOM','Simulation','Delivery instructions'] },
      'Warehouse Team Leader':{ scope:'Warehouse delivery control', permissions:['Delivery code','Receiver selection','Delivery PDF','Signed PDF upload'] },
      'Warehouse Personnel':{ scope:'Stock reception only', permissions:['Receive materials','View own receptions'] },
      'Production & Packing Coordinator':{ scope:'Production and packaging queue', permissions:['View production','Mark production Done','Mark PO Packaged'] },
    };
    function adminNow() { return new Date().toISOString().slice(0,16).replace('T',' '); }
    function adminInitials(name) { return String(name || '').split(/\s+/).filter(Boolean).slice(0,2).map(part => part[0]).join('').toUpperCase(); }
    function adminUserById(id) { return ADMIN_USERS.find(user => user.id === id); }
    function adminIsLaunchRole(role) { return ['Launch Engineer','Launch Manager'].includes(role); }
    function adminAudit(title,detail) {
      const time = adminNow();
      ADMIN_ACTIVITY.unshift({ title,detail,time });
      AUDIT_LOGS.unshift({ id:`AUD-${15000 + AUDIT_LOGS.length}`,date:time,user:ROLE_PERSONA.admin.name,module:'Administration',action:title,entity:'System administration',project:'—',po:'—',evidence:'Administrator audit record',details:detail });
    }
    function adminNextUserId() { return `ADM-${String(Math.max(0,...ADMIN_USERS.map(user => Number(user.id.split('-')[1]) || 0))+1).padStart(3,'0')}`; }
    function adminShortName(fullName) { const parts=String(fullName).trim().split(/\s+/); return parts.length > 1 ? `${parts[0][0]}. ${parts.slice(1).join(' ')}` : parts[0]; }
    function adminDefaultUserDraft() { return { fullName:'',username:'',email:'',role:'Launch Engineer',status:'Active',phone:'',location:'',password:'' }; }
    function adminOpenUserForm(mode,id='') {
      const user = adminUserById(id);
      adminUserForm = { open:true,mode,editingId:user?.id || '',errors:{},draft:user ? { fullName:user.fullName || user.name,username:user.username || '',email:user.email || '',role:user.role,status:user.status,phone:user.phone || '',location:user.location || '',password:'' } : adminDefaultUserDraft() };
      if (currentPage !== 'admin-users') navigate('admin-users'); else renderPage();
    }
    function adminCloseUserForm() { adminUserForm = { open:false,mode:'create',editingId:'',draft:{},errors:{} }; renderPage(); }
    function adminSetUserDraft(key,value) { adminUserForm.draft[key]=value; delete adminUserForm.errors[key]; }
    function adminSaveUser() {
      const draft=adminUserForm.draft, errors={};
      if (!draft.fullName?.trim()) errors.fullName='Full name is required.';
      if (!/^[A-Za-z0-9._-]{3,}$/.test(draft.username || '')) errors.username='Use at least 3 letters, numbers, dots or hyphens.';
      if (ADMIN_USERS.some(user => user.username.toLowerCase() === String(draft.username).toLowerCase() && user.id !== adminUserForm.editingId)) errors.username='Username already exists.';
      if (!ADMIN_ROLE_OPTIONS.includes(draft.role)) errors.role='Select one role.';
      if (!['Active','Inactive'].includes(draft.status)) errors.status='Select an account status.';
      if (adminUserForm.mode === 'create' && String(draft.password || '').length < 8) errors.password='Temporary password must contain at least 8 characters.';
      adminUserForm.errors=errors;
      if (Object.keys(errors).length) return renderPage();
      if (adminUserForm.mode === 'edit') {
        const user=adminUserById(adminUserForm.editingId); if (!user) return;
        const oldRole=user.role, oldName=user.name;
        Object.assign(user,{ fullName:draft.fullName.trim(),name:adminShortName(draft.fullName),username:draft.username.trim(),email:draft.email.trim(),role:draft.role,status:draft.status,phone:draft.phone.trim(),location:draft.location.trim() });
        if (!adminIsLaunchRole(user.role)) {
          for (let index=ADMIN_ASSIGNMENTS.length-1; index>=0; index--) if (ADMIN_ASSIGNMENTS[index].user === oldName || ADMIN_ASSIGNMENTS[index].user === user.name) ADMIN_ASSIGNMENTS.splice(index,1);
          user.projects=[];
        } else {
          ADMIN_ASSIGNMENTS.forEach(assignment => {
            if (assignment.user === oldName) {
              assignment.user=user.name;
              assignment.role=user.role === 'Launch Manager' ? 'Responsible Manager' : 'Responsible Engineer';
            }
          });
        }
        if (user.status === 'Inactive') { user.locked=false; user.failedAttempts=0; }
        adminAudit('User account updated',`${user.fullName} updated; role ${oldRole} to ${user.role}; status ${user.status}.`);
      } else {
        const user={ id:adminNextUserId(),name:adminShortName(draft.fullName),fullName:draft.fullName.trim(),username:draft.username.trim(),email:draft.email.trim(),role:draft.role,status:draft.status,locked:false,failedAttempts:0,lastLogin:'Never',projects:[],phone:draft.phone.trim(),auth:'Password',location:draft.location.trim(),passwordResetRequired:true };
        ADMIN_USERS.push(user); adminSelectedUserId=user.id;
        adminAudit('User account created',`${user.fullName} created as ${user.role} with ${user.status.toLowerCase()} status.`);
      }
      adminUserForm={ open:false,mode:'create',editingId:'',draft:{},errors:{} }; renderPage();
    }
    function adminToggleUserStatus(id) {
      const user=adminUserById(id); if (!user) return;
      if (user.id === 'ADM-001' && user.status === 'Active') return openModal('Account protected','The active primary System Administrator account cannot be deactivated.');
      user.status=user.status === 'Active' ? 'Inactive' : 'Active';
      if (user.status === 'Inactive') { user.locked=false; user.failedAttempts=0; }
      adminAudit(user.status === 'Active' ? 'User account reactivated' : 'User account deactivated',`${user.fullName} is now ${user.status.toLowerCase()}. Historical actions remain unchanged.`);
      renderPage();
    }
    function adminUnlockUser(id) {
      const user=adminUserById(id); if (!user || !user.locked) return;
      user.locked=false; user.failedAttempts=0;
      adminAudit('User account unlocked',`${user.fullName} unlocked after Administrator review.`); renderPage();
    }
    function adminResetPassword(id) {
      const user=adminUserById(id); if (!user) return;
      user.passwordResetRequired=true; adminAudit('Password reset required',`${user.fullName} must set a new password at next login.`);
      openModal('Password reset recorded',`${user.fullName} must set a new password at the next successful login.`); renderPage();
    }
    function adminSetUserFilter(key,value) { adminUserFilters[key]=value; renderPage(); }
    function adminFilteredUsers() {
      const search=adminUserFilters.search.toLowerCase();
      return ADMIN_USERS.filter(user => (!search || [user.fullName,user.username,user.email,user.role].some(value => String(value).toLowerCase().includes(search))) && (!adminUserFilters.role || user.role === adminUserFilters.role) && (!adminUserFilters.status || user.status === adminUserFilters.status) && (!adminUserFilters.security || (adminUserFilters.security === 'Locked' ? user.locked : !user.locked)));
    }
    function adminUserFormHtml() {
      if (!adminUserForm.open) return '';
      const draft=adminUserForm.draft, errors=adminUserForm.errors;
      const field=(key,label,input) => `<div class="admin-field"><label>${label}</label>${input}${errors[key] ? `<span class="admin-field-error">${errors[key]}</span>` : ''}</div>`;
      return `<div class="card admin-user-form"><div class="admin-form-head"><h3>${adminUserForm.mode === 'create' ? 'Create User Account' : 'Edit User Account'}</h3><button class="btn sm" onclick="adminCloseUserForm()">${icon('close','')} Close</button></div><div class="admin-form-body"><div class="admin-form-grid">
        ${field('fullName','Full Name',`<input value="${poEsc(draft.fullName)}" oninput="adminSetUserDraft('fullName',this.value)" placeholder="Full legal name">`)}
        ${field('username','Username',`<input class="mono" value="${poEsc(draft.username)}" oninput="adminSetUserDraft('username',this.value)" placeholder="firstname.lastname">`)}
        ${field('email','Email',`<input type="email" value="${poEsc(draft.email)}" oninput="adminSetUserDraft('email',this.value)" placeholder="name@company.com">`)}
        ${field('role','Single Role Assignment',`<select onchange="adminSetUserDraft('role',this.value)">${ADMIN_ROLE_OPTIONS.map(role => `<option value="${role}" ${draft.role === role ? 'selected' : ''}>${role}</option>`).join('')}</select>`)}
        ${field('status','Account Status',`<select onchange="adminSetUserDraft('status',this.value)"><option value="Active" ${draft.status === 'Active' ? 'selected' : ''}>Active</option><option value="Inactive" ${draft.status === 'Inactive' ? 'selected' : ''}>Inactive</option></select>`)}
        ${field('location','Location',`<input value="${poEsc(draft.location)}" oninput="adminSetUserDraft('location',this.value)" placeholder="Plant or department">`)}
        ${field('phone','Phone',`<input value="${poEsc(draft.phone)}" oninput="adminSetUserDraft('phone',this.value)" placeholder="Optional phone number">`)}
        ${adminUserForm.mode === 'create' ? field('password','Temporary Password',`<input type="password" value="${poEsc(draft.password)}" oninput="adminSetUserDraft('password',this.value)" placeholder="Minimum 8 characters">`) : ''}
      </div><div class="admin-form-actions"><button class="btn" onclick="adminCloseUserForm()">Cancel</button><button class="btn primary" onclick="adminSaveUser()">${icon('check','')} ${adminUserForm.mode === 'create' ? 'Create Account' : 'Save Changes'}</button></div></div></div>`;
    }
    function pageAdminUsers() {
      const users=adminFilteredUsers(), active=ADMIN_USERS.filter(user => user.status === 'Active').length, inactive=ADMIN_USERS.length-active, locked=ADMIN_USERS.filter(user => user.locked).length;
      return `<div class="admin-shell"><div class="admin-head"><h2>User Accounts</h2><div class="admin-head-actions"><button class="btn primary" onclick="adminOpenUserForm('create')">${icon('plus','')} Create User</button></div></div>
      ${adminUserFormHtml()}
      <div class="admin-kpis"><div class="admin-kpi"><div class="admin-kpi-label">Total Accounts</div><div class="admin-kpi-value">${ADMIN_USERS.length}</div></div><div class="admin-kpi"><div class="admin-kpi-label">Active</div><div class="admin-kpi-value">${active}</div></div><div class="admin-kpi"><div class="admin-kpi-label">Inactive</div><div class="admin-kpi-value">${inactive}</div></div><div class="admin-kpi"><div class="admin-kpi-label">Locked</div><div class="admin-kpi-value" style="color:${locked ? 'var(--danger)' : '#000'};">${locked}</div></div></div>
      <div class="card admin-card" style="padding:0;overflow:hidden;"><div class="admin-toolbar"><div class="admin-search">${icon('search','')}<input value="${poEsc(adminUserFilters.search)}" oninput="adminSetUserFilter('search',this.value)" placeholder="Search name, username or email"></div><select class="admin-filter" onchange="adminSetUserFilter('role',this.value)"><option value="">All roles</option>${ADMIN_ROLE_OPTIONS.map(role => `<option value="${role}" ${adminUserFilters.role === role ? 'selected' : ''}>${role}</option>`).join('')}</select><select class="admin-filter" onchange="adminSetUserFilter('status',this.value)"><option value="">All statuses</option><option ${adminUserFilters.status === 'Active' ? 'selected' : ''}>Active</option><option ${adminUserFilters.status === 'Inactive' ? 'selected' : ''}>Inactive</option></select><select class="admin-filter" onchange="adminSetUserFilter('security',this.value)"><option value="">All security states</option><option ${adminUserFilters.security === 'Unlocked' ? 'selected' : ''}>Unlocked</option><option ${adminUserFilters.security === 'Locked' ? 'selected' : ''}>Locked</option></select><span class="admin-sub">${users.length} account${users.length === 1 ? '' : 's'}</span></div>
      <div class="table-scroll"><table><thead><tr><th>User</th><th>Role</th><th>Account</th><th>Security</th><th>Project Access</th><th>Last Login</th><th style="text-align:right;">Actions</th></tr></thead><tbody>${users.length ? users.map(user => `<tr><td><div class="admin-user-cell"><span class="admin-avatar">${adminInitials(user.fullName)}</span><div><strong>${user.fullName}</strong><span>@${user.username}</span></div></div></td><td>${user.role}</td><td>${statusBadge(user.status,user.status === 'Active' ? 'success' : 'neutral')}</td><td><div class="admin-security-state"><span class="admin-security-dot ${user.locked ? 'locked' : ''}"></span>${user.locked ? `Locked · ${user.failedAttempts}/5 attempts` : 'Unlocked'}</div></td><td><div class="admin-project-tags">${user.projects.length ? user.projects.map(project => `<span class="admin-project-tag">${project}</span>`).join('') : '<span class="admin-sub">No project assignment</span>'}</div></td><td class="mono">${user.lastLogin}</td><td><div class="admin-row-actions"><button class="btn sm" onclick="openAdminUser('${user.id}')">View</button><button class="btn sm" onclick="adminOpenUserForm('edit','${user.id}')">Edit</button>${user.locked ? `<button class="btn sm" onclick="adminUnlockUser('${user.id}')">Unlock</button>` : ''}<button class="btn sm" onclick="adminToggleUserStatus('${user.id}')">${user.status === 'Active' ? 'Deactivate' : 'Reactivate'}</button></div></td></tr>`).join('') : `<tr><td colspan="7"><div class="empty-state" style="padding:28px;"><div class="e-title">No matching accounts</div></div></td></tr>`}</tbody></table></div></div></div>`;
    }

    function openAdminUser(id) { adminSelectedUserId=id; navigate('admin-user-details'); }
    function pageAdminUserDetails() {
      const user=adminUserById(adminSelectedUserId) || ADMIN_USERS[0], definition=ADMIN_ROLE_DEFINITIONS[user.role] || {scope:'Role-scoped access',permissions:[]};
      const loginEvents=ADMIN_LOGIN_EVENTS.filter(event => event.username === user.username).slice(0,8);
      return `<div class="admin-shell"><div class="admin-head"><div><button class="btn sm" onclick="navigate('admin-users')" style="margin-bottom:10px;">${icon('chevLeft','')} Users</button><h2>${user.fullName}</h2><p class="mono">@${user.username} · ${user.id}</p></div><div class="admin-head-actions"><button class="btn" onclick="adminResetPassword('${user.id}')">${icon('lock','')} Reset Password</button>${user.locked ? `<button class="btn" onclick="adminUnlockUser('${user.id}')">${icon('check','')} Unlock</button>` : ''}<button class="btn" onclick="adminToggleUserStatus('${user.id}')">${user.status === 'Active' ? 'Deactivate' : 'Reactivate'}</button><button class="btn primary" onclick="adminOpenUserForm('edit','${user.id}')">${icon('edit','')} Edit Account</button></div></div>
      <div class="admin-user-overview"><div class="card admin-card"><div class="admin-card-head"><h3>Account Information</h3><div style="display:flex;gap:7px;">${statusBadge(user.status,user.status === 'Active' ? 'success' : 'neutral')}${user.locked ? statusBadge('Locked','danger') : statusBadge('Unlocked','success')}</div></div><div class="admin-detail-grid"><div class="admin-detail-item"><span>Full Name</span><strong>${user.fullName}</strong></div><div class="admin-detail-item"><span>Username</span><strong class="mono">${user.username}</strong></div><div class="admin-detail-item"><span>Email</span><strong>${user.email || '—'}</strong></div><div class="admin-detail-item"><span>Phone</span><strong>${user.phone || '—'}</strong></div><div class="admin-detail-item"><span>Authentication</span><strong>Username and password</strong></div><div class="admin-detail-item"><span>Failed Attempts</span><strong>${user.failedAttempts}/5</strong></div><div class="admin-detail-item"><span>Location</span><strong>${user.location || '—'}</strong></div><div class="admin-detail-item"><span>Last Login</span><strong class="mono">${user.lastLogin}</strong></div></div></div>
      <div class="card admin-card"><div class="admin-card-head"><h3>Role & Access</h3>${statusBadge(user.role,'info')}</div><div class="admin-access-list"><div class="admin-access-row"><span>Access scope</span><strong>${definition.scope}</strong></div>${definition.permissions.map(permission => `<div class="admin-access-row"><span>${permission}</span>${statusBadge('Allowed','success')}</div>`).join('')}</div>${adminIsLaunchRole(user.role) ? `<div class="admin-card-head" style="margin:20px 0 10px;"><h3>Assigned Projects</h3><button class="btn sm" onclick="navigate('admin-project-assignments')">Manage</button></div><div class="admin-project-tags">${user.projects.length ? user.projects.map(project => `<span class="admin-project-tag">${project}</span>`).join('') : '<span class="admin-sub">No project access assigned</span>'}</div>` : ''}</div></div>
      <div class="card admin-card"><div class="admin-card-head"><h3>Login History</h3><button class="btn sm" onclick="navigate('admin-system-activity')">Full Login Audit</button></div><div class="table-scroll"><table><thead><tr><th>Timestamp</th><th>Result</th><th>Reason</th><th>Source</th></tr></thead><tbody>${loginEvents.length ? loginEvents.map(event => `<tr><td class="mono">${event.time}</td><td>${statusBadge(event.result,event.result === 'Successful' ? 'success' : 'danger')}</td><td>${event.reason}</td><td class="mono">${event.source}</td></tr>`).join('') : `<tr><td colspan="4"><span class="admin-sub">No login events recorded.</span></td></tr>`}</tbody></table></div></div></div>`;
    }

    function pageAdminRoles() {
      return `<div class="admin-shell"><div class="admin-head"><h2>Roles & Access</h2></div><div class="admin-role-grid">${ADMIN_ROLE_OPTIONS.map(role => { const definition=ADMIN_ROLE_DEFINITIONS[role],count=ADMIN_USERS.filter(user => user.role === role).length; return `<div class="admin-role-card"><div class="admin-role-card-head"><div><h3>${role}</h3><p>${definition.scope}</p></div>${statusBadge(`${count} user${count === 1 ? '' : 's'}`,'neutral')}</div><div class="admin-role-perms">${definition.permissions.map(permission => `<span class="admin-role-perm">${permission}</span>`).join('')}</div></div>`; }).join('')}</div></div>`;
    }

    function adminEligibleProjectUsers() { return ADMIN_USERS.filter(user => adminIsLaunchRole(user.role) && user.status === 'Active' && !user.locked); }
    function adminSetAssignmentDraft(key,value) { adminAssignmentDraft[key]=value; renderPage(); }
    function adminAssignProject() {
      const user=adminUserById(adminAssignmentDraft.userId), project=PROJECTS.find(item => item.name === adminAssignmentDraft.project);
      if (!user || !project || !adminIsLaunchRole(user.role) || user.status !== 'Active' || user.locked) return openModal('Assignment unavailable','Select an active, unlocked Launch Engineer or Launch Manager.');
      if (ADMIN_ASSIGNMENTS.some(item => item.user === user.name && item.project === project.name)) return openModal('Already assigned',`${user.fullName} already has access to ${project.name}.`);
      ADMIN_ASSIGNMENTS.push({ user:user.name,project:project.name,role:user.role === 'Launch Manager' ? 'Responsible Manager' : 'Responsible Engineer' });
      if (!user.projects.includes(project.name)) user.projects.push(project.name);
      adminAudit('Project access assigned',`${user.fullName} assigned to ${project.name} as ${user.role}.`); renderPage();
    }
    function adminUnassignProject(userName,projectName) {
      const user=ADMIN_USERS.find(item => item.name === userName), index=ADMIN_ASSIGNMENTS.findIndex(item => item.user === userName && item.project === projectName);
      if (index < 0) return; ADMIN_ASSIGNMENTS.splice(index,1);
      if (user) user.projects=user.projects.filter(project => project !== projectName);
      adminAudit('Project access removed',`${user?.fullName || userName} immediately lost access to ${projectName}; historical actions were retained.`); renderPage();
    }
    function pageAdminProjectAssignments() {
      const eligible=adminEligibleProjectUsers();
      if (!eligible.some(user => user.id === adminAssignmentDraft.userId)) adminAssignmentDraft.userId=eligible[0]?.id || '';
      return `<div class="admin-shell"><div class="admin-head"><h2>Project Assignments</h2></div><div class="admin-assignment-layout"><div class="card admin-card admin-assignment-form"><div class="admin-card-head"><h3>Assign Project Access</h3></div><div class="admin-field"><label>Project</label><select onchange="adminSetAssignmentDraft('project',this.value)">${PROJECTS.map(project => `<option value="${project.name}" ${adminAssignmentDraft.project === project.name ? 'selected' : ''}>${project.name}</option>`).join('')}</select></div><div class="admin-field" style="margin-top:16px;"><label>Responsible User</label><select onchange="adminSetAssignmentDraft('userId',this.value)">${eligible.map(user => `<option value="${user.id}" ${adminAssignmentDraft.userId === user.id ? 'selected' : ''}>${user.fullName} · ${user.role}</option>`).join('')}</select></div><button class="btn primary" style="width:100%;justify-content:center;margin-top:18px;" onclick="adminAssignProject()">${icon('plus','')} Assign Access</button></div><div class="admin-project-access">${PROJECTS.map(project => { const assignments=ADMIN_ASSIGNMENTS.filter(item => item.project === project.name && ADMIN_USERS.some(user => user.name === item.user && adminIsLaunchRole(user.role))); return `<div class="admin-project-access-card"><div class="admin-project-access-head"><strong>${project.name}</strong>${statusBadge(`${assignments.length} assigned`,assignments.length ? 'info' : 'warning')}</div><div class="admin-assignee-list">${assignments.length ? assignments.map(assignment => { const user=ADMIN_USERS.find(item => item.name === assignment.user); return `<div class="admin-assignee"><div><strong>${user?.fullName || assignment.user}</strong><span>${user?.role || assignment.role} · @${user?.username || 'unknown'}</span></div><button class="btn sm" onclick="adminUnassignProject('${assignment.user}','${project.name}')">Unassign</button></div>`; }).join('') : '<div class="admin-sub">No assigned user</div>'}</div></div>`; }).join('')}</div></div></div>`;
    }

    function adminSelectReferenceModule(key) { if (currentRole !== 'admin') return; adminReferenceModule=key; adminReferenceForm={ open:false,mode:'create',editingId:'',draft:{label:'',project:'',status:'Active'} }; renderPage(); }
    function adminOpenReferenceForm(mode,id='') { if (currentRole !== 'admin') return openModal('Administrator access required','Only the System Administrator can manage reference lists.'); const list=ADMIN_REFERENCE_LISTS[adminReferenceModule],entry=list.entries.find(item => item.id === id); adminReferenceForm={ open:true,mode,editingId:entry?.id || '',draft:entry ? {label:entry.label,project:entry.project || '',status:entry.status} : {label:'',project:adminReferenceModule === 'fgpn' ? PROJECTS[0].name : '',status:'Active'} }; renderPage(); }
    function adminSetReferenceDraft(key,value) { adminReferenceForm.draft[key]=value; }
    function adminSaveReferenceEntry() {
      if (currentRole !== 'admin') return openModal('Administrator access required','Only the System Administrator can manage reference lists.');
      const list=ADMIN_REFERENCE_LISTS[adminReferenceModule],draft=adminReferenceForm.draft,label=String(draft.label || '').trim();
      if (!label) return openModal('Name required',`Enter the ${list.fields.toLowerCase()}.`);
      if (adminReferenceModule === 'fgpn' && !draft.project) return openModal('Project required','Select the project for this Finished Goods Part Number.');
      if (list.entries.some(entry => entry.label.toLowerCase() === label.toLowerCase() && entry.id !== adminReferenceForm.editingId)) return openModal('Duplicate entry',`${label} already exists in ${list.label}.`);
      if (adminReferenceForm.mode === 'edit') { const entry=list.entries.find(item => item.id === adminReferenceForm.editingId); Object.assign(entry,{label,project:draft.project || '',status:draft.status}); adminAudit('Reference entry updated',`${list.label}: ${label} updated.`); }
      else { const prefix=({customers:'CUS',contacts:'CON',fgpn:'FG',receivers:'RCV',methods:'MET',materialTypes:'MT'})[adminReferenceModule]; const next=Math.max(0,...list.entries.map(entry => Number(String(entry.id).match(/(\d+)$/)?.[1]) || 0))+1; list.entries.push({id:`${prefix}-${String(next).padStart(3,'0')}`,label,project:draft.project || '',status:draft.status,linkedRecords:0}); adminAudit('Reference entry created',`${label} added to ${list.label}.`); }
      adminReferenceForm={ open:false,mode:'create',editingId:'',draft:{label:'',project:'',status:'Active'} }; renderPage();
    }
    function adminToggleReferenceEntry(id) { if (currentRole !== 'admin') return openModal('Administrator access required','Only the System Administrator can manage reference lists.'); const list=ADMIN_REFERENCE_LISTS[adminReferenceModule],entry=list.entries.find(item => item.id === id); if (!entry) return; entry.status=entry.status === 'Active' ? 'Inactive' : 'Active'; adminAudit(`Reference entry ${entry.status === 'Active' ? 'reactivated' : 'deactivated'}`,`${entry.label} in ${list.label}.`); renderPage(); }
    function adminDeleteReferenceEntry(id) { if (currentRole !== 'admin') return openModal('Administrator access required','Only the System Administrator can manage reference lists.'); const list=ADMIN_REFERENCE_LISTS[adminReferenceModule],index=list.entries.findIndex(item => item.id === id); if (index < 0) return; const entry=list.entries[index]; if (entry.linkedRecords > 0) return openModal('Deletion prevented',`${entry.label} is linked to ${entry.linkedRecords} existing record${entry.linkedRecords === 1 ? '' : 's'}. Deactivate it instead to preserve historical records.`); list.entries.splice(index,1); adminAudit('Reference entry deleted',`${entry.label} removed from ${list.label}; it had no linked records.`); renderPage(); }
    function pageAdminReferenceData() {
      const list=ADMIN_REFERENCE_LISTS[adminReferenceModule] || ADMIN_REFERENCE_LISTS.customers;
      return `<div class="admin-shell"><div class="admin-head"><h2>Reference Lists</h2><div class="admin-head-actions"><button class="btn primary" onclick="adminOpenReferenceForm('create')">${icon('plus','')} Add Entry</button></div></div><div class="admin-ref-layout"><div class="card admin-ref-nav">${Object.entries(ADMIN_REFERENCE_LISTS).map(([key,value]) => `<button class="admin-ref-link ${adminReferenceModule === key ? 'active' : ''}" onclick="adminSelectReferenceModule('${key}')"><span>${value.label}</span><span>${value.entries.length}</span></button>`).join('')}</div><div><div class="card admin-card" style="padding:0;overflow:hidden;">${adminReferenceForm.open ? `<div class="admin-form-head"><h3>${adminReferenceForm.mode === 'create' ? 'Add' : 'Edit'} ${list.label} Entry</h3><button class="btn sm" onclick="adminReferenceForm.open=false;renderPage()">Close</button></div><div class="admin-form-body"><div class="admin-form-grid"><div class="admin-field"><label>${list.fields}</label><input value="${poEsc(adminReferenceForm.draft.label)}" oninput="adminSetReferenceDraft('label',this.value)"></div>${adminReferenceModule === 'fgpn' ? `<div class="admin-field"><label>Project</label><select onchange="adminSetReferenceDraft('project',this.value)">${PROJECTS.map(project => `<option value="${project.name}" ${adminReferenceForm.draft.project === project.name ? 'selected' : ''}>${project.name}</option>`).join('')}</select></div>` : ''}<div class="admin-field"><label>Status</label><select onchange="adminSetReferenceDraft('status',this.value)"><option ${adminReferenceForm.draft.status === 'Active' ? 'selected' : ''}>Active</option><option ${adminReferenceForm.draft.status === 'Inactive' ? 'selected' : ''}>Inactive</option></select></div></div><div class="admin-form-actions"><button class="btn" onclick="adminReferenceForm.open=false;renderPage()">Cancel</button><button class="btn primary" onclick="adminSaveReferenceEntry()">Save Entry</button></div></div>` : `<div class="admin-card-head" style="padding:20px 22px;margin:0;"><div><h3>${list.label}</h3><span>${list.entries.filter(entry => entry.status === 'Active').length} active · ${list.entries.filter(entry => entry.status === 'Inactive').length} inactive</span></div><button class="btn sm primary" onclick="adminOpenReferenceForm('create')">${icon('plus','')} Add</button></div>`}<div class="table-scroll"><table><thead><tr><th>ID</th><th>Name</th>${adminReferenceModule === 'fgpn' ? '<th>Project</th>' : ''}<th>Status</th><th>Linked Records</th><th style="text-align:right;">Actions</th></tr></thead><tbody>${list.entries.map(entry => `<tr><td class="mono">${entry.id}</td><td><strong style="color:#000;font-weight:600;">${entry.label}</strong></td>${adminReferenceModule === 'fgpn' ? `<td>${entry.project}</td>` : ''}<td>${statusBadge(entry.status,entry.status === 'Active' ? 'success' : 'neutral')}</td><td>${entry.linkedRecords}</td><td><div class="admin-row-actions"><button class="btn sm" onclick="adminOpenReferenceForm('edit','${entry.id}')">Edit</button><button class="btn sm" onclick="adminToggleReferenceEntry('${entry.id}')">${entry.status === 'Active' ? 'Deactivate' : 'Reactivate'}</button><button class="btn sm" onclick="adminDeleteReferenceEntry('${entry.id}')">Delete</button></div></td></tr>`).join('')}</tbody></table></div></div></div></div></div>`;
    }

    function pageBusinessRules() {
      return `
  <div class="readonly-banner" style="background:#FFF8E8; color:#8A5B00; border-color:#F2D48A;">
    ${icon('audit','')} Recommended baseline — business owners must approve these decisions before implementation sign-off.
  </div>
  <div class="grid g4" style="margin-bottom:16px;">
    <div class="kpi-card"><div class="kpi-label">Open points reviewed</div><div class="kpi-value">${BUSINESS_RULES.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Access decisions</div><div class="kpi-value">3</div></div>
    <div class="kpi-card"><div class="kpi-label">Workflow decisions</div><div class="kpi-value">6</div></div>
    <div class="kpi-card"><div class="kpi-label">Data decisions</div><div class="kpi-value">4</div></div>
  </div>
  <div class="card">
    <div class="section-title">SRS v2.0 decision register <span class="badge warning">Awaiting business sign-off</span></div>
    <div class="decision-list">${BUSINESS_RULES.map(rule => `<div class="decision-card">
      <div class="decision-head"><div><div class="decision-id">${rule.id}</div><div class="decision-title">${rule.title}</div></div><span class="badge info">Recommended</span></div>
      <div class="decision-body">${rule.decision}</div><div class="decision-owner">Approval owner: ${rule.owner}</div>
    </div>`).join('')}</div>
  </div>`;
    }

    function adminSetLoginFilter(key,value) { adminLoginFilters[key]=value; renderPage(); }
    function adminFilteredLoginEvents() {
      const search=adminLoginFilters.search.toLowerCase();
      return ADMIN_LOGIN_EVENTS.filter(event => (!search || [event.username,event.reason,event.source,event.time].some(value => String(value).toLowerCase().includes(search))) && (!adminLoginFilters.result || event.result === adminLoginFilters.result));
    }
    function pageAdminSystemActivity() {
      const events=adminFilteredLoginEvents();
      const successful=ADMIN_LOGIN_EVENTS.filter(event => event.result === 'Successful').length;
      const failed=ADMIN_LOGIN_EVENTS.filter(event => event.result === 'Failed').length;
      const locked=ADMIN_USERS.filter(user => user.locked).length;
      return `<div class="admin-shell"><div class="admin-head"><h2>Login Audit</h2></div>
      <div class="admin-login-summary"><div class="admin-login-metric"><span>Successful Events</span><strong>${successful}</strong></div><div class="admin-login-metric"><span>Failed Events</span><strong style="color:${failed ? 'var(--danger)' : '#000'};">${failed}</strong></div><div class="admin-login-metric"><span>Locked Accounts</span><strong style="color:${locked ? 'var(--danger)' : '#000'};">${locked}</strong></div></div>
      <div class="card admin-card" style="padding:0;overflow:hidden;"><div class="admin-toolbar"><div class="admin-search">${icon('search','')}<input value="${poEsc(adminLoginFilters.search)}" oninput="adminSetLoginFilter('search',this.value)" placeholder="Search username, reason or source"></div><select class="admin-filter" onchange="adminSetLoginFilter('result',this.value)"><option value="">All results</option><option value="Successful" ${adminLoginFilters.result === 'Successful' ? 'selected' : ''}>Successful</option><option value="Failed" ${adminLoginFilters.result === 'Failed' ? 'selected' : ''}>Failed</option></select><span class="admin-sub">${events.length} event${events.length === 1 ? '' : 's'}</span></div><div class="table-scroll"><table><thead><tr><th>Timestamp</th><th>Username</th><th>Result</th><th>Reason</th><th>Source</th></tr></thead><tbody>${events.length ? events.map(event => `<tr><td class="mono">${event.time}</td><td><strong style="color:#000;font-weight:650;">@${event.username}</strong></td><td>${statusBadge(event.result,event.result === 'Successful' ? 'success' : 'danger')}</td><td>${event.reason}</td><td class="mono">${event.source}</td></tr>`).join('') : '<tr><td colspan="5"><div class="empty-state" style="padding:28px;"><div class="e-title">No matching login events</div></div></td></tr>'}</tbody></table></div></div></div>`;
    }

    /* ================= MODAL ================= */
    let modalConfirmAction = null;
    function openModal(title, body, confirmAction = null, confirmLabel = 'Confirm') {
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalBody').textContent = body;
      modalConfirmAction = typeof confirmAction === 'function' ? confirmAction : null;
      const confirmButton = document.getElementById('modalConfirmBtn');
      confirmButton.textContent = confirmLabel;
      confirmButton.classList.toggle('danger-action', !!modalConfirmAction && confirmLabel === 'Delete');
      document.getElementById('modalOverlay').classList.add('open');
    }
    function confirmModalAction() {
      const action = modalConfirmAction;
      closeModal();
      if (action) action();
    }
    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('open');
      modalConfirmAction = null;
    }

    /* ================= INIT ================= */
    const WORKSPACE_SESSION_KEY = 'launchOpsWorkspaceSession';
    let workspaceSessionSaveTimer = 0;
    function saveWorkspaceSession() {
      window.clearTimeout(workspaceSessionSaveTimer);
      sessionStorage.setItem(WORKSPACE_SESSION_KEY, JSON.stringify({
        currentRole,
        currentPage,
        projectForm,
        scrollY: window.scrollY,
      }));
    }
    function queueWorkspaceSessionSave() {
      window.clearTimeout(workspaceSessionSaveTimer);
      workspaceSessionSaveTimer = window.setTimeout(saveWorkspaceSession, 120);
    }
    function restoreWorkspaceSession() {
      try {
        const saved = JSON.parse(sessionStorage.getItem(WORKSPACE_SESSION_KEY) || 'null');
        if (!saved) return;
        if (ROLE_LABEL[saved.currentRole]) currentRole = saved.currentRole;
        if (saved.currentPage) currentPage = saved.currentPage;
        if (saved.projectForm?.draft) projectForm = saved.projectForm;
        requestAnimationFrame(() => window.scrollTo({ top:Number(saved.scrollY || 0), behavior:'auto' }));
      } catch (error) {
        sessionStorage.removeItem(WORKSPACE_SESSION_KEY);
      }
    }
    function renderAll() {
      renderNav();
      renderBreadcrumb();
      renderPage();
      renderTopbarWidgets();
      const avatar = document.getElementById('topbarAvatar');
      if (avatar) avatar.textContent = ROLE_PERSONA[currentRole].initials;
      queueWorkspaceSessionSave();
    }
    window.addEventListener('beforeunload', saveWorkspaceSession);
    document.addEventListener('input', queueWorkspaceSessionSave);
    document.addEventListener('change', queueWorkspaceSessionSave);
    restoreWorkspaceSession();
    initSidebarState();
    renderAll();
    launchApiInit();
