const createMultiplyTable = require('../main');

it ('should return null when start number bigger than end number.', () => {
    expect(createMultiplyTable(3, 2)).toBe(null);
});

it ('should throw exception when start number not in range of 1 to 1000.', () => {
    expect(createMultiplyTable(0, 2)).toBe("start number and the end number can be any number in a range of 1 to 1000 (inclusive)");
});

it ('should throw exception when end number not in range of 1 to 1000.', () => {
    expect(createMultiplyTable(999, 1001)).toBe("start number and the end number can be any number in a range of 1 to 1000 (inclusive)");
});

it ('should return multiplication when start from 2 and end with 4.', () => {
    expect(createMultiplyTable(2, 4)).toBe("2*2=4\r\n2*3=6 3*3=9\r\n2*4=8 3*4=12 4*4=16\r\n");
});
