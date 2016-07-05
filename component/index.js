import Regular from 'regularjs';
import filter from '../filter';
import directive from '../directive';

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
        this.data = Object.assign({
            readonly: false,
            disabled: false,
            visible: true,
            'class': '',
        }, this.data);
        this.supr();
    },
})
.filter(filter)
.directive(directive);

export default Component;
