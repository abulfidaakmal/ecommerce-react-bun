const UserSkeleton = () => {
  return (
    <>
      <div className="grid content-center w-40 mx-auto md:w-60 lg:w-64 md:content-normal">
        <div className="w-40 h-40 mx-auto rounded-full md:w-60 md:h-60 lg:w-64 lg:h-64 skeleton md:mx-0 md:rounded" />
        <input
          type="file"
          name="avatar"
          id="avatar"
          className="hidden w-full max-w-xs mt-2 file-input file-input-bordered md:inline"
        />
        <label
          htmlFor="avatar"
          className="mt-2 text-center text-blue-600 md:hidden"
        >
          Change Avatar
        </label>
      </div>
      <div className="flex flex-col w-full gap-6">
        <span className="font-semibold">Change Your Personal Data</span>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <span>Firstname</span>
            <span>Lastname</span>
            <span>Email</span>
            <span>Phone</span>
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((value) => (
              <span className="flex items-center" key={value}>
                <span className="w-40 h-5 skeleton" />
                <button role="button" className="ml-2 text-blue-600">
                  Change
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSkeleton;
