import Input from "@components/element/Input";
import Select from "@components/element/Select";

export const RegisterForm = ({ formik }) => {
  return (
    <div className="flex flex-col w-64 gap-2 md:w-96">
      <Input name="username" placeholder="Username" formik={formik} max={100} />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <Input
          name="first_name"
          placeholder="Firstname"
          formik={formik}
          max={100}
        />
        <Input
          name="last_name"
          placeholder="Lastname"
          formik={formik}
          required={false}
          max={100}
        />
      </div>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        formik={formik}
        max={100}
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        formik={formik}
        max={20}
      />
      <Select
        data={[{ name: "MALE" }, { name: "FEMALE" }]}
        name={"gender"}
        title={"Select gender"}
        formik={formik}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        formik={formik}
        max={20}
      />
      <Input
        type="date"
        name="birth_of_date"
        placeholder="Birth Date"
        formik={formik}
      />
      <Input
        type="file"
        name="avatar"
        className="file-input file-input-bordered"
        required={false}
        formik={formik}
      />
    </div>
  );
};

export default RegisterForm;
