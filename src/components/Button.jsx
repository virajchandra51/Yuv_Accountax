import React from "react";

const Button = ({ type = "primary", icon, label, onClick }) => {
  const baseClasses =
    "px-4 py-3 inline-flex items-center justify-center rounded-[6px]";
  const typeClasses =
    type === "primary"
      ? "cursor-pointer transition-all ease-in-out duration-400 bg-[var(--color-2)] text-[var(--color-1)] hover:bg-[var(--color-1)] hover:text-[var(--color-4)]"
      : type === "secondary"
      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
      : "";
  return (
    <button
      className={`${baseClasses} ${typeClasses}`}
      onClick={onClick}
    >
      <span
        className={`flex items-center justify-center text-[14px] font-medium ${
          icon ? "gap-[2.5rem]" : ""
        }`}
      >
        {label}
        {icon && <span>{icon}</span>}
      </span>
    </button>
  );
};

export default Button;
