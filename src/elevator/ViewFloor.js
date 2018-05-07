import React from 'react';

function ViewFloor(props) {
	// props: floors, currentFloor
	const list = props.floors.map(
		v => <div key={v} className={(props.currentFloor === v) ? 'highlight' : ''}>{v}</div>
	);
	return (
		<div className="viewFloors">
			<h3>Floors</h3>
			{list}
		</div>
	)
}

export default ViewFloor;
