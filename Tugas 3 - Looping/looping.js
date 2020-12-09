//SOAL 1
console.log('--SOAL 1--');

var i = 2;

console.log('LOOPING PERTAMA');

while (i <= 20) {
    console.log(i + ' - I love coding');
    i += 2;
}

var j = 20;

console.log('\nLOOPING KEDUA');

while (j >= 2) {
    console.log(j + ' - I will become a mobile developer');
    j -= 2;
}

//SOAL 2
console.log('\n--SOAL 2--');

for (var k = 1; k <= 20; k++) {
    if ((k % 2 != 0) && (k % 3 != 0)) {
        console.log(k + ' - Santai');
    }
    else if ((k % 2 != 0) && (k % 3 == 0)) {
        console.log(k + ' - I Love Coding');
    }
    else if (k % 2 == 0) {
        console.log(k + ' - Berkualitas');
    }
}

//SOAL 3
console.log('\n--SOAL 3--');

for (var l = 1; l <= 4; l++) {
    for (var m = 1; m <= 8; m++) {
        process.stdout.write('#');
    }
    process.stdout.write('\n');
}

//SOAL 4
console.log('\n--SOAL 4--');

for (var a = 1; a <= 7; a++) {
    for (var b = a; b >= 1; b--) {
        process.stdout.write('#');
    }
    process.stdout.write('\n');
}

//SOAL 5
console.log('\n--SOAL 5--');

for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
        var total = row + col;
        if (total % 2 == 0) {
            process.stdout.write(' ');
        }
        else {
            process.stdout.write('#');
        }
    }
    process.stdout.write('\n');
}