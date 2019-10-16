// Type Guards

function isArray(input: [] | object): input is [] {
  return (<[]>input).length !== undefined;
}

function stringify(value: [] | object) {
  if (isArray(value)) {
    return value.join(",");
  } else {
    return value.toString();
    //return value.join(",");
  }
}
