// ==UserScript==
// @name 60 Second Rule
// @namespace http://joker314.github.io
// @version 1.0
// @description  Spams the submit button every 10 seconds until the forum post submits
// @match *://scratch.mit.edu/*
// ==/UserScript==
if(document.getElementsByClassName("errorlist").length == 1){
  if(document.getElementsByClassName("errorlist")[0].children[0].innerHTML == "Sorry, you have to wait 60 seconds between posts."){
    try{
      if(document.getElementById("id_body").innerHTML.substr(document.getElementById("id_body").innerHTML.length - 78) != "\n[small]This post encountered the 60 second rule, but a bot hepled out[/small]"){
        document.getElementById("id_body").innerHTML += "\n[small]This post encountered the 60 second rule, but a bot hepled out[/small]";
        console.log(document.getElementById("id_body").innerHTML.substr(ocument.getElementById("id_body").innerHTML.length - 78));
      }
    } catch(e){
      document.getElementById("id_body").innerHTML += "\n[small]This post encountered the 60 second rule, but a bot hepled out[/small]";
    }
    window.setInterval(function(){document.getElementsByName("AddPostForm")[0].click();}, 10000);
  }
}

