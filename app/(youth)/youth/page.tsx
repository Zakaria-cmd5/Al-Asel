import ContentSection from "@/components/sections/ContentSection";
import SideSection from "@/components/sections/SideSection";
import youthImage from "@/public/youth-page/youth-page-image.jpg";
import { getAllDress } from "@/queries/getAllDress";
import Image from "next/image";

const YouthPage = async () => {
  const youthThoub = await getAllDress("YOUTH", "THOUB");
  const youthUnderwire = await getAllDress("YOUTH", "UNDER_WIRE");
  const youthComfortThoub = await getAllDress("YOUTH", "COMFORT_THOUB");

  return (
    <div className="mt-10 flex flex-col gap-10">
      <Image src={youthImage} alt="Youth Image" className="w-[75%] mx-auto" />

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Youth Dress" href="/" linkLabel="Show All" />
        <ContentSection category="youth" data={youthThoub} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Youth Underwire" href="/" linkLabel="Show All" />
        <ContentSection category="youth" data={youthUnderwire} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection
          heading="Youth Comfort Dress"
          href="/"
          linkLabel="Show All"
        />
        <ContentSection category="youth" data={youthComfortThoub} isVertical />
      </div>
    </div>
  );
};

export default YouthPage;
