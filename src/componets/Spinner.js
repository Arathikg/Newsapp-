import React, { Component } from 'react'
import Fadingfountain from './Fadingfountain.gif';
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
               < img src={Fadingfountain} alt="loading"/>
            </div>
        )
    }
}
