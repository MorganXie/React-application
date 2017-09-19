import _ from 'lodash'

import j from 'jquery'

import foo from './foo'

function component() {
    let element = j('<div></div>');
    element.html(_.join(['Hello', 'xiexuan123']), '');
    return element.get(0);

}

document.body.appendChild(component());


console.log(foo());