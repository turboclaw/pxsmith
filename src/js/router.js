import Marionette from "backbone.marionette";
import Radio from "backbone.radio";

export default Marionette.AppRouter.extend({
    routes: {
        "": "index",
        "*no_matched_route": "noMatchedRoute"
    },
    index() {
    },
    noMatchedRoute() {
        console.log("no matched route");
    }
});
