import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cartId, quantity }) => {
      await axiosInstance.patch(`/carts/${cartId}`, { quantity });
    },
    onSuccess: () => {
      toast.success("Successful update");
      queryClient.invalidateQueries(["carts"]);
    },
  });
};
