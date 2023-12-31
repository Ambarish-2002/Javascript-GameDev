/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 50;
const enemiesArray = [];
let gameFrame = 0;
let staggerFrames = 5;

class Enemy{
    constructor(){
        // ENEMY TYPE 2
        // this.enemyImage = new Image();
        // this.enemyImage.src = 'enemy2.png';
        // this.flapSpeed = Math.random() * 10;
        // this.speed = Math.random() * 4 + 1;
        // this.spriteWidth = 266;
        // this.spriteHeight = 188;
        // this.width = this.spriteWidth/2.5;
        // this.height = this.spriteHeight/2.5;
        // this.x = Math.random() * (canvas.width - this.width);
        // this.y = Math.random() * (canvas.height - this.height);
        // this.frame = 0;
        // this.angle = Math.random()*3.14;
        // this.curve = Math.random() * 6 + 0.1;

        // ENEMY TYPE 3
        // this.enemyImage = new Image();
        // this.enemyImage.src = 'enemy3.png';
        // this.flapSpeed = Math.random() * 10;
        // this.speed = Math.random() * 4 + 1;
        // this.spriteWidth = 218;
        // this.spriteHeight = 177;
        // this.width = this.spriteWidth/2.5;
        // this.height = this.spriteHeight/2.5;
        // this.x = Math.random() * (canvas.width - this.width);
        // this.y = Math.random() * (canvas.height - this.height);
        // this.frame = 0;
        // this.angle = Math.random()*3.14;
        // this.angleSpeed = Math.random() * 2 + 0.5;
        // this.curve = Math.random() * 200 + 10;

        //Enemy 4 
        this.enemyImage = new Image();
        this.enemyImage.src = 'enemy4.png';
        this.flapSpeed = Math.random() * 10;
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth/2.5;
        this.height = this.spriteHeight/2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.angle = Math.random()*3.14;
        this.angleSpeed = Math.random() * 2 + 0.5;
        this.curve = Math.random() * 200 + 10;
        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random() * (canvas.height - this.height);

    }

    update(){
        if(gameFrame%60 == 0){
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x-= dx/70;
        this.y-= dy/70;
        // this.x = canvas.width/2 * Math.sin(this.angle * Math.PI/180) + (canvas.width/2 - this.width/2);
        // this.y =  canvas.height/2 * Math.cos(this.angle * Math.PI/180) + (canvas.height/2 - this.height/2);
        this.frame = Math.floor(gameFrame / 2 )%6;
        if(this.x < -this.width) this.x = canvas.width;
        this.angle+=this.angleSpeed;
    }

    draw(){
        ctx.drawImage(this.enemyImage,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,
            this.x,this.y,this.width,this.height);
    }
}

for(let i=0;i<numberOfEnemies;i++){
    enemiesArray.push(new Enemy());
}

function animate(){

    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    });
    requestAnimationFrame(animate);
    gameFrame++;
}

animate();