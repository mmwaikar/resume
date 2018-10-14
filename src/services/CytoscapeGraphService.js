/*
const elements = [
       { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
       { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
    ];
*/
import * as Graph from '../domain/Graph';

export default class CytoscapeGraphService {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
  }

  getGraph() {
    let nodesAsCytoData = this.nodes.map(n => new Graph.CytoscapeData(n));
    let edgesAsCytoData = this.edges.map(n => new Graph.CytoscapeData(n));
    return nodesAsCytoData.concat(edgesAsCytoData);
  }
};
