import { useFormik } from "formik";
import { registerSchema } from "../validation/registerSchema";
import RegisterForm from "../component/RegisterForm";
import AuthLayout from "../../../components/layout/AuthLayout";
import { useRegister } from "../hooks/useRegister";

const RegisterPage = () => {
  const { mutate, isPending } = useRegister();

  const formik = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      birth_of_date: "",
      gender: "",
      avatar: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <AuthLayout formik={formik} isPending={isPending} title={"Register"}>
      <RegisterForm formik={formik} />
    </AuthLayout>
  );
};

export default RegisterPage;
