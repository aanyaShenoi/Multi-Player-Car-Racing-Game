var database, gameState = 0, playerCount, form, player, game, distance = 0, allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 20, displayHeight - 20);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    //background("white");
    //drawSprites();
    if (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
}