import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div className="card light-blue darken-2">
				{this.props.children}
			</div>
		)
	}
}

export default Card;