import CustomButton from "./common/CustomButton";
import robotImg from "/src/assets/img/robotImg.png";
import backgroundA from "/src/assets/img/backgroundA.png";

const SectionA = () => {
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${backgroundA})` }}
        className="bg-contain w-full h-full opacity-[0.4] absolute top-0 left-0 bg-no-repeat mt-5"
      ></div>
      <div className="text-center relative z-10">
        <h1 className="font-bold text-2xl text-[#F2B80C] my-8">
          فصل درو از راه رسید
        </h1>

        <div className="leading-9">
          <p>
            پلتفرم <span className="text-[#F2B80C]"> بیدارز(Pro) </span> رونمایی
            شد
          </p>
          <p>
            در این پلتفرم معامله کن و تا سقف
            <span className="text-[#F50148]"> ۱۰۰ ریپل </span>
            جایزه ببر
          </p>
        </div>

        <div className="md:flex hidden items-center flex-col justify-center">
          <CustomButton className="w-[200px] rounded-2xl">
            شروع ترید
          </CustomButton>
        </div>

        <div className="flex justify-center my-8">
          <img src={robotImg} alt="robotImg" />
        </div>

        <div className="flex md:hidden items-center flex-col justify-center my-8">
          <CustomButton className="w-[200px] rounded-2xl">
            ثبت نام فوری
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
