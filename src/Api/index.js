import axios from 'axios';
import { log } from 'util';


let danke = axios.create({
    baseURL:'http://127.0.0.1:1906/goods'
})

export async function get(params,config={}){
    let {data} = await danke.get('',{
        ...config,
        params
    });
    return data;
}

export async function post(params,config={}){
    let {data} = await danke.post('',params,config);
    return data;
    
    
}

export default {
    get,
    post
}