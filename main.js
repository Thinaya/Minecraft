var canvas = new fabric.Canvas('myCanvas')

block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;

var player_object= "";
var player_skin= "";

function player_update()
{
    fabric.Image.fromURL("https://th.bing.com/th/id/R.74dd2dfc69e4f7a060dc46abf1425ea1?rik=ymXuMQYEcecxfg&riu=http%3a%2f%2fwww.minecraftskins3d.com%2fwp-content%2fuploads%2fskins%2fskin-images%2fshy-purple-girl-skin-3230581%2fshy-purple-girl-skin-3230581-05.png&ehk=m4a7rxPgS6PSs6VXL%2baIkJbCvM4AvBre3jEfMpipYjw%3d&risl=&pid=ImgRaw&r=0", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}



function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == '80')
{
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(e.shiftKey == true && keyPressed == '77')
{
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(keyPressed == '38')
{
     up ();
     console.log("up");
}

if(keyPressed == '40')
{
     down ();
     console.log("down");
}

if(keyPressed == '37')
{
     left ();
     console.log("left");
}

if(keyPressed == '39')
{
     right ();
     console.log("right");
}

if(keyPressed == '87')
{
    new_image('wall.jpg');
    console.log("w")
}

if(keyPressed =='76')
{
    new_image('light_green.png');
    console.log("l");
}

if(keyPressed =='84')
{
    new_image('trunk.jpg');
    console.log("t");
}

if(keyPressed =='82')
{
    new_image('roof.jpg');
    console.log("r");
}

if(keyPressed =='68')
{
    new_image('dark_green.png');
    console.log("d");
}

if(keyPressed =='85')
{
    new_image('unique.png');
    console.log("u");
}

if(keyPressed =='67')
{
    new_image('cloud.jpg');
    console.log("c");
}

if(keyPressed =='89')
{
    new_image('yellow_wall.png');
    console.log("y");
}

if(keyPressed =='71')
{
    new_image('ground.png');
    console.log("g");
}

if(keyPressed == '97')
{
    canvas.remove(player_object)
    fabric.Image.fromURL("https://i.pinimg.com/originals/8e/6d/1c/8e6d1cb587463b1b00db1d7ca335ba87.png", function(Img) {
        player_skin = Img;

        player_skin.scaleToWidth(150);
        player_skin.scaleToHeight(140);
        player_skin.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_skin);

    });
}
}


function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    } 
}

function left()
{
    if(player_x >=0)
    {
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
        }
}

function right()
{
    player_x = player_x + block_image_width;
    canvas.remove(player_object);
    player_update();
}