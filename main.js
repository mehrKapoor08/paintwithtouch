canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var lastPostionOfX, lastPositionOfY;
var color="black";
var widthOfLine=2;
var width=screen.width;
var newWidth=screen.width-70;
var newHeight=screen.height-300;
if (width<992)
{document.getElementById("myCanvas").width=newWidth;
document.getElementById("myCanvas").height=newHeight;
document.body.style.overflow=hidden;

}
var mouseEvent= "";

canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){

    console.log("mousemove");
    currentPositionOfMouseX=e.clientX-canvas.offsetLeft;
    currentPositionOfMouseY=e.clientY-canvas.offsetTop;
   if(mouseEvent=="mousedown"){
    ctx.beginPath(currentPositionOfMouseX, currentPositionOfMouseY, radius);
   
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine
        console.log("lastPositionOfXAndYCordinates=");
        console.log("x="+lastPostionOfX+"y="+lastPositionOfY);
        ctx.lineTo(lastPostionOfX,lastPositionOfY);
        console.log("currentPositionOfXAndYCordinates=");
        console.log("x="+currentPositionOfMouseX+"y="+currentPositionOfMouseY); 
        
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius, 0, 2*Math.PI)
ctx.stroke();
        lastPostionOfX=currentPositionOfMouseX;
        lastPositionOfY=currentPositionOfMouseY;
   }

        
    
}
    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,
            ctx.canvas.height)
    }
    canvas.addEventListener("mousedown",myMouseDown);
    function myMouseDown(e){
        mouseEvent= "mousedown";
        console.log("mousedown");
       
        color = document.getElementById("color").value;
         width_of_line = document.getElementById("width_of_line").value;
         radius = document.getElementById("radius").value;
        

    }