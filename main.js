// Step 1: Define a variable called userName and set it to an empty string.
// The user can input their name here if they want.
let userName = "Pippal";

// Step 2: Use a ternary expression to check if the user entered a name.
// If userName is not an empty string, log "Hello, <userName>!" to the console.
// Otherwise, log "Hello!" to the console.
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Step 3: Create a variable named userQuestion to store the question the user wants to ask the Magic Eight Ball.
const userQuestion = "Will I get rich?";

// Step 4: Log the user's question to the console.
// If userName is provided, it includes the user's name in the console log.
console.log(`${userName ? userName : 'User'} asks: ${userQuestion}`);

// Step 5: Generate a random number between 0 and 7 using Math.random() and Math.floor().
// Math.random() generates a random decimal number between 0 and 1.
// Multiplying by 8 scales it to a number between 0 and 7.999..., and Math.floor() rounds it down to an integer.
let randomNumber = Math.floor(Math.random() * 8);

// Step 6: Initialize an empty string variable named eightBall.
// This will be used to store the Magic Eight Ball's response based on the random number generated.
let eightBall = "";

// Step 7: Use a switch statement to assign a response to eightBall based on the value of randomNumber.
// Each case corresponds to a possible value of randomNumber (0 to 7) and assigns a different response.
switch (randomNumber){
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  // Optional: The default case handles unexpected values, though in this context, it should not be reached.
  default:
    eightBall = "Error";
}

// Step 8: Log the Magic Eight Ball's response to the console.
console.log(`The Magic Eight Ball says: ${eightBall}`);
