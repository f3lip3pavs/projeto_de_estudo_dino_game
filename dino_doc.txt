2//document.addEventListener('keyup', jumping); adiciona o evento keyup a funçao jumping
3//"evento" envia o evento keyup pela funçao sempre que alguem pressiona uma tecla pelo navegador
4//key code é o codigo da tecla, no caso, 32 é o codigo da tecla espaço

*pra saber os keycodes de todas as tecla, acessar o site keycode.info 

11//position:   vai guardar o numero de pixels que vamos usar para o dino pular (mas o js ainda n sabe que estamos querendo trabalhar com pixels)

14//positon += 20:    vai fazer o dino se elevar de 20 em 20 pixels (js ainda sem conhecimento dos pixels)

16//dino.style.bottom = position +"px":   Essa linha encontra o elemento "dino", depois encontra o arquivo
css onde ele esta e depois encontra o elemento "bottom" dentro do dino no arquivo css, faz esse caminho, dino (que é uma class no html) => style (css.style) => bottom.
No elemento ".dino" dentro do arquivo css, encontramos bottom com o valor 0 (zero), porem, o que essa linha de codigo faz é
exatamente adicionar 20 sobre 20 ao "bottom", porem, para o css entender que estamos falando de pixel, "position" precisa vir
acompanhada de "px", desse modo, basicamente o que acontece é "bottom = positionpx" exemplo: bottom = 20px => bottom = 40px => bottom = 60px.... e assim por diante

let isjumping = é uma variavel criada para impedir que o "cod_event()" seja acionado caso a variavel "isjumping" seja 
verdadeira, assim impedindo saltos duplos no ar. "me deparei com um bug, se eu apertasse a barra de espaço enquanto o dino 
estava no ar, ele saltava duas vezes. eu precisava que a minha função "jump()" entendesse que quando o dino estava no ar
e quando estava no chao, logo, criei a variavel "isjumping()" dentro da minha função "jump()" ela é verdadeira enquanto
ele esta no ar e falsa quando esta no chão, o resto nao foi muito dificil, so precisei adicionar uma condiçao no minha 
funçao "cod_event()", enquanto "isjumping" for verdade n execute, "if(!isjumping);", dessa forma enquando o valor de 
"isjumping" é verdadeiro o simbolo de exclamaçao "!" torna a variavel falsa, e quando é falsa, a exclamaçao "!" o torna em 
verdadeiro

creatcactus() - a constante cactus recebeu uma funçao cahamada createlement(), ela cria elementos html, no caso
uma div, ou seja, "const cactus" agora é uma div. Em seguida, a "div cactus" recebe uma "class" atraves da funçao
"cactus.classlist.add('cactus')", a partir de agora a "div cactus" recebe uma "class" chamada "cactus", depois puxamos
a "div background" do html com a funçao "queryselector('.background')" e atribuimos a uma constante "background", por ultimo,
"background" recebe a "div cactus" dentro dele atravez da funçao "appendchild('cactus')"