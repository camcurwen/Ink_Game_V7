class BaseScene extends Phaser.Scene{
	constructor(id){
        super(id);
		this.imageSource;
		this.tilemapSource;
		this.tilesetName;
		this.tattooX = 0;
		this.tattooY = 0;
	}
    preload() {
       
		this.load.image('tattooImage', this.imageSource);
        this.load.tilemapTiledJSON("tattooTilemap", this.tilemapSource);
        //back 
        
       this.load.image('back', 'assets/bare-back.png');
	}
    create() {
        currentScene = this.sys.config;

		this.map = this.make.tilemap({ key: "tattooTilemap" });
   
        var tattooImage = this.map.addTilesetImage(this.tilesetName, "tattooImage");

        this.back = this.add.image(500, 900, "back"); 
        
		this.tattoo = this.map.createDynamicLayer('tattooLayer', tattooImage, this.tattooX, this.tattooY);

        

		this.input.on('pointerdown', function(pointer){
			var tile = this.tattoo.getTileAtWorldXY(pointer.x, pointer.y);

			if(tile !== null){ //Check the tile is valid - In case the player clicks outside of the tatto layer
				if(tile.properties.clickable){ //Is the tile clickable - Is it a tattoo
					if(!tile.alreadyClicked){ //Has this tile already been clicked previously?
						tile.setVisible(false);
						tile.alreadyClicked = true;
					} else {
						console.log("This has already been clicked on");
					}
				} else {
					console.log("This isn't part of the tattoo");
				}
			} else {
				console.log("This isn't even close to the tattoo");
			}
			
        }, this)
      
	}
	   
	update(){

	}

}

var currentScene;

function goNextScene() {
    if (currentScene == "FaceScene") {
        game.scene.start('NoRegratzScene');
    }
    //console.log(game.scene.getScene(currentScene));
}
