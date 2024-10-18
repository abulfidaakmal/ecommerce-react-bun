import { useEffect, useRef, useState } from "react";

const ReadMore = ({ children, maxLines = 6 }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [isOverflow, setIsOverflow] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const computedStyle = window.getComputedStyle(textRef.current);
    const lineHeightValue = parseInt(computedStyle.lineHeight, 10);
    setLineHeight(lineHeightValue);

    if (textRef.current.scrollHeight > lineHeightValue * maxLines) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  }, [children, maxLines]);

  return (
    <div>
      <span
        ref={textRef}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: isReadMore && isOverflow ? maxLines : "unset",
          maxHeight:
            isReadMore && isOverflow ? `${lineHeight * maxLines}px` : "none",
        }}
      >
        {children}
      </span>
      {isOverflow && (
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="text-blue-600"
        >
          {isReadMore ? "Read more" : "Show less"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
