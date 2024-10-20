import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";
import { modal } from "../../../utils/handleModal.js";

export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ body, reviewId }) => {
      const formData = new FormData();

      for (const key in body) {
        formData.append(key, body[key]);
      }

      return axiosInstance.patch(`reviews/${reviewId}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      toast.success("Successful update");
      modal("Modal_Edit_Review").close();
      queryClient.invalidateQueries(["reviews"]);
    },
  });
};
