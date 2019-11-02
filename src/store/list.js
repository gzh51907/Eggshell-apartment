import axios from "axios"
import { createStore } from "redux"



//     let dataList=data
//     // 手动请求第一个tab内容
//     this.setState({
//         dataList
//     })
//     console.log( dataList);

// }
async function shuju() {
    let listgoods = {
        goodslis: {}
    }
    let data = await axios.get("http://127.0.0.1:1906/goods/page", {
        params: [{ list_rent: "合" }, { pa: 4 }]
    });

    listgoods.goodslis = data
    return listgoods
}
shuju();


function reducer(state = shuju(), provider) {

    return state
}
const store = createStore(reducer)
export default store;