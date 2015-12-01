import React, {Component} from 'react';

class Collection extends Component {
	render() {
		return (
			<ul className="collection">
        { this.props.children }
      </ul>
		);
	}
}

export default Collection;