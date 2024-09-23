import { Link } from "react-router-dom";
import ButtonLoading from "../element/ButtonLoading";

const AuthLayout = ({ formik, children, isPending, title }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-2 p-4 mx-auto border rounded-md w-max h-max border-primary"
      >
        <span className="block mb-3 text-xl font-bold">{title}</span>
        {children}
        <ButtonLoading isPending={isPending} isError={!formik.isValid}>
          {title}
        </ButtonLoading>
        <div className="mt-2 text-sm text-center">
          {title === "Register"
            ? "Already have an account?"
            : "You don't have an account?"}
          <Link
            to={title === "Register" ? "/login" : "/register"}
            className="ml-1 underline"
          >
            {title === "Register" ? "Login" : "Register"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthLayout;
