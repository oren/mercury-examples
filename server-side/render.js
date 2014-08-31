var mercury = require('mercury');
var h = require('mercury').h;

module.exports = render;

function render(state) {
    return h('div', {
        'ev-event': mercury.submitEvent(state.events.add)
    }, [
        h('span', state.description),
        h('ul', state.items.map(function (item) {
            return h('li', [
                h('span', item.name)
            ])
        })),
        h('input', {
            name: 'name',
            placeholder: 'name'
        })
    ]);
}
