import { combineReducers } from 'redux'
import GlobalReducer from './globalReducer'

// export const rootReducer = {
//     global: GlobalReducer,
// }
export const rootReducer = combineReducers({
    global: GlobalReducer,
})