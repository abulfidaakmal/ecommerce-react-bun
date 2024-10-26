import Modal from "@components/layout/Modal";
import Rating from "@components/element/Rating";
import TextArea from "@components/element/TextArea.jsx";
import Input from "@components/element/Input.jsx";
import { useCreateReview } from "../hooks/useCreateReview";
import { useFormik } from "formik";
import { createSchema } from "../../review/validation/reviewSchema";

const ReviewForm = ({ selectId }) => {
  const { mutate, isPending } = useCreateReview();
  const formik = useFormik({
    initialValues: {
      rating: 5,
      summary: "",
      image_url: "",
    },
    validationSchema: createSchema,
    onSubmit: (values) => {
      mutate({ ...values, ...selectId });
    },
  });

  return (
    <Modal title={"Review"} formik={formik} isPending={isPending}>
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

export default ReviewForm;
