export const getSpriteAnimations = (animationData, spriteWidth, spriteHeight) => {
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

export const animate = (config, gameFrame, playerImage, canvasContext, spriteAnimations, animationName) => {
    const canvasWidth = config.canvasWidth
    const canvasHeight = config.canvasHeight
    const spriteWidth = config.spriteWidth
    const spriteHeight = config.spriteHeight
    const staggerFrames = config.staggerFrames

    if (animationName == null) {
        animationName = config.initialAnimation
    }

    canvasContext.clearRect(0,0, canvasWidth, canvasHeight);

    const animationSize = spriteAnimations.get(animationName).location.length;

    const currentFrame = Math.floor(gameFrame / staggerFrames) % animationSize;

    const frameX = spriteAnimations.get(animationName).location[currentFrame].x;
    const frameY = spriteAnimations.get(animationName).location[currentFrame].y;

    canvasContext.drawImage(playerImage,
        frameX, //Selects sprite on the X axes
        frameY, //Selects sprite on the Y axes
        spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    requestAnimationFrame(() => {
        animate(config, gameFrame + 1, playerImage, canvasContext, spriteAnimations, animationName)
    })
}
