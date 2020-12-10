export function xor(x: boolean, y: boolean): boolean {
    return (x || y) && !(x && y)
}

export function allOrNothing(...params: boolean[]): boolean {
    return params.every((value) => value) || params.every((value) => !value)
}
