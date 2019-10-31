const assert = chai ? chai.assert : require('assert');

import { todoApp } from '../model/backbone_todo_model.js';

import { appView } from '../view/backbone_todo_view.js';

describe('TodoView', function() {

    beforeEach(function() {
        if (typeof includeHTML !== 'undefined')
        {
            $('#test-include-id').remove();
            $('body').append('<div id="#test-include-id" w3-include-html="base/todoApp-include-content.html"></div>')
            includeHTML(true);
        }
    });

    describe('#constructor', function() {
        it('should construct with title', function() {
            var model = new todoApp.Todo({title: "test"});
            var sut = new appView.TodoView({model: model});
            assert.equal("test", model.get('title'));
            assert.equal(false, model.get('completed'));
        });
    });
});