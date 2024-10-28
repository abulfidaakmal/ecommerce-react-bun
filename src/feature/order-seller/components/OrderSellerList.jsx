import Table from "@components/layout/Table.jsx";
import { currencyFormat } from "../../../utils/currencyFormat";
import { dateFormat } from "../../../utils/dateFormat";
import ButtonActions from "@components/element/ButtonActions.jsx";
import { modal } from "../../../utils/handleModal";
import { useState } from "react";
import OrderSellerFormUpdate from "./OrderSellerFormUpdate";
import OrderSellerSkeleton from "./OrderSellerSkeleton";

const OrderSellerList = ({ isPending, data }) => {
  const [selectId, setSelectId] = useState();

  return (
    <>
      <Table
        colName={[
          "Name",
          "Buyer",
          "Price",
          "Quantity",
          "Status",
          "Created At",
          "Action",
        ]}
        paging={data?.paging}
      >
        {isPending ? (
          <OrderSellerSkeleton />
        ) : (
          data.data.map((result) => (
            <tr key={result.order.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src={result.product.image_url}
                        alt={result.product.name}
                      />
                    </div>
                  </div>
                  <div className="font-bold">{result.product.name}</div>
                </div>
              </td>
              <td>{result.order.customer}</td>
              <td>{currencyFormat(result.order.price)}</td>
              <td>{result.order.quantity}</td>
              <td>{result.order.status}</td>
              <td>{dateFormat(result.order.created_at)}</td>
              <td>
                {["DELIVERED", "COMPLETED"].includes(result.order.status) ? (
                  <ButtonActions
                    onView={`${result.order.id}/products/${result.product.id}`}
                  />
                ) : (
                  <ButtonActions
                    onView={`${result.order.id}/products/${result.product.id}`}
                    onEdit={() => {
                      modal("Modal_Edit_Status").open();
                      setSelectId({
                        orderId: result.order.id,
                        productId: result.product.id,
                      });
                    }}
                  />
                )}
              </td>
            </tr>
          ))
        )}
      </Table>
      <OrderSellerFormUpdate selectId={selectId} />
    </>
  );
};

export default OrderSellerList;
