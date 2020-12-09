//SOAL 1
console.log("--SOAL 1--");

var nama = "Junaedi";
var peran = "Werewolf";

if (nama == "" && peran == "") {
    console.log('Nama harus diisi!');
}

else if (nama == "John" && peran == "") {
    console.log('Halo John, pilih peranmu untuk memulai game!')
}

else if (nama == "Jane" && peran == "Penyihir") {
    console.log('Selamat datang di Dunia Werewolf, Jenita');
    console.log('Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.');
}

else if (nama == "Junaedi" && peran == "Werewolf") {
    console.log('Selamat datang di Dunia Werewolf, Junaedi');
    console.log('Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!');
}

//SOAL 2
console.log("\n--SOAL 2--");

var hari = 29; 
var bulan = 2; 
var tahun = 1940;

if (tahun >= 1900 && tahun <= 2200) {
    switch (bulan) {
        case 1 : {
            if (hari >=1 && hari <= 31) {
                console.log(hari + ' ' + 'Januari' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 2 : {
            if (hari >=1 && hari <= 28 && tahun % 4 != 0) {
                console.log(hari + ' ' + 'Februari' + ' ' + tahun);
                break;
            }
            else if (hari >=1 && hari <= 29 && tahun % 4 == 0) {
                console.log(hari + ' ' + 'Februari' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        
        }

        case 3 : {
            if (hari >=1 && hari <= 31) {
                console.log(hari + ' ' + 'Maret' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 4 : {
            if (hari >=1 && hari <= 30) {
                console.log(hari + ' ' + 'April' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 5 : {
            if (hari >=1 && hari <= 31) {
                console.log(hari + ' ' + 'Mei' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 6 : {
            if (hari >=1 && hari <= 30) {
                console.log(hari + ' ' + 'Juni' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 7 : {
            if (hari >=1 && hari <= 31) {
                console.log(hari + ' ' + 'Juli' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 8 : {
            if (hari >=1 && hari <= 31) {
                console.log(hari + ' ' + 'Agustus' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 9 : {
            if (hari >=1 && hari <= 30) {
                console.log(hari + ' ' + 'September' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 10 : {
            if (hari >=1 && hari <= 31) {
                console.log(hari + ' ' + 'Oktober' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 11 : {
            if (hari >=1 && hari <= 30) {
                console.log(hari + ' ' + 'November' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        case 12 : {
            if (hari >=1 && hari <= 31) {
                console.log(hari + ' ' + 'Desember' + ' ' + tahun);
                break;
            }
            else {
                console.log('Tanggal invalid!');
                break;
            }
        }

        default : {
            console.log('Tanggal invalid!');
        }
    }
}

else {
    console.log("Tanggal invalid");
}