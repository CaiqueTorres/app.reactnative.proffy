/**
 * Function that stores the xor logic
 */
export function xor(x: boolean, y: boolean): boolean {
    return (x || y) && !(x && y)
}

/**
 * Function that returns "true" if all the params passed are "true" but if
 * some is false the function returns false
 */
export function allOrNothing(...params: boolean[]): boolean {
    return params.every((value) => value) || params.every((value) => !value)
}
