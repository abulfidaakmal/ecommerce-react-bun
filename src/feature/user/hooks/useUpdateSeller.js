import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios";

export const useUpdateSeller = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body) => {
      const response = await axiosInstance.patch("sellers", body);
      return response.data.data;
    },
    onSuccess: (_, keys) => {
      toast.success("Successful update");

      for (const key in keys) {
        document.getElementById(`modal_${key}`).close();
      }

      queryClient.invalidateQueries(["sellers"]);
    },
  });
};
