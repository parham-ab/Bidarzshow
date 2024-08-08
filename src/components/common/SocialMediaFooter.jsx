import { GoShareAndroid } from "react-icons/go";
import { LiaTelegram } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

const SocialMediaFooter = () => {
  return (
    <div className="p-2 border-[1px] border-[#FFD62F] flex items-center gap-12 w-fit rounded-full">
      <p className="font-bold">بقیه رو هم خبر کن</p>
      <div className="rounded-full flex items-center w-fit gap-5">
        <GoShareAndroid className="text-xl" />
        <FaWhatsapp className="text-xl" />
        <LiaTelegram className="text-xl" />
      </div>
    </div>
  );
};

export default SocialMediaFooter;
