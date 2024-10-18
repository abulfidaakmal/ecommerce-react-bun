import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";

export const useCreateCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body) => {
      return axiosInstance.post(`carts`, body);
    },
    onSuccess: () => {
      toast.success("Cart created");
      queryClient.invalidateQueries(["carts"]);
    },
  });
};
