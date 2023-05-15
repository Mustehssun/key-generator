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

const serialSequence = lastValue => lastValue + 1;

const serialSequenceGenerator = (initialValue, prefix) => sequenceGenerator(serialSequence, initialValue, prefix);

const listIterator = list => {
    let index = 0;

    return () => list[index++];
};

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