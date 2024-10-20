import { EllipsisVertical } from "lucide-react";
import Rating from "@components/element/Rating";

const ReviewSkeleton = () => {
  return (
    <div className="p-4 border rounded-md border-primary">
      <div className="block w-24 h-5 mb-2 skeleton" />
      <div className="flex gap-4 pt-3 border-t border-primary">
        <div className="w-20 h-20 skeleton" />
        <div className="flex justify-between w-full">
          <div className="grid gap-1">
            <div className="w-40 h-4 skeleton"></div>
            <Rating rating={5} />
          </div>
          <div tabIndex={0} role="button" className="ml-4 btn">
            <EllipsisVertical size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
