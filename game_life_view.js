/*
game_life_view controls what user will see on the webpage. 
*/
var canvas = document.getElementById('c').getContext('2d');
canvas.strokeStyle = '#e1e1e1';
canvas.fillStyle = '#FF9900';

/*
display_life is a public function to display a cell if it life, then the cell is colored, otherwise it shows an empty square
*/
var display_life = function(Cells){
	canvas.clearRect(0, 0, 512, 512);
	Cells.forEach(function(row, x) {    	
    	row.forEach(function(cell, y) {
            canvas.beginPath();
            canvas.rect(x*8, y*8, 8, 8);            
            if (cell) {
                canvas.fill();
            } 
            else {
                canvas.stroke();
            }
    	})
	})
};

