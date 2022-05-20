import { ChangeEvent, FC } from "react";

import MaterialIcon from "@/components/Icons/MaterialIcon";

import styles from "./searchField.module.scss";

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon icon="MdAttachMoney" />
      <input
        placeholder="Search"
        type="number"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchField;
