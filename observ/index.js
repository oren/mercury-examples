// what does observ do?
var mercury = require('mercury');

// set state to 'foo'
var state = mercury.value('foo');

// add event that will be called when state is changed
state(click);

function click() {
  console.log('state was changed');;
}

// change the state. the event will be called
state.set('bar');

// state() will get the value of the state
console.log(state());

// state(event) - add event
// state.set(value) - change the state
// state() - get state
