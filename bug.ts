function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];
console.log(greeter(user)); //This will give an error because the function greeter expects a string but received an array of strings. 