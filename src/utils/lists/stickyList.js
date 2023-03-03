import colors from "../../utils/colors";
import Randomstring from "randomstring";

const initialNotes = [
  {
    title: "Social Media",
    text: "Plan Content, Create Social media, Plan Distiribution",
    color: colors[0].code,
    id: Randomstring.generate(),
  },
  {
    title: "Content Strategy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer bibendum vehicula estLorem",
    color: colors[1].code,
    id: Randomstring.generate(),
  },
  {
    title: "Social Media",
    text: "Plan Content, Create Social media, Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Plan Distiribution",
    color: colors[2].code,
    id: Randomstring.generate(),
  },
];

export default initialNotes;
