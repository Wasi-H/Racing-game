var trackGamePiece, track2GamePiece, track3GamePiece, track4GamePiece, track5GamePiece, track6GamePiece, track7GamePiece, track8GamePiece;
var jeffgordonGamePiece;
var jimmie;
var finishline;

function startGame() {
    trackGamePiece = new component(560, 40, "black", 30, 30);
    track2GamePiece = new component(40, 210, "black", 0, 30);
    track3GamePiece = new component(200, 40, "black", 40, 200);
    track4GamePiece = new component(40, 200, "black", 200, 200);
    track5GamePiece = new component(200, 40, "black", 40, 360);
    track6GamePiece = new component(40, 100, "black", 40, 400);
    track6GamePiece = new component(40, 100, "black", 40, 400);
    track7GamePiece = new component(550, 40, "black", 40, 460);
    track8GamePiece = new component(40, 390, "black", 550, 70);
    jeffgordonGamePiece = new component(20, 10, "red", 550, 40); 
    jimmie = new component(20, 10, "blue", 549.4, 30); 
    myGameArea.start();
    finishline = new component(5, 40, "white", 530, 30)
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }


function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}


function updateGameArea() {

    myGameArea.clear();
    trackGamePiece.update();
    track2GamePiece.update();
    track3GamePiece.update();
    track4GamePiece.update();
    track5GamePiece.update();
    track6GamePiece.update();
    track7GamePiece.update();
    track8GamePiece.update(); 
    finishline.update();
    jimmie.speedX = 0;
    jimmie.speedY = 0;
    if (myGameArea.key && myGameArea.key == 37) {jimmie.speedX = -1.99; }
    if (myGameArea.key && myGameArea.key == 39) {jimmie.speedX = 1.99; }
    if (myGameArea.key && myGameArea.key == 38) {jimmie.speedY = -1.99; }
    if (myGameArea.key && myGameArea.key == 40) {jimmie.speedY = 1.99; }
    jimmie.newPos();
    jimmie.update();
    jeffgordonGamePiece.speedX = 0;
    jeffgordonGamePiece.speedY = 0;    
    if (myGameArea.key && myGameArea.key == 37) {jeffgordonGamePiece.speedX = -2; }
    if (myGameArea.key && myGameArea.key == 39) {jeffgordonGamePiece.speedX = 2; }
    if (myGameArea.key && myGameArea.key == 38) {jeffgordonGamePiece.speedY = -2; }
    if (myGameArea.key && myGameArea.key == 40) {jeffgordonGamePiece.speedY = 2; }
    jeffgordonGamePiece.newPos();
    jeffgordonGamePiece.update();
  }
