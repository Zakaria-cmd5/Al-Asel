import ContentSection from "@/components/men-page/ContentSection";
import SideSection from "@/components/men-page/SideSection";
import { getAlAseelClothes } from "@/queries/getAlAseelClothes";
import { getMenUnderWire } from "@/queries/getMenUnderWire";

const MenPage = async () => {
  const menClothes = await getAlAseelClothes();
  const menUnderWire = await getMenUnderWire();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Alaseel Clothes" href="/" linkLabel="Show All" />
        <ContentSection data={menClothes} />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Underwire" href="/" linkLabel="Show All" />
        <ContentSection data={menUnderWire} isVertical />
      </div>
    </div>
  );
};

export default MenPage;
