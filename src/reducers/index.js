import { combineReducers } from "redux";
import { option } from "./option";
import { type } from "./type";
import { share } from "./share";

export const reducers = combineReducers({
    option, type, share
})