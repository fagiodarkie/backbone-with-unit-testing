const assert = chai ? chai.assert : require('assert');

/*
import { todoApp } from '../model/backbone_todo_model.js';
import { appView } from '../view/backbone_todo_view.js';
*/

import { ui } from '../../scripts/test_utils/ui_utilities.js'

describe('AppView', function() {
    var todoSut, appSut;

    function initialise() {
        var res = ui.initialiseView();
        todoSut = res.todoSut;
        appSut = res.appSut;
    };

    before(ui.initTodoDiv);

    afterEach(function() {
        ui.initTodoDiv();
        ui.clearStorage(appSut.todoList);
    });


    describe('#constructor', function() {
        it('should make the list visible', function() {
            initialise();
            ui.createItem();
            // can't use todoSut.$el. as it is created with tagName the object is created, but not bound to the DOM. furthermore it would only be one div
            expect(appSut.$el.find('li .view').length).equal(1);
        });
    });
});

