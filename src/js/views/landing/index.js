import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import DrawerView from "js/views/landing/drawer";
import JST from "js/shims/jst";

export default Marionette.LayoutView.extend({
    template: JST["landing/index"],
    regions: {
        drawer: "[data-hook='drawer']"
    },
    events: {
    	"click [data-hook='show-px']": "showPx",
    	"click [data-hook='show-smith']": "showSmith",
        "click [data-hook='back-to-landing']": "backToLanding",
        "click [data-hook='drawer-toggle']": "toggleDrawer"
    },
    initialize() {
        Radio.channel("app").on({
            "drawer:hide": this.hideDrawer
        });
    },
    showPx() {
    	$("main").addClass("is-px").removeClass("is-smith");
        Radio.channel("app").trigger("panel:show-px");
        this.hideDrawer();
    },
    showSmith() {
    	$("main").addClass("is-smith").removeClass("is-px");
        Radio.channel("app").trigger("panel:show-smith");
        this.hideDrawer();
    },
    backToLanding() {
        $("main").removeClass("is-smith is-px");
    },

    toggleDrawer() {
        !this.drawer.hasView() ? this.drawer.show( new DrawerView() ) : this.drawer.reset();
    },
    hideDrawer() {
        this.drawer.hasView() && this.drawer.reset();
    }
});
