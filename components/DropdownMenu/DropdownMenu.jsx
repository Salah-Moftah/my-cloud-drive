"use client";

import {  useEffect, useRef, useState } from "react";
import { DropdownItem } from "@/components";
import { dropdownItems } from "@/constants";
import { useDropdown } from "@/contexts/DropdownMenuContext";
import { useFiles } from "@/contexts/GetFilesContext";
import toast from "react-hot-toast";
import { useClickOutSide } from "@/hooks/useClickOutside";

const DropdownMenu = () => {
  const { isOpen, closeDropdown } = useDropdown();
  const { refreshFiles } = useFiles();
  const menuRef = useRef(null);
  const fileInputRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setTimeout(() => setAnimationClass("open"), 10);
    } else if (visible) {
      setAnimationClass("closing");
      setTimeout(() => setVisible(false), 300);
    }
  }, [isOpen]);

  useClickOutSide(menuRef, () => closeDropdown());

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) toast.error("File upload failed");

      await res.json();
      toast.success("File uploaded successfully");
      await refreshFiles();
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during file upload");
    } finally {
      setUploading(false);
      closeDropdown();
    }
  };

  const triggerFileInput = () => {
    if (!uploading && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (!visible) return null;

  return (
    <div
      ref={menuRef}
      className={`absolute top-[60px] left-4 z-[999] bg-white rounded-md shadow-1 w-[330px] max-h-[954px] py-2 transition-all duration-400 ease-in-out transform ${
        animationClass === "open"
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : animationClass === "closing"
          ? "opacity-0 -translate-y-3 pointer-events-none"
          : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
    >
      {dropdownItems.map((item, idx) =>
        item.type === "divider" ? (
          <hr key={idx} className="my-2 border-t border-gray-300" />
        ) : (
          <DropdownItem
            key={idx}
            icon={item.icon}
            title={
              uploading && item.id === "file-upload"
                ? "Uploading..."
                : item.title
            }
            shortcut={item.shortcut}
            arrow={item.arrow}
            onClick={
              item.id === "file-upload" ? triggerFileInput : item.onClick
            }
            fileInputRef={item.id === "file-upload" ? fileInputRef : null}
            onFileChange={item.id === "file-upload" ? handleFileChange : null}
          />
        )
      )}
    </div>
  );
};

export default DropdownMenu;
