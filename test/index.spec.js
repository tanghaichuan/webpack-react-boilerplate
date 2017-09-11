describe('hello test', () => {
    it('test example', () => {});
    it('chai example', () => {
        expect('hi')
            .to
            .equal('hi')
    });
    it('chai test 3', () => {
        throw new Error('测试运行失败')
    })
})