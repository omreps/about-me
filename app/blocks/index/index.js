import _ from 'lodash';
import $ from 'jquery';
import {
	ABOUT_INPUT_STRINGS_NUM
}from './inputdefines.js';

$(() => {
	$('.about :input').keydown(() => {
		let aboutText = '';
		$('.about :input').each((index, element) => {
			aboutText += $(element).val();
		});
		const txt = aboutText.match(/.{1,43}/g) || [''];
		const linesTxtCount = txt.length;
		const linesInputCount = $('.about :input').length;
		if (
			linesTxtCount < linesInputCount &&
			linesInputCount > ABOUT_INPUT_STRINGS_NUM
		) {
			_.times(linesInputCount - linesTxtCount, () =>
				$('.about :input')
					.last()
					.remove()
			);
		}

		if (linesTxtCount === linesInputCount) {
			return;
		}
		_.times(linesTxtCount, i => {
			if (linesInputCount <= i) {
				$('.about :input')
					.last()
					.clone(true, true)
					.appendTo('.about');
			}
			$('.about :input')
				.eq(i)
				.focus()
				.val('')
				.val(txt[i]);
		});
	});
});
