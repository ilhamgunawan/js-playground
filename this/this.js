function printThis() {
  console.log(this);
}

printThis(); // in the browser should print window

//=============================================================================//

function createInstance() {
  return {
    printThis() {
      console.log(this);
    },
  };
}

const myInstance = createInstance();
myInstance.printThis(); // should print myInstance object

//=============================================================================//

function Instance() {
  console.log(this);
  this.value = 10;
  console.log(this);
}

const instance = new Instance();

//=============================================================================//

const myObject = {
  someValue: 99,
  printThis() {
    console.log(this);
  },
};

console.log(myObject.printThis());

//=============================================================================//
