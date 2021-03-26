function calculateHorners(binaryValue: number): number {
    const calculatedConsecutiveValues: Array<number> = [];
    const binaryStringArray = binaryValue.toString().split("");
    const [initialValue] = binaryStringArray;
    let parsedInitialValue = parseInt(initialValue);
    const preparedBinaryValue = binaryStringArray.slice(1, binaryStringArray.length);
    calculatedConsecutiveValues.push(parsedInitialValue);
    preparedBinaryValue.forEach(function(bit) {
        parsedInitialValue *= 2;
        parsedInitialValue += parseInt(bit);
        calculatedConsecutiveValues.push(parsedInitialValue);
    });

    console.log(`Calculated Consectuive Values using the Horners Method for ${binaryValue}: \n${calculatedConsecutiveValues.join(", ")}\n`);

    return parsedInitialValue;
}

const hornersValue: number = calculateHorners(11011001);
console.log(hornersValue);

//Horners Algorithm Logic.
//-> Take down first value.
//-> Add the binary value to the value.
//-> Multiply value by 2 and assign value to itself.
//-> Add value to array.