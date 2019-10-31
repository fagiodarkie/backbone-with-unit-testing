const assert = chai ? chai.assert : require('assert');

import { todoApp } from '../model/backbone_todo_model.js';

import { appView } from '../view/backbone_todo_view.js';

import { ui } from '../../scripts/test_utils/ui_utilities.js'

describe('TodoView', function() {

    var todoSut, appSut;

    function initialise() {
        var res = ui.initialiseView();
        todoSut = res.todoSut;
        appSut = res.appSut;
    };

    before(ui.initTodoDiv);

    afterEach(function() {
        if (appSut)
            ui.clearStorage(appSut.todoList);
    });

    describe('#constructor', function() {
        it('should construct with model', function() {
            var model = new todoApp.Todo({title: "test"});
            todoSut = new appView.TodoView({model: model});
            assert.equal("test", todoSut.model.get('title'));
            assert.equal(false, todoSut.model.get('completed'));
        });
    });

    describe('events', function() {
        describe('on label doubleclick', function() {

            beforeEach(function() {
                initialise();
                ui.createItem();
            });

            /*it('should start editing', function() {
            });    */
        });
    });
});