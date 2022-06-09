// write a function that takes in a non-empty array of integers and returns an array of the same length, 
//where each element in the output array is equal to the product of every other number in the input array.
//sample input = [5,1,4,2]  sample output [8,40,10,20] 1*4*2,5*4*2,5*1*2,5*1*4
function arrayOfProducts(array) {
	let products = [];
	for (let i=0; i<array.length; i++) {
		let removeInd = array.slice(0,i).concat(array.slice(i+1,array.length+1));
		let product = 1;
		for (let j=0; j<removeInd.length; j++) {
			product *= removeInd[j];
		}
		products.push(product);
	}
	return products;
}
