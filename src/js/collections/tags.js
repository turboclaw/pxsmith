import Backbone from "backbone";

export default Backbone.Collection.extend({
    url() {
        return "https://dl.dropbox.com/s/ivszau5auwir4gv/pxsmith-config.json";
    }
});
