import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import LandingView from "js/views/landing/index";
import TagsView from "js/views/tags/list";
import JST from "js/shims/jst";

export default Marionette.LayoutView.extend({
    el: "body",
    template: JST["root"],

    regions: {
        panelLanding: "[data-hook='panel-landing']",
        panelPx: "[data-hook='panel-px']",
        panelSmith: "[data-hook='panel-smith']",
        overlay: "[data-hook='overlay']"
    },

    onRender() {
        this.panelLanding.show( new LandingView() );
    },

    initialize() {
        Radio.channel("app").on({
            "overlay:show": this.showOverlay,
            "overlay:hide": this.hideOverlay,
            "panel:reset": this.resetPanels,
            "panel:show-px": this.showPanelPx,
            "panel:show-smith": this.showPanelSmith
        }, this);
    },

    showOverlay(options = {}) {
        // options (all are, uh, optional):
        // view: instantiated view to use as the overlay content
        // preformatted: if true, the view that is passed in is displayed as-is. if false,
        //      the view is injected into the .card__body of a .card--overlay
        // classes: a space-separated list of classes to add to the parent .card--overlay. if not
        //      provided, default grid__cell sizes are used
        // title: nls key that is translated and displayed in .card__title
        // message: nls key that is translated and displayed in .card__body if no view is passed
        // killOtherOverlays: if true, new overlay will replace any current overlays
        // preventDismiss: if true, close button is hidden, and clicking the matte will not close overlay

        if ( !this.overlay.hasView() || options.killOtherOverlays ) {
            if (options.preformatted && options.view) {
                this.overlay.show(options.view);
            }
            this.overlay.$el.addClass("is-visible");
        }
    },
    hideOverlay() {
        this.overlay.$el.removeClass("is-visible");
        this.overlay.empty();
    },

    resetPanels() {
        $("main").removeClass("is-px is-smith");
    },
    showPanelPx() {
        $("main").addClass("is-px").removeClass("is-smith");
        !this.panelPx.hasView() && this.panelPx.show( new TagsView( {panel: "px"} ) );
    },
    showPanelSmith() {
        $("main").addClass("is-smith").removeClass("is-px");
        !this.panelSmith.hasView() && this.panelSmith.show( new TagsView( {panel: "smith"} ) );
    }
});