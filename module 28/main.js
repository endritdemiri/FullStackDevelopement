var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var button4 = document.getElementById('btn4')
var stili = document.getElementById('style')
var click = document.getElementById("dsbtn")
var text = document.getElementById("new")
var css = document.getElementById('css')
var stark = document.getElementById('style_css')

button1.onclick = function(){

    alert('Hello')
}


button2.onmousemove = function(){

    alert('You left me')
}

button3.onmouseover = function(){

    alert('Why are you hovering me')
}

button4.onmousewheel = function(){

    alert('Stop scrolling me')
}

stili.onclick = function(){

    alert('Lexo titullin')
}

click.onclick = function(){

    text.style.color='lightblue';
    text.style.backgroundColor='darkred';
    text.style.fontSize="120px";
    text.style.textAlign='center';
    text.style.padding='15px';
}

css.onclick = function(){
    stark.setAttribute("class","test");
}
