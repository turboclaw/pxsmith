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
        "click [data-hook='drawer-toggle']": "toggleDrawer"
    },
    initialize() {
        Radio.channel("app").on({
            "drawer:hide": this.hideDrawer
        });
    },

    toggleDrawer() {
        !this.drawer.hasView() ? this.drawer.show( new DrawerView() ) : this.drawer.reset();
    },
    hideDrawer() {
        this.drawer.hasView() && this.drawer.reset();
    }
});
