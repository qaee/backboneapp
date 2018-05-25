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

console.log(blog1.toJSON());
var Blogs = Backbone.Collection.extend();

var blogList = new Blogs([blog1, blog2]);

console.log(blogList);
