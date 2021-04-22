import React, { Component } from 'react'
import Swiper from './swiper'
import Sidebar from './sidebar'
import base from './base'
import List from './list'
import Car from './car'
import './home.css'
import head from "./icon/head.png";

export default class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            base,
            handleIndex: 0,
            lists: '',
            carList: [{total:null}]


        }
    }
    _btn = () => {
        console.log(this.state.Base);
    }
    // 接收子组件sidebar传递的索引
    handleIndex = event => {
        this.setState({ handleIndex: event })
        // this.getlist(event)
        // console.log(this.state.lists);
    }
    // 接收子组件list传过来的商品id
    getAddId = addid => {
        let list = this.state.carList
        // 查看新添加的食物是否被添加过 被添加过啧增加数量，反之则添加新食物
        let type=false
        // 添加过 数量+1
        for(let i = 0;i<list.length;i++){
            if(list[i].id==addid){
                 type=true
                 list[i].numb++
            }
        }
        // 新加的食物没有添加过
        if(!type){
            let name=''
            let price=0
            for(var i=0;i<base.length;i++){
                for(var j=0;j<base[i].item.length;j++){
                    if(base[i].item[j].kid==addid){
                        name=base[i].item[j].kname
                        price=base[i].item[j].kprice
                    }
                }
            }
            list.push({
                name:name,
                id:addid,
                price:price,
                numb:1,
                sumPrice:0
            })
        }
        // total为总价格
        var total=0;
        for(let i=1;i<list.length;i++){
            // sumPrice为同一食品的总价格  单价*数量
            let sumPrice=(list[i].numb)*(list[i].price)
            list[i].sumPrice=sumPrice
            total+=sumPrice
        }
        list[0].total=total
        console.log(list);
        this.setState({carList:list})

    }
    changeCarList=(e)=>{
        this.setState({carList:e})
        this.getAddId()
    }


    render() {
        return (
            <div >
                <div><img style={{width: "100%",padding:"0 300px"}} src={head} alt=""/></div>
                <Swiper></Swiper>
                <div id='home' style={{width:1250}}>
                    <Sidebar name={this.state.base.map((item, index) => item.name)} handleIndex={this.handleIndex}></Sidebar>
                    <List items={this.state.base[this.state.handleIndex].item.map((list, index) => list)} getAddId={this.getAddId}></List>
                    <Car carList={this.state.carList} changeCarList={this.changeCarList}></Car>
                </div>
                <div style={{ height: 200 }}></div>
                <div style={{textAlign:"center",width:"100%",backgroundColor:"lightgray",padding:"20px 0"}}>
                    design by KFC 非商用项目 18软本1 北京城市学院 react期末大作业<br/>
                    李盟 史思佳 李世明 麻睿辰 鞠一辰
                </div>
            </div>
        )
    }
}
