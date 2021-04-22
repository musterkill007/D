import React, { Component } from 'react'
import './sidebar.css'
import start from "./icon/start.png";
import end from "./icon/end.jpg";

export default class sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
             active:0
        }
    }
    // 向父组件home传递索引
    _click=(a)=>{
         this.props.handleIndex(a);
         this.setState({active:a})
    }

    render() {
        return (
            <div id='sidebar'>
                <div>
                    <img style={{width: "100%",padding:"10px"}} src={start} alt=""/>
                </div>
                <div style={{paddingLeft:"18%"}}>
                    {this.props.name.map((name,index)=>{
                        return <div id={this.state.active==index?"active":"side_namebox"} onClick={()=>this._click(index)}>{name}</div>
                    })}
                </div>
                <div>
                    <img style={{width: "100%"}} src={end} alt=""/>
                </div>
            </div>
        )
    }
}
