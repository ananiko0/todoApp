import Randomstring from "randomstring";

const initialTasks = [
  {
    title: "send emergency list",
    description: "need a lot of things to do one things second thing and so on",
    date: new Date("2023-02-28"),
    list: "work",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    title: "call Lily's personal asistant",
    description:
      "need to learn more information about where the order meeting is taking place",
    date: new Date("2023-02-28"),
    list: "work",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    title: "leave message for dobby",
    description: "dobby needs a reminder that he doesn't have a master",
    date: new Date("2023-03-01"),
    completed: false,
    id: Randomstring.generate(),
  },
  {
    title: "give dobby a sock",
    description: "",
    date: new Date("2023-03-02"),
    list: "personal",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    title: "army practice",
    description: "",
    date: new Date("2023-03-02"),
    list: "personal",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
  {
    title: "army practice",
    description: "",
    date: new Date("2023-04-02"),
    list: "personal",
    completed: false,
    color: "rgb(252 157 157)",
    id: Randomstring.generate(),
  },
];

export default initialTasks;
