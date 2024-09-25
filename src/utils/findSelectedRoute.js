export function findSelectedRoute(routes, currentPath) {
  for (const route of routes) {
    if (route.subRoutes) {
      const subRoute = route.subRoutes.find((subRoute) =>
        new RegExp(`^${subRoute.path}(/.*)?$`).test(currentPath)
      );
      if (subRoute) return subRoute;
    } else if (new RegExp(`^${route.path}(/.*)?$`).test(currentPath)) {
      return route;
    }
  }
  return routes[0];
}
