class TicTacToe {
	constructor(containerId, size) {
		this.container = document.getElementById(containerId);
		this.size = size;
		this.validationArr = [];
		this.generateBtn();
		this.currentPlayer = 0;
		this.playerSet = [ 'X', 'O' ];
	}

	generateBtn() {
		this.validationArr = new Array(this.size).fill(null).map(() => new Array(this.size).fill(null));
		var i = 0,
			j = 0;
		for (i = 0; i < this.size; i++) {
			var rowNode = document.createElement('div');

			rowNode.className = 'row row' + i;

			this.container.appendChild(rowNode);
			for (j = 0; j < this.size; j++) {
				var btn = document.createElement('button');
				btn.className = 'cellBtn btn' + i + j;
				btn.addEventListener('click', this.btnEventHandler.bind(this), true);

				rowNode.appendChild(btn);
			}
		}
	}

	btnEventHandler(e) {
		var btn = e.srcElement;
		var player = this.playerSet[this.currentPlayer];
		var x = btn.className.split(' ')[1][3];
		var y = btn.className.split(' ')[1][4];

		if (!btn.disable) {
			btn.innerHTML = player;
			btn.disabled = true;
			this.validationArr[x][y] = player;
		}

		this.validate(player);

		if (this.currentPlayer) {
			this.currentPlayer = 0;
		} else {
			this.currentPlayer = 1;
		}
	}

	validate(winner) {
		var arr = this.validationArr;
		var won = false;
		var row = 0;
		var col = 0;
		var diagonal1 = 0;
		var diagonal2 = 0;

		for (var i = 0; i < this.size; i++) {
			row = 0;
			col = 0;
			for (var j = 0; j < this.size; j++) {
				// Check rows
				if (arr[i][j] == winner) {
					row++;
				}
				// Check columns 1
				if (arr[j][i] == winner) {
					col++;
				}

				if (row == this.size || col == this.size) {
					won = true;
				}
			}

			// Check main diagonal
			if (arr[i][i] == winner) {
				diagonal1++;
			}
			// Check opposite diagonal
			if (arr[this.size - (i + 1)][i] == winner) {
				diagonal2++;
			}
		}

		var tie = true;

		for (var i = 0; i < this.size; i++) {
			for (var j = 0; j < this.size; j++) {
				if (tie) {
					if (arr[i][j] == null) {
						tie = false;
					}
				}
			}
		}

		if (won || diagonal1 == this.size || diagonal2 == this.size) {
			alert('Player ' + winner + ' WON!!!');
		} else if (tie) {
			alert('It is a TIE');
		}
	}
}

new TicTacToe('buttonPlain', 3);
