import { useFormik } from "formik";
import ButtonChange from "@components/element/ButtonChange";
import useUpdateUser from "../hooks/useUpdateUser";
import { updateUserSchema } from "../validation/updateSchema";

const UserProfile = ({ user }) => {
  const { mutate, isPending } = useUpdateUser();

  const formik = useFormik({
    initialValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      phone: user?.phone,
    },
    validationSchema: updateUserSchema,
    onSubmit: (values) => {
      const changedValues = {};

      for (const key in values) {
        if (values[key] !== user[key]) {
          changedValues[key] = values[key];
        }
      }

      mutate(changedValues);
    },
  });

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        <span>Firstname</span>
        <span>Lastname</span>
        <span>Email</span>
        <span>Phone</span>
      </div>
      <div className="flex flex-col gap-4">
        <ButtonChange
          field={"first_name"}
          formik={formik}
          isLoading={isPending}
        >
          {user?.first_name}
        </ButtonChange>
        <ButtonChange field={"last_name"} formik={formik} isLoading={isPending}>
          {user?.last_name}
        </ButtonChange>
        <ButtonChange field={"email"} formik={formik} isLoading={isPending}>
          {user?.email}
        </ButtonChange>
        <ButtonChange field={"phone"} formik={formik} isLoading={isPending}>
          {user?.phone}
        </ButtonChange>
      </div>
    </div>
  );
};

export default UserProfile;
