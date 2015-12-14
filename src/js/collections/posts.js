import Backbone from "backbone";
import _ from "underscore";
import PostModel from "js/models/post";

export default Backbone.Collection.extend({
    initialize(options = {}) {
        this.tag = options.tag;
    },
    url() {
        return "https://api.tumblr.com/v2/blog/rashystreakers.tumblr.com/posts";
    },
    sync(method, model, options) {
        return $.ajax(_.extend({
            type: "GET",
            dataType: "jsonp",
            url: this.url(),
            processData: true,
            data: {
                api_key: "YV4xluM0hMbnvjieoZsfJKTzf0gYeoQD5ubz7RJd07bOW3Pxd5",
                limit: "10",
                tag: this.tag
            }
        }, options));
    },
    parse(r){
        return r.response.posts;
    },
    model: PostModel
});
