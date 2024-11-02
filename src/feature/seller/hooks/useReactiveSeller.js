import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios";

export const useReactiveSeller = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await axiosInstance.patch("sellers/reactivate");
    },
    onSuccess: () => {
      toast.success("Successful reactivate");
      queryClient.invalidateQueries(["sellers", "users"]);
    },
  });
};
