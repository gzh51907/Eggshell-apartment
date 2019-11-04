import React,{Component} from 'react'

import { Row, Col, Menu, Dropdown, Button, Icon, Input, Carousel, message } from 'antd';
import '../css/ownertojoin.css'
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
    //路由跳转
    goto(path) {
        this.props.history.push(path)
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
                <div className="entrust-btn-wrap" style={{display:"flex",justifyContent: "space-around",textAlign:"center",fontSize:"16px",margin:"20px 0 20px 0"}}>
                    <a href="tel:400-062-8688" style={{height:44,width:"40%",display:"inline-block",lineHeight:"44px",border:"1px solid #3DBCC6",color:"#3DBCC6"}}>委托热线</a>
                    <a href="JavaScript:;" className="entrust-btn-click" style={{height:44,width:"40%",display:"inline-block",lineHeight:"44px",background:"#3DBCC6",color:"#fff"}} onClick={this.goto.bind(this, "/lijiweituo")}>立即委托</a>
                </div>
                <div class="module-header" style={{textAlign:"center"}}>
                    <h2 style={{margin:0,fontSize:"17px",color:"#7e7d7e"}}>简单4步 做省心房东</h2>
                    <p style={{fontSize:"14px",color:"#999"}}>NEEDS FOUR SIMPLE STEPS</p>
                </div>
                <div>
                    <ul className="ul" style={{display:"flex",textAlign:"center"}}>
                        <li style={{width:"25%"}}>
                            <img src={require('../assets/public-20180605w.png')} style={{width:"36px",height:"36px"}} />
                            <p style={{marginBottom:"4px"}}>01</p>
                            <p>意向沟通</p>
                        </li>
                        <li style={{width:"25%"}}>
                            <img src={require('../assets/public-20180605S.png')} style={{width:"36px",height:"36px"}} />
                            <p style={{marginBottom:"4px"}}>02</p>
                            <p>实勘测量</p>
                        </li>
                        <li style={{width:"25%"}}>
                            <img src={require('../assets/public-20180605F.png')} style={{width:"36px",height:"36px"}} />
                            <p style={{marginBottom:"4px"}}>03</p>
                            <p>合作签约</p>
                        </li>
                        <li style={{width:"25%"}}>
                            <img src={require('../assets/public-20180605h.png')} style={{width:"36px",height:"36px"}} />
                            <p style={{marginBottom:"4px"}}>04</p>
                            <p>坐享收益</p>
                        </li>
                    </ul>

                </div>
                <div className="page-module revenue-guide">
            <div className="module-header" style={{textAlign:"center"}}>
                <h2 style={{margin:0,fontSize:"17px",color:"#7e7d7e"}}>业主收益指南</h2>
                <p style={{fontSize:"14px",color:"#999"}}>REVENUE GUIDE</p>
            </div>
            
            <div className="guide-swiper" style={{backgroundImage:"url(https://public.danke.com.cn/public-20180606-FkxZgfTiMNCAcWlJFoLJqy5g-TxM)",width:"100%",height:"300px",paddingTop:"30px"}}>
            <Carousel autoplay  className="lunbo" style={{width:"335px",height:"240px",margin:"auto",background:"rgba(255,255,255,.7)",textAlign:"center",paddingTop:"30px"}}>
                    <div>
                    <h3>安全无忧</h3>
                            <p>出租人群严格筛选，高素质租户。</p>
                            <p>租约结束后，蛋壳会为您的房子做深度保洁。</p>
                    </div>
                    <div>
                    <h3>甩手掌柜</h3>
                            <p>蛋壳保证与业主签署合同后及时打款。</p>
                            <p>在房屋整个租期内，有蛋壳专业管家打理，省心省力，坐享收益。</p>
                            <p>房屋升级改造，配置全套家具、家电，实现高额增值服务。</p>
                    </div>
                    <div>
                    <h3>省时省心</h3>
                            <p>蛋壳提供“一站式全程托管”服务。</p>
                            <p>在租期内出现的任何生活、物业问题，将由蛋壳管家进行解决，让您省时省心。</p>
                            <p>蛋壳将至少每两周对公共区域进行保洁和物品检查，将最大程度的维护房屋安全和保障。</p>
                    </div>
                </Carousel>
            </div>
        </div>
        <div class="page-module danke-video" style={{width:"95%",margin:"auto"}}>
            <div class="module-header" style={{textAlign:"center",marginTop:"20px"}}>
                <h2 style={{margin:0,fontSize:"17px",color:"#7e7d7e"}}>了解蛋壳</h2>
                <p style={{fontSize:"14px",color:"#999"}}>LEARN ABOUT DANKE</p>
            </div>
            <div class="video-wrap">
                <div class="video-play-m">
                    <div class="video-list"><video id="my_video1" class="my-video" controls="controls" preload="auto" poster="" src="https://zhuanti.danke.com.cn/danke-vedio/danke-vedio1.mp4" type="video/mp4" webkit-playsinline="true" playsinline="" style={{width:"100%"}}></video></div>
                    <div class="init-play-layer">
                        <div class="init-play-btn"></div>
                    </div>
                </div>
                <div class="video-tab-m clearfix" >
                    <div class="video-tab-inner clearfix">
                        {/* <div class="video-item first-video">
                            <div class="video-item-inner">
                                <div class="play-state-layer"></div>
                            </div>
                            <p class="video-tip">蛋壳公寓 第一集</p>
                        </div>
                        <div class="video-item second-video">
                            <div class="video-item-inner">
                                <div class="play-state-layer"></div>
                            </div>
                            <p class="video-tip">蛋壳公寓 第二集</p>
                        </div>
                        <div class="video-item third-video">
                            <div class="video-item-inner">
                                <div class="play-state-layer"></div>
                            </div>
                            <p class="video-tip">蛋壳公寓 第三集</p>
                        </div> */}

                    </div>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
            <div style={{width:"188px",height:"44px",margin:"auto",background:"#3DBCC6",color:"#fff",textAlign:"center",lineHeight:"44px",fontSize:"16px",marginTop:"15px"}}>立即委托</div>
            <p style={{textAlign:"center",fontSize:"16px",marginTop:"15px"}}>委托热线:400-062-8688</p>
            <p><img src="https://public.danke.com.cn/public-20191010-Fr11W7N8KM-DUz-LbntszLAXeqtP"style={{width:"100%"}} /></p>
        </div>
        </div>
        <div style={{ height: 200, background: "#3F4141", paddingTop: 10, }}>

            <p style={{ width: "95%", height: 40, margin: "auto", textAlign: "center", color: "#fff", lineHeight: 3, background: "#535656", }}> 客服热线：4001-551-551
                </p>
            <div style={{ textAlign: "center", paddingTop:"15px"}}>
                <p style={{ margin: 0, padding: 0 }}><img src="//public.danke.com.cn/public-20171231-FsRYcCtsOytIYH7C5nZCiLvaWQ1H" style={{ width: 65, color: "#616262" }} /></p>
                <p style={{ margin: 0, padding: 0, color: "#616262", fontSize: 12 }}>让租房变得简单和快乐</p>
                <p style={{ margin: 0, padding: 0, color: "#616262", fontSize: 10 }}>© 2018 蛋壳公寓 京ICP备15009197号-1</p>
            </div>

            </div>
            </div>
        )
    }
}

export default Ownertojoin;