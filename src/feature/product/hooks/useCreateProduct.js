import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";
import { modal } from "../../../utils/handleModal.js";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body) => {
      const formData = new FormData();

      for (const key in body) {
        formData.append(key, body[key]);
      }

      await axiosInstance.post("products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      toast.success("Product created");

      modal("Modal_Add_Product").close();
      queryClient.invalidateQueries(["products"]);
    },
  });
};
