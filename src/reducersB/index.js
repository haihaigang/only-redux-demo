import { combineReducers } from 'redux'
import countReducer from './countReducer'
import todoReducer from './todoReducer'

export default combineReducers({ count: countReducer, todos: todoReducer })