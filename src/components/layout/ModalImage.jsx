const ModalImage = ({ image }) => {
  return (
    <>
      <label htmlFor="Modal_Image" className="cursor-pointer hover:opacity-75">
        <img src={image} className="inline w-24 rounded-md" />
      </label>
      <input type="checkbox" id="Modal_Image" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <img src={image} className="rounded-2xl" />
        </div>
        <label className="modal-backdrop" htmlFor="Modal_Image">
          Close
        </label>
      </div>
    </>
  );
};

export default ModalImage;
