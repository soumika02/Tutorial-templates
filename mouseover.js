<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>over</h1>
        <p id="emo" onmouseover="mouseover()" onmouseout="mouseout()">soumika</p>
        <script>
            function mouseover(){
                document.getElementById("emo").style.color="red";
            }
            function mouseout(){
                document.getElementById("emo").style.color="blue";
             }
        </script>
    </div>
    <div>
        <h1>down&up</h1>
        <p>This example demonstrates how to assign an "onmousedown"and"onmousedown"event to a p element.</p>
        <p id="emo" onmousedown="mousedown()" onmouseup="mouseup()">Click me.</p>
<script>
  function mouseDown(){
                document.getElementById("deo").innerHTML="The mouse button is held down.";
            }
            function mouseup(){
                document.getElementById("emo").innerHTML="you released the mouse button.";
             }
          
</script>
    </div>
    <div>
        <h1>image mouseover</h1>
        <img onmouseover="bigimg(this)" onmouseout="normalimg(this)" src="../javascript/mouse.jpg" alt="">
        <script>
            function bigimg(x){
              x.style.height="200px";
              x.style.width="250px";
            }
            function normalimg(x){
                x.style.height="100px";
              x.style.width="120px";
                }
        </script>
    </div>
</body>
<script src="index.js"></script>
</html>