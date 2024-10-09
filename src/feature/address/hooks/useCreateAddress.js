import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";
import { modal } from "../../../utils/handleModal.js";

export const useCreateAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body) => {
      await axiosInstance.post("addresses", body);
    },
    onSuccess: () => {
      toast.success("Address created");
      modal("Modal_Add_Address").close();
      queryClient.invalidateQueries(["addresses"]);
    },
  });
};
