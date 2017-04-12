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
        },

        easyLevel: function() {
            return;
        },
        
        hardLevel: function() {
            return;
        }
    };

    var Main = { 
        $gameSquare: $(".game-square"),
        $headingTwo: $("h2"),
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
        ai: new Ai.aiFactory("Computer"),
        turn: true,

        proccessTurn: function() { 
            if(Main.turn) {
                $(this).css({
                    backgroundImage: "url('./assets/pacman.png')"
                });
                Main.turn = false;
                Main.player1.moves.push(parseInt($(this).attr("data-value")));
                Main.checkWinCondition(Main.player1);
            } else {           
                $(this).css({
                    backgroundImage: "url('./assets/ghost.png')"
                });
                Main.turn = true;
                Main.player2.moves.push(parseInt($(this).attr("data-value")));
                Main.checkWinCondition(Main.player2);
            }
        },

        checkWinCondition: function(player) {
            // TODO: Implement draw functionality
            if(player.moves.length >= 3) {
                for(var i=0; i < this.winnings.length; i++) {
                    var winCheck = player.moves.filter(function(value) {
                        return Main.winnings[i].indexOf(value) > -1;
                    }).length == Main.winnings[i].length;
                    if(winCheck) { 
                        player.winCount++;
                        Main.outputWinner(player);
                        Main.$gameSquare.off();
                    }
                }
            }
        },

        outputWinner: function(player) {
            this.$headingTwo.text(player.name + " is the winner!");
            var p1WinCounter = $("#p1-score");
            var p2WinCounter = $("#p2-score");
            p1WinCounter.text(Main.player1.winCount);
            p2WinCounter.text(Main.player2.winCount);
        },

        resetGame: function() {
            Main.player1.moves = [];
            Main.player2.moves = [];
            Main.$gameSquare.css({backgroundImage: "none"});
            Main.$gameSquare.off();
            Main.turn = true;
            Main.$gameSquare.one("click", Main.proccessTurn);
            Main.$headingTwo.text("Who will win?");
        }
    };
    
    //------UI CONTROLS-------
    Main.$gameSquare.one("click", Main.proccessTurn);

    var $resetBtn = $("#reset-btn");
    $resetBtn.on("click", Main.resetGame);
    
    var $humanSelection = $(".human-btn");
    $humanSelection.on("click", function() {
        // TODO: Construct human player
    });

    var $aiSelection = $(".ai-btn");
    $aiSelection.on("click", function() {
        // TODO: Construct ai player
    });
}); 