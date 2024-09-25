import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios";
import { toast } from "sonner";

const useUpdateAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ avatar }) => {
      const formData = new FormData();
      formData.append("avatar", avatar);

      await axiosInstance.patch("users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      toast.success("Successful update");
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export default useUpdateAvatar;
