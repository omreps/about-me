import $ from 'jquery';
import {
	getSliderTickPos,
	SLIDER_LEN,
	SECOND_TICK_COEF,
	THIRD_TICK_COEF}from './sliderticks.js';

class Slider {
	constructor() {
		this.sliderLen = SLIDER_LEN;
		this.defultTickNum = 0;
		this.secondSliderTick = this.sliderLen * SECOND_TICK_COEF;
		this.thirdSliderTick = this.sliderLen * THIRD_TICK_COEF;
	}
	setDefaultTickNum(defultTickNum) {
		this.defultTickNum = defultTickNum;
		$('.slidercontainer__slider').val(this.getDefaultTickVal());
	}
	getDefaultTickVal() {
		const valByTick = {
			0: 0,
			1: this.secondSliderTick,
			2: this.thirdSliderTick,
			3: this.sliderLen
		};
		return valByTick[this.defultTickNum] || 0;
	}
	getFixedSliderPos(val) {
		return getSliderTickPos(
			val,
			this.sliderLen,
			this.secondSliderTick,
			this.thirdSliderTick
		);
	}
	onMouseUp(evnt) {
		const currentVal = this.getFixedSliderPos($(evnt.currentTarget).val());
		$('.slidercontainer__slider').val(currentVal);
		$('.slidercontainer__slider').removeClass(
			'slidercontainer__slider_hidden'
		);
	}
	onMouseDn() {
		$('.slidercontainer__slider').addClass(
			'slidercontainer__slider_hidden'
		);
	}
	onMouseMove() {
		$('.slidercontainer__slider').removeClass(
			'slidercontainer__slider_hidden'
		);
	}
	onChange(evnt) {
		const currentVal = this.getFixedSliderPos($(evnt.currentTarget).val());
		$('.slidercontainer__slider').val(currentVal);
		$('.slidercontainer__slider').removeClass(
			'slidercontainer__slider_hidden'
		);
	}
}

const sldr = new Slider();

$(() => {
	$('.slidercontainer__slider').on('mouseup', evnt => sldr.onMouseUp(evnt));
	$('.slidercontainer__slider').on('change', evnt => sldr.onChange(evnt));

	$('.slidercontainer__slider').mousedown(() => sldr.onMouseDn());
	$('.slidercontainer__slider').mousemove(() => sldr.onMouseMove());
});

export default sldr;
