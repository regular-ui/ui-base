import Regular from 'regularjs';
import _ from '../';

describe('util', () => {
    describe('#$once', () => {
        it('should catch an event once.', () => {
            const regular = new Regular();
            let result = false;
            regular.$once('test', ($event) => result = $event.result);
            regular.$emit('test', { result: true });
            expect(result).to.be(true);
        });
    });

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

    describe('#dateFormat', () => {
        const date = new Date(2016, 6, 1, 18, 32, 40, 123);

        it('should output correct Date string with the default format.', () => {
            expect(_.dateFormat(date)).to.be('2016-07-01 18:32');
        });

        it('should output correct Date string with a specified format.', () => {
            expect(_.dateFormat(date, 'MM-dd HH:mm:ss')).to.be('07-01 18:32:40');
        });

        it('should also accept a number-type date.', () => {
            expect(_.dateFormat(+date, 'yyyy-MM-dd')).to.be('2016-07-01');
        });

        it('should output empty string if `value` is nothing.', () => {
            expect(_.dateFormat(null)).to.be('');
        });
    });

    describe('#format', () => {
        it('should format date', () => {
            expect(/\d{4}-\d{2}-\d{2}/.test(_.format(new Date(), 'date', 'yyyy-MM-dd'))).to.be(true);
        });
    });
});
