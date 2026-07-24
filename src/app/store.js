const ROLE_KEY = "launchops-session-role";

export function createStore() {
  const state = {
    role: sessionStorage.getItem(ROLE_KEY),
    operations: { editable_projects: [], projects: [], purchase_orders: [], materials: [], bom_components: [], receivers: [], launches: [] },
    admin: { users: [], projects: [], assignments: [], references: {}, events: [] },
  };

  return {
    get: () => state,
    set(patch) {
      Object.assign(state, patch);
    },
    setRole(role) {
      state.role = role;
      sessionStorage.setItem(ROLE_KEY, role);
    },
    clearRole() {
      state.role = null;
      sessionStorage.removeItem(ROLE_KEY);
    },
  };
}
