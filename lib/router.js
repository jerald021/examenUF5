Router.configure({
    //layoutTemplate: 'layout',
    waitOn: function() {
        return Meteor.subscribe('strings');
    }
});

Router.route('/', {
    name: 'string'
});