import Component from '../';

describe('Component', () => {
    const component = new Component();

    describe('#config', () => {
        it('should set some default properties.', () => {
            expect(component.data.readonly).to.be(false);
            expect(component.data.disabled).to.be(false);
            expect(component.data.visible).to.be(true);
            expect(component.data.class).to.be('');
        });
    });

    describe('#watch', () => {
        it('should do nothing.', () => {
            component.watch();
            expect(component._watchers).to.be(undefined);
        });
    });
});
