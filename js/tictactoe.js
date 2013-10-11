var turn = 'X';
$('#board').on('click', 'td', function() {
	var $this = $(this),
		val = $this.text();
	if(!val.length) {
		$this.text(turn);
		$this.addClass('filled');
		if(checkWinner()) {
			alert(turn + ' wins!');
			resetBoard();
			return;
		} else if(!checkAvailableMoves()) {
			alert('Draw!');
			resetBoard();
			return;
		}
		turn = turn == 'X' ? 'O' : 'X';
	}
});

function resetBoard() {
	$('#board td').text('').removeClass('filled');
	turn = 'X';
}

function checkAvailableMoves() {
	var $cells = $('#board td'),
			available = false;
	
	$cells.each(function() {
		if(!$(this).text().length) {
			available = true;
		}
	});
	
	return available;
}

function checkWinner() {
	var $cells = $('#board td'),
			x = [];
	
	$cells.each(function() {
		x.push($(this).text());
	});
	
	// naive victory checking!
	if(x[0].length && x[0] == x[1] && x[1] == x[2]) return true; // top row
	if(x[3].length && x[3] == x[4] && x[4] == x[5]) return true; // middle row
	if(x[6].length && x[6] == x[7] && x[7] == x[8]) return true; // bottom row
	if(x[0].length && x[0] == x[3] && x[3] == x[6]) return true; // left column
	if(x[1].length && x[1] == x[4] && x[4] == x[7]) return true; // middle column
	if(x[2].length && x[2] == x[5] && x[5] == x[8]) return true; // right column
	if(x[0].length && x[0] == x[4] && x[4] == x[8]) return true; // top left to bottom right
	if(x[2].length && x[2] == x[4] && x[4] == x[6]) return true; // top right to bottom left
	
	return false;
}