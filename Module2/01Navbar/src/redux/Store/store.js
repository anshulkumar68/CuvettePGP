import { combineReducers, createStore } from "redux";
import counterReducer from "../Reducers/counterReducer";
import BgReducer from "../Reducers/BgReducer";

const reducer = combineReducers({
    counter : counterReducer,
    color : BgReducer
})

const store = createStore(reducer);

export default store;

