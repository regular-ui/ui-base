import Regular from 'regularjs';
import filter from '../filter';
import directive from '../directive';
import _ from '../util';

/**
 * @class Component
 * @extend Regular
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Component = Regular.extend({
    /**
     * @protected
     */
    config() {
        this.defaults({
            readonly: false,
            disabled: false,
            visible: true,
            'class': '',
        });
        this.supr();
    },
    /**
     * @method defaults(...options) 设置`this.data`的默认值
     * @protected
     * @param  {object} ...options 若干默认选项。从左到右依次进行，不会覆盖已经设置过的值。
     * @return {object} data 返回`this.data`
     */
    defaults(...options) {
        return _.defaults(this.data, ...options);
    },
    /**
     * @protected
     */
    watch() {
        // just for override
        // recommand putting all `this.$watch` here.
    },
}).filter(filter).directive(directive);

export default Component;
