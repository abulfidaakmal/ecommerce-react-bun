import { useFormik } from "formik";
import { updateAvatarSchema } from "../validation/updateSchema";
import useUpdateAvatar from "../hooks/useUpdateAvatar";

const UserAvatar = ({ avatar }) => {
  const { mutate, isPending } = useUpdateAvatar();

  const formik = useFormik({
    initialValues: { avatar: "" },
    validationSchema: updateAvatarSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const handleAvatar = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("avatar", file);

    if (formik.isValid) {
      formik.submitForm();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="grid content-center w-40 md:w-60 lg:w-64 md:content-normal">
        {isPending ? (
          <div className="w-40 h-40 mx-auto rounded-full md:w-60 md:h-60 lg:w-64 lg:h-64 skeleton md:mx-0 md:rounded" />
        ) : (
          <div className="w-full avatar">
            <div className="w-full rounded-full md:rounded">
              <img src={avatar} alt="User Avatar" />
            </div>
          </div>
        )}
        <input
          type="file"
          name="avatar"
          id="avatar"
          className="hidden w-full max-w-xs mt-2 file-input file-input-bordered md:inline"
          onBlur={formik.handleBlur}
          onChange={handleAvatar}
        />
        {formik.errors.avatar && (
          <span className="text-error">{formik.errors.avatar}</span>
        )}
        <label
          htmlFor="avatar"
          className="mt-2 text-center text-blue-600 md:hidden"
        >
          Change Avatar
        </label>
      </div>
    </div>
  );
};

export default UserAvatar;
