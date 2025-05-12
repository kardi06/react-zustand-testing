import { useMemo } from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
// import { shallow } from "zustand/shallow";

export default function Column({ state }) {
  // const tasks = useStore(
  //   (store) => store.tasks.filter((task) => task.state === state),
  //   shallow
  // );
  const tasks = useStore((store) => store.tasks);
  const filtered = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  return (
    <div className="column">
      <p>{state}</p>
      {filtered.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}
