// data structure - hash map
// count frequency of each character in a word and match it based on that
// N (length of words) x M (length of string)
// Space O(N) 

// what "must" we do
// 1. we have to loop through every word
// 2. we have to look at each letter in the word
// 3. we have to identify if it's an anagram of any other word in the array

// O(M)
function getFrequency(word) {
	const freq = new Array(26).fill(0);
	for (let i = 0; i < word.length; i++) {
		const idx = word.charCodeAt(i) - 97;
		freq[idx] += 1;
	}
	return freq;
}

function groupAnagrams(words) {
	
	const map = {};
	
	// O(N)
	for (let j = 0; j < words.length; j++) {
		const freq = getFrequency(words[j]);
		if (!map[freq]) {
			map[freq] = [];
		}
		map[freq].push(words[j])
	}
	
	// O(T)
	const result = [];
	for (key in map) {
		result.push(map[key]);
	}
	
	return result; // O(N) X O(M) 
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;


function minimumCharactersForWords(words) {
  // Write your code here.
	
	const freq = {}
	
	for (const w in words) {
		const word = words[w];
		
		wordFreq = {}
		for (const k in word) {
			const char = word[k];
			if (!wordFreq[char]) {
				wordFreq[char] = 0;
			}
				wordFreq[char] += 1;
		}
		
		for (const key in wordFreq) {	
			if (freq[key]) {
				if (freq[key] < wordFreq[key]) {
					freq[key] = wordFreq[key]
				}
			} else {
				freq[key] = wordFreq[key]
			}
		}
	}
	
	const result = [];
  for (key in freq) {
		const count = freq[key];
		for (let i = 0; i < count; i++) result.push(key);
	}
	
	return result;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;

// if you can't split, what are you going to join?

// O(N) solution
function reverseWordsInString(string) {
  // Write your code here.
	
	let res = "";
	let currWord = "";
	
	for (let i = 0; i < string.length; i++) {
		// reset
		if (string[i] === " ") {
			if (currWord.length > 0) {
				res = currWord + res;
				currWord = "";
			}
			res = string[i] + res; // spaces
		} else {
			currWord += string[i];
		}
	}
	
	if (currWord.length > 0) {
		res = currWord + res;
	}
	
  return res;
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;


