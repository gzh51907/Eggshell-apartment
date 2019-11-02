import React, { Component } from 'react'

import { Row, Col, Menu, Dropdown, Button, Icon, Input, Carousel, message } from 'antd';

class Submit extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className="main" style={{width:"95%",margin:"auto",marginTop:"15px"}}>
                    <div style={{display:"flex",}}>
                        <div style={{position:"relative"}}><img src="https://public.danke.com.cn/public-20190918-FimdWWX8baZQdB0vkPKGp6CBTa_w-roomPcList.jpg" style={{width:"120px",height:"90px",marginRight:"15px"}} />
                        <span style={{position:"absolute",top:0,left:0,padding:"0 4px 0 4px",background:"#3DBCC6",fontSize:8,color:"#fff"}}>合</span>
                        </div>
                        <div>
                        <p style={{fontSize:"14px"}}>飞翔公园 康盈阁 次卧 朝南 C室</p>
                        <span><Icon type="home" />南 /8㎡／11/12楼<b>￥1410</b><em> 元/月</em></span>
                        <p><Icon type="environment" />距2号线飞翔公园站700米</p>
                        </div>
                    </div>
                    <div className="item mobile" style={{height:"60px",borderBottom:"1px solid #ccc",fontSize: "14px",color: "#393939"}}>
                        <span style={{lineHeight:"60px",marginRight:"20px"}}>联系方式</span>
                        <input type="text" placeholder="请输入您的手机号" style={{width:"150px",padding:"5px 5px",border:"1px solid #fff"}} />
                    </div>
                    {/* <div className="item msgcode">
                        <span>验证码</span>
                        <input type="text" name="msg-code" placeholder="请输入验证码"/>
                        <a className="msgcode-btn" href="javascript:;">获取验证码</a>
                    </div> */}
                    <div className="item message" style={{marginTop:"10px"}}>
                        <h3 style={{fontSize:".2rem"}}>给管家留言</h3>
                        <textarea name="message" cols="30" rows="10" placeholder="选填"
                        style={{width:"100%",padding: "10px 14px",background: "#f7f8fa",border:"1px solid #fff"}}
                        ></textarea>
                    </div>
                    <div style={{width:"100%",textAlign:"center",height:"49px",background:"#3DBCC6",lineHeight:"49px",fontSize:"18px",color:"#fff",marginTop:"20px"}}>
                        提交约看
                    </div>
                </div>
            </div>
        )
    }
}

export default Submit;