export function makeSliders() {
	function checkMansColors() {
		document.querySelectorAll('li').forEach(man => {
			const manX = man.getBoundingClientRect().left;
			const manY = man.getBoundingClientRect().top;
			const manW = man.offsetWidth;
			const manH = man.offsetHeight;

			const red = document.getElementsByClassName('drag_red')[0];
			const redY = red.getBoundingClientRect().top;
			const redH = red.offsetHeight;

			const yellow = document.getElementsByClassName('drag_yellow')[0];
			const yellowX = yellow.getBoundingClientRect().left;
			const yellowW = yellow.offsetWidth;

			if (
				manX >= yellowX &&
				manX + manW <= yellowX + yellowW &&
				manY >= redY &&
				manY + manH <= redY + redH
			) {
				man.className = 'red yellow';
			} else {
				man.className = '';
			}
		});
	}

	function setRedElementDragable(elmnt, wrapper) {
		let pos1 = 0;
		let pos2 = 0;

		function elementDrag(e) {
			elmnt.style.cursor = 'grabbing';
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			pos1 = pos2 - (e.touches !== undefined ? e.touches[0].clientY : e.clientY);
			pos2 = e.touches !== undefined ? e.touches[0].clientY : e.clientY;

			const top = elmnt.offsetTop - pos1;

			if (top > 0) {
				if (top + elmnt.offsetHeight < wrapper.offsetHeight) {
					elmnt.style.marginTop = top + 'px';
				} else {
					elmnt.style.marginTop =
						wrapper.offsetHeiht - elmnt.offsetHeight + 'px';
				}
			} else {
				elmnt.style.marginTop = 0 + 'px';
			}

			checkMansColors();
		}

		function closeDragElement() {
			document.onmouseup = null;
			document.onmousemove = null;
			document.ontouchend = null;
			document.ontouchmove = null;
			elmnt.style.cursor = 'grab';
		}

		function dragMouseDown(e) {
			e.stopPropagation();
			e = e || window.event;
			e.preventDefault();
			pos2 = e.touches !== undefined ? e.touches[0].clientY : e.clientY;
			document.onmouseup = closeDragElement;
			document.ontouchend = closeDragElement;
			document.onmousemove = elementDrag;
			document.ontouchmove = elementDrag;
		}

		elmnt.onmousedown = dragMouseDown;
		elmnt.ontouchstart = dragMouseDown;
	}

	function setYellowElementDragable(elmnt, wrapper) {
		let pos1 = 0;
		let pos2 = 0;

		function elementDrag(e) {
			elmnt.style.cursor = 'grabbing';
			e.stopPropagation();
			e = e || window.event;
			e.preventDefault();
			pos1 =
				pos2 -
				(e.touches !== undefined ? e.touches[0].clientX : e.clientX);
			pos2 = e.touches !== undefined ? e.touches[0].clientX : e.clientX;

			const left = elmnt.offsetLeft - pos1;

			if (left > 0) {
				if (left + elmnt.offsetWidth < wrapper.offsetWidth) {
					elmnt.style.left = left + 'px';
				} else {
					elmnt.style.left =
						wrapper.offsetWidth - elmnt.offsetWidth + 'px';
				}
			} else {
				elmnt.style.left = 0 + 'px';
			}

			checkMansColors();
		}

		function closeDragElement() {
			document.onmouseup = null;
			document.onmousemove = null;
			document.ontouchend = null;
			document.ontouchmove = null;
			elmnt.style.cursor = 'grab';
		}

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			pos2 = e.touches !== undefined ? e.touches[0].clientX : e.clientX;
			document.onmouseup = closeDragElement;
			document.ontouchend = closeDragElement;
			document.onmousemove = elementDrag;
			document.ontouchmove = elementDrag;
		}

		elmnt.onmousedown = dragMouseDown;
		elmnt.ontouchstart = dragMouseDown;
	}

	setRedElementDragable(
		document.getElementsByClassName('drag_red')[0],
		document.getElementsByClassName('drag_red_wrapper')[0]
	);
	setYellowElementDragable(
		document.getElementsByClassName('drag_yellow')[0],
		document.getElementsByClassName('drag_yellow_wrapper')[0]
	);
}
