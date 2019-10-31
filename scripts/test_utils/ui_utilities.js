import { appView } from '../../todoApp/view/backbone_todo_view.js';

import { todoApp } from '../../todoApp/model/backbone_todo_model.js';

function enter(descriptor) {
    if (!descriptor || !descriptor.trim())
        return;

    const enterEvent = new KeyboardEvent('keypress', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        charCode: 13
    });
    
    $(descriptor).trigger(enterEvent);
};

function click(descriptor) {
    if (!descriptor || !descriptor.trim())
        return;

    const clickEvent = new KeyboardEvent('click');
    
    $(descriptor).trigger(clickEvent);
};

function initialiseView(todoModel) {
    //var todoSut = new appView.TodoView({model: (todoModel ? todoModel : new todoApp.Todo({title: "test"}))});
    var appSut = new appView.AppView();
    clearStorage(appSut.todoList);
    return { /*todoSut: todoSut,*/ appSut: appSut };
};

function createItem(itemName) {
    document.querySelector('#new-todo').value = itemName ? itemName : 'test';
    enter('#new-todo');
};

function initTodoDiv() {
    if (typeof includeHTML !== 'undefined')
    {
        $('#test-include-id').remove();
        $('body').append('<div id="test-include-id" w3-include-html="base/todoApp-include-content.html"></div>')
        includeHTML(true);
    }
}

function clearStorage(list) {
    list.each(function(el) {
        el.destroy();
    });
};

var ui = {
    enter: enter,
    initialiseView: initialiseView,
    createItem: createItem,
    click: click,
    enter: enter,
    initTodoDiv: initTodoDiv,
    clearStorage: clearStorage
};

export { ui };