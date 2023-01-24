/* When the button is pressed, show the user a message
 * that is a random sentence including a random beginning, middle, and end.
 */

const beginnings = [
  "Hey cute girl",
  "Hiiii reb reb, i loveee youuuu!!",
  "Hey you're pretty!!",
  "Hey you're cute!!",
  "Hey pretty girl",
  "Hey sweet girl",
  "Hey beautiful!",
  "Hey sweet girl",
  "Hey reb!!",
  "Hey rebby!!",
  "Hey rebby rebby!!",
  "Hey rebby reb reb!!",
];

const middles = [
  "I love you!!",
  "I miss you!!!!!",
  "You're so pretty!!",
  "You are the love of my life",
  "You are soo amazing and soo cute!",
  "You are the most precious girl in the world",
  "You are so important to me",
  "You are soo beautiful",
];

const ends = [
  "If you ever need anything, I'm here for you",
  "If you want to talk, I'm here for you",
  "If you ever feel sad, I'm here for you",
  "If you ever want to call please call me",
  "If you feel sad please call me",
];

const very_ends = [
  "<333333",
  ":))))",
  "<3 :)))",
  "!!!",
  "!!",
  "<33",
];

let active_beginnings = beginnings;
let active_middles = middles;
let active_ends = ends;
let active_verys = very_ends;

function getSentence() {
  // Get the random beginning, middle, and end.
  let beginning = getRandom(active_beginnings);
  let middle = getRandom(active_middles);
  let end = getRandom(active_ends);
  let very = getRandom(active_verys);
  // Put the random beginning, middle, and end together.
  let sentence = beginning + " " + middle + " " + end + " " + very;

  if (active_beginnings.length == 0) {
    active_beginnings = beginnings;
  }
  if (active_middles.length == 0) {
    active_middles = middles;
  }
  if (active_ends.length == 0) {
    active_ends = ends;
  }
  if (active_verys.length == 0) {
    active_verys = very_ends;
  }

  // Show the user the sentence.
  // by editing the "sentence" paragraph.
  document.getElementById("sentence").innerHTML = sentence;
}

function getRandomNumber(max) { return Math.floor(Math.random() * max); }

function getRandom(arr) {
  let idx = getRandomNumber(arr.length);
  let elem = arr[idx];
  arr = arr.filter(item => item !== elem);
  return elem;
}
