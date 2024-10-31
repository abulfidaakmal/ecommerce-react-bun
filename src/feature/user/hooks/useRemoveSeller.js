import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios";

export const useRemoveSeller = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await axiosInstance.delete("sellers");
    },
    onSuccess: () => {
      toast.success("Successful deletion");
      queryClient.invalidateQueries(["sellers", "users"]);
    },
  });
};
