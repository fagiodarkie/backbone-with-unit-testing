const assert = chai ? chai.assert : require('assert');

import { todoApp } from '../model/backbone_todo_model.js';

import { ui } from '../../scripts/test_utils/ui_utilities.js'

describe('ToDoModel', function() {
    var sut, sutList;

    afterEach(function() {
        if (sutList)
            ui.clearStorage(sutList);
    });

    describe('#constructor', function() {
        it('should construct with title', function() {
            sut = new todoApp.Todo({title: "test"});
            assert.equal("test", sut.get('title'));
            assert.equal(false, sut.get('completed'));
        });
    });

    describe('#setters', function() {
        it('should set fields', function() {
            sut = new todoApp.Todo();
            sut.set('title', 'thomas');
            sut.set('completed', true);
            assert.equal("thomas", sut.get('title'));
            assert.equal(true, sut.get('completed'));
        });
    });

    describe('#complete()', function() {
        it('should complete todo', function() {
            sut = new todoApp.Todo({title: "test"});
            assert.equal(false, sut.get('completed'));
            sut.complete();
            assert.equal(true, sut.get('completed'));
        });
    });

    describe('#toggle()', function() {
        it('should toggle completed flag', function() {
            sutList = new todoApp.TodoList();
            sut = new todoApp.Todo({title: "test"});
            sutList.add(sut);
            assert.equal(false, sut.get('completed'));
            sut.toggle();
            assert.equal(true, sut.get('completed'));
            sut.toggle();
            assert.equal(false, sut.get('completed'));
        });
    });
});

describe('ToDoListModel', function() {
    var sut;

    this.afterEach(function() {
        if (sut)
            ui.clearStorage(sut);
    });

    describe('#create', function() {
        it('should create a collection with a title', function() {
            sut = new todoApp.TodoList();
            sut.create({title: 'Understand ES6 modules'});
            var newTodo = new todoApp.Todo({title: 'Learn how to use headless-chrome with ES6 modules'});
            sut.add(newTodo);
            assert.equal(2, sut.size());
        });
    });

    describe('#pluck', function() {
        it('should select the column', function() {
            sut = new todoApp.TodoList([{title: 'Understand ES6 modules'}, {title: 'Learn how to use headless-chrome with ES6 modules', completed: true}]);
            var plucked = sut.pluck('completed');
            expect([false, true]).to.eql(plucked);
        });
    });
});