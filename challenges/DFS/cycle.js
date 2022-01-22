// depth first search algorithm 
// traverse all of the children's node 

function cycleInGraph(edges) {
	
	let found = false;
	
	function checkCycle(currNode, visited) { 
		if (found) return;
		
		visited[currNode] = true;
	
		const nextEdges = edges[currNode]; 
		for (let i = 0; i < nextEdges.length; i++) {
			
			const next = nextEdges[i]; 
			if (visited[next]) found = true;
			checkCycle(next, visited); 
			
			// back tracking
			visited[next] = false; // we have to "un-visit" the node
		}
	}
	
	for (let i = 0; i < edges.length; i++) {
		if (found) break;
		checkCycle(i, Array(edges.length).fill(false));
	}
	
  return found;
}


// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;
