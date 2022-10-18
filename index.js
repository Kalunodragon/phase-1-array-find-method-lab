// code your solution here
/*
function superbowlWin(array){
    for (const object of array) {
      if (object.result === "W") {
        return (object.year);
        }
    }
}
*/

function superbowlWin(array){
    let object = array.find(array => array.result === "W")
    if (object){
        return object.year
    }
    return object
}