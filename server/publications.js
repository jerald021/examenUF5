Meteor.publish('strings', function(){
    return Strings.find();
});