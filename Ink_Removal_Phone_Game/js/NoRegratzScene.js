// NO_Regratz Scene
class NoRegratzScene extends BaseScene {
    constructor() {
        super('NoRegratzScene')

        this.imageSource = 'assets/noregratz.png';
        this.tilemapSource = 'assets/noregratz.json';
        this.tilesetName = 'noregratz';
        this.tattooX = 300;
        this.tattooY = 500;
    }

    preload() {
        super.preload();
        this.load.image('tileset', 'assets/bare-back.jpg');
    }

    create() {
        super.create();
    }

    update() {
        super.update();
    }
}