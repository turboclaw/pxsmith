import Backbone from "backbone";

export default Backbone.Model.extend({
    parse(r) {
        let tagInfo = r.content.$t.split(/^tumblrtag:\ |,\ categorytitle:\ |,\ categorycaption:\ /).filter((el) => {
            return el.length !== 0}
        );
        return {
            "tumblrTag": tagInfo[0],
            "categoryTitle": tagInfo[1],
            "categoryCaption": tagInfo[2]
        };
    }
});