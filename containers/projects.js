import React, {Component} from 'react';

class Projects extends Component{
	render(){
		return(
			<div className="projects-container" id="projects">
				<h1 className="section-title">Projects</h1>
				<div className="project-item-container">	
					<a className="project-item" id="pj-1" target="_blank" href="http://www.slackershub.club/"></a>
					<a className="project-item" id="pj-2" target="_blank" href="http://www.xiaoloong.com/"></a>
					<a className="project-item" id="pj-3" target="_blank" href="https://mid9blog.herokuapp.com/"></a>
					<a className="project-item" id="pj-4" target="_blank" href="http://midnightapplepie.github.io/projects/canvas.html"></a>
				</div>
			</div>
		);
	}
}

export default Projects;