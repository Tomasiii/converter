import { ChangeEvent } from "react";

import CountrySelect from "@/components/Group/CountrySelect/CountrySelect";
import SearchField from "@/components/Group/SearchField/SearchField";

interface IProps {
  money: string;
  setMoney: any;
}

const Group = ({ money, setMoney }: IProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setMoney(e.target.value);
  };

  return (
    <div>
      <CountrySelect />
      <SearchField searchTerm={money} handleSearch={handleSearch} />
    </div>
  );
};

export default Group;
