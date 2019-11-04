import React, { Component } from 'react'
import { Row, Col, Menu, Dropdown, Button, Icon, Input, Carousel, message } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            首页
        </Menu.Item>
        <Menu.Item>
            个人中心
        </Menu.Item>
        <Menu.Item>
            业主加盟
        </Menu.Item>
    </Menu>
);
class Lijiweituo extends Component{
    constructor(){
        super();
    }
    

    render(){
        return (
            <div>
                <Row>
                    <Col span={24} className="col1" style={{ display: "flex", height: ".606667rem" }}>
                        <img src="//public.danke.com.cn/public-20171231-FsRYcCtsOytIYH7C5nZCiLvaWQ1H" className="img" />
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button style={{
                                padding: 0, height: 18, width: 75, borderRadius: 25, marginTop: 10, fontSize: 10, color: "#3DBCC6", position: "relative",
                                zIndex: 15,
                            }} className="button">
                                <Icon type="environment" theme="filled" className="icon" />
                                广州
                                <Icon type="caret-down" theme="filled" className="icon" />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
                <div style={{width:'95%',margin:"auto"}}>
                <div className="item mobile" style={{height:"60px",borderBottom:"1px solid #FAFAFA",fontSize: "14px",color: "#393939"}}>
                        <span style={{lineHeight:"60px",marginRight:"20px"}}>姓名</span>
                        <input type="text" placeholder="请输入姓名" style={{width:"150px",padding:"5px 5px",border:"1px solid #fff"}} />
                </div>
                <div className="item mobile" style={{height:"60px",borderBottom:"1px solid #FAFAFA",fontSize: "14px",color: "#393939"}}>
                        <span style={{lineHeight:"60px",marginRight:"20px"}}>电话</span>
                        <input type="text" placeholder="请输入手机号" style={{width:"150px",padding:"5px 5px",border:"1px solid #fff"}} />
                    </div>
                    <div className="item message" style={{marginTop:"10px"}}>
                        <h3 style={{fontSize:".2rem"}}>房屋信息</h3>
                        <textarea name="message" cols="30" rows="10" placeholder="请输入所在小区名称"
                        style={{width:"100%",height:"100px",padding: "10px 14px",background: "#f7f8fa",border:"1px solid #fff"}}
                        ></textarea>
                    </div>
                    <div style={{width:"100%",textAlign:"center",height:"49px",background:"#3DBCC6",lineHeight:"49px",fontSize:"18px",color:"#fff",marginTop:"20px",borderRadius:"25px",marginBottom:"20px"}}>
                        提交约看
                    </div>
                    <p style={{textAlign:"center",fontSize:"16px",marginTop:"15px",color:"#3DBCC6"}}>委托热线:400-062-8688</p>
            <p><img src="https://public.danke.com.cn/public-20191010-Fr11W7N8KM-DUz-LbntszLAXeqtP"style={{width:"100%"}} /></p>
                </div>
                <div style={{ height: 200, background: "#3F4141", paddingTop: 10, }}>

                    <p style={{ width: "95%", height: 40, margin: "auto", textAlign: "center", color: "#fff", lineHeight: 3, background: "#535656", }}> 客服热线：4001-551-551
                        </p>
                    <div style={{ textAlign: "center", marginTop:"20px"}}>
                        <p style={{ margin: 0, padding: 0 }}><img src="//public.danke.com.cn/public-20171231-FsRYcCtsOytIYH7C5nZCiLvaWQ1H" style={{ width: 65, color: "#616262" }} /></p>
                        <p style={{ margin: 0, padding: 0, color: "#616262", fontSize: 12 }}>让租房变得简单和快乐</p>
                        <p style={{ margin: 0, padding: 0, color: "#616262", fontSize: 10 }}>© 2018 蛋壳公寓 京ICP备15009197号-1</p>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Lijiweituo;