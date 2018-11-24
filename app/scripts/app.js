import $ from 'jquery';
import sldr from '../../app/blocks/slider/slider.js';
import '../../app/blocks/checkbox/checkbox.js';
import '../../app/blocks/radio/radio.js';
import '../../app/blocks/myworks/myworks.js';
import '../../app/blocks/index/index.js';
import '../../app/blocks/modal/modal.js';
import {makeSliders}from '../../app/blocks/sampleJS/samplejs.js';
import '../../app/blocks/sampleCanvas/samplecanvas.js';
import '../../app/blocks/sampleSVG/samplesvg.js';

const DEFAULT_SLIDER_TICK = 2;

$(() => {
	//svg4everybody();
	sldr.setDefaultTickNum(DEFAULT_SLIDER_TICK);

	$('.js').click(event => {
		$('.modal').removeClass('modal_hide');
		$('.modal').addClass('modal_show');
		$('.stageCanvas').removeClass('stageCanvas_show');
		$('.stageCanvas').addClass('stageCanvas_hide');
		$('.stageSVG').removeClass('stageSVG_show');
		$('.stageSVG').addClass('stageSVG_hide');
		$('.stageJS').removeClass('stageJS_hide');
		$('.stageJS').addClass('stageJS_show');
		event.stopPropagation();
		makeSliders();
	});

	$('.canvas').click(event => {
		$('.modal').removeClass('modal_hide');
		$('.modal').addClass('modal_show');
		$('.stageJS').removeClass('stageJS_show');
		$('.stageJS').addClass('stageJS_hide');
		$('.stageSVG').removeClass('stageSVG_show');
		$('.stageSVG').addClass('stageSVG_hide');
		$('.stageCanvas').removeClass('stageCanvas_hide');
		$('.stageCanvas').addClass('stageCanvas_show');
		event.stopPropagation();
	});

	$('.svg').click(event => {
		$('.modal').removeClass('modal_hide');
		$('.modal').addClass('modal_show');
		$('.stageJS').removeClass('stageJS_show');
		$('.stageJS').addClass('stageJS_hide');
		$('.stageCanvas').removeClass('stageCanvas_show');
		$('.stageCanvas').addClass('stageCanvas_hide');
		$('.stageSVG').removeClass('stageSVG_hide');
		$('.stageSVG').addClass('stageSVG_show');
		event.stopPropagation();
	});
});
