import Randomstring from "randomstring";

const listInfoInitial = [
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

export default listInfoInitial;
