import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarContainer } from "./style";

interface SearchProps<T> {
  filter: (searchTerm: string, data: T[]) => T[];
  originalData: T[];
  setter: (value: React.SetStateAction<T[]>) => void;
}

export const SearchBar = <T,>(props: SearchProps<T>) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        const filteredData = props.filter(searchTerm, props.originalData);
        props.setter(filteredData);
      } else {
        props.setter(props.originalData);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  return (
    <SearchBarContainer>
      <div>
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="Filtrar por nome"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchBarContainer>
  );
};
