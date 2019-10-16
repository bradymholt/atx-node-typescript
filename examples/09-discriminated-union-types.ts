// Discriminated Union Types

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
      //return s.size * s.radius;
    case "rectangle":
      return s.width * s.height;
      //return s.width * s.size;
    case "circle":
      return Math.PI * s.radius * s.radius;
  }
}
