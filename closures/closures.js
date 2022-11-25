// Example 1
function makeCat() {
  const cat = 'cat'; // cat variable will be maintained in a lexical environment as soon as makeCat function is called
  
  function showCat() {
    return cat;
  }

  return showCat;
}

const myCat = makeCat(); 

// when myCat function is called (will run showCat function inside makeCat), 
// it will return a value that refer to cat var inside the lexical environment
console.log(myCat()); 


// Example 2: Emulates private methods
const makeCounter = function() {
  let privateCounter = 0;

  function addToCounter(val) {
    return privateCounter += val;
  }

  return {
    increment() {
      addToCounter(1);
    },
    decrement() {
      addToCounter(-1);
    },
    get() {
      return privateCounter;
    },
  };
};

// each closures, counter 1 and counter 2 will have seperate independence lexical environment
const counter1 = makeCounter();
const counter2 = makeCounter();

counter1.increment()

// get method on each counters will have different value
console.log(counter1.get());
console.log(counter2.get());
