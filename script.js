var i = 0;
var images = [];
var time = 2000;

images[0] = 'img/gitar.jpg';
images[1] = 'img/renang.jpg';
images[2] = 'img/coding.jpg';
images[3] = 'img/game.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    }
    else{
        i=0;
    } 
    setTimeout("changeImg()", time);
}

window.onload =changeImg