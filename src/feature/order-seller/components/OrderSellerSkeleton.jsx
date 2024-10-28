import { EllipsisVertical } from "lucide-react";

const OrderSellerSkeleton = () => {
  return [1, 2, 3, 4].map((result) => (
    <tr key={result.id}>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 mask mask-squircle skeleton" />
          </div>
          <div className="w-24 h-4 font-bold skeleton" />
        </div>
      </td>
      <td>
        <div className="w-20 h-4 skeleton" />
      </td>
      <td>
        <div className="w-16 h-4 skeleton" />
      </td>
      <td>
        <div className="w-12 h-4 skeleton" />
      </td>
      <td>
        <div className="w-20 h-4 skeleton" />
      </td>
      <td>
        <div className="w-12 h-4 skeleton" />
      </td>
      <td>
        <div role="button" className="btn">
          <EllipsisVertical size={18} />
        </div>
      </td>
    </tr>
  ));
};

export default OrderSellerSkeleton;
