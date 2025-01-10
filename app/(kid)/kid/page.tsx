import ContentSection from "@/components/sections/ContentSection";
import SideSection from "@/components/sections/SideSection";
import youthImage from "@/public/youth-page/youth-page-image.jpg";
import { getKidComfortDress } from "@/queries/getKidComfortDress";
import { getKidDress } from "@/queries/getKidDress";
import { getKidUnderwire } from "@/queries/getKidUnderwire";
import { getKidWinterDress } from "@/queries/getKidWinterDress";
import { getKidWinterPajamas } from "@/queries/getKidWinterPajamas";
import Image from "next/image";

const KidPage = async () => {
  const kidClothes = await getKidDress();
  const kidUnderwire = await getKidUnderwire();
  const kidComfortDress = await getKidComfortDress();
  const kidWinterDress = await getKidWinterDress();
  const kidWinterPajamas = await getKidWinterPajamas();

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

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection
          heading="Kid comfort dress"
          href="/"
          linkLabel="Show All"
        />
        <ContentSection data={kidComfortDress} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Kid winter dress" href="/" linkLabel="Show All" />
        <ContentSection data={kidWinterDress} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection
          heading="Kid winter pajamas"
          href="/"
          linkLabel="Show All"
        />
        <ContentSection data={kidWinterPajamas} isVertical />
      </div>
    </div>
  );
};

export default KidPage;
