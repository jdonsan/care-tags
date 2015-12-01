import React, {Component} from 'react';

class CardContent extends Component {
	render() {
		return (
			<div className="card-content white-text">
				<span className="card-title">Card Title</span>
				<p>
					I am a very simple card. I am good at containing small bits of information.
					I am convenient because I require little markup to use effectively.
				</p>
			</div>
		);
	}
}

export default CardContent;