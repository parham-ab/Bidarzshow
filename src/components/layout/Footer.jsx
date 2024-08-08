import logo from "src/assets/img/logo.png";
import SocialMediaFooter from "../common/SocialMediaFooter";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="md:hidden flex justify-center mb-12">
        <SocialMediaFooter />
      </div>
      <div className="bg-[#010F14] flex md:flex-row flex-col items-center justify-around md:h-[100px] h-[250px]">
        <div className="flex md:flex-row items-center flex-col">
          <img src={logo} alt="logo" width={100} />
          <h1 className="font-bold text-xl">بیدارز شو</h1>
        </div>
        <div className="hidden md:block">
          <SocialMediaFooter />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <FaInstagram className="text-[#F2B80C] text-xl" />
          <FaLinkedin className="text-[#F2B80C] text-xl" />
        </div>
        <p className="text-gray-400 font-bold">Designed By Harmoney</p>
      </div>
    </>
  );
};

export default Footer;
