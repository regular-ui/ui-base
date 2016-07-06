import filter from '../';

describe('filter', () => {
    describe('#dateFormat', () => {
        const date = new Date(2016, 6, 1, 18, 32, 40, 123);

        it('should output correct Date string with the default format.', () => {
            expect(filter.dateFormat(date)).to.be('2016-07-01 18:32');
        });

        it('should output correct Date string with a specified format.', () => {
            expect(filter.dateFormat(date, 'MM-dd HH:mm:ss')).to.be('07-01 18:32:40');
        });

        it('should also accept a number-type date.', () => {
            expect(filter.dateFormat(+date, 'yyyy-MM-dd')).to.be('2016-07-01');
        });

        it('should output empty string if `value` is nothing.', () => {
            expect(filter.dateFormat(null)).to.be('');
        });
    });

    describe('#format', () => {
        it('should format date', () => {
            expect(/\d{4}-\d{2}-\d{2}/.test(filter.format(new Date(), 'date', 'yyyy-MM-dd'))).to.be(true);
        });
    });
});
