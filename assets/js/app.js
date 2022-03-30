let windowWidth = $(window).width();

/*******
 * Handle Search Hero
 */
const handleSearchHero = function () {
	$('#inputSearch').keyup(function () {
		let inputSearch = $(this),
			wrapInputSearch = inputSearch.parent('#form-wrap');

		(inputSearch.val() !== '') ? wrapInputSearch.addClass('is-result') : wrapInputSearch.removeClass('is-result');
	});
};

/*******
 * Handle Toggle Favorite
 */
const handleToggleFavorite = function () {
	$('.button-favorite').click(function () {
		$(this).toggleClass('active');
	});
}
/*******
 * Handle Toggle Collection
 */
const handleToggleCollection = function () {
	$('.button-collection').click(function () {
		let modalCollection = $('#modalCollection'),
			modalLoading_HTML = `<div class="modal-loading">
									<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
									  <circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
									</svg>
								</div>`,
			modalContent_HTML = `<div class="modal-body_head">
									<div class="modal-body_title">
										Add this Item to a Collection
									</div>
									<div class="modal-body_desc">
										FreePod v1.0 - Easy-to-use and flexible podcast manager and player + Admob + Java + Facebook Ads
									</div>
									<div class="modal-body_close" data-dismiss="modal" role="button">
										<i class="fas fa-times"></i>
									</div>
								</div>
								<div class="modal-body_main">
									<div class="modal-body_no__collection d-none">
										You have no Collections yet
									</div>
									<div class="modal-body_collection">
										<ul class="list-unstyled mb-0">
											<li>
												<a class="collection-item" href="javascript:void(0)">
													<i class="fas"></i>
													My Collection 01
												</a>
											</li>
											<li>
												<a class="collection-item" href="javascript:void(0)">
													<i class="fas"></i>
													My Collection 01
												</a>
											</li>
											<li>
												<a class="collection-item" href="javascript:void(0)">
													<i class="fas"></i>
													My Collection 01
												</a>
											</li>
											<li>
												<a class="collection-item" href="javascript:void(0)">
													<i class="fas"></i>
													My Collection 01
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="modal-body_footer">
									<div class="modal-body_footer__top">
										<div class="modal-body_subtitle">
											Create a new Collection
										</div>
										<div class="modal-body_form">
											<form action="">
												<input type="text" class="form-control" id="inputAddCollection"
													   placeholder="Choose a name that is meaningful and descriptive">
												<div class="modal-body_form__inner" id="modal-body_form__inner" style="display: none">
													<div class="modal-body_form__group">
														<div class="custom-control custom-radio custom-control-inline">
															<input type="radio" id="private" name="nameTest" value="private"
																   class="custom-control-input">
															<label class="custom-control-label" for="private">
																Keep it private
															</label>
														</div>
														<div class="custom-control custom-radio custom-control-inline">
															<input type="radio" id="public" name="nameTest" value="public"
																   class="custom-control-input">
															<label class="custom-control-label" for="public">
																Make it public
															</label>
														</div>
													</div>
													<div class="modal-body_form__group">
														<a href="" class="modal-body_link">
															What's this?
														</a>
													</div>
													<div class="modal-body_form__group">
														<a href="" class="theme-button theme-button_sm button-primary" disabled>
															Add new collection
														</a>
														<a href="javascript:void(0)" id="closeAddCollection"
														   class="modal-body_link ml-3">
															Cancel
														</a>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div class="modal-body_footer__bottom">
										<a href="">
											<i class="fas fa-cog"></i>
											Manage my Collections
										</a>
										<a href="" class="theme-button theme-button_sm button-primary">Great, I'm done</a>
									</div>
								</div>`;
		modalCollection.find('.modal-body').html(modalLoading_HTML);
		modalCollection.modal('show');

		setTimeout(function () {
			modalCollection.find('.modal-body').html(modalContent_HTML);
			handleInputAddCollection();
			handleButtonCollection();
		}, 500);

	});
};
/*******
 * Handle Input Add Collection
 */
const handleInputAddCollection = function () {
	$('#inputAddCollection').click(function () {
		if ($('#modal-body_form__inner').is(':hidden')) {
			toggleShowHide();
		}
	});

	$('#closeAddCollection').click(function () {
		toggleShowHide();
	});

	const toggleShowHide = function () {
		$('#modal-body_form__inner').toggle();
	}
}
/*******
 * Handle Button Collection
 */
const handleButtonCollection = function () {
	$('.collection-item').click(function () {
		$(this).toggleClass('no-add');
	});
}

$(document).ready(function () {
	handleSearchHero();
	handleToggleFavorite();
	handleToggleCollection();
});