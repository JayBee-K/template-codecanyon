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

$(document).ready(function () {
    handleSearchHero();
});