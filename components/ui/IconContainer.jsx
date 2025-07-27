"use client";
import styles from '@/styles/IconContainer.module.css';

const IconContainer = ({
  children,
  bgColor,
  opacity,
  outlineActive = false,
  transition,
  size = "40px",
  className = "",
  onClick,
}) => {
  const styleVars = {
    "--bg-color": bgColor,
    "--opacity": opacity,
    "--transition": transition,
    "--outline": outlineActive ? "1px solid var(--brand-sky-blue)" : "none",
    width: size,
    height: size,
  };

  return (
    <div
      className={`${styles.icon} ${className}`}
      tabIndex={0}
      role="button"
      style={styleVars}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconContainer;
