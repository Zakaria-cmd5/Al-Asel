import youthImage from "@/public/youth-page/youth-page-image.jpg";
import Image from "next/image";

const YouthPage = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <Image src={youthImage} alt="Youth Image" className="w-[50%] mx-auto"/>
    </div>
  );
};

export default YouthPage;
