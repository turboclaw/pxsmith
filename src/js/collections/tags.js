import Backbone from "backbone";

export default Backbone.Collection.extend({
    initialize(options = {}) {
        this.panel = options.panel;
    },
    url() {
        return "https://dl.dropbox.com/s/3cnfjs1ccyr8y44/pxsmith-config-" + this.panel + ".json";
    }
});
