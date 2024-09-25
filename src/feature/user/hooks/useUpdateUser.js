import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios";

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body) => {
      const response = await axiosInstance.patch("users", body);
      return response.data.data;
    },
    onSuccess: (_, keys) => {
      toast.success("Successful update");

      for (const key in keys) {
        document.getElementById(`modal_${key}`).close();
      }

      queryClient.invalidateQueries(["users"]);
    },
  });
};

export default useUpdateUser;
