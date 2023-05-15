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

module.exports = {
    sequenceGenerator,
    serialSequence,
    serialSequenceGenerator
};