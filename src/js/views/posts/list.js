import Marionette from "backbone.marionette";
import JST from "js/shims/jst";
import PostsCollection from "js/collections/posts";
import PostListItemView from "js/views/posts/list-item";

export default Marionette.CompositeView.extend({
    template: JST["posts/list"],
    childView: PostListItemView,
    childViewContainer: "[data-hook='posts-list']",
    collection: new PostsCollection(/*{tag: "gifts"}*/),
    initialize() {
        this.collection.fetch();
    }
});
