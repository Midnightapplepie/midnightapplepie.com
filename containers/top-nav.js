import React, { Component } from 'react';
import { Link } from 'react-router';

class TopNav extends Component {
    render() {
        return ( < div className = "top-nav" >
            < Link className = "btn"
            to = "/" > Home < /Link> < Link className = "btn"
            to = "/resume" > Resume < /Link> < a className = "btn"
            href = "https://www.linkedin.com/in/kevxjia"
            target = "_blank" > LinkedIn < /a> < /div>
        );
    }
}
/*				<Link
					className="btn"
					to="new-post">New Post</Link>
					*/

export default TopNav;
