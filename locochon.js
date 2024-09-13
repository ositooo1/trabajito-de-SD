let img;
let rojo;
let azul;
let verde;
let violeta;

let jugador = [0]

function setup () {
    createCanvas(1500, windowHeight);
   
}

function draw(){
    
    background(img);
    textSize(30)
    text('<--------------- Simon', 900,300)
    textSize(35)
    text('HACELE CASO A SIMON',700,100)
    rojo = createSprite(200, 300,
    150,150);
    rojo.shapeColor = color(139,0,0);
    azul = createSprite(360, 300,
    150,150);
    azul.shapeColor = color(25,25,112);
    verde = createSprite(200, 460,
    150,150);
    verde.shapeColor = color(46,139,87);
    violeta = createSprite(360, 460,
    150,150);
    violeta.shapeColor = color(139,0,139);
    noStroke()
    fill(47,79,79)
    rect(275,225,10,310)
    noStroke()
    rect(125,375,310,10)
    rojo.id = 1
    azul.id = 2
    verde.id = 3
    violeta.id = 4
    
    rojo.onMousePressed = (() => jugador.push(rojo.id))
    console.log(`${jugador}`)
drawSprites();
}



function preload() {
    img = loadImage('waaaa.jpeg')}
  

