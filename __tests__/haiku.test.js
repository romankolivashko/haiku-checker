import Haiku from './../src/js/haiku.js';


describe('Haiku', () => {

  let goodHaiku;
  let badHaiku;
    
  beforeEach(() => {
    goodHaiku = new Haiku("This is a haiku","We will test the syllables","We'll know what it is");
    badHaiku = new Haiku("A","haiku","Is really long and stuff also I like clouds");
  });

  test('should create a Haiku object with three lines', () => {
    expect(goodHaiku.line1).toEqual("This is a haiku");
    expect(goodHaiku.line2).toEqual("We will test the syllables");
    expect(goodHaiku.line3).toEqual("We'll know what it is");
  });

  test('should output a 1 for a one syllable word', () => {
    expect(badHaiku.lineSyllables(badHaiku.line1)).toEqual(1);
  });
  
  test('should return a count of all the syllables in a line', () => {
    expect(goodHaiku.lineSyllables(goodHaiku.line1)).toEqual(5);
  });

  test('should return false if haiku does not have right amount of syllables ', () => {
    expect(badHaiku.haikuCheck()).toBeFalsy();
  });

  test('should return true if all lines do have right amount of syllables ', () => {
    expect(goodHaiku.haikuCheck()).toBeTruthy();
  });
});