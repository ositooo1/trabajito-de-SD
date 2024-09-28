let img;
let rojo, azul, verde, violeta;
let jugador = [];
let mach = [];
let puntos = 0;
let errores = 0;
let turnoMaquina = true;
let indiceMaquina = 0;
let indiceJugador = 0;

function setup() {
  createCanvas(1500, windowHeight);
  background(img);
  rojo = createSprite(200, 300, 150, 150);
  rojo.shapeColor = color(139, 0, 0);
  azul = createSprite(360, 300, 150, 150);
  azul.shapeColor = color(25, 25, 112);
  verde = createSprite(200, 460, 150, 150);
  verde.shapeColor = color(46, 139, 87);
  violeta = createSprite(360, 460, 150, 150);
  violeta.shapeColor = color(139, 0, 139);
  fill(47, 79, 79);
  rect(275, 225, 10, 310);
  noStroke();
  rect(125, 375, 310, 10);

  azar();
  setTimeout(maquinaJuega, 1000);
}

function draw() {
  textSize(30);
  text('<--------------- Simon', 900, 300);
  textSize(35);
  text('HACELE CASO A SIMON', 700, 100);

  drawSprites();

  if (!turnoMaquina) {
    if (mouseIsPressed) {
      if (rojo.overlapPoint(mouseX, mouseY)) {
        procesarColor(1, rojo, color(255, 0, 0), color(139, 0, 0));
      } else if (azul.overlapPoint(mouseX, mouseY)) {
        procesarColor(2, azul, color(0, 0, 255), color(25, 25, 112));
      } else if (verde.overlapPoint(mouseX, mouseY)) {
        procesarColor(3, verde, color(0, 255, 0), color(46, 139, 87));
      } else if (violeta.overlapPoint(mouseX, mouseY)) {
        procesarColor(4, violeta, color(255, 0, 255), color(139, 0, 139));
      }
    }
  }
}

function preload() {
  img = loadImage('waaaa.jpeg');
}

function azar() {
  let num = Math.floor(random(1, 5));
  mach.push(num);
  console.log(mach);
}

function maquinaJuega() {
  if (indiceMaquina < mach.length) {
    let colorSeleccionado = mach[indiceMaquina];
    if (colorSeleccionado === 1) {
      rojo.shapeColor = color(255, 0, 0);
      setTimeout(() => rojo.shapeColor = color(139, 0, 0), 1000);
    } else if (colorSeleccionado === 2) {
      azul.shapeColor = color(0, 0, 255);
      setTimeout(() => azul.shapeColor = color(25, 25, 112), 1000);
    } else if (colorSeleccionado === 3) {
      verde.shapeColor = color(0, 255, 0);
      setTimeout(() => verde.shapeColor = color(46, 139, 87), 1000);
    } else if (colorSeleccionado === 4) {
      violeta.shapeColor = color(255, 0, 255);
      setTimeout(() => violeta.shapeColor = color(139, 0, 139), 1000);
    }
    indiceMaquina++;
    setTimeout(maquinaJuega, 1500);
  } else {
    turnoMaquina = false;
    indiceMaquina = 0;
    indiceJugador = 0;
  }
}

function procesarColor(colorSeleccionado, sprite, colorActivo, colorInactivo) {
  sprite.shapeColor = colorActivo;
  setTimeout(() => sprite.shapeColor = colorInactivo, 500);

  jugador.push(colorSeleccionado);
  if (colorSeleccionado === mach[indiceJugador]) {
    indiceJugador++;
    if (indiceJugador === mach.length) {
      puntos++;
      jugador = [];
      azar();
      turnoMaquina = true;
      setTimeout(maquinaJuega, 1000);
    }
  } else {
    errores++;
    jugador = [];
    turnoMaquina = true;
    setTimeout(maquinaJuega, 1000);
  }
}
