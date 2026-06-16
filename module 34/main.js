/*function printName(){
    document.write('John')
    document.write('<br>')
    setTimeout(function(){document.write('John')},3000)
    document.write('Smith')

}

printName();
*/
/*

function printName(){
    var teksti = document.getElementById("text");

    teksti.innerHTML = "John<br>";
    setTimeout(function(){
        teksti.innerHTML += "Doe<br>"
    },3000)

    teksti.innerHTML += "Smith<br>";

    
}
*/
printName();

var colors = ["Red","Green","Purple","Blue","Yellow"];

function changeBgColor(){
    document.querySelector('body').style.backgroundColor= colors[Math.floor(Math.random()* colors.length)];
}
setInterval(changeBgColor,2000);

var hellos = ["Hello","Hi there","How are you doing","Welcome","Enjoy"];

function changeBgHello(){
    document.getElementById("hellos")('h2').innerHTML= hellos[Math.floor(Math.random()* hellos.length)];
}
setInterval(changeBgHello,2000);