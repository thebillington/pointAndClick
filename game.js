// Create the player variable
var playerRect;

// Get the sprite images
var playerImg;
var pickupImg;

// Desired x and y location of the player
var desiredX = 0;
var desiredY = 0;

// Pre load function
function preload() {
    
    // Load our sprite images
    playerImg = loadImage("player.png");
    
}

// Create the setup function
function setup() {
    
    // Create a canvas
    createCanvas(600, 600);
    
    // Create the player rectangle
    playerRect = imgGetRect(playerImg);
    
}

// Create the draw function which is our game loop
function draw() {
    
    // Clear the canvas
    clear();
    
    // Draw a rectangle
    drawSprite(playerImg, playerRect);
    
    // Check if the player is at the desired location
    if (playerRect.x > desiredX) {
        playerRect.x -= 2;
    }
    if (playerRect.x < desiredX) {
        playerRect.x += 2;
    }
    if (playerRect.y > desiredY) {
        playerRect.y -= 2;
    }
    if (playerRect.y < desiredY) {
        playerRect.y += 2;
    }
    
}

// Create a function to draw a rectangle
function drawRect(rect) {
    
    // Set the fill colour
    fill(rect.colour);
    
    // Draw a rectangle
    quad( rect.x,rect.y, rect.x+rect.width,rect.y, rect.x+rect.width,rect.y+rect.height, rect.x,rect.y+rect.height);
    
}

// Function to draw a sprite
function drawSprite(img, rect) {
    
    // Draw the image at the rect location
    image(img, rect.x, rect.y, rect.width, rect.height);
    
}

// Create a function to return a rectangle object
function Rectangle(_x, _y, _width, _height, _colour) {
    
    // Return a rectangle object
    return {x: _x, y: _y, width: _width, height: _height, colour: _colour};
    
}

// Create a function to get a rectangle from an image
function imgGetRect(img) {
    
    // Return a rectangle at 0,0 with width and height of image
    return Rectangle(0, 0, img.width, img.height, -1);
    
}

// Check for mouse click
function mousePressed() {
    
    // Set the desired x and y of the player
    desiredX = mouseX -= playerRect.width / 2;
    desiredY = mouseY -= playerRect.height / 2;
    
}