// Ink_Removal_Scene.js
class client {
constructor(scene, x, y, texture, frame){
    this.scene = scene;
    this.ink = scene.physics.add.ink(x, y, texture, 'ink');

  }
}
update(){
this.ink.x = this.body.x = this.hull.x;
    this.ink.y = this.body.y = this.hull.y;
}
damage(){
console.log('it hurts');
}
//todo
satisfaction(){

}
burn(){
    this.body.setVisible(false);
  }

class ink {
    update() {

    }
    damage() {

    }
    isDestroyed() {

    }
}

class playerStatus {
    update() {

    }
    monyey() {

    }
}