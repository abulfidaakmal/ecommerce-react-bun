import { modal } from "../../utils/handleModal.js";
import SearchBar from "./SearchBar.jsx";

const ActionBar = ({ title, placeholder, children }) => {
  const handleModal = () => {
    modal(`Modal_Add_${title}`).open();
  };

  return (
    <div className="flex justify-between w-full mb-4">
      <SearchBar placeholder={placeholder} />
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
