const CustomButton = ({ children, className, type = "button" }) => {
  return (
    <>
      <button
        className={`${className} font-bold p-2 bg-[#F50148] text-center cursor-pointer`}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
