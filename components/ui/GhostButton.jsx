import React from "react";

const GhostButton = ({ children }) => {
  return (
    <button className="text-sm font-semibold relative hover-bg-brand-primary before:transition-all before:duration-100 rounded-5 overflow-hidden
      py-2.5 px-3 cursor-pointer text-brand-primary opacity-80">
      {children}
    </button>
  );
};

export default GhostButton;
