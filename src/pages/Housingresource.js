import React,{Component} from 'react'
import '../css/housingresource.scss'
import { Input } from 'antd';
class Housingresource extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <div className="header">
                    <img src={require("../assets/Housingresource.png")} alt=""/>
                    <div className="text">
                        <p className="p1">用心带您找到心仪的房源</p>
                        <p className="p2">输入您的找房需求，我们会尽快安排管家。</p>
                    </div>
                </div>
                <div className="main">
                    <div style={{display:'flex',alignItems:'center',height:'49px',borderBottom: "1px solid #F0F0F0"}}>
                        <div style={{width:'25%',textAlign:'center',fontSize:"13px"}}>意向位置</div>
                        <div style={{width:'75%',fontSize:"13px",paddingLeft:'10px'}}>
                            北京市
                            <span></span>
                        </div>
                    </div>
                    <div style={{display:'flex',alignItems:'center',height:'49px',borderBottom: "1px solid #F0F0F0"}}>
                        <div style={{width:'25%',textAlign:'center',fontSize:"13px"}}>租房预算</div>
                        <div style={{width:'75%',fontSize:"13px",paddingLeft:'10px'}}>
                            1500以下
                            <span></span>
                        </div>
                    </div>
                    <div style={{display:'flex',alignItems:'center',height:'49px',borderBottom: "1px solid #F0F0F0"}}>
                        <div style={{width:'25%',textAlign:'center',fontSize:"13px"}}>联系方式</div>
                        <div style={{width:'75%',fontSize:"13px"}}>
                            <Input placeholder="填写正确的电话号码，以便我们联系您" style={{width:'100%',border:'none'}}/>
                        </div>
                    </div>
                    <div style={{display:'flex',alignItems:'center',height:'49px',borderBottom: "1px solid #F0F0F0"}}>
                        <div style={{width:'25%',textAlign:'center',fontSize:"13px"}}>备注信息</div>
                        <div style={{width:'75%',fontSize:"13px"}}>
                            <Input placeholder="非必填" style={{width:'100%',border:'none'}}/>
                        </div>
                    </div>
                </div>
                <div style={{width:'90%',height:"46px",background: "#3DBCC6",
                color: "#fff",fontSize:'16px',textAlign:'center',lineHeight:'46px',position:'absolute',bottom:'10px',left:'5%'}}>
                    提交
                </div>
            </div>
        )
    }
}

export default Housingresource;