//********** just the javascript used in the index.html
      
 function play() {
            window.setInterval(playWhenBoxesActive, 4080);

        }

        function playWhenBoxesActive() {
            for (var i = 0; i <= 7; i++) {


                var video0 = document.getElementById("video0");
                var video1 = document.getElementById("video1");
                var video2 = document.getElementById("video2");
                var video3 = document.getElementById("video3");
                var video4 = document.getElementById("video4");
                var video5 = document.getElementById("video5");

                var boxesChecked = document.getElementById("checkbox" + i + 1);
                var boxesChecked2 = document.getElementById("checkbox" + i + 2);
                var boxesChecked3 = document.getElementById("checkbox" + i + 3);
                var boxesChecked4 = document.getElementById("checkbox" + i + 4);
                var boxesChecked5 = document.getElementById("checkbox" + i + 5);
                var boxesChecked6 = document.getElementById("checkbox" + i + 6);
                if (boxesChecked.checked == true) {
                    var speed = i * 500 + 10;
                    var startLoop = window.setTimeout(
                        function () {
                            video0.play();
                            video0.currentTime = 0;
                        }, speed);
                } else {
                    // console.log("no beat on 1");
                }

                if (boxesChecked2.checked == true) {
                    window.setTimeout(
                        function () {
                            video1.play();

                            video1.currentTime = 0;
                        }, speed);
                } else {
                    //console.log("no beat on 2");
                }
                if (boxesChecked3.checked == true) {
                    window.setTimeout(
                        function () {
                            video2.play();
                            video2.currentTime = 0;
                        }, speed);
                } else {
                    //console.log("no beat on 3");
                }
                if (boxesChecked4.checked == true) {
                    window.setTimeout(
                        function () {
                            video3.play();
                            video3.currentTime = 0;
                        }, speed);
                } else {
                    //    console.log("no beat on 4");
                }
                if (boxesChecked5.checked == true) {
                    window.setTimeout(
                        function () {
                            video4.play();
                            video4.currentTime = 0;
                        }, speed);
                } else {
                    //  console.log("no beat on 5");
                }
                if (boxesChecked6.checked == true) {
                    window.setTimeout(
                        function () {
                            video5.play();
                            video5.currentTime = 0;
                        }, speed);
                } else {
                    //console.log("no beat on 6");
                }
            }
        }
        function trailer () {
            
         var trailer = document.getElementById("myVideo");
         var stop = 4;
         trailer.currentTime = 0;
            console.log(trailer.currentTime);
            
            if (stop < trailer.currentTime) {
                console.log(trailer.currentTime);
                document.getElementById("t1").innerHTML = "<h1 class=\"center aligned ui header\">Interactive  <i class='music icon'></i> video</h1><h2 class=\"center aligned ui header\">make your own music anywhere, anytime with anything!</h2><h2 class=\"center aligned ui header\"><i class=\"arrow sign down icon large inverted\"></i></h2>";
        }
    }
