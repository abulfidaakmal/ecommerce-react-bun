import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";
import { modal } from "../../../utils/handleModal.js";

export const useUpdateSellerOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ status, orderId, productId }) => {
      return axiosInstance.patch(
        `seller/orders/${orderId}/products/${productId}`,
        status
      );
    },
    onSuccess: () => {
      toast.success("Successful update");
      modal(`Modal_Edit_Status`).close();
      queryClient.invalidateQueries(["order_seller"]);
    },
  });
};
