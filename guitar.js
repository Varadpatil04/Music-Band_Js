// Clicks 
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var word = this.innerHTML;
        makeSound(word);
        animation(word);
    });
}
// keyboards
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animation(event.key);

});


function makeSound(key){


    switch (key) {
        case "w":
            var audio = new Audio("./Guitar-sound/2.mp3");
            audio.play();
            break;
        case "a":
            var snare = new Audio("./Guitar-sound/1.mp3");
            snare.play();
            break;
        case "s":
            var kick = new Audio("./Guitar-sound/3.mp3");
            kick.play();
            break;
        case "d":
            var tom1 = new Audio("./Guitar-sound/4.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./Guitar-sound/5.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./Guitar-sound/6.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./Guitar-sound/7.mp3");
            tom4.play();
            break;
        default:
            console.log(innerHTML)
            break;
    }
}

function animation(currentkey){
    var but = document.querySelector("."+ currentkey);
    but.classList.add("pressed");

    setTimeout(function(){
        but.classList.remove("pressed")},200)
}















