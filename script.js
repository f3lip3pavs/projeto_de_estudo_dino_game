const dino = document.querySelector('.dino'); //busca, seleciona e salva a class dino na const dino
document.addEventListener('keyup', cod_event); //addeventlistener adiciona um evento ao selecionar uma tecla, no caso, o "keyup" é um evento q só ocorrera quando a tecla for solta
let isjumping = false;
const background = document.querySelector('.background');
let position = 0;

function cod_event(evento) {
  if (evento.keyCode == 32) {
    if (!isjumping) {
      jump();
    }
  }
}

function jump() {
  isjumping = true;

  let upinterval = setInterval(function () {
    if (position >= 160) {
      clearInterval(upinterval); //ou clearinterval(upinterval)

      let downinterval = setInterval(function () {
        if (position <= 0) {
          clearInterval(downinterval);
          isjumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      });
    } else {
      position += 20;
    }
    dino.style.bottom = position + 'px';
  }, 20);
}

function creatcactus() {
  const cactus = document.createElement('div');
  let positioncactus = 1000;

  cactus.style.left = 1000 + 'px';
  cactus.classList.add('cactus');
  background.appendChild(cactus);
  let random = Math.random() * 6000; // gera numeros aleatorios de 0 a 1

  let intervalcactus = setInterval(function () {
    if (positioncactus < -50) {
      clearInterval(intervalcactus);
      background.removeChild(cactus);
    } else if (positioncactus > 0 && positioncactus < 60 && position < 60) {
      clearInterval(intervalcactus);
      document.body.innerHTML = '<h1 class="gameover">Game Over</h1>';
    } else {
      positioncactus -= 10;
      cactus.style.left = positioncactus + 'px';
    }
  }, 20);

  setTimeout(creatcactus, random);
}
creatcactus();
