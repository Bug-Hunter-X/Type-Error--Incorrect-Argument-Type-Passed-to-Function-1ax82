function greeter(person: string[]): string {
  return person.map(name => `Hello, ${name}`).join(', ');
}

let user = ["Jane User", "John User"];
console.log(greeter(user)); //This will print correctly now.