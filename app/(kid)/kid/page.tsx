import ContentSection from "@/components/sections/ContentSection";
import SideSection from "@/components/sections/SideSection";
import youthImage from "@/public/youth-page/youth-page-image.jpg";
import { getAllDress } from "@/queries/getAllDress";
import Image from "next/image";

export const dynamic = "force-dynamic";

const KidPage = async () => {
  const kidThoub = await getAllDress("KID", "THOUB");
  const kidUnderwire = await getAllDress("KID", "UNDER_WIRE");
  const kidComfortThoub = await getAllDress("KID", "COMFORT_THOUB");
  const kidWinterThoub = await getAllDress("KID", "WINTER_THOUB");
  const kidWinterPajamas = await getAllDress("KID", "WINTER_PAJAMAS");

  return (
    <div className="mt-10 flex flex-col gap-10">
      <Image src={youthImage} alt="Youth Image" className="w-[75%] mx-auto" />

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Kid Thoub" href="/" linkLabel="Show All" />
        <ContentSection category="kid" data={kidThoub} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Kid underwire" href="/" linkLabel="Show All" />
        <ContentSection category="kid" data={kidUnderwire} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection
          heading="Kid comfort thoub"
          href="/"
          linkLabel="Show All"
        />
        <ContentSection category="kid" data={kidComfortThoub} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Kid winter dress" href="/" linkLabel="Show All" />
        <ContentSection category="kid" data={kidWinterThoub} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection
          heading="Kid winter pajamas"
          href="/"
          linkLabel="Show All"
        />
        <ContentSection category="kid" data={kidWinterPajamas} isVertical />
      </div>
    </div>
  );
};

export default KidPage;
