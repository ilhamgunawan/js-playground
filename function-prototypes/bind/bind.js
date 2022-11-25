const someObj = {
  value: 99,
  getValue() {
    return this.value;
  },
  setValue(value) {
    this.value = value;
  },
};

export const unboudGetValue = someObj.getValue;
export const boundGetValue = someObj.getValue.bind(someObj)
export const unboundSetValue = someObj.setValue;
export const boundSetValue = someObj.setValue.bind(someObj);
