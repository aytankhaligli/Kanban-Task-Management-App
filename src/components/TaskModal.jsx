import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/features/modal/modalSlice";

export default function TaskModal() {
  const { currentTask } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  console.log(currentTask);
  const close = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center"
      onClick={close}
    >
      <div className="w-[480px] bg-white p-8 rounded-md">
        <h1 className="text-black text-lg leading-6 mb-8">
          {currentTask.title}
        </h1>
        <p className="text-grey-medium font-medium leading-6 mb-8">
          {currentTask.description}
        </p>
        <div>
          <h2 className="text-xs text-grey-medium mb-4">
            Subtasks (
            {currentTask.subtasks.filter((sub) => sub.isCompleted === true)
              .length +
              " of " +
              currentTask.subtasks.length}
            )
          </h2>
          <ul className="flex flex-col gap-2 rounded mb-8">
            {currentTask.subtasks.map((sub) => (
              <li className="flex bg-grey-light p-3 gap-4">
                <input
                  type="checkbox"
                  checked={sub.isCompleted}
                  onChange={() => (sub.isCompleted = !sub.isCompleted)}
                />
                <p
                  className={`${
                    sub.isCompleted ? "opacity-50 line-through" : ""
                  }`}
                >
                  {sub.title}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-grey-medium mb-2">Current Status</p>
          <select className="w-full border px-4 py-2 border-grey-light rounded font-medium text-[13px] ">
            <option>Doing</option>
            <option>Done</option>
            <option>Todo</option>
          </select>
        </div>
      </div>
    </div>
  );
}
