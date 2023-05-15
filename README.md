# key-generator
Do you have to generate unique keys for your React lists? For some other Data Structures? Try the key-generator.
It also contains iterator and list iterator for iterating through lists periodically.

## How to install
``` > npm install --save mustehssun-key-generator ```

## Example usage
```
const generate = serialSequenceGenerator();

console.log(generate());
console.log(generate());
console.log(generate());
```
``` Output: 1 2 3 ```

It comes in very handy when you are constructing lists in React and each item of the list needs to have a unique key - even though the uniqueness is not functional, or technical, to you. You can use generate() on each items of the list. Like this:
```
return (
        <div>
            {list.map(elem => (<button key={generate()}>elem.text</button>))}
        </div>
)
```

You can also pass **initialValue** and **prefix** to the generator. Both parameters are optional.
```
const generate = serialSequenceGenerator(0, "abc");

console.log(generate());
console.log(generate());
```
``` Output: abc1 abc2 abc3 ```

### Custom Generator
```
const generate = sequenceGenerator(prev => prev * 2, 2);

console.log(generate());
console.log(generate());
console.log(generate());
```
``` Output: 2 4 8 ```

### Circular List Iterator
You can also use listIterator and circularListIterator to iterate over a list, one element at a time.
Circular list iterator is an iterator that runs through the list in a circular fashion.
```
const generate = circularListIterator([1, 2]);
console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());
```
``` Output: 1 2 1 2 ```

NPM URL: https://www.npmjs.com/package/mustehssun-key-generator
