let x = 1; // variable x will be maintained in the module scope

export function getX() {
  return x;
}

export function setX(value) {
  x = value;
}
