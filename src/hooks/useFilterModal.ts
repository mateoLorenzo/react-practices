import {
  FilterOption,
  initialFilterOptions,
  hierarchyFilterOptions,
  responsibleFilterOptions,
  typeFilterOptions,
} from "./../constants/index";
import { useEffect, useRef, useState } from "react";

export const useFilterModal = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterOptionsTitle, setFilterOptionsTitle] = useState("");
  const [filtersSelected, setFiltersSelected] = useState<FilterOption[]>([
    { id: 0, name: "" },
  ]);
  const [filterOptions, setFilterOptions] =
    useState<FilterOption[]>(initialFilterOptions);
  const filterModalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterModalRef.current &&
      !filterModalRef.current.contains(event.target as Node)
    ) {
      if (showFilterModal) closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filterModalRef, showFilterModal]);

  const handleToggleModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const closeModal = () => {
    setShowFilterModal(false);
  };

  const onSelectFilterOption = (option: FilterOption) => {
    setFilterOptionsTitle(option.name);
    setFiltersSelected([...filtersSelected, option]);

    const newFilterOptions = getFilterOptions(option.id);
    setFilterOptions(newFilterOptions);
  };

  const getFilterOptions = (id: number) => {
    if (id === 0) return initialFilterOptions;
    if (id === 1) return hierarchyFilterOptions;
    if (id === 2) return responsibleFilterOptions;
    if (id === 3) return typeFilterOptions;

    return [];
  };

  const onGoBack = () => {
    const prevFiltersSelected = [...filtersSelected];
    const newFiltersSelected = prevFiltersSelected.slice(
      0,
      prevFiltersSelected.length - 1
    );
    setFilterOptionsTitle(
      newFiltersSelected[newFiltersSelected.length - 1].name
    );

    const newFilterOptions = getFilterOptions(
      newFiltersSelected[newFiltersSelected.length - 1].id
    );
    setFilterOptions(newFilterOptions);
    setFiltersSelected(newFiltersSelected);
  };

  return {
    filterModalRef,
    showFilterModal,
    filterOptions,
    filterOptionsTitle,
    filtersSelected,
    handleToggleModal,
    onSelectFilterOption,
    onGoBack,
  };
};
