import UserPage from "../feature/user/page/UserPage";
import { useSession } from "../hooks/useSession";

const User = () => {
  const { data, status } = useSession();

  return <UserPage user={data} status={status} />;
};

export default User;
