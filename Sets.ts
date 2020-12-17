/**
 * Function to determine amount of subsets from specified subset.
 * @param specifiedSet The set you wish to determine the amount of subsets for.
 * @param excludeEmptySet Optional boolean to include the empty set when determining the amount of subsets.
 */

function determineSubsets<T>(specifiedSet: Set<T>, excludeEmptySet = false): number {
    const calculatedSubsets: number = Math.pow(2, specifiedSet.size);
    if (excludeEmptySet)
        return calculatedSubsets - 1;
    return calculatedSubsets;
}

/**
 * Function to determine the cardinality of a specified set.
 * @param specifiedSet The set you wish to determine the cardinality of.
 */

function determineCardinality<T>(specifiedSet: Set<T>): number {
    return specifiedSet.size;
}

function calculateSetDifference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const placeholderSet: Set<T> = new Set();
    setA.forEach(function(value) {
        placeholderSet.add(value);
        if (setB.has(value))
            placeholderSet.delete(value);
    });
    return placeholderSet;
}