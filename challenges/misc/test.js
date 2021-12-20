function mergeOverlappingIntervals(array) {
	// "heaviest operation"
	array.sort((int1, int2) => int1[0] - int2[0]);
	
	let res = [];
	let current = array[0];
	
	// O(n)
	for (let i = 1; i < array.length; i++) { // [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
		
		// check mergability
		if (current[1] >= array[i][0]) { // 8 >= 9
			const firstDigit = current[0] < array[i][0] ? current[0] : array[i][0];
			const secondDigit = current[1] >= array[i][1] ? current[1] : array[i][1];
			
			current = [firstDigit, secondDigit]; // current [3, 8]
		} else {
			res.push(current); // res = [[1, 2], [3, 8]]
			current = array[i]; // current = [3, 5]
		}
	}
	
	res.push(current);
  return res;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
