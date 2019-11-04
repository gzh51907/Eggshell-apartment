export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHANGE_QTY = "CHANGE_QTY";

function add(goods) {
    return {
        type: ADD_TO_CART,
        payload: goods
    }
}
function remove(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}
function change(id, qty) {
    return {
        type: CHANGE_QTY,
        payload: { id, qty }
    }
}
export default {
    add,
    remove,
    change
}