import $ from 'jquery';

$(() => {
	$('.canvas_center').on('mouseenter', () => {
		$('.canvas_center').addClass('canvas_dynamic');
		$('.canvas_center').removeClass('canvas_static');
	});
	$('.canvas_center').on('mouseleave', () => {
		$('.canvas_center').addClass('canvas_static');
		$('.canvas_center').removeClass('canvas_dynamic');
	});
	$('.js_center').on('mouseenter', () => {
		$('.js_center').addClass('js_dynamic');
		$('.js_center').removeClass('js_static');
	});
	$('.js_center').on('mouseleave', () => {
		$('.js_center').addClass('js_static');
		$('.js_center').removeClass('js_dynamic');
	});
	$('.svg_center').on('mouseenter', () => {
		$('.svg_center').addClass('svg_dynamic');
		$('.svg_center').removeClass('svg_static');
	});
	$('.svg_center').on('mouseleave', () => {
		$('.svg_center').addClass('svg_static');
		$('.svg_center').removeClass('svg_dynamic');
	});
});
