/**
 * 
 * @param num Number
 * @returns Number
 * @description Returns the boolean value if the number is even or not
 */
export const isDouble = (num: number): Boolean => {
    return num % 2 === 0;
};

/**
 *  @param num Number
 * @returns Number
 * @description Returns the boolean value if the number is odd or not
 */
export const isOdd = (num: number): Boolean => {
    return num % 2 !== 0;
}