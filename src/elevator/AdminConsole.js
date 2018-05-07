import React, { Component } from 'react';

class AdminConsole extends Component {
	/*constructor(props) {
		super(props);
		//this.state = { doorsAreOpen: props.doorsAreOpen };
	}*/
	handleOpenClick = event => {
		this.props.handleDoors(true);
	}
	handleCloseClick = event => {
		this.props.handleDoors(false);
	}
	render() {
		let doorsMessage;
		if( this.props.doorsAreOpen ) {
			doorsMessage = 'Doors are open.';
		} else {
			doorsMessage = 'Doors are closed.';
		}
		/*function f() {}
		{f}
		{f()}
		{() => f()}*/
		return (
			<div className="admin">
				<h3>Admin console</h3>
				<button onClick={() => this.props.floorChanger(1)}>Up</button>
				<button onClick={() => this.props.floorChanger(-1)}>Down</button>
				<button onClick={this.handleOpenClick}
					disabled={this.props.doorsAreOpen}
					> Open </button>
				<button onClick={this.handleCloseClick}
					disabled={!this.props.doorsAreOpen}
					> Close </button>
				<br/>
				{doorsMessage}
			</div>
		);
	}
}

export default AdminConsole;
