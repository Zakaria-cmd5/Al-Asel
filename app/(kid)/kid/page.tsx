import ContentSection from "@/components/sections/ContentSection";
import SideSection from "@/components/sections/SideSection";
import youthImage from "@/public/youth-page/youth-page-image.jpg";
import { getKidDress } from "@/queries/getKidDress";
import { getKidUnderwire } from "@/queries/getKidUnderwire";
import Image from "next/image";

const KidPage = async () => {
  const kidClothes = await getKidDress();
  const kidUnderwire = await getKidUnderwire();

  return (
    <div className="mt-10 flex flex-col gap-10">
      <Image src={youthImage} alt="Youth Image" className="w-[75%] mx-auto" />

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Kid Dress" href="/" linkLabel="Show All" />
        <ContentSection data={kidClothes} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Kid underwire" href="/" linkLabel="Show All" />
        <ContentSection data={kidUnderwire} isVertical />
      </div>
    </div>
  );
};

export default KidPage;
