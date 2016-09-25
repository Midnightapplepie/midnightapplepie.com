import React, {Component} from 'react';
import {Link} from 'react-router';

class TopNav extends Component{
	render(){
		return(
			<div className="top-nav">
				<button 
					className="btn"
					type="button">Home
				</button>
				<Link 
					className="btn"
					to="/resume">resume</Link>
				<button 
					className="btn"
					type="button">LinkedIn
				</button>
			</div>
		);
	}
}

export default TopNav;