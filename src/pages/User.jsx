import UserPage from "../feature/user/page/UserPage";
import { useSession } from "../hooks/useSession";

const User = () => {
  const { data, status, role } = useSession();

  return <UserPage user={data} status={status} role={role} />;
};

export default User;
