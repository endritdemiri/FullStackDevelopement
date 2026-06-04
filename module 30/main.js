var mosha = 17
var input = document.getElementById('input_id')
var button = document.getElementById('button_id')
var text = document.getElementById('text_id')
var input1 = document.getElementById('input_age')
var button1 = document.getElementById('button_mosha')
var show = document.getElementById('text_mosha')

if(mosha>=18){
    console.log('You can drive')
}
else{
    console.log('you canoot drive')
}

button.onclick = function(){
    text.innerHTML= input.value;
}

button1.onclick = function(){
    
    if (input1.value>18){
        show.innerHTML = "You can drive";

    }

    else if (input1 == 18){
        show.innerHTML = "Congrats on the first time driving"
    }

    else{
        show.innerHTML="You canoot drive"
    }
    
}


var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var button_add = document.getElementById('add')
var button_substract = document.getElementById('substract')
var button_multiply = document.getElementById('multiply')
var button_divide = document.getElementById('divide')
var result = document.getElementById('result')

button_add.onclick=function(){
    result.innerHTML=parseInt(num1.value) + parseInt(num2.value)
}

button_substract.onclick=function(){
    result.innerHTML=parseInt(num1.value) - parseInt(num2.value)
}

button_multiply.onclick=function(){
    result.innerHTML=parseInt(num1.value) * parseInt(num2.value)
}

button_divide.onclick=function(){
    result.innerHTML=parseInt(num1.value) / parseInt(num2.value)
}

button

