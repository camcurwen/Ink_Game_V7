// Might not need this page 
class SceneA extends Phaser.Scene{
        constructor(id){
            super(id);
            this.money = 10;
        }
        preload(){
            console.log ("tattoo_game_with_scenes");
            this.load.image('tileset', 'assets/body-tileset.png');
            this.load.tilemapTiledJSON("tilemap", "assets/level1.json");
        }
        create(){
          //  this.scoreText = this.add.text(0, 32, 'Money = $'+this.money, { fontFamily: 'Arial', fontSize: '24px',  fill: '#fff'});
          //  this.satisText = this.add.text(200, 32, 'Satis = $', { fontFamily: 'Arial', fontSize: '24px',  fill: '#fff'});
         }
           
        update(){
            this.money++;
            this.scoreText.text = 'Money = $'+this.money;
        }

}
