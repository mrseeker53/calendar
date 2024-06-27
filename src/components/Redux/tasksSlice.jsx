import { createSlice } from "@reduxjs/toolkit";
// import { format } from "date-fns";

const initialState = {
	tasks: {}
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			const { date, task, description, time, color } = action.payload;
			if (!state.tasks[date]) {
				state.tasks[date] = [];
			}
			state.tasks[date].push({task, description, time, color});
		},
	},
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
