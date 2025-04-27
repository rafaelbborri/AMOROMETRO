input.onButtonPressed(Button.A, function () {
    A = randint(0, 100)
    if (A < 25) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        basic.showString("INDIFERENTE")
    }
    if (A >= 25 && A < 50) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        basic.showString("AMIZADE")
    }
    if (A >= 50 && A < 75) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showString("INTERESSE")
    }
    if (A >= 75) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.showString("APAIXONADO")
    }
})
let A = 0
basic.showString("AMOROMETRO")
