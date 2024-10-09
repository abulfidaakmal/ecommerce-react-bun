import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";
import { modal } from "../../../utils/handleModal.js";

export const useRemoveAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (addressId) => {
      await axiosInstance.delete(`addresses/${addressId}`);
    },
    onSuccess: () => {
      toast.success("Successful deletion");

      modal("Remove_Modal_Address").close();
      queryClient.invalidateQueries(["addresses"]);
    },
  });
};
