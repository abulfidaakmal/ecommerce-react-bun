import { EllipsisVertical, Eye, Pencil, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ButtonActions = ({ onEdit, onView, onRemove, onSelect }) => {
  const redirect = useNavigate();

  return (
    <div className="dropdown dropdown-left">
      <div tabIndex={0} role="button" className="btn">
        <EllipsisVertical size={18} />
      </div>
      <ul
        tabIndex={0}
        className="z-20 grid gap-1 p-2 border dropdown-content menu bg-base-100 border-primary rounded-box"
      >
        {onEdit && (
          <li>
            <button className="btn" onClick={onEdit}>
              <Pencil className="cursor-pointer" size={18} />
            </button>
          </li>
        )}
        {onView && (
          <li>
            <button className="btn" onClick={() => redirect(onView)}>
              <Eye className="cursor-pointer" size={18} />
            </button>
          </li>
        )}
        {onRemove && (
          <li>
            <button className="btn" onClick={onRemove}>
              <Trash className="cursor-pointer" size={18} />
            </button>
          </li>
        )}
        {onSelect && (
          <li>
            <button className="btn" onClick={onSelect}>
              Select
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ButtonActions;
