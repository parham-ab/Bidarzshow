import CustomInput from "./common/CustomInput";
import { FaArrowLeftLong } from "react-icons/fa6";
import backgroundD from "/src/assets/img/backgroundD.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "./common/CustomButton";
const initialValues = { phoneNo: "" };
const validationSchema = Yup.object().shape({
  phoneNo: Yup.string()
    .required("لطفا این فیلد را پر کنید")
    .matches(/(^09\d{9}$)/, "فرمت شماره تلفن نامعتبر است"),
});

const onSubmit = (values) => console.log(values);

const SectionD = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <div
      className="relative bg-contain bg-no-repeat my-20"
      style={{
        backgroundImage: `url(${backgroundD})`,
      }}
    >
      <div className="flex flex-col gap-8 md:w-1/2 mx-3 md:m-auto my-14 p-8 rounded-lg border-[1px] border-[#FFD62F] bg-[#0908018a]">
        <div className="text-[#F2B80C] text-center">
          <p>در کمتر از ۵ دقیقه</p>
          <p>ترید حرفه ای رو شروع کنید</p>
        </div>

        <div className="text-center">
          <p>برای شروع استفاده از بیدارز پرو</p>
          <p>و ترید حرفه ای کافیه شماره ات رو وارد کنی</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="md:w-[280px] flex flex-col gap-5 justify-center m-auto">
            <CustomInput
              formik={formik}
              name={"phoneNo"}
              placeholder="شماره موبایل را وارد کنید"
            />
            <CustomButton type="submit" className="md:w-[280px] rounded-xl">
              شروع کن
            </CustomButton>
          </div>
        </form>

        <div className="flex items-center justify-center gap-2">
          <p>چطوری ریپل دریافت کنیم؟</p>
          <FaArrowLeftLong className="text-[#FFD62F]" />
        </div>
      </div>
    </div>
  );
};

export default SectionD;
