import logo from "src/assets/img/logo.png";
import CustomButton from "/src/components/common/CustomButton";

const Header = () => {
  return (
    <div className="border-0 md:border-b-[1px] md:border-[#FFD62F]">
      <div className="container mx-auto lg:px-[200px] md:px-[100px] px-2 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="logo" width={100} />
            <h1 className="font-bold text-xl">بیدارز شو</h1>
          </div>

          <div className="hidden md:block">
            <CustomButton className="rounded-full w-[110px]">
              شروع ترید
            </CustomButton>
          </div>
          <div className="md:hidden block">
            <CustomButton className="rounded-full w-[110px]">
              ثبت نام فوری
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
