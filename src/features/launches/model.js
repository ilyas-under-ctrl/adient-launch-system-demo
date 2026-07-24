export function remaining(line) {
  return Math.max(0, Number(line.ordered) - Number(line.launched));
}

export function reservedByMaterial(launches) {
  return launches.filter((launch) => launch.status !== "Delivered").flatMap((launch) => launch.materials)
    .reduce((result, line) => {
      result[line.code] = (result[line.code] || 0) + Number(line.qty || line.required || 0);
      return result;
    }, {});
}

export function simulatePurchaseOrders(purchaseOrders, materials, bomComponents, launches, subtractReserved) {
  const reservations = subtractReserved ? reservedByMaterial(launches) : {};
  const stock = Object.fromEntries(materials.map((item) => [item.code, Math.max(0, item.warehouse + item.wip - (reservations[item.code] || 0))]));
  return purchaseOrders.map((po) => {
    const requirements = {};
    po.fgpn_lines.forEach((line) => {
      bomComponents.filter((component) => component.fgpn === line.fgpn).forEach((component) => {
        requirements[component.material_code] = (requirements[component.material_code] || 0) + component.usage_qty * remaining(line);
      });
    });
    const shortages = Object.entries(requirements).filter(([code, required]) => required > (stock[code] || 0)).map(([code, required]) => ({
      code,
      required,
      available: stock[code] || 0,
    }));
    const result = shortages.length === 0 ? "Feasible" : shortages.every((item) => item.available === 0) ? "Impossible" : "Partial";
    Object.entries(requirements).forEach(([code, required]) => {
      stock[code] = Math.max(0, (stock[code] || 0) - required);
    });
    return {
      po,
      quantity: po.fgpn_lines.reduce((sum, line) => sum + remaining(line), 0),
      result,
      shortages,
    };
  });
}
