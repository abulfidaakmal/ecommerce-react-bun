import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";
import { modal } from "../../../utils/handleModal.js";

export const useRemoveProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId) => {
      await axiosInstance.delete(`/products/${productId}`);
    },
    onSuccess: () => {
      toast.success("Successful deletion");

      modal("Remove_Modal_Product").close();
      queryClient.invalidateQueries(["products"]);
    },
  });
};
