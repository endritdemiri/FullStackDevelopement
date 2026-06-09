for (i = 0; i<5; i++){
    console.log(i)
}

var names = ['Endrit','Arti','Rron','Aron']
var x;

for(x of names){
    console.log(x)
}

console.log(names)

var emrat = [];

var input = document.getElementById('name-input');
var button = document.getElementById('button')
var lista = document.getElementById('lista')

button.onclick = function () {
    if (input.value !== "") {
        emrat.push(input.value);

        lista.innerHTML = "";

        for (let i = 0; i < emrat.length; i++) {
            lista.innerHTML += `<li>${emrat[i]}</li>`;
        }

        input.value = "";
    }
};


