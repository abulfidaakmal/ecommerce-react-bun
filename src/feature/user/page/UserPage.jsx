import ProfileLayout from "../../../components/layout/ProfileLayout";
import UserProfile from "../component/UserProfile";
import UserAvatar from "../component/UserAvatar";
import UserSkeleton from "../component/UserSkeleton";
import UserIsSeller from "../component/UserIsSeller";

const UserPage = ({ user, status, role }) => {
  return (
    <ProfileLayout>
      {status === "loading" ? (
        <UserSkeleton />
      ) : (
        <>
          <UserAvatar avatar={user?.avatar} />
          <div className="flex flex-col gap-6">
            <div className="grid">
              <span className="mb-6 font-semibold">
                Change Your Personal Data
              </span>
              <UserProfile user={user} />
            </div>
            {role !== "USER" && (
              <div className="grid">
                <span className="mb-6 font-semibold">Change Shop</span>
                <UserIsSeller />
              </div>
            )}
          </div>
        </>
      )}
    </ProfileLayout>
  );
};

export default UserPage;
