import React from "react";

function Toast({ onAction, closeToast, text, buttonText }) {
  const handleClick = (event) => {
    event.preventDefault();
    onAction();
    closeToast();
  };

  return (
    <div>
      <h3>
        {text} <button onClick={handleClick}>{buttonText}</button>
      </h3>
    </div>
  );
}

export default Toast;
