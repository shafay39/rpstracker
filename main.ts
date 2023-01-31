let P1 = 0
let ROUNDS = 0
let TIES = 0
let P2 = 0
input.onButtonPressed(Button.A, function () {
    P1 += 1
    ROUNDS += 1
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        `)
    update_scores()
})
input.onButtonPressed(Button.AB, function () {
    TIES += 1
    ROUNDS += 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    update_scores()
})
input.onButtonPressed(Button.B, function () {
    P2 += 1
    ROUNDS += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    update_scores()
})
input.onGesture(Gesture.Shake, function () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("wow guys this is so pinteresque")
    P1 = 0
    P2 = 0
    TIES = 0
    ROUNDS = 0
    basic.pause(2000)
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("wow guys this is so pinteresque")
    P1 = 0
    P2 = 0
    TIES = 0
    ROUNDS = 0
    basic.pause(2000)
    OLED.clear()
    update_scores()
}
function update_scores () {
    OLED.clear()
    OLED.writeStringNewLine("PLAYER 1: " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("PLAYER 2: " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("TIES " + TIES)
    OLED.newLine()
    OLED.writeStringNewLine("ROUNDS " + ROUNDS)
}
