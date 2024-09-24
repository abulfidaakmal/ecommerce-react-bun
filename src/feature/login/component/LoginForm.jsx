import Input from "@components/element/Input";

const LoginForm = ({ formik }) => {
  return (
    <div className="flex flex-col w-64 gap-2 md:w-96">
      <Input type="email" name="email" placeholder="Email" formik={formik} />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        formik={formik}
      />
    </div>
  );
};

export default LoginForm;
