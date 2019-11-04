import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import cartAction from "../store/actron/cart"
import '../css/Datails.css'
import { bindActionCreators } from "redux"
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
    state = {
        ododo: []
    }
    async componentDidMount() {







        console.log(await this.props.goodslis.cart);

        let { goodslis, match: { params } } = this.props
        let id = params.id
        let { data } = await axios.get(`http://127.0.0.1:1906/goodsgl/${id}`)

        let ododo = data
        this.setState({
            ododo
        })

    }
    async addshouc() {
        let { ododo } = this.state
        let datas = {}
        ododo.map(item => {
            datas.list_rent = item.list_rent
            datas.list_image = item.list_image
            datas.list_title = item.list_title
            datas.list_diq = item.list_diq
            datas.list_sub = item.list_sub
            datas.list_price = item.list_price
            datas.list_cenc_o = item.list_cenc_o
            datas.list_cenc_t = item.list_cenc_t
            datas.list_cenc_s = item.list_cenc_s
        })
        let { add } = this.props;
        let { list_rent,
            list_image,
            list_title,
            list_diq,
            list_sub,
            list_price,
            list_cenc_o,
            list_cenc_t,
            list_cenc_s,
        } = datas
        // let changegoods = goodslist.filter(item => item.goods_id == goods_id)[0]
        let { data } = await axios.post(
            "http://127.0.0.1:1906/shoucadd/addsc",
            {
                list_rent,
                list_image,
                list_title,
                list_diq,
                list_sub,
                list_price,
                list_cenc_o,
                list_cenc_t,
                list_cenc_s,
            }
        );
        add({
            list_rent,
            list_image,
            list_title,
            list_diq,
            list_sub,
            list_price,
            list_cenc_o,
            list_cenc_t,
            list_cenc_s,
        })
        console.log(this.props);
        console.log(await this.props.goodslis.cart);
    }
    //路由跳转
    goto(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div style={{ position: "relative" }}>
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

                {this.state.ododo.map(item => <div>
                    <Carousel autoplay className="lunbo">
                        <div>
                            <img src={item.list_image} />
                        </div>
                    </Carousel>

                    <div style={{ width: "95%", margin: "auto" }}>
                        <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
                            <span style={{ width: "65%", display: "inline-block", fontSize: "19px" }}>{item.list_title}</span><div style={{ width: "35%", textAlign: "center", lineHeight: "50px" }}><span style={{ padding: "0 10px 0 10px", border: "1px solid #fff", borderRadius: "20px", background: "#F2FEFE", color: "#67CBD3" }}>地铁 2号线</span></div>
                        </div>
                        <div>
                            <p><span style={{ display: "inline-block", padding: "0 10px 0 10px", border: "1px solid #ccc", borderRadius: "10px", marginTop: "10px" }}>{item.list_rent}租</span></p>
                            <p>月租金<span style={{ padding: "0 0 0 10px", color: "#ff7966", fontSize: "24px", fontWeight: 700 }}>{item.list_price}
                                {/* <em style={{ padding: "0 0 0 10px", fontSize: "10px", }}>元/每月</em> */}
                            </span></p>
                            <p style={{ textAlign: "center", height: "42px", border: "1px solid #67CBD3", lineHeight: "42px", color: "#3dbcc6" }}><em>咨询电话:</em><span style={{ fontSize: "16px", paddingLeft: "10px" }}>400-067-8619</span></p>
                        </div>
                        <div style={{ paddingBottom: "10px", borderBottom: "1px solid #ccc", }}>
                            <Row>
                                <Col span={14} className="rol">
                                    <p>建筑面积：{item.list_diq}</p>
                                    <p>朝向：南</p>
                                </Col>
                                <Col span={8} className="rol">
                                    <p>户型：5室1卫<b>合</b></p>
                                    <p>楼层：11/12层</p>
                                </Col>
                            </Row>
                        </div>
                        <div style={{ paddingBottom: "10px", borderBottom: "1px solid #ccc", marginTop: "10px" }}>
                            <p>区域：{item.list_title}</p>
                            <p>地铁：{item.list_sub}</p>
                            <p>编号：140190-C</p>
                            <p>付款：可支持分期月付[不收中介费]</p>
                        </div>
                        <div style={{ marginBottom: "50px" }}>
                            <p style={{ fontSize: "14px" }}><b>房屋标配</b></p>
                            <ul style={{ width: "100%", display: "flex" }} className="ul-1">
                                <li>
                                    <img src="//public.danke.com.cn/public-20171123-Fit4o3_ZQIEVojXFg1k0eyt-4ytP" />
                                    <span>床</span>
                                </li>
                                <li>
                                    <img src="//public.danke.com.cn/public-20171123-FrYFDpZlpF4no-kfliDa0F5WOJbd" />
                                    <span>wifi</span>
                                </li>
                                <li>
                                    <img src="//public.danke.com.cn/public-20171123-Fu3H3dZA87uIWy7lnhCCy7YPzh48" />
                                    <span>洗衣机</span>
                                </li>
                                <li>
                                    <img src="//public.danke.com.cn/public-20171123-FlMAOzbw4EGZ4ZCdlvMe9Dhgs-ue" />
                                    <span>空调</span>
                                </li>
                                <li>
                                    <img src="//public.danke.com.cn/public-20171123-FhnOPpkUtLogeN-wFMr5zrm__bc3" />
                                    <span>智能锁</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "50px", position: "fixed", bottom: 0, left: 0, zIndex: 9 }} className="aaa">
                        <p className="p1" style={{ width: "20%", height: "100%", border: "1px solid #fff", fontSize: "10px" }} onClick={this.addshouc.bind(this)}><Icon type="heart" style={{ display: "block", fontSize: "16px", background: "#fff" }} />收藏</p>
                        <p className="foot" style={{ width: "40%", height: "100%", background: "#EEC02F", }}>电话咨询</p>
                        <p className="foot" style={{ width: "40%", height: "100%", background: "#3DBCC6", }} onClick={this.goto.bind(this, "/submit")}>在线预约</p>
                    </div>
                </div>)}
            </div>
        )
    }
}
const mepStareprops = (state) => ({
    goodslis: state
})
const mapdispachprops = dispatch => {
    return bindActionCreators(cartAction, dispatch)
}
Datails = connect(mepStareprops, mapdispachprops)(Datails)
export default Datails;