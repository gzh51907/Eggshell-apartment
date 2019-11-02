import React, { Component } from 'react'
import { Icon, List, Button } from 'antd';
class Collection extends Component {
    state = {
        datalist: [

            {
                goods_imgs: "https://public.danke.com.cn/public-20190814-FlPVzdY-MmVcSPff1DrKtfkK4lWU-roomPcList.jpg",
                goods_tetler: "大新 大陆庄园富景阁 次卧 朝南 B室",
                goods_distance: "距1号罗宝线大新站步行约11分钟",
                goods_prite: "￥2200"
            },
            {
                goods_imgs: "https://public.danke.com.cn/public-20190814-FlPVzdY-MmVcSPff1DrKtfkK4lWU-roomPcList.jpg",
                goods_tetler: "大新 大陆庄园富景阁 次卧 朝南 B室",
                goods_distance: "距1号罗宝线大新站步行约11分钟",
                goods_prite: "￥2200"
            }
        ]
    }
    render() {
        let { datalist } = this.state
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={datalist}
                    renderItem={item => (
                        <List.Item style={{ padding: ".13333rem" }}>
                            <div>
                                <img src={item.goods_imgs} style={{ width: " 1.8833333rem", height: "1.3066667rem", marginRight: ".066667rem" }} />
                            </div>
                            <div style={{ width: "2.696667rem" }}>
                                <p style={{ marginBottom: ".106667rem", fontSize: ".18rem", fontWeight: 600 }}>
                                    {item.goods_tetler}
                                </p>
                                <p style={{ marginBottom: ".106667rem", fontSize: ".12rem" }}>
                                    {item.goods_distance}
                                </p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div><span style={{ fontSize: ".186667rem", fontWeight: 600, color: "red" }}>
                                        {item.goods_prite}
                                    </span>
                                        <span style={{ lineHeight: ".166667rem" }}>元/月</span></div>
                                    <div>
                                        <Button.Group>
                                            <Button size="small" type="primary" style={{ fontSize: ".2rem" }}>
                                                预约看房
                                            </Button>
                                            <Button type="danger" size="small" style={{ fontSize: ".2rem" }}>
                                                删除
                                            </Button>
                                        </Button.Group>
                                    </div>
                                </div>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Collection;