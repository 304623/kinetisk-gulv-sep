input.onPinPressed(TouchPin.P0, function () {
    if (lysPrio <= 10) {
        lysPrio += 1
        radio.sendString("L")
    } else if (lysPrio >= 10 && varmePrio <= 10) {
        radio.sendString("V")
        varmePrio += 1
    } else if (lysPrio >= 10 && varmePrio >= 10) {
        lysPrio = 0
        varmePrio = 0
    }
    Tryk.unshift(1)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Tryk.length)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let Tryk: number[] = []
let varmePrio = 0
let lysPrio = 0
radio.setGroup(1)
lysPrio = 0
varmePrio = 0
Tryk = []
pins.analogWritePin(AnalogPin.P0, 1023)
let Signalstyrke = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    if (Signalstyrke <= 1023 && Signalstyrke > 0) {
        serial.writeString("" + (Signalstyrke))
    }
})
