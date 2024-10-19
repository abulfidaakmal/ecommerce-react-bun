import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";

export const useRemoveCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cartId) => {
      await axiosInstance.delete(`/carts/${cartId}`);
    },
    onSuccess: () => {
      toast.success("Successful deletion");
      queryClient.invalidateQueries(["carts"]);
    },
  });
};
