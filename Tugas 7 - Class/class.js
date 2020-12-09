//SOAL 1
console.log('--SOAL 1--');

//RELEASE 0
console.log('\n**RELEASE 0**');
class Animal {
    constructor (name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }
    get name() {
        return this._name;
    }
    get legs() {
        return this._legs;
    }
    get cold_blooded() {
        return this._cold_blooded;
    }
    set name(x) {
        this._name = x;
    }
    set legs(x) {
        this._legs = x;
    }
    set cold_blooded(x) {
        this._cold_blooded = x;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

//RELEASE 1
console.log('\n**RELEASE 1**');

class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }
    yell() {
        console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();

//SOAL 2
console.log('\n--SOAL 2--');

class Clock {
    constructor ({ template }) {
        this.template = template;
    }
    render() {
        var date = new Date();
        
        this.hours = date.getHours();
        if (this.hours < 10) {
            this.hours = '0' + this.hours;
        }

        this.mins = date.getMinutes();
        if (this.mins < 10) {
            this.mins = '0' + this.mins;
        }

        this.secs = date.getSeconds();
        if (this.secs < 10) {
            this.secs = '0' + this.secs;
        }
        
        this.output = this.template
        .replace('h', this.hours)
        .replace('m', this.mins)
        .replace('s', this.secs);

        console.log(this.output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();