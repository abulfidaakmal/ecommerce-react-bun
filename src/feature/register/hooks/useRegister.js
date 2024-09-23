import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios";

export const useRegister = () => {
  const redirect = useNavigate();

  return useMutation({
    mutationFn: async (body) => {
      const formData = new FormData();
      for (const key in body) {
        formData.append(key, body[key]);
      }

      await axiosInstance.post("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      toast.success("Account created");
      redirect("/login");
    },
  });
};
