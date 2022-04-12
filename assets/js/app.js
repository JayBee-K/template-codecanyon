let windowWidth = $(window).outerWidth();

/*******
 * Handle Navigation
 */
const handleTouchMoveNavigation = function (ev) {
    if (!$(ev.target).closest('.body-open_navigation #header-navigation').length) {
        ev.preventDefault();
    }
}

const handleInitNavigationMobile = function () {
    if (windowWidth < 992) {
        $('#header-navigation > .header-nav_list > li > .header-nav_list__child').map(function (index) {
            let htmlSpan = `<span data-toggle="collapse" data-target="#header-navigation_sub__${index}" class="header-nav_list__link-icon"><i class="fas fa-caret-down"></i></span>`;
            $(this).prev('.header-nav_list__link').append(htmlSpan);
            $(this).attr({
                "id": "header-navigation_sub__" + index,
                "class": "header-nav_list__child collapse list-unstyled mb-0",
                "data-parent": "#header-navigation"
            });
        });

        $('#hamburger-toggle').click(function () {
            $('body').addClass('body-open_navigation');
            document.addEventListener('touchmove', handleTouchMoveNavigation, {passive: false});
        });

        $(document).on('click', '#close-navigation, #header-overlay', function () {
            $('body').removeClass('body-open_navigation');
            document.removeEventListener('touchmove', handleTouchMoveNavigation);
            $('#header .collapse').collapse('hide');
        });
    }
}

/*******
 * Handle Search Hero
 */
const handleSearchHero = function () {
    $('#inputSearch').keyup(function () {
        let inputSearch = $(this),
            wrapInputSearch = inputSearch.parent('#form-wrap');

        (inputSearch.val() !== '') ? wrapInputSearch.addClass('is-result') : wrapInputSearch.removeClass('is-result');
    });

    $(document).mouseup(function (e) {
        let elm = $('#form-wrap.is-result');
        elm.is(e.target) || 0 !== elm.has(e.target).length || (
            elm.removeClass('is-result'))
    });
};

/*******
 * Handle Search Page Category
 */
const handleSearchPageCategory = function () {
    $('#inputSearchCategory').click(function () {
        $('#inputSearchCategory').closest('#form-category').addClass('is-show');
    });

    $(document).mouseup(function (e) {
        let elm = $('#form-category.is-show');
        elm.is(e.target) || 0 !== elm.has(e.target).length || (
            elm.removeClass('is-show'))
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

/*******
 * Handle Tab Mobile
 */
const handleTabMobile = function () {
    if (windowWidth < 768) {
        $('#tab-mobile_select').change(function () {
            let target = $(this).val();
            $(this).closest('.section-tab').find('.tab-pane').removeClass('show active');
            $(this).closest('.section-tab').find(`#${target}`).tab('show');
        });
    }
}
/*******
 * Handle Toggle License Price
 */
const handleToggleLicensePrice = function () {
    $('#license-name').click(function () {
        $('#license-dropdown').toggleClass('is-show');
    });

    $(document).mouseup(function (e) {
        let elm = $('#license-dropdown.is-show'),
            elmButton = $('#license-name');
        elmButton.is(e.target) || elm.is(e.target) || 0 !== elm.has(e.target).length || (
            elm.removeClass('is-show'))
    });

    $('#license-dropdown .license-dropdown_item').click(function () {
        $('#license-name').trigger('click');
    });
}

/*******
 * Handle Toggle Content Mobile
 */
const handleToggleContentMobile = function () {
    $('#collpase-content_mobile').click(function () {
        $(this).parents('.page-detail_inner').toggleClass('is-collapse');
    });
}

/*******
 * Handle Box Toggle Table
 */
const handleBoxToggleTable = function () {
    $('#box-toggle_table').click(function () {
        $(this).parents('.sidebar-box_table').toggleClass('is-collapse');
    });
}

/*******
 * Handle Toggle Sidebar Category
 */
const handleToggleSidebarCategory = () => {
    $('#toggleFilter').click(function () {
        $(this).toggleClass('is-show_sidebar');
    });
}

/*******
 * Handle Change Grid View
 */
const handleChangeGridView = () => {
    $('.buttonSortGrid').click(function () {
        let buttonSort = $(this),
            buttonSortType = buttonSort.attr('data-type');
        if (!buttonSort.hasClass('is-active')) {
            if (buttonSortType == 1) {
                $('#category-view_grid').fadeOut();
                $('#category-view_list').fadeIn();
            } else {
                $('#category-view_grid').fadeIn();
                $('#category-view_list').fadeOut();
            }
            $('.buttonSortGrid').removeClass('is-active');
            buttonSort.addClass('is-active');
        }
    });
}

$(document).ready(function () {
    handleInitNavigationMobile();
    handleSearchHero();
    handleSearchPageCategory();
    handleToggleFavorite();
    handleToggleCollection();
    handleTabMobile();
    handleBoxToggleTable();
    handleToggleLicensePrice();
    handleToggleContentMobile();
    handleToggleSidebarCategory();
    handleChangeGridView();
});