interface Vector {
    x: number;
    y: number;
}

function calculateMagnitude(vector: Vector): number {
    const {x, y} = vector;
    const squaredEvaluation = Math.pow(x, 2) + Math.pow(y, 2);
    return Math.sqrt(squaredEvaluation);
}

function addVectors(...vectors: Vector[]): Vector {
    const xValue = vectors.reduce((x, y) => x + y.x, 0);
    const yValue = vectors.reduce((x, y) => x + y.y, 0);
    return {x: xValue, y: yValue};
}

function subtractVectors(...vectors: Vector[]): Vector {
    const [initialVector, ...rest] = vectors;
    const xValue = rest.reduce((x, y) => x + -Math.abs(y.x), 0);
    const yValue = rest.reduce((x, y) => x + -Math.abs(y.y), 0);
    const {x, y} = initialVector;
    const constructedVector = {x: x + xValue, y: y + yValue};
    return constructedVector;
}

function calculateScalar(vector: Vector, scalar: number): Vector {
    const {x, y} = vector;
    return {x: x * scalar, y: y * scalar};
}