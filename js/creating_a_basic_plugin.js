(function($) {
	$.fn.targetBlank = function () {

		var targetArray = ['_blank', '_self', '_parent', '_top'];
		var target = jQuery.trim($(this).attr('target'));

		if (target == undefined || target == '' || jQuey.inArray(target, targetArray) == false) {
			$('#tag').attr('target', '_blank');
		}

	}
}) (jQuery);