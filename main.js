let username = "Фаррух"
username = "Фаррух Валиев"

console.log(username)

let a = 10
let b = 20

let c = a + username

let message = "Привет, " + username + "!"
message = `Привет, ${username}!`
console.log(message)

console.log(c)



function calc(){
    let x = +document.getElementsByName("x")[0].value
    let y = +document.getElementsByName("y")[0].value

    let btn = event.target
    let operator = btn.innerHTML

    let z

    if(operator == "+") {
        z = x + y
    } else if(operator == "-") {
        z = x - y
    } else if(operator == "*") {
        z = x * y
    } else if(operator == "/") {
        if(y == 0) {
            z = "no"
        } else {
            z = x / y
        }
    }

    let result = document.getElementById("result")
    result.innerHTML = "Результат: " + z
}

let countrySelect = document.getElementById("countrySelect");

countrySelect.addEventListener("input", updatephoneNumber)
function updatephoneNumber() {
    
    let phoneNumberInput = document.getElementById("phoneNumber");
    let countryCode = countrySelect.value

    if(countryCode == "uz") {
        phoneNumberInput.value = "+998"
    } else if(countryCode == "ru") {
        phoneNumberInput.value = "+7"
    } else if(countryCode == "us") {
        phoneNumberInput.value = "+1"
    } else if(countryCode == "fr") {
        phoneNumberInput.value = "+33"
    }
}

let checkbox = document.getElementById("checked")

checkbox.addEventListener("input",activeBtn)

function activeBtn() {
    let checkboxValue = checkbox.checked;
    let btn = document.getElementById("btn")
    if (checkboxValue) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

let courseSelect = document.querySelector("#courseSelect")
let range = document.getElementById("rangeValue")

courseSelect.addEventListener("input",course)
range.addEventListener("input",course)


function course() {
    let courseSelectValue = courseSelect.value
    let FRONTEND_PRICE=1500000
    let PYTHON_PRICE=1300000
    let DA_PRICE=1400000
    let basicPrice 
    
    if (courseSelectValue == "front") {
        basicPrice = FRONTEND_PRICE
    } else if (courseSelectValue == "py") {
        basicPrice = PYTHON_PRICE
    } else if (courseSelectValue == "DA") {
        basicPrice = DA_PRICE
    }
    let rangeValue = range.value
    let rangeSale = document.getElementById("rangeSale")
    rangeSale.innerHTML = rangeValue + "%"
    let sum = basicPrice/100*(100- rangeValue)
    let coursePrice = document.getElementById("coursePrice")
    coursePrice.value = sum

}

let USDinput = document.getElementsByName("USD")[0]
let UZSinput = document.getElementsByName("UZS")[0]
let currancySelect = document.getElementsByName("currancy")[0]

USDinput.addEventListener("input", USDtoUZS)
UZSinput.addEventListener("input", UZStoUSD)
currancySelect.addEventListener("input", USDtoUZS)

function USDtoUZS() {
    let currancy = +currancySelect.value
    let result = +USDinput.value * currancy
    UZSinput.value = result
}

function UZStoUSD() {
    let currancy = +currancySelect.value
    let result = +UZSinput.value / currancy
    USDinput.value = result
}
