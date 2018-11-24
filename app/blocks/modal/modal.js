import $ from 'jquery';

$(() => {
	$('.mcontent__close').click(() => {
		$('.modal').removeClass('modal_show');
		$('.modal').addClass('modal_hide');
	});
	$('.mcontent').click(event => {
		if (event.target.className === '.mcontent' || $(event.target).parents('.mcontent').length) {
			event.stopPropagation();
		}
	});
	$(window).click(() => {
		$('.modal').removeClass('modal_show');
		$('.modal').addClass('modal_hide');
	});
});
