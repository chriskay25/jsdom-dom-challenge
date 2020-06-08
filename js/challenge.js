const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const like = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.getElementsByClassName("likes")
const comments = document.getElementById("list")
const submit = document.getElementById("submit")

let li = document.createElement("li");

let numbers = [];
let time = 0;
let isPaused = false;

let interval = setInterval(incrementCount, 1000);


function incrementCount() {
  counter.innerText = parseInt(counter.innerHTML) + 1;
}

plus.addEventListener("click", function() {
  incrementCount();
})

minus.addEventListener("click", function() {
  counter.innerText = parseInt(counter.innerText) - 1;
})

like.addEventListener("click", function() {
  let number = counter.innerHTML; 
  let likeCounter = 0;
  numbers.push(number);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == number) {
      likeCounter++;
    }
  }
  
  likes[0].append(li);
  likes[0].children[0].innerHTML = `${number} has been liked ${likeCounter} times`;
})

pause.addEventListener("click", function() {
  isPaused = isPaused == true ? false : true;
  if (isPaused == true) {
    clearInterval(interval);
    plus.disabled = true;
    minus.disabled = true;
    like.disabled = true;
    pause.innerHTML = "resume";
  }
  else {
    setInterval(incrementCount, 1000);
    plus.disabled = false;
    minus.disabled = false;
    like.disabled = false;
    pause.innerHTML = "pause";
  }
});

submit.addEventListener("click", function(event) {
  event.preventDefault();
  let p = document.createElement("p");
  p.innerHTML = document.getElementById("comment-input").value;
  comments.append(p);
  document.getElementById("comment-input").value = ""

})

