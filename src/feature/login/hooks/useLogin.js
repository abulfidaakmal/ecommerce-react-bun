import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios";

export const useLogin = () => {
  const redirect = useNavigate();

  return useMutation({
    mutationFn: async (body) => {
      await axiosInstance.post("/login", body);
    },
    onSuccess: () => {
      toast.success("Success! welcome");
      redirect("/");
    },
  });
};
