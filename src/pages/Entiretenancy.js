import React, { Component } from 'react';
import { Select, Cascader, Icon, TreeSelect , List, Button } from 'antd';
import './Entiretenancy.scss';
import axios from 'axios';

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
function onChange(value) {
    console.log(value);
}
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
        title: '附近',
        selectable: false,
        value: '附近',
        key: '附近',
        children: [
            {
                title: '1000米内',
                value: '1000米内',
                key: '1000米内',
            },
            {
                title: '2000米内',
                value: '2000米内',
                key: '2000米内',
            },
            {
                title: '3000米内',
                value: '3000米内',
                key: '3000米内',
            },
        ],
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
                title: '独卫',
                value: '独卫',
                key: '独卫',
            },
            {
                title: '独立阳台',
                value: '独立阳台',
                key: '独立阳台',
            },
            {
                title: '独立淋浴',
                value: '独立淋浴',
                key: '独立淋浴',
            },
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

            {
                title: '近地铁',
                value: '近地铁',
                key: '近地铁',
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
            },
            {
                title: '可预订',
                value: '可预订',
                key: '可预订',
            },

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
            value1: "更多",
            page:"1",
            total:"3",
            dataList:[],
        }
    }
    async componentDidMount(){
        let {data}= await axios.get("http://127.0.0.1:1906/goods/page",{params:[{list_rent:"合"},{pa:4}]
    });
        let dataList=data
        // 手动请求第一个tab内容
        this.setState({
            dataList
        })
        console.log( dataList);
        
        
    }

    onChange = value => {
        console.log(value);
        this.setState({ value });
    };

    onChange1 = value1 => {
        console.log(value1);
        this.setState({ value1 });
    };
    goto(_id){
        console.log(_id);
        
        this.props.history.push(`/datails/${_id}`)
    }

    render() {

        return (
            
            <div>

                 <div  style={{ width: "100%", height: "100%", display: "flex",marginBottom:"10px" }} >
                {/* 合租 */}
                <Cascader
                    options={options}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={onChange}
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
                    onChange={this.onChange}
                    suffixIcon={<Icon type="caret-down"
                    />}

                // treeCheckable
                />

                {/* 价格 */}
                <Cascader
                    options={optionsPrice}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={onChange}
                    defaultValue={["不限"]}
                    style={{ width: "25%", height: "100%", textAlign: "center", border: "none", }}
                    allowClear={false}
                    suffixIcon={<Icon type="caret-down" />}

                />,
    
            {/* 更多 */}

                <TreeSelect
                  style={{ width: "25%", position: "static" ,}}
                  value={this.state.value1}
                  dropdownStyle={{ width: "100%" ,overflow: 'visible', left: "0!important", boxShadow: "none", position: "static", }}
                  treeData={treeData1}
                  // placeholder="Please select"
                  treeDefaultExpandAll
                  onChange={this.onChange1}
                  suffixIcon={<Icon type="caret-down"
                  />}
                    maxTagPlaceholder={"更多"}
                    maxTagCount={0}
                    multiple
                    treeIcon
                     // dropdownMatchSelectWidth={false}
                // onTreeExpand={function name(expandedKeys) {
                //     console.log(expandedKeys);
                // }}
                // onSelect={function (value, node, extra) {
                //     console.log(value, node, extra);

                // }}
                >
                </TreeSelect>
            </div >

            <div className="list">
          
                    <List
                    itemLayout="horizontal"
                    dataSource={this.state.dataList}
                    renderItem={item => (
                      <List.Item onClick={this.goto.bind(this,item._id)}>
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
            <div style={{width:"100%",textAlign:"center"}}><button style={{color:"white", background: "#4bb4bb",width:"45%",height:"0.4rem"}}>上一页</button>
            <button style={{color:"white", background: "#4bb4bb",width:"45%",height:"0.4rem",marginBottom:"0.1rem"}}>下一页</button>

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


