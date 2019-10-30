const assert = chai ? chai.assert : require('assert');

describe('ToDoModel', function() {
    describe('constructor', function() {
        it('should construct with title', function() {
            var sut = new todoApp.Todo({title: "test"});
            assert.equal("test", sut.get('title'));
            assert.equal(false, sut.get('completed'));
        });
    });

    describe('setters', function() {
        it('should set fields', function() {
            var sut = new todoApp.Todo();
            sut.set('title', 'thomas');
            sut.set('completed', true);
            assert.equal("thomas", sut.get('title'));
            assert.equal(true, sut.get('completed'));
        });
    });
});