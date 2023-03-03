import Randomstring from "randomstring";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const thisWeek = new Date(today);
thisWeek.setDate(thisWeek.getDate() + 4);

const initialTasks = [
  {
    title: "send emergency list",
    description: "need a lot of things to do one things second thing and so on",
    date: today,
    list: "personal",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    title: "call Lily's personal asistant",
    description:
      "need to learn more information about where the order meeting is taking place",
    date: today,
    list: "work",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    title: "leave message for dobby",
    description: "dobby needs a reminder that he doesn't have a master",
    date: tomorrow,
    completed: false,
    id: Randomstring.generate(),
  },
  {
    title: "give dobby a sock",
    description: "",
    date: tomorrow,
    list: "personal",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    title: "army practice",
    description: "",
    date: thisWeek,
    list: "personal",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    title: "army practice",
    description: "",
    date: thisWeek,
    list: "personal",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
];

export default initialTasks;
