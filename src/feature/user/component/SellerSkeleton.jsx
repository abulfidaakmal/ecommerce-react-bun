const SellerSkeleton = () => {
  return (
    <>
      <div className="flex gap-8">
        <div className="grid gap-4">
          <span>Name</span>
          <span>Description</span>
        </div>
        <div className="grid gap-4">
          {[1, 2].map((value) => (
            <span className="flex items-center" key={value}>
              <span className="w-40 h-5 skeleton" />
              <button role="button" className="ml-2 text-blue-600">
                Change
              </button>
            </span>
          ))}
        </div>
      </div>
      <button className={`mt-4 btn w-80`}>Remove Shop</button>
    </>
  );
};

export default SellerSkeleton;
