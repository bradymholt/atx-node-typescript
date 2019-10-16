// Function Types

function save(entity: object, afterSave: (id: number) => void) {
  afterSave(1);
}

save({ name: "John" }, (id: number) => {
  console.log(`id: ${id}`);
});

// save({ name: "John" });

// save(entity, (id: number, error: string) => {
//   console.log(error);
// });
