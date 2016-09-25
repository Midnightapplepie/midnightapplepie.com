import React, {Component} from 'react';

class BlogPreview extends Component{
	render(){
		return (
			<div className="blog-preview-container">
				<h1 className="section-title">Blog</h1>
				<div className="blog-preview-item-container">
					<div className="blog-preview-item">
					</div>
					<div className="blog-preview-item">
					</div>
					<div className="blog-preview-item">
					</div>
				</div>
				<button className="btn"> More... </button>
				<div className="blog-preview-bottom-border"></div>
			</div>
		);
	}
}

export default BlogPreview;