//var _ = require("./node_modules/underscore/underscore.js");
//var Backbone = require('backbone')

var todoApp = {};

todoApp.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

//export { todoApp };