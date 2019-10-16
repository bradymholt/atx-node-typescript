interface Animal {
  name: string;
  appendages?: number;
}

function printAnimal(animal: Animal) {
  let output = `${animal.name}`;
  //output = `${animal.name},${animal.appendages.toString()} appendages`;
  console.log(output);
}

printAnimal({ name: "Spider" });
