import { currencyFormat } from "../../../utils/currencyFormat";
import { dateFormat } from "../../../utils/dateFormat";

const OrderInfo = ({ order, product }) => {
  const orderInfo = [
    {
      title: "Order Id",
      value: order.id,
    },
    {
      title: "Transaction Date",
      value: order.created_at,
      type: "date",
    },
    {
      title: "Weight (Grams)",
      value: product.weight,
    },
    {
      title: "Total Payment",
      value: order.total,
      type: "price",
    },
    {
      title: "Order Total",
      value: order.quantity,
    },
  ];

  return (
    <div className="grid justify-between grid-cols-2 p-5 rounded-md md:flex bg-base-200">
      {orderInfo.map((result) => (
        <div className="grid mb-3 md:mb-0" key={result.name}>
          <span>{result.title}:</span>
          {result.type === "price" ? (
            <span className="font-bold">{currencyFormat(result.value)}</span>
          ) : result.type === "date" ? (
            <span className="font-bold">{dateFormat(result.value)}</span>
          ) : (
            <span className="font-bold">{result.value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderInfo;
