//Borrowed from stack overflow.
function gcd(a, b) {
	return (b) ? gcd(b, a % b) : a;
}

//Borrowed from stack overflow.
var decimalToFraction = function (_decimal) {
	var top		= _decimal.toString().replace(/\d+[.]/, '');
	var bottom	= Math.pow(10, top.length);
	if (_decimal > 1) {
		top	= +top + Math.floor(_decimal) * bottom;
	}
	var x = gcd(top, bottom);
	return {
		top		: (top / x),
		bottom	: (bottom / x),
		display	: (top / x) + '/' + (bottom / x)
	};
};

function calculateHornersDecimal(binaryValue: number): Array<string>
{
    const placeholderArray: Array<string> = []; 
    const convertedValue = binaryValue.toString();
    const deconstructedValues = convertedValue.split("");
    let initialValue: number = parseInt(deconstructedValues[0]);
    const reversedValues = deconstructedValues.reverse().slice(1, deconstructedValues.length);
    reversedValues.push(initialValue.toString());
    reversedValues.forEach(function(reversedValue) {
        initialValue /= 2;
        placeholderArray.push(initialValue.toString());
        initialValue += parseInt(reversedValue);
    });

    return placeholderArray;
}

const calculatedAnswers: Array<string> = calculateHornersDecimal(10101001);
calculatedAnswers.forEach(function(answer) {
    const fraction = decimalToFraction(answer);
    console.log(fraction.display);
});