const redux=require('redux');
const createstore=redux.createStore;
const combineReducers=redux.combineReducers;
const Buy_cake='buy cake';
const Buy_ice='buy ice';

//MiddleWare
const reduxlogger=require('redux-logger')


function buycake(){
    return(
        {
            type:Buy_cake,
            info:'cake bik chuka hai',
               
        }
    )
}
function buyice(){
    return(
        {
            type:Buy_ice,
            
               
        }
    )
}

const initial_cake={
    no_of_cake:78,
    
}
const initial_ice={
    no_of_ice:45
}

// const reducer=(state=initial_state,action)=>{
// switch(action.type){
//     case Buy_ice:
//         return{
//             ...state,
//             no_of_ice:state.no_of_ice-1
//         }
//         case Buy_cake:
//             return{
//                 ...state,
//                 no_of_cake:state.no_of_cake-1
//             }
//             default:return state
// }
// }
const cake_reducer=(state=initial_cake,action)=>{
switch(action.type){
    case Buy_cake:
        return{
            ...state,
         no_of_cake:state.no_of_cake-1
        }
        default:return state
}
}
const ice_reducer=(state=initial_ice,action)=>{
    switch(action.type){
        case Buy_ice:return{
            ...state,
            no_of_ice:state.no_of_ice-1
        }
        default:return state
    }
}
const rootreducer=combineReducers({
    cake:cake_reducer,
    ice:ice_reducer

})

const store=createstore(rootreducer);
console.log('initial state',store.getState());
store.subscribe(()=>console.log('update state',store.getState()));
store.dispatch(buyice());
store.dispatch(buyice());






