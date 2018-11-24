import $ from 'jquery';

$(() => {
	$('.land').on('mouseenter', evnt => {
		if ($(evnt.currentTarget).attr('class') !== 'land_click') {
			$(evnt.currentTarget).attr('class', 'land_hover');
		}
	});
	$('.land').on('mouseleave', evnt => {
		if ($(evnt.currentTarget).attr('class') !== 'land_click') {
			$(evnt.currentTarget).attr('class', 'land');
		}
	});
	$('.land').on('click', evnt => {
		$(evnt.currentTarget).attr('class', 'land_click');
	});
});
