var readBooks = require('./callback.js');
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Naruto', timeSpent: 2000}
];


function bacaBuku(time, i) {
    readBooks(time, books[i], function(sisaWaktu) {
        if (sisaWaktu != 0) {
            if (i + 1 < books.length) {
                bacaBuku(sisaWaktu, i + 1);
            }
        }
    });
}

bacaBuku(10000, 0);