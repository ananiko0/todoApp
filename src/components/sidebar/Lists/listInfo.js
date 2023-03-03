import { WiMoonFull } from "react-icons/wi";

const listInfoDefault = [
  {
    // icon: <WiMoonFull style={{ color:  }} />,
    name: "Personal",
    path: "/me/personal",
    color: "rgb(241, 211, 101)",
  },
  {
    // icon: <WiMoonFull style={{ color: this.color }} />,
    name: "Work",
    path: "/me/work",
    color: "rgb(252 157 157)",
  },
  {
    // icon: <WiMoonFull style={{ color: this.color }} />,
    name: "Groceries",
    path: "/me/groceries",
    color: "rgb(91, 191, 222)",
  },
];

const listInfo = listInfoDefault.map((item) =>
  Object.assign(item, { icon: <WiMoonFull style={{ color: item.color }} /> })
);

export default listInfo;
