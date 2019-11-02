import React, { Component } from 'react';
import { Select, Cascader, Icon, TreeSelect , List, Button } from 'antd';
import '../css/Entiretenancy.scss';
import axios from 'axios';
import { log } from 'util';

// 合租Cascader级联选择
const options = [
    {
        value: '不限',
        label: '不限',

    },
    {
        value: '合租',
        label: '合租',

    },
    {
        value: '整租',
        label: '整租',

    },
    {
        value: '月租',
        label: '月租',

    },
];
// function onChange(value) {
//     console.log(value);
// }
function displayRender(label) {
    return label[label.length - 1];
}

// 位置 treeData树选择
const treeData = [
    {
        title: '不限',
        value: '不限',
        key: '不限',

    },
    {
        title: '地铁',
        selectable: false,
        value: '地铁',
        key: '地铁',
        children: [
            {
                title: '1号线',
                value: '1号线',
                key: '1号线',
            },
            {
                title: '2号线',
                value: '2号线',
                key: '2号线',
            },
            {
                title: '3号线',
                value: '3号线',
                key: '3号线',
            },
            {
                title: '4号线',
                value: '4号线',
                key: '4号线',
            },
            {
                title: '5号线',
                value: '5号线',
                key: '5号线',
            },
        ],
    },
    {
        title: '区域',
        selectable: false,
        value: '区域',
        key: '区域',
        children: [
            {
                title: '东城区',
                value: '东城区',
                key: '东城区',
            },
            {
                title: '西城区',
                value: '西城区',
                key: '西城区',
            },
            {
                title: '朝阳区',
                value: '朝阳区',
                key: '朝阳区',
            },
            {
                title: '海淀区',
                value: '海淀区',
                key: '海淀区',
            },
            {
                title: '丰台区',
                value: '丰台区',
                key: '丰台区',
            },

        ],
    },

];

// 价格Cascader级联选择
const optionsPrice = [
    {
        value: '不限',
        label: '不限',

    },
    {
        value: '1500元以下',
        label: '1500元以下',

    },
    {
        value: '1500-2000元',
        label: '1500-2000元',

    },
    {
        value: '2000-2500元',
        label: '2000-2500元',

    },
    {
        value: '2500-3000元',
        label: '2500-3000元',

    },
    {
        value: '3000元以上',
        label: '3000元以上',

    },
];

// 更多 
const treeData1 = [
    {
        title: '房屋特色',
        value: '房屋特色',
        key: '房屋特色',
        selectable: false,
        children: [
            {
                title: '集中供暖',
                value: '集中供暖',
                key: '集中供暖',
            },
            {
                title: '品质公寓',
                value: '品质公寓',
                key: '品质公寓',
            },

          
        ],

    },

    {
        title: '房屋状态',
        value: '房屋状态',
        key: '房屋状态',
        selectable: false,
        children: [
            {
                title: '可立即入住',
                value: '可立即入住',
                key: '可立即入住',
            }

        ],
    },
    {
        title: '户型',
        value: '户型',
        key: '户型',
        selectable: false,
        children: [
            {
                title: '1居',
                value: '1居',
                key: '1居',
            },
            {
                title: '2居',
                value: '2居',
                key: '2居',
            },
            {
                title: '3居',
                value: '3居',
                key: '3居',
            },
            {
                title: '3居+',
                value: '3居+',
                key: '3居+',
            },
        ],
    },
    {
        title: '朝向',
        value: '朝向',
        key: '朝向',
        selectable: false,
        children: [
            {
                title: '东',
                value: '东',
                key: '东',
            },
            {
                title: '东南',
                value: '东南',
                key: '东南',
            },
            {
                title: '南',
                value: '南',
                key: '南',
            },
            {
                title: '西',
                value: '西',
                key: '西',
            },
            {
                title: '西南',
                value: '西南',
                key: '西南',
            },
            {
                title: '北',
                value: '北',
                key: '北',
            },
            {
                title: '东北',
                value: '东北',
                key: '东北',
            },
            {
                title: '西北',
                value: '西北',
                key: '西北',
            },
        ],
    },
    {
        title: '排序',
        value: '排序',
        key: '排序',
        selectable: false,
        children: [
            {
                title: '默认排序',
                value: '默认排序',
                key: '默认排序',
            },
            {
                title: '价格从低到高',
                value: '价格从低到高',
                key: '价格从低到高',
            },
            {
                title: '价格从高到低',
                value: '价格从高到低',
                key: '价格从高到低',
            },


        ],
    },
];

class Entiretenancy extends Component {
    constructor() {
        super();
        this.state = {
            price: "价格",
            value: "位置",
            valueMore: ["更多"],
            page:1,
            total:0,
            dataList:[],
            searchCondition:{list_rent:"合",list_diq:[]}
        }
    }

  
    // 初始化
    async componentDidMount(){
        this.getData(1)
    }

    // 用页码和查询条件发送网络请求拿数据
    async getData(page){
        // console.log(this.state.page,this.state.total,this.state.searchCondition);
      
        let {data}= await axios.get("http://127.0.0.1:1906/goods/page",{params:[this.state.searchCondition,{page:page}]
       });

       this.state.total=data.total;
        // 重设react数据
        let dataList=data.data1;

        if(page){this.setState({
            dataList,
            page
        })}else{
            this.setState({
                dataList,
            })
        }
        // console.log("当前页:",this.state.page,"总页数",this.state.total,this.state.searchCondition,);
    }

    // 上一页  页数bug未解决
    turnUp=()=>{
        if(this.state.page>1){
            let  page= this.state.page-1
          this.getData(page)
        }
    }

    // 下一页   页数bug未解决
    turnDown=()=>{
        if(this.state.page<this.state.total){
            let  page= (this.state.page+1)*1;
          this.getData(page);
        }
    }

    // 合租 整租月租
    onChangeType = value => {

    let searchCondition=this.state.searchCondition;
        
        if(value=="不限"||value=="月租"){
            delete  searchCondition.list_rent
        }
        if(value=="整租"){
        searchCondition.list_rent="整";
        }
        if(value=="合租"){
        searchCondition.list_rent="合";
        }

        this.setState({searchCondition});
        this.getData(1)
    };

    // 位置
    onChangeSite= value => {
    console.log(typeof value,value);

    let searchCondition=this.state.searchCondition;
        
    if(value=="不限"){
        delete  searchCondition.list_sub
    }else{
        searchCondition.list_sub=value
    }
    

    this.setState({searchCondition});
    console.log(this.state.searchCondition);

    this.getData(1)
   
};

    // 价格
    onChangePrice=value=>{
    let searchCondition=this.state.searchCondition;


        if(value=="1500元以下"){
             searchCondition.list_price={$lt:1500};
          
        }else if(value=="1500-2000元"){
            searchCondition.list_price={$gt:1500,$lt:2000};
        }else if(value=="2000-2500元"){
            searchCondition.list_price={$gt:2000,$lt:2500};
        }else if(value=="2500-3000元"){
            searchCondition.list_price={$gt:2500,$lt:3000};
        }else if(value=="3000元以上"){
            searchCondition.list_price={$gt:3000};
        }else if(value=="不限"){
            delete  searchCondition.list_price
        }

        this.setState({searchCondition});
        this.getData(1)
}


    //更多
    onChangeMore = valueMore => {
        
    let searchCondition=this.state.searchCondition;
        console.log(valueMore);
        
     // 房屋特色
        if(valueMore.indexOf("集中供暖")!=-1){
            searchCondition.list_cenc_o="集中供暖"
        }else{
            delete searchCondition.list_cenc_o
        }

        if(valueMore.indexOf("品质公寓")!=-1){
            searchCondition.list_cenc_t="品质公寓"
        }else{
            delete searchCondition.list_cenc_t

        }

        // 房屋状态
        if(valueMore.indexOf("可立即入住")!=-1){
            searchCondition.list_cenc_s="可立即入住"
        }else{
            delete searchCondition.list_cenc_s
        }

        // 户型
        


        // 朝向
        function check(item,index,array) {
            let reg=/["东","南","西","北"]/;
             return reg.test(item)
        }
        if(valueMore.some(check)){

            searchCondition.list_diq=new Set();
            ["东","南","西","北","东南","西南","东北","西北"].forEach(function name(item,index) {
                if(valueMore.indexOf(item)!=-1){
                    let  sub= valueMore.indexOf(item)
                      searchCondition.list_diq.add(valueMore[sub])
                  } 
            })
            searchCondition.list_diq=[...searchCondition.list_diq]
        }else{
           searchCondition.list_diq=[]
        }

        console.log("当前页:",this.state.page,"总页数",this.state.total,this.state.searchCondition,);

        this.setState({searchCondition,valueMore });
        this.getData(1)



    };

    render() {

        return (
            
            <div>

                 <div  style={{ width: "100%", height: "100%", display: "flex",marginBottom:"10px" }} >
                {/* 合租 */}
                <Cascader
                    options={options}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={this.onChangeType}
                    defaultValue={["合租"]}
                    style={{ width: "25%", height: "100%", textAlign: "center", border: "none",color:"green",fontWeight:600 }}
                    allowClear={false}
                    suffixIcon={<Icon type="caret-down" style={{color:"green"}} />}
                />,
    
        {/* 位置 */}
                <TreeSelect
                    style={{ width: "25%", position: "static" }}
                    value={this.state.value}
                    dropdownStyle={{ width: "100%", overflow: 'visible', left: "0px", boxShadow: "none", position: "static", }}
                    treeData={treeData}
                    // placeholder="Please select"
                    treeDefaultExpandAll
                    onChange={this.onChangeSite}
                    suffixIcon={<Icon type="caret-down"
                    />}

                // treeCheckable
                />

                {/* 价格 */}
                <Cascader
                    options={optionsPrice}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={this.onChangePrice}
                    defaultValue={["不限"]}
                    style={{ width: "25%", height: "100%", textAlign: "center", border: "none", }}
                    allowClear={false}
                    suffixIcon={<Icon type="caret-down" />}

                />,
    
            {/* 更多 */}

                <TreeSelect
                 multiple
                  style={{ width: "25%", position: "static" ,}}
                  value={this.state.valueMore}
                  dropdownStyle={{ width: "100%" ,overflow: 'visible', left: "0!important", boxShadow: "none", position: "static", }}
                  treeData={treeData1}
                  treeDefaultExpandAll
                  onChange={this.onChangeMore}
                  suffixIcon={<Icon type="caret-down"
                  />}
                    maxTagCount={0}
                    treeIcon
                    maxTagPlaceholder={"更多"}
                >
                </TreeSelect>


            </div >

            <div className="list">
          
                    <List
                    itemLayout="horizontal"
                    dataSource={this.state.dataList}
                    renderItem={item => (
                      <List.Item >
                      <div className="left">
                          <img src={item.list_image} alt="" />
                          <p className="rentType">{item.list_rent}</p>
                      </div>
                      <div className="right">
                          <p className="pTitle">{item.list_title}</p>
                          <p className="pDetail"><Icon type="home" />{item.list_diq}</p>
                          <p className="pSite"> <Icon type="environment" />{item.list_sub}</p>
                          <p className="pPrice">{item.list_price}</p>

                          <p>

                              {item.list_cenc_o==""? <></>: <span className="spanO">{item.list_cenc_o}</span>}

                              {item.list_cenc_t==""? <></>: <span className="spanT">{item.list_cenc_t}</span>}

                              {item.list_cenc_s==""? <></>: <span className="spanS">{item.list_cenc_s}</span>}
                          </p>
                      </div>
                      </List.Item>
                    )}

                  />,
            <div style={{width:"100%",textAlign:"center"}}>
                <button onClick={this.turnUp} style={{color:"white", background: "#4bb4bb",width:"45%",height:"0.4rem"}}>上一页</button>
            <button onClick={this.turnDown}  style={{color:"white", background: "#4bb4bb",width:"45%",height:"0.4rem",marginBottom:"0.1rem"}}>下一页</button>

            <p style={{textAlign:"center",fontSize:".213333rem"}}>第{this.state.page}/{this.state.total}页</p></div>


            </div>

             <div  style={{width:"100%",textAlign:"center",margin:"0.2rem 0"}}> <img style={{width:"90%"}} src="https://public.danke.com.cn/public-20191010-Fr11W7N8KM-DUz-LbntszLAXeqtP" alt=""/>
            <div style={{width:"100%",height:"2rem",background:"#3f4141",marginTop:"0.2rem",paddingTop:"0.2rem"}}><p style={{width:"80%",height:"0.5rem",lineHeight:"0.5rem" , background:"rgba(97, 86, 86, 0.8)",color:"white",textAlign:"center",margin:"auto",fontWeight:"600"}}>客服热线:4001-551-551</p></div>

            </div>
            </div>

        )
    }
}

export default Entiretenancy;


