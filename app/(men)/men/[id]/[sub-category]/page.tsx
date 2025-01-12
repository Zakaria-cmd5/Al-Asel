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
    <div>
      <p>{dress?.name}</p>
      <p>{dress?.description}</p>
      <p>{dress?.dressCode}</p>
      <Image src={dress?.image} alt={dress?.name} width={100} height={100} />
      {dress.colors.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
      {dress.sizes.map((s) => (
        <p key={s.id}>{s.name}</p>
      ))}
      {dress.dressLength.map((d) => (
        <p key={d.id}>{d.name}</p>
      ))}
    </div>
  );
};

export default MenDetailPage;
