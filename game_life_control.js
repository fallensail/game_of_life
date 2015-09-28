	/*
	game_life_control is the file that sets how user interact with the webpage and dynamically manipulate the page by clicking 
	"start", "clear","initalize with gun", "stop" buttons.
	user can even click the board directly to change the cellls conditions.
	*/
	
	var my_timer;
	var running=0;
	var G = Game();
	G.ini();
	
	$(function()
	{display_life(G.cells);});

	$("#star").click(function(){
			$("#log").text("Simulation is Running...Press 'Stop' to pause");
			running = 1;
			window.clearInterval(my_timer);
			my_timer = window.setInterval(function(){
			G.update();
			display_life(G.cells);
			}, 70);
	});

	$("#stop").click(function(){
			if ($('#log').text()==="Simulation is Running...Press 'Stop' to pause"){
				$("#log").text("Simulation is Paused...");
			};			
			running = 0;
			window.clearInterval(my_timer);
			display_life(G.cells);
	});

	$("#ini0").click(function(){
			$("#log").text("Click the borad to set initial conidition");
			running = 0;
			window.clearInterval(my_timer);
			G.ini();
			display_life(G.cells);
	});

	$("#ini1").click(function(){
			$("#log").text("Initial condition is set to Gosper Gun");
			running = 0;
			window.clearInterval(my_timer);
			G.ini(0);
			display_life(G.cells);
	});


	$("#c").click(function(e){
		if (running === 0){
			var x = Math.floor(e.pageX/8)-1;
			var y = Math.floor(e.pageY/8)-1;
			G.cells[x][y] = G.isfilled(x,y) ? 0:1
			display_life(G.cells);
			};
	});
	





