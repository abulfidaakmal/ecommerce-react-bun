const OrderDetailSkeleton = () => {
  const orderInfo = [
    {
      title: "Order Id",
    },
    {
      title: "Transaction Date",
      type: "date",
    },
    {
      title: "Weight (Grams)",
    },
    {
      title: "Total Payment",
    },
    {
      title: "Order Total",
    },
  ];

  const address = [
    "Recipient",
    "Phone Number",
    "Street",
    "City",
    "Postal Code",
  ];

  return (
    <>
      <div className="grid justify-between grid-cols-2 p-5 rounded-md md:flex bg-base-200">
        {orderInfo.map((result) => (
          <div className="grid mb-3 md:mb-0" key={result.name}>
            <span className="inline-block mb-1">{result.title}:</span>
            {result.type === "date" ? (
              <div className="h-5 w-28 skeleton" />
            ) : (
              <div className="w-20 h-5 skeleton" />
            )}
          </div>
        ))}
      </div>
      <div className="grid p-5 rounded-md bg-base-200">
        <span className="mb-1">Sent In:</span>
        {address.map((result) => (
          <div key={result} className="flex">
            <span className="mr-2">{result}:</span>
            <div className="w-32 h-5 skeleton" />
          </div>
        ))}
      </div>
      <div className="p-5 rounded-md bg-base-200">
        <div className="flex gap-2 mb-5">
          <span>Last Updated:</span>
          <div className="h-5 w-28 skeleton" />
        </div>
        <div className="flex gap-2">
          <div className="w-20 h-20 skeleton" />
          <div>
            <div className="grid gap-1">
              <div className="w-20 h-5 skeleton" />
              <div className="w-32 h-4 skeleton" />
              <span className="flex items-center gap-2">
                Quantity: <div className="w-10 h-5 skeleton" />
              </span>
              <span className="flex items-center gap-1">
                <div className="h-5 w-28 skeleton" />
                /product
              </span>
            </div>
          </div>
        </div>
        <div className="grid justify-between gap-3 p-5 mt-6 border rounded-md md:flex md:gap-0 bg-base-200 border-primary">
          <div className="grid gap-1">
            <span>Sold By:</span>
            <div className="w-24 h-5 skeleton" />
          </div>
          <div className="grid gap-1">
            <span>Shipping Method:</span>
            <div className="h-5 w-36 skeleton" />
          </div>
          <div className="grid gap-1">
            <span>Shipped from:</span>
            <div className="h-5 w-52 skeleton" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailSkeleton;
