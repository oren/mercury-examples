var RCSS = require('rcss');
var mercury = require('mercury');
var FancySelect = require('fancy-select');
var comp;
var options;

comp = FancySelect({
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

var div = document.createElement('div');
document.body.insertBefore(div, document.body.childNodes[0]);
mercury.app(div, comp.state, FancySelect.render);
