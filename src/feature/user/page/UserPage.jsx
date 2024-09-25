import ProfileLayout from "../../../components/layout/ProfileLayout";
import UserProfile from "../component/UserProfile";
import UserAvatar from "../component/UserAvatar";
import UserSkeleton from "../component/UserSkeleton";

const UserPage = ({ user, status }) => {
  return (
    <ProfileLayout>
      {status === "loading" ? (
        <UserSkeleton />
      ) : (
        <>
          <UserAvatar avatar={user?.avatar} />
          <div className="flex flex-col gap-6">
            <span className="font-semibold">Change Your Personal Data</span>
            <UserProfile user={user} />
          </div>
        </>
      )}
    </ProfileLayout>
  );
};

export default UserPage;
