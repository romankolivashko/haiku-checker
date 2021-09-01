make a Haiku object
contains Haiku.line1, .line2, .line3
code to run on a line should:
break the line into an array of words using .split(" ") 

let arr = ["I", "am", "very", "sad"]
run forEach on array, 

if arr[0]

1. identify syllables by counting groups of vowels, maybe use regex
2. ignore silent e's

An "E" is considered silent if it's alone at the end of the word, preceded by one (or more) consonant(s) and there is at least one other syllable in the word. Examples: "age", "ar·range", "con·crete"; but not in "she", "blue", "de·gree".

3. convert leftover string to an array
4. count array elements (array.length) to determine syllable count
5. return true or false per line if syllable count is correct or not