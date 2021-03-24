function calculateStacks(blockAmount: number): string {
    const calculatedStacks = blockAmount / 64;
    const convertedString = calculatedStacks.toString();
    const [stacks, decimalValue] = convertedString.split(".");
    const preparedRemainder = "0." + decimalValue;
    const remainderAmount = parseFloat(preparedRemainder) * 64;
    return `In order to retrieve: ${blockAmount} block(s), you need: ${stacks} stacks and ${remainderAmount} block(s)`;
}

console.log(calculateStacks(1158));