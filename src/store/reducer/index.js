import { combineReducers } from "redux"

import cart from "./cart";
import user from "./user";

let rootReducers = combineReducers({
    cart, user
})

export default rootReducers;
