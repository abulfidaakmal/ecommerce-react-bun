export function addSellerRoutes(routes) {
  return routes.map((route) =>
    route.path === "/user/seller"
      ? {
          ...route,
          name: "Seller",
          subRoutes: [
            {
              name: "Product",
              path: "/seller/products",
            },
            {
              name: "Order",
              path: "/seller/orders",
            },
          ],
        }
      : route
  );
}
