import React, { Component } from 'react'
import './list.css'
import add from './icon/加号2.png'

export default class list extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             idList:[]
        }
    }
    
    _addFD=(addid)=>{
        this.props.getAddId(addid)
    }
    render() {
        
        return (
        <div id='body_box'>
            <div id='list'>
                {this.props.items.map((lists, index) => {
                    return <div id='list_box'>
                        <div id='list_name'>{lists.kname}</div>
                        <img id="list_img" mode='widthFix' src={lists.image}></img>
                        <div id='price_box'>
                            <div id='list_price'>￥{lists.kprice}</div>
                            <div id='img_box' onClick={()=>this._addFD(lists.kid)}>
                                <img src={add}></img>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            </div>
        )
    }
}
