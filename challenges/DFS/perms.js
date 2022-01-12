function getPermutations(array) {
  // Write your code here.
	
	const result = [];
	const target = array.length
	
	if(array.length === 0) return [];
	
	function getPermsHelper(arr, perms) {
		if (perms.length === target) {
			result.push(perms);
		}
		
		for (let i = 0; i < arr.length; i++) {
			
			const left = arr.slice(0, i);
			const right = arr.slice(i + 1);
			
			const newArray = left.concat(right);
			const newPerm = perms.concat([arr[i]]);
			
			getPermsHelper(newArray, newPerm);
		}
	}

	getPermsHelper(array, []);	
	return result;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
