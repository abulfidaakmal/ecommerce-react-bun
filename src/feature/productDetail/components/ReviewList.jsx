import { dateFormat } from "../../../utils/dateFormat.js";
import Rating from "@components/element/Rating.jsx";
import ModalImage from "@components/layout/ModalImage.jsx";
import ReadMore from "@components/element/ReadMore.jsx";
import { EllipsisVertical } from "lucide-react";

const ReviewList = ({ reviews }) => {
  return (
    <div className="w-full mt-8 divide-y lg:mt-4 lg:ml-14 divide-primary">
      {reviews?.map((review) => (
        <div key={review.id} className="flex justify-between py-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.username}
                className="w-10 h-10 rounded-full"
              />
              <span>{review.username}</span>
            </div>
            {review.summary && (
              <ReadMore maxLines={3}>{review.summary}</ReadMore>
            )}
            {review.image_url && <ModalImage image={review.image_url} />}
            <div className="flex items-center gap-2 mt-2">
              <Rating rating={review.rating} disabled={true} />
              <span>{dateFormat(review.updated_at)}</span>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <EllipsisVertical />
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow dropdown-content menu rounded-box w-52 bg-base-100"
            >
              <li>
                <a>Report</a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
