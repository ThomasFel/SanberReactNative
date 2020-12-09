var readBooksPromise = require('./promise.js');
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Naruto', timeSpent: 2000}
];

function bacaBuku(time, i) {
    readBooksPromise(time, books[i])
    .then (function(sisaWaktu) {
        if (sisaWaktu != 0) {
            if (i + 1 < books.length) {
                bacaBuku(sisaWaktu, i + 1);
            }
        }
    })
    .catch(function(sisaWaktu) {
        return sisaWaktu;
    });
}

bacaBuku(10000, 0);