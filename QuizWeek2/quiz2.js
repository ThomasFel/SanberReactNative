//SOAL CLASS SCORE
console.log('--SOAL CLASS SCORE--');

class Score {
    constructor(subject, points, email) {
        this.subject = subject;
        this.points = points;
        this.email = email;
    }
    average() {
        if (this.points.length > 0) {
            var total = 0;
            for (var i = 0; i < this.points.length; i++) {
                total += this.points[i];
            }
            return total / this.points.length;
        }
        else {
            return this.points;
        }
    }
}

//SOAL VIEW SCORES
console.log('\n--SOAL VIEW SCORES--');

var viewScores = (data, subject) => {
    var param = ["email", "subject", "points"];
    var output = [];
    for (var i = 0; i < data.length; i++) {
        var object = {};
        object[param[0]] = data[i][0];
        object[param[1]] = subject;

        for (var j = 0; j < data[i].length; j++) {
            if (subject === "quiz-1") {
                object[param[2]] = data[i][1];
            }
            else if (subject === "quiz-2") {
                object[param[2]] = data[i][2];
            }
            else if (subject === "quiz-3") {
                object[param[2]] = data[i][3];
            }
        }
        output[i] = object;
    }
    output.shift();
    console.log(output);
}

var data = [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
];

viewScores(data, "quiz-1");
viewScores(data, "quiz-2");
viewScores(data, "quiz-3");

//SOAL RECAP SCORES
console.log('\n--SOAL RECAP SCORES--');

var recapScores = (data) => {
    var sum = (val, currVal) => val + currVal;
    for (var i = 1; i < data.length; i++) {
        console.log("Email: " + data[i][0]);
        var grade = [];
            for (var j = 1; j < data[i].length; j++) {
                grade.push(data[i][j]);
            }

        var avg = grade.reduce(sum) / grade.length;
        console.log("Rata-rata: " + avg.toFixed(1));

        var predikat;

        if (avg > 90) {
            predikat = "Honour";    
        }
        else if (avg > 80) {
            predikat = "Graduate";
        }
        else if (avg > 70) {
            predikat = "Participant";
        }
        else {
            predikat = "Tidak Lulus";
        }
        console.log("Predikat: " + predikat + "\n");
    }
}

recapScores(data);