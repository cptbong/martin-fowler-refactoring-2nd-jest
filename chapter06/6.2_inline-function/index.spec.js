import {rating, ratingRefactor, ratingCase2Refactor, reportLines, reportLinesRefactor} from './'

describe('Inline Function', () => {
    it('rating raw function', () => {
        expect(rating({numberOfLateDeliveries: 10})).toBe(2)
        expect(rating({numberOfLateDeliveries: 5})).toBe(1)
        expect(rating({numberOfLateDeliveries: 1})).toBe(1)
    })

    it('refactor - 별거없음. 합칠부분 복붙이지 뭐', () => {
        expect(ratingRefactor({numberOfLateDeliveries: 10})).toBe(2)
        expect(ratingRefactor({numberOfLateDeliveries: 5})).toBe(1)
        expect(ratingRefactor({numberOfLateDeliveries: 1})).toBe(1)
    })

    it('refactor case2 - 별거없음. 다만 파라미터명이 애매하니 이를 맞춰 수정', () => {
        expect(ratingCase2Refactor({numberOfLateDeliveries: 10})).toBe(2)
        expect(ratingCase2Refactor({numberOfLateDeliveries: 5})).toBe(1)
        expect(ratingCase2Refactor({numberOfLateDeliveries: 1})).toBe(1)
    })
    
    it('reportLines raw function. 위에 rating보단 좀 더 복잡해보이네', () => {
        expect(reportLines({name: 'bong', location: 'pt'})).toStrictEqual([new Array('name', 'bong'), new Array('location', 'pt')])
    })
    it('refactor - 별거없음. rating과 같으나 좀 복잡하면 하나씩 하나씩 진행해라', () => {
        expect(reportLinesRefactor({name: 'bong', location: 'pt'})).toStrictEqual([new Array('name', 'bong'), new Array('location', 'pt')])
    })
});