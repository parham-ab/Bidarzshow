const CustomInput = ({ formik, name, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className="border-[1px] border-[#FFD62F] rounded-lg h-[35px] outline-none transparent bg-[#ffd62f17] p-2"
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-red-500 text-xs">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default CustomInput;
