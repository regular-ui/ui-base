import _ from '../';

describe('util', () => {
    describe('#defaults', () => {
        it('should return the target.', () => {
            const target = { name: 'David', age: 24 };
            expect(_.defaults(target)).to.be(target);
        });

        it('should not override properties in target.', () => {
            const target = { name: 'David', age: 24 };
            _.defaults(target, { name: null, score: 100 });
            expect(target.name).to.be('David');
            expect(target.score).to.be(100);
        });

        it('should accept more than one source and not override the former.', () => {
            const target = { name: 'David', age: 24 };
            _.defaults(target, { name: null, score: 100 }, { score: 60, grade: 4 });
            expect(target.score).to.be(100);
            expect(target.grade).to.be(4);
        });
    });
});
