function format(value: string | number | boolean) 
{
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }


  return value;
}
// Example usages:console.log(format("hello")); // Output: "HELLO"
console.log(format(5));       // Output: 50
console.log(format(true));    // Output: false


