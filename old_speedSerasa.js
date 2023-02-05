// Início Brenda / Poliane 

    // Start
   var start_serasa, start_serasaImg;

   // Carro 
    var car_serasa, car_serasaImg;
    
    // Rua vertical
    var rua_serasa, rua_serasaImg;
 
    // Grama
    var gramadodireto, gramadoesquerdo;
    var gramadodiretoImg, gramadoesquerdoImg;

    // Grama
    var grama, gramaImg;
    var grama1, grama1Img;

    // Pedra
   var pedra, pedra1, pedra2;
   var pedraImg, pedra1Img, pedra2Img;

   // Finish Win
   var finish_win_serasa, finish_win_serasaImg;

   // Finish
   var finish_serasa, finish_serasaImg;

   // Largada
   var largada_serasa, largada_serasaImg;

   // Arvore
   var arvore, arvoreImg;

   var arvore2, arvore2Img;

   var arvore3, arvore3Img;

   var arvore4, arvore4Img;

   

   // gato
   //var gato1, gato2;
   //var gato1Img, gato2Img;

   //cachorro
   //var cachorro1, cachorro2;
   //var cachorro1Img, cachorro2Img;

   //carregar todos os arquivos
   function preload()
   // Termino Brenda / Poliane 

   // Início Brenda
   {
    car_serasaImg = loadAnimation("img/car_serasa.png");

    //Carrega imagem início do jogo
    inicioDeJogoImg = loadImage("img/start_serasa.png");

    //Carrega imagens arvores
    arvoreImg = loadImage("img/arvore.png");
    arvore2Img = loadImage("img/arvore2.png");
    arvore3Img = loadImage("img/arvore3.png");
    arvore4Img = loadImage("img/arvore4.png");

    //Carrega imagens pedra
    pedraImg = loadImage("img/pedra.png");
    pedra1Img = loadImage("img/pedra1.png");
    pedra2Img = loadImage("img/pedra2.png");

    // Carrega imagens grama
    gramaImg = loadImage("img/grama.png");
    grama1Img = loadImage("img/grama1.png");

    //Carrega imagem fim do jogo
    fimDeJogoImg = loadImage("img/finish_serasa.png");
    fimDeJogoImg = loadImage("img/finish_win_serasa.png");
    fimDeJogoImg = loadImage("img/largada_serasa.png");
     
    //carrega imagem rua
    rua_serasaImg = loadImage("img/ground2.png");
}

//função que inicializa o código
function setup()
{
    // inicio do jogo
    start_serasaImg = loadAnimation("img/start_serasa.png");

    //Carrega imagem início do jogo
    start_serasaImg = loadImage("img/start_serasa.png");

    //cria tela de fundo
    createCanvas(600,200);

    //configurações do carro
    car_serasa = createSprite(100,100,20,20);
    car_serasa.addAnimation("car_serasa", car_serasaImg);

    //altera o tamanho
    car_serasa.scale = 0.5;

    //alterar um posição esepecífica
    car_serasa.x = 50;

    //configurações a rua
    rua_serasa = createSprite(100,140,150,20);
    rua_serasa.addImage("rua_serasa", rua_serasaImg);
    rua_serasaInvisivel = createSprite(80, 155, 100, 20);
    rua_serasaInvisivel.visible = false;

    //add imagem fim de jogo
    finish_serasa = createSprite(300,100,20,20);
    finish_serasa.addImage(finish_serasaImg);
    finish_serasa.scale = 0.2;
    finish_serasa.visible = false; //para a imagem não aparecer no incio do jogo

    //criando grupos
    //grupoarvore = new Group();
    //grupopedra = new Group();

    function draw()

    background("#ffd4e1");

    //movimento pro chão e renicia a rua
    rua_serasa.velocityX = -2;
    if(rua_serasa.x<0)
    {
        rua_serasa.x = rua_serasa.width/2;
    }

    //condição para fim de jogo
    if(grupoarvore.isTouching(car_serasa)){

        //para velocidade
        rua_serasa.velocityX = 0;

        //para velocidade dos grupos
        //grupoCacto.setVelocityXEach(0);
        //grupoNuvem.setVelocityXEach(0);

        //imagem fim de jogo
        finish_serasa = createSprite(300,100);
        finish_serasa.addImage(finishserasaImg);
        finish_serasa.scale = 0.2;

        //mensagem de reinicio
        fill("black");
        text("Pressione espaço para reiniciar", 220, 170);   
    }
}
