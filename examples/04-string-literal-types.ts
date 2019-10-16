// String Literal Type

type Direction = "Up" | "Down" | "Left" | "Right";

function move(instruction: Direction) {
  console.log(instruction);
}

move("Up");
move("Down");

//move(null);
//move(undefined);