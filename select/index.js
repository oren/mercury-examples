var RCSS = require('rcss');
var mercury = require('mercury');
var FancySelect = require('fancy-select');

var component;

component = FancySelect({
  options: [{
    id: 'a',
    title: 'A'
  }, {
    id: 'b',
    title: 'B'
  }, {
    id: 'c',
    title: 'C'
  }],
  value: [{
    id: 'a',
    title: 'A'
  }]
});

RCSS.injectAll();

mercury.app(document.body, component.state, FancySelect.render);
