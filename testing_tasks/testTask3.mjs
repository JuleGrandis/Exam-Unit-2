import test from "../test.mjs";
import processNodes from "../tasks/task3.mjs";
import {print, addSpacing} from "../utils/utilsFunctions.mjs";
import nodes from "../example_files/nodes.json" with { type: "json" };

const nodeInput = nodes;

console.log(processNodes(nodes));

const tester = test("Node function test!");

tester.isEqual(processNodes(nodes), "20903, 18, 40", "Testing if function returns expected value, 20903, 18, 40");

