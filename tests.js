QUnit.module("basic");
QUnit.test("initialize object", function(assert) {
	assert.ok(new Stack(), "can create new Stack")
});

QUnit.module("push", {
	beforeEach: function() {
		this.stack = new Stack();
		console.log(this.stack);
	}
});

QUnit.test("Can add one item to stack", function(assert) {
	this.stack.push("first");
	assert.equal(this.stack.size(), 1, "stack has one element");
});

QUnit.test("Can add three items to stack", function(assert) {
	this.stack.push("first");
	this.stack.push("second");
	this.stack.push("third");
	assert.equal(this.stack.size(), 3, "stack has three elements");
});