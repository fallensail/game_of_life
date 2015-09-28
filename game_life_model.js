/*
THe Game object is the model used to store the data and define the rules of simulation models
*/
var Game = function(){
	var that = Object.create(Game.prototype);
	
	that.cells=[];
	
    /*
    ini is a public function used to set 64*64 squares of board and set all the cells with value=0, indicating they are not alive
    */
	that.ini = function(option){
		for (var i=0; i<64; i++) {
        	that.cells[i] = [];
        	for (var j=0; j<64; j++) {
            	that.cells[i][j] = 0;
        	}
    	}

    	if (option===0){
    	[
        	// Gosper glider gun
        	[1, 5],[1, 6],[2, 5],[2, 6],[11, 5],[11, 6],[11, 7],[12, 4],[12, 8],[13, 3],[13, 9],[14, 3],[14, 9],[15, 6],[16, 4],[16, 8],[17, 5],[17, 6],[17, 7],[18, 6],[21, 3],[21, 4],[21, 5],[22, 3],[22, 4],[22, 5],[23, 2],[23, 6],[25, 1],[25, 2],[25, 6],[25, 7],[35, 3],[35, 4],[36, 3],[36, 4],
        
        // Random cells
        // If you wait enough time these will eventually take part
        // in destroying the glider gun, and the simulation will be in a "static" state.
        	[60, 47],[61,47],[62,47],
        	[60, 48],[61,48],[62,48],
        	[60, 49],[61,49],[62,49],
        	[60, 51],[61,51],[62,51],
    		].forEach(function(point) {
        		that.cells[point[0]][point[1]] = 1;
    		});
    	};
	};

	/*
    isfilled is a public function to test if the cell is alive or not. return 1 if there the cell is alive, else return 0 or undefined[out of board]
    */
    that.isfilled = function(x,y){
		return that.cells[x] && that.cells[x][y];
	};

	/*
    neighbours_count is a private function to count how many sorrounding neighbours that one cell [x][y]has
    */
    var neighbours_count = function(x,y){
		var total = 0;
		if (that.isfilled(x-1, y-1)) total++;
        if (that.isfilled(x,   y-1)) total++;
        if (that.isfilled(x+1, y-1)) total++;
        if (that.isfilled(x-1, y  )) total++;
        if (that.isfilled(x+1, y  )) total++;
        if (that.isfilled(x-1, y+1)) total++;
        if (that.isfilled(x,   y+1)) total++;
        if (that.isfilled(x+1, y+1)) total++;
        
        return total;
    };
	
    /*
    update the next round situation according to the logic defined in Conway's Game of Life.
    */
	that.update = function(){
        var result = [];
		that.cells.forEach(function(row, x) {
        	result[x] = [];
        	row.forEach(function(cell, y) {
            	var alive = 0,
                count = neighbours_count(x, y);
            
            	if (cell > 0) {
                	alive = count === 2 || count === 3 ? 1 : 0;
            	} 
            	else {
                	alive = count === 3 ? 1 : 0;
            	}
            
            	result[x][y] = alive;
        	})
    	})
		that.cells = result;
	}

	return that;
};

