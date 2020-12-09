//SOAL 1
console.log('--SOAL 1--');

function arrayToObject(arr) {
    var orang = {};
    var now = new Date();
    var thisYear = now.getFullYear();

    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1 + '.' + arr[i][0] + arr[i][1] + ' :');
        orang.firstName = arr[i][0];
        orang.lastName = arr[i][1];
        orang.gender = arr[i][2];
        if (arr[i][3] === undefined || arr[i][3] > thisYear) {
            orang.age = "Invalid Birth Year";
        }
        else {
            orang.age = thisYear - arr[i][3];
        }
        console.log(orang);
    }

    if (arr[0] === undefined) {
        console.log('');
    }
}

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people);
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2);

arrayToObject([]);

//SOAL 2
console.log('\n--SOAL 2--');

function shoppingTime(memberId, money) {
    if (memberId === undefined || memberId === '') {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
    else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    }

    var data = {};
    data.memberId = memberId;
    data.money = money;
    var order = [
        'Sepatu Stacattu',
		'Baju Zoro',
		'Baju H&N',
		'Sweater Uniklooh',
		'Casing Handphone',
    ];

    var isOrder = [];

    for (var i = 0; i < order.length; i++) {
        if (money >= 1500000) {
            isOrder.push(order[0]);
            money -= 1500000;
        }
        else if (money >= 500000) {
            isOrder.push(order[1]);
            money -= 500000;
        }
        else if (money >= 250000) {
            isOrder.push(order[2]);
            money -= 250000;
        }
        else if (money >= 175000) {
            isOrder.push(order[3]);
            money -= 175000;
        }
        else if (money >= 50000) {
            isOrder.push(order[4]);
            money -= 50000;
            break;
        }
    }
    data.listPurchased = isOrder;
	data.changeMoney = money;
	return data;
}
   
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

//SOAL 3
console.log('\n--SOAL 3--');

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var angkot = [{}, {}];
    var asal = '';
    var tujuan = '';

    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < arrPenumpang[i].length; j++) {
            if (j === 0) {
                angkot[i].penumpang = arrPenumpang[i][j];
            }
            else if (j === 1) {
                angkot[i].naikDari = arrPenumpang[i][j];
                angkot[i].tujuan = arrPenumpang[i][j+1];
            }
            else if (j === 2) {
                asal = arrPenumpang[i][j - 1];
                tujuan = arrPenumpang[i][j];
                var jarak = 0;
                for (var k = 0; k < rute.length; k++) {
                    if (rute[k] === asal) {
                        for (var l = k+1; l < rute.length; l++) {
                            jarak++;
                            if (rute[l] === tujuan) {
                                var bayar = jarak * 2000;
                                angkot[i].bayar = bayar;
                            }
                        }
                    }
                }
            }
        }
    }
    return angkot;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));