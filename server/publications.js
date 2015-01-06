/**
 * Created by andrew on 06/01/15.
 */
Meteor.publish('posts', function(){
    return Posts.find(
        {'author':'Tom Coleman'},
        {fields:{author:false,url:false}});
});