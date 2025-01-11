import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  mainCategoryValueChange: (value: string) => void;
  subCategoryValueChange: (value: string) => void;
}

const FormSelect = ({
  mainCategoryValueChange,
  subCategoryValueChange,
}: Props) => {
  return (
    <div className="flex items-center gap-5">
      <Select onValueChange={mainCategoryValueChange}>
        <SelectTrigger className="w-[193px]">
          <SelectValue placeholder="Select a main category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="men">Men</SelectItem>
            <SelectItem value="women">Women</SelectItem>
            <SelectItem value="youth">Youth</SelectItem>
            <SelectItem value="kid">Kid</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={subCategoryValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a sub category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="thoub">Thoub</SelectItem>
            <SelectItem value="underwire">Underwire</SelectItem>
            <SelectItem value="winter-pajamas">Winter Pajamas</SelectItem>
            <SelectItem value="summer-pajamas">Summer Pajamas</SelectItem>
            <SelectItem value="comfort-thoub">Comfort Thoub</SelectItem>
            <SelectItem value="winter-thoub">Winter Thoub</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
