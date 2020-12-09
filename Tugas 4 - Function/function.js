//SOAL 1
console.log('--SOAL 1--');

function teriak () {
    return "Halo Sanbers!";
}

console.log(teriak());

//SOAL 2
console.log('\n--SOAL 2--');

function kalikan(num1, num2) {
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

//SOAL 3
console.log('\n--SOAL 3--');

function introduce (name, age, address, hobby) {
    return "Nama saya " + name + ", " + "umur saya " + age + " tahun, " + "alamat saya di " + address + ", " + "dan saya punya hobi yaitu " + hobby + "!";
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);

console.log(perkenalan);