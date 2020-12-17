function determineSubsets<T>(specifiedSet: Set<T>, excludeEmptySet = false): number {
    const calculatedSubsets: number = Math.pow(2, specifiedSet.size);
    if (excludeEmptySet)
        return calculatedSubsets - 1;
    return calculatedSubsets;
}

function determineCardinality<T>(specifiedSet: Set<T>): number {
    return specifiedSet.size;
}