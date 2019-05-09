import React, { Component } from 'react';
import Map from './Map';

class Search extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 37.335402, lng: -121.882374}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Search;