// $(document).ready(function() {
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
    };

    var Ai = {
        aiFactory: function(name) {
            var ai = Player.playerFactory(name); // Base call
            return ai;
        }
    };

    var gameBoard = {
        $gameSquare: $(".game-square"),
        toggleSquare: function() {
            $(this).css({
                backgroundColor: "gray"
            });
        }
    };

    var main = { 
        player1: function(name) {
            var p1 = Human.humanFactory(name);
            p1.isTurn = true;
            return p1;
        },
        player2: function(name) {
            var p2 = Human.humanFactory(name);
            return p2;
        },

        checkTurn: function() {
            if(this.player1().isTurn === true){
                console.log("Player 1 turn");
            } else {
                console.log("Player 2 turn");
            }
        }
    };
    console.log(playGame.player1("p1"));
    console.log(playGame.player2("p2"));
    gameBoard.$gameSquare.on("click", gameBoard.toggleSquare);
// }); 