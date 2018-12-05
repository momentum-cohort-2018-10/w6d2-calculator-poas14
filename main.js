
function queryThis (selector) {
  return document.querySelector(selector)
}

let calcScreen = []

function type1 (event) {
    let calcButton = queryThis('#number1')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number1').addEventListener('click', type1)

function type2 (event) {
    let calcButton = queryThis('#number2')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number2').addEventListener('click', type2)

function type3 (event) {
    let calcButton = queryThis('#number3')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number3').addEventListener('click', type3)

function type4 (event) {
    let calcButton = queryThis('#number4')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number4').addEventListener('click', type4)

function type5 (event) {
    let calcButton = queryThis('#number5')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number5').addEventListener('click', type5)

function type6 (event) {
    let calcButton = queryThis('#number6')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number6').addEventListener('click', type6)

function type7 (event) {
    let calcButton = queryThis('#number7')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number7').addEventListener('click', type7)

function type8 (event) {
    let calcButton = queryThis('#number8')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number8').addEventListener('click', type8)

function type9 (event) {
    let calcButton = queryThis('#number9')
    let innerNum =calcButton.innerText
    console.log(innerNum)
    let calcList = queryThis('#calculator_screen')
    calcScreen.push(innerNum)
    calcList.innerText = calcScreen.join('')
    console.log(calcScreen)
}
queryThis('#number9').addEventListener('click', type9)




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
