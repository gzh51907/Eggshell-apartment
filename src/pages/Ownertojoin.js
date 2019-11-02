import React,{Component} from 'react'

import { Row, Col, Menu, Dropdown, Button, Icon, Input, Carousel, message } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                北京市
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                深圳市
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                上海市
        </a>
        </Menu.Item>
    </Menu>
);
class Ownertojoin extends Component{
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
                <div style={{position:"relative"}}>
                    <img src={require('../assets/public-20180605.png')} style={{width:"100%"}} />
                    <div className="banner" style={{position:"absolute",top:20,left:50,textAlign:"center",color:"#fff",fontSize:"12px"}}>
                        <img src="//public.danke.com.cn/public-20180607-Fu8o7V2uYxku5XwsGNrMnzg-kykb" alt="banner" style={{width:"280px",heigth:"150px",marginBottom:20}}/>
                        <p style={{margin:0}}>不要再做忙碌的房东</p>
                        <p>经常找租客，找维修，找增值途径...</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ownertojoin;