/**
 * Logs a greeting message to the console.
 */
const greetUser = function logGreeting(name) {
  if (!name) {
    console.log("hello");
  } else {
    console.log("hello, " + name);
  }
};