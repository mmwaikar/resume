import Data from '../domain/Data';
import * as Graph from '../domain/Graph';
import CytoscapeGraphService from './CytoscapeGraphService';

export default class GraphService {

  static getEducationGraph() {
    let basics = Data.getResume().basics;
    let education = Data.getResume().education;
    console.log(`basics: ${JSON.stringify(basics)}`);
    console.log(`education: ${JSON.stringify(education)}`);

    let basicNode = new Graph.Node(100, basics.name, "Person");
    let basicNodes = [basicNode];
    let educationNodes = education.map((e, index) => new Graph.Node(index, e.institution, "Institution"));

    let nodes = basicNodes.concat(educationNodes);
    let edges = educationNodes.map(eduNode => new Graph.Edge(basicNode, eduNode, "Attended"));

    let cytoGraphService = new CytoscapeGraphService(nodes, edges);
    let graph = cytoGraphService.getGraph();
    const jsonGraph = JSON.stringify(graph);
    console.log(`graph: ${jsonGraph}`);
    return jsonGraph;
  }
};
