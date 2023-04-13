import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import dataReducer from "../features/data/dataSlice";
import taskReducer from "../features/task/taskSlice";
import modalReducer from "../features/modal/modalSlice";
import boardReducer from "../features/board/boardSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
    data: dataReducer,
    task: taskReducer,
    modal: modalReducer,
    board: boardReducer,
  },
});

export default store;
