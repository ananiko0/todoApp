import React, { useContext, useState } from "react";
import { WiMoonFull } from "react-icons/wi";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import TasksContext from "../store/TasksContext";
import { displayDate } from "../utils/DateFunctions";
import Task from "../components/Tasks/Task";
import MainContainer from "../components/UI/Container/MainContainer";
import ColorInputs from "../components/UI/Input/ColorInputs";
import TaskSlider from "../components/Tasks/TaskSlider";
import useSlider from "../hooks/useSlider";
import ListContext from "../store/ListContext";
import useBoolean from "../hooks/useBoolean";

function List(props) {
  //get task context, params and set state
  const showColorInput = useBoolean(false);
  const { boolean, toggleHandler } = useSlider(false);
  let { listName } = useParams();
  const { tasks } = useContext(TasksContext);
  const { lists, updateColor } = useContext(ListContext);

  //get location and navigation for reloading when color is changed
  const navigate = useNavigate();
  const location = useLocation();

  //get color of the lsit
  const color = lists.filter((list) => list.name.toLowerCase() === listName)[0]
    .color;

  //filter tasks that are completed or trashed
  const tasksUncompleted = tasks
    .filter((task) => !task.completed)
    .filter((task) => !task.trashed);

  //filter task by listname
  const tasksFiltered = tasksUncompleted.filter(
    (task) => task.list === listName
  );

  //color
  const [chosenColor, setChosenColor] = useState("#ffdada");
  const changeColorHandler = (event) => {
    setChosenColor(event.target.value);
    updateColor(event.target.value, listName);
  };
  const changeListColorHandler = () => {
    showColorInput.toggle();
    if (showColorInput.boolean) {
      navigate(location.pathname);
    }
  };

  //render tasks
  const tasksRendered = tasksFiltered.map((item) => (
    <Task
      name={item.title}
      id={item.id}
      text={item.description}
      date={displayDate(item.date)}
      dateValue={item.date}
      listName={item.list}
      ListNameNotVisible={true}
      color={item.color}
      key={item.id}
    />
  ));

  return (
    <div>
      <MainContainer
        title={
          <div style={{ cursor: "pointer" }} onClick={changeListColorHandler}>
            <WiMoonFull color={color} /> {listName}
          </div>
        }
        slider={<TaskSlider boolean={boolean} toggleHandler={toggleHandler} />}
        boolean={boolean}
        toggleHandler={toggleHandler}
      >
        {showColorInput.boolean && (
          <ColorInputs onChange={changeColorHandler} value={chosenColor} />
        )}
        {tasksRendered}
      </MainContainer>
    </div>
  );
}

export default List;
