$('#save').click(function() {
	$('#dialog').attr('title', 'Saved').text('Settings have been saved.').dialog({ buttons: { 'Ok': function() {
		$(this).dialog('close');
	} }, closeOnEscape: true, draggable: false, resizable: false, show: 'bounce',
		 modal: true });
});