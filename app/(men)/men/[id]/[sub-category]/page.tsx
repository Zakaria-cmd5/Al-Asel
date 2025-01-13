import { getOneDress } from "@/queries/getOneDress";
import Image from "next/image";

type Params = Promise<{
  id: string;
  "sub-category":
    | "THOUB"
    | "UNDER_WIRE"
    | "WINTER_PAJAMAS"
    | "SUMMER_PAJAMAS"
    | "COMFORT_THOUB"
    | "WINTER_THOUB";
}>;

const MenDetailPage = async (props: { params: Params }) => {
  const params = await props.params;
  const { id, "sub-category": subCategory } = params;

  const dress = await getOneDress("MEN", subCategory, parseInt(id));

  if (!dress) return <p>no dress found</p>;

  return (
    <div className="grid grid-cols-2 gap-5 m-5">
      <div className="mt-12">
        <Image src={dress.image} alt={dress.name} width={500} height={500} />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold text-black">{dress.name}</p>
          <p className="text-sm text-gray-400">Product code : {dress.dressCode}</p>
        </div>

        <div className="flex gap-10 items-center">
          <p className="text-[#a07653] text-4xl">{dress.price} ر.س</p>
          <p className="text-2xl">The price is inclusive of tax</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold text-black">Size</p>
          <div className="flex gap-3">
            {dress.sizes.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-center border p-3 bg-gray-400 hover:bg-[#a07653] cursor-pointer max-h-[35px] max-w-[55px]"
              >
                <p className="text-white">{s.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold text-black">Color</p>
          <div className="flex gap-3">
            {dress.colors.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-center border p-3 bg-gray-400 hover:bg-[#a07653] cursor-pointer max-h-[35px] max-w-[55px]"
              >
                <p className="text-white">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold text-black">Thoub length</p>
          <div className="flex gap-3">
            {dress.dressLength.map((d) => (
              <div
                key={d.id}
                className="flex items-center justify-center border p-3 bg-gray-400 hover:bg-[#a07653] cursor-pointer max-h-[35px] max-w-[55px]"
              >
                <p className="text-white">{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenDetailPage;
