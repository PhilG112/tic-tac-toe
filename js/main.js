$(document).ready(function() {
    // ------- GLOBAL VARIABLES ---------
    

    // ---------------------------

    // ------- OBJECTS -----------
    var Player = {
        playerFactory: function(name) {
            var player = {};
            player.name = name;
            player.isTurn = false;
            return player;
        }
    };

    var Human = {
        humanFactory: function(name) {
            var human = Player.playerFactory(name); // Base call
            return human;
        }
    }

    var Ai = {
        aiFactory: function(name) {
            var ai = Player.playerFactory(name); // Base call
            return ai;
        }
    }

    var gameBoard = {
        $gameSquare: $(".game-square"),

        toggleSquare: function() {
            var currentBg = $(this).css("background-color");
            if(currentBg === "rgb(128, 128, 128)") {
                $(this).css({
                    backgroundColor: "white"
                });
            } else {
                $(this).css({
                    backgroundColor: "gray"
                });
            }
        },


    };
    
    gameBoard.$gameSquare.on("click", gameBoard.toggleSquare);
}); 