import axios from "axios"

let initState = {
    goodslist: []
}

function ads(bah) {
    bah()
}

ads(
    async function ascaste() {

        let { data: dataww } = await axios.get("http://127.0.0.1:1906/shoucadd")
        // console.log(dataww);
        initState.goodslist = dataww
        return initState.goodslist
    }
)

function reducer(state = initState, { type, payload }) {
    switch (type) {
        case 'ADD_TO_CART':

            return {
                ...state,
                goodslist: [payload, ...state.goodslist]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                goodslist: state.goodslist.filter(item => item.goods_id != payload.id)
            }

        // {type:'CHANGE_QTY',payload:{id,qty}}
        case 'CHANGE_QTY':

            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    if (item.goods_id == payload.id) {
                        item.qty = payload.qty

                    }
                    return item;
                })
            }
        default:
            return state;
    }
}

export default reducer;