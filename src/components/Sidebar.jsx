import React from "react";
import logo_dark from "../assets/logo-dark.svg";
import logo_light from "../assets/logo-light.svg";
import logo_mobile from "../assets/logo-mobile.svg";
import icon_board from "../assets/icon-board.svg";
import icon_dark_theme from "../assets/icon-dark-theme.svg";
import icon_light_theme from "../assets/icon-light-theme.svg";
import icon_hide from "../assets/icon-hide-sidebar.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/features/theme/themeSlice";
import { hideSidebar } from "../redux/features/sidebar/sidebarSlice";
import { setActive } from "../redux/features/board/boardSlice";
import { openModal } from "../redux/features/modal/modalSlice";
import AddBoardModal from "./AddBoardModal";

export default function Sidebar() {
  const theme = useSelector((state) => state.theme.value);
  const show = useSelector((state) => state.sidebar.value);
  const { data } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const chooseBoard = (e) => {
    console.log(e.target);
    dispatch(setActive());
    data.boards.filter((board) => board.name === e.target.textContent);
  };

  return (
    <div
      className={`relative w-75  flex flex-col justify-between border-r  ${
        theme ? "border-light" : "bg-grey-dark border-dark"
      }
      ${show ? "" : "hidden"}`}
    >
      <div>
        <header className="pl-[34px] pt-[34px] mb-[54px]">
          <img src={theme ? logo_dark : logo_light} alt="logo" />
        </header>
        <div className="">
          <h1 className=" pl-[34px] uppercase text-xs font-bold text-grey-medium tracking-[2.4px] mb-5">
            All boards (3)
          </h1>
          <ul>
            {data &&
              data.boards.map((board) => (
                <li
                  className="flex items-center gap-4 py-[14px] mr-6 rounded-r-full pl-[34px]  text-grey-medium cursor-pointer hover:bg-purple-main hover:text-white transition-all"
                  onClick={chooseBoard}
                >
                  <img src={icon_board} alt="board icon" />
                  <p className="font-bold text-base">{board.name}</p>
                </li>
              ))}
            <li className="flex items-center gap-4 py-[14px] mr-6 rounded-r-full pl-[34px] ">
              <img
                src={icon_board}
                alt="board icon"
                className="fill-purple-main"
              />
              <p
                className="font-bold text-base text-purple-main cursor-pointer"
                onClick={() => dispatch(openModal("addBoard"))}
              >
                + Create New Board
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-12 absolute bottom-6 left-0 right-0">
        <div className=" mb-6">
          <div
            className={`${
              theme ? "bg-grey-light" : "bg-grey-very-dark"
            } mx-6 h-12 flex items-center justify-center gap-6 rounded-md`}
          >
            <img src={icon_light_theme} alt="icon light theme" />
            <div
              className={`w-10 h-5 rounded-full bg-purple-main flex items-center ${
                theme ? "justify-start" : "justify-end"
              } cursor-pointer`}
              onClick={() => dispatch(changeTheme())}
            >
              <div className="w-[14px] h-[14px] rounded-full bg-white mx-1"></div>
            </div>
            <img src={icon_dark_theme} alt="icon dark theme" />
          </div>
        </div>
        <div
          className="flex items-center gap-4 pl-[34px] cursor-pointer"
          onClick={() => dispatch(hideSidebar())}
        >
          <img src={icon_hide} alt="hide icon" />
          <p className="text-grey-medium ">Hide Sidebar</p>
        </div>
      </div>
    </div>
  );
}
