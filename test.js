/**
 * Logs a greeting message to the console.
 */
const greetUserByName = function(name) {
  const greetingMessage = !name ? "hello" : "hello, " + name;
  console.log(greetingMessage);
};