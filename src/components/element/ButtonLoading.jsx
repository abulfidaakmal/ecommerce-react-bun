const ButtonLoading = ({
  isPending,
  isError,
  children,
  className = "w-full",
}) => {
  return (
    <button
      type="submit"
      disabled={isPending || isError}
      className={`${className} mt-2 btn`}
    >
      {isPending ? (
        <span className="loading loading-spinner loading-md" />
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonLoading;
