function calculateGCD(x: number, y: number): number {
    if (x == 0)
        return y;
    
    if (y == 0)
        return x;

    if (x == y)
        return x;

    if (x > y)
        return calculateGCD(x-y, y);
    return calculateGCD(x, y-x);
}

console.log(calculateGCD(24, 36));