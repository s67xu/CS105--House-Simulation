// README 
/*
<project>
Sofia Xu 
s67xu

Annora Zhu
y65zhu

INSTRUCTIONS
<explain what your program does and how to use it>

Our game is an interactive game simulating real-life activities in a household. 
The game starts with a welcome screen and click "s" to enter the living room. 
There are five parts interactable in the living room：


The first is light. If you use mouse click the light switch section, 
the room will be dark and a random light color will be on and if you click again, 
you can switch color. You may turn off the light by clicking elsewhere. 


Second, when you click the TV placed in the center of the room, a 7-day forecast will be shown. 
Press 'W' for winter, 'S' for summer, and 'N' for the next day. 
If there are more than two days of rain or snow in a week, a snowing/raining effect will be shown on the TV screen. 


Third, If you press the Play Station right below the TV, a Glutton Ghost video game will be displayed on the TV screen.
Press any Arrow key to start the game and move the Ghost. 
If you press the Spacebar the game will restart. 
Pressing any other key will cause the game to pause.

There are three types of items that can be eaten: 
Hamburger increases the Ghost's size and is worth half a point; 
Coin fastens the Ghost's speed and is worth 1 point; 
Spray Bottle changes the background color and is worth half a point too.

There are also three hearts on the right corner representing the 3 lives/chances for your Ghost to "die". 
Every time your Ghost touches the border, it will lose one heart, if it touches the border three times the game will end.
A metal will show at the end of the game based on how many scores you got in total: 
Bronze Medal for up to 5 points
Silver Medal for up to 9 points
Gold Medal for at least 10 points


Press anywhere else to exit the TV.


Fourth, click the radio station that's on the right of the TV and left of the Kitchen to have a closer view. 
By mouse-pressing the left or right button on the radio, a random song will play, 
and it will shuffle to another song if there is any song currently playing.


By pressing 'S' again you may return to the living room. 


The last thing in the living room is the pictures on the wall. 
Click each of the pictures with the mouse to change to a new picture.


Now if you mouse-pressed the kitchen area, you may enter the kitchen.
By mouse-pressing on the tap, the water will turn on and will turn off if pressed again.
By pressing the key 'P', you may place a pan at the location and move it by pressing another place. 
You may turn on the fire by pressing one of the four stoves. 
If you put the pan on any of the stoves, it will turn on automatically.


Press 'S' to return to the living room.


Next, you can enter the bathroom by mouse-pressing on the door at the left of the TV. 
In the middle, there is a mirror where it will show your reflection.
By mouse-pressing on the tap again you can turn on and off the water here too.
If you press the sponge, a bunch of bubbles will appear as your mouse moves to clean yourself or anywhere in the bathroom.



VIDEO
<https://youtu.be/OHXPihCHsfo>


RELEASE
I <Annora Zhu> grant permission to CS105 course staff to use
my Final Project program and video for the purpose of promoting CS105.

I <Sofia Xu> grant permission to CS105 course staff to use
my Final Project program and video for the purpose of promoting CS105.


BASIC CONCEPTS
- drawing shapes and using drawing attributes: use rectangle to create the heart 
shapes on the right conner in the Glutton Ghost game
- conditionals: use current screen to trake the room state and transfer if meet the condition
- user-defined functions: living room user difine function combine all interacable option in this game
- loops: in 7 days forcast, when more than two days are rain or snow, generate rainning and snowing effect
- arrays: in winter and summer weater random, use arrey to generate random weather
- mouse or keyboard interaction: in kitchen, put the pan at any of the 4 stove, a fire will 
 appears under the pan



EXTENDED CONCEPTS
- remapping with map(): use alphle to control the bubble diameter and transprancy
- objects: in weather drawing, random generate the weather to the 7 column
- rectangle or circle hit testing: in Glutton Ghost game, when the ghost distance with items = or < than 0, 
item eaten by ghost and has effect on ghost or background
- loading and displaying images: in living room, displaying 6 random pictures inside the 3 paint, 
press each paint on the wall to switch to next picture
- sound or video:in play station, when press the left button in play station can play random song, 
and switch song when press the right button


CODING QUALITY AND VISUAL DESIGN
<argue for your coding quality and visual design>
In this final project, we aim to create a comprehensive and detailed simulation game 
to give players an immersive real-life experience.
Even though we knew the art would not be marked, we still hand-drew all the rooms and 
added a close-up view for radio players to let the player simulate the first-person view. 
Interactive options in the game are all closely related to real-life activities. 
For example, we create the bubble effect to simulate the foam created when using foam...  
The color tone is set as a warm pink tone to provide a digital safe shelter, just like living in a fairy tale.

*/

// *Variables and arrays for 7-day Forcast to display on TV
let date = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let summerHigh = []; // Highest temperature for summer
let summerLow = []; // Lowest temperature for summer
let winterHigh = []; // Highest temperature for winter
let winterLow = []; // Lowest temperature for winter

let tFont = ['Arial', 'Papyrus', 'Arial Black', 'Verdana', 'Tahoma', 'Times New Roman', 'Brush Script MT', 'Palatino', 'Arial Rounded MT Bold']; // Available fonts

let winterWeather = ['cloud', 'sun', 'snowy']; // Default winter weathers
let winterWeatherRandom = []; // 7 random winter weathers for display
let summerWeather = ['cloud', 'sun', 'rain']; // Default summer weathers
let summerWeatherRandom = []; // 7 random summer weathers for display

let highTemperature; // High temperature for display
let lowTemperature; // Low temperature for display

let weather; // Weather for display
let square = []; // Background color for each column

// Map weather types to drawing functions
let weatherDrawing = {
	'sun': sun,
	'rain': drawRain,
	'cloud': cloud,
	'snowy': drawSnowy,
}



// *Variables for Glutton Ghost video-game to display on TV
let ghostIMG; //Variable to hold and load the Ghost image
let coinIMG; //Variable to hold and load the coin image
let colorIMG; //Variable to hold and load the Spray Bottle image
let bigIMG; //Variable to hold and load the Hamburger image
let eatSound; //Variable to hold and load the eating Hamburger sound effect
let coinSound; //Variable to hold and load the eating coin sound effect
let colourSound; //Variable to hold and load the eating Spray Bottle sound effect

let ghostX = 590; //defult x position for ghost
let ghostY = 390; //defult y position for ghost
let ghostS = 20; //Yellow Dot diameter

let coinX = 940; //defult x position for coin
let coinY = 390; //defult y position for coin

let burgerX; //Defult x position for the hamburger
let burgerY; //Defult y position for the hamburger
let colorX; //Defult position for the spray bottle
let colorY; //Defult position for the spray bottle

let speed = 1; //speed of ghost
let ScN = 0; //Number of score eanred start from 0

let hc1 = "red"; //defult color for heart1
let hc2 = "red"; //defult color for heart2
let hc3 = "red"; //defult color for heart3

let oc = "black"; //defult outline color
let bc = "rgb(246,220,255)"; //defult background color


//*Variables for the living room
let livingRoom; // Variable for loading the background living room

let tvScreenOn = false; //Variable to track if the TV screen is on
let playStationOn = false; //Variable to track if the playStation is on

let paintImages = []; // Array of six different paint images
let paintLocationX = [380.5, 574, 719]; // X coordinates of the three paint locations
let paintLocationY = [278.5, 248, 290]; // Y coordinates of the three paint locations

let paintWidth = [122.5, 64, 82]; // Width of the paint rectangles
let paintHeight = [73, 82, 88]; // Height of the paint rectangles

let imageIndex = [0, 2, 4]; // Index of the current image for each paint location

//Variables and arrays for living room light to display
let lightColors = ['#F28585', '#9EEC9E', '#A0A0EA', '#F2BC1F', '#E8A8E8', '#AEF2F2', '#EAF997'];
let lightScreenX = 1530 / 2 + 150; // X position of light screen center
let lightScreenY = 125; // Y position of light screen start
let currentLightColor; //Variable indicating the current light color
let lightScreenOn = false; // Variable to track if the light is on



//*Variables for the Radiao
let radioRoom; //Variable for loading the background Radio
let songs = []; //array to hold and load the songs
let currentSong; //variable for current song display



//Variables for the Kitchen
let kitchen; //Variable for loading the background kitchen
let windowView; //Variable for loading the kitchen window's view

let panIMG; //Variable for loading the pan image
let panX; //x position for the pan to appear
let panY; //y position for the pan to appear
let panState = false;  //Variable to track if the pen is holding

let fireIMG; //Variable for loading the fire image
let stoveX; //x position for the stove to appear
let stoveY; //y position for the stove to appera
let fireState = false;  //Variable to track if the fire stove is on

let kitchenWaterState = false; // Value to decide weather or not to draw the tap water on canvas



//Variables for the Bathroom
let bathRoom; //Variable for loading the background bathroom
let mirror; //Variables for loading the camera/mirror
let mirrorState = false; //Variable to track if the mirror is on
let bathroomWaterState = false; //Variable to track if the tap water is on
let bubbleState = false; //Variable to track if the sponge bubble is on
let bubbleX = []; // arrays to hold bubble x coordinates
let bubbleY = []; // arrays to hold bubble y coordinates


let currentScreen; //Variable to track what room is displaying currently

//Variables of the Start Screen
let hintIMG; //hint displayed on each screen to help interact
let decorIMG; //pink ribbong decoration
let houseIMG; //house image decoration





//preload all the images and sound effect
function preload() {
//source: Clker-Free-Vector-Images, pixabay.com
 hintIMG = loadImage("parchment-23663_1920.png");
//source: mtmsujon, favpng.com.
 decorIMG = loadImage("favpng_pink-ribbon.png");
//source:
 houseIMG = loadImage("shelter.png");
//source:self-draw, no citation needed
 livingRoom = loadImage("livingRoom.png");
//source: self-draw, no citation needed
 kitchen = loadImage("kitchen.png");
//source: self-draw, no citation needed
 bathRoom = loadImage("bathRoom.png");
//source:  camera capture, no citation needed
 mirror = createCapture(VIDEO);
//source: Studio Ghibli, wallpaperflare.com
 windowView = loadImage('windowview.jpg');
//source: Smashicons, flaticon.com
 ghostIMG = loadImage("ghost-3.png");
//source: Umeicon, flaticon.com
 coinIMG = loadImage("dollar-coin.png");
//source: Pixelmeetup, freepik.com
 colorIMG = loadImage("spray.png");
//source: Freepik, flaticon.com
 bigIMG = loadImage("hamburger.png");
//source: self-draw, no citation needed
 radioRoom = loadImage("Radio.png");
//source: Clker-Free-Vector-Images, pixabay.com
 panIMG = loadImage("pan-37803_1920.png");
//source: Clker-Free-Vector-Images, pixabay.com
 fireIMG = loadImage("fire-48870_1920.png");
//source: Pixabay, www.pixabay.com
 eatSound = loadSound("carrotnom-92106.mp3");
//source: Pixabay, www.pixabay.com
 coinSound = loadSound("collectcoin-6075.mp3");
//source: Pixabay, www.pixabay.com
 colourSound = loadSound("short-success-sound-glockenspiel-treasure-video-game-6346 2.mp3");
//source: Valiphotos, www.pixabay.com
 paintImages[0] = loadImage("road-1072821_1280.jpg");
//source: PublicDomainPictures, www.pixabay.com
 paintImages[1] = loadImage("painting-20401_1280.jpg");
//source: No-longer-here, www.pixabay.com
 paintImages[2] = loadImage("vintage-922963_1280.jpg");
//source: Wolfgang157, www.pixabay.com
 paintImages[3] = loadImage("dog-5773397_1280.jpg");
//source: 3194556, www.pixabay.com
 paintImages[4] = loadImage("puppy-1903313_1280.jpg");
//source: Dimhou, www.pixabay.com
 paintImages[5] = loadImage("cat-2536662_1280.jpg");
//source: SergeQuadrado, www.pixabay.com
 songs[0] = loadSound("bossa-in-my-heart-13187.mp3");
//source: Abydos Music, www.pixabay.com
 songs[1] = loadSound("brahmsx27-lullaby-160672.mp3");
//source: JuliusH, www.pixabay.com
 songs[2] = loadSound("morning-mood-edvard-grieg-flute-selection-4310.mp3");
//source: DayFox,  www.pixabay.com
 songs[3] = loadSound("sweet-love-121561.mp3");

}

function setup() {
	createCanvas(1530, 780);
	background(100);
	currentScreen = startScreen; //set the currentscreen to startscreen when starting the game
	currentLightColor = random(lightColors); //set the defult starting light color to a random color

	// initialize bubble arrays to 0 50 times
	for (let i = 0; i < 50; i++) {
		bubbleX[i] = 0;
		bubbleY[i] = 0;
	}

	//let black dot start with a random position when game start
	coinX = random(450, 1080);
	coinY = random(175, 605);

	//let green square start with a random position when game start
	burgerX = random(450, 1080);
	burgerY = random(175, 605);

	//let blue triangle start with a random position when game start
	colorX = random(450, 1080);
	colorY = random(175, 605);

	//for 7-day forcast
	for (let i = 0; i < 7; i++) {
		summerHigh[i] = int(random(1, 40)); //assign 7 random number to the array from 1 to 40 as the high temperature
		summerLow[i] = int(random(1, summerHigh[i])); //assign 7 random number to the array from 1 to the high temperature just assgined as the low temperature

		winterHigh[i] = int(random(-40, 0)); //assign 7 random number to the array from -40 to 0 as the winter high temperature
		winterLow[i] = int(random(-40, winterHigh[i])); //assign 7 random number to the array from -40 to the winter high temperature just assgined as the low temperature

		summerWeatherRandom[i] = summerWeather[int(random(0, summerWeather.length))]; //assign the summer weather 7 times randomly to this array for display
		winterWeatherRandom[i] = winterWeather[int(random(0, winterWeather.length))]; //assign the winter weather 7 times randomly to this array for display
	}
	highTemperature = summerHigh; //make the defult display as summer weather
	lowTemperature = summerLow; //make the defult display as summer weather
	weather = summerWeatherRandom; //make the defult display as summer weather
}

function draw() {
	mirror.hide(); // hide the original HTML video object 
	currentScreen(); //display the room
}

function mousePressed() {
	//switch to bathroom
	if (currentScreen === livingRoomScreen && mouseX <= 305 && mouseX >= 150 && mouseY <= 555 && mouseY >= 255) {
		currentScreen = bathroomScreen;
		mirrorState = true;
		redraw(); //update changes
	}

	//only work when it's displaying bathroom
	if (currentScreen === bathroomScreen) {
		//open batheroom's tube water
		if (mouseX >= 745 && mouseX <= 835 && mouseY >= 410 && mouseY <= 530) {
			bathroomWaterState = !bathroomWaterState;
		}
		//draw sponge bubbles
		if (mouseX >= 1130 && mouseX <= 1175 && mouseY >= 390 && mouseY <= 465) {
			bubbleState = !bubbleState;
		}
	}

	//switch to radio
	if (currentScreen === livingRoomScreen && mouseX <= 880 && mouseX >= 750 && mouseY <= 513 && mouseY >= 415) {
		currentScreen = radioScreen;
		redraw(); //update changes
	}

	//only work when it's displaying radio screen
	if (currentScreen === radioScreen) {
		if (mouseX <= 612 && mouseX >= 585 && mouseY <= 465 && mouseY >= 445) {
			// If the first area on the radio screen is clicked, stop the current song (if any) and play a random song
			if (currentSong) {
				currentSong.stop(); //strop playing the current song
			}
			currentSong = random(songs); //change current song to a random song when button is pressed
			currentSong.play(); //play the current changed song
		}
		
		if (mouseX <= 654 && mouseX >= 627 && mouseY <= 465 && mouseY >= 445) {
			// If the second area on the radio screen is clicked, stop the current song (if any) and play a random song
			if (currentSong) {
				currentSong.stop(); //strop playing the current song
			}
			currentSong = random(songs); //change current song to a random song when button is pressed
			currentSong.play(); //play the current changed song
		}
	}

	//switch to kitchen
	if (currentScreen === livingRoomScreen && mouseX <= 1350 && mouseX >= 1010 && mouseY <= 485 && mouseY >= 215) {
		currentScreen = kitchenScreen;
		redraw(); //update changes
	}

	//only work when it's displaying kitchen
	if (currentScreen === kitchenScreen) {
		//open kitchen's tube water
		if (mouseX >= 1350 && mouseX <= 1400 && mouseY >= 385 && mouseY <= 435) {
			kitchenWaterState = !kitchenWaterState;
		}

		let constX = mouseX - 60; //remember where mouseX is pressed for displaying the pan
		let constY = mouseY - 49; //remember where mouseY is pressed for displaying the pan

		panX = constX //draw the pan at the remembered x position
		panY = constY //draw the pan at the remember y position
		
		//toggle the firel state to true to show the fire when mouse is pressed at declared area
		if (mouseX >= 315 && mouseX <= 415 && mouseY >= 470 && mouseY <= 505) {
			fireState = true;
			stoveX = 365 - 80;
			stoveY = 519 - 115;
		} else if (mouseX >= 425 && mouseX <= 525 && mouseY >= 450 && mouseY <= 485) {
			fireState = true;
			stoveX = 475 - 70;
			stoveY = 467.5 - 85;
		} else if (mouseX >= 320 && mouseX <= 407 && mouseY >= 430 && mouseY <= 458) {
			fireState = true;
			stoveX = 363.5 - 75;
			stoveY = 444 - 90;
		} else if (mouseX >= 220 && mouseX <= 307 && mouseY >= 443 && mouseY <= 473) {
			fireState = true;
			stoveX = 263.5 - 75;
			stoveY = 458 - 80;
		} else {
			fireState = false;
		}
		redraw(); //update changes
	}

	// Check if the mouse is clicked inside any of the paint locations
	for (let i = 0; i < paintLocationX.length; i++) {
		if (mouseX > paintLocationX[i] && mouseX < paintLocationX[i] + paintWidth[i] && mouseY > paintLocationY[i] && mouseY < paintLocationY[i] + paintHeight[i]) {
			// Change the image of the paint
			imageIndex[i] = (imageIndex[i] + 1) % paintImages.length;
		}
	}

	// Check if the mouse is within the bounds of the TV screen
	if (currentScreen === livingRoomScreen && mouseX <= 680 && mouseX >= 550 && mouseY <= 465 && mouseY >= 395) {
		tvScreenOn = true; // Turn on the TV screen
	} else {
		tvScreenOn = false; // Turn off the TV screen
	}

	if (currentScreen === livingRoomScreen && mouseX <= 683 && mouseX >= 623 && mouseY <= 498 && mouseY >= 488) {
		playStationOn = true; //Turn on the playStation screen
	} else {
		playStationOn = false; //Turn off the playStation Screen
	}

	// Check if the mouse is within the bounds of the light screen area
	if (currentScreen === livingRoomScreen && mouseX <= 123 && mouseX >= 98 && mouseY <= 405 && mouseY >= 365) {
		lightScreenOn = true; // Turn on the light screen
		currentLightColor = random(lightColors); // Change the light color
	} else {
		lightScreenOn = false; // Turn off the light screen
	}
}

function keyPressed() {
	if (key === 's' || key === 'S') {
		currentScreen = livingRoomScreen;
		mirrorState = false; //hide the mirror when current screen is not in bathroom
	}

	//toggle the pan state to show it or hide by pressing key 'p'
	if (key === 'p' || key === 'P') {
		panState = !panState;
	}

	//for Glutton Ghost video game
	if (key === ' ') { //when press spacebar, reset everything to restart the game
		mainGame();
		changeColor();
		changeColorMoving();
		growBig();
		growBigMoving()
		blackDot();
		ghostX = width / 2
		ghostY = height / 2
		yellowDot();
		if (hc3 !== "red") {
			hc1 = "red";
			hc2 = "red";
			hc3 = "red";
			ScN = 0;
			speed = 1;
			ghostS = 20;
		}
		//draw the 3 heart meaning three lives
		heart1(); 
		heart2();
		heart3();
	}

	//move everything diplayed in the 7 day forcast column on unit left
	if (key === 'N' || key === 'n') {
		let tempD = date[0]; //always store the date in first column
		for (let i = 0; i < date.length; i++) {
			date[i] = date[i + 1]; //move all 7 date 1 unit left

			square[i] = square[i + 1]; //move all 7 square background 1 unit left to match the weather icon
			summerHigh[i] = summerHigh[i + 1]; //move all 7 high temperature 1 unit left
			summerLow[i] = summerLow[i + 1]; //move all 7 low temperature 1 unit left
			summerWeatherRandom[i] = summerWeatherRandom[i + 1]; //move all 7 weather icon 1 unit left

			winterHigh[i] = winterHigh[i + 1]; //move all 7 high temperature 1 unit left
			winterLow[i] = winterLow[i + 1]; //move all 7 low temperature 1 unit left
			winterWeatherRandom[i] = winterWeatherRandom[i + 1]; //move all 7 weather icon 1 unit left
		}
		date[date.length - 1] = tempD; //always change the date in last column to stored value

		summerHigh[summerHigh.length - 1] = int(random(1, 40)); //generate a random high value for the day in last column
		summerLow[summerLow.length - 1] = int(random(1, summerHigh[summerHigh.length - 1])); //generate a random low value for the day in last column
		summerWeatherRandom[summerWeatherRandom.length - 1] = summerWeather[int(random(0, summerWeather.length))]; //generate a random weather icon for the day in last column

		winterHigh[winterHigh.length - 1] = int(random(-40, 0)); //generate a random high value for the day in last column
		winterLow[winterLow.length - 1] = int(random(-40, winterHigh[winterHigh.length - 1])); //generate a random low value for the day in last column
		winterWeatherRandom[winterWeatherRandom.length - 1] = winterWeather[int(random(0, winterWeather.length))]; //generate a random weather icon for the day in last column

		//change the square background colour according to the weather
		if (weather === summerWeatherRandom) {
			square[square.length - 1] = squareBackgroundSummer(summerWeatherRandom[summerWeatherRandom.length - 1]);
		} else if (weather === winterWeatherRandom) {
			square[square.length - 1] = squareBackgroundWinter(winterWeatherRandom[winterWeatherRandom.length - 1]);
		}
	}

	//change all value to summer range
	if (key === 'S' || key === 's') {
		highTemperature = summerHigh;
		lowTemperature = summerLow;
		weather = summerWeatherRandom;
		for (let i = 0; i < 7; i++) {
			square[i] = squareBackgroundSummer(summerWeatherRandom[i])
		}
	}

	//change all value to winter range	
	if (key === 'W' || key === 'w') {
		highTemperature = winterHigh;
		lowTemperature = winterLow;
		weather = winterWeatherRandom;
		for (let i = 0; i < 7; i++) {
			square[i] = squareBackgroundWinter(winterWeatherRandom[i])
		}
	}

	//change to a random text font for all text
	if (key === 'T' || key === 't') {
		textFont(tFont[int(random(0, tFont.length))]);
	}
}

function livingRoomScreen() {
	imageMode(CORNER);
	//diplaying the paints on wall based on the values stored in the arrays
	for (let i = 0; i < paintLocationX.length; i++) {
		image(paintImages[imageIndex[i]], paintLocationX[i], paintLocationY[i], paintWidth[i], paintHeight[i]);
	}
	//displaying the kitchen window view
	image(windowView, 1168, 345, 152, 60);
	image(livingRoom, 0, 0, 1530, 780); //displaying the living room

	//display the 7 day forcast
	if (tvScreenOn) {
		noStroke();
		fill("rgb(145,203,162)") //background for the 7 day forcast
		rectMode(CENTER);
		rect(width / 2, height / 2, 700, 500, 1);
		TV(); //display the TV black frame
		greenBackground(); //7 column for each day
		dayDisplay(); // Draw the forecast on the TV
		instructionTitle(); // Display the instructions
	}

	//display the Glutton Ghost video game
	if (playStationOn) {
		splashScreen(); //start with instructions

		//game start
		if (key === 'ArrowUp' || key === 'ArrowLeft' || key === 'ArrowDown' || key === 'ArrowRight') {
			yellowDotMoving();
			blackDot();
			blackDotMoving();
			growBig();
			growBigMoving();
			changeColor();
			changeColorMoving();
			heart1();
			heart2();
			heart3();
		}
		if (ghostX > 440 && ghostX < 1090 && ghostY > 165 && ghostY < 615) {
			oc = "black";
		}
		//change border to red when touches the edge to warn and make the heart fade out
		if (ghostX <= 440 || ghostX >= 1090 || ghostY <= 165 || ghostY >= 615) {
			oc = "red";
			if (hc1 !== "rgba(255, 0, 0, 0)") {
				hc1 = "rgba(255, 0, 0, 0)";
				ghostX = width / 2;
				ghostY = height / 2;
			} else if (hc2 !== "rgba(255, 0, 0, 0)") {
				hc2 = "rgba(255, 0, 0, 0)";
				ghostX = width / 2;
				ghostY = height / 2;
			} else {
				hc3 = "rgba(255, 0, 0, 0)";
				gameOver();
				speed = 0;
			}
		}
		heart1();
		heart2();
		heart3();
		TV(); //show the TV frame for the video game

	}

	//turn on the light with a random color
	if (lightScreenOn) {
		light();
	}
	
	//show a hint of what is interactable in the current room
	imageMode(CORNER);
	image(hintIMG, 1300, 30, 200, 270);
	textSize(15);
	fill("black");
	strokeWeight(0);
	textAlign(LEFT);
	text("✓	Press key 'T'", 1350, 80);
	text("✓	Play TV", 1345, 110);
	text("✓	Play Station", 1340, 140);
	text("✓	Light Switch", 1340, 170);
	text("✓	Kitchen", 1340, 200);
	text("✓	Bathroom", 1340, 230);
}

//the start screen for our project
function startScreen() {
	background("pink");
	noStroke();
	fill("rgb(251,244,245)");
	circle(width / 4, height / 2, 650);
	circle(width / 4 * 3, height / 2, 650);
	rectMode(CENTER);
	rect(width / 2, height / 2, 675, 645);
	textAlign(CENTER, CENTER);
	fill("rgb(111,90,94)");
	textSize(50);
	textFont("Arial Rounded MT Bold");
	text("Welcom to your little house", width / 2, height / 2);
	textSize(30);
	text("Press 'S' to START or RETURN", width / 2, height / 2 + 120);
	imageMode(CENTER);
	image(houseIMG, width / 2 + 500, height / 2, 300, 300);
	image(decorIMG, width / 2, height / 2, 1500, 700);
}

//radio screen set up
function radioScreen() {
	imageMode(CORNER);
	image(radioRoom, 0, 0, 1530, 780);

	//show a hint for where is interactable
	imageMode(CORNER);
	image(hintIMG, 1300, 30, 200, 270);
	textSize(15);
	fill("black");
	strokeWeight(0);
	textAlign(LEFT);
	text("✓	Arrow Left", 1350, 80);
	text("✓	Arrow Right", 1345, 110);
}

//bathroom set up
function bathroomScreen() {
	//show the mirror
	if (mirrorState) {
		imageMode(CENTER);
		image(mirror, width / 2, height / 2 - 110, mirror.width, mirror.height);
	}

	//display the bathroom
	imageMode(CORNER);
	image(bathRoom, 0, 0, 1530, 780);

	//turn on the tube water
	if (bathroomWaterState) {
		noStroke();
		fill(63, 174, 255);
		ellipse(767, 495, 30, 20);
		fill(63, 174, 255, 200);
		rectMode(CORNER);
		rect(752, 490, 30, 220);

		//bubbles in the sink
		for (let i = 0; i < 350; i++) {
			noStroke();
			fill(63, 174, 255, 200);
			circle(random(767 - 350, 767 + 350), random(490 + 120, 490 + 300), random(30, 40)); //a simple water/bubble moving animation
		}
		//fill the edge space to make it water/bubble looks real
		for (let i = 0; i < 20; i++) {
			//left side space
			circle(random(767 - 350, 767 - 400), random(490 + 120, 490 + 200), random(10, 20));
			circle(random(767 - 370, 767 - 420), random(490 + 140, 490 + 220), random(10, 20));
			circle(random(767 - 390, 767 - 440), random(490 + 160, 490 + 240), random(10, 20));
			circle(random(767 - 410, 767 - 460), random(490 + 180, 490 + 260), random(10, 20));
			circle(random(767 - 430, 767 - 480), random(490 + 200, 490 + 280), random(10, 20));
			circle(random(767 - 450, 767 - 500), random(490 + 220, 490 + 300), random(10, 20));

			//right side space
			circle(random(767 + 350, 767 + 400), random(490 + 120, 490 + 200), random(10, 20));
			circle(random(767 + 370, 767 + 420), random(490 + 140, 490 + 220), random(10, 20));
			circle(random(767 + 390, 767 + 440), random(490 + 160, 490 + 240), random(10, 20));
			circle(random(767 + 410, 767 + 460), random(490 + 180, 490 + 260), random(10, 20));
			circle(random(767 + 430, 767 + 480), random(490 + 200, 490 + 280), random(10, 20));
			circle(random(767 + 450, 767 + 500), random(490 + 220, 490 + 300), random(10, 20));
		}
		//other empty space
		for (let i = 0; i < 50; i++) {
			circle(random(767 - 300, 767 - 450), random(490 + 200, 490 + 280), random(20, 30));
			circle(random(767 + 300, 767 + 450), random(490 + 200, 490 + 280), random(20, 30));
		}
	}

	//show a hint of where is interactable
	image(hintIMG, 1200, 30, 200, 240);
	textSize(15);
	textAlign(LEFT)
	fill("black");
	strokeWeight(0);
	text("✓	Tap", 1250, 80);
	text("✓	Yellow Sponge", 1245, 110);

	//draw bubble from the sponge that can move with the mouse
	if (bubbleState) {
		bubble();
	}
}

//kitchen screen set up
function kitchenScreen() {
	imageMode(CORNER);
	image(windowView, 930, 175, 600, 175); //display the kitchen's window view
	image(kitchen, 0, 0, 1530, 780);//display the kitchen

	//turn on the tap water
	if (kitchenWaterState) {
		noStroke();
		fill(63, 174, 255, 200);
		quad(1343, 413, 1343 + 10, 413, 1343 - 40, 413 + 70, 1343 - 70, 413 + 70)
		// bubble/water in the sink
		for (let i = 0; i < 30; i++) {
			noStroke();
			fill(63, 174, 255, 200);
			circle(random(1323 - 80, 1410 - 80), random(413 + 60, 413 + 60 + 30), random(10, 20));
			circle(random(1300 - 80, 1400 - 80), random(413 + 40, 413 + 40 + 30), random(10, 20));
		}
		for (let i = 0; i < 20; i++) {
			circle(random(1410 - 80, 1440 - 80), random(413 + 50, 413 + 55 + 30), random(10, 20));
			circle(random(1250 - 80, 1300 - 80), random(413 + 50, 413 + 50 + 30), random(10, 20));
		}
	}

	//turn on the stove
	if (fireState) {
		image(fireIMG, stoveX, stoveY, 152, 100); // Draw the fire under the pan
	}

	//hold the pan
	if (panState) {
		image(panIMG, panX, panY, 152, 77.3);
	}
	//showing the hint for interactable
	image(hintIMG, 1300, 30, 200, 240);
	textSize(20);
	fill("black");
	strokeWeight(0);
	textAlign(LEFT);
	text("✓	Stove", 1350, 80);
	text("✓	key 'P'", 1345, 110);
	text("✓	Tap", 1340, 140);
}

//drawing the TV frame when TV is on
function TV() {
	noFill();
	rectMode(CENTER);
	stroke("black");
	strokeWeight(50);
	rect(width / 2, height / 2, 700, 500, 1);
}

//drawing the light
function light() {
	noStroke();
	rectMode(CENTER);
	fill(currentLightColor + '64'); // Append '64' to the color code for alpha value of 100
	ellipse(lightScreenX - 5, lightScreenY - 10, 190, 50);
	quad(lightScreenX - 100, lightScreenY - 5, lightScreenX + 93, lightScreenY - 5, 1530, 780, 0, 780);
	fill(201, 140, 190, 70);
	rect(width / 2, height / 2, 1530, 780);
}

//assigning values to the bubble arrays
function bubble() {
	// Shift bubble x, y position 
	for (let i = 0; i < bubbleX.length - 1; i++) {
		// Shift all elements left one spot 
		// x[0] = x[1], x[1] = x[2], and so on. 
		// Stop at the second to last element
		bubbleX[i] = bubbleX[i + 1];
		bubbleY[i] = bubbleY[i + 1];
	}

	// always save the mouse position for the last bubble
	bubbleX[bubbleX.length - 1] = mouseX;
	bubbleY[bubbleY.length - 1] = mouseY;

	// draw the bubble
	for (let i = 0; i < bubbleX.length; i++) {
		// draw bubble at each position of array elements 
		// fill and size are based on i (using map)
		noStroke();
		let alpha = map(i, 0, bubbleX.length, 10, 200);
		fill(141, 199, 248, alpha);
		let d = map(i, 0, bubbleX.length, 5, 50);
		stroke(104, 180, 252, alpha * 2);
		if (i % 2 === 0) {
			circle(bubbleX[i] + int(random(-20, 20)), bubbleY[i] + int(random(-20, 20)), d + int(random(-10, 10)));
			circle(bubbleX[i] + int(random(-20, 20)), bubbleY[i] + int(random(-20, 20)), d + int(random(-10, 10)));
			circle(bubbleX[i] + int(random(-20, 20)), bubbleY[i] + int(random(-20, 20)), d + int(random(-10, 10)));
		}
	}
}

//drawing the heart for the video game Glutton Ghost
function heart1() {
	strokeWeight(0.1);
	stroke("red");
	fill(hc1);
	rect(1023.3, 180, 4, 15);
	rect(1023.3 - 4, 180 + 2.5, 4, 9);
	rect(1023.3 + 4, 180 + 2.5, 4, 15);
	rect(1023.3 + 8, 180, 4, 15);
	rect(1023.3 + 12, 180 + 2.5, 4, 9);
}

//drawing the heart for the video game Glutton Ghost
function heart2() {
	strokeWeight(0.1);
	stroke("red");
	fill(hc2);
	rect(1023.3 - 30, 180, 4, 15);
	rect(1023.3 - 34, 180 + 2.5, 4, 9);
	rect(1023.3 - 26, 180 + 2.5, 4, 15);
	rect(1023.3 - 22, 180, 4, 15);
	rect(1023.3 - 18, 180 + 2.5, 4, 9);
}

//drawing the heart for the video game Glutton Ghost
function heart3() {
	strokeWeight(0.1);
	stroke("red");
	fill(hc3);
	rect(1023.3 - 60, 180, 4, 15);
	rect(1023.3 - 64, 180 + 2.5, 4, 9);
	rect(1023.3 - 56, 180 + 2.5, 4, 15);
	rect(1023.3 - 52, 180, 4, 15);
	rect(1023.3 - 48, 180 + 2.5, 4, 9);
}

//drawing the ghost for the video game
function yellowDot() {
	noStroke();
	imageMode(CENTER);
	image(ghostIMG, ghostX, ghostY, ghostS, ghostS);
}

//drawing the coin for the video game
function blackDot() {
	noStroke();
	image(coinIMG, coinX, coinY, 20, 20);
}

//moving the ghost by arrow keys
function yellowDotMoving() {
	mainGame();
	if (key === 'ArrowUp') {
		ghostY = ghostY - speed;
	} else if (key === 'ArrowDown') {
		ghostY = ghostY + speed;
	} else if (key === 'ArrowLeft') {
		ghostX = ghostX - speed;
	} else if (key === 'ArrowRight') {
		ghostX = ghostX + speed;
	}
	yellowDot();
}

//redraw a coin at a new position and add the ghost's speed when it is eatten
function blackDotMoving() {
	if (dotCatch(ghostX, ghostY, coinX, coinY, 20)) {
		coinX = random(450, 1080);
		coinY = random(175, 605);
		coinSound.play();
		speed += 1;
		ScN++;
	}
}

//determine wheather the coin is being eatten
function dotCatch(ghostX, ghostY, coinX, coinY, ghostS) {
	let d = dist(ghostX, ghostY, coinX, coinY);
	return (d <= ghostS / 2);
}

//draw the hamburger for the video game
function growBig() {
	noStroke();
	fill("green");
	image(bigIMG, burgerX, burgerY, 20, 20);
}

//redraw a hamburger at a new position and add the ghost's size when it is eatten
function growBigMoving() {
	if (squareCatch(ghostX, ghostY, burgerX, burgerY, 10)) {
		burgerX = random(450, 1080);
		burgerY = random(175, 605);
		eatSound.play();
		ghostS += 3;
		ScN += 0.5;
	}
}

//determine wheather the hamburger is being eatten
function squareCatch(ghostX, ghostY, burgerX, burgerY, length) {
	let d = dist(ghostX, ghostY, burgerX, burgerY);
	return (d <= length);
}

//draw the spray bottle for the video game
function changeColor() {
	noStroke();
	fill("rgb(43,143,234)");
	image(colorIMG, colorX, colorY, 20, 20);
}

//redraw a spray bottle at a new position and change the background color when it is eatten
function changeColorMoving() {
	if (triangleCatch(ghostX, ghostY, colorX, colorY, 10)) {
		let newX = random(450, 1080); // Generate a new random x position
		let newY = random(175, 605); // Generate a new random y position

		colourSound.play();
		colorX = newX; // Update the x position of the blue triangle
		colorY = newY; // Update the y position of the blue triangle
		bc = color(random(255), random(255), random(255)); //change the background to a random color
		ScN += 0.5;
	}
}

//determine wheather the spray bottle is being eatten
function triangleCatch(ghostX, ghostY, colorX, colorY, length) {
	let d = dist(ghostX, ghostY, colorX, colorY);
	return (d <= length);
}

//starting screen with introduction for the video game
function splashScreen() {
	//black outline
	strokeWeight(10);
	stroke(oc);
	fill(bc);
	rect(width / 2, height / 2, 650, 450);

	//the Ghost
	yellowDot();
	blackDot();

	//"Glutton Ghost" Words title
	textAlign(CENTER, CENTER);
	strokeWeight(1);
	fill("black");
	textSize(30);
	text("Glutton Ghost", width / 2, height / 2 - 60);

	//Instructions for game rules
	textAlign(CENTER, CENTER);
	strokeWeight(1);
	fill("black");
	textSize(15);
	text("Use the arrow keys start the game and move the ghost.", width / 2, height / 2 + 30);
	text("Pressed 'T' to Change Font", width / 2, height / 2 + 60);
	text("Every time you eat the coin, your speed will increase and earn 1 point.", width / 2, height / 2 + 90);
	text("If you eat the hamburger, you will grow bigger and earn 0.5 point.", width / 2, height / 2 + 120);
	text("If you eat the Spray Bottle, your background will", width / 2, height / 2 + 150);
	text("change to a random color and earn 0.5 point.", width / 2, height / 2 + 180);
	text("If you touch the border 3 times, the game is over. You can restart by pressing SPACEBAR", width / 2, height / 2 + 210);
	stroke("red");
	fill("red");
	text("YOU HAVE 3 LIVES", width / 2, height / 2);
}
 //main game screen for the video game when arrow keys are pressed
function mainGame() {
	//black outline
	strokeWeight(10);
	stroke(oc);
	fill(bc);
	rect(width / 2, height / 2, 650, 450);

	//Score
	textAlign(CENTER);
	stroke("black");
	strokeWeight(0.5);
	textSize(25);
	fill("black");
	text("Score: " + ScN, width / 2, 195);
}

//game over screen when all three heart are fade out
function gameOver() {
	//black outline
	strokeWeight(10);
	stroke(oc);
	fill(bc);
	rect(width / 2, height / 2, 650, 450);

	//"Game Over!" word
	textAlign(CENTER);
	stroke("black");
	strokeWeight(0.5);
	textSize(25);
	fill("black");
	text("Game Over!", width / 2, height / 2);

	//"Final Score" word
	textAlign(CENTER);
	stroke("red");
	strokeWeight(0.5);
	textSize(18);
	fill("red");
	text("Final Score: " + ScN, width / 2, height / 2 + 40);

	//3 hearts
	heart1();
	heart2();
	heart3();

	//Medal
	if (ScN >= 10) {
		fill("rgb(213,179,0)")
		strokeWeight(1);
		stroke("black");
		textAlign(CENTER, CENTER);
		textSize(30);
		text("Gold Medal!", width / 2, height - height / 3 * 2);
	} else if (ScN >= 6 && ScN < 10) {
		fill("rgb(174,172,172)");
		strokeWeight(1);
		stroke("black");
		textAlign(CENTER, CENTER);
		textSize(30);
		text("Silver Medal!", width / 2, height - height / 3 * 2);
	} else if (ScN >= 1 && ScN < 6) {
		fill("rgb(247,131,48)");
		strokeWeight(1);
		stroke("black");
		textAlign(CENTER, CENTER);
		textSize(30);
		text("Bronze Medal!", width / 2, height - height / 3 * 2);
	}
}

//display the information for the 7 day forcast in seven columns for each day
function dayDisplay() {
	let x = 485;
	let y = 160;
	let colWidth = 600 / 7; // Width of each forecast column
	for (let i = 0; i < 7; i++) {
		textAlign(CENTER, CENTER);
		textSize(16);
		strokeWeight(1);
		stroke("black");
		fill("black");
		text(date[i], x, 275);

		text("High: " + highTemperature[i], x, 350); //display the high temperature
		text("Low: " + lowTemperature[i], x, 400); //display the low temperature
		// Call the appropriate weather drawing function
		let weatherFunction = weatherDrawing[weather[i]];
		if (weatherFunction) {
			weatherFunction(x, 465); // y position
		}
		x += colWidth + 7;
	}
}

// colors for squares' background in summer depend on their weather
function squareBackgroundSummer(weather) {
	if (weather === 'cloud') {
		return "rgb(189,231,255)";
	} else if (weather === 'sun') {
		return "rgb(249,176,83)";
	} else if (weather === 'rain') {
		return "rgb(5,123,191)";
	}
}

// colors for squares' background in winter depend on their weather
function squareBackgroundWinter(weather) {
	if (weather === 'cloud') {
		return "rgb(189,231,255)";
	} else if (weather === 'sun') {
		return "rgb(249,176,83)";
	} else if (weather === 'snowy') {
		return "rgb(149,146,146)";
	}
}

//drawing the 7 columns
function greenBackground() {
	let x = 440; //let green background start from the left most edge
	for (let i = 0; i < 7; i++) { //drawing 7 green box for 7 days
		fill(square[i]);
		strokeWeight(1);
		stroke("black");
		rectMode(CORNER);
		rect(x, 215, 93, 350);
		x += 93;
	}
}

// Additional functions for rain and snow effects
function countWeatherDays(weatherArray, weatherType) {
	let count = 0;
	for (let i = 0; i < weatherArray.length; i++) {
		if (weatherArray[i] === weatherType) {
			count++;
		}
	}
	return count;
}

//the rain droping animation effect when there are more than 2 days with raining weather
function drawRain(x, y) {
	fill('darkgray');
	noStroke();
	ellipse(x - 10, y + 5, 35, 25);
	ellipse(x + 15, y + 5, 35, 25);
	ellipse(x, y, 35, 35);
	stroke('blue');
	strokeWeight(3);
	line(x, y + 23, x - 5, y + 30);
	line(x - 15, y + 23, x - 20, y + 30);
	line(x + 15, y + 23, x + 10, y + 30);
	if (countWeatherDays(summerWeatherRandom, 'rain') >= 2) {
		rainDrops();
	}
}

//the title and instructions for how the 7-day forcast works
function instructionTitle() {
	//title
	textAlign(CENTER, TOP);
	textSize(35);
	noStroke();
	fill("black");
	text('7-Day Forecast', width / 2, 175);

	//instruction below
	textAlign(CENTER, TOP);
	textSize(14);
	noStroke();
	fill("black");
	text("Press 'S' for summer	|	Press 'W' for winter	|	Press 'N' for next day	|	Press 'T' for different font", width / 2, 580);
}

//the rain drops
function rainDrops() {
	for (let i = 0; i <= 10; i++) {
		let Rx = random(450, 1100);
		let Ry = random(150, 600);
		stroke("blue");
		line(Rx, Ry, Rx + 6, Ry + 6);
	}
}

//the snow droping animation effect when there are more than 2 days with raining weather
function drawSnowy(x, y) {
	fill('white');
	noStroke();
	circle(x, y, 35);
	ellipse(x - 9, y + 5, 35, 25);
	ellipse(x + 13, y + 5, 36, 24);
	circle(x + 3, y + 23, 5);
	circle(x - 15, y + 23, 5);
	circle(x + 20, y + 23, 5);
	circle(x - 8, y + 30, 5);
	circle(x + 13, y + 30, 5);
	if (countWeatherDays(winterWeatherRandom, 'snowy') >= 2) {
		snowDrops();
	}
}

//the snow drops
function snowDrops() {
	for (let i = 0; i <= 10; i++) {
		let Sx = random(450, 1075);
		let Sy = random(170, 600);
		stroke("white");
		circle(Sx, Sy, 5);
	}
}

//drawing the cloudy weather icon
function cloud(x, y) {
	noStroke();
	fill("white");
	circle(x, y, 35);
	ellipse(x - 9, y + 5, 35, 25);
	ellipse(x + 13, y + 5, 36, 24);
}

//drawing the sunny weather icon
function sun(x, y) {
	noStroke();
	fill("yellow");
	circle(x, y, 30);
	strokeWeight(4);
	stroke("yellow")
	line(x + 20, 264.2 + 200, x + 30, 264.2 + 200);
	line(x - 20, 264.2 + 200, x - 30, 264.2 + 200);
	line(x, 264.2 + 20 + 200, x, 264.2 + 30 + 200);
	line(x, 264.2 - 20 + 200, x, 264.2 - 30 + 200);
	line(x - 14, 264.2 - 14 + 200, x - 20, 264.2 - 20 + 200);
	line(x + 14, 264.2 - 14 + 200, x + 20, 264.2 - 20 + 200);
	line(x - 14, 264.2 + 14 + 200, x - 20, 264.2 + 20 + 200);
	line(x + 14, 264.2 + 14 + 200, x + 20, 264.2 + 20 + 200);
}