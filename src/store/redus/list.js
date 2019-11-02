import axios from "axios"

let goodslist = []
// shuju()

setTimeout(() => {

    async function shuju() {
        let { data } = await axios.get("http://127.0.0.1:1906/goodsgl/", {
        });
        goodslist = data
    }
    shuju()
}, 100);

export default ;