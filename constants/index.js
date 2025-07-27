import {
  MdCloud,
  MdDriveFolderUpload,
  MdHome,
  MdOutlineAccessTime,
  MdOutlineCreateNewFolder,
  MdOutlineHome,
  MdOutlineStar,
  MdOutlineStarBorder,
  MdPeopleAlt,
  MdUploadFile,
} from "react-icons/md";
import { RiArrowRightSFill, RiDriveFill, RiDriveLine } from "react-icons/ri";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiSpam2Line } from "react-icons/ri";
import { RiSpam2Fill } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";
import { MdOutlineCloud } from "react-icons/md";

export const sidebarList = [
  {
    id: 1,
    name: "Home",
    iconName: "home",
    spaceTop: false,
    activeIcon: <MdHome size={23} />,
    notActiveIcon: <MdOutlineHome size={23} />,
    visibileArrow: false,
  },
  {
    id: 2,
    name: "My Drive",
    iconName: "folder",
    spaceTop: false,
    activeIcon: <RiDriveFill size={21} />,
    notActiveIcon: <RiDriveLine size={21} />,
    visibileArrow: true,
  },
  {
    id: 3,
    name: "Computers",
    iconName: "cpu",
    spaceTop: false,
    activeIcon: <MdOutlineLaptopChromebook size={21} />,
    notActiveIcon: <MdOutlineLaptopChromebook size={21} />,
    visibileArrow: true,
  },
  {
    id: 4,
    name: "Shared with Me",
    iconName: "share",
    spaceTop: true,
    activeIcon: <MdPeopleAlt size={21} />,
    notActiveIcon: <MdOutlinePeopleAlt size={21} />,
    visibileArrow: false,
  },
  {
    id: 5,
    name: "Recent",
    iconName: "clock",
    spaceTop: false,
    activeIcon: <MdOutlineAccessTimeFilled size={21} />,
    notActiveIcon: <MdOutlineAccessTime size={21} />,
    visibileArrow: false,
  },
  {
    id: 6,
    name: "Starred",
    iconName: "star",
    spaceTop: false,
    activeIcon: <MdOutlineStar size={21} />,
    notActiveIcon: <MdOutlineStarBorder size={21} />,
    visibileArrow: false,
  },
  {
    id: 7,
    name: "Spam",
    iconName: "alert-circle",
    spaceTop: true,
    activeIcon: <RiSpam2Fill size={21} />,
    notActiveIcon: <RiSpam2Line size={21} />,
    visibileArrow: false,
  },
  {
    id: 8,
    name: "Trash",
    iconName: "trash",
    spaceTop: false,
    activeIcon: <HiTrash size={21} />,
    notActiveIcon: <HiOutlineTrash size={21} />,
    visibileArrow: false,
  },
  {
    id: 9,
    name: "Storage",
    iconName: "database",
    spaceTop: false,
    activeIcon: <MdCloud size={21} />,
    notActiveIcon: <MdOutlineCloud size={21} />,
    visibileArrow: false,
  },
];

export const sidePanelIcons = [
  {
    id: 1,
    name: "Google_Calenda",
    h4: "Calenda",
    h2: "Thr, Jul 14",
    icon: "/imgs/Google_Calenda.svg.png",
    colorBackground: "blue",
  },
  {
    id: 2,
    name: "Google_Keep",
    h4: "Keep",
    h2: "Notes",
    icon: "/imgs/Google_Keep.svg.png",
    colorBackground: "yellow",
  },
  {
    id: 3,
    name: "Google_Tasks",
    h4: "Tasks",
    h2: "ToDo",
    icon: "/imgs/Google_Tasks_2021.svg.png",
    colorBackground: "blue",
  },
  {
    id: 4,
    name: "Google_Contacts",
    h4: "",
    h2: "Contacts",
    icon: "/imgs/Google_Contacts_icon_(2022).svg",
    colorBackground: "blue",
  },
];

export const filterList = [
  { id: 1, name: "Type" },
  { id: 2, name: "People" },
  { id: 3, name: "Modified" },
  { id: 4, name: "Source" },
];

export const sortOptions = [
  { key: "name", label: "Name" },
  { key: "date", label: "Last Modified" },
  { key: "bytes", label: "File Size" },
];

export const dropdownItems = [
  {
    icon: <MdOutlineCreateNewFolder className="w-[20px] h-[20px]" />,
    title: "New folder",
    shortcut: "Alt+C then F",
  },
  { type: "divider" },
  {
    id: "file-upload",
    icon: <MdUploadFile className="w-[20px] h-[20px]" />,
    title: "File upload",
    shortcut: "Alt+C then U",
  },
  {
    icon: <MdDriveFolderUpload className="w-[20px] h-[20px]" />,
    title: "Folder upload",
    shortcut: "Alt+C then I",
  },
  { type: "divider" },
  {
    icon: <img src="/imgs/txt.png" className="w-[20px] h-[20px]" />,
    title: "Google Docs",
    arrow: <RiArrowRightSFill />,
  },
  {
    icon: <img src="/imgs/sheets.png" className="w-[20px] h-[20px]" />,
    title: "Google Sheets",
    arrow: <RiArrowRightSFill />,
  },
  {
    icon: <img src="/imgs/slides.png" className="w-[20px] h-[20px]" />,
    title: "Google Slides",
    arrow: <RiArrowRightSFill />,
  },
  {
    icon: <img src="/imgs/forms.png" className="w-[20px] h-[20px]" />,
    title: "Google Forms",
    arrow: <RiArrowRightSFill />,
  },
  {
    icon: <div className="w-[20px] h-[20px]" />,
    title: "More",
    arrow: <RiArrowRightSFill />,
  },
];
