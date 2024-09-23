import { dateFormat } from "../../utils/dateFormat.js";

const Input = ({
  type = "text",
  name,
  max,
  formik,
  placeholder,
  required = true,
  className = "input input-bordered",
  defaultValue,
}) => {
  const handleChange = (event) => {
    if (type === "file") {
      formik.setFieldValue(name, event.currentTarget.files[0]);
    } else {
      formik.handleChange(event);
    }
  };

  const maxDate = dateFormat(new Date());

  return (
    <div className="flex flex-col">
      <input
        type={type}
        name={name}
        className={className}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        max={type === "date" ? maxDate : max}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span className="text-error">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Input;
