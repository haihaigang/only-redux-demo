import { createStore, applyMiddleware } from "redux"
// import reducers from "./reducersA"
import reducers from "./reducersB"
import logger from "./middlewares/logger"
import thunk from "./middlewares/thunk"

let store = createStore(reducers, applyMiddleware(logger, thunk))
console.log('store after init', store.getState())

export default store