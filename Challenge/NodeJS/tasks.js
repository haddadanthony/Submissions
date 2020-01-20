/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 *
 */

let arr = [];
function onDataReceived(text) {
  if (text === "quit\n" || text === `exit\n`) {
    quit();
  } else if (text.includes("hello")) {
    hello(text);
  } else if (text === "help\n") {
    help();
  } else if (text.includes("add")) {
    add(arr, text);
  } else if (text === "list\n") {
    print(arr);
  } else {
    unknownCommand(text);
  }
}

// Outputs to the console all the possible commands and
// their functionalities
function help() {
  console.log(`quit or exit: Exits Program`);
  console.log(
    `Hello: prints "Hello!" if you type hello followed by text it will print "Hello" + "text"!`
  );
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 * @param {string} text
 * @returns {void}
 */
function hello(text) {
  text.trim();
  let new_text = text.split(" ");
  if (new_text[0] == "hello") {
    new_text = new_text.join(" ");
    new_text = new_text.replace("\n", "");
    console.log(new_text + "!");
  } else if (text == `hello\n`) {
    console.log(`hello!`);
  }
}

function print(arr) {
  let i = 0;
  do {
    console.log(`${i + 1}. ${arr[i]}`);
    i++;
  } while (i < arr.length);
}

function add(arr, item) {
  item = item.split(" ");
  if (item[0] == "add" && item.length > 1) {
    item.shift();
    item = item.join(" ");
    item = item.replace("\n", "");
    arr.push(item);
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Anthony");
