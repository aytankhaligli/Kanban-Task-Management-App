import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/features/modal/modalSlice";
import cross_icon from "../assets/icon-cross.svg";

export default function AddBoardModal() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

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
      <div
        className={`w-[480px] ${
          theme ? "bg-white" : "bg-grey-dark"
        }  p-8 rounded-md`}
      >
        <h1
          className={`${
            theme ? "text-black" : "text-white"
          } text-lg leading-6 mb-6`}
        >
          Add New Board
        </h1>
        <form className="flex flex-col">
          <label
            className={`text-xs ${
              theme ? "text-grey-medium" : "text-white"
            } mb-2`}
          >
            Name
          </label>
          <input
            type="text"
            placeholder="e.g. Web Design"
            className={`mb-6 border border-grey-medium  rounded px-4 py-2 placeholder:text-[13px] placeholder:font-medium font-medium ${
              theme ? "bg-white" : "bg-grey-dark"
            }`}
          />

          <label
            className={`text-xs ${
              theme ? "text-grey-medium" : "text-white"
            } mb-2`}
          >
            Columns
          </label>
          <div className="flex items-center  gap-4">
            <input
              type="text"
              className={`border border-grey-medium rounded px-4 py-2 w-full font-medium ${
                theme ? "bg-white" : "bg-grey-dark"
              }`}
            />
            <img src={cross_icon} alt="cross icon" />
          </div>
          <button
            className={`${
              theme ? "bg-[#635FC71A]" : "bg-white"
            } mt-3 h-10 rounded-full text-[13px] text-purple-main`}
          >
            +Add New Column
          </button>
          <button
            type="submit"
            className="bg-purple-main mt-3 h-10 rounded-full text-[13px] text-white"
          >
            Create New Board
          </button>
        </form>
      </div>
    </div>
  );
}
