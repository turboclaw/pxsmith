import Marionette from "backbone.marionette";
import Radio from "backbone.radio";

export default Marionette.AppRouter.extend({
    // initialize(options = {}) {
    //     this.container = options.container;
    //     this.listenTo(this, "route", this.showView);
    // },
    // showView(view) {
    //     if (view) {
    //         this.container.show(view);
    //     }
    // },

    routes: {
        "": "index",
        "campaigns": "campaigns",
        "campaigns/:_id": "editCampaign",
        "*no_matched_route": "noMatchedRoute"
    },
    index() {
        // this.view = new IndexView();
        console.log("index route");
    },
    // campaigns() {
    //     this.view = new CampaignsListView();
    // },
    // editCampaign(_id) {
    //     this.view = new CampaignDetailView({campaignId: _id});
    // },
    noMatchedRoute() {
        console.log("no matched route");
    }
});
