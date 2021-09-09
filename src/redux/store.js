import { createStore } from "redux";
import moviesReducer from "./movies/reducer";

export const store = createStore(moviesReducer)