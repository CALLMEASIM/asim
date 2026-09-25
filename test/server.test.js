const subtract = require('../server');

test('subtracts two numbers correctly', () => {
    expect(subtract(10, 5)).toBe(5);
});