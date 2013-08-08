var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var imageData = ctx.getImageData(0,0,c.width,c.height);
var a, modW, modH, alpha = 255, w, h, counter = 1;

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var midWidth = (c.width / 2);
var midHeight = (c.height / 2);

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

for (var i = 10000; i >= 0; i--) {
    modW = getRandomInt(-1,1);
    modH = getRandomInt(-1,1);
    midWidth = midWidth + modW;
    midHeight = midHeight + modH;

    d[0]   = 0;
    d[1]   = 0;
    d[2]   = 0;

    counter = counter + 1;
    if(counter === Math.floor(i/250)){
        console.log('hit');
        alpha--;
        counter = 1;
    }
    d[3] = alpha;
    //d[3]   = Math.floor(i/Math.floor(i/255));

    console.log(d[3]);
    ctx.putImageData( id, midWidth, midHeight );     
}

console.log('t',255*39);
console.log(Math.floor(100/100/255), 00000/39);
console.log(getRandomInt(-1,1));

