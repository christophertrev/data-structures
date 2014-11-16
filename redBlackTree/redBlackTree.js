var RedBlackTree = function (value) {
  this.color = 'black';
  this.left = null;
  this.right = null;
  this.parent = null;
  this.value = value;
}

RedBlackTree.prototype.addChild = function(value) {
if ( this.parent.color === 'black' ){
  if(value < this.value){
    this.left = new RedBlackTree(value);
    this.left.paintRed();
    this.left.parent = this;
    return; 
  }
    this.right = new RedBlackTree(value);
    this.right.paintRed();
    this.right.parent = this;
    return;   
 }
 if( this.parent.color === 'red' && this.getUncle().color === 'red'){

 }
   




};



RedBlackTree.prototype.paintBlack = function (){
  this.color = 'black';
};

RedBlackTree.prototype.paintRed = function(){
  this.color = 'red';
};

RedBlackTree.prototype.getGrandParent = function(){
  if(this.parent !== null && this.parent.parent !== null){
    return this.parent.parent
  }
  return null
}

RedBlackTree.prototype.getUncle = function(){
  if(this.getGrandParent()!== null ){
    if (this.parent===this.getGrandParent().left){
      return this.getGrandParent().right;
    }else{
      return this.getGrandParent().left;
    }
  }
  return null;
}

RedBlackTree.prototype.removeChild = function(first_argument) {
  // body...
};