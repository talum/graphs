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
}

