// Example 1
function add(a, b) {
  return a + b;
};

const withCall = add.call(null, 10, 20);
const withApply = add.apply(null, [1, 2]);
console.log({withCall, withApply});

// Example 2

const obj = {
  value: 10,
};

function addWithThis(value) {
  return this.value + value;
}

// const addWithoutCall = addWithThis(10); // will throw an error, because we didn't specify the this value

const addThisWithCall = addWithThis.call(obj, 10);
const addThisWithApply = addWithThis.apply(obj, [5]);

const bindFirst = addWithThis.bind(obj);
const afterBound = bindFirst(1);

console.log({addThisWithCall, addThisWithApply, afterBound});
