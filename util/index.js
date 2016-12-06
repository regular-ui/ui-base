import Regular from 'regularjs';
const dom = Regular.dom;

// Polyfill
if (!Regular.prototype.$once) {
    Regular.prototype.$once = function (event, fn) {
        const call = function (...args) {
            fn && fn.apply(this, args);
            this.$off(event, call);
        };
        return this.$on(event, call);
    };
}

const _ = {
    noop: Regular.util.noop,
    /**
     * @method defaults(target,...sources) 设置默认值。不会覆盖目标对象中已经设置的值（除`undefined`）。
     * @public
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
     * @public
     * @param  {function} func(elem,value) 简化指令函数。`elem`表示应用该指令的元素，`value`表示实时改变的值。
     * @return {Directive} 返回一个指令
     */
    createBoolDirective(func) {
        return function (elem, value) {
            if (typeof value === 'object' && value.type === 'expression') {
                this.$watch(value, (value, oldValue) => {
                    if (!value === !oldValue)
                        return;
                    func.call(this, elem, value);
                });
            } else if (value === undefined || value === '')
                func.call(this, elem, true);
            else
                func.call(this, elem, !!value);
        };
    },
    /**
     * @method createBoolClassDirective(boolClass) 创建一个布尔样式指令。自动添加/删除CSS类。
     * @public
     * @param  {string} boolClass 需要控制的CSS类
     * @return {Directive} 返回一个指令
     */
    createBoolClassDirective(boolClass) {
        return _.createBoolDirective((elem, value) => {
            dom[value ? 'addClass' : 'delClass'](elem, boolClass);
        });
    },
    /**
     * @method format(value,type,...args) 日期格式化
     * @public
     * @param  {Date|number} date 需要格式化的值
     * @param  {string} format 格式。默认为`yyyy-MM-dd HH:mm`。
     * @return {Directive} 返回生成的字符串
     */
    dateFormat: (() => {
        const MAPS = {
            yyyy: (date) => date.getFullYear(),
            MM: (date) => String(date.getMonth() + 1).padStart(2, '0'),
            dd: (date) => String(date.getDate()).padStart(2, '0'),
            HH: (date) => String(date.getHours()).padStart(2, '0'),
            mm: (date) => String(date.getMinutes()).padStart(2, '0'),
            ss: (date) => String(date.getSeconds()).padStart(2, '0'),
        };

        const trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');

        return function (value, format = 'yyyy-MM-dd HH:mm') {
            if (!value)
                return '';
            value = new Date(value);

            return format.replace(trunk, (capture) => MAPS[capture](value));
        };
    })(),
    /**
     * @method format(value,type,...args) 格式化
     * @public
     * @param  {string} value 需要格式化的值
     * @param  {string} type 格式化类型，目前仅支持`date`
     * @param  {string} ...args 其他参数
     * @return {Directive} 返回生成的字符串
     */
    format(value, type, ...args) {
        return _[type + 'Format'](value, ...args);
    },
};

export default _;
