import SearchBar from "../../../components/layout/SearchBar";

const OrderSellerBar = ({ status, setStatus }) => {
  const statusList = [
    "PENDING",
    "CANCELLED",
    "CANCELLEDBYSELLER",
    "CONFIRMED",
    "PROCESSING",
    "SHIPPED",
    "DELIVERED",
    "COMPLETED",
  ];

  return (
    <div className="flex justify-between w-full gap-4 mb-4">
      <SearchBar placeholder={"Search"} />
      <select
        className="select select-bordered"
        onChange={(e) => setStatus(e.target.value)}
        defaultValue={status}
      >
        {statusList.map((result, index) => (
          <option key={index} value={result}>
            {result}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderSellerBar;
