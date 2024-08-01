/*  class 1
'use strict'

const dissni = "shity"
console.log(dissni)
*/
/*
function fruitJuice(apple, oranges) {
    const Juice = `you need to buy ${apple} apples and ${oranges} oranges to make it.`
    return Juice
}

fruitJuice(5, 0)
fruitJuice(2, 4)
fruitJuice("fuck", "shit")
const oneJuice = fruitJuice(2, 4)
const secondJuice = fruitJuice("fuck", "shit")
console.log(oneJuice)
console.log(secondJuice)
*/
/*
const birth = function (year) {
    return 2024 - year
}
console.log(birth(2005))
*/
/*
const age = birthYear => 2024 - birthYear; n
console.log(age(2005))
*/
/*
const ages = [11, 22, 33, 44]
console.log(ages)
console.log(ages.length)
*/
/*
function clacTip(tip) {
    if (tip >= 50 && tip <= 300) {
        return tip * 0.15
    } else {
        return tip * 0.2
    }
}
const bills = [125, 555, 44]
const tips = [clacTip(bills[0]), clacTip(bills[1]), clacTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals[0], totals[1], totals[2])
*/
/*
const person = {
    name: `Jonas`,
    friendNumber: 11,
    bestFriends: [Micheal]
}
*/
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    DriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYeah
        return this.age
    },
    calDriversLicense: function () {
        if (this.DriversLicense) {
            this.licence = 'has'
        } else {
            this.licence = 'has not'
        }
    }
}
jonas.calcAge()
jonas.calDriversLicense()
console.log(`Jonas is a ${jonas.age}-year old ${jonas.job}, and he ${jonas.licence} a driver's licence`)