import React from "react";
import { useStore } from "../store";
import "./Task.css";
import classNames from "classnames";

// const STATUS = "ONGOING";
export default function Task({ title }) {
  const task = useStore((store) => store.tasks.find((task) => task.title === title));
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottomwrapper">
        <div></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
