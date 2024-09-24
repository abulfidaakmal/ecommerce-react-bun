import { useFormik } from "formik";
import { loginSchema } from "../validation/loginSchema";
import LoginForm from "../component/LoginForm";
import AuthLayout from "@components/layout/AuthLayout";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const { mutate, isPending } = useLogin();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <AuthLayout formik={formik} isPending={isPending} title={"Login"}>
      <LoginForm formik={formik} />
    </AuthLayout>
  );
};

export default LoginPage;
