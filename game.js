// Create the x location of player
var x = 300;
var y = 300;

// Create the setup function
function setup() {
    
    // Create a canvas
    createCanvas(600, 600);
    
    // Set the colour to red
    background(color(255, 0, 0));
    
}

// Create the draw function which is our game loop
function draw() {
    
    // Draw a rectangle
    quad( x-50,y-50, x+50,y-50, x+50,y+50, x-50,y+50);
    
}