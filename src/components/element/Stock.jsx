import { Minus, Plus } from "lucide-react";

const Stock = ({ stock, quantity, setQuantity }) => {
  const handleChange = (event) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= stock) {
      setQuantity(value);
    } else if (value > stock) {
      setQuantity(stock);
    }
  };

  return (
    <div className="border join border-primary">
      <button
        className="join-item btn btn-sm"
        onClick={() => setQuantity((curr) => Math.max(curr - 1, 1))}
        disabled={quantity === 1}
      >
        <Minus size={14} />
      </button>
      <label className="join-item btn btn-sm">
        <input
          type="text"
          className="w-auto h-full text-center bg-transparent outline-none min-w-4"
          value={quantity}
          onChange={handleChange}
          style={{
            width: `${(quantity.toString().length + 1) * 8}px`,
          }}
        />
      </label>
      <button
        className="join-item btn btn-sm"
        onClick={() => setQuantity((curr) => Math.min(curr + 1, stock))}
        disabled={quantity === stock}
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default Stock;
