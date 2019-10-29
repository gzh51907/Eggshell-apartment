import axios from 'axios';

let Hgw = axios.create({
    baseURL:'http://www.hangowa.com/mo_bile/index.php'
})

export async function get(params,config={}){
    let {data} = await Hgw.get('',{
        ...config,
        params
    });
    return data;
}

export async function post(params,config={}){
    let {data} = await Hgw.post('',params,config);
    return data;
}

export default {
    get,
    post
}