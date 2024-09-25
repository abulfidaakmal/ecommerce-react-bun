import { Menu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { routes } from "../../route/sidebar";
import { addSellerRoutes } from "../../utils/addSellerRoutes.js";
import { findSelectedRoute } from "../../utils/findSelectedRoute.js";
import { useSession } from "../../hooks/useSession.js";

const Sidebar = () => {
  const drawerCheckboxRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { status, role } = useSession();

  if (status === "unauthorized") {
    navigate("/login");
  }

  const [currentRoutes, setCurrentRoutes] = useState([]);

  useEffect(() => {
    const updatedRoutes = role === "SELLER" ? addSellerRoutes(routes) : routes;
    setCurrentRoutes(updatedRoutes);
  }, [role]);

  const selectedRoute = findSelectedRoute(currentRoutes, location.pathname);
  const [selectedItem, setSelectedItem] = useState(selectedRoute);

  useEffect(() => {
    setSelectedItem(selectedRoute);
  }, [selectedRoute]);

  const handleItemClick = (route) => {
    setSelectedItem(route);
    navigate(route.path);
  };

  const handleSelect = (route) => {
    const item = selectedItem?.path;
    return route.path === item;
  };

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerCheckboxRef}
      />
      <div className="flex flex-col drawer-content bg-base-300">
        <nav className="flex items-center justify-between p-4 bg-base-100">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle swap swap-rotate lg:hidden"
          >
            <Menu />
          </label>
          <h1 className="text-xl font-bold">
            {selectedItem?.name || "Dashboard"}
          </h1>
        </nav>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="flex flex-col min-h-full gap-1 p-4 menu bg-base-100 text-base-content w-80">
          {currentRoutes.map((route) => (
            <li key={route.path}>
              {!route.subRoutes ? (
                <a
                  className={`cursor-pointer ${
                    handleSelect(route) ? "bg-base-content/10" : ""
                  }`}
                  onClick={() => handleItemClick(route)}
                >
                  {route.name}
                </a>
              ) : (
                <details
                  key={route.path}
                  open={route.subRoutes.some((subRoute) =>
                    handleSelect(subRoute)
                  )}
                >
                  <summary className="mb-1">{route.name}</summary>
                  <ul className="grid gap-1">
                    {route.subRoutes.map((subRoute) => (
                      <li key={subRoute.path}>
                        <a
                          className={`cursor-pointer ${
                            handleSelect(subRoute) ? "bg-base-content/10" : ""
                          }`}
                          onClick={() => handleItemClick(subRoute)}
                        >
                          {subRoute.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
