import React, {Component} from 'react';
import TopNav from './top-nav';

class Resume extends Component{
	render(){
		return(
			<div id="resume-page-container">
				<TopNav />
				<div>
					<h1>Resume</h1>
				</div>
				<iframe src="https://drive.google.com/file/d/0B-FUvTwwXBDiNnpHc2Rjb0huM0U/preview"  width="100%" />
			</div>
		);
	}
}

export default Resume;