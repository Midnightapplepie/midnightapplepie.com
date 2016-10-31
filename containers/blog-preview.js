import React, {Component} from 'react';

class BlogPreview extends Component{
	render(){
		return (
			<div className="blog-preview-container">
				<h1 className="section-title">What Happened...</h1>
				<div className="blog-preview-item-container">
					<div className="blog-preview-item">
						<img src="" />
					</div>
					<div className="blog-preview-item">
						<img src="" />
					</div>
					<div className="blog-preview-item">
						<img src="" />
					</div>
				</div>
				<div className="row">
					<button className="btn"> Under Construction ... </button>
				</div>
				<div className="blog-preview-bottom-border"></div>
			</div>
		);
	}
}

export default BlogPreview;