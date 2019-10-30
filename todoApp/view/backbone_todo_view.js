import { todoApp } from '../model/backbone_todo_model.js';

var app = {};

app.TodoView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#item-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.input = this.$('.edit');
        this.check = this.$('.toggle');
        return this; // enable chained calls
    },

    initialize: function() {
        this.model.on('change', this.render, this);
    },

    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close',
        'click .toggle': 'toggleCompleted'
    },

    edit: function() {
        this.$el.addClass('editing');
        this.input.focus();
    },
    close: function() {
        var value = this.input.val().trim();
        if (value)
            this.model.save({
                title: value
            });
        this.$el.removeClass('editing');
    },
    updateOnEnter: function(e) {
        if (e.which == 13) {
            this.close();
        }
    },
    toggleCompleted: function() {
        this.model.toggle();
    }
});

// renders the full list of todo items calling TodoView for each one.
app.AppView = Backbone.View.extend({
    el: '#todoapp',
    initialize: function () {
        app.todoList = new todoApp.TodoList();

        this.input = this.$('#new-todo');
        // when new elements are added to the collection render then with addOne
        app.todoList.on('add', this.addOne, this);
        app.todoList.on('reset', this.addAll, this);
        app.todoList.fetch(); // Loads list from local storage
    },
    events: {
        'keypress #new-todo': 'createTodoOnEnter'
    },
    createTodoOnEnter: function(e) {
        if ( e.which !== 13 || !this.input.val().trim()) { // ENTER_KEY = 13
            return;
        }
        app.todoList.create(this.newAttributes());
        this.input.val(''); // clean input box
    },
    addOne: function(todo) {
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
    },
    addAll: function() {
        this.$('#todo-list').html(''); // clean the todo list
        app.todoList.each(this.addOne, this);
    },
    newAttributes: function() {
        return {
            title: this.input.val().trim(),
            completed: false
        }
    }
});

var appView = app;

export { appView };