import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";
import { toast } from "sonner";

export const useCancelOrder = (orderId, productId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await axiosInstance.patch(`orders/${orderId}/products/${productId}`);
    },
    onSuccess: () => {
      toast.success("Successful cancel");
      queryClient.invalidateQueries("orders");
    },
  });
};
