// Create the player variable
var player;

// Create the setup function
function setup() {
    
    // Create a canvas
    createCanvas(600, 600);
    
    // Create the player rectangle
    player = Rectangle(300, 300, color(50, 255, 255));
    
}

// Create the draw function which is our game loop
function draw() {
    
    // Clear the canvas
    clear();
    
    // Draw a rectangle
    drawRect(player);
    
    // Check key presses
    if(keyIsDown(LEFT_ARROW)) {
        
        //Move the player
        player.x -= 1;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        
        //Move the player
        player.x += 1;
    }
    if(keyIsDown(UP_ARROW)) {
        
        //Move the player
        player.y -= 1;
    }
    if(keyIsDown(DOWN_ARROW)) {
        
        //Move the player
        player.y += 1;
    }
    
}

// Create a function to draw a rectangle
function drawRect(rect) {
    
    // Set the fill colour
    fill(rect.colour);
    
    // Draw a rectangle
    quad( rect.x-50,rect.y-50, rect.x+50,rect.y-50, rect.x+50,rect.y+50, rect.x-50,rect.y+50);
    
}

// Create a function to return a rectangle object
function Rectangle(_x, _y, _colour) {
    
    // Return a rectangle object
    return {x: _x, y: _y, colour: _colour};
    
}