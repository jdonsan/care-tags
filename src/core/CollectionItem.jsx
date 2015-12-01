import React, {Component} from 'react';
import classNames from 'classnames';

class CollectionItem extends Component {
	render() {
		const collectionItemClass = classNames({
      		'collection-item': true,
      		'avatar': this.props.avatar || false
    	}); 
		
		return (
			<li className={ collectionItemClass }>
      			<img src="http://lorempixel.com/64/64/" alt="" className="circle" />
      			<span className="title">Title</span>
      			<p>
				  	First Line
      			</p>
      			<a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    		</li>
		);
	}
}

export default CollectionItem;