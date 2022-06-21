//given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.
//a building can see the sunset if it is strictly taller than all of the buildings that come after it in the direction that it faces.
//direction = 'EAST', sun in the east. 'WEST', sun in the west.
function sunsetViews(buildings, direction) {
  if(buildings.length ===0) {return [];}
  let result = [];
  if (direction === "EAST") {
    for (let i=0; i<buildings.length-1; i++) {
      let j=i+1;
      while (j<buildings.length) {
        if (buildings[j] >= buildings[i]) {
          break;
        } else {j++;}  
        if (j===buildings.length) {result.push(i);}
      }
    } result.push(buildings.length-1);
  }
    
  else {
    const maxInd = buildings.indexOf(Math.max(...buildings));
    result = [0];
    for (let i=1; i<maxInd+1; i++) {
       let j=i-1;
      while (j>=0) {
        if (buildings[j] >= buildings[i]) {
          break;
        } else {j--;}  
        if (j===-1) {result.push(i);}
      }
      
    }
  }
  if (result.length===0) {return -1;}
  return result;
}
