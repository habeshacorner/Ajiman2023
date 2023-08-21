console.log("hello world")
var video1 = document.querySelector("#video1");
var hideLionButton = document.querySelector("#hideLionButton");
var showLionButton = document.querySelector("#showLionButton");
var toggleLionButton = document.querySelector("#toggleLionButton");


hideLionButton.addEventListener("click", function(){
    video1.classList.add("hidden");
    
})
showLionButton.addEventListener("click", function(){
    video1.classList.remove("hidden");
    
})
toggleLionButton.addEventListener("click", function(){
    video1.classList.toggle("hidden");
    
})
