import { health, sortHeroes } from '../app';

test.each([
    [
        {
            name: 'John',
            health: 100
        },
        'healthy'
    ],
    [
        {
            name: 'John',
            health: 50
        },
        'wounded'
    ],
    [
        {
            name: 'John',
            health: 15
        },
        'wounded'
    ],
    [
        {
            name: 'John',
            health: 10
        },
        'critical'
    ],
    [
        {
            name: 'John',
            health: 0
        },
        'dead'
    ],
])('health %j should be %s', (player, expected) => {
    expect(health(player)).toBe(expected);
});

test('sort heroes test', () => {
    const list = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    expect(sortHeroes(list)).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]);
})
