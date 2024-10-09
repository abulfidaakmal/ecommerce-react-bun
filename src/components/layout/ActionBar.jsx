import { Search } from "lucide-react";
import { modal } from "../../utils/handleModal.js";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ActionBar = ({ title, placeholder, children }) => {
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

  const handleModal = () => {
    modal(`Modal_Add_${title}`).open();
  };

  return (
    <div className="flex justify-between w-full mb-4">
      <label className="flex items-center w-2/3 gap-2 input input-bordered">
        <Search size={22} />
        <input
          type="text"
          className="grow"
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </label>
      <button className="hidden capitalize btn lg:inline" onClick={handleModal}>
        Add {title}
      </button>
      <button className="btn lg:hidden" onClick={handleModal}>
        Add
      </button>
      {children}
    </div>
  );
};

export default ActionBar;
