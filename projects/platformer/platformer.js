$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    for (let i = 100; i < canvas.width; i += 100) {
      createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
      createPlatform(canvas.width, i, -canvas.width, -1);
    }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(0, 670, 100, 20);
createPlatform(200, 570, 100, 20);
createPlatform(0,470, 100, 20);
createPlatform(200, 370, 100, 20);
createPlatform(0, 270, 100, 20);
createPlatform(200,180, 500, 20);
createPlatform(800,300, 100, 20);
createPlatform(600, 400, 100, 20);
createPlatform(800,500, 100, 20);
createPlatform(800,500, 100, 20);
createPlatform(600,600, 100, 20);
createPlatform(700,680, 300, 20);
createPlatform(800,500, 100, 20);
createPlatform(300,190, 10, 700);
createPlatform(600,190, 10, 700);
createPlatform(1000,600, 10, 100);
createPlatform(1100,500, 10, 100);
createPlatform(1200,400, 10, 100);
createPlatform(1000,600, 110, 10);
createPlatform(1100,500, 110, 10);
createPlatform(1200,400, 100, 10);
createPlatform(1300,690, 110, 10);
createPlatform(1000,600, 110, 10);
createPlatform(900,100, 10, 420);
createPlatform(1300,400, 10, 300);






    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 225, 100, 1, 0.7);
    createCollectable("database", 625, 275, 1, 0.7);
    createCollectable("database", 225, 400, 1, 0.7);
    createCollectable("database", 1350, 500, 1, 0.7);
    createCollectable("database", 725, 500, 1, 0.7);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon("bottom", 300, 1000,20,20);
createCannon("bottom", 700, 1000,20,20);
createCannon("left", 650, .1,20,20);
createCannon("right", 200, 1500,20,20);
createCannon("bottom", 1000, 1000,20,20);
createCannon("bottom", 1100, 2500,20,20);
createCannon("bottom", 1200, 1000,20,20);
createCannon("top", 1400, 1500,20,20);



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
