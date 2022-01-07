canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
n=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG"
,"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631130305210E01_DXXX.jpg,https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631120503672E01_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630920503652E02_DXXX.jpg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=n[randomnumber];
rover_image="rover.png";
function add()
{
    bg=new Image();
    bg.onload=uploadbackground;
    bg.src=background_image;

    r=new Image();
    r.onload=uploadrover;
    r.src=rover_image;
}
function uploadbackground()
{
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(r,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
}
function up()
{
    if (rover_y>=10) {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed="+ rover_x + "-" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down()
{
    if (rover_y<=500) {
        rover_y=rover_y+10;
        console.log("when up arrow is pressed="+ rover_x + "-" + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left()
{
    if (rover_x>=10) {
        rover_x=rover_x-10;
        console.log("when up arrow is pressed="+ rover_x + "-" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right()
{
    if (rover_x<=700) {
        rover_x=rover_x+10;
        console.log("when up arrow is pressed="+ rover_x + "-" + rover_y);
        uploadbackground();
        uploadrover();
    }
}