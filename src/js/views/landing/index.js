import Marionette from "backbone.marionette";
import JST from "js/shims/jst";

export default Marionette.ItemView.extend({
    template: JST["landing/index"],
    events: {
    	"click [data-hook='show-px']": "showPx",
    	"click [data-hook='show-smith']": "showSmith"
    },
    showPx() {
    	$("main").addClass("is-px").removeClass("is-smith");
    },
    showSmith() {
    	$("main").addClass("is-smith").removeClass("is-px");
    }
});
