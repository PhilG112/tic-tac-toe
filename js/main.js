// $(document).ready(function() {
    // ------- OBJECTS -----------
    var Player = {  
        playerFactory: function(name) {
            var player = {};
            player.name = name;
            player.moves = [];
            return player;
        }
    };

    var Human = {
        humanFactory: function(name) {
            var human = Player.playerFactory(name); // Base call
            return human;
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
        player1: new Human.humanFactory("Player1"),
        player2: new Human.humanFactory("Player2"),
        turn: true,

        proccessTurn: function() { 
            if(Main.turn) {
                $(this).css({
                    backgroundColor: "blue"
                });
                Main.turn = false;
                var p1Move = parseInt($(this).attr("data-value"));
                Main.player1.moves.push(p1Move);
                Main.checkWinCondition(Main.player1);
            } else {           
                $(this).css({
                    backgroundColor: "red"
                });
                Main.turn = true;
                var p2Move = parseInt($(this).attr("data-value"));
                Main.player2.moves.push(p2Move);
                Main.checkWinCondition(Main.player2);
            }
        },

        checkWinCondition: function(player) {
            var gameOver = false;
            if(player.moves.length >= 3) {
                for(var i=0; i < this.winnings.length; i++) {
                    var x = player.moves.filter(function(elem) {
                                return Main.winnings[i].indexOf(elem) > -1;
                            }).length == Main.winnings[i].length;
                    if(x) {
                        console.log(player.name, "WINNER");
                        gameOver = true;
                    } 
                }
            }
        }       
    };
    
    Main.$gameSquare.one("click", Main.proccessTurn);


// }); 