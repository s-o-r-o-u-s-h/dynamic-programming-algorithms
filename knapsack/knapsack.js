/**
 *
 * @param {number[][]} input
 * @returns {number[][]}
 */
function prepareArray(input) {
    const vArray = [];
    for (let i = 0; i <= input.length; i++) {
        vArray.push([]);
    }
    return vArray;
}

/**
 *
 * @param {number[][]} input
 * @param {number} capacity
 */
function knapsack(input, capacity) {
    const vArray = prepareArray(input);
    const chosenItems = [];
    for (let i = 0; i <= capacity; i++) {
        vArray[0][i] = 0;
    }
    for (let i = 1; i <= input.length; i++) {
        for (let c = 0; c <= capacity; c++) {
            if (input[i - 1][1] > c) {
                vArray[i][c] = vArray[i - 1][c];
            } else {
                vArray[i][c] = Math.max(vArray[i - 1][c], vArray[i - 1][c - input[i - 1][1]] + input[i - 1][0]);
            }
        }
    }
    // construct the solution based on value array(vArray)
    let tempCapacity = capacity;
    for (let i = input.length; i > 0; i--) {
        if (input[i - 1][1] <= tempCapacity && vArray[i - 1][tempCapacity - input[i - 1][1]] + input[i - 1][0] > vArray[i - 1][tempCapacity]) {
            chosenItems.push(input[i - 1]);
            tempCapacity -= input[i - 1][1];
        }
    }

    return chosenItems;
}

knapsack([[1, 2], [1, 3], [2, 2]], 4);