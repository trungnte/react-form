import {combineReducers, createStore} from "redux";
import { QLSVReducer } from "./reducers/QLSVReducer";

const rootReducer = combineReducers({
    QLSVReducer,
});

export const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);