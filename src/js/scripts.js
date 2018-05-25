var Blog = Backbone.Model.extend({
    defaults: {
        author: '',
        title: '',
        url: '',
        action: ''
    }
})
var blog1 = new Blog({
    author: 'Qasim Ali',
    title: ' Writer of backbone book',
    url: 'javaland.com'
});

var blog2 = new Blog({
    author: 'Hiba Ali',
    title: ' Writer of various books',
    url: 'javaland.com'
});
var Blogs = Backbone.Collection.extend();
var blogList = new Blogs([blog1, blog2]);

var BlogView = Backbone.extend({
    model: new Blog(),
    tagName: 'tr',
    intialize: function () {
        this.template = _.template($('.blogs-list-template').html())
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
    }
});
//var BlogsView = Backbone.
