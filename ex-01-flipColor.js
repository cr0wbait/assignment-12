// ex-01 flipColor

// Write a function called flipColor. This function may be
// used to change the color of a tile in a game. It should
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and
// vice-versa.
//

console.log('whygodwhy')

//kudos to Vince for the assist on cleaning up/formatting

var flipColor = function(initObj){
    if (initObj.color === 'blue'){
      initObj.color = 'red'
    }else{
        initObj.color ='blue'
      }
      return initObj
    }
    
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var tile = {
    width: "200px",
    height: "200px",
    background: "black",
    color: "blue"
}

var tile2 = flipColor(tile)

console.assert(tile.color === "red")
console.assert(flipColor(tile2).color === "blue")
