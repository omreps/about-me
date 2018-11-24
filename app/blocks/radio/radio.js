import $ from 'jquery';

$(() => {
	$('.radio__input').change(() => {
		$('.radio__input').each((index, elmt) => {
			if (elmt.checked === true) {
				$(elmt)
					.parent()
					.removeClass('radio__label_unchecked')
					.addClass('radio__label_checked');
			} else {
				$(elmt)
					.parent()
					.removeClass('radio__label_checked')
					.addClass('radio__label_unchecked');
			}
		});
	});
});
