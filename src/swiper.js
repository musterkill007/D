import React, { Component } from 'react'
import { Carousel } from 'antd';
import lb1 from './icon/轮播1.jpg'
import lb2 from './icon/轮播2.jpg'
import lb3 from './icon/轮播3.jpg'
import "./swiper.css"
import 'antd/dist/antd.css';

const contentStyle = {
    width:'100%'
  };
export default class swiper extends Component {
    render() {
        return (
                <Carousel autoplay>
                        <img src={lb1} style={contentStyle} alt=""></img>
                        <img src={lb2} style={contentStyle} alt=""></img>
                        <img src={lb3} style={contentStyle} alt=""></img>
                </Carousel>
        )
    }
}
