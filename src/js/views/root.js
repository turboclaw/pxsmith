import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import TagsView from "js/views/tags/list";
import JST from "js/shims/jst";

export default Marionette.LayoutView.extend({
    el: "body",
    template: JST["root"],

    regions: {
        panelPx: "[data-hook='panel-px']",
        panelSmith: "[data-hook='panel-smith']"
    },

    onRender() {
        this.panelSmith.show( new TagsView( {panel: "smith"} ) );
        this.panelPx.show( new TagsView( {panel: "px"} ) );
    },

    initialize() {
        this.initializeListeners();
    },

    initializeListeners() {
        // Radio.channel("app").on({
        //     "loading:start": this.showLoading,
        //     "loading:complete": this.hideLoading,
        //     "overlay:show": this.showOverlay,
        //     "overlay:hide": this.hideOverlay,
        //     "flash:show": this.showFlash,
        //     "flash:hide": this.hideFlash
        // }, this);
    },

    // showLoading(options = {}) {
    //     if ( !this.loading.hasView() ) {
    //         // if you want to show the loading indicator in the container where content is being loaded,
    //         // trigger the "loading:start" event with a true boolean for "inline", and the selector
    //         // where the loading spinner will be displayed
    //         if (options.inline && options.regionSelector) {
    //             this.addRegions({
    //                 loadingInline: {
    //                     el: options.regionSelector,
    //                     regionClass: Marionette.Region.extend()
    //                 }
    //             });
    //             this.loadingInline.show( new LoadingView(options) );
    //         } else {
    //             this.loading.show( new LoadingView() );
    //         }
    //     }
    // },
    // hideLoading() {
    //     this.loading.empty();
    // },
    // showOverlay(options = {}) {
    //     // options (all are, uh, optional):
    //     // view: instantiated view to use as the overlay content
    //     // preformatted: if true, the view that is passed in is displayed as-is. if false,
    //     //      the view is injected into the .card__body of a .card--overlay
    //     // classes: a space-separated list of classes to add to the parent .card--overlay. if not
    //     //      provided, default grid__cell sizes are used
    //     // title: nls key that is translated and displayed in .card__title
    //     // message: nls key that is translated and displayed in .card__body if no view is passed
    //     // killOtherOverlays: if true, new overlay will replace any current overlays
    //     // preventDismiss: if true, close button is hidden, and clicking the matte will not close overlay

    //     if ( !this.overlay.hasView() || options.killOtherOverlays ) {
    //         if (options.preformatted && options.view) {
    //             this.overlay.show(options.view);
    //         } else {
    //             this.overlay.show( new OverlayCardView(options) );
    //         }
    //         this.overlay.$el.addClass("is-visible");
    //     }
    // },
    // hideOverlay() {
    //     this.overlay.$el.removeClass("is-visible");
    //     this.overlay.empty();
    // },

    // // options (all are, uh, optional):
    // // title: nls key that is translated and displayed in bold
    // // message: nls key that is translated and displayed
    // // messageStyle: negative, positive, warning, or subtle (will also include the corresponding icon)
    // // icon: keyword for material icon (see m.icon.css for the list)
    // showFlash(options = {}) {
    //     this.flash.show( new FlashView(options) );
    //     setTimeout(() => {
    //         this.hideFlash();
    //     }, 7000);
    // },
    // hideFlash() {
    //     this.flash.$el.fadeOut(() => {
    //         this.flash.empty();
    //         this.flash.$el.show();
    //     });
    // }
});