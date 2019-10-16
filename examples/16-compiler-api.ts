// Compiler API

import ts from "typescript";

const sourceFile = ts.createSourceFile(
  "foobar.ts",
  `\
export class FooBar {
  firstName: string;
  lastName: string;
}
`,
  ts.ScriptTarget.ES2015,
  /*setParentNodes */ true
);

let out = "";
const currentNode: ts.Node = sourceFile;
process(currentNode);

function process(node: ts.Node) {
  switch (node.kind) {
    case ts.SyntaxKind.ClassDeclaration:
      const cd = <ts.ClassDeclaration>node;
      out += `\
/* This is an Android wrapper class */      
public class ${cd.name!.getText()} {\n`;
      break;
    case ts.SyntaxKind.PropertyDeclaration:
      const pd = <ts.PropertyDeclaration>node;
      out += `  ${pd.type!.getText()[0].toUpperCase()}${pd.type!.getText().slice(1)} ${pd.name.getText()};\n`;
      break;
  }

  ts.forEachChild(node, process);

  switch (node.kind) {
    case ts.SyntaxKind.ClassDeclaration:
      out += `}`;
      break;
  }
}

console.log(out);
