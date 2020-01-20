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
  } else if (text.includes("remove")) {
    remove(arr, text);
  } else if (text === "list\n") {
    console.log(arr);
    print(arr);
  } else if (text.includes("edit")) {
    edit(arr, text);
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
  console.log("List: preview your list");
  console.log(`Add: adds an element to your list / "add" + "item-to-add"`);
  console.log(
    `Remove: removes an item from your list / "remove"-> removes last item / "remove 1" -> remove first item... and so on`
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
  if (!arr.length) {
    console.log(`list is empty!`);
    return;
  }

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
  } else console.log("Error: incorrect input!");
}

function remove(list, text) {
  text = text.split(" ");
  let num = parseInt(text[1]);
  if (text[0] == "remove\n" && text.length == 1) {
    list.pop();
  } else if (text[0] == "remove" && list[num - 1] && typeof num == "number") {
    list.splice(num - 1, 1);
  } else console.log("Invalid input: Item doesn't exist");
}

function edit(list, text) {
  text = text.split(" ");
  let num = parseInt(text[1]);
  if (text[0] == "edit" && text.length > 2 && !isNaN(num)) {
    text.splice(0, 2);
    text = text.join(" ");
    text = text.replace("\n", "");
    return (list[num - 1] = text);
  } else if (text[0] == "edit" && text.length == 2) {
    text.splice(0, 1);
    text = text.join(" ");
    text = text.replace("\n", "");
    return (list[list.length - 1] = text);
  } else if (text[0] == "edit" && text.length == 1) {
    console.log("Error: incorrect input!");
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
