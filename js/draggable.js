$(document).ready(function() {
	$('#drag').draggable( { cursor: 'pointer', opacity: 0.60, revert: true, 
	start: function() {
		$('#event').text('Dragging started');
	},
	drag: function() {
		$('#event').text('Dragging');
	},
	stop: function() {
		$('#event').text('Dragging stopped');
	} } );
	// $('#drag').draggable( { cursor: 'pointer', opacity: 0.60, revert: true, revertDuration: 5000 } );
	// $('#drag').draggable( { cursor: 'pointer', opacity: 0.60, grid: [20, 20] } );
	// $('#drag').draggable( { cursor: 'crosshair' } );
	// $('#drag').draggable( { axis: 'x' } );
	// $('#drag').draggable( { containment: 'document' } );
	// $('#drag').draggable( { containment: 'parent' } );
	// Parent - add a background-color, height and width style to see this work
});