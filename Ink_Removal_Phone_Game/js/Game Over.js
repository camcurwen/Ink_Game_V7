//Game Over
var gameOver = function(game) {}
gameOver.prototype = {
    create: function() {
        var style = {
            font: "32px Monospace",
            fill: "#00ff00",
            align: "center"
        }
        
        var text = game.add.text(
            game.width / 2, game.height / 2, "Game Over\n\nYour score: " + score + "\n\nTap to restart", style
        );
        
        text.anchor.set(0.5);
    }
}
