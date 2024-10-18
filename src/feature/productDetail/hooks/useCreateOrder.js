import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body) => {
      return axiosInstance.post("orders", body);
    },
    onSuccess: () => {
      toast.success("Order created");
      queryClient.invalidateQueries(["orders"]);
    },
  });
};
