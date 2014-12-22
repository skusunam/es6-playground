/**
 * Created by kusunams on 12/21/14.
 */

var myLogger = msg => console.log(msg);

//Working with "this" the "old" way
function Car() {
    var self = this;
    this._seats = 10;

    this.timeout = function() {
        setTimeout(function() {
            console.log(self._seats);
        }, 1000)
    }
}

//Working with this using arrow functions
class CarWithArrow {

    constructor(){
        this._seats = 6;
    }

    timeout() {
        // Note: If you do not use fatArrow here 'this' is local to timeout function
        setTimeout(() => {
            console.log(this._seats);
        }, 1000);
    }
}

var c = new Car();
c.timeout()

var cArrow = new CarWithArrow();
cArrow.timeout();