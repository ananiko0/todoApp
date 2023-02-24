import { WiMoonFull } from "react-icons/wi";
import { HiPlusCircle } from "react-icons/hi2";

const listInfo = [
  {
    icon: <WiMoonFull style={{ color: "rgb(241, 211, 101)" }} />,
    name: "Personal",
    path: "/personal",
  },
  {
    icon: <WiMoonFull style={{ color: "rgb(252 157 157)" }} />,
    name: "Work",
    path: "/work",
  },
  {
    icon: <WiMoonFull style={{ color: "rgb(91, 191, 222)" }} />,
    name: "Groceries",
    path: "/groceries",
  },
  /*
  {
    icon: <HiPlusCircle style={{ color: "rgba(73, 73, 74, 0.505)" }} />,
    name: "Add New List",
    path: "/new-list",
  },
  */
];
export default listInfo;
