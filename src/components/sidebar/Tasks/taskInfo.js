import {
  HiOutlineChevronDoubleRight,
  HiOutlineListBullet,
  HiOutlineCalendarDays,
  HiPaperClip,
} from "react-icons/hi2";

const taskInfo = [
  {
    icon: <HiOutlineChevronDoubleRight />,
    name: "Upcoming",
    path: "/upcoming",
  },
  { icon: <HiOutlineListBullet />, name: "Today", path: "/today" },
  {
    icon: <HiOutlineCalendarDays />,
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: <HiPaperClip />,
    name: "Sticky Wall",
    path: "/sticky-wall",
  },
];

export default taskInfo;
