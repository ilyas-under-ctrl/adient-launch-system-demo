function normalizeHash() {
  const raw = location.hash.slice(1) || "/overview";
  const [path, query = ""] = raw.split("?");
  return { path: path.startsWith("/") ? path : `/${path}`, query: new URLSearchParams(query) };
}

export function createRouter(routes, onRoute) {
  let activeCleanup = null;

  async function resolve() {
    activeCleanup?.();
    activeCleanup = null;
    const location = normalizeHash();
    const match = routes.find((route) => route.match(location.path));
    const selected = match || routes[routes.length - 1];
    activeCleanup = (await onRoute(selected, location)) || null;
  }

  return {
    start() {
      addEventListener("hashchange", resolve);
      resolve();
    },
    stop() {
      removeEventListener("hashchange", resolve);
      activeCleanup?.();
    },
    go(path) {
      location.hash = path;
    },
    refresh() {
      return resolve();
    },
  };
}

export const exact = (path) => (current) => current === path;
export const startsWith = (path) => (current) => current.startsWith(path);
