# Tic Tac Toe [nxn]

This is a Tic Tac Toe game that can create board nxn.

# Installation
1. Download/Clone this repository
2. Add next code on the page where you want this game to appear
```
<div id="buttonPlain"></div>
```

3. Connect code of the game:
```
<script src="..folder_with_game_library/main.js"></script>
```

# Configuration
If you want to add game with more than 3x3 board open ```main.js``` file and modify [line 108] ```new TicTacToe('buttonPlain', size_of_the_goard);```.
Note: replace ```size_of_the_board``` by any positive integer value greater than 0.

# Design
You can change design of the game by styling it using CSS:
```
div.row { }         /* Row style (grid) */
button.cellBtn {}   /* Button style (cell) */
button:disabled {}  /* Button style after it's been pressed */
```
