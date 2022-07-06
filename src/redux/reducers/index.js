import { combineReducers } from "redux";
import AReducer from "./a";
import BReducer from "./b";

const reducers = combineReducers({a: AReducer, b: BReducer})

export default reducers