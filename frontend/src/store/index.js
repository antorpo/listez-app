// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux

import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./slices/coursesSlice";
import tutorsSlice from "./slices/tutorsSlice";

export const store = configureStore({
  reducer: {
      courses: coursesSlice,
      tutors: tutorsSlice
  },
});

/*
    That one call to configureStore did all the work for us:

    - It combined todosReducer and filtersReducer into the root reducer function, 
      which will handle a root state that looks like {todos, filters}
    - It created a Redux store using that root reducer
    - It automatically added the thunk middleware
    - It automatically added more middleware to check for common mistakes like accidentally
      mutating the state
    - It automatically set up the Redux DevTools Extension connection
*/

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { ThunkMiddleware } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

// // Root Reducer
// const rootReducer = combineReducers({
//     courses: coursesReducer,
//     tutors: tutorsReducer,
// });

// const store = createStore(rootReducer);
