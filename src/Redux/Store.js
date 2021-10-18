//5. create store 
import { createStore } from "redux";
import {reducers} from '../Redux/Reducers/index';

 const store= createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );
    
 //so if we want to see the redux store in a chrome dev tool so we have the extension 
 export default store;
