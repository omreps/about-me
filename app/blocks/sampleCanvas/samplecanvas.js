import $ from 'jquery';

let fClockStop = false;

function resizeCanvasToDisplaySize(canvas) {
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;

	if (canvas.width !== width || canvas.height !== height) {
		canvas.width = width;
		canvas.height = height;
		return true;
	}

	return false;
}

function drawArc() {
	const canvas = document.getElementsByClassName('areaCanvas__canvas')[0];
	resizeCanvasToDisplaySize(canvas);
	const ctx = canvas.getContext('2d');
	const cw = canvas.clientWidth;
	const ch = canvas.clientHeight;
	const strokewidth = 25;
	const cx = cw / 2;
	const cy = ch / 2;
	const PI = Math.PI;

	let radius = Math.min(cw, ch) / 2 - strokewidth * 2;
	let angle = (PI * 5) / 6;

	ctx.lineWidth = strokewidth;
	ctx.lineCap = 'butt';
	ctx.strokeStyle = 'mediumVioletRed';

	function continueDraw(x, y) {
		requestAnimationFrame(() => {
			angle += 0.017;
			if (angle > PI * 3 + PI / 2) {
				$('.arrowBox').attr('class', 'arrowBox active stop');
				return;
			}
			if (fClockStop) {
				return;
			}
			if (!(angle > 2 * PI + (4 / 6) * PI && angle < 3 * PI)) {
				if (angle > 3 * PI) {
					radius = Math.min(cw, ch) / 2 - strokewidth / 2;
				}
				else if (angle > PI - PI / 6 && angle < PI + PI / 6) {
					ctx.strokeStyle = 'royalBlue';
				}
				else if (angle > PI + PI / 6 && angle < 2 * PI) {
					ctx.strokeStyle = 'skyBlue';
				}
				else if (angle > 2 * PI + PI / 6 && angle < 3 * PI + PI / 3) {
					ctx.strokeStyle = 'lightSeaGreen';
				}
				if (( angle > 2 * PI + PI / 3 - PI / 240) && (angle < 2 * PI + PI / 3 + PI / 160)) {
					ctx.strokeStyle = 'lightSlateGray';
				}
				if (angle > 2 * PI + PI / 2 && angle < 3 * PI) {
					ctx.strokeStyle = 'steelBlue';
				}
				if (angle > 3 * PI && angle < 3 * PI + PI / 6) {
					ctx.strokeStyle = 'cornflowerBlue';
				}
				if (angle > 3 * PI + PI / 6) {
					ctx.strokeStyle = 'paleTurquoise';
				}

				ctx.beginPath();
				ctx.arc(272, 272, radius, angle - 0.017, angle + 0.017);
				ctx.stroke();
			}

			continueDraw(x, y);
		});
	}

	continueDraw(cx, cy);
}

$(() => {
	$('.areaCanvas').on('mouseenter touchend', () => {
		$('.arrowBox').attr('class', 'active arrowBox');
		fClockStop = false;
		drawArc();
	});
	$('.areaCanvas').on('mouseleave', () => {
		fClockStop = true;
		const canvas = document.getElementsByClassName('areaCanvas__canvas')[0];
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
		$('.arrowBox').attr('class', 'arrowBox');
	});
});
