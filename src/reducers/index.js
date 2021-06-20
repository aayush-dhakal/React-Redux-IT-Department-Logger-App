import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
  log: logReducer, // log will be used as a state name. we are setting log to logReducer so go in logReducer.js file, there see in initialState, whatever states are defined in initial state will be set in log state(after ofcourse being modified by reducers according to actions defined)
  tech: techReducer,
});
