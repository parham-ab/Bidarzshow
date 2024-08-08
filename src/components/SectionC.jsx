// import { useState } from "react";
// import transformer from "/src/assets/img/transformer.png";
// import Card from "./common/Card";
// import support from "/src/assets/img/sectionC/support.png";
// import bars from "/src/assets/img/sectionC/bars.png";
// import bubbles from "/src/assets/img/sectionC/bubbles.png";
// import settings from "/src/assets/img/sectionC/settings.png";
// import money from "/src/assets/img/sectionC/money.png";
// import trade from "/src/assets/img/sectionC/trade.png";

// const SectionC = () => {
//   const [activeItem, setActiveItem] = useState();

//   return (
//     <div className="text-center p-8 my-14">
//       <h1 className="text-2xl mb-8 text-[#F2B80C]">
//         چرا باید در بیدارزیرو معامله کنین؟
//       </h1>

//       <div className="flex justify-center items-center">
//         <div className="w-1/5 flex flex-col items-center">
//           <div className="m-3 p-4 w-full">
//             <Card
//               title="اولین پلتفرم P2P و ترید در یک اکانت"
//               icon={trade}
//               onClick={() => setActiveItem(true)}
//             />
//           </div>
//           <div className="m-3 p-4 w-full">
//             <Card
//               title="امنیت بالا"
//               icon={money}
//               onClick={() => setActiveItem(true)}
//             />
//           </div>
//           <div className="m-3 p-4 w-full">
//             <Card
//               title="زیر ساخت قوی و سرعت بالا"
//               icon={settings}
//               onClick={() => setActiveItem(true)}
//             />
//           </div>
//         </div>
//         <div className="p-4 rounded-lg mx-4 border-[#F2B80C] border-[1px] w-[280px] leading-10 text-start">
//           <p>
//             بیدارز از اوایل ســـال ۹۷ بعنوان اولین پلتفرم P2P مبـــادلات ارز
//             دیجیتـــال وارد بازار شــد و از آن زمان تا کنــون بدون وقفــــه به
//             کاربران خدمـــت رسانــــی کرده است.
//           </p>
//           <img src={transformer} alt="transformer" className="float-left" />
//         </div>
//         <div className="w-1/5 flex flex-col items-center">
//           <div className="m-3 p-4 w-full">
//             <Card
//               title="تنوع بالای ارز"
//               icon={bubbles}
//               onClick={() => setActiveItem(true)}
//               reverse={true}
//             />
//           </div>
//           <div className="m-3 p-4 w-full">
//             <Card
//               title="پشتیبانی از limit, stop limit و market"
//               icon={bars}
//               onClick={() => setActiveItem(true)}
//               reverse={true}
//             />
//           </div>
//           <div className="m-3 p-4 w-full">
//             <Card
//               title="پشتیبانی ۲۴ ساعته"
//               icon={support}
//               onClick={() => setActiveItem(true)}
//               reverse={true}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionC;

import { useState } from "react";
import transformer from "/src/assets/img/transformer.png";
import Card from "./common/Card";
import support from "/src/assets/img/sectionC/support.png";
import bars from "/src/assets/img/sectionC/bars.png";
import bubbles from "/src/assets/img/sectionC/bubbles.png";
import settings from "/src/assets/img/sectionC/settings.png";
import money from "/src/assets/img/sectionC/money.png";
import trade from "/src/assets/img/sectionC/trade.png";

const SectionC = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="text-center md:p-8 p-4 my-14">
      <h1 className="text-2xl mb-8 text-[#F2B80C]">
        چرا باید در بیدارزیرو معامله کنین؟
      </h1>
      {/* desktop */}
      <div className="hidden lg:flex justify-center items-center">
        <div className="w-1/5 flex flex-col items-center">
          <div className="m-3 p-4 w-full">
            <Card
              id="trade"
              title="اولین پلتفرم P2P و ترید در یک اکانت"
              icon={trade}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>
          <div className="m-3 p-4 w-full">
            <Card
              id="money"
              title="امنیت بالا"
              icon={money}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>
          <div className="m-3 p-4 w-full">
            <Card
              id="settings"
              title="زیر ساخت قوی و سرعت بالا"
              icon={settings}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>
        </div>
        <div className="p-4 rounded-lg mx-4 border-[#F2B80C] border-[1px] w-[280px] leading-10 text-start">
          <p>
            بیدارز از اوایل ســـال ۹۷ بعنوان اولین پلتفرم P2P مبـــادلات ارز
            دیجیتـــال وارد بازار شــد و از آن زمان تا کنــون بدون وقفــــه به
            کاربران خدمـــت رسانــــی کرده است.
          </p>
          <img src={transformer} alt="transformer" className="float-left" />
        </div>
        <div className="w-1/5 flex flex-col items-center">
          <div className="m-3 p-4 w-full">
            <Card
              id="bubbles"
              title="تنوع بالای ارز"
              icon={bubbles}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              reverse={true}
            />
          </div>
          <div className="m-3 p-4 w-full">
            <Card
              id="bars"
              title="پشتیبانی از limit, stop limit و market"
              icon={bars}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              reverse={true}
            />
          </div>
          <div className="m-3 p-4 w-full">
            <Card
              id="support"
              title="پشتیبانی ۲۴ ساعته"
              icon={support}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              reverse={true}
            />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex lg:hidden flex-col">
        <div className="py-4 w-full">
          <Card
            id="trade"
            title="اولین پلتفرم P2P و ترید در یک اکانت"
            icon={trade}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="rounded-lg mx-4 border-[#F2B80C] border-[1px]  leading-10 text-start">
          <p className="p-4">
            بیدارز از اوایل ســـال ۹۷ بعنوان اولین پلتفرم P2P مبـــادلات ارز
            دیجیتـــال وارد بازار شــد و از آن زمان تا کنــون بدون وقفــــه به
            کاربران خدمـــت رسانــــی کرده است.
          </p>
          <img src={transformer} alt="transformer" className="float-left" />
        </div>
        <div className="py-4 w-full">
          <Card
            id="money"
            title="امنیت بالا"
            icon={money}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="py-4 w-full">
          <Card
            id="settings"
            title="زیر ساخت قوی و سرعت بالا"
            icon={settings}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="py-4 w-full">
          <Card
            id="bubbles"
            title="تنوع بالای ارز"
            icon={bubbles}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="py-4 w-full">
          <Card
            id="bars"
            title="پشتیبانی از limit, stop limit و market"
            icon={bars}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="py-4 w-full">
          <Card
            id="support"
            title="پشتیبانی ۲۴ ساعته"
            icon={support}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionC;
