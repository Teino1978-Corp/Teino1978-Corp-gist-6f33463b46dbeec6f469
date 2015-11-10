var foo = {
    a: function() {
           alert(this.a);
      },
    b: function() {
           this._b +=;
           alert (this._b);
      }

var moo = new Something(); // some object 
var moo.func.foo = foo; // right now this is moo.func

var moo;
Something.prototype = foo;
moo = new Something();
moo.a();