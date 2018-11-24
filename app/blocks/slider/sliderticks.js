function getSliderTickPos(val, len, secondTickVal, thirdTickVal) {
	const secondTickMiddle = secondTickVal / 2;
	const thirdTickMiddle = secondTickVal + (thirdTickVal - secondTickVal) / 2;
	const forthTickMiddle = thirdTickVal + (len - thirdTickVal) / 2;

	if (val < secondTickMiddle) {
		return 0;
	}
	if (val >= secondTickMiddle && val < thirdTickMiddle) {
		return secondTickVal;
	}
	if (val >= thirdTickMiddle && val < forthTickMiddle) {
		return thirdTickVal;
	}
	if (val >= forthTickMiddle) {
		return len;
	}
}
const SLIDER_LEN = 3000;
const SECOND_TICK_COEF = 0.19066;
const THIRD_TICK_COEF = 0.48366;

export {getSliderTickPos, SLIDER_LEN, SECOND_TICK_COEF, THIRD_TICK_COEF};
