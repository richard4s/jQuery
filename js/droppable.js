$(document).ready(function() {

	$('.name, .place').draggable({ containment: 'document', revert: true });

	$('#drop').droppable({ hoverClass: 'border', tolerance: 'pointer', accapt: '.name',
		over: function() {
			$('#drop').text('Something has hovered over');
		},
		out: function() {
			$('#drop').text('Something has been dragged out');
		},
		drop: function() {
			$('#drop').text('something dropped');
		}
 });

});