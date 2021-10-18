//3. create initial state also reducer take actions 
import {ActionTypes} from '../Constants/ActionTypes'
const initialState={
    products:[],
}
export const  ProductReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return {...state,
                    loading:true,
                    products:payload};
            
    
        default:
            return state;
    }
}