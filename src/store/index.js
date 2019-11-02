import {createStore} from 'redux';

// State

let initialState = {
    goodlist=[],
    totalPrice:0

}

// Reducer：用于定义修改state方式，必须返回一个新的state
// 复制一份，并覆盖
function reducer(state=initialState,{type,payload}){

    
    //在这里定义如何修改State
    // {type:'ADD_TO_CART',payload:{id,name,price,qty}}
    switch(type){
        case 'ADD_TO_CART':
            return {
                ...state,
                goodslist:[payload,...state.goodslist]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.id!=payload)
            }

        // {type:'CHANGE_QTY',payload:{id,qty}}
        case 'CHANGE_QTY':
            return {
                ...state,
                goodslist:state.goodslist.map(item=>{
                    if(item.id == payload.id){
                        item.qty=payload.qty
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}

// Store
const store = createStore(reducer);


export default store;