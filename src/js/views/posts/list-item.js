import Marionette from "backbone.marionette";
import JST from "js/shims/jst";

export default Marionette.ItemView.extend({
    tagName: "li",
    template: JST["posts/list-item"],
    serializeData() {
    	let tokens = this.model.toJSON();
    	
    	return tokens;
    }
});
