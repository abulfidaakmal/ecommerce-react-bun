import AddressAction from "./AddressAction.jsx";
import { useState } from "react";

const AddressList = ({ addresses, isPending }) => {
  const [selectId, setSelectId] = useState();

  if (isPending) {
    return (
      <div className="divide-y divide-primary">
        {[1, 2, 3].map((result) => (
          <div className="flex flex-col p-3 my-2" key={result}>
            <div className="flex flex-col mb-2">
              <div className="h-6 mb-1 skeleton" />
              <div className="h-6 skeleton" />
            </div>
            <div className="h-6 skeleton" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="divide-y divide-primary">
      {addresses?.map((result) => (
        <div className="flex items-center justify-between p-2" key={result.id}>
          <div className="flex flex-col mb-2">
            <span className="text-lg font-semibold">
              {result.name}
              {result.is_sellers && (
                <div className="ml-2 badge badge-info">seller</div>
              )}
              {result.is_selected && (
                <div className="ml-2 badge badge-success">selected</div>
              )}
            </span>
            <span>{result.phone}</span>
            <span className="mt-2">{result.street}</span>
          </div>
          <AddressAction
            address={result}
            setSelectId={setSelectId}
            selectId={selectId}
          />
        </div>
      ))}
    </div>
  );
};

export default AddressList;
