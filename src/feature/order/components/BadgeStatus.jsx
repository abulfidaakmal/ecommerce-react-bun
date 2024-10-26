const BadgeStatus = ({ status }) => {
  return (
    <div
      className={`text-sm font-bold badge mb-1 ${
        status === "CANCELLED" || status === "CANCELLEDBYSELLER"
          ? "badge-error"
          : status === "COMPLETED" || status === "DELIVERED"
          ? "badge-success"
          : "badge-neutral"
      }`}
    >
      {status}
    </div>
  );
};

export default BadgeStatus;
