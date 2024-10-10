const ProductSkeleton = () => {
  return (
    <div className="grid rounded-lg shadow-md w-44">
      <div className="w-full h-40 rounded-t-xl skeleton " />
      <div className="grid gap-1 m-2 mt-3">
        {[1, 2, 3].map((result) => (
          <div className="w-full h-4 skeleton" key={result} />
        ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;
