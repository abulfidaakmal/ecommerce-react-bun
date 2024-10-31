const SellerAction = ({ useAction, children, className }) => {
  const { mutate, isPending, isError } = useAction();

  return (
    <button
      onClick={mutate}
      disabled={isPending || isError}
      className={`mt-4 btn w-80 ${className}`}
    >
      {isPending ? (
        <span className="loading loading-spinner loading-md" />
      ) : (
        children
      )}
    </button>
  );
};

export default SellerAction;
