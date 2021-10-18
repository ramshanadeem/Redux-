//4. we have multiple reducer so combine all reducer here
import {combineReducers} from 'redux'
import { ProductReducer } from './ProductReducer'
export const reducers = combineReducers({
    allproducts:ProductReducer,
}
    )