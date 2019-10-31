import React, { Component } from 'react'
import '../css/Datails.css'
import { Row, Col, Menu, Dropdown, Button, Icon, Input, Carousel, message } from 'antd';
// const { Search } = Input;
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
class Datails extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24} className="col1" style={{ display: "flex",height: ".606667rem" }}>
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
                <Carousel autoplay className="lunbo">
                    <div>
                        <img src="https://public.danke.com.cn/public-20190918-FrvZM4jJoO0WZppNGSvAsvdsFUpH-roomMobileDetail.jpg" />
                    </div>
                    <div>
                        <img src="https://public.danke.com.cn/public-20190918-Fh0NTjaqeZo7gft46ZKO-AALCd6G-roomMobileDetail.jpg" />
                    </div>
                    <div>
                        <img src="https://public.danke.com.cn/public-20190918-FoM2-H5QH-VwFuZ7UDYwr7JqCbZs-roomMobileDetail.jpg" />
                    </div>
                    <div>
                        <img src="https://public.danke.com.cn/public-20190918-FvfA3x9tG9cw4lhxzDsN3q7NEoc2-roomMobileDetail.jpg" />
                    </div>
                    <div>
                        <img src="https://public.danke.com.cn/public-20190918-Fou-8eJwChQ6Fl7IktZsI-AI7eSE-roomMobileDetail.jpg" />
                    </div>
                </Carousel>
                <div style={{width:"100%",height:"50px",position:"absolute",bottom:0,left:0,zIndex:9}} className="aaa">
                    <p className="p1" style={{width:"20%",height:"100%",border:"1px solid #fff",fontSize:"10px"}}><Icon type="heart" style={{display:"block",fontSize:"16px",paddingTop:8}} />收藏</p>
                    <p className="foot" style={{width:"40%",height:"100%",background:"#EEC02F",}}>电话咨询</p>
                    <p className="foot" style={{width:"40%",height:"100%",background:"#3DBCC6",}}>在线预约</p>
                </div>
            </div>
        )
    }
}

export default Datails;