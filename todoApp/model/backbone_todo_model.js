var todoApp = {};

todoApp.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

todoApp.TodoList = Backbone.Collection.extend({
    model: todoApp.Todo,
    localStorage: new Store("backbone-todo")
});

export { todoApp };