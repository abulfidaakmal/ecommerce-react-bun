import { useGetReview } from "../hooks/useGetReview";
import ProfileLayout from "@components/layout/ProfileLayout";
import ModalImage from "@components/layout/ModalImage";
import Rating from "@components/element/Rating";
import { dateFormat } from "../../../utils/dateFormat";
import { Link, useLocation } from "react-router-dom";
import ButtonActions from "@components/element/ButtonActions";
import { modal } from "../../../utils/handleModal";
import { useRemoveReview } from "../hooks/useRemoveReview";
import UpdateReviewModal from "../components/UpdateReviewModal";
import { useState } from "react";
import ModalRemove from "@components/layout/ModalRemove";
import ReviewSkeleton from "../components/ReviewSkeleton";
import Pagination from "@components/layout/Pagination.jsx";

const ReviewPage = () => {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page");

  const { data, isPending, isError, error } = useGetReview(page);
  const [selectedReview, setSelectedReview] = useState();
  const [selectedId, setSelectedId] = useState();

  const reviews = data?.data;
  const paging = data?.paging;

  return (
    <ProfileLayout>
      <div className="grid w-full gap-4">
        {isError && error.response.status === 404 ? (
          <span className="block text-center capitalize">
            {error.response.data.errors}
          </span>
        ) : isPending ? (
          Array.from({ length: 4 }).map((result) => (
            <ReviewSkeleton key={result} />
          ))
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 border rounded-md border-primary"
            >
              <span className="block pb-2">
                {dateFormat(review.created_at)}
              </span>
              <div className="flex gap-4 pt-3 border-t border-primary">
                <ModalImage image={review.product_image} />
                <div className="flex justify-between w-full">
                  <div className="grid gap-1">
                    <Link
                      to={`/product/${review.product_id}`}
                      className="font-bold"
                    >
                      {review.product_name}
                    </Link>
                    <Rating rating={review.rating} />
                  </div>
                  <ButtonActions
                    onEdit={() => {
                      setSelectedReview(review);
                      modal("Modal_Edit_Review").open();
                    }}
                    onRemove={() => {
                      setSelectedId(review.id);
                      modal("Remove_Modal_Review").open();
                    }}
                  />
                  <UpdateReviewModal review={selectedReview} />
                  <ModalRemove
                    id={selectedId}
                    onRemove={useRemoveReview}
                    title={"Review"}
                  />
                </div>
              </div>
            </div>
          ))
        )}
        {paging?.total_page > 1 && <Pagination paging={paging} />}
      </div>
    </ProfileLayout>
  );
};

export default ReviewPage;
