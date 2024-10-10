import Table from "@components/layout/Table.jsx";
import { currencyFormat } from "../../../utils/currencyFormat.js";
import { dateFormat } from "../../../utils/dateFormat.js";
import { useGetProduct } from "../hooks/useGetProduct.js";
import ButtonActions from "@components/element/ButtonActions.jsx";
import { modal } from "../../../utils/handleModal.js";
import ModalRemove from "@components/layout/ModalRemove.jsx";
import { useRemoveProduct } from "../hooks/useRemoveProduct.js";
import { useLocation } from "react-router-dom";
import ProductUpdate from "./ProductUpdate.jsx";
import { useState } from "react";
import ProductSkeleton from "./ProductSkeleton.jsx";

const ProductList = () => {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page");
  const search = new URLSearchParams(location.search).get("search");

  const { data, isError, error, isPending } = useGetProduct(page, search);
  const [seledtId, setSeledtId] = useState();

  if (isError && error.response.status === 404) {
    return (
      <span className="block text-center capitalize">
        {error.response.data.errors}
      </span>
    );
  }

  return (
    <Table
      colName={[
        "Name",
        "Category",
        "Price",
        "Stock",
        "Created At",
        "Status",
        "Action",
      ]}
      paging={data?.paging}
    >
      {isPending ? (
        <ProductSkeleton />
      ) : (
        data.data.map((result) => (
          <tr key={result.id}>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 h-12 mask mask-squircle">
                    <img src={result.image_url} alt={result.name} />
                  </div>
                </div>
                <div className="font-bold">{result.name}</div>
              </div>
            </td>
            <td>{result.category_name}</td>
            <td>{currencyFormat(result.price)}</td>
            <td>{result.stock}</td>
            <td>{dateFormat(result.created_at)}</td>
            <td>{result.isDeleted ? "Deleted" : "Publish"}</td>
            <td>
              <ButtonActions
                onView={`/product/${result.id}`}
                onEdit={() => {
                  setSeledtId(result.id);
                  modal("Modal_Edit_Product").open();
                }}
                onRemove={() => {
                  setSeledtId(result.id);
                  modal("Remove_Modal_Product").open();
                }}
              />
              <ModalRemove
                id={seledtId}
                title={"Product"}
                onRemove={useRemoveProduct}
              />
              <ProductUpdate id={seledtId} />
            </td>
          </tr>
        ))
      )}
    </Table>
  );
};

export default ProductList;
