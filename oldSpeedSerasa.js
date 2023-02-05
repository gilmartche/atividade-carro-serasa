// Inicio do jogo
// var start_serasa, start_serasaImg;

// Carro
var car_serasa, car_serasaImg;
  
// Rua vertical
var rua_serasa, rua_serasaImg;
  
// Grama
// var grama, gramaImg;
// var grama1, grama1Img;

// Final - Ganhador
// var finish_win_serasa, finish_win_serasaImg;
  
//Pedra
// var pedra, pedra1, pedraImg, pedra1Img;
   
// Arvore
// var arvore, arvore2, arvoreImg, arvore2Img;
  
// Rua Invisivel
var rua_serasaInvisivel;
   
// Variável de grupos
// var grupoArvores, grupoGramas, grupoPedras;
 
// Fim do jogo
// var gameover, gameoverImg;
  
//carregar todos os arquivos
function preload()
{
   car_serasaImg = loadImage("img/car_serasa.png");
  
   //Carrega imagem início do jogo
   //start_serasaImg = loadImage("img/start_serasa.png");
  
   //Carrega imagens arvores
   //arvoreImg = loadImage("img/arvore.png");
   //arvore2Img = loadImage("img/arvore2.png"); 

   //Carrega imagens gramas
   //gramaImg = loadImage("img/grama.png");
   //grama1Img = loadImage("img/grama1.png");
 
   //Carrega imagens pedras
   //pedraImg = loadImage("img/pedra.png");
   //pedra1Img = loadImage("img/pedra1.png");

   //Carrega imagem fim do jogo
   //finish_win_serasaImg = loadImage("img/finish_win_serasa.png");
   
   //Carrega Fim do Jogo
   //gameoverImg = loadImage("img/gameover.png");
    
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
   rua_serasaInvisivel.visible = true;

   //configurações do carro
   car_serasa = createSprite(100,100,20,20);
   car_serasa.addImage("car_serasa", car_serasaImg);

   //altera o tamanho
   car_serasa.scale = 0.18;

   //alterar um posição esepecífica
   car_serasa.x = 500, car_serasa.y = 530;

   //criando grupos
   // grupoArvores = new Group();
   // grupoGramas = new Group();
   // grupoPedras = new Group();
   }
 
 //Função desenho
 function draw()
   {
      background("#d8e4d3");

      //movimento pro RUA e renicia 
      rua_serasa.velocityY = 2;
      if(rua_serasa.y<0)
      {
         rua_serasa.y = rua_serasa.height/2;
      }
                             
    //cria os elementos na tela (sprites)
    car_serasa.velocityY = car_serasa.velocityY - 0.2;
    car_serasa.collide(rua_serasaInvisivel);
 
 
    //criaGrama();
    
   // if(grupoPedras.isTouching(car_serasa), grupoArvores.isTouching(car_serasa))
   // {
        //estadoJogo = "end"
        
        //para velocidade
        rua_serasa.velocityY = 0;
        car_serasa.velocityX = 0;

        //para velocidade dos grupos
      //  grupoPedras.setVelocityYEach(0);
      //  grupoArvores.setVelocityYEach(0);
      //  grupoGramas.setVelocityYEach(0);

        //imagem fim do jogo
      //  gameover = createSprite(100,300);
      //  gameover.addImage(gameoverImg);
      //  gameover.scale = 1.0;

        //mensagem de reinicio
        fill("black");
        text("Pressione espaço para reiniciar", 170, 220);
       
   // }

        //chama função
        //criaGramas();

        //criaArvores();

        //criaPedras();

        drawSprites();

        
 }
 //função de gramas
//function criaGramas()
//{
//    if(frameCount % 50 === 0)
//    {
//       var grama = createSprite(400,90,40,10);
//       grama.velocityY = 2;
//
//       //gera imagem aleatória
//       var num = Math.round(random(1,2));
//    
//       switch(num){
//        case 1: grama.addImage(gramaImg);
//        break;
//        case 2: grama1.addImage(grama1Img);
//        break;
//        default: break;
//       }

       
//       grama.scale = 0.2;
//       grama.y = Math.round(random(15,70));
       //Math.round é uma função do biblioteca p5.js que arredonda um numero
       //random = função que gera numero aleatório
//       grama.lifetime = 500;   
       
       //adiciona nuvem no grupo
//       grupoGramas.add(grama);
//    }
//}
 
 
// function criaArvores()
// {
 
 
//    if(frameCount % 50 ===0)
//    {
//    var arvore = createSprite(300,70,40,10);
//    arvore.velocityY = 2;
   
//    var num = Math.round(random(1,2));
 
 
//    switch(num){
//        case 1: arvore.addImage(arvoreImg);
//        break;
//        case 2: arvore2.addImage(arvore2Img);
//        break
//        default: break;
//    }
   
   
//    arvore.scale = 0.4;
//    arvore.y = Math.round(random(15,70));
//    arvore.lifetime = 500;
 
 
//    grupoArvores.add(arvore);
 
 
//    }
 
 
// }

 //function criaPedras()
 //{
 
 
 //   if(frameCount % 50 ===0)
 //   {
 //   var pedra = createSprite(500,50,40,10);
 //   pedra.velocityY = 2;
   
 //   var num = Math.round(random(1,2));
 
 
 //   switch(num){
 //       case 1: pedra.addImage(pedraImg);
 //       break;
 //       case 2: pedra1.addImage(pedra1Img);
 //       break
 //       default: break;
 //   }
   
   
 //   pedra.scale = 0.4;
 //   pedra.y = Math.round(random(15,70));
 //   pedra.lifetime = 500;
 // 
 
 //   grupoPedras.add(pedra);
 
 
 //   }
 
 
 //}
 
 
 