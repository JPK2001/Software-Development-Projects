// Import the libphonenumber-js module to handle international phone numbers
const libphonenumber = require("libphonenumber-js");

// Define a function to validate phone numbers
function validatePhoneNumber(number) {
  // Try to parse the number
  try {
    // Parse the number with the default country as "US"
    let parsedNumber = libphonenumber.parsePhoneNumber(number, "US");
    // Check if the number is valid
    if (parsedNumber.isValid()) {
      // Format the number as an international standard
      let formattedNumber = parsedNumber.formatInternational();
      // Print the formatted number
      console.log(`The number ${number} is valid and formatted as ${formattedNumber}.`);
    } else {
      // Print an error message
      console.log(`The number ${number} is not valid.`);
    }
  } catch {
    // Print an exception message
    console.log(`The number ${number} could not be parsed.`);
  }
}
