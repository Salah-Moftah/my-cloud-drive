const DropdownItem = ({
  icon,
  title,
  shortcut,
  arrow,
  onClick,
  fileInputRef,
  onFileChange,
}) => {
  return (
    <div
      onClick={onClick}
      className="px-[14px] py-[5px] text-sm flex items-center justify-between cursor-pointer hover:bg-[#f1f3f4]"
    >
      <div className="flex items-center gap-[13px] text-[14px] text-gray-3">
        {icon}
        <span className="title">{title}</span>
        {fileInputRef && (
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={onFileChange}
          />
        )}
      </div>
      {shortcut && <span className="text-[11px]">{shortcut}</span>}
      {arrow && <span className="text-[18px]">{arrow}</span>}
    </div>
  );
};

export default DropdownItem;
