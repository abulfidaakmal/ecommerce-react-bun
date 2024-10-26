import { useNavigate, useLocation } from "react-router-dom";

const OrderBar = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (newStatus) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("status", newStatus);
    navigate({ search: searchParams.toString() });

    onTabChange(newStatus);
  };

  const status = [
    { name: "Ongoing", status: "ONGOING" },
    { name: "Completed", status: "COMPLETED" },
    { name: "Cancelled", status: "CANCELLED" },
  ];

  return (
    <div className="flex items-center gap-2 mt-4">
      <div role="tablist" className="tabs tabs-boxed">
        {status.map((result, index) => (
          <a
            key={index}
            role="tab"
            className={`tab ${
              activeTab === result.status
                ? "bg-blue-500 text-white"
                : "text-blue-500"
            }`}
            onClick={() => handleTabChange(result.status)}
          >
            {result.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default OrderBar;
