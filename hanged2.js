let errores = 0;
let intentos = 0;
let palabras = ["amigo", "barco", "cielo", "donde", "fuego", "gente", "huevo", "lápiz", "mango", "nieve", "papel", "queso", "rocas", "soles", "tigre", "unión", "voces", "zorro", "árbol", "banco", "campo", "diosa", "feliz", "golpe", "honor", "islas", "luzco", "manos", "nubes", "punto", "salud", "tarde", "usado", "valle", "barca", "cinta", "ducha", "focos", "guapo", "horno", "imán", "leche", "moras", "nueva", "plaza", "ratas", "temas", "vejez", "ancho", "bravo", "circo", "dieta", "flaca", "giras", "humor", "ideal", "jugos", "lazos", "menta", "nueve", "palma", "regla", "sonar", "tenis", "urano", "verde", "beber", "cabra", "fresa", "globo", "jaula", "lejos", "monta", "peces", "reina", "sello", "viven", "zafiro", "armas", "baile", "cabos", "dedos", "grito", "hotel", "infla", "jugar", "lamas", "medir", "papas", "radio", "salto", "tinte", "urnas", "virus", "arena", "baño", "camas", "deseo", "fines", "habla", "joven", "lindo", "mover", "noche", "puros", "ratón", "salva", "anexo", "broma", "costa", "fruto", "gatos", "hurto", "junta", "lucir", "mixto", "niñas", "pelos", "rubor", "tenaz", "útil", "volar", "yerba", "zanjo", "altar", "bolso", "corto", "flojo", "grano", "hecho", "luces", "mecha", "nadar", "poder", "razón", "siglo", "terco", "velas", "yogur", "zarza", "avión", "banda", "costo", "dudas", "ganar", "horas", "jorge", "laico", "marco", "noble", "pauta", "ronda", "suelo", "temer", "volca", "álbum", "bebes", "cruel", "denso", "iluso", "jefes", "niños", "pelar", "rumor", "soñar", "unico", "vuelo", "zorra", "ancla", "burla", "coral", "dólar", "furia", "hotel", "inglés", "japon", "lucha", "meter", "norma", "punto", "rival", "sueño", "trato", "yermo", "aceite", "acento", "alberg", "ángulo", "bailar", "barrer", "brillo", "botón", "colina", "correr", "dócil", "drama", "entero", "elegir", "fábula", "fijado", "flotar", "gritar", "guitra", "herida", "icono", "impacto", "jaguar", "lógica", "mandar", "noble", "ñandu", "perlas", "pulgas", "ramita", "saltar", "tierra", "valija", "zapato", "zarpar"];

let palabrota;
let input;
let letrasAdivinadas = [];
let juegoTerminado = false;
let victoria = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let i = Math.floor(random(0, palabras.length));
  palabrota = palabras[i];
  console.log(`${palabrota}`);
  input = createInput();
  input.position(100, 1050 / 2);
  input.size(600, 40);
  input.style('font-size', '50px');
  input.input(verificarLetra);
  for (let j = 0; j < palabrota.length; j++) {
    letrasAdivinadas.push('_');
  }
}

function draw() {
  if (juegoTerminado) {
    if (victoria) {
      background(0, 255, 0);
      fill(255);
      textSize(50);
      textAlign(CENTER, CENTER);
      text('¡Ganaste!', width / 2, height / 2);
    } else {
      background(255, 0, 0);
      fill(255);
      textSize(50);
      textAlign(CENTER, CENTER);
      text('Perdiste', width / 2, height / 2 - 50);
      text(`La palabra era: ${palabrota}`, width / 2, height / 2 + 50);
    }
  } else {
    background(142, 51, 67);
    fill(random(0, 186), random(0, 163), random(0, 190));
    rect(1000, 0, 10, 502);
    fill(random(0, 50), random(0, 75), random(0, 100));
    rect(0, 500, 1350, 10);

    textSize(30);
    textStyle(BOLDITALIC);
    fill(0);
    text('intentos ' + `${intentos}`, 100, 100);
    text('fallos ' + `${errores}`, 100, 140);

    let displayPalabra = letrasAdivinadas.join(' ');
    textSize(50);
    text(displayPalabra, 100, 200);

    if (errores >= 1) {
      fill(255);
      circle(500, 90, 160);
    }
    if (errores >= 2) {
      rect(485, 169, 30, 100);
    }
    if (errores >= 3) {
      noStroke();
      ellipse(500, 288, 300, 220);
    }
    if (errores >= 4) {
      rect(500, 230, 275, 10);
    }
    if (errores >= 5) {
      rect(500, 230, -275, 10);
    }
    if (errores >= 6) {
      rect(425, 375, 10, 100);
    }
    if (errores >= 7) {
      rect(550, 375, 10, 100);
      juegoTerminado = true;
    }

    if (!letrasAdivinadas.includes('_')) {
      victoria = true;
      juegoTerminado = true;
    }
  }
}

function verificarLetra() {
  if (juegoTerminado) return;

  let letra = input.value().toLowerCase();
  input.value('');
  if (palabrota.includes(letra)) {
    for (let i = 0; i < palabrota.length; i++) {
      if (palabrota[i] === letra) {
        letrasAdivinadas[i] = letra;
      }
    }
  } else {
    errores++;
  }
  intentos++;
}
