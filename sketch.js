

   // Inicio do jogo
   var start_serasa, start_serasaImg;


   // Carro
   var car_serasa, car_serasaImg;
  
   // Rua vertical
   var rua_serasa, rua_serasaImg;
  
   //Pedra
   var pedra, pedra1, pedraImg, pedra1Img;
   
   // Rua Invisivel
   var rua_serasaInvisivel;
  
    // Variável de grupos
   var grupoPedras;
 
   // Fim do jogo
   var gameover, gameoverImg;

   var estadoJogo = "play"
  
   //carregar todos os arquivos
 function preload()
 {
    car_serasaImg = loadAnimation("img/car_serasa.png");
  
    //Carrega imagem início do jogo
    start_serasaImg = loadImage("img/start_serasa.png");
  
    //Carrega imagens pedras
    pedraImg = loadImage("img/pedra.png");
    pedra1Img = loadImage("img/pedra1.png");


    //Carrega Fim do Jogo
    gameoverImg = loadImage("img/gameover.png");
    
    //carrega imagem rua
    rua_serasaImg = loadImage("img/rua_serasa.png");
   
 }
 
 
 
 
 //função que inicializa o código (instalação)
 function setup()
 {
   //cria tela de fundo
   createCanvas(1000, 600);
   
    // inicio do jogo
    start_serasaImg = loadImage("img/start_serasa.png");
   
    //configurações a rua
    rua_serasa = createSprite(500,140,150,20);
    rua_serasa.addImage("rua_serasa", rua_serasaImg);

    rua_serasa.scale = 1.7;

    rua_serasaInvisivel = createSprite(80, 155, 100, 20);
    rua_serasaInvisivel.visible = false;
 

    //configurações do carro
    car_serasa = createSprite(100,100,20,20);
    car_serasa.addAnimation("car_serasa", car_serasaImg);

    //altera o tamanho
    car_serasa.scale = 0.18;

    //alterar um posição esepecífica
    car_serasa.x = 500, car_serasa.y = 530;

    gameover = createSprite(100,300);
    gameover.addImage(gameoverImg);
    gameover.scale = 1.0;
    gameover.visible = false

 
     //criando grupos
    grupoPedras = new Group();
 }
 
 //Função desenho
 function draw()
 {

    background("#d8e4d3");

     //movimento pro RUA e renicia 
   if (estadoJogo==="play")
   { 
   rua_serasa.velocityY = 2;
   if(rua_serasa.y<0)
   {
       rua_serasa.y = rua_serasa.height/2;
   }
      if(keyDown("space"))
      {
         //o que acontece se a condição for verdadeira
         car_serasa.velocityY = -10;
      }
   
                          
    //cria os elementos na tela (sprites)
    car_serasa.velocityY = car_serasa.velocityY - 0.2;
    car_serasa.collide(rua_serasaInvisivel);
 
 
    criaPedras();

    if(grupoPedras.isTouching(car_serasa)){
      estadoJogo = "end";
   }

   }
    

   else if(estadoJogo==="end")
    {
        //parar a velocidade
        rua_serasa.velocityY = 0;
        car_serasa.velocityX = 0;

        //parar grupo
        grupoPedras.setVelocityXEach(0);
        
        //exibe novamente a imagem de fim de jogo
        //fimDeJogo.visible = false;

        //mensagem na tela
        fill("black"); //cor da letra
        text("Pressione espaço para reiniciar.", 220, 170);

        if(keyDown("space"))
        {
         estadoJogo = "play";
         grupoPedras.destroyEach();
         
         //não exibe a imagem de fim de jogo
         fimDeJogo.visible = true;
        }
    }

        drawSprites();

        
 }

 

 function criaPedras()
 {
 
 
    if(frameCount % 50 ===0)
    {
    var pedra = createSprite(500,50,40,10);
    pedra.velocityY = 2;
   
    var num = Math.round(random(1,2));
 
 
    switch(num){
        case 1: pedra.addImage(pedraImg);
        break;
        //case 2: pedra1.addImage(pedra1Img);
        //break;
        default: break;
    }
   
   
    pedra.scale = 0.1;
    pedra.y = Math.round(random(15,70));
    pedra.lifetime = 500;
 
 
    grupoPedras.add(pedra);
 
 
    }
 
 
 }
 
 
 