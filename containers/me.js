import React, { Component } from 'react';
import {connect} from 'react-redux';

class Me extends Component {
	componentDidMount(){
		document.querySelector("#right-arm-container").className = "arm-90";
    	document.querySelector("#right-thumb").className = "thumb-up";
    	document.querySelector("#left-eye").innerHTML = '&bullet;'
    	document.querySelector("#right-eye").innerHTML = '&bullet;'

	}
	render(){
		return (
			<div id="stage">
				<div id="me-container">
				    <div id="head-container">
				        <div id="hair-container">
				            <div id="hair-1"></div>
				            <div id="hair-2"></div>
				            <div id="hair-3"></div>
				        </div>
				        <div id="face-container">
				            <div id="glasses">
				                <div id="left-eye">

				                </div>
				                <div id="bridge"></div>
				                <div id="right-eye">
	
				                </div>
				            </div>
				            <div id="mouth"></div>
				        </div>
				    </div>
				    <div id="upper-body-container">
				        <div id="left-arm-container">
				            <div id="left-arm"></div>
				            <div id="left-hand"></div>
				        </div>
				        <div id="my-body">
				        </div>
				        <div id="right-arm-container">
				            <div id="right-arm"></div>
				            <div id="right-hand">
				                <div id="right-thumb"></div>
				            </div>
				        </div>
				    </div>
				    <div id="lower-body-container">
				        <div id="hip">
				        </div>
				        <div id="left-leg-container">
				            <div id="left-leg"></div>
				            <div id="left-feet"></div>
				        </div>
				        <div id="right-leg-container">
				            <div id="right-leg"></div>
				            <div id="right-feet"></div>
				        </div>
				    </div>
				</div>
			</div>
		);

	}
}

export default Me;