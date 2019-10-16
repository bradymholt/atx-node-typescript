// never type

enum SkiResort {
  Loveland = "Loveland",
  Keystone = "Keystone",
  Vail = "Vail"
}

function printElevation(resort: SkiResort) {
  switch (resort) {
    case SkiResort.Loveland:
      console.log("13,010 ft");
      break;
    case SkiResort.Keystone:
      console.log("3,128 ft");
      break;
    case SkiResort.Vail:
      console.log("11,570 ft");
      break;
    default:
      assertNever(resort);
  }
}

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}
