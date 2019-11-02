import React, { Component } from 'react'
import { connect } from "react-redux"
import { Row, Col, Menu, Dropdown, Button, Icon, Input, Carousel, message } from 'antd';
import Api from '../Api'
import axios from "axios"
import '../css/Home.css'
const { Search } = Input;
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
class Home extends Component {
    state = {

        datalist: [],
        lists: [],
        datas: [],
        goodsli: []
    }
    //路由跳转
    goto(path) {
        this.props.history.push(path)
    }

    async componentDidMount() {

        //接受数据
        let data = await Api.get([
        ])
        //拿到数据库里面的对应数据


        this.setState({
            datalist: JSON.parse(data[4].data),
            lists: JSON.parse(data[1].data),
            datas: JSON.parse(data[5].data)
        })

    }

    render() {

        //数据解构
        let { datalist, lists, datas } = this.state
        return (
            <div>
                <Row>
                    <Col span={24} className="col1" style={{ display: "flex" }}>
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
                <Row style={{ marginTop: 10, marginBottom: 10 }}>
                    <Col span={24} style={{ display: "flex", justifyContent: "space-around" }}>
                        <Search placeholder="输入您想住的区域，商圈或小区名称" onSearch={value => console.log(value)} enterButton style={{ width: "80%", borderRadius: 50, }} />
                        <span >
                            {/* <Icon type="menu" /> */}
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Button style={{ display: "block", border: "1px solid #ccc", width: 50, height: 30, textAlign: "center", fontSize: 18, borderRadius: 20, }} className="button">
                                    <Icon type="menu" />
                                    {/* <Icon type="environment" theme="filled" className="icon" />
                                广州
                                <Icon type="caret-down" theme="filled" className="icon" /> */}
                                </Button>
                            </Dropdown>
                        </span>
                    </Col>
                </Row>
                <Carousel autoplay className="lunbo">
                    <div>
                        <img src="https://public.danke.com.cn/public-20190606-Fn47vVrRsxTLdwr3CaUoSZJ6jzzl" />
                    </div>
                    <div>
                        <img src="https://public.danke.com.cn/public-20191023-FmeBwpFgBL_B73ex988bqWB78LGS" />
                    </div>
                    <div>
                        <img src="https://public.danke.com.cn/public-20190908-Fjit4zQaBAN1GTExqrl3r1OwYN-8" />
                    </div>
                </Carousel>
                <div className="content">
                    <ul style={{ marginTop: 10, padding: 0 }} className="back">
                        <li onClick={this.goto.bind(this, "/jointrent")}>
                            <img src="https://public.danke.com.cn/public-20180319-Fv-CS5LQX0-HuOrLTN_0xPELxwfL" />
                            <p>合租</p>
                        </li>
                        <li onClick={this.goto.bind(this, "/entiretenancy")}>
                            <img src="https://public.danke.com.cn/public-20180319-FpCn5y1oJiqxcN3oyQdIgXaDh2oA" />
                            <p>整租</p>
                        </li>
                        <li onClick={this.goto.bind(this, "/ownertojoin")}>
                            <img src="https://public.danke.com.cn/public-20180319-FtStiZtciRuNxrVVNqwhmh8KSYhD" />
                            <p>业主加盟</p>
                        </li>
                        <li onClick={this.goto.bind(this, "/housingresource")}>
                            <img src="https://public.danke.com.cn/public-20181204-FopgEsrtTlQ528ELuxmxN4CRXx-6" />
                            <p>房源定制</p>
                        </li>
                    </ul>
                    <div style={{ paddingTop: 20, }}>
                        <p style={{ margin: 0, display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: "18px", color: "#333", fontWeight: 700 }}>蛋壳合租</span><span style={{ paddingTop: 6, fontSize: "12px" }}>查看更多</span></p>
                        <p style={{ fontSize: "10px", color: "#999" }}>高档家居 高品质合租公寓</p>
                    </div>
                    <ul style={{ display: "flex", margin: 0, padding: 0, overflow: "auto", borderBottom: "1px solid #BCBCBC" }}>
                        {
                            lists.map(item => <li style={{ marginRight: 15, width: 200 }}>
                                <img src={item.image} style={{ width: 200, height: 146 }} />
                                <p style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: 0 }}>{item.sub_title}</p>
                                <p><b style={{ color: "#FF7D6A" }}>{item.image_title}</b> 元 / 每月</p>
                            </li>)
                        }
                    </ul>
                    <div style={{ paddingTop: 20, }}>
                        <p style={{ margin: 0, display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: "18px", color: "#333", fontWeight: 700 }}>蛋壳月租</span><span style={{ paddingTop: 6, fontSize: "12px" }}>查看更多</span></p>
                        <p style={{ fontSize: "10px", color: "#999" }}>租期您定 月租月轻松</p>
                    </div>
                    <ul style={{ display: "flex", margin: 0, padding: 0, overflow: "auto", borderBottom: "1px solid #BCBCBC" }}>
                        {
                            datas.map(item => <li onClick={this.goto.bind(this, "/datails")} style={{ marginRight: 15, width: 200 }}>
                                <img src={item.image} style={{ width: 200, height: 146 }} />
                                <p style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: 0 }}>{item.sub_title}</p>
                                <p><b style={{ color: "#FF7D6A" }}>{item.image_title}</b> 元 / 每月</p>
                            </li>)
                        }
                    </ul>
                    <div style={{ paddingTop: 20, paddingBottom: 10, borderBottom: "1px solid #BCBCBC" }}>
                        <p style={{ margin: 0, display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: "18px", color: "#333", fontWeight: 700 }}>付费</span><span style={{ paddingTop: 6, fontSize: "12px" }}>需支付¥1.5元查看</span></p>
                        {/* <p style={{fontSize: "10px",color: "#999"}}>租期您定 月租月轻松</p> */}
                    </div>
                    <ul style={{ margin: 0, padding: 0 }}>
                        {
                            datalist.map(item => <li style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                                <img src={item.image} style={{ width: 116, heigth: 86, display: "block" }} />
                                <div className="story_block">
                                    <span className='s1'>{item.sub_title}</span>
                                    <p className="p1">{item.intro}</p>
                                </div>
                            </li>)
                        }
                        <li style={{ marginTop: 20, marginBottom: 20 }}>
                            <img src="https://public.danke.com.cn/public-20191010-Fr11W7N8KM-DUz-LbntszLAXeqtP" style={{ width: "100%" }} />
                        </li>
                    </ul>
                </div>
                <div style={{ height: 200, background: "#3F4141", paddingTop: 10, }}>

                    <p style={{ width: "95%", height: 40, margin: "auto", textAlign: "center", color: "#fff", lineHeight: 3, background: "#535656", }}> 客服热线：4001-551-551
                        </p>
                    <div style={{ textAlign: "center", }}>
                        <p style={{ margin: 0, padding: 0 }}><img src="//public.danke.com.cn/public-20171231-FsRYcCtsOytIYH7C5nZCiLvaWQ1H" style={{ width: 65, color: "#616262" }} /></p>
                        <p style={{ margin: 0, padding: 0, color: "#616262", fontSize: 12 }}>让租房变得简单和快乐</p>
                        <p style={{ margin: 0, padding: 0, color: "#616262", fontSize: 10 }}>© 2018 蛋壳公寓 京ICP备15009197号-1</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default Home;
//  "北京市", "深圳市","上海市","杭州市","天津市","武汉市","南京市","广州市","成都市","无锡市","西安市","重庆市"