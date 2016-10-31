import React, { Component } from 'react';
import TopNav from '../containers/top-nav';
import axios from 'axios';

var newpostcontainer = {
	backgroundColor: '#006064',
	display: 'block'
}

var imagedropbox = {
	minWidth: '200px',
	minGeight: '200px',
	width: '30vw',
	height: '30vw',
	border: '1px solid white',
	borderradius: '10px',
	margin: 'auto'
}

class NewPost extends Component{

	componentDidMount(){
		console.log("mounted");
		function preventLoadingFile(e){
			if(e.target != document.querySelector("#imagedropbox"))
				e.preventDefault(); 
		}
		window.addEventListener("dragover",preventLoadingFile, false);
		window.addEventListener("drop",preventLoadingFile, false);
	}

	handleFileDrops(e){
		e.preventDefault();
		console.log(e);
		var file = e.dataTransfer.files[0];

		axios.put("/add-image", file).then(function(result){
			debugger;
			alert(result);
		})

	}

	render(){
		return(
			<div id="new-post-container"
				style={newpostcontainer}
			>
				<TopNav />
				<div id="image-drop-box" 
				style={imagedropbox}
				onDrop={this.handleFileDrops}>
				</div>
				<button className="btn">Upload</button>
			</div>
		);
	}
}

export default NewPost;