canvas = document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

rover_width = 150;
rover_height=100;

rover_x = 10;
rover_y= 10;

background_image = "https://thumbs.dreamstime.com/b/free-car-parking-lot-different-car-top-view-illustration-flat-style-free-car-parking-lot-different-car-top-view-vector-138683702.jpg";
rover_image = "https://o.remove.bg/downloads/b83fd29f-64e0-4680-86a7-dc8dcf0ae285/150-1509074_clipart-topview-car-sky-view-cartoon-hd-png-removebg-preview.png";

function add(){
    bg_imgtag= new Image();
    bg_imgtag.onload = uploadbg;
    bg_imgtag.src= background_image;
    
    rover_imgtag= new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src= rover_image;

}

function uploadbg() {
ctx.drawImage(bg_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed=='38'){
        up();
        console.log("up");

    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    
    if(keypressed=='40'){
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x = "+ rover_x +",  y = "+rover_y);
        uploadbg();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x = "+ rover_x +", y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When down arrow is pressed, x = "+ rover_x +", y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When down arrow is pressed, x = "+ rover_x +", y= "+rover_y);
        uploadbg();
        uploadrover();
    }
}


