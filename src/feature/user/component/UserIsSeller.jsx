import { useFormik } from "formik";
import ButtonChange from "@components/element/ButtonChange";
import TextArea from "@components/element/TextArea";
import ButtonLoading from "@components/element/ButtonLoading.jsx";
import { modal } from "../../../utils/handleModal.js";
import { useGetSeller } from "../hooks/useGetSeller.js";
import { useUpdateSeller } from "../hooks/useUpdateSeller.js";
import { updateSellerSchema } from "../validation/updateSchema.js";
import SellerAction from "./SellerAction.jsx";
import { useRemoveSeller } from "../hooks/useRemoveSeller.js";
import SellerSkeleton from "./SellerSkeleton.jsx";

const UserIsSeller = () => {
  const { data, isPending } = useGetSeller();
  const { mutate, isPending: isUpdatePending } = useUpdateSeller();

  const formik = useFormik({
    initialValues: {
      name: data?.name,
      description: data?.description,
    },
    validationSchema: updateSellerSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <>
      {isPending ? (
        <SellerSkeleton />
      ) : (
        <>
          <div className="flex gap-8">
            <div className="grid gap-4">
              <span>Name</span>
              <span>Description</span>
            </div>
            <div className="grid gap-4">
              <ButtonChange
                field={"name"}
                formik={formik}
                isLoading={isUpdatePending}
              >
                {data?.name}
              </ButtonChange>
              <div className="flex items-center">
                <div className="overflow-hidden">{data?.description}</div>
                <button
                  role="button"
                  className="ml-2 text-blue-600"
                  onClick={modal("modal_description").open}
                >
                  Change
                </button>
              </div>
              <dialog id={`modal_description`} className="modal">
                <form onSubmit={formik.handleSubmit} className="modal-box">
                  <button
                    type="button"
                    className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                    onClick={modal("modal_description").close}
                  >
                    ✕
                  </button>
                  <h3 className="mb-4 text-lg font-bold">
                    Change your description
                  </h3>
                  <TextArea formik={formik} name={"description"} />
                  <ButtonLoading
                    isError={!formik.isValid}
                    isPending={isUpdatePending}
                  >
                    Save
                  </ButtonLoading>
                </form>
              </dialog>
            </div>
          </div>
          <SellerAction useAction={useRemoveSeller}>Remove Shop</SellerAction>
        </>
      )}
    </>
  );
};

export default UserIsSeller;
