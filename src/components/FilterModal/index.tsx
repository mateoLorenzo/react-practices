import { useRef } from "react";
import "./styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { departmentalFiltersList, FilterOption } from "../../constants";

interface Props {
  showFilterModal: boolean;
  filterOptions: FilterOption[];
  title: string;
  filtersSelected: FilterOption[];
  onSelectFilterOption: (option: FilterOption) => void;
  onGoBack?: () => void;
}

export const FilterModal = ({
  showFilterModal,
  filterOptions,
  title,
  filtersSelected,
  onSelectFilterOption,
  onGoBack,
}: Props) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const lastFilterSelected = filtersSelected[filtersSelected.length - 1].id;
  const filterNames: string[] = filterOptions.map((option) => option.name);
  const responsibleFilterIsSelected = lastFilterSelected === 2;
  const modalClassName = showFilterModal
    ? "modal-container show"
    : "modal-container";

  const handleSearchIconPress = () => {
    if (searchInputRef.current !== null) {
      searchInputRef.current.focus();
    }
  };

  const renderTitle = () => (
    <div className="title-container" onClick={onGoBack}>
      <FiChevronLeft />
      <p className="title">{title}</p>
    </div>
  );

  const renderFilterOptions = () =>
    filterOptions.map((option) => (
      <div
        onClick={() => onSelectFilterOption(option)}
        className="filter-option"
        key={option.id}
      >
        <p className="filter-option-text">{option.name}</p>
        <FiChevronRight />
      </div>
    ));

  const renderCheckboxesOptions = (list: string[]) => (
    <ul className="filters-list">
      {list.map((item) => (
        <li key={item}>
          <label className="department-filter-label">
            <input
              className="department-filter-checkbox"
              type="checkbox"
              name={item}
              value={item}
            />
            {item}
          </label>
        </li>
      ))}
    </ul>
  );

  const getInputLabel = (): string => {
    let labelKeyWord: string = "";
    if (title === "Departamental") labelKeyWord = "departamento";
    if (title === "Organizacional") labelKeyWord = "organización";
    if (title === "Cualitativo") labelKeyWord = "OKR cualitativo";
    if (title === "Cuantitativo") labelKeyWord = "OKR cuantitativo";
    return `Busca por ${labelKeyWord}`;
  };

  const renderFiltersWithCheckboxes = () => (
    <>
      <div className="search-department-container">
        <p>{getInputLabel()}</p>
        <div className="search-department-input-container">
          <input
            type="text"
            placeholder="Comienza a escribir"
            className="search-department-input"
            ref={searchInputRef}
          />
          <RiSearchLine
            onClick={handleSearchIconPress}
            size={16}
            className="search-department-icon"
          />
        </div>
      </div>
      {renderCheckboxesOptions(departmentalFiltersList)}
    </>
  );

  return (
    <div className={modalClassName}>
      {title && renderTitle()}
      {!responsibleFilterIsSelected && renderFilterOptions()}
      {responsibleFilterIsSelected && (
        <>{renderCheckboxesOptions(filterNames)}</>
      )}
      {filtersSelected.length === 3 && renderFiltersWithCheckboxes()}
    </div>
  );
};
