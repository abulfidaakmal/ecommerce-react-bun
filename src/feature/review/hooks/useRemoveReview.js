import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";
import { modal } from "../../../utils/handleModal.js";

export const useRemoveReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (reviewId) => {
      await axiosInstance.delete(`reviews/${reviewId}`);
    },
    onSuccess: () => {
      toast.success("Successful deletion");
      modal("Remove_Modal_Review").close();
      queryClient.invalidateQueries(["reviews"]);
    },
  });
};
