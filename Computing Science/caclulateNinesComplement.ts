function calculateNinesComplement(x: number): number {
    const calculatedDigits: number = Math.log(x) + 1;
    const calculation: number = (Math.pow(10, calculatedDigits) + 1) - x;
    return calculation;
}