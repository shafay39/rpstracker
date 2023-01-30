input.onGesture(Gesture.Shake, function () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("wow guys this is so pinteresque")
    P1 = 0
    P2 = 0
    TIES = 0
    ROUNDS = 0
    basic.pause(2000)
    OLED.clear()
})
function update_scores () {
    OLED.clear()
    OLED.writeStringNewLine("PLAYER: 1" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("PLAYER: 2" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("TIES" + TIES)
    OLED.newLine()
    OLED.writeStringNewLine("ROUNDS" + ROUNDS)
}
let ROUNDS = 0
let TIES = 0
let P2 = 0
let P1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("wow guys this is so pinteresque")
P1 = 0
P2 = 0
TIES = 0
ROUNDS = 0
basic.pause(2000)
OLED.clear()
update_scores()
