/**
 * Created by andrew on 06/01/15.
 */

Template.postsList.helpers({
    posts: function () {
        return Posts.find();
    }
});