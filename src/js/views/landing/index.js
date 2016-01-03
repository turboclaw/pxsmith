import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import JST from "js/shims/jst";

export default Marionette.ItemView.extend({
    template: JST["landing/index"],
    events: {
    	"click [data-hook='show-px']": "showPx",
    	"click [data-hook='show-smith']": "showSmith",
        "click [data-hook='back-to-landing']": "backToLanding"
    },
    showPx() {
    	$("main").addClass("is-px").removeClass("is-smith");
        Radio.channel("app").trigger("panel:show-px");
    },
    showSmith() {
    	$("main").addClass("is-smith").removeClass("is-px");
        Radio.channel("app").trigger("panel:show-smith");
    },
    backToLanding() {
        $("main").removeClass("is-smith is-px");
    }
});
