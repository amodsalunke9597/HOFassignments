// Define the input string
const input = "Hello, world!";

// Define a function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Use setTimeout() to reverse the string after a delay of 2 seconds
setTimeout(() => {
  const reversedString = reverseString(input);
  console.log(reversedString);
}, 2000);
