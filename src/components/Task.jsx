import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTask } from "../redux/features/task/taskSlice";
import { openModal } from "../redux/features/modal/modalSlice";
import TaskModal from "./TaskModal";

export default function Task({ task }) {
  const theme = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();
  const viewTask = (e) => {
    e.stopPropagation();
    e.target = e.currentTarget;
    const taskCurrent =
      e.target.firstChild.textContent === task.title ? task : "";
    dispatch(setCurrentTask(taskCurrent));
    dispatch(openModal("viewTask"));
  };

  return (
    <div
      className={`w-[280px] px-4 py-6  shadow-md rounded-lg mb-5 cursor-pointer ${
        theme ? "bg-white" : "bg-grey-dark"
      }`}
      onClick={viewTask}
    >
      <p className={` ${theme ? "text-black" : "text-white"} mb-2`}>
        {task.title}
      </p>
      <p className="text-grey-medium text-xs">
        {task.subtasks.filter((t) => t.isCompleted === true).length +
          " of " +
          task.subtasks.length}
      </p>
    </div>
  );
}
