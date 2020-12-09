//SOAL 1
console.log('--SOAL 1--');

function range(startNum, finishNum) {

    var hasil = [];

    if (startNum < finishNum) {
        for (var i = startNum; i <= finishNum; i++) {
            hasil.push(i);
        }
    }

    else if (startNum > finishNum) {
        for (var i = startNum; i >= finishNum; i--) {
            hasil.push(i);
        }
    }

    else if (startNum == null || finishNum == null) {
        return -1;
    }

    return hasil;
}

console.log(range(1, 10));
console.log(range(1));
console.log(range(11, 18));
console.log(range(54, 50));
console.log(range());

//SOAL 2
console.log('\n--SOAL 2--');

function rangeWithStep(startNum, finishNum, step) {
    var hasil = [];

    if (startNum < finishNum) {
        for (var i = startNum; i <= finishNum; i += step) {
            hasil.push(i);
        }
    }

    else if (startNum > finishNum) {
        for (var i = startNum; i >= finishNum; i -= step) {
            hasil.push(i);
        }
    }

    return hasil;
}

console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(11, 23, 3));
console.log(rangeWithStep(5, 2, 1));
console.log(rangeWithStep(29, 2, 4));

//SOAL 3
console.log('\n--SOAL 3--');
function sum(startNum, finishNum, step) {
    var hasil = [];

    if (startNum === undefined) {
        return 0;
    }

    else if (finishNum === undefined) {
        return startNum;
    }

    step = (arguments[2] || 1);

    if (startNum < finishNum) {
        for (var i = startNum; i <= finishNum; i += step) {
            hasil.push(i);
        }
    }

    else if (startNum > finishNum) {
        for (var i = startNum; i >= finishNum; i -= step) {
            hasil.push(i);
        }
    }

    return hasil.reduce ((a, b) => a + b, 0);
}

console.log(sum(1, 10))
console.log(sum(5, 50, 2))
console.log(sum(15, 10))
console.log(sum(20, 10, 2))
console.log(sum(1))
console.log(sum())

//SOAL 4
console.log('\n--SOAL 4--');
function dataHandling(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Nomor ID: " + arr[i][0]);
        console.log("Nama Lengkap: " + arr[i][1]);
        console.log("TTL: " + arr[i][2] + ' ' + arr[i][3]);
        console.log("Hobi: " + arr[i][4]);
        console.log(" ");
    }
    return "";
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

console.log(dataHandling(input));

//SOAL 5
console.log('\n--SOAL 5--');
function balikKata(str) {
    var currStr = str;
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr = newStr + currStr[i];
    }
    return newStr;
}

console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Sanbers"));

//SOAL 6
console.log('\n--SOAL 6--');

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data) {
    //OUTPUT PERTAMA
    data.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(data);

    //OUTPUT KEDUA
    var pisah = data[3].split("/");
    switch(pisah[1]) {
        case '01': {
            console.log('Januari');
            break;
        }
        case '02': {
            console.log('Februari');
            break;
        }
        case '03': {
            console.log('Maret');
            break;
        }
        case '04': {
            console.log('April');
            break;
        }
        case '05': {
            console.log('Mei');
            break;
        }
        case '06': {
            console.log('Juni');
            break;
        }
        case '07': {
            console.log('Juli');
            break;
        }
        case '08': {
            console.log('Agustus');
            break;
        }
        case '09': {
            console.log('September');
            break;
        }
        case '10': {
            console.log('Oktober');
            break;
        }
        case '11': {
            console.log('November');
            break;
        }
        case '12': {
            console.log('Desember');
            break;
        }
        default: {
            console.log('Bulan salah')
        }
    }
    
    //OUTPUT KETIGA
    var urut = pisah.sort(function(a, b) {
        return b - a;
    });
    console.log(urut);

    //OUTPUT KEEMPAT
    var pisah2 = data[3].split("/");
    var gabung = pisah2.join("-");
    console.log(gabung);

    //OUTPUT KELIMA
    var nama = data[1].slice(0, 14);
    console.log(nama);
}

dataHandling2(input);