import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obj: {
    boards: [
      {
        name: "",
        columns: [
          {
            name: "",
            tasks: [
              {
                title: "",
                description: "",
                status: "",
                subtasks: [
                  {
                    title: "",
                    isCompleted: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    deleteBoard: (state, action) => {
      state.boards.filter((board) => board.name !== action.payload.name);
    },
  },
});
