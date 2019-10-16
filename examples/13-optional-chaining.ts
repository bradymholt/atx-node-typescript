// Optional Chaining and nullish coalescing (TypeScript 3.7)

const mysteriousData: any = {};

const id = mysteriousData?.data?.id;
console.log(id);

//#region
// const unsafeId = mysteriousData.data.id;
// console.log(id);

// const displayName = mysteriousData?.name ?? "(Name is Missing)";
// console.log(displayName);
//#endregion