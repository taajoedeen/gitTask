const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter some data: ", (data) => {
  console.log("You entered: " + data);
  rl.close();
});
