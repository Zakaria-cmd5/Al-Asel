import ContentSection from "@/components/men-page/ContentSection";
import SideSection from "@/components/men-page/SideSection";
import youthImage from "@/public/youth-page/youth-page-image.jpg";
import { getYouthClothes } from "@/queries/getYouthClothes";
import { getYouthComfortDress } from "@/queries/getYouthComfortDress";
import { getYouthUnderwire } from "@/queries/getYouthUnderwire";
import Image from "next/image";

const YouthPage = async () => {
  const youthClothes = await getYouthClothes();
  const youthUnderwire = await getYouthUnderwire();
  const youthComfortDress = await getYouthComfortDress();

  return (
    <div className="mt-10 flex flex-col gap-10">
      <Image src={youthImage} alt="Youth Image" className="w-[50%] mx-auto" />

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Youth Dress" href="/" linkLabel="Show All" />
        <ContentSection data={youthClothes} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Youth Underwire" href="/" linkLabel="Show All" />
        <ContentSection data={youthUnderwire} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection
          heading="Youth Comfort Dress"
          href="/"
          linkLabel="Show All"
        />
        <ContentSection data={youthComfortDress} isVertical />
      </div>
    </div>
  );
};

export default YouthPage;
