import counter from "./counter"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  counter: counter,
})

export default rootReducer