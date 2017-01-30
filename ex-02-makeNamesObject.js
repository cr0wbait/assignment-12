// ex-02: `makeNamesObject`

// Create a function that accepts 3 strings with first + last names as arguments
// The function should return an object with 3 properties:
// The first name will be a property-name and the last name will be the value

// EXAMPLE:
// makeNamesObject("George Washington", "John Adams", "Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }



//kudos to Vince again for helping me check my thinking & formatting

function makeNamesObject (string1, string2, string3){
// take each string input, split into an array, then run a for-loop
// that takes array value 0 and sets it as an object property, then sets value 1
// as that property's value, and returns an object

var nRA1 = string1.split(' ');
var nRA2 = string2.split(' ');
var nRA3 = string3.split(' ');
var thEnd = {
    [nRA1[0]]:nRA1[1],
    [nRA2[0]]:nRA2[1],
    [nRA3[0]]:nRA3[1]
  }
  return thEnd;
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
