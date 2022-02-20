import {applyMiddleware, combineReducers, createStore} from "redux";

import sampleReducer from "../reducers/SampleReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    sample: sampleReducer
});
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk));