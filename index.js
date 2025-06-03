// Write your code in this file!
const currentUser = "Griffins Ondeyo";
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";

const upperCaseCurrentUser = currentUser.toUpperCase();
const excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + upperCaseCurrentUser + "!";

// const firstInitial = currentUser[0];
// const shortGreeting = "Welcome, " + firstInitial + "!";

const firstInitial = currentUser.slice(0, 1);
const shortGreeting = "Welcome, " + firstInitial + "!";
