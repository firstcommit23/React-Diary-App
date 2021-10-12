import { formatDate } from '../utils';

describe('formatDate util function', () => {
    const now = Date.now();
    const justNow = new Date(now - 1000 * 60).toString();
    const fiveMinsBefore = new Date(now - 1000 * 60 * 5).toString();
    const yesterday = new Date(now - 1000 * 60 * 60 * 24).toString();
    const tenDaysAgo = new Date(now - 1000 * 60 * 60 * 24 * 10).toString();
    it('shows just now', () => {
        expect(formatDate(justNow)).toBe('방금 전');
    });
    it('shows five minutes before', () => {
        expect(formatDate(fiveMinsBefore)).toBe('5분 전');
    });
    it('shows yesterday', () => {
        expect(formatDate(yesterday)).toBe('어제');
    });
    it('shows ten days age as a date', () => {
        const result = formatDate(tenDaysAgo);
        const match = /^\d{4}년 \d{1,2}월 \d{1,2}일$/.test(result);
        expect(match).toBeTruthy();
    });
});
