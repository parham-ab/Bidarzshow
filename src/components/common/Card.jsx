import { MdOutlineCircle } from "react-icons/md";
import { MdCircle } from "react-icons/md";

const Card = ({
  id,
  title,
  icon,
  activeItem,
  setActiveItem,
  reverse = false,
}) => {
  const isActive = activeItem === id;

  return (
    <div
      className={`flex flex-row items-center justify-between p-4 hover:text-[#F2B80C] cursor-pointer bg-[#090801] ${
        reverse && "flex-row-reverse"
      } ${isActive && "font-bold text-[#F2B80C]"}`}
      onClick={() => setActiveItem(isActive ? null : id)}
    >
      <div>{icon && <img src={icon} alt={title} className="w-[45px]" />}</div>
      <p className="w-26 text-wrap text-sm">{title}</p>
      {isActive ? (
        <MdCircle className={`cursor-pointer text-[#F2B80C]`} />
      ) : (
        <MdOutlineCircle className={`cursor-pointer`} />
      )}
    </div>
  );
};

export default Card;
