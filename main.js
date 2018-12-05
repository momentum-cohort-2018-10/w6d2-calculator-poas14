
function queryThis (selector) {
  return document.querySelector(selector)
}

let calcScreen = []

//numbers//

function type1 (event) {
    realNumber = event.target
    console.log(realNumber)
    let innerNum =realNumber.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('.numberbuttons').addEventListener('click', type1)


//operators//


function typeplus (event) {
    let calcButton = queryThis('#operatorplus')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#operatorplus').addEventListener('click', typeplus)

function typeminus (event) {
    let calcButton = queryThis('#operatorminus')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#operatorminus').addEventListener('click', typeminus)

function typedivide (event) {
    let calcButton = queryThis('#operatordivide')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#operatordivide').addEventListener('click', typedivide)

function typemultiply (event) {
    let calcButton = queryThis('#operatormultiply')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#operatormultiply').addEventListener('click', typemultiply)


//clear and equals//


function typeclear (event) {
    calcScreen = []
    let calcList = queryThis('#calculator_screen')
    calcList.innerText = calcScreen
}
queryThis('#operatorclear').addEventListener('click', typeclear)

function typeequal (event) {
    stringScreen = calcScreen.join('')
    problemSolved = eval(stringScreen)
    let calcList = queryThis('#calculator_screen')
    calcList.innerText = problemSolved
    calcScreen = []
    calcScreen.push(problemSolved)
}
queryThis('#operatorequal').addEventListener('click', typeequal)
