const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
const slider = document.getElementById('gameSpeed');
const span = document.getElementById('speedValue');

let gameSpeed = 5;
let gameFrame = 0;

slider.addEventListener('change',
function (e){
    gameSpeed = e.target.value;
    span.innerHTML = e.target.value;
})

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

class Layer {
    
    constructor(image,speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed*this.speedModifier;
    }

    update(){
        this.speed = gameSpeed*this.speedModifier;
        this.x = gameFrame*this.speed % this.width;
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height);
    }
}

const Layer_1 = new Layer(backgroundLayer1,0.2);
const Layer_2 = new Layer(backgroundLayer2,0.4);
const Layer_3 = new Layer(backgroundLayer3,0.6);
const Layer_4 = new Layer(backgroundLayer4,0.8);
const Layer_5 = new Layer(backgroundLayer5,1);

let gameLayer = [Layer_1 , Layer_2, Layer_3,Layer_4 , Layer_5];

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    requestAnimationFrame(animate);
    gameFrame--;
    gameLayer.forEach(layer =>{
        layer.update();
        layer.draw();
    });
}
animate();
