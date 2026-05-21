function showmessage(){


    alert("this is my first fuction")
}

showmessage()

function sum(numri1,numri2){
    return numri1+numri2 
}

console.log(sum(32.42));

function toCelcius(Farenhait){
    return (5/9)* (Farenhait - 32);
}

var result = toCelcius(54)

console.log("Farenhait in celcius is" + result+ "degress")

function calculator(number3,number4){

    return number3+number4
    return number3-number4
    return number3*number4
    return number3/number4
}

calculator()

function digitalschool(){
    var localVar ='DigitalSchool'
    alert (localVar)
}

digitalschool()

function siperfaqja_e_trekendshit(baza,lartesia){
    return baza * lartesia * 0.5
}

console.log('siperfaqja e trekendeshit eshte ' + siperfaqja_e_trekendshit(5,7))

var bmw ={

    type:"m5",
    colore:"green",
    viti_i_prodhimit:2019,
    karburanti:"Benzine"

}

alert(bmw.type)

var ndertesa ={

    lokacioni:"prishtine",
    hyrja:"A",
    nr_banorve:200,
    katet:10,

    kerkesa:function(){
        alert('banesa me qera')
    },
    get getkatet(){
        return this.katet
    },

    set setkatet(katet){
        this.katet = katet;
    }
}

alert(ndertesa.nr_banorve)

ndertesa.kerkesa()
console.log(ndertesa.getkatet)
ndertesa.setkatet=9
console.log(ndertesa.getkatet)

