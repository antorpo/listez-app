import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    coursesList: [],
    selectedCourse: {},
}

const coursesSlice = createSlice({
    name: 'coursesReducer',
    initialState,
    reducers: {
        selectCourse(state, action) {
            state.selectedCourse = action.payload;
        },
        getCourses(state, action){
            state.coursesList = action.payload;
        }
    }
})

export const {
    selectCourse, getCourses
} = coursesSlice.actions;

export default coursesSlice.reducer;