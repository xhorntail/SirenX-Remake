const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
	separatorsVisible: {
		label: "Show/hide separators",
		description: "This will show the created separators.",
		attributes: {
			type: "checkbox",
		},
		value: true,
	},
	oneColorPerColumn: {
		label: "Limit one color per column",
		description: "This is useful for visualizing your pattern.",
		negativeEffect: "By disabling this, you will not be able to export files.",
		attributes: {
			type: "checkbox",
		},
		value: true,
	},
	totalColumns: {
		label: "Total of columns",
		description: "This is the total rows of the editor. The maximum is 32.",
		attributes: {
			type: "range",
			min: 20,
			max: 32,
		},
		type: "number",
		value: 20,
	}
}

const settings = createSlice({
	name: "settings",
	initialState,
	reducers: {
		updateSettings: (state, { payload: { key, value } }) => {
			if (state[key].attributes?.type === "checkbox") {
				value = !(value === "true");
			}

			if (state[key].type === "number") {
				value = Number(value);
			}

			state[key].value = value;
			return state;
		},
	}
});

export const { updateSettings } = settings.actions;

export default settings.reducer;