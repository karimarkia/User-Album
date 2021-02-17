import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer'

const rootReducers = combineReducers({
  userReducer,
})

const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default Store
