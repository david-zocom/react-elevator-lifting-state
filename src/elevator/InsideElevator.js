import React, { Component } from 'react';

class InsideElevator extends Component {
	render() {
		const list = this.props.floors.map(
			v => <button
				key={v}
				onClick={() => this.props.changeToFloor(v)}
				>{v}</button>
		);
		return (
			<div className="inside">
				<h3>Inside the elevator</h3>
				{list}
				<button onClick={() => this.props.handleDoors(true)}>Doors</button>
			</div>
		);
	}
}

export default InsideElevator;
