let windowWidth = $(window).width();

/*
	Handle Search Hero
 */

const handleSearchHero = function () {
	$('#inputSearch').keyup(function () {
		let inputSearch = $(this),
			wrapInputSearch = inputSearch.parent('#form-wrap');

		(inputSearch.val() !== '') ? wrapInputSearch.addClass('is-result') : wrapInputSearch.removeClass('is-result');
	});
};

const handleToggleFavorite = function () {
	$('.button-favorite').click(function () {
		$(this).toggleClass('active');
	});
}

$(document).ready(function () {
	handleSearchHero();
	handleToggleFavorite();
});