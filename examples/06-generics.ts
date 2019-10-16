// Generics

function first<T>(input: T[]): T {
  return input[0];
}

const firstItem = first([0, 1, 2]);

//#region
//const firstItemAsString: string = first([0,1,2]);

// import _ from "lodash";
// const last = _.last([0,1,2])
//#endregion