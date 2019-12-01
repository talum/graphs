class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyListVertex[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  recursiveDFS(vertex) {
    let results = [];
    const adjacencyList = this.adjacencyList;
    let visited = {};

    function helper(node) {
      if (!node) { return; }

      results.push(node);
      visited[node] = true;
      adjacencyList[node].forEach((neighbor) => {
        if (!visited[neighbor]) {
          helper(neighbor);
        }
      })
    }
    helper(vertex);
    return results;
  }

  iterativeDFS(vertex) {
    let stack = [];
    let visited = {};
    let results = [];
    stack.push(vertex);

    while (stack.length) {
      let current = stack.pop();
      results.push(current);
      visited[current] = true;
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      });
    }

    return results;
  }

  BFS(vertex) {
    let results = [];
    let queue = [];
    let visited = {};
    queue.push(vertex);

    while(queue.length > 0) {
      let current = queue.shift();
      results.push(current);
      visited[current] = true;
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}

