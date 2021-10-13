const poke = document.getElementById("poke");
const tree = document.getElementById("tree");

function jump() {
    if(poke.classList != "jump") {
        poke.classList.add("jump");

        setTimeout(function (){
            poke.classList.remove("jump");
        },300)
    }
}

let isAlive =setInterval(function () {
    //get current poke Y position on stage
    let pokeTop = parseInt(window.getComputedStyle(poke).getPropertyValue("top"));
    //get current tree X position on stage
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));

    //detect collision
    if(treeLeft < 50 && treeLeft > 0 && pokeTop >= 140) {
        //collision
        alert("T'as perdu !")
    }

},10);

document.addEventListener("keydown", function (event) {
    jump();
});