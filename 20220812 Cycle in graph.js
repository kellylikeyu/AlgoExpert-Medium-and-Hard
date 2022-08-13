//given a list of eges representing an unwieghte, directed graph with at least one node.
//write a function that returns a boolean representing whether the given graph contains a cycle.
//a cycle is defined as any number of vertices, including just one vertex, that are connected in a closed chain.
//the given list is an adjacency list. 
//the number of vertices in the graph is equal to the length of edges, where each index i in edges contains vertex i's outbound edges.
//sample input: [[1,3],[2,3,4],[0],[],[2,5],[]]    sample output: true

function cycleInGraph(edges) {
  const record = {};
  for (let i=0; i<edges.length; i++) {
    const visited = {};
    const toVisit = edges[i]; 
    while (toVisit.length > 0) {
      const visitNode = toVisit.pop(); 
      console.log(visited, toVisit,edges[visitNode]);
      visited[visitNode] = true;
      if (visited[i]) {
        return true;
      }
     for (let vertice of edges[visitNode]) {
       if(!visited[vertice] && !record[i]) {
         toVisit.push(vertice);
       }
     }
    }
    record[i] = true;
  }
  return false;
}
