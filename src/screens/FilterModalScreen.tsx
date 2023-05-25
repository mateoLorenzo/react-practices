import { FilterModal } from "../components/FilterModal";
import { FiFilter } from "react-icons/fi";
import { useFilterModal } from "../hooks/useFilterModal";
import "./styles.css";

export const FilterModalScreen = () => {
  const {
    filterModalRef,
    showFilterModal,
    filterOptions,
    filterOptionsTitle,
    filtersSelected,
    handleToggleModal,
    onSelectFilterOption,
    onGoBack,
  } = useFilterModal();

  return (
    <div className="fms-container">
      <div ref={filterModalRef}>
        <button className="fms-filter-button" onClick={handleToggleModal}>
          <FiFilter size={30} />
        </button>
        <FilterModal
          showFilterModal={showFilterModal}
          filterOptions={filterOptions}
          title={filterOptionsTitle}
          filtersSelected={filtersSelected}
          onSelectFilterOption={onSelectFilterOption}
          onGoBack={onGoBack}
        />
      </div>
    </div>
  );
};
