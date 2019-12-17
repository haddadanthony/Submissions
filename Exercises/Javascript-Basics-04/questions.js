const stringSize = text => {
  return text.length;
};
const replaceCharacterE = text => {
  let res = text.split("");

  for (i = 0; i < res.length; i++) {
    if (res[i] == "e") {
      res[i] = " ";
      break;
    }
  }
  res = res.join("");
  return res;
};
const concatString = (text1, text2) => {
  return text1 + text2;
};
const showChar5 = text => {
  return text[4];
};
const showChar9 = text => {
  return text.slice(0, 9);
};
const toCapitals = text => {
  return text.toUpperCase();
};
const toLowerCase = text => {
  return text.toLowerCase();
};
const removeSpaces = text => {
  let text_arr = text.split("");

  while (text_arr[0] == " ") {
    text_arr.shift();
  }

  while (text_arr[text_arr.length - 1] == " ") {
    text_arr.pop();
  }
  text = text_arr.join("");
  return text;
};
const IsString = text => {
  return typeof text == "string";
};

const getExtension = text => {
  return text.slice(text.length - 3, text.length);
};
const countSpaces = text => {
  return text.split(" ").length - 1;
};
const InverseString = text => {
  return text
    .split("")
    .reverse()
    .join("");
};

const power = (x, y) => {
  return x ** y;
};
const absoluteValue = num => {
  return Math.abs(num);
};
const absoluteValueArray = array => {
  for (i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i]);
  }
  return array;
};
const circleSurface = radius => {
  return Math.round(Math.PI * radius ** 2);
};
const hypothenuse = (ab, ac) => {
  return Math.sqrt(ab ** 2 + ac ** 2);
};
const BMI = (weight, height) => {
  let res = weight / (height * height);
  return parseFloat(res.toFixed(2));
};

const createLanguagesArray = () => {
  const languages = ["Html", "CSS", "Java", "PHP"];
  return languages;
};

const createNumbersArray = () => {
  const nombres = [0, 1, 2, 3, 4, 5];
  return nombres;
};

const replaceElement = languages => {
  languages[2] = "Javascript";
  return languages;
};

const addElement = languages => {
  languages.push("Ruby");
  languages.push("Python");
  return languages;
};

const addNumberElement = numbers => {
  numbers.unshift(-1);
  numbers.unshift(-2);
  return numbers;
};

const removeFirst = languages => {
  languages.shift();
  return languages;
};

const removeLast = languages => {
  languages.pop();
  return languages;
};

const convertStrToArr = social_arr => {
  return social_arr.split(",");
};

const convertArrToStr = languages => {
  return languages.join(",");
};

const sortArr = social_arr => {
  return social_arr.sort();
};

const invertArr = social_arr => {
  return social_arr.reverse();
};
