import ContentSection from "@/components/men-page/ContentSection";
import SideSection from "@/components/men-page/SideSection";
import { getAlAseelClothes } from "@/queries/getAlAseelClothes";
import { getMenComfortDress } from "@/queries/getMenComfortDress";
import { getMenUnderWire } from "@/queries/getMenUnderWire";
import { getMenWinterPajamas } from "@/queries/getMenWinterPajamas";

const MenPage = async () => {
  const menClothes = await getAlAseelClothes();
  const menUnderWire = await getMenUnderWire();
  const menComfortDress = await getMenComfortDress();
  const menWinterPajamas = await getMenWinterPajamas();

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

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Comfort Dress" href="/" linkLabel="Show All" />
        <ContentSection data={menComfortDress} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Winter Dress" href="/" linkLabel="Show All" />
        <ContentSection data={menWinterPajamas} isVertical />
      </div>
    </div>
  );
};

export default MenPage;
