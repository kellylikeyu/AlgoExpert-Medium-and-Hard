//imagine you have a set of cities that are laid out in a circle, connected by a circular road that runs clockwise. Each city has a gas station that provides 
//of fuel, and each city is some distance away from the next city.
//you have a car that can drive some number of miles per gallon of fuel, and your goal is to pick a starting city such that you can fill up your car with that city's fuel,
//drive to the next city, refill up your car with that city's fuel, drive to the next city. The city is a valid starting city. there is only one valid starting city.
//given an array of distances such that city i is distances[i] away from city i+1. fuels array that the fuel[i] available at city i, and mile per gallon.

//to loop only once, O(n), keep track of how much gas you have as enter a city (before fill up), enter the first city with 0 gas.
//the city that you enter with the least amount of gas must be the valid starting city.

function validStartingCity(distances, fuel, mpg) {
  const addDistances = fuel.map((addFuel) => addFuel * mpg);
  let fuelLeftArray = [0];
  let fuelLeft = 0;
  for (let index = 1; index < distances.length; index ++) {
    fuelLeft = fuelLeft + addDistances[index-1] - distances[index-1];
    fuelLeftArray.push(fuelLeft);
  }
  return fuelLeftArray.indexOf(Math.min(...fuelLeftArray));
}
