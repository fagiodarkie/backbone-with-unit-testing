todoApp.TodoList = Backbone.Collection.extend({
    model: todoApp.Todo,
    localStorage: new Store("backbone-todo")
});

todoApp.todoList = new todoApp.TodoList;