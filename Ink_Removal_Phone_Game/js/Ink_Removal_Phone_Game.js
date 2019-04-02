// Ink_Removal_Game.js
var config = {
    type: Phaser.AUTO,
    width: 1440,
    height: 2960,
    backgroundColour: 0xFFFFFF,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 0
            } 
        }
    },
    pixelArt: false,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var camera;   
var game = new Phaser.Game(config);

function preload() {
    console.log ("tattoo_game_v1")
    // change the path 
    this.load.image('tileset', 'assets/bare-back.jpg');
    this.load.tilemapTiledJSON("tilemap", "assets/level1.json");
    console.log(this);
    //back
    this.load.image('back', 'assets/bare-back.png');

}

function create() {
   
 this.map = this.make.tilemap({ key: "tilemap" });
    // diffrent name like tattoo or skin 
    var landscape = this.map.addTilesetImage("ink-tileset", "tileset");
    // skin (under layer)
    this.map.createStaticLayer('skin', landscape, 0, 0);
    // ink destruct layer 
    var destructLayer = this.map.createDynamicLayer('destructable', landscape, 0, 0);
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

// Adding Touch for destroying ink
var inkx = game.width - game.cache.getImage('ink-tileset').width;
    var inky = game.height - game.cache.getImage('ink-tileset').height;

    for (var i = 0; i < 5; i++){
         var ink = game.add.sprite(game.rnd.integerInRange(0, mx), game.rnd.integerInRange(0, my),'ink');

        ink.inputEnabled = true;

        ink.input.useHandCursor = true;

        ink.events.onInputDown.add(destroyInk, this);
    }
   }

function update() {
body.update();
    for(var i=0;i<body.length; i++ ){
      ink[i].update(time, delta);
  }
}
// Destroy Ink
function destroyInk (ink) {

    ink.destroy();
    var destructLayer = this.map.getLayer("destructable").tilemapLayer;

  var index = tile.index + 1;
  var tileProperties = destructLayer.tileset[0].tileProperties[index-1];
}