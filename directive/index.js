import _ from '../util';

const directive = {};

directive['z-crt'] = _.createBoolClassDirective('z-crt');
directive['z-sel'] = _.createBoolClassDirective('z-sel');
directive['z-chk'] = _.createBoolClassDirective('z-chk');
directive['z-dis'] = _.createBoolClassDirective('z-dis');

directive['r-show'] = _.createBoolDirective((elem, value) => {
    elem.style.display = value ? 'block' : '';
});

directive['r-autofocus'] = _.createBoolDirective((elem, value) => {
    value && setTimeout(() => elem.focus(), 0);
});

export default directive;
