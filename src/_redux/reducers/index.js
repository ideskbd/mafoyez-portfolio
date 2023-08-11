import { combineReducers } from 'redux'
import GlobalReducer from './GlobalReducer'

// export const rootReducer = {
//     global: GlobalReducer,
// }
export const rootReducer = combineReducers({
    global: GlobalReducer,
})