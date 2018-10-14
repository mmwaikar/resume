class Node {
  constructor(id, name, label) {
    this.id = id;
    this.name = name;
    this.label = label;
    this.group = "nodes";
  }
};

class Edge {
  constructor(source, target, label) {
    this.source = source.id;
    this.target = target.id;
    this.label = label;
    this.group = "edges";
  }
};

class CytoscapeData {
  constructor(data) {
    this.data = data;
  }
};

export { Node, Edge, CytoscapeData };
