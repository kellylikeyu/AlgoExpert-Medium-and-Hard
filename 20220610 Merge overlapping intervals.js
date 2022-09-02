//write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.
//each interval is an array of two integers, with interval[0] as the start of the interval and interval[1] as the end of interval.
//[1,5] and [6,7] are not overlapping. [1,6] and [6,7] are overlapping.
//sample input: intervals = [[1,2],[3,5],[4,7],[6,8],[9,10]]   sample output: [[1,2],[3,8],[9,10]]

function mergeOverlappingIntervals(array) {
  // Write your code here.
	const sorted = array.sort((a,b)=> a[0]-b[0]);
    let merged = [array[0]];
  let mergedEnding = [array[0][1]];
  for (let i=1; i<array.length; i++) {
    let latestEnd = Math.max(...mergedEnding);
    if (array[i][0] > latestEnd) {
      merged.push(array[i]);
      mergedEnding.push(array[i][1]);
    }
    else {
      let index = mergedEnding.indexOf(latestEnd);
      let curEnd = Math.max(latestEnd, array[i][1]);
      merged[index] = [merged[index][0],curEnd];
      mergedEnding[index] = curEnd;
    }
  }
  return merged;
}





function mergeOverlappingIntervals(array) {
	if (array.length === 1) {
		return array;
	}
	
	let storage = {};
	let keys = [];
	let sortedIntervel = [];
	let newIntervel = [];
	
	for (let i=0; i<array.length; i++) {
		storage[array[i][0]] = array[i];
		keys[i] = array[i][0];
	}
	let sortedKeys = keys.sort((a,b) => a-b);
	for (let i=0; i<keys.length; i++) {
		sortedIntervel.push(storage[sortedKeys[i]]);
	}
	newIntervel.push(sortedIntervel[0]);
	for (let j = 0; j<sortedIntervel.length; j++) {
		if (sortedIntervel[j][0] > newIntervel[newIntervel.length-1][1]) {
			newIntervel.push(sortedIntervel[j]);
		}
		else if (sortedIntervel[j][1] > newIntervel[newIntervel.length-1][1]) {
			newIntervel[newIntervel.length-1][1] = sortedIntervel[j][1];
		}
	}
  return newIntervel;
}
