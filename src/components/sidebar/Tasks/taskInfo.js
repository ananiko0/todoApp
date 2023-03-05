import {
  HiOutlineChevronDoubleRight,
  HiOutlineListBullet,
  HiOutlineCalendarDays,
  HiPaperClip,
} from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";

const taskInfo = [
  {
    icon: <FaTasks style={{ color: "black" }} />,
    name: "All Tasks",
    path: "/me/all-tasks",
  },
  {
    icon: <HiOutlineChevronDoubleRight style={{ color: "black" }} />,
    name: "Upcoming",
    path: "/me/upcoming",
  },
  {
    icon: <HiOutlineListBullet style={{ color: "black" }} />,
    name: "Today",
    path: "/me/today",
  },
  {
    icon: <HiOutlineCalendarDays style={{ color: "black" }} />,
    name: "Calendar",
    path: "/me/calendar",
  },
  {
    icon: <HiPaperClip style={{ color: "black" }} />,
    name: "Sticky Wall",
    path: "/me/sticky-wall",
  },
  {
    icon: <BiSelectMultiple style={{ color: "black" }} />,
    name: "Completed",
    path: "/me/completed",
  },
];

export default taskInfo;
