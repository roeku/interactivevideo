//********** 21:20 | getElementsById =/= getElementsByClassName

      
function play() { 
     //  var checkbox0 = document.getElementsById("checkbox0");

         window.setInterval(playWhenBoxesActive, 4080);
}   
      
function playWhenBoxesActive() {

    var video = document.getElementById("video1");
    for (var i = 0; i <= 7; i++) {
    var boxesChecked = document.getElementById("checkbox" +i).checked;
        if (boxesChecked == true) {
            console.log(boxesChecked);
            var speed = i*500+10;
              var startLoop = window.setTimeout(
                function(){
                    video.play();
                    console.log(video.currentTime);
                    video.currentTime = 0;
                    console.log(video.currentTime);
                    console.log("checkbox" +i);
                }, speed);
            console.log(speed);
           
        } 
    }
}

//********* 19:11

function play() { 
     //  var checkbox0 = document.getElementsById("checkbox0");

         window.setInterval(playWhenBoxesActive, 6000);
}   
      
function playWhenBoxesActive() {

    var video = document.getElementById("video1");
    for (var i = 0; i <= 7; i++) {
    var boxesChecked = document.getElementById("checkbox" +i).checked;
        if (boxesChecked == true) {
            
            var speed = i*1000;
              var startLoop = window.setTimeout(
                function(){
                    video.play();}, speed);
            console.log("checkbox" +i);
        } else {
            video.pause();
            clearInterval(startLoop);
               }
    }
}



//********** CHECKBOX

function myFunction() {
    var coffee = document.forms[0].coffee;
    var txt = "";
    var i;
    for (i = 0; i < coffee.length; i++) {
        if (coffee[i].checked) {
            txt = txt + coffee[i].value + " ";
        }
    }
    document.getElementById("order").value = "You ordered a coffee with: " + txt;
}


//********** SPEED

var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

//********** RESET VIDEO

myVid.play();
myVid.addEventListener("canplay",function() { myVid.currentTime = 0;});

//********** 

function checkCheckboxes() {
    var checkbox = document.forms[0].checkbox;
    var i;
    for(i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            
        }
    }
}

//********** 

function play() {
       var video = document.getElementById("video1");
       var checkbox = document.getElementById("checkbox");
       if (video.paused) {
          video.play();
       } else {
          video.pause();
       }
    }

function loopCheckboxes() {
    for (var i = 0; i < 7; i++) {
        if (checkbox[i].checked) {
            video.play();
            setInterval(video.pause();, 1000);
        }
    }
}

function play() {
       var video = document.getElementById("video1");
       var checkbox = [document.getElementsByClassName("checkbox0"), 
                       document.getElementsByClassName("checkbox1"),
                       document.getElementsByClassName("checkbox2"),
                       document.getElementsByClassName("checkbox3") ];
   if(video.paused){    
    for (var i = 0; i < 3; i++) {
        if (checkbox[i].checked) {
            video.play();

        }
    }
}
}

      function checkCheckboxes() {
    var checkbox = document.forms[0].checkbox;
    var i;
    for(i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            
        }
    }
}