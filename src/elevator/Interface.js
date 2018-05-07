import React, { Component } from 'react';
import ViewFloor from './ViewFloor.js';
import AdminConsole from './AdminConsole.js';
import InsideElevator from './InsideElevator.js';

class Interface extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentFloor: this.props.floors[0],
			doorsAreOpen: false
	 	};
	}
	render() {
		return (
			<div className="elevator">
				<ViewFloor floors={this.props.floors} 	currentFloor={this.state.currentFloor} />
				<AdminConsole
					doorsAreOpen={this.state.doorsAreOpen}
					handleDoors={this.handleDoors}
				 	floorChanger={this.changeFloor} />
				<InsideElevator floors={this.props.floors}
				 	changeToFloor={this.changeToFloor}
					handleDoors={this.handleDoors} />
			</div>
		)
	}
	handleDoors = open => {
		this.setState({ doorsAreOpen: open });
	}
	changeToFloor = targetFloor => {
		let index = this.props.floors.indexOf(targetFloor);
		if( index === -1 ) {
			console.log('Interface.changeToFloor: cannot change floor. ', targetFloor);
			return;
		}
		let newFloor = this.props.floors[index];
		this.setState({ currentFloor: newFloor });
	}
	changeFloor = difference => {
		let index = this.props.floors.indexOf(this.state.currentFloor);
		let newIndex = index + difference;
		if( newIndex < 0 || newIndex >= this.props.floors.length ) {
			console.log('Interface.changeFloor: cannot change floor. ', this.state.currentFloor, difference);
			return;
		}
		let newFloor = this.props.floors[newIndex];
		this.setState({ currentFloor: newFloor });
	}
}

export default Interface;
