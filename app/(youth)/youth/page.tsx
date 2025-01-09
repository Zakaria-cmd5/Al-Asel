import ContentSection from "@/components/men-page/ContentSection";
import SideSection from "@/components/men-page/SideSection";
import youthImage from "@/public/youth-page/youth-page-image.jpg";
import { getYouthClothes } from "@/queries/getYouthClothes";
import Image from "next/image";

const YouthPage = async () => {
  const youthClothes = await getYouthClothes();

  return (
    <div className="mt-10 flex flex-col gap-10">
      <Image src={youthImage} alt="Youth Image" className="w-[50%] mx-auto" />

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Winter Dress" href="/" linkLabel="Show All" />
        <ContentSection data={youthClothes} isVertical />
      </div>
    </div>
  );
};

export default YouthPage;
