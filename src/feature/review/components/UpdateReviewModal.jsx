import { useUpdateReview } from "../hooks/useUpdateReview";
import Rating from "@components/element/Rating";
import TextArea from "@components/element/TextArea";
import Input from "@components/element/Input";
import { useFormik } from "formik";
import { updateSchema } from "../validation/reviewSchema";
import Modal from "@components/layout/Modal";
import { useEffect } from "react";

const UpdateReviewModal = ({ review }) => {
  const { mutate, isPending } = useUpdateReview();

  const formik = useFormik({
    onSubmit: (values) => {
      mutate({
        body: values,
        reviewId: review?.id,
      });
    },
    validationSchema: updateSchema,
  });

  useEffect(() => {
    formik.setValues({
      rating: review?.rating,
      summary: review?.summary ? review?.summary : undefined,
      image: "",
    });
  }, [review]);

  return (
    <Modal
      title={"Review"}
      formik={formik}
      isPending={isPending}
      operation={"Edit"}
    >
      <div className="grid gap-3 mt-2">
        <Rating
          rating={formik.values?.rating}
          onChange={(value) => formik.setFieldValue("rating", value)}
        />
        <TextArea
          placeholder={"Summary"}
          name={"summary"}
          formik={formik}
          required={false}
          defaultValue={formik.values?.summary}
        />
        <Input
          type="file"
          name="image"
          className="file-input file-input-bordered"
          formik={formik}
          required={false}
        />
      </div>
    </Modal>
  );
};

export default UpdateReviewModal;
