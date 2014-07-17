'use strict';
function Calc(){}

Calc.add = function(x,y){
return x + y; 
};

Calc.sub = function(x,y){
return x - y;
};

Calc.distance = function(x1, y1, x2, y2){

var xd = Math.abs(x2 - x1);
var yd = Math.abs(y2 - y1);

var xdyd = Math.sqrt(Math.pow(xd, 2) + Math.pow(yd, 2));

return parseFloat(xdyd.toFixed(1));
};

Calc.line = function(p1, p2){

var m = parseFloat((p2.y - p1.y)/(p2.x - p1.x));
var b = p1.y - (m * (p1.x));
    m = m.toFixed(1);

var sign = b < 0 ? '-' : '+';
b = Math.abs(b);
var lineString = m + 'x + ' + sign + b;

return lineString;
};

Calc.trip = function(a1){

var tripDistance = 0;
var px1 = a1[0].x;
var py1 = a1[0].y;

for (var i = 1; i < a1.length; i++){
  var px2 = a1[i].x;
  var py2 = a1[i].y;
  tripDistance += Calc.distance(px1, py1, px2, py2);
  px1 = px2;
  py1 = py2;
}
return tripDistance;
};

Calc.mean = function(a1){
var mean = 0;
for(var i = 0; i < a1.length; i++){
  mean += a1[i];
}

mean = parseFloat(mean / a1.length);
return mean;
};
module.exports = Calc;
