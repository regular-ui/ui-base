import _ from '../util';

let directive = {};

let rClassGenerator = function(rClass) {
    directive[rClass] = function(elem, value) {
        if(typeof value === 'object' && value.type === 'expression')
            this.$watch(value, (newValue, oldValue) => {
                _.dom[newValue ? 'addClass' : 'delClass'](elem, rClass);
            });
        else if(!!value || value === '')
            _.dom.addClass(elem, rClass);
    }
}

rClassGenerator('z-crt');
rClassGenerator('z-sel');
rClassGenerator('z-chk');
rClassGenerator('z-dis');
rClassGenerator('z-divider');

directive['r-show'] = function(elem, value) {
    if(typeof value === 'object' && value.type == 'expression')
        this.$watch(value, (newValue, oldValue) => {
            if(!newValue == !oldValue)
                return;

            if(typeof newValue === 'string')
                elem.style.display = newValue;
            else
                elem.style.display = newValue ? 'block' : '';
        });
    else if(!!value || value === '') {
        if(typeof value === 'string' && value !== '')
            elem.style.display = value;
        else
            elem.style.display = value ? 'block' : '';
    }
}

directive['r-autofocus'] = function(elem, value) {
    setTimeout(() => elem.focus(), 0);
}

directive['r-attr'] = function(elem, value) {
    const ATTRS = {
        'INPUT': ['autocomplete', 'autofocus', 'checked', 'disabled', 'max', 'maxlength', 'min', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'step', 'type'],
        'TEXTAREA': ['autofocus', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'wrap'],
        'SELECT': ['autofocus', 'disabled', 'multiple', 'name', 'required']
    }

    this.$watch(value, (newValue, oldValue) => {
        ATTRS[elem.tagName].forEach((attr) =>
            newValue[attr] && _.dom.attr(elem, attr, newValue[attr]));
    }, true);
}

export default directive;
