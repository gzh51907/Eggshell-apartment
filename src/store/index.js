import { createStore } from 'redux';
import axios from "axios"
// State
async function shuju() {
    let initialState = {
        goodslist: [],
        totalPrice: 0
    }
    let { data } = await axios.get("http://127.0.0.1:1906/goodsgl/", {
    });
    initialState.goodslist = data
    return initialState
}
// Reducer：用于定义修改state方式，必须返回一个新的state
// 复制一份，并覆盖
function reducer(state = shuju(), { type, payload }) {
    switch (type) {
        case 'CHANGE_QTY':
            return {
                goodslist: state.goodslist.map(item => {
                    if (item.id == payload) {

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