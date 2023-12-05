
const input = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

let symbols = ['*', '+', '$', '#']

const rows = input.split('\n')

function searchInt(x, y) {
    let value = 0;
    if (parseInt(rows[y][x]) === NaN) { }



    //returning [value, lengthOfInt]

}

function sweep(x, y, length) {
    for (let y2 = Math.max(0, y - 1); y2 <= y + 1 && y2 < rows.length; y2++) {
        for (let x2 = Math.max(0, x - 1); x2 < x + length + 1 && x2 < rows[y2].length; x2++) {
            if (x2 >= x && x2 < x + length - 1) {
                continue;
            }
            if (symbols.includes(rows[y2][x2])) {
                console.log('number: ', rows[y][x])
                console.log('found: ', rows[y2][x2])
                return true;
            }
        }
    }
    return false;
}

let y = 0;
do {
    let x = 0;
    do {
        if (parseInt(rows[y][x]) !== NaN && rows[y][x] !== '.') {
            // console.log('number: ', rows[y][x])
            sweep(x, y, 1);
        }
        // if (parseInt(rows[y][x]) !== NaN) {
        //     // const lengthOfInt = `${value}`.length

        // }
        x++;
    } while (x < rows[y].length)
    y++;
} while (y < rows.length)

