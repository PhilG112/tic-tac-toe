// $(document).ready(function() {
    // ------- OBJECTS -----------
    var Player = {  
        playerFactory: function(name) {
            var player = {};
            player.name = name;
            player.isTurn = true;
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

        checkTurn: function() {
            if(Main.player1.isTurn) {
                $(this).css({
                    backgroundColor: "blue"
                });
                Main.player1.isTurn = false;
                Main.addPlayerMove(Main.player1);
            } else {           
                $(this).css({
                    backgroundColor: "red"
                });
                Main.player1.isTurn = true;
                Main.addPlayerMove(Main.player2);
            }
        },

        addPlayerMove: function(player) {
            player.moves.push(1);
            console.log(player.moves);
        }
    };
    
    console.log(Main.player1);
    console.log(Main.player2);
    Main.$gameSquare.on("click", Main.checkTurn);

    console.log($(".game-square").val());
// }); 