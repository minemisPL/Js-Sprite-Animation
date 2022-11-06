export const PLAYER_IMAGE_URL = 'media/shadow_dog.png'

export const config = {
    canvasWidth: 600,
    canvasHeight: 600,
    spriteWidth: 575,
    spriteHeight: 523,
    staggerFrames: 4,
    initialAnimation: "idle",
}

export const animationData = [
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
        framesQuantity: 11,
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