input.onButtonPressed(Button.A, function () {
    if (P1 == "Tails" && P2 == "Tails") {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (P1 == "Heads" && P2 == "Heads") {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (P1 == "Tails" && P2 == "Heads") {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showLeds(`
            . # # # .
            . # . # .
            . . # # .
            . # . . .
            . # # # .
            `)
    }
})
let P2 = ""
let P1 = ""
let Coins = randint(0, 1)
Coins = randint(0, 1)
if (Coins == 0) {
    P1 = "Heads"
} else {
    P1 = "Tails"
}
if (Coins == 0) {
    P2 = "Tails"
} else {
    P2 = "Heads"
}
basic.forever(function () {
	
})
