class PlayerFacory {
    constructor(name) {
        this.moves = [];
        this.winCount = 0;
        this.name = name;
    }
}

class HumanFactory extends PlayerFacory {
    constructor(name) {
        super(name);
    }
}

class AiFactory extends PlayerFacory {
    constructor(name) {
        super(name);
    }
}

var Main = class {
    constructor() {
        this.p1 = new HumanFactory("Player1");
        this.p2 = new HumanFactory("Player2");
        this.ai = new AiFactory("AI");
        this.turn = true;
        this.isAi = false;
        this.winnings = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        this.$gameSquare = $(".game-square");
    }

    processTurn() {
        if (this.turn) {
            $(this).css({
                backgroundImage: "url('./assets/pacman.png')"
            });
            this.turn = false;
            let p1Value = parseInt($(this).atr("data-value"));
            this.addMove(this.p1, p1Value);
        } else {
            $(this).css({
                backgroundImage: "url('./assets/ghost.png')"
            });
            this.turn = true;
            var p2Value = parseInt($(this).attr("data-value"));
            // debugger;
            this.a
            Main.addMove(this.p2, p2Value);
        }
    }

    addMove(player, value) {
        player.moves.push(value);
        this.checkWinCondition(player);
    }

    checkWinCondition(player) {
        for (var i = 0; i < this.winnings.length; i++) {
            var winCheck = player.moves.filter((val) => {
                return this.winnings[i].indexOf(val) > -1;
            }).length == this.winnings[i].length;
            if (wincheck) {
                player.winCount++;
                this.outputWinner(player);
            }
        }
    }

    outputWinner(player) {
        console.log(player + " is the winner")
    }
}

var m = new Main();

m.$gameSquare.one("click", m.processTurn);