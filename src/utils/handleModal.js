export const modal = (modalId) => {
  const handleOpen = () => {
    document.getElementById(modalId).showModal();
  };

  const handleClose = () => {
    document.getElementById(modalId).close();
  };

  return {
    open: handleOpen,
    close: handleClose,
  };
};
