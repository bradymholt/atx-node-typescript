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
interface Triangle {
  kind: "triangle";
  radius: number;
}

type MyShape = Square | Rectangle | Circle | Triangle;

function area(s: MyShape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      throw new Error("Not handled!");
  }
}

const circle = <Circle>{ kind: "circle", radius: 10 };
console.log(area(circle));

// const triangle = <Triangle>{ kind: "triangle", radius: 10 };
// console.log(area(triangle));

// function assertNever(x: never): never {
//   throw new Error("Unexpected object: " + x);
// }
// default: return assertNever(s); // error here if there are missing cases
