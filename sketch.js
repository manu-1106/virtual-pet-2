// variables here
var dog,happyDog,foodS,foodStock,database,data,feed,addfood,fedTime,lastFed,foodObj;var foodStock;
function preload()
{
  dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
  foodStock=loadImage('milk.png');

	//load images here
}

function setup() {
  createCanvas(500, 500);
  foodObj=new Food(370,220,70,70)
  dog1=createSprite(400,250,20,20);
  dog1.scale=0.2
  happyDog1=createSprite(400,250,20,20);
  happyDog1.scale=0.2;
  database=firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",function (data){
    foodS=data.val();
  }
  );
  feed=createButton("feed the dog");
  feed.position(550,95);
  feed.mousePressed(feedDog);

  addfood=createButton("add food");
  addfood.position(450,95);
  addfood.mousePressed(addFood) //readStock();
// writeStock(foodS);
}


function draw() {  
background(rgb(46,139,87))

fill(255,255,254)
textSize(15)
foodObj.display();

if(lastFed<=12)
{
  text("last feed:"+lastFed%12+"PM",200,30);

}else if(lastFed==0){
  text("last feed:12 AM",200,30);

}
else{
  text("last feed:"+lastFed+"AM",200,30)
}

/*
  writeStock(foodS)
 
  foodStock=firebase.food-1;
  happyDog1.display();
  dog1.display=false();
}*/
//else{
  dog1.addImage(dog);
dog1.display();
//}

fedTime=database.ref("feedTime")
fedTime.on("value",function (data) {
  lastFed=data.val();
  
})

//feedDog();
  drawSprites();
 //addFood();

  fill("black")
  text("FOOD REMAINING:"+foodS,200,250)
  stroke(4)

  
 
  //add styles here

}


function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}

function addFood() {
  foodS++;
  database.ref("/").update({
    food:foodS
  });
}
function feedDog() {
if(feedDog.mousePressed){

  dog.addImage(happyDog1)
happyDog1.display();
writeStock(foodS)
  foodObj.updatefoodStock(foodObj.getFoodStock()-1);
  database.ref("/").update({food:foodObj.getFoodStock(),FeedTime:hour()
  }
  )
}
 
}

