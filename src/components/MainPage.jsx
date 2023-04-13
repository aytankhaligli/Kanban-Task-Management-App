import React, { useEffect, useState } from "react";
import icon_more from "../assets/icon-vertical-ellipsis.svg";
import icon_show from "../assets/icon-show-sidebar.svg";
import logo_dark from "../assets/logo-dark.svg";
import logo_light from "../assets/logo-light.svg";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../redux/features/sidebar/sidebarSlice";
import { getData } from "../redux/features/data/dataSlice";
import Column from "./Column";

export default function MainPage() {
  const theme = useSelector((state) => state.theme.value);
  const hidden = useSelector((state) => state.sidebar.value);

  const { data, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getData()), []);
  // console.log(data);
  return (
    <>
      <div className={`w-full h-full `}>
        <header
          className={`flex  items-center px-6 h-[97px]  font-bold w-full border-b ${
            theme
              ? "border-light text-black "
              : "border-dark bg-grey-dark text-white"
          } `}
        >
          <div
            className={`${hidden ? "hidden" : ""} border-r ${
              theme ? "border-light" : "border-dark"
            } h-full mr-8 pr-8 flex justify-center items-center`}
          >
            <img src={theme ? logo_dark : logo_light} alt="logo" />
          </div>
          <h1 className="text-2xl mr-auto">Platform Launch</h1>
          <div className="flex items-center gap-6 ">
            <button
              className={`text-white text-center h-12 w-40 bg-purple-main ${
                data && data.boards.length ? "" : "opacity-25"
              } rounded-full text-base`}
            >
              + Add New Task
            </button>
            <img src={icon_more} />
          </div>
        </header>
        <main
          className={`w-full h-5/6  ${
            theme ? "bg-grey-light" : "bg-grey-very-dark"
          } `}
        >
          {data ? (
            <div className={`flex w-full pl-8  gap-6`}>
              {data.boards[0].columns.map((col) => (
                <Column name={col.name} tasks={col.tasks} />
              ))}
              <div
                className={`flex justify-center items-center text-2xl text-grey-medium h-screen ${
                  theme ? "bg-[#E9EFFA]" : "bg-grey-dark"
                }  px-8 mt-[84px] rounded-md`}
              >
                + New Column
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center">
              <p className="text-lg text-grey-medium mb-8">
                This board is empty. Create a new column to get started.
              </p>
              <button className="text-white w-[174px] h-12 rounded-full bg-purple-main">
                + Add New Column
              </button>
            </div>
          )}
        </main>
        <div
          className={`w-14 h-12 rounded-r-full bg-purple-main flex items-center justify-center absolute left-0 bottom-8 cursor-pointer ${
            hidden ? "hidden" : ""
          }`}
          onClick={() => dispatch(showSidebar())}
        >
          <img src={icon_show} alt="icon show sidebar" />
        </div>
      </div>
      <div className="absolute left-[480px]  top-[250px] bottom-[250px]"></div>
    </>
  );
}
