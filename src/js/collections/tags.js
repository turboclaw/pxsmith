import Backbone from "backbone";
import _ from "underscore";
import TagModel from "js/models/tag";

export default Backbone.Collection.extend({
    initialize(options = {}) {
        this.panel = options.panel;
    },
    url() {
        let panelConfigLocs = {
            px: "",
            smith: "https://spreadsheets.google.com/feeds/list/1JdCBP8Jmm0ddnichOhq-OklHXKo0SmeJeNMpivAPcjM/od6/public/basic?alt=json"
        }
        return panelConfigLocs[this.panel];
    },
    parse(r){
        return r.feed.entry;
    },
    model: TagModel
});
