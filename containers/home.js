import React, { Component } from 'react';
import {connect} from 'react-redux';
import Banner from './banner';
// import BlogPreview from './blog-preview';
import Me from './me';
import Projects from './projects';

class Home extends Component {

	render(){
		return (
			<div>
				<Banner />
				<Me />
				<Projects />
			</div>
		);

	}
}

export default Home;