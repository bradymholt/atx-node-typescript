type Foo = {
  readonly bar: number;
  readonly bas: number;
}

// Initialization is okay
let foo: Foo = { bar: 123, bas: 456 };

// Mutation is not
foo.bar = 456;