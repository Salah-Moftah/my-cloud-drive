'use client';

import { useState, useRef } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
import { formatFileSize } from "@/utils/formatFileSize";
import formattedDate from "@/utils/formattedDate";
import { getFileIcon } from "@/utils/getFileIcon";
import { useSortData } from "@/hooks/useSortData";
import { MdSort } from "react-icons/md";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { useFiles } from "@/contexts/GetFilesContext";
import { FaCheck } from "react-icons/fa6";
import toast from "react-hot-toast";
import { sortOptions } from "@/constants";
import { IconContainer } from "@/components";
import { useClickOutSide } from "@/hooks/useClickOutside";


const ContentTable = ({ files }) => {
  const { setFiles } = useFiles();
  const [selectedRowId, setSelectedRowId] = useState(null);
  const {
    items: sortedFiles,
    requestSort,
    sortConfig,
  } = useSortData(files, {
    key: "name",
    direction: "asc",
  });

  const [sortMenuVisible, setSortMenuVisible] = useState(false);

  const handleSortOption = (key) => {
    requestSort(key);
    setSortMenuVisible(false);
  };

  const tableRef = useRef();

  useClickOutSide(tableRef, () => {
    setSortMenuVisible(false);
    setSelectedRowId(null);
  })

  const handleSort = (type) => requestSort(type);

  const getSortIcon = (type) => {
    if (sortConfig.key !== type) return null;
    return sortConfig.direction === "asc" ? <IoMdArrowUp /> : <IoMdArrowDown />;
  };

  const toggleStar = async (id) => {
    const res = await fetch(`/api/toggle-star?id=${id}`, {
      method: "PATCH",
    });

    if (res.ok) {
      const updated = await res.json();
      setFiles((prev) =>
        prev.map((file) =>
          file._id === id ? { ...file, isStarred: updated.isStarred } : file
        )
      );
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/delete?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setFiles((prev) => prev.filter((file) => file._id !== id));
      toast.success("The file was deleted successfully.");
    } else {
      toast.error("Failed to delete file");
    }
  };

  return (
    <div className="w-full overflow-x-auto pl-[30px] pt-[13px] pr-[10px] pb-[20px]" ref={tableRef}>
      <table className="drive-table">
        <thead>
          <tr>
            <th className="name-col" onClick={() => handleSort("name")}>
              <span className="header-name font-semibold text-gray-3 text-sm hover-overlay-bg overflow-hidden relative px-3 py-2.5 before:rounded-5">Name</span>
              <IconContainer>
                {getSortIcon("name")}
              </IconContainer>
            </th>
            <th className="owner-col hide-on-small">
              <span className="header-name font-semibold text-gray-3 text-sm overflow-hidden relative">Owner</span>
            </th>
            <th
              className="date-col hide-on-medium"
              onClick={() => handleSort("date")}
            >
              <span className="header-name font-semibold text-gray-3 text-sm hover-overlay-bg overflow-hidden relative px-3 py-2.5 before:rounded-5">Last Modified</span>
              <IconContainer>
                {getSortIcon("date")}
              </IconContainer>
            </th>
            <th className="size-col hide-on-large">
              <span className="header-name font-semibold text-gray-3 text-sm relative px-3 py-2.5 ">File Size</span>
            </th>
            <th
              className="sort-col hide-on-large"
              style={{ position: "relative" }}
            >
              <div
                className="sorting"
                onClick={() => setSortMenuVisible((prev) => !prev)}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center font-semibold text-gray-3 text-sm hover-overlay-bg overflow-hidden relative px-3 py-2.5 before:rounded-5">
                  <MdSort />
                  <span className="header-name">Sort</span>
                </div>
              </div>

              {sortMenuVisible && (
                <div
                  className="sort-dropdown"
                  ref={tableRef}
                  
                >
                  {sortOptions.map((option) => (
                    <div
                      key={option.key}
                      className="sort-option"
                      onClick={() => handleSortOption(option.key)}
                    >
                      {sortConfig.key === option.key ? (
                        <span>
                          <FaCheck size={23} />
                        </span>
                      ) : (
                        <span
                          style={{ width: "16px", marginRight: "8px" }}
                        ></span>
                      )}
                      <span style={{padding: '5px 0'}}>{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedFiles.map((file) => (
            <tr
              key={file._id}
              className={`row-hover-actions ${
                selectedRowId === file._id ? "selected-row" : "hover:bg-gray-200"
              } hover:bg-[#1f1f1f14]`}
              onClick={() =>
                setSelectedRowId((prev) =>
                  prev === file._id ? null : file._id
                )
              }
            >
              <td>
                <div className="flex items-center">
                  <img
                    src={getFileIcon(file.name)}
                    alt="file icon"
                    className="file-icon"
                  />
                  <span className="flex text-[16px] items-center">
                    {file.name}
                    {file.isStarred && (
                      <MdOutlineStar
                        size={14}
                        style={{ marginLeft: "10px", opacity: "0.8" }}
                      />
                    )}
                  </span>

                </div>
              </td>
              <td className="owner-col hide-on-small">
                <div className="owner-box">
                  <img
                    className="owner-img"
                    src="/imgs/avatar.png"
                    alt="avatar"
                  />
                  <span>me</span>
                </div>
              </td>
              <td className="date-col hide-on-medium">
                {formattedDate(file, true)}
              </td>
              <td className="size-col hide-on-large">
                {formatFileSize(file.bytes || 0)}
              </td>
              <td className="dots-col hide-on-large">
                <div className="more-actions">
                  <div className="download">
                    <IconContainer>
                      <FiDownload size={18} />
                    </IconContainer>
                  </div>
                  <div
                    className="star"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStar(file._id);
                    }}
                  >
                    <IconContainer>
                      {file.isStarred ? (
                        <MdOutlineStar size={18} />
                      ) : (
                        <MdOutlineStarBorder size={18} />
                      )}
                    </IconContainer>
                  </div>
                  <div
                    className="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(file._id);
                    }}
                  >
                    <IconContainer color="red">
                      <RiDeleteBin6Line size={18} />
                    </IconContainer>
                  </div>
                </div>
                <div className="dots">
                  <IconContainer>
                    <BiDotsVerticalRounded size={18} />
                  </IconContainer>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
