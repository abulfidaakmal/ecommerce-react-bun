const Select = ({ data, formik, title, name, required = true }) => {
  return (
    <div className="flex flex-col">
      <select
        className="w-full select select-bordered"
        onChange={(event) => formik.setFieldValue(name, event.target.value)}
        onBlur={formik.handleBlur}
        name={name}
        required={required}
        value={formik.values?.[name] || ""}
      >
        <option disabled value="">
          {title}
        </option>
        {data?.map((result, index) => (
          <option key={index} value={result.id ? result.id : result.name}>
            {result.name}
          </option>
        ))}
      </select>
      {formik.touched[name] && formik.errors[name] && (
        <span className="text-error">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Select;
