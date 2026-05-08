// Create the player character
let myAnmin: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . 8 8 8 8 8 8 8 . . . . .
    . . . 8 8 8 8 8 8 8 8 8 . . . .
    . . 8 8 8 8 8 8 8 8 8 8 8 . . .
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
    . . . 8 8 8 8 8 8 8 8 8 8 . . .
    . . . . 8 8 8 8 8 8 8 8 . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)

// Set player sprite properties
myAnmin.setFlag(SpriteFlag.StayInScreen, false)

// Set up the tilemap
scene.setTileMapLevel(tilemap`level`)

// Set camera to follow the player
scene.cameraFollowSprite(myAnmin)

// Game info - set lives
info.setLife(3)

// Game loop - handle player input
game.onUpdate(function () {
    // Handle left/right movement
    if (controller.left.isPressed()) {
        myAnmin.vx = -100
    } else if (controller.right.isPressed()) {
        myAnmin.vx = 100
    } else {
        myAnmin.vx = 0
    }
    
    // Handle up/down movement
    if (controller.up.isPressed()) {
        myAnmin.vy = -100
    } else if (controller.down.isPressed()) {
        myAnmin.vy = 100
    } else {
        myAnmin.vy = 0
    }
})
