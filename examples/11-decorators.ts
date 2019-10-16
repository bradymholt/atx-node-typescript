// Decorators

class Employee {
  constructor(private firstName: string, private lastName: string) {}

  @log
  greet(message: string): string {
    return `${this.firstName} ${this.lastName} says: ${message}`;
  }
}

const employee = new Employee("John", "Doe");
const greetingMessage = employee.greet("Heyo");
console.log(greetingMessage);

function log(target: Object, propertyName: string, propertyDesciptor: PropertyDescriptor) {
  console.log(`CALLED: '${propertyName}'`);
}
