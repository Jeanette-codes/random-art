var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var imageData = ctx.getImageData(0,0,c.width,c.height);
var a, modW, modH, alpha = 255, w, h, counter = 1;
var midWidth = (c.width / 2);
var midHeight = (c.height / 2);

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset() {
    alpha = 255;
    counter = 1;
}


//for (var i = 0; i < imageData.data.length; i += 4) {
    //var num1 = getRandomInt(0,255);
    //var num2 = getRandomInt(0,255);

    ////red
    //imageData.data[i] = 0;

    ////green
    //imageData.data[i+1] = getRandomInt(0,255); 

    ////blue
    //imageData.data[i+2] = getRandomInt(0,255); 

    ////alpha
    //imageData.data[i+3] = getRandomInt(0,255); 
//}

//ctx.putImageData(imageData, 0, 0);

var id = ctx.createImageData(1,1); // only do this once per page
var d  = id.data;                        // only do this once per page

var brush = function(pixels, startX, startY) {
    // goes from black to transparent
    for (var i = pixels; i >= 0; i--) {
        modW = getRandomInt(-1,1);
        modH = getRandomInt(-1,1);
        startX = startX + modW;
        startY = startY + modH;

        d[0]   = 0; //red 
        d[1]   = 0; //green
        d[2]   = 0; //blue

        counter = counter + 1;
        if(counter === Math.floor(i/250)){
            alpha--;
            counter = 1;
        }
        d[3] = alpha;

        ctx.putImageData( id, startX, startY );     
    }
}


$(document).ready(function(){
    brush(20000, midWidth, midHeight);
    reset();

    $(window).on('click',function(){
        canvas.width = canvas.width;
        for(var f = 0; f <= 2; f++){
            brush(20000, midWidth, midHeight);
            reset();
        }
    });
});

// to save the image
//var img = c.toDataURL("image/png");
//document.write('<img src="'+img+'"/>');
