import {
  HiOutlineChevronDoubleRight,
  HiOutlineListBullet,
  HiOutlineCalendarDays,
  HiPaperClip,
} from "react-icons/hi2";

const taskInfo = [
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
];

export default taskInfo;
