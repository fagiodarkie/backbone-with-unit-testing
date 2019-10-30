var todoApp = {};

todoApp.Todo = Backbone.Model.extend({    
    defaults: {
        title: '',
        completed: false
    },
    toggle: function() {
        this.save({completed: !this.get('completed')});
    },
    complete: function() {
        this.set('completed', true);
    }
});

todoApp.TodoList = Backbone.Collection.extend({
    model: todoApp.Todo,
    localStorage: new Store("backbone-todo")
});

export { todoApp };