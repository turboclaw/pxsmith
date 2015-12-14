import Marionette from "backbone.marionette";
import JST from "js/shims/jst";
import TagsCollection from "js/collections/tags";
import PostsView from "js/views/posts/list";

export default Marionette.CompositeView.extend({
    template: JST["tags/list"],
    childView: PostsView,
    childViewContainer: "[data-hook='tags-list']",
    collection: new TagsCollection(),
    initialize(options = {}) {
        this.collection.fetch();
    }
});
