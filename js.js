const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cloud = document.getElementById("cloud");
const enderman = document.getElementById("enderman");

var count = 0;

// var road = [
//         new road("img/minecratfFon.jpg", 0),
//         new road("img/minecratfFon.jpg", canvas.width)
// ];
// function Update () {
//     road[0].Update(road[1]);
//     road[1].Update(road[0]);
// }
document.addEventListener("keydown",function(event){
    jump();
});

function jump() {
        if (dino.classList != "jump") {
            dino.classList.add("jump")
        }
        setTimeout( function() {
            dino.classList.remove("jump")
        }, 500)
}
let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));  
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("left"));
    let endermanLeft = parseInt(window.getComputedStyle(enderman).getPropertyValue("left"));
    
    if ((cactusLeft < 400 && cactusLeft > 300 && dinoTop >= 140) || (endermanLeft < 450 && endermanLeft > 350 && dinoTop >= 140)) {
        alert("GAME OVER!!!");
    }
}, 10)

var object = document.getElementById('dino');
var coords = object.getBoundingClientRect();

coords.top + window.scrollY; // расстояние от начала страницы
coords.left; // расстояние от левого края
if (coords.left < -10) {
   count++;
   document.writeln(count);
}