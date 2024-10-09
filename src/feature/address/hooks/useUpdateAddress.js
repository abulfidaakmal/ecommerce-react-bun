import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";
import { modal } from "../../../utils/handleModal.js";

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ body, addressId }) => {
      await axiosInstance.put(`addresses/${addressId}`, body);
    },
    onSuccess: () => {
      toast.success("Successful update");

      modal("Modal_Edit_Address").close();
      queryClient.invalidateQueries(["addresses"]);
    },
  });
};
