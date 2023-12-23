const { execSync } = require('child_process');
const chalk = require('chalk');


function getDependencies() {
  const output = execSync('npm ls --json').toString();
  const dependencies = JSON.parse(output).dependencies || {};
  return Object.keys(dependencies);
}

// Function to shame the developer for dependencies
function shameDeveloper(dependencies) {
  const totalDependencies = dependencies.length;

  if (totalDependencies <= 10) {
    console.log(chalk.green(`Congratulations! You have very few dependencies(${totalDependencies}).  You must be a coding wizard! or........`));
    setTimeout(() => {
        console.log(chalk.red("Maybe your project is so simple that you don't need many dependencies.😂"));
      }, 3000);
  } else {
    console.log(chalk.yellow(`Oh, look at you with ${totalDependencies} dependencies!`));
    console.log(chalk.yellow('You should be ashamed of yourself!'));
    console.log(chalk.red(`Shame on you! ${shamingComments[Math.floor(Math.random() * shamingComments.length)]}`));
  }
}

function main() {
  const dependencies = getDependencies();
  shameDeveloper(dependencies);
}


const shamingComments = [
  'Back in my day, we wrote everything from scratch.',
  'You call this a project? I call it a dependency zoo!',
  'I bet your node_modules folder has its own gravitational pull.',
  'You must be the master of npm install.',
  'I see you’re a fan of living dangerously with those dependencies.',
  'Do you collect dependencies like trading cards?',
  'Is this a project or a showcase for npm?',
  'My grandma has fewer dependencies in her knitting projects.',
  'I hope your dependencies don’t throw a party while you’re away.',
  'I didn’t know npm was a dating app for packages.',
  'Your project has more guests than my last birthday party.',
  'Ever heard of a concept called "rolling your own code"?',
  'How many dependencies does it take to change a lightbulb in your project?',
  'I bet your node_modules folder has its own zip code.',
  'This project is a dependency support group.',
  'Are you running a node_modules orphanage?',
  'You’re not writing code; you’re assembling dependencies!',
  'I’ve seen simpler assembly instructions for IKEA furniture.',
  'If dependencies were currency, you’d be a billionaire.',
  'Your project has more dependencies than lines of code.',
  'Can I apply for citizenship in your dependency nation?',
  'I hope your dependencies have a strong marriage; they’re stuck together.',
  'You must love surprises with every npm install.',
  'Your project has more dependencies than my social life.',
  'Is there a dependency intervention scheduled for this project?',
  'Your dependencies are like in-laws; you didn’t choose them, but you have to live with them.',
  'I’m just waiting for your dependencies to form a union.',
  'Your project is a dependency cascade waiting to happen.',
  'You’ve achieved dependency nirvana; welcome to the temple of npm.',
  'Your dependencies should have their own reality TV show.',
  'I’m writing code; you’re writing love letters to dependencies.',
  'This project is a dependency buffet.',
  'You must have a black belt in npm-fu.',
  'I didn’t know npm had a frequent flyer program until I saw your project.',
  'Are you trying to set a world record for the most dependencies in a single project?',
  'Your project has more dependencies than a JavaScript framework.',
  'Your dependencies are like rabbits; they multiply when you’re not looking.',
  'I’m pretty sure your project violates some kind of dependency treaty.',
  'Do your dependencies come with a warranty?',
  'You must be sponsored by npm.',
  'Your project has more dependencies than the average person has friends on social media.',
  'I hope your dependencies have good healthcare; they’ll need it.',
  'Your project is the United Nations of dependencies.',
  'I bet your dependencies have their own fan club.',
  'I hope your dependencies pass a background check.',
  'Your project is the Silicon Valley of dependencies.',
  'You must be the CEO of the npm Dependency Corporation.',
  'I’m afraid to ask what your project’s dependency budget looks like.',
  'Your project’s dependencies have more connections than LinkedIn.',
  'You’re not coding; you’re orchestrating a symphony of dependencies.',
  'I hear your dependencies have their own social media accounts.',
  'I hope your dependencies have a good therapist; they’ve been through a lot.',
  'Your project’s dependencies are a traffic jam waiting to happen.',
  'I hope your dependencies don’t get into a fight at the dinner table.',
  'Your project is the dependency equivalent of a Michelin-star restaurant.',
  'I hope your dependencies don’t get divorced; that would be a messy split.',
  'Your project is the dependency version of a rock concert.',
  'I’m pretty sure your dependencies have more friends than you do.',
  'Your project’s dependencies are the Avengers of the coding world.',
  'I bet your dependencies have their own entourage.',
  'You must have a PhD in dependency management.',
  'Your project’s dependencies have a better PR team than most celebrities.',
  'I hope your dependencies don’t unionize; that could get messy.',
  'Your project is the dependency equivalent of a summer blockbuster.',
  'I hear your dependencies have a book deal in the works.',
  'Your project is the dependency version of a TED Talk.',
  'I hope your dependencies don’t form a rebellion.',
  'Your project’s dependencies are the rock stars of the coding universe.',
  'I bet your dependencies have their own line of merchandise.',
  'You must be the mayor of npm City.',
  'Your project’s dependencies are like a box of chocolates; you never know what you’re gonna get.',
  'I hope your dependencies don’t get into a Twitter feud.',
  'Your project is the dependency equivalent of a royal wedding.',
  'I bet your dependencies have their own podcast.',
  'You must be the curator of the npm Museum of Dependencies.',
  'Your project’s dependencies are like a soap opera; drama at every corner.',
  'I hope your dependencies don’t get into a political debate.',
  'Your project is the dependency version of a superhero crossover.',
  'I bet your dependencies have their own reality show.',
  'You must be the architect of the npm Dependency Palace.',
  'Your project’s dependencies are like a Shakespearean tragedy; lots of drama and a high body count.',
  'I hope your dependencies don’t run for political office; that could get interesting.',
  'Your project is the dependency equivalent of a space opera.',
  'I hear your dependencies have their own line of action figures.',
  'Your project is the dependency version of a courtroom drama.',
  'I hope your dependencies don’t start a cult; that could be awkward.',
  'Your project’s dependencies are like a mystery novel; you never know who the culprit is.',
  'I bet your dependencies have their own line of fashion accessories.',
  'You must be the king of npm Castle.',
  'Your project’s dependencies are like a buddy cop movie; mismatched, but somehow it works.',
  'I hope your dependencies don’t become the subject of a documentary; it might win an award.',
  'Your project is the dependency equivalent of a spy thriller.',
  'I bet your dependencies have their own line of gourmet snacks.',
  'You must be the emperor of npm Empire.',
  'Your project’s dependencies are like a romantic comedy; predictable, but we love them anyway.',
  'I hope your dependencies don’t get their own video game; it could be addictive.',
  'Your project is the dependency version of a fantasy epic.',
];






main();
