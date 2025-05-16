import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1400px] px-[60px] mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
