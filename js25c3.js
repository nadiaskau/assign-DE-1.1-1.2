'use strict';
console.log('Truth table for conjuction');
console.log('var1\tvar2\tvar1&&var2');
var var1 = true;
var var2 = true;
var var3 = var1 && var2;

console.log(var1 + '\t' + var2 + '\t' + var3 + '\t');

var var1 = true;
var var2 = false;
var var3 = var1 && var2;

console.log(var1 + '\t' + var2 + '\t' + var3 + '\t');

var var1 = false;
var var2 = true;
var var3 = var1 && var2;

console.log(var1 + '\t' + var2 + '\t' + var3 + '\t');

var var1 = false;
var var2 = false;
var var3 = var1 && var2;

console.log(var1 + '\t' + var2 + '\t' + var3 + '\t');



