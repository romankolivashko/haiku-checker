export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  lineSyllables(line) {
    let lineWords = line.split(" ");
    let syllableCount = 0;
    lineWords.forEach(word => syllableCount += countSyllables(word));
    return syllableCount;
  }
  
  haikuCheck() {
     if (this.lineSyllables(this.line1) === 5 
         && this.lineSyllables(this.line2) === 7
         && this.lineSyllables(this.line3) === 5) {
        return true;
      } else {
      return false;
    }
  }
}

function countSyllables(word) {
  word = word.toLowerCase();
  if (word.length === 0) {
    return 0;
  } else if (word.length <= 3) {
    return 1;
  }
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  return word.match(/[aeiouy]{1,2}/g).length;
}