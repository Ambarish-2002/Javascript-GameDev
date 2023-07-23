const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 10;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';

const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';

const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

let layer1Roll_1 = 0;
let layer1Roll_2 = 2400;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer4, layer1Roll_1 , 0);
    ctx.drawImage(backgroundLayer4, layer1Roll_2 , 0);
    
    if(layer1Roll_1<-2400) layer1Roll_1 = 2400;
    else layer1Roll_1-=gameSpeed;

    if(layer1Roll_2<-2400) layer1Roll_2 = 2400;
    else layer1Roll_2-=gameSpeed;

    requestAnimationFrame(animate);
    
}
animate();
