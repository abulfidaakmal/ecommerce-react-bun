const Rating = ({ rating, disabled = false, onChange }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {ratings.map((result) => (
        <input
          key={result}
          type="radio"
          name="rating"
          className="w-4 h-4 bg-orange-400 mask mask-star-2"
          checked={result === rating}
          onChange={() => onChange && onChange(result)}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default Rating;
