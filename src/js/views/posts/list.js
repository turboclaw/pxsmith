import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import JST from "js/shims/jst";
import PostsCollection from "js/collections/posts";
import PostListItemView from "js/views/posts/list-item";
import DetailView from "js/views/posts/detail";

export default Marionette.CompositeView.extend({
    tagName: "li",
    className: "grid__cell--1",
    template: JST["posts/list"],
    childView: PostListItemView,
    childViewContainer: "[data-hook='posts-list']",
    initialize(options = {}) {
        this.collection = new PostsCollection({
            tag: options.model.get("tumblrTag")
        });
        this.collection.fetch();

        this.listenTo(this.collection, "sync", this.removeLoading)
    },
    childViewOptions(model, index) {
        return {
            childIndex: index
        }
    },
    childEvents: {
        "show:detail": "showDetail"
    },
    removeLoading() {
        this.$el.find("[data-hook='loading']").remove();
    },
    showDetail(childView, childIndex) {
        // model i want is this.collection.at(childIndex)
        Radio.channel("app").trigger("overlay:show", {
            preformatted: true,
            view: new DetailView({
                model: this.collection.at(childIndex)
            })
        })
    }
});
