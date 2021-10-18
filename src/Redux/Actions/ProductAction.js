// 2. first create type in actiontypes then in this we define the type and payload of each funct
import { ActionTypes } from "../Constants/ActionTypes"

export const SetProduct=(products)=>{
    return{
         type: ActionTypes.SET_PRODUCT,
         payload: products
    }
}
export const SelectProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
// export const SelectRemoveProduct=(product)=>{
//     return{
//         type:ActionTypes.REMOVE_SELECTED_PRODUCT,
//         payload:product
        
//     }
// }