import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export const useSession = () => {
  const { data, isError, error, isPending } = useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get("users");
      return response.data.data;
    },
    queryKey: ["users"],
  });

  const getStatus = () => {
    if (isPending) {
      return "loading";
    } else if (isError && error.response.status === 401) {
      return "unauthorized";
    } else {
      return "success";
    }
  };

  return {
    data,
    role: data?.role,
    status: getStatus(),
  };
};
