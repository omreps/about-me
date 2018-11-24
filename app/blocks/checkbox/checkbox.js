import $ from 'jquery';

$(() => {
	$('.checkbox__input').change(() => {
		$('.checkbox__input').each((index, elmt) => {
			if (elmt.checked === true) {
				$(elmt)
					.parent()
					.removeClass('checkbox__label_unchecked')
					.addClass('checkbox__label_checked');
			} else {
				$(elmt)
					.parent()
					.removeClass('checkbox__label_checked')
					.addClass('checkbox__label_unchecked');
			}
		});
	});
});
