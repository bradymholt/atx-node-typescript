function save(entity: object, afterSave: (id: number) => void) {
  // Do some work here
  afterSave(1);
}

const entity = { name: "John" };

save(entity, (id: number) => {
  console.log(id);
});

//save(entity);

// save(entity, (id: number, error: string) => {
//   console.log(error);
// });
