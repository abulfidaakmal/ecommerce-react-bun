import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";

export const useCreateSeller = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body) => {
      await axiosInstance.post("/sellers", body);
    },
    onSuccess: () => {
      toast.success("Seller created");
      queryClient.invalidateQueries(["sellers"]);
    },
  });
};
