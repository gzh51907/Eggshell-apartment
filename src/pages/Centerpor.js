import React, { Component } from 'react'
import { Icon, Menu, Badge, Tooltip, Button } from 'antd';
import { withUser } from "../hoc"
import { connect } from "react-redux"
class Centerpor extends Component {
    state = {
        menu: [{
            name: 'custome',
            path: 'custome',
            text: '联系客服',
            icon: 'wechat'
        }, {
            name: 'coupons',
            path: 'coupons',
            text: '优惠券',
            icon: 'dollar'
        }, {
            name: "myprize",
            path: "myprize",
            text: '我的奖品',
            icon: 'user'
        }, {
            name: "collection",
            path: "/collection",
            text: '我的收藏',
            icon: 'star'
        }],
        username: ""
    }
    loAuto() {
        localStorage.removeItem('user');
        this.props.history.push("/login")
    }
    async componentDidMount() {
        let user = localStorage.getItem('user');
        this.setState({
            username: user
        })
        if (user) {
            console.log("通过");
        } else {
            this.props.history.push("/login")
            // console.log(this.props);
        }
    }
    render() {
        let { username } = this.state

        const text =
            <span onClick={this.loAuto.bind(this)}>安全退出</span>
            ;
        let { menu } = this.state
        let { history } = this.props
        return (
            <div style={{ position: "relative" }}>

                <div
                    style={{ background: "#fff", height: ".566667rem", padding: "0px .13333rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                    <img src="https://public.danke.com.cn/public-20180502-Fhy8J0r3JtbeP5MQ9x2HCBvNEZ6x" style={{ width: " 1.033333rem", height: ".4rem " }} />

                    <Tooltip placement="bottomRight" title={text} trigger="click" overlayStyle={{}}>
                        <Button style={{ border: "none" }}><Icon type="menu-unfold" style={{ fontSize: ".346667rem" }} /></Button>
                    </Tooltip>
                </div>
                <div style={{
                    background: "url(https://public.danke.com.cn/public-20180420-FvXGh3pny5AiaPxUkANdtOB51YJG) no-repeat 0 0",
                    width: "100%",
                    height: "1.84rem",
                    overflow: "hidden",
                    backgroundSize: "100% 2.4rem"
                }}>
                    <div style={{ display: "flex", margin: ".366667rem 0rem 0rem .2rem" }}>
                        <div style={{ marginRight: ".16667rem" }}>
                            <img src="http://public.danke.com.cn/public-20180206-FgzEN9SiY65F_cmpAhVWLXfPjYpp" style={{ width: ".83rem", height: ".83rem" }} />
                        </div>
                        <div>
                            <p style={{ fontSize: ".3rem", color: "#fff", margin: 0, fontWeight: 600 }}>
                                {username}
                            </p>
                            <p style={{ fontSize: ".2rem", color: "#fff" }}>
                                <span style={{ marginRight: ".066667rem" }}>
                                    {username}
                                </span>
                                <Icon type="form" />
                            </p>
                        </div>
                    </div>
                </div>
                <Menu
                    mode="horizontal"
                    onSelect={({ key }) => {
                        history.push(key)
                    }}
                    style={{
                        height: ".84rem",
                        lineHeight: ".84rem"
                    }}
                >
                    {
                        menu.map(item => <Menu.Item

                            key={item.path}>
                            {
                                item.name == "collection" ?
                                    <Badge count={5} >
                                        <Icon type={item.icon} />
                                        {item.text}
                                    </Badge>
                                    :
                                    <>
                                        <Icon type={item.icon}

                                        />
                                        {item.text}
                                    </>
                            }
                        </Menu.Item>)
                    }

                </Menu>
                <div style={{ borderTop: ".15rem solid #f9f9f9" }}>
                    <div style={{ padding: '.196667rem' }}>
                        <img src="https://public.danke.com.cn/public-20190408-FlLpTFE7cuVQaMlfbAapHVtbpjcH" style={{ width: "100%", height: ".89rem" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: '.196667rem' }}>
                        <img src="https://public.danke.com.cn/public-20180423-FhYcFENKy6TVfc04rrevuXVxMXxf" style={{ width: "48%" }} />
                        <img src="https://public.danke.com.cn/public-20180423-FqfbwHjymkCyQWfhjRdT7fOXykdj" style={{ width: "48%" }} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img src="https://public.danke.com.cn/public-20180424-Fo-x7AWMGLBudpS92uLNPbQd3yCo" style={{ width: "2rem", height: ".466667rem" }} />
                    </div>
                    <div style={{ textAlign: "center", color: "#ccc", marginTop: ".106667rem" }}>
                        <p> © 2018 紫梧桐（北京）资产管理有限公司</p>
                    </div>
                </div>
                <div style={{ width: "100%", height: "1.033333rem", background: "#f9f9f9" }}>
                </div>
                <div style={{ width: "100%", height: ".18rem", background: "#2f4050" }}>
                </div>
                <div style={{
                    width: "100%", height: "1.4rem", background: "url(https://public.danke.com.cn/public-20180420-FnJMPrx0BT7q5a9C0tq3u7E8cQ4_)  no-repeat center",
                    backgroundSize: "100%", height: "1.4rem"
                }}>

                </div>
            </div >
        )
    }
}

// Centerpor = withUser(Centerpor)
Centerpor = connect()(Centerpor)

export default Centerpor;