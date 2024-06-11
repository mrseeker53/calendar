import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			const { date, task } = action.payload;
			const formattedDate = format(date, "yyyy-MM-dd");
			if (!state[formattedDate]) {
				state[formattedDate] = [];
			}
			state[formattedDate].push(task);
		},
	},
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
