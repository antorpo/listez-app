import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tutorsList: [],
    selectedTutor: {}
}

const tutorsSlice = createSlice({
    name: 'tutorsReducer',
    initialState,
    reducers: {
        selectTutor(state, action){
            state.selectedTutor = action.payload;
        },
        getTutors(state, action){
            state.tutorsList = action.payload;
        }
    }
})

export const {
    selectTutor,
    getTutors
} = tutorsSlice.actions;

export default tutorsSlice.reducer;