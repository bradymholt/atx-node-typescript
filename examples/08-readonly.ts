// readonly

type City = {
  readonly name: string;
  readonly population: number;
};

// Initialization is okay
const austin: City = { name: "Austin", population: 964254 };

//#region
// Mutation is not
// austin.name = "Houston";
//#endregion
