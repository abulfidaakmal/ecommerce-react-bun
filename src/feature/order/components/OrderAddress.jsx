import ReadMore from "@components/element/ReadMore.jsx";

const OrderAddress = ({ address }) => {
  const data = [
    {
      title: "Nama Penerima",
      value: address.name,
    },
    {
      title: "Phone Number",
      value: address.phone,
    },
    {
      title: "Street",
      value: address.street,
    },
    {
      title: "City",
      value: address.city,
    },
    {
      title: "Postal Code",
      value: address.postal_code,
    },
  ];

  return (
    <div className="grid p-5 rounded-md bg-base-200">
      <span className="mb-1">Sent In:</span>
      {data.map((result) => (
        <div key={result.name}>
          <span className="mr-2">{result.title}:</span>
          <span className="font-bold capitalize">{result.value}</span>
        </div>
      ))}
      {address.detail && <ReadMore>Detail: {address.detail}</ReadMore>}
    </div>
  );
};

export default OrderAddress;
