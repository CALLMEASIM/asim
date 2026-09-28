const subtract = require('../server');

test('subtracts 10 - 5 to equal 5', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('subtracts 20 - 8 to equal 12', () => {
    expect(subtract(20, 8)).toBe(12);
});