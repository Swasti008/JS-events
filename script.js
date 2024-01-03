//Challenge 1
let userName = document.getElementById("user");
function myName(){
  userName.innerHTML="Swasti";
}
// placed the onload event with body tag in html 

//Challenge 2
let button = document.getElementById("btn-click");
button.onclick= function(){
  button.style.backgroundColor="pink";
}

//Challenge 3
function makeSentence(){
  let statement = document.getElementById("statement");
  let noun = document.getElementById("noun").value;
  let verb = document.getElementById("verb").value;
  let adverb = document.getElementById("adverb").value;
  
  statement.innerHTML=noun+' '+verb+' '+adverb;
}
let buildButton = document.getElementById("build-button");
buildButton.onclick = function(){
  makeSentence();
}

//Challenge 4.1(bubbling phase)
let grandparent = document.getElementById("grandparent");
grandparent.addEventListener("click",function(){
  console.log("Grandparent clicked");
});

let parent = document.getElementById("parent");
parent.addEventListener("click",function(){
  console.log("Parent clicked");
});

let child = document.getElementById("child");
child.addEventListener("click",function(){
  console.log("Child clicked");
});

//Challenge 4.2(capturing phase)
// let grandparent = document.getElementById("grandparent");
// grandparent.addEventListener("click",function(){
//   console.log("Grandparent clicked");
// },true);

// let parent = document.getElementById("parent");
// parent.addEventListener("click",function(){
//   console.log("Parent clicked");
// },true);

// let child = document.getElementById("child");
// child.addEventListener("click",function(){
//   console.log("Child clicked");
// },true);

//Challenge 5
let unorderedList = document.getElementById("category");
unorderedList.addEventListener("click",function(clickedElement){
 console.log(clickedElement.target.id);
});