var RedBlackTree = function (value,color){
  this.color = color ? color : 'black' ;
  this.left = null;
  this.right = null;
  this.parent = null;
  this.value = value;
}

RedBlackTree.prototype.addChild = function(value) {
  this.left = new RedBlackTree(value)
  // body...
};


RedBlackTree.prototype.removeChild = function(first_argument) {
  // body...
};