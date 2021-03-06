import Marionette from "backbone.marionette";
import _ from "underscore";
import JST from "js/shims/jst";

export default Marionette.ItemView.extend({
    tagName: "li",
    className: "post post--small grid__cell--1/3 grid__cell--1/4@tablet grid__cell--1/6@widescreen",
    template: JST["posts/list-item"],
    serializeData() {
        let tokens = _.extend(this.model.toJSON(), {childIndex: this.options.childIndex});
        return tokens;
    },
    events: {
        "click [data-hook='post']": "triggerShowDetail"
    },
    triggerShowDetail(evt) {
        this.trigger("show:detail", $(evt.currentTarget).attr("data-index"));
    }
});
