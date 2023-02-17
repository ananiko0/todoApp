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
    path: "/upcoming",
  },
  {
    icon: <HiOutlineListBullet style={{ color: "black" }} />,
    name: "Today",
    path: "/today",
  },
  {
    icon: <HiOutlineCalendarDays style={{ color: "black" }} />,
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: <HiPaperClip style={{ color: "black" }} />,
    name: "Sticky Wall",
    path: "/sticky-wall",
  },
];

export default taskInfo;
