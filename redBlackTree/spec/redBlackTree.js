/* global redBlackTree, describe, it, expect, should */

describe('redBlackTree()', function () {
  //'use strict';
  beforeEach(function(){
    redBlackTree = new RedBlackTree(9);
    
  })

  it('Verify class exists', function () {
    expect(RedBlackTree).to.be.a('function');
  });

  it('Verify Color, left, right, value to be a property', function () {
    redBlackTree.should.have.property('right');
    redBlackTree.should.have.property('left');
    redBlackTree.should.have.property('color');
    redBlackTree.should.have.property('value');
  });

  it('Tree has a removeChild and addChild function', function () {
    expect(redBlackTree.addChild).to.be.a('function');
    expect(redBlackTree.removeChild).to.be.a('function');
  });

  // Add more assertions here
});
