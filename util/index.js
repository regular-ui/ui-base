import { dom } from 'regularjs';

const _ = {
    /**
     * @method defaults(target,...sources) 设置默认值。不会覆盖目标对象中已经设置的值（除`undefined`）。
     * @param  {object} target 目标对象
     * @param  {object} ...sources 默认对象。从左到右依次进行，不会覆盖已经设置过的值。
     * @return {object} target 返回目标对象
     */
    defaults(target, ...sources) {
        sources.forEach((source) => {
            for (const key in source) {
                if (source.hasOwnProperty(key) && target[key] === undefined)
                    target[key] = source[key];
            }
        });
        return target;
    },
    /**
     * @method createBoolDirective(func) 创建一个布尔指令。简化了实现原生regular指令中的`$watch`等过程。
     * @param  {function} func(elem,value) 简化指令函数。`elem`表示应用该指令的元素，`value`表示实时改变的值。
     * @return {Directive} 返回一个指令
     */
    createBoolDirective(func) {
        return function (elem, value) {
            if (typeof value === 'object' && value.type === 'expression') {
                this.$watch(value, (newValue, oldValue) => {
                    if (!newValue === !oldValue)
                        return;
                    func.call(this, elem, newValue);
                });
            } else if (!!value || value === '')
                func.call(this, elem, true);
        };
    },
    /**
     * @method createBoolClassDirective(boolClass) 创建一个布尔样式指令。自动添加/删除CSS类。
     * @param  {string} boolClass 需要控制的CSS类
     * @return {Directive} 返回一个指令
     */
    createBoolClassDirective(boolClass) {
        return _.createBoolDirective((elem, value) => {
            dom[value ? 'addClass' : 'delClass'](elem, boolClass);
        });
    },
};

export default _;
