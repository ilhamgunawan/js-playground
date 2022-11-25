function palindrome1(str) {
  str = str.toLowerCase();
  const original = str
  const reversed = str.split('').reverse().join('');
  return original === reversed;
}

// console.log(palindrome1('kasurinirusak'));

function palindrome2(str) {
  str = str.toLowerCase(); // convert to lower case only
  str = str.replace(' ', ''); // remove space with empty string

  // regex for alphabet characters
  // const regex = /[\W_]/g; 
  const regex = /[^A-Za-z0-9]/g;
  str = str.replace(regex, ''); // remove non alphabet characters

  const length = str.length;
  const halfLength = length / 2;

  for (let i = 0; i < halfLength; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// console.log(palindrome2('A man, a plan, a canal. Panama'));


/**
 * Next level palindrome
 * Example:
 * - Input = abbba => valid => return abba
 * - Input = khjjjjjj => valid => return k
 * - Input = abcccc => invalid => return not-palindrome
 * - Input = abhcba => valid => return abhca
 * - Input = xyzzczyx => valid => return xyzzyx
 * 
 * Hint:
 * - You can remove up to 2 letter to make a palindrome
 */

function nextLevelPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(' ', '');
  const regex = /[\W_]/g;
  str = str.replace(regex, '');

  const removedChars = {};
  const strLength = str.length;
  const strHalfLength = strLength / 2;
  let strTemp = '';
  let strReverseTemp = '';

  for (let i = 0; i < strHalfLength; i++) {
    if (str[i] !== str[strLength - 1 - i]) {
      // strTemp = `${strTemp}${str[i]}`;

      if (removedChars[str[i]]) {
        removedChars[str[i]] += 1;
      } else {
        removedChars[str[i]] = 1;
      }

      if (removedChars[str[strLength - 1 - i]]) {
        removedChars[str[strLength - 1 - i]] += 1;
      } else {
        removedChars[str[strLength - 1 - i]] = 1;
      }

    } else {
      strTemp = `${strTemp}${str[i]}`;
      strReverseTemp = `${strReverseTemp}${str[strLength - 1 - i]}`;
    }
  }
  strReverseTemp = strReverseTemp.split('').reverse().join('');
  const countLetterRemoved = Object.keys(removedChars).length;
  const output = `${strTemp}${strReverseTemp}`;
  const reversedOutput = output.split('').reverse().join('');
  console.log({strTemp, strReverseTemp, removedChars, countLetterRemoved, output, reversedOutput});
  // if (output === reversedOutput && countLetterRemoved < 2) {
  //   return reversedOutput;
  // } else {
  //   return 'not-possible';
  // }
}

// console.log(nextLevelPalindrome('abhcba'));

function nextLevelPalindrome2(str) {
  str = str.toLowerCase();
  str = str.replace(' ', '');
  const regex = /[\W_]/g;
  str = str.replace(regex, '');
  const strReversed = str.split('').reverse().join('');

  const strLength = str.length;
  const halfLength = strLength / 2;
  let charState = [];

  for (let i = 0; i < halfLength; i++) {
    if (str[i] !== str[strLength - 1 - i]) {
      charState.push([str[i], 'not-equal']);
    } else {
      charState.push([str[i], 'equal']);
    }
  }

  for (let i = 0; i < halfLength; i++) {
    if (strReversed[i] !== strReversed[strLength - 1 - i]) {
      charState.push([strReversed[i], 'not-equal']);
    } else {
      charState.push([strReversed[i], 'equal']);
    }
  }

  console.log({charState});
}

nextLevelPalindrome2('budi');
