//SOAL 1
console.log('\n--SOAL 1--');
function balikString(str) {
    var currStr = str;
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr = newStr + currStr[i];
    }
    return newStr;
}

console.log(balikString("abcde"));
console.log(balikString("rusak"));
console.log(balikString("racecar"));
console.log(balikString("haji"));

//SOAL 2
console.log('\n--SOAL 2--');

function palindrome(str) {
    for (var i = 0; i < str.length/2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("kasur rusak"));
console.log(palindrome("haji ijah"));
console.log(palindrome("nabasan"));
console.log(palindrome("nababan"));
console.log(palindrome("jakarta"));

//SOAL 3
console.log('\n--SOAL 3--');

function bandingkan(num1, num2) {
    if (num1 < num2 && num1 > 0 && num2 > 0) {
        return num2;
    }

    else if (num1 > num2 && num1 > 0 && num2 > 0) {
        return num1;
    }

    else if (num1 == num2) {
        return -1;
    }

    else if (num1 < 0 || num2 < 0) {
        return -1;
    }

    else if (num1 == undefined) {
        return 0;
    }

    else if (num2 == undefined) {
        return num1;
    }
}

console.log(bandingkan(10, 15));
console.log(bandingkan(12, 12)); 
console.log(bandingkan(-1, 10));  
console.log(bandingkan(112, 121));
console.log(bandingkan(1));
console.log(bandingkan());
console.log(bandingkan("15", "18"));


//SOAL 4
console.log('\n--SOAL 4--');
function descendingTen(num) {

    var hasil = [];
    
    if (num == undefined) {
        return -1
    }

    for (var i = 1; i <= num; i++) {
        hasil.push(i);
    }

    hasil.sort(function(a, b) {
        return b - a;
    });
    
    var hasil2 = hasil.slice(0, 10);
    var hasil3 = hasil2.join(" ");
    
    return hasil3;
}

console.log(descendingTen(10));
console.log(descendingTen(20));
console.log(descendingTen(100));
console.log(descendingTen());