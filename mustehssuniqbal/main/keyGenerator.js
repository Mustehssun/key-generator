/**
 * 
 * @param {*} sequence - lambda function to generate the sequence
 * @param {} initialValue - value to start the sequence from
 * @param {} prefix - prefix to the generated key, e.g. abc1, abc2, abc3...
 * @returns a lambda function that can be called to generate the numbers in the sequence, one call at a time
 */
const sequenceGenerator = (sequence, initialValue, prefix) => {
    return () => {
        if(prefix == null) {
            prefix = "";
        }
        if(initialValue == null) {
            initialValue = 0;
        }
        let temp = initialValue;
        initialValue = sequence(initialValue);

        return "" + prefix + temp;
    };
};

/**
 * 
 * @param {*} prev - the previous value in the sequence 
 * @returns 
 */
const serialSequence = prev => prev + 1;

/**
 * 
 * @param {} initialValue - value to start the sequence from
 * @param {} prefix - prefix to the generated key, e.g. abc1, abc2, abc3...
 * @returns a lambda function that can be called to generate the numbers in the sequence, one call at a time
 */
const serialSequenceGenerator = (initialValue, prefix) => sequenceGenerator(serialSequence, initialValue, prefix);

/**
 * 
 * @param {*} list 
 * @returns a lambda function that can be called to return the element of the list, one at a time
 */
const listIterator = list => {
    let index = 0;

    return () => list[index++];
};

/**
 * 
 * @param {*} list 
 * @returns a lambda function that can be called to return the element of the list, one at a time
 */
const circularListIterator = list => {
    let index = 0;

    return () => {
        index = index == list.length? 0: index;

        return list[index++];
    };
}; 

module.exports = {
    sequenceGenerator,
    serialSequence,
    serialSequenceGenerator,
    listIterator,
    circularListIterator
};