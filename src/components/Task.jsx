import React from "react";
import { useStore } from "../store";
import "./Task.css";
import classNames from "classnames";
import trash from "../assets/trash-2.svg";

// const STATUS = "ONGOING";
export default function Task({ title }) {
  const task = useStore((store) => store.tasks.find((task) => task.title === title));
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <div className="task" draggable onDragStart={() => setDraggedTask(task.title)}>
      <div>{title}</div>
      <div className="bottomwrapper">
        <div>
          <img src={trash} onClick={() => deleteTask(task.title)}/>
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
