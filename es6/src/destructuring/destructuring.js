/**
 * Created by kusunams on 12/21/14.
 */

// ---------------------- Array Pattern ---------------------------------------------
// Variables can be initialized in one go. The following two lines have the same effect,
// the first one is employing an array pattern.
var [m, d, y] = [3, 14, 1977];
console.log("m = " + m + "  d = " + d + "  y = " + y);

// Swapping two variables is rather trivial, this one works just as expected.
// Internally, it does the sequence as if there is a temporary variable temp and the usual value exchange.
var x = 3,
    y = 4;
var [x, y] = [y, x];
console.log([x,y]);

// Another typical use of array restructuring is for a function which has multiple return values.
// We don’t need to wrap it in an object anymore. Also, there is no need to accept all elements in the array.
function now() {
    return [2, 6, 2013, 8, 0];
}
var [m, d] = now(); // m = 2, d = 6
console.log([m,d]);
var [,,year] = now(); // year = 2013
console.log(year);

// ---------------------- Object Pattern ---------------------------------------------
//we can easily pick the ones we are interested in while ignoring the rest
function today() {
    return { d: 6, m: 2, y: 2013 };
}
var { m: month, y: year } = today(); // month = 2, year = 2013
console.log("month = " + month + "  year = " + year);

// Looping through Object
var books = [
    {
        title: 'Book1',
        publishYear: '2013',
        author: 'Douglas Crackford'
    },
    {
        title: 'Book2',
        publishYear: '2014',
        author: 'Brad Green'
    }
];
books.forEach(function({title: title, author: author}){ console.log(title, author) });