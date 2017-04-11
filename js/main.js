$(document).ready(function() {
    //------- CORE FUNCTIONALITY -----------
    var Player = {  
        playerFactory: function(name) {
            var player = {};
            player.name = name;
            player.moves = [];
            player.winCount = 0;
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
            var ai = Player.playerFactory(name);
            return ai;
        }
    };

    var Main = { 
        $gameSquare: $(".game-square"),
        winnings: [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ],
        player1: new Human.humanFactory("Player 1"),
        player2: new Human.humanFactory("Player 2"),
        turn: true,

        proccessTurn: function() { 
            if(Main.turn) {
                $(this).css({
                    backgroundImage: "url('./assets/pacman.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                });
                Main.turn = false;
                Main.player1.moves.push(parseInt($(this).attr("data-value")));
                Main.checkWinCondition(Main.player1);
            } else {           
                $(this).css({
                    backgroundImage: "url('./assets/ghost.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                });
                Main.turn = true;
                Main.player2.moves.push(parseInt($(this).attr("data-value")));
                Main.checkWinCondition(Main.player2);
            }
        },

        checkWinCondition: function(player) {
            // TODO: Create 'draw' functionality
            if(player.moves.length >= 3) {
                for(var i=0; i < this.winnings.length; i++) {
                    var winCheck = player.moves.filter(function(value) {
                        return Main.winnings[i].indexOf(value) > -1;
                    }).length == Main.winnings[i].length;
                    if(winCheck) { 
                        player.winCount++;                   
                        Main.resetGame();
                    }
                }
            }
        },

        resetGame: function() {
            console.log("Game reset");
            this.player1.moves = [];
            this.player2.moves = [];
            this.$gameSquare.css({backgroundImage: "none"});
            Main.$gameSquare.off();
            Main.$gameSquare.one("click", Main.proccessTurn);
        }       
    };
    Main.$gameSquare.one("click", Main.proccessTurn);

}); 