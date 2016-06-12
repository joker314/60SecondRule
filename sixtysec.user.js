// ==UserScript==
// @name 60 Second Rule
// @namespace http://joker314.github.io
// @version 1.0
// @description  Spams the submit button every 10 seconds until the forum post submits
// @match *://scratch.mit.edu/*
// ==/UserScript==
if(document.getElementsByClassName("errorlist").length == 1){
  if(document.getElementsByClassName("errorlist")[0].children[0].innerHTML == "Sorry, you have to wait 60 seconds between posts."){
    var n = window.setInterval(function(){document.getElementsByName("AddPostForm")[0].click();}, 10000);
    document.getElementsByClassName("errorlist")[0].children[0].innerHTML += "<button onclick='window.clearTimeout(n);>Cancel Userscript</button>";
  }
}

