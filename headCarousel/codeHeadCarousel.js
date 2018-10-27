
$('.carousel').carousel({
    interval: 6000,
    pause: false,

})


setTimeout(function(){
    let printText = "Front-End Developer";
    let i = 0;
    let cl = setInterval(function(){
        if (document.getElementById("autoPrintTextId").innerHTML.length != printText.length) {
            document.getElementById("autoPrintTextId").innerHTML += printText[i];
            i++;
        } else {
            clearInterval(cl);
            i=0;
        }

    },150)
},1500)



// $('.carousel').on('slide.bs.carousel', function () {
//     // object-position: 100% 100%;
//     // transform: scale(1.2, 1.2);
//     console.log($(".carousel-inner img").position())
//   })


