$(document).ready(function() {
	$('.emoticon').click(function() {
		var textarea_val = jQuery.trim($('#comment').val());
		var emoticon_val = $(this).attr('value');

		if ( textarea_val == '' ) {
			var space  = '';
		} else {
			space = ' ';
		}

		$('#comment').focus().val(jQuery.trim(textarea_val + space + emoticon_val + space));

	});
});