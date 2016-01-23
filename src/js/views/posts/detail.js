import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import JST from "js/shims/jst";

export default Marionette.ItemView.extend({
    className: "detail",
    template: JST["posts/detail"],
    events: {
        "click [data-hook='close-overlay']": "hideOverlay"
    },
    hideOverlay() {
        Radio.channel("app").trigger("overlay:hide");
    }
});
