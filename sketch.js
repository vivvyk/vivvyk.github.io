let fr = 1;

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	frameRate(fr);
}

function draw() {
	background(0);
	textSize(32);
	fill(255);
	text(hour(), 10, 30);
	fill(180);
	text(minute(), 10, 60);
	fill(100);
	text(second(), 10, 90);

	let positions;
	positions = draw_lines(width, height);
	draw_axis_lines(positions);
	draw_circles(hour(), minute(), second(), positions);

	if(second() == 0){
		console.log(minute());
	}

}

function draw_axis_lines(pos){
	let x1 = pos[0];
	let x2 = pos[1];
	let y1 = pos[2];
	let y2 = pos[3];
	let sep = pos[4];
	stroke(255, 0, 0);
	line(x1-sep, (y2-y1)/2 + y1, x1-sep*6, (y2-y1)/2 + y1);
	stroke(0, 0, 255);
	line(x1-sep*6.1, (y2-y1)/2 + y1, x1-sep*10, (y2-y1)/2 + y1);
	stroke(255);
	fill(255);
	textSize(16);
	text("12", x1-sep*10, (y2-y1)/2 + y1 - 10);
	text("30", x1-sep-16, (y2-y1)/2 + y1 + 20);

}

function draw_circles(h, m, s, pos){
	let x1 = pos[0];
	let x2 = pos[1];
	let y1 = pos[2];
	let y2 = pos[3];
	let sep = pos[4];

	let inc_x_s  = (y2-y1)*Math.tan(Math.PI/6)/60 * s;
	let inc_y_s = -1 * (y2-y1)/60 * s;

	let inc_x_m  = (y2-y1)*Math.tan(Math.PI/6)/60 * m;
	let inc_y_m = -1 * (y2-y1)/60 * m;

	let inc_x_h  = (y2-y1)*Math.tan(Math.PI/6)/24 * h;
	let inc_y_h = -1 * (y2-y1)/24 * h;

	let diameter = sep;
	fill(255);
	circle(x2-sep-(diameter/2)+inc_x_s, y2+inc_y_s, 15);
	circle(x2-sep*2-(diameter/2)+inc_x_m, y2+inc_y_m, 15);
	circle(x2-sep*3-(diameter/2)+inc_x_h, y2+inc_y_h, 15);
}

function draw_lines(w, h){
	let line_sep = 45;
	let offset = 125;

	let y1 = 60;
	let y2 = h - y1;

	let x1b = (w - (line_sep * 3))/2 + offset;
	let x2b = x1b - (y2-y1)*Math.tan(Math.PI/6);


	for(var i = 0; i < 4; i++){
		line(x1b, y1, x2b, y2);
		stroke(255);
		x1b += line_sep;
		x2b += line_sep;
	}

	return [x1b, x2b, y1, y2, line_sep]
}
