const Input = (props) => {
  const { label, required } = props;

  return (
    <div className="flex flex-col">
      <div className="text-white font-semibold pl-1 pb-1">
        {label}
        {required ? <span className="text-[#b11616]"> *</span> : ""}
      </div>
      <input
        {...props}
        style={{}}
        className="w-full bg-richblack-600 font-semibold  px-2 py-4 border-b-2 border-richblack-400 rounded-lg placeholder:text-richblack-200 text-richblack-5"
      />
    </div>
  );
};

export default Input;
