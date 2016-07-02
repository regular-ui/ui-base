import {dom} from 'regularjs';

let _ = {};

_.createBoolDirective = function(func) {
    return function(elem, value) {
        if(typeof value === 'object' && value.type === 'expression')
            this.$watch(value, (newValue, oldValue) => {
                if(!newValue === !oldValue)
                    return;
                func.call(this, elem, newValue);
            });
        else if(!!value || value === '')
            func.call(this, elem, true);
    }
}

_.createBoolClassDirective = function(boolClass) {
    return _.createBoolDirective((elem, value) => {
        dom[value ? 'addClass' : 'delClass'](elem, boolClass);
    });
}

export default _;
