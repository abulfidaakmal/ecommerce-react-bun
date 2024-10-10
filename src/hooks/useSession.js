import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useSession = () => {
  const redirect = useNavigate();

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

  const { mutate: signOut } = useMutation({
    mutationFn: async () => {
      await axiosInstance.delete("/logout");
    },
    onSuccess: () => {
      toast.success("Signed out! See you back soon");
      redirect("/login");
    },
  });

  return {
    data,
    role: data?.role,
    status: getStatus(),
    signOut,
  };
};
