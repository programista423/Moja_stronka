let facts=[
"Python powstał w 1991 roku 🐍",
"HTML buduje strukturę stron 🌐",
"GitHub przechowuje kod 🐙",
"JavaScript daje stronie życie ⚡"
];


let text="Tworzę projekty i uczę się kodu 🚀";

let i=0;


function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text[i];

i++;

setTimeout(typing,80);

}

}


typing();



function clock(){

let d=new Date();

document.getElementById("clock").innerHTML=
"⏰ "+d.toLocaleTimeString();

}


setInterval(clock,1000);



function openPage(id){

document.getElementById("menu").style.display="none";

document.querySelectorAll(".page").forEach(x=>{
x.style.display="none";
});


document.getElementById(id).style.display="block";

}



function back(){

document.querySelectorAll(".page").forEach(x=>{
x.style.display="none";
});

document.getElementById("menu").style.display="block";

}



function theme(){

document.body.classList.toggle("light");

}



function color(){

document.body.classList.toggle("color");

}



function randomFact(){

let r=Math.floor(Math.random()*facts.length);

document.getElementById("output").innerHTML=facts[r];

}



function terminal(){

document.getElementById("output").innerHTML=
`
🖥️ TERMINAL<br><br>
> System online<br>
> Portfolio loaded<br>
> Status: OK 🚀
`;

}
