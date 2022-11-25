// fibonacci 1: sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fib(n) {
  if (n <= 0) {
    return 0;
  }
  let helper = [];
  let output = 1;
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      helper.push(0);
    } else if (i === 1) {
      helper.push(1);
    } else {
      helper.push(helper[i-1] + helper[i-2])
    }
    if (i === n && i > 1) {
      output = helper[i-1] + helper[i-2];
      break;
    } else if (i === n && i === 1) {
      output = 1;
      break;
    }
  }
  return output;
}

// fibonacci 2: sequence = 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fibRecursive(n) {
  if (n <= 1) return 1;
  return fibRecursive(n-2) + fibRecursive(n-1);
}

test('fib 1', () => { 
  expect(fib(6)).toBe(8);
})

test('fib 2', () => { 
  expect(fibRecursive(2)).toBe(2);
})
