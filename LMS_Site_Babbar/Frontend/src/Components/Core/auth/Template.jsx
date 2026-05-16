import frame from "../../../assets/Images/frame.png";

const Template = ({ image, Form }) => {
  return (
    <div className="flex w-full justify-center items-center  h-[90vh] mt-10 ">
      <div className="w-11/12 min-h-[80vh] flex flex-col-reverse md:flex-row justify-center max-w-maxContent gap-y-12 md:gap-y-0 md:gap-x-12">
        <div className="w-full md:w-[50%] h-[100%] flex flex-col gap-5">{Form()}</div>
        <div className="w-full md:w-[50%] h-[100%] relative hidden md:block">
          <div className="absolute top-3 left-3 w-[70%]">
            <img src={frame} alt="" />
          </div>
          <div className="absolute top-0 left-0 w-[70%]">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
