/**
 * Clockwise
 */
const inputNumber = (process.argv.length > 2) ? parseInt(process.argv[2]) : undefined;
if (inputNumber === undefined) {
    throw '輸入值不存在！';
}

let outputArray = Array(inputNumber).fill().map(() => Array(inputNumber));
let px = 0;
let py = 0;
let count = 1;

/**
 * @description - 生成回型陣列
 */
function generateArray() {
    while (true) {
        outputArray[px][py] = count++;

        if (px < inputNumber - 1 && !outputArray[px + 1][py]) {
            //向左
            px++;
        } else if (py < inputNumber - 1 && !outputArray[px][py + 1]) {
            //向下
            py++;
        } else if (px > 0 && !outputArray[px - 1][py]) {
            //向右
            px--;
        } else if (py > 0 && !outputArray[px][py - 1]) {
            //向上，並直接抵達最上方
            while (true) {
                if (py > 0 && !outputArray[px][py - 1]) {
                    py--;
                    outputArray[px][py] = count++;
                } else {
                    outputArray[px][py] = count--;
                    break
                }
            }
        } else {
            break;
        }
    }
}

/**
 * @description - 印出整個陣列
 */
function output() {
    let ourputString = '';
    for (let y = 0; y < inputNumber; y++) {
        for (let x = 0; x < inputNumber; x++) {
            ourputString += outputArray[x][y] + ' ';
        }
        ourputString += '\n';
    }
    console.log(ourputString);
}

generateArray();
output();