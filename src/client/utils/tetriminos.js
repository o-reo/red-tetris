const pieces = [
    {
        position: [{column: 4, row: 0}, {column: 5, row: 0}, {column: 4, row: 1}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}],
                [{column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}],
                [{column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}],
                [{column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}, {column: 0, row: 0}],
            ]
        ,
        color: 'yellow'
    },
    {
        position: [{column: 4, row: 0}, {column: 4, row: 1}, {column: 4, row: 2}, {column: 4, row: 3}],
        indexRotation: 1,
        rotation:
            [
                [{column: -1, row: 1}, {column: 0, row: 0}, {column: 1, row: -1}, {column: 2, row: -2}],
                [{column: 2, row: -1}, {column: 1, row: 0}, {column: 0, row: 1}, {column: -1, row: 2}],
                [{column: 1, row: 2}, {column: 0, row: 1}, {column: -1, row: 0}, {column: -2, row: -1}],
                [{column: -2, row: -2}, {column: -1, row: -1}, {column: 0, row: 0}, {column: 1, row: 1}],
            ],
        color: 'lightblue'
    },
    {
        position: [{column: 3, row: 0}, {column: 3, row: 1}, {column: 4, row: 1}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 2, row: 0}, {column: 1, row: -1}, {column: 0, row: 0}, {column: -1, row: 1}],
                [{column: 0, row: 2}, {column: 1, row: 1}, {column: 0, row: 0}, {column: -1, row: -1}],
                [{column: -2, row: 0}, {column: -1, row: 1}, {column: 0, row: 0}, {column: 1, row: -1}],
                [{column: 0, row: -2}, {column: -1, row: -1}, {column: 0, row: 0}, {column: 1, row: 1}],
            ]
        ,
        color: 'darkblue'
    },
    {
        position: [{column: 3, row: 0}, {column: 4, row: 0}, {column: 4, row: 1}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 2, row: -1}, {column: 1, row: 0}, {column: 0, row: -1}, {column: -1, row: 0}],
                [{column: 0, row: 2}, {column: -1, row: 1}, {column: 0, row: 0}, {column: -1, row: -1}],
                [{column: -1, row: 0}, {column: 0, row: -1}, {column: 1, row: 0}, {column: 2, row: -1}],
                [{column: -1, row: -1}, {column: 0, row: 0}, {column: -1, row: 1}, {column: 0, row: 2}],
            ]
        ,
        color: 'red'
    },
    {
        position: [{column: 4, row: 0}, {column: 3, row: 1}, {column: 4, row: 1}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 1, row: 1}, {column: 1, row: -1}, {column: 0, row: 0}, {column: -1, row: 1}],
                [{column: -1, row: 1}, {column: 1, row: 1}, {column: 0, row: 0}, {column: -1, row: -1}],
                [{column: -1, row: -1}, {column: -1, row: 1}, {column: 0, row: 0}, {column: 1, row: -1}],
                [{column: 1, row: -1}, {column: -1, row: -1}, {column: 0, row: 0}, {column: 1, row: 1}],
            ]
        ,
        color: 'purple'
    },
    {
        position: [{column: 3, row: 1}, {column: 4, row: 1}, {column: 5, row: 0}, {column: 5, row: 1}],
        indexRotation: 1,
        rotation:
            [
                [{column: 1, row: -1}, {column: 0, row: 0}, {column: 0, row: 2}, {column: -1, row: 1}],
                [{column: 1, row: 1}, {column: 0, row: 0}, {column: -2, row: 0}, {column: -1, row: -1}],
                [{column: -1, row: 1}, {column: 0, row: 0}, {column: 0, row: -2}, {column: 1, row: -1}],
                [{column: -1, row: -1}, {column: 0, row: 0}, {column: 2, row: 0}, {column: 1, row: 1}],
            ]
        ,
        color: 'orange'
    },
    {
        position: [{column: 3, row: 1}, {column: 4, row: 1}, {column: 4, row: 0}, {column: 5, row: 0}],
        indexRotation: 1,
        rotation:
            [
                [{column: 1, row: 0}, {column: 0, row: -1}, {column: -1, row: 0}, {column: -2, row: -1}],
                [{column: -1, row: 0}, {column: 0, row: 1}, {column: 1, row: 0}, {column: 2, row: 1}],
                [{column: 1, row: 0}, {column: 0, row: -1}, {column: -1, row: 0}, {column: -2, row: -1}],
                [{column: -1, row: 0}, {column: 0, row: 1}, {column: 1, row: 0}, {column: 2, row: 1}],
            ]
        ,
        color: 'green'
    }
];

export default pieces;