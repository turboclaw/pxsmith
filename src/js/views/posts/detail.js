import Marionette from "backbone.marionette";
import JST from "js/shims/jst";

export default Marionette.ItemView.extend({
    className: "post",
    template: JST["posts/detail"]
});
