import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
	render() {
		return (
			<div className="navbar-fixed ">
				<nav className="light-blue darken-4">
	    			<div className="container nav-wrapper">
	      				<a href="#" className="brand-logo">{ this.props.titulo }</a>
	      				<ul id="nav-mobile" className="right hide-on-med-and-down">
						  	<li><Link to="/tutorial">Cómo usar</Link></li>
							<li><Link to="/about">Acerca de</Link></li>
	      				</ul>
	    			</div>
	  			</nav>
  			</div>
		)
	}
}

export default Header;