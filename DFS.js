// DFS Implementation
function dfs(graph, startNode, visited = new Set()) {
  // TODO: Implement DFS logic here
  // Hint: Use recursion to explore the graph
  // Mark the current node as visited
  // Recursively visit all unvisited neighbors
  visited.add(startNode);

  for (let n of graph[startNode]) {
    if (!visited.has(n)) {
      dfs(graph, n, visited);
    }
  }
}

// Test Cases
function testDFS() {
  // Test Case 1: Simple graph
  const graph1 = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
  };

  const visited1 = new Set();
  dfs(graph1, 'A', visited1);
  console.log('Test Case 1:', visited1); // Expected: Set { 'A', 'B', 'D', 'E', 'F', 'C' }

  // Test Case 2: Disconnected graph
  const graph2 = {
    X: ['Y'],
    Y: ['X'],
    Z: ['W'],
    W: ['Z'],
  };

  const visited2 = new Set();
  dfs(graph2, 'X', visited2);
  console.log('Test Case 2:', visited2); // Expected: Set { 'X', 'Y' }

  // Test Case 3: Single node graph
  const graph3 = {
    M: [],
  };

  const visited3 = new Set();
  dfs(graph3, 'M', visited3);
  console.log('Test Case 3:', visited3); // Expected: Set { 'M' }

  // Test Case 4: Cyclic graph
  const graph4 = {
    P: ['Q'],
    Q: ['R'],
    R: ['P'],
  };

  const visited4 = new Set();
  dfs(graph4, 'P', visited4);
  console.log('Test Case 4:', visited4); // Expected: Set { 'P', 'Q', 'R' }
}

// Run the tests
testDFS();
