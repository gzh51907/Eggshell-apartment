import {createStore} from 'redux';

// State
let initialState = {
    goodslist:[{
        goods_id: "1",
        goods_name: "huawei mate30 pro",
        goods_image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
        goods_price: 5998,
        goods_qty: 10
    },
    {
        goods_id: "2",
        goods_name: "xiaomi9",
        goods_image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
        goods_price: 2999,
        goods_qty: 2
    },
    {
        goods_id: "3",
        goods_name: "onePlus9 pro",
        goods_image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
        goods_price: 3999,
        goods_qty: 1
    }],
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