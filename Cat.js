function cat(){
    console.log("hello")
}
cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}