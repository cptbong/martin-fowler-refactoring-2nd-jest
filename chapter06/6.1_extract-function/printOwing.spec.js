import {printOwing} from './printOwing'
import {jest} from '@jest/globals'

describe('Extract Function', () => {
    it('raw function', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const invoice = {
            customer: 'bong',
            orders: [
                {amount: 10000},
                {amount: 20000},
                {amount: 30000},
            ]
        };
        printOwing(invoice);
        expect(consoleSpy).toHaveBeenCalledWith('*****************');
        expect(consoleSpy).toHaveBeenCalledWith('**** 고객 채무 ****');
        expect(consoleSpy).toHaveBeenCalledWith('*****************');

        expect(consoleSpy).toHaveBeenCalledWith(`고객명: ${invoice.customer}`);
        expect(consoleSpy).toHaveBeenCalledWith(`채무액: ${60000}`);
        // expect(consoleSpy).toHaveBeenCalledWith(`마감일: ${'7/27/2022'}`); //코드를 작성하는 오늘만 성공
    })
});