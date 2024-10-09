import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios";
import { toast } from "sonner";

export const useSelectAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (addressId) => {
      await axiosInstance.patch(`addresses/${addressId}/select`);
    },
    onSuccess: () => {
      toast.success("Address Selected");
      queryClient.invalidateQueries(["addresses_selected"]);
    },
  });
};
