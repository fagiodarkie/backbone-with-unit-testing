const assert = chai ? chai.assert : require('assert');

import { todoApp } from '../model/backbone_todo_model.js';

describe('ToDoModel', function() {
    describe('#constructor', function() {
        it('should construct with title', function() {
            var sut = new todoApp.Todo({title: "test"});
            assert.equal("test", sut.get('title'));
            assert.equal(false, sut.get('completed'));
        });
    });

    describe('#setters', function() {
        it('should set fields', function() {
            var sut = new todoApp.Todo();
            sut.set('title', 'thomas');
            sut.set('completed', true);
            assert.equal("thomas", sut.get('title'));
            assert.equal(true, sut.get('completed'));
        });
    });

    describe('#complete()', function() {
        it('should complete todo', function() {
            var sut = new todoApp.Todo({title: "test"});
            sut.complete();
            assert.equal(true, sut.get('completed'));
        });
    });

});

describe('ToDoListModel', function() {
    describe('#create', function() {
        it('should create a collection with a title', function() {
            var sut = new todoApp.TodoList();
            sut.create({title: 'Understand ES6 modules'});
            var newTodo = new todoApp.Todo({title: 'Learn how to use headless-chrome with ES6 modules'});
            sut.add(newTodo);
            assert.equal(2, sut.size());
        })
    });

    describe('#pluck', function() {
        it('should select the column', function() {
            var sut = new todoApp.TodoList([{title: 'Understand ES6 modules'}, {title: 'Learn how to use headless-chrome with ES6 modules', completed: true}]);
            var plucked = sut.pluck('completed');
            expect([false, true]).to.eql(plucked);
        })
    })
})