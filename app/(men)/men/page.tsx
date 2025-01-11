import ContentSection from "@/components/sections/ContentSection";
import SideSection from "@/components/sections/SideSection";
import { getAllDress } from "@/queries/getAllDress";

const MenPage = async () => {
  const menThoube = await getAllDress("MEN", "THOUB");
  const menUnderWire = await getAllDress("MEN", "UNDER_WIRE");
  const menComfortThoub = await getAllDress("MEN", "COMFORT_THOUB");
  const menWinterPajamas = await getAllDress("MEN", "WINTER_PAJAMAS");

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Thoub Alaseel" href="/" linkLabel="Show All" />
        <ContentSection category="men" data={menThoube} />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Underwire" href="/" linkLabel="Show All" />
        <ContentSection category="men" data={menUnderWire} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Comfort Thoub" href="/" linkLabel="Show All" />
        <ContentSection category="men" data={menComfortThoub} isVertical />
      </div>

      <div className="grid grid-cols-[200px_1fr] h-auto mt-20">
        <SideSection heading="Winter Dress" href="/" linkLabel="Show All" />
        <ContentSection category="men" data={menWinterPajamas} isVertical />
      </div>
    </div>
  );
};

export default MenPage;
