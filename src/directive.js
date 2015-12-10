'use strict';

var _ = require('./_.js');

exports['z-crt'] = function(elem, value) {
    if(typeof value === 'object' && value.type == 'expression')
        this.$watch(value, function(newValue, oldValue) {
            _.dom[newValue ? 'addClass' : 'delClass'](elem, 'z-crt');
        });
    else if(!!value || value === '')
        _.dom.addClass(elem, 'z-crt');
}

exports['z-sel'] = function(elem, value) {
    if(typeof value === 'object' && value.type == 'expression')
        this.$watch(value, function(newValue, oldValue) {
            _.dom[newValue ? 'addClass' : 'delClass'](elem, 'z-sel');
        });
    else if(!!value || value === '')
        _.dom.addClass(elem, 'z-sel');
}

exports['z-dis'] = function(elem, value) {
    if(typeof value === 'object' && value.type == 'expression')
        this.$watch(value, function(newValue, oldValue) {
            _.dom[newValue ? 'addClass' : 'delClass'](elem, 'z-dis');
        });
    else if(!!value || value === '')
        _.dom.addClass(elem, 'z-dis');
}

exports['r-show'] = function(elem, value) {
    if(typeof value === 'object' && value.type == 'expression')
        this.$watch(value, function(newValue, oldValue) {
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

exports['r-autofocus'] = function(elem, value) {
    setTimeout(function() {
        elem.focus();
    }, 0);
}

exports['r-attr'] = function(elem, value) {
    var attrs = {
        'INPUT': ['autocomplete', 'autofocus', 'checked', 'disabled', 'max', 'maxlength', 'min', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'step', 'type'],
        'TEXTAREA': ['autofocus', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'wrap'],
        'SELECT': ['autofocus', 'disabled', 'multiple', 'name', 'required']
    }

    this.$watch(value, function(newValue, oldValue) {
        attrs[elem.tagName].forEach(function(attr) {
            if(newValue[attr])
                _.dom.attr(elem, attr, newValue[attr]);
        });
    }, true);
}