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
        $("[data-hook='acc-content']", this.$el).slideUp();
        $(evt.currentTarget).closest(".acc__item").addClass(".is-open").find("[data-hook='acc-content']").slideDown();
    }
});
