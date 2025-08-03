import React from "react";

interface SpecialButtonProps {
  text: string;
  style?: React.CSSProperties;
  handleClick?: () => void;
}

const SpecialButton = ({ text, style, handleClick = () => {} }: SpecialButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="capitalize py-2 px-3 rounded-full border-2 border-primary font-medium text-primary my-2"
      style={style}
    >
      {text}
    </button>
  );
};

export default SpecialButton;
