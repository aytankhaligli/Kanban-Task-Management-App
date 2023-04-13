import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import randomColor from "randomcolor";

export default function Column({ name, tasks }) {
  const theme = useSelector((state) => state.theme.value);
  let color = randomColor();
  // console.log(color);
  return (
    <div className="flex flex-col mt-8">
      <div className="flex gap-3 items-center mb-8">
        <div className={`w-4 h-4 rounded-full bg-[${color}]`}></div>
        <h1 className="text-grey-medium ">
          {name} ({tasks.length})
        </h1>
      </div>

      <div className="">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
}
