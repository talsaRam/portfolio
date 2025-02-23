jQuery(document).ready(function ($) {
    jQuery(document).click(function (event) {
        if (
            !jQuery(event.target).closest("nav#menu").length &&
            !jQuery(event.target).closest(".mobile_menu_bar, #menu-bars").length
        ) {
            jQuery("body").removeClass("active-responsive-menu");
            jQuery(".mobile_menu_bar.opened").removeClass("opened");
            jQuery(".mobile_menu_bar").addClass("closed");
        }
    });
});