/*
For a given string s find the character c (or C) 
with longest consecutive repetition and return:
[c, l]

where l (or L) is the length of the repetition. 
If there are two or more characters with the 
same l return the first in order of appearance.

For empty string return:
["", 0]
*/


// Solution

function longestRepetition(s) {
  let count = 0;
  let prevLetter = '';
  
  return s.toLowerCase().split('').reduce((acc, curr) => {
    if(curr === prevLetter){
      count++;
    }
    else{
      count = 1;
    }

    if(count > acc[1]){
      acc[1] = count;
      acc[0] = curr;
    }

    prevLetter = curr;
    return acc;
  }, ['', 0]);
}

// or

const longestRepetition = s => {
  let max = 0;
  let char = ''; 
  for (let i = 1, l = s.length, c = 1; i <= l; i++) {
    if (s[i] === s[i - 1]) c++;
    else {
      if (c > max) {
        max = c;
        char = s[i - 1];   
      }
      c = 1;
    }
  }
  return [char, max];
}