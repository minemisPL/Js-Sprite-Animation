const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const getSpriteAnimations = (animationData, spriteWidth, spriteHeight) => {
    const animations = new Map();

    animationData.forEach((animation, index) => {
        const frames = {
            location: [],
        }

        for (let i = 0; i < animation.framesQuantity; i++) {
            const positionX = i * spriteWidth;
            const positionY = index * spriteHeight;
            const location = {x: positionX, y: positionY};

            frames.location.push(location);
        }

        animations.set(animation.name, frames);
    })

    return animations;
}

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const SPRITE_WIDTH = 575
const SPRITE_HEIGHT = 523

const STAGGER_FRAMES = 4
let gameFrame = 0;

const playerImage = new Image()
playerImage.src = 'media/shadow_dog.png'

const animationData = [
    {
        name: "idle",
        framesQuantity: 7,
    },
    {
        name: "jump",
        framesQuantity: 7,
    },
    {
        name: "fall",
        framesQuantity: 7,
    },
    {
        name: "run",
        framesQuantity: 9,
    },
    {
        name: "dizzy",
        framesQuantity: 10,
    },
    {
        name: "sit",
        framesQuantity: 5,
    },
    {
        name: "roll",
        framesQuantity: 7,
    },
    {
        name: "bite",
        framesQuantity: 7,
    },
    {
        name: "ko",
        framesQuantity: 12,
    },
    {
        name: "getHit",
        framesQuantity: 4,
    },
]

const spriteAnimations = getSpriteAnimations(animationData, SPRITE_WIDTH, SPRITE_HEIGHT);

const animationName = "dizzy";

const animate = () => {
  ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

  const animationSize = spriteAnimations.get(animationName).location.length;

  const currentFrame = Math.floor(gameFrame / STAGGER_FRAMES) % animationSize;

  const frameX = spriteAnimations.get(animationName).location[currentFrame].x;
  const frameY = spriteAnimations.get(animationName).location[currentFrame].y;

  ctx.drawImage(playerImage,
      frameX, //Selects sprite on the X axes
      frameY, //Selects sprite on the Y axes
      SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT);

  gameFrame++;
  // if (gameFrame % STAGGER_FRAMES === 0) {
  //     frameX < 6
  //         ? frameX++
  //         : frameX = 0
  // }

  requestAnimationFrame(animate)
}



animate()