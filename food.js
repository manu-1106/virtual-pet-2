
class Food{
    
    constructor(){
    
this.foodStock;
var lastfed;

    }
    preload(){
       foodStock=loadImage('milk.png')
    }
 getFoodStock(){
var foodStockRef=database.ref('food')
foodStockRef.on("value",function(data){
    foodStock=data.val();
})
 } 
 updateFoodStock(){
database.ref('/').update({
    foodStock:foodS
})
 }  
 deductFoodStock(){
     
 }
 display(){
     var x=80,y=199;
     imageMode(CENTER)
     //image(foodStock,720,220,70,70)
     
     if(this.foodStock!=0){
         for(var i=0;i<this.foodStock;i++){
             if(i%10==0){
                 x=80
                 y=y+50
             }
             foodStock=addImage("milk.png")
              image(foodStock,x,y,50,50)
             x=x+30;
         }
     }
     if(addFood.mousePessed){
        foodS++ 
        foodStock=foodS+1
     }
    }
}