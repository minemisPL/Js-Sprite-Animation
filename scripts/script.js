import {getSpriteAnimations} from "./animationUtils.js";
import {animationData} from "./animationData.js";
import {PLAYER_IMAGE_URL} from "./animationData.js";
import {config} from "./animationData.js";
import {animate} from "./animationUtils.js";

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const animationChoice = document.getElementById('animations')
animationChoice.addEventListener("change", (e) => {
    const animationName = e.target.value;
    animate(config, 0, playerImage, ctx, spriteAnimations, animationName)
})

canvas.width = config.canvasWidth
canvas.height = config.canvasHeight

const playerImage = new Image()
playerImage.src = PLAYER_IMAGE_URL

const spriteAnimations = getSpriteAnimations(animationData, config.spriteWidth, config.spriteHeight);

animate(config, 0, playerImage, ctx, spriteAnimations)