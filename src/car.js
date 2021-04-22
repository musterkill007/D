import React, { Component } from 'react'
import './car.css'
import X from './icon/X.png'
import add from "./icon/加.png"
import reduce from "./icon/减.png"
import inside from "./icon/in.png"
import out from "./icon/out.png"

export default class car extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carList: this.props.carList,
            type:'',
            display: 'none'
        }
    }
    _del = index => {
        let list = this.state.carList
        list.splice(index, 1)
        this.setState({ carList: list })
        this.props.changeCarList(list)
    }
    _reduce = reIndex => {
        let list = this.state.carList
        list[reIndex].numb--
        if (list[reIndex].numb == 0) {
            list.splice(reIndex, 1)
        }
        this.setState({ carList: list })
        this.props.changeCarList(list)
    }
    _add = adIndex => {
        let list = this.state.carList
        list[adIndex].numb++
        this.setState({ carList: list })
        this.props.changeCarList(list)
    }
    _sett = () => {
        console.log('lalsls');
    }
    _take=()=>{
        this.setState({type:'take'})
        this.setState({display:'block'})
    }
    _eat=()=>{
        this.setState({type:'eat'})
        this.setState({display:'none'})
    }
    render() {
        return (
            <div id='car'>
                <div id="car_type">
                    <div id={this.state.type=='take'?"take_active":'take'} onClick={this._take} >
                        <img id="take_img" src={out}></img>
                    </div>
                    <div id={this.state.type=='eat'?"eat_active":'eat'} onClick={this._eat}>
                        <img id='eat_img' src={inside}></img>
                    </div>
                </div>
                <div id="order_box">
                    <div id="order_top"><text id="top_text">订单详情</text></div>
                    <div id="carList_box">
                    <div id="order_list">
                        {this.state.carList.map((item, index) => {
                            if (index > 0) {
                                return <div id="bill_box">
                                    <div id="bill_top">
                                        <text id="bill_name">{item.name}</text>
                                        <div id="X_box" onClick={() => this._del(index)} >
                                            <img id="X_img" src={X}></img>
                                        </div>
                                    </div>
                                    <div id="bill_foot">
                                        <div id="bill_contral">
                                            <div id="carReduce_box" onClick={() => this._reduce(index)}>
                                                <img src={reduce} id="carReduce_img"></img>
                                            </div>
                                            <div id="bill_numb">{item.numb}</div>
                                            <div id="carAdd_box" onClick={() => this._add(index)}>
                                                <img src={add} id="carAdd_img"></img>
                                            </div>
                                        </div>
                                        <text id="bill_price">{item.sumPrice}</text>
                                    </div>

                                </div>
                            }

                        })}
                    </div>
                    </div>




                </div>
                <div id="bill_msg">
                    <div id="bill_total">小计：{this.props.carList[0].total}</div>
                    <div id="bill_total" style={{display: this.state.display}}>配送费 :10</div>
                    <div id="bill_total">共计：{this.state.display=="none"?this.props.carList[0].total:this.props.carList[0].total+10}</div>
                    <div id="bill_total" style={{display: this.state.display=="none"?"block":"none"}}><br/></div>

                    </div>
                    <div id="btn_box">
                        <button id="bill_btn" onClick={this._sett}>
                            结算
                        </button>
                    </div>
            </div>
        )
    }
}
