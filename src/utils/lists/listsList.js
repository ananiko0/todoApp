import { WiMoonFull } from "react-icons/wi";
import Randomstring from "randomstring";

const listInfoDefault = [
  {
    // icon: <WiMoonFull style={{ color:  }} />,
    name: "Personal",
    path: "/me/lists/personal",
    color: "rgb(241, 211, 101)",
    id: Randomstring.generate(),
  },
  {
    // icon: <WiMoonFull style={{ color: this.color }} />,
    name: "Work",
    path: "/me/lists/work",
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    // icon: <WiMoonFull style={{ color: this.color }} />,
    name: "Groceries",
    path: "/me/lists/groceries",
    color: "rgb(91, 191, 222)",
    id: Randomstring.generate(),
  },
];

const listInfoInitial = listInfoDefault.map((item) =>
  Object.assign(item, { icon: <WiMoonFull style={{ color: item.color }} /> })
);

export default listInfoInitial;
