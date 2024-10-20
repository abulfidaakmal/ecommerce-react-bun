import { InfoIcon } from "lucide-react";
import { modal } from "../../../utils/handleModal";
import { dateFormat } from "../../../utils/dateFormat";
import ReadMore from "@components/element/ReadMore.jsx";

const MerchantModalInfo = ({ seller }) => {
  return (
    <>
      <button
        className="flex items-center gap-1"
        onClick={modal("Merchant_Info").open}
      >
        <InfoIcon />
        Info
      </button>
      <dialog id="Merchant_Info" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-xl font-bold">{seller.name}</h3>
          <div className="mt-4">
            <h3 className="text-lg font-semibold ">Description: </h3>
            <ReadMore maxLines={4}>{seller.description}</ReadMore>
          </div>
          <div className="mt-2">
            <h3 className="text-lg font-semibold ">Joined since: </h3>
            <span>{dateFormat(seller.created_at)}</span>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MerchantModalInfo;
