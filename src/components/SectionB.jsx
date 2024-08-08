import videoPlayer from "/src/assets/img/videoPlayer.svg";
import backgroundB from "/src/assets/img/backgroundB.png";
import coins from "/src/assets/img/coins.png";

const SectionB = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="bg-cover bg-center w-full h-full opacity-[0.4] absolute top-0 left-0 bg-no-repeat mt-5"
        style={{
          backgroundImage: `url(${backgroundB})`,
        }}
      ></div>
      <div className="flex flex-col items-center justify-center z-10">
        <div className="text-center mb-10">
          <p className="text-[#F2B80C]">دیگه وقتشه ابزارت رو ارتقا بدی</p>
          <p>یه دقیقه این ویدیو رو ببین</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={videoPlayer} alt="videoPlayer" width={300} />
          <img src={coins} alt="coins" width={300} />
        </div>
      </div>
    </div>
  );
};

export default SectionB;
