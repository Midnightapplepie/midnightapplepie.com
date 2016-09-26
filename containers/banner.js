import React, {Component} from 'react';
import TopNav from './top-nav';

class Banner extends Component {
	projectBtnHandler(){
		var projects = document.querySelector("#projects");
		projects.scrollIntoView({block:"start",behavior:"smooth"});
	}

	render(){

		return(
			<div id="home-banner">
				<TopNav />
				<div className="profile-pic-container">
					<div className="profile-pic"></div>
					<div className="about-me">
						<h2>Kevin Xu</h2>
						<h3>Full Stack Web Developer</h3>
						<p>My Life Code:</p>
						<ul>
							<li>"Do more of what makes you happy"</li>
							<li>"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."</li>
							<li>"I Love Food"</li>
						</ul>
					</div>
				</div>
				<div 
					href="#projects" 
					className="project-btn"
					onClick = {this.projectBtnHandler}
					>Projects</div>
			</div> 
		);
	}
}

export default Banner;