const canvas = document.getElementById('canvas1');
const ctx  = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let gameframes = 0;
const staggerFrames = 5; // slowing down the animation
const spriteAnimations = [];

const animationStates = [
    {
        name: 'idle',
        frames:7
    },
    {
        name: 'jump',
        frames:7
    }
]

animationStates.forEach((state,index) =>{
    let frames = {
        loc: [],
    }
    for(let j = 0; j<state.frames;j++)
    {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX , y:positionY})
    }

    spriteAnimations[state.name] = frames;
})
console.log(spriteAnimations)
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.drawImage(image , sx, sy , sw, sh , dx , dy , dw,dh) nine arguments 
    
    let position = Math.floor(gameframes / staggerFrames) % spriteAnimations["jump"].loc.length;
    frameX = spriteWidth * position;
    frameY = spriteAnimations["jump"].loc[position].y;
    ctx.drawImage(playerImage,frameX ,frameY
    ,spriteWidth,spriteHeight,0,0,CANVAS_WIDTH,CANVAS_HEIGHT,);
    requestAnimationFrame(animate);

    gameframes++;
};

animate();