/**
 * Logs a greeting message to the console.
 */
const greetUserByName = function(name) {
  // Clean the name to remove any non-alphanumeric characters.
  const nameCleaned = name ? name.replace(/[^a-zA-Z0-9\s]/g, '') : "";

  // Determine the greeting message based on whether a name is provided.
  const greetingMessage = nameCleaned ? "hello, " + nameCleaned : "hello";

  console.log(greetingMessage);
};