var todoApp = {};

todoApp.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});
