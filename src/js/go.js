import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import Marionette from "backbone.marionette";
import Radio from "backbone.radio";
import Router from "js/router";
import RootView from "js/views/root";

let Application = Marionette.Application.extend({
    initialize() {
        this.layout = new RootView();
        this.layout.render();
        this.router = new Router();
    },
    onStart() {
        Backbone.history.start({
            pushState: false,
            root: window._historyroot || "/"
        });
    }
});

window.pxsmithApp = new Application();

$(() => {

    window.pxsmithApp.start();

});