import { ChangeEvent, FC, memo } from "react";

import MaterialIcon from "@/components/Icons/MaterialIcon";

import styles from "./searchField.module.scss";

interface ISearchField {
  searchTerm: string;
  handleMoney: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ handleMoney, searchTerm }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon icon="MdAttachMoney" />
      <input
        placeholder="Search"
        type="number"
        value={searchTerm}
        onChange={handleMoney}
      />
    </div>
  );
};

export default memo(SearchField);
