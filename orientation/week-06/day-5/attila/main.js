'use strict';

var currentImg = document.getElementsByTagName("a");
var firstPhoto = document.querySelector(".first");
var secondPhoto = document.querySelector(".second");
var thirdPhoto = document.querySelector(".third");
var fourthPhoto = document.querySelector(".fourth");
var fifthPhoto = document.querySelector(".fifth");
var mainPhoto = document.getElementById("main_gallery");

var gallerypics1 = [
  {
    path: "views/masni.jpg",
    name: "The first picture of Masni.",
    title: "This is one very lazy dog."
  },
  {
    path: "views/masni2.jpg",
    name: "The second picture of Masni.",
    title: "This is one very lazy dog."
  },
  {
    path: "views/masni3.jpg",
    name: "The third picture of Masni.",
    title: "This is one very lazy dog."
  },
  {
    path: "views/masni4.jpg",
    name: "The fourth picture of Masni.",
    title: "This is one very lazy dog."
  }
];


for (var i = 0; i < currentImg.length; i++) {
  currentImg[i].addEventListener("click", imgClick);
  }
  function imgClick(){
    this.classList.toggle("selected");
  }

  function reset(){

  }

    
   firstPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pic1.jpg')";
  });
  
  secondPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pics/pic2.jpg')";
  });

  thirdPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pics/pic4.jpg')";
  });
  
  fourthPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pics/pic5.jpg')";
  });

  fifthPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pics/pic6.jpg')";
  }); 
   