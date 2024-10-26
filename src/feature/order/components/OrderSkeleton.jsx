const OrderSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4].map((result) => (
        <div
          className="w-full p-4 my-4 border rounded-lg border-primary"
          key={result}
        >
          <div className="flex justify-between">
            <div className="w-32 h-6 skeleton" />
            <div className="h-6 w-28 skeleton" />
          </div>
          <div className="mt-3 border divide-y rounded-md border-primary divide divide-primary">
            <div className="py-6 mx-6">
              <div className="flex justify-between">
                <div className="w-56 h-6 skeleton" />
                <div className="w-20 h-12 rounded-full skeleton" />
              </div>
              <div className="flex mt-4">
                <div className="w-24 h-24 skeleton" />
                <div className="ml-4 ">
                  <div className="h-5 w-28 skeleton" />
                  <div className="w-56 h-5 my-2 skeleton" />
                  <div className="h-5 my-2 w-28 skeleton" />
                  <div className="w-40 h-5 skeleton" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-56 h-6 mt-4 skeleton" />
            <div className="w-24 h-6 mt-4 skeleton" />
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderSkeleton;
