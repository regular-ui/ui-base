import Component from '../../component';

describe('directive', () => {
    describe('#boolClassDirective', () => {
        it('should add/remove class when `value` changed.', () => {
            const component = new Component({
                template: `<div z-crt={value} ref="element"></div>`,
            });

            component.data.value = 1;
            component.$update();
            expect(component.$refs.element.className).to.be('z-crt');

            component.data.value = true;
            component.$update();
            expect(component.$refs.element.className).to.be('z-crt');

            component.data.value = null;
            component.$update();
            expect(component.$refs.element.className).to.be('');
        });

        it('should add class when value is always true.', () => {
            const component = new Component({
                template: `<div z-sel={true} ref="element"></div>`,
            });
            expect(component.$refs.element.className).to.be('z-sel');
        });

        it('should add class when using HTML5 style.', () => {
            const component = new Component({
                template: `<div z-dis ref="element"></div>`,
            });
            expect(component.$refs.element.className).to.be('z-dis');
        });

        it('should add class when value is always false.', () => {
            const component = new Component({
                template: `<div z-chk={false} ref="element"></div>`,
            });
            expect(component.$refs.element.className).to.be('');
        });
    });

    describe('#r-show', () => {
        it('should show/hide when `value` changed.', () => {
            const component = new Component({
                template: `<div r-show={value} ref="element"></div>`,
            });

            component.data.value = true;
            component.$update();
            expect(component.$refs.element.style.display).to.be('block');

            component.data.value = undefined;
            component.$update();
            expect(component.$refs.element.style.display).to.be('');
        });
    });

    describe('#r-autofocus', () => {
        const component = new Component({
            template: `<input r-autofocus ref="element" />`,
        }).$inject(document.body);

        it('should autofocus when value is true.', function () {
            this.timeout(10);
            expect(component.$refs.element).to.be(document.activeElement);
            component.destroy();
        });
    });
});
