import Marionette from "backbone.marionette";
import Radio from "backbone.radio";

export default Marionette.AppRouter.extend({
    routes: {
        "": "index",
        "pixel": "px",
        "smith": "smith",
        "*no_matched_route": "noMatchedRoute"
    },
    index() {
        Radio.channel("app").trigger("panel:reset");
    },
    px() {
        Radio.channel("app").trigger("panel:show-px");
    },
    smith() {
        Radio.channel("app").trigger("panel:show-smith");
    },
    noMatchedRoute() {
        // console.log("no matched route");
    }
});
