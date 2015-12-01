import React from 'react';
import Header from './Header';
import Container from '../core/Container';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header titulo="CareTags" />
				<Container>
					{ this.props.children }
				</Container>
			</div>
		);
	}
}

export default App;

