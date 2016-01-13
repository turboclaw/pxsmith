import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import DrawerView from "js/views/landing/drawer";
import JST from "js/shims/jst";

export default Marionette.LayoutView.extend({
    template: JST["landing/drawer"],
    className: "drawer",
    regions: {
    },
    events: {
        "click [data-hook='acc-toggle']": "toggleAccordion"
    },
    onShow() {
        $("[data-hook='acc-content']", this.$el).hide();
    },
    toggleAccordion(evt) {
        $(evt.currentTarget).next().slideToggle();
    }
});
