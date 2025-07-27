const BaseButton = ({ name, bgHover = "bg-brand-primary", styles, onClick }) => {
  return (
    <div
      className={`${styles} border border-gray text-brand-primary
        font-medium h-[40px] max-h-[97px] max-w-[213px] min-h-[36px] pb-2 pt-2 text-center w-max 
        rounded-5 px-6 cursor-pointer relative group overflow-hidden`}
      onClick={onClick}
    >
      <span className="relative z-10">{name}</span>
      <span
        className={`
          ${bgHover} 
          group-hover:opacity-[0.08] 
          transition-all duration-200 
          absolute top-0 left-0 w-full h-full 
          pointer-events-none opacity-0 z-0
        `}
      ></span>
    </div>
  );
};


export default BaseButton;
