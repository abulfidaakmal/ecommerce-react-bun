const ProfileLayout = ({ children }) => {
  return (
    <div className="p-6">
      <div className="grid gap-4 p-4 rounded-lg bg-base-100 md:flex">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
