/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Calc = require('../../app/models/calc.js');

describe('Calc', function(){ 
  describe('.add', function() {
    it('should add two numbers', function(){
      var sum = Calc.add(2,3);
      expect(sum).to.equal(5);

    });
  });
  describe('.sub', function() {
    it('should subtract two numbers', function(){
      var diff = Calc.sub(5,3);
      expect(diff).to.equal(2);

    });
  });
  describe('.distance', function() {
    it('should calculate the distance between two points', function(){
      var dist = Calc.distance(3, -3, 5, -5);
      expect(dist).to.equal(2.8);

    });
  });
  describe('.line', function() {
    it('should calculate the slope of a line', function(){
      var line = Calc.line({x:3, y:-2}, {x:-3, y:-6});
      expect(line).to.equal('0.7x + -4');

    });
  });
  describe('.trip', function() {
    it('should calculate the total of multiple points', function(){
      var trip = Calc.trip([{x:1,y:1},{x:2, y:2}, {x:3, y:3}, {x:4, y:4}, {x:5,y:5}]);
      
      expect(trip).to.be.closeTo(5.65, 0.2);

    });
  });
  describe('.mean', function() {
    it('should calculate the average of multiple numbers', function(){
      var mean = Calc.mean([7, 32,92, 31]);
      
      expect(mean).to.be.closeTo(40.5, 0.2);

    });
  });
});
