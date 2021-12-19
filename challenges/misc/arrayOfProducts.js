function arrayOfProducts(array) {
	// O(N) time & O(N) space
	function getEmptyArray() {
		return Array.from(Array(array.length)).fill(0, 0, array.length);
	}
	
	const leftArray = getEmptyArray();
	const rightArray = getEmptyArray();
	const finalArray = getEmptyArray();
	
	// fill the left and right array with the running product
	let productR = 1;
	for (let i = 0; i <= array.length-1; i++) {
		leftArray[i] = productR;
		productR *= array[i];
	}
	
	let productL = 1;
	for (let i = array.length - 1; i >= 0; i--) {
		rightArray[i] = productL;
		productL *= array[i];
	}
	
	for (let i = 0; i <= array.length-1; i++) {
		finalArray[i] = leftArray[i] * rightArray[i];
	}
	
	return finalArray;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;


class Payroll {
  constructor(name) {
    this.name = name;
    this.frequency = [1, 2, 3];
  }

  getFrequence() {
    return this.frequency;
  }
}

console.log(new Payroll("adisa").frequency);