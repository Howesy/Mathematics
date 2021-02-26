//Calculate how many squares (x * y) fit into another square (a * b)
function calculateSFIS(x: number, y: number, a: number, b: number) : number {
    const calculatedX = a / x;
    const calculatedY: number = b / y;
    const calculation = calculatedX * calculatedY;
    return calculation;
}