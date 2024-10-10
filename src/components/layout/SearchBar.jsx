import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const debounceTimeout = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search");

  const [search, setSearch] = useState(initialSearch);

  if (debounceTimeout.current) {
    clearTimeout(debounceTimeout.current);
  }

  debounceTimeout.current = setTimeout(() => {
    if (search !== initialSearch) {
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      navigate({ search: params.toString() });
    }

    debounceTimeout.current = null;
  }, 600);

  return (
    <label className="flex items-center w-2/3 gap-2 input input-bordered">
      <Search size={22} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
        defaultValue={search}
        className="w-full"
      />
    </label>
  );
};

export default SearchBar;
