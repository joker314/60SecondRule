// ==UserScript==
// @name 60 Second Rule
// @namespace http://joker314.github.io
// @version 1.1
// @description  Spams the submit button every 10 seconds until the forum post submits
// @match *://scratch.mit.edu/*
// ==/UserScript==
if(document.getElementsByClassName("errorlist").length == 1){
  if(document.getElementsByClassName("errorlist")[0].children[0].innerHTML == "Sorry, you have to wait 60 seconds between posts."){
    window.n = window.setInterval(function(){document.getElementsByName("AddPostForm")[0].click();}, 10000);
    var g = document.createElement("BUTTON");
    g.innerHTML = "Cancel Userscript";
    g.addEventListener("click", function(){
      g.width = 0;
      g.height = 0;
      window.clearInterval(window.n);

    });
    document.getElementsByClassName("errorlist")[0].children[0].appendChild(g);
  }
}

