class Car{
  constructor(color,convertible){
    this.color=color;
    this.convertible=convertible;
    this.speed=0;

   }
   accelerate(acc){
     this.speed=acc;
   }
   decelerate(decc){
    this.speed=this.speed-decc;
   }
}
module.exports=Car;
