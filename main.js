canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;
background_image = "mars2.jpg";
rover_image = "rover.png";
function add(){
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;
    rover_img_tag = new Image();
    rover_img_tag.onload = uploadRover;
    rover_img_tag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (key_pressed == '38'){
        up();
        console.log("UP");
    }
    if (key_pressed == '40'){
        down();
        console.log("DOWN");
    }
    if (key_pressed == '37'){
        left();
        console.log("LEFT");
    }
    if (key_pressed == '39'){
        right();
        console.log("RIGHT");
    }
}
function up(){
    if(rover_y >= 0){
        rover_y -= 10;
        uploadBackground();
        
        uploadRover();
    }
}
function down(){
    if(rover_y <= 500){
        rover_y += 10;
        uploadBackground();
      
        uploadRover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x -= 10;
        uploadBackground();
        
        uploadRover();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x += 10;
        uploadBackground();
        
        uploadRover();
    }
}