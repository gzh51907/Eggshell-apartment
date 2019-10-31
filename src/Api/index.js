import axios from 'axios';
import { log } from 'util';

let Hgw = axios.create({
    baseURL:'http://127.0.0.1:1906/user/reg'
})

export async function get(params,config={}){
    let {data} = await Hgw.get('',{
        ...config,
        params
    });
    return data;
}

export async function post(params,config={}){
    console.log(params);
    
    let data = await axios.post('',params,config);
    console.log(data);
    return data;
    
    
}

export default {
    get,
    post
}