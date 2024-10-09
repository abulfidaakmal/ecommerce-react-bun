const TextArea = ({
  name,
  formik,
  placeholder,
  required = true,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col">
      <textarea
        className="textarea textarea-bordered"
        name={name}
        onChange={(e) => formik.handleChange(e)}
        onBlur={formik.handleBlur}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue && defaultValue}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span className="text-error">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default TextArea;
