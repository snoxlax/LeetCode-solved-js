// --- TEST GRID ---
const grid = [
  ['S', '.', '.', '#', '.', '.', 'E'],
  ['#', '#', '.', '#', '.', '#', '.'],
  ['.', '.', '.', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '#', '.'],
  ['.', '.', '.', '.', '.', '.', '.'],
];

const grid2 = [
  ['S', '.', '#', '.', '.', '.', '.'],
  ['.', '.', '#', '.', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.', '.'],
  ['.', '.', '.', '#', '.', '.', '.'],
  ['.', '#', '.', '.', '.', '#', 'E'],
];

// --- PLACEHOLDERS FOR YOUR SOLUTIONS ---

function findPathDFS(grid) {
  // Find the starting and ending positions
  let start, end;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 'S') start = [r, c];
      if (grid[r][c] === 'E') end = [r, c];
    }
  }

  if (!start || !end) {
    console.log('Start or end point not found.');
    return [];
  }

  const path = [];
  const result = dfs(grid, start[0], start[1], new Set(), path, end);

  if (result) {
    console.log('Path found:', path);
    return path; // Return the path if a solution exists
  } else {
    console.log('No path found.');
    return []; // Return an empty array if no path exists
  }
}
function dfs(grid, r, c, visit, path, end) {
  const rows = grid.length;
  const cols = grid[0].length;
  const key = `${r},${c}`;

  // Boundary checks, wall check, and visited check
  if (
    r < 0 ||
    c < 0 ||
    r >= rows ||
    c >= cols ||
    grid[r][c] === '#' ||
    visit.has(key)
  ) {
    return false;
  }

  // Add current cell to the path
  path.push([r, c]);

  // Reached the ending point
  if (r === end[0] && c === end[1]) {
    return true; // Path found
  }

  visit.add(key); // Mark current cell as visited

  // Prioritize moving right, then down, then up, then left
  if (
    dfs(grid, r, c + 1, visit, path, end) || // Right
    dfs(grid, r + 1, c, visit, path, end) || // Down
    dfs(grid, r, c - 1, visit, path, end) || // Left
    dfs(grid, r - 1, c, visit, path, end) // Up
  ) {
    return true; // If any direction returns true, a path exists
  }

  // Backtrack: Remove current cell from the path and unmark it as visited
  path.pop();
  visit.delete(key);

  return false; // No path found from this cell
}

function findPathBFS(grid) {
  // Find the starting and ending positions
  let start, end;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 'S') start = [r, c];
      if (grid[r][c] === 'E') end = [r, c];
    }
  }

  if (!start || !end) {
    console.log('Start or end point not found.');
    return [];
  }

  const result = bfs(grid, start, end);

  if (result) {
    console.log('Path found:', result);
    return result; // Return the path if a solution exists
  } else {
    console.log('No path found.');
    return []; // Return an empty array if no path exists
  }
}

function bfs(grid, start, end) {
  let [r, c] = start;
  let path = [];
  const rows = grid.length;
  const cols = grid[0].length;
  let key = `${r},${c}`;
  let vis = new Set();

  // Direction array for moving up, down, left, right
  const dir = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  // Initialize queue with starting position and path
  const queue = [[r, c, [start]]];

  // Visited matrix to keep track of visited cells
  // const visited = new Array(rows).fill().map(() => new Array(cols).fill(false));
  // visited[r][c] = true;
  vis.add(key);

  while (queue.length > 0) {
    [r, c, path] = queue.shift();

    // Check if current cell is the endpoint 'E'
    if (r === end[0] && c === end[1]) {
      return path;
    }

    // Explore neighboring cells
    for (const [dx, dy] of dir) {
      const dr = r + dx;
      const dc = c + dy;

      // Check if the new cell is within bounds, not a wall, and not visited
      if (
        dr >= 0 &&
        dr < rows &&
        dc >= 0 &&
        dc < cols &&
        grid[dr][dc] !== '#' &&
        // !visited[dr][dc]
        !vis.has(`${dr},${dc}`)
      ) {
        // visited[dr][dc] = true;
        vis.add(`${dr},${dc}`);
        queue.push([dr, dc, [...path, [dr, dc]]]);
      }
    }
  }

  return null; // No path found
}

// --- RUN TESTS ---

// const dfsResult = findPathDFS(grid2);
// console.log(dfsResult);

const bfsResult = findPathBFS(grid);
