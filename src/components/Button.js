import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = "button";
  const renderButton = () => (
    <button>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  return renderButton();
};

export default Button;
