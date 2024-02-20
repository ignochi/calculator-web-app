"use strict";

const question = document.getElementById("expression");
const answer = document.getElementById("answer");
const equalToBtn = document.getElementById("equalTo");
let operators = "%÷×-+";
let multiplyAndDivide = "÷×";
let notification = document.querySelector("div.maxWord");
let output;

function notificationFunction(value) {
    notification.style.display = "inline-block";
    notification.innerHTML = value;
    setTimeout(() => {notification.style.display = "none"}, 2000);
}

equalToBtn.addEventListener("click", () => {
    // if the user hasn't inputted anything, pressing the
    // "equal to" does not return anything instead of "undefined"
    if (question.innerHTML.trim() === "") {
        return;
    } else {
        calculateResult();
        createHIstory();
    }
})

function appendToResult(value) {
    // to make sure "%", "÷" and "×" can't be clicked first
    if (value === "%" && question.innerHTML.trim() === "") {
        question.innerHTML = "";
    } else if (value === "÷" && question.innerHTML.trim() === "") {
        question.innerHTML = "";
    } else if (value === "×" && question.innerHTML.trim() === "") {
        question.innerHTML = "";
    }

    // to prevent the user from pressing the multiply or divide buttons twice in succession
    else if (multiplyAndDivide.includes(question.innerHTML.charAt(question.innerHTML.length - 1))
    && multiplyAndDivide.includes(value)) {
        question.innerHTML =
        question.innerHTML.replace(question.innerHTML.charAt(question.innerHTML.length - 1), value)
    }

    // to prevent the user from pressing the "%", "+", "-" or "." buttons twice in succession
    else if (question.innerHTML.endsWith("%") && value === "%") {
        value = "";
    } else if (question.innerHTML.endsWith("+") && value === "+") {
        value = "";
    } else if (question.innerHTML.endsWith("-") && value === "-") {
        value = "";
    } else if (question.innerHTML.endsWith(".") && value === ".") {
        value = "";
    }
    
    // the maximum no. of characters that can be inputed is 20
    else if (question.innerHTML.length === 20) {
        notificationFunction("Max word length reached");
        question.innerHTML += "";
    }

    // to make answers reusable when you click on an operator
    else if (answer.innerHTML.trim() !== "") {
        if (operators.includes(value)) {
            question.innerHTML = answer.innerHTML.slice(1);
            question.innerHTML += value;
            answer.innerHTML = "";
        } else {
            clearResult("clearAll");
            question.innerHTML += value;
        }
    }

    else {
        question.innerHTML += value;
    }
}

// for the "clear once" and "clear all" buttons
function clearResult(value) {
    if (value === "clearAll" ||
    value !== "clearAll" && answer.innerHTML.trim() !== "") {
        question.innerHTML = "";
        answer.innerHTML = "";
    } else {
        let length = question.innerHTML.length;
        question.innerHTML = question.innerHTML.slice(0, length - 1);
    }
}

// for the "equal to" button (the actual calculation)
function calculateResult() {
    /*
    if question.innerHTML contains mathematical symbols that
    Javascript can't understand, replace them with their valid
    equivalents
    */
    try {
        output = question.innerHTML;
        /*
        if the last character is "." and the character
        just before it is an operator, replace the "." with "0"
        */
        if (question.innerHTML.endsWith(".") &&
        operators.includes(question.innerHTML.charAt(question.innerHTML.length - 2))) {
            output =
            question.innerHTML.replace(question.innerHTML.charAt(question.innerHTML.length - 1), "0");
        }

        if (output.includes("%")) {
            output = output.replace("%", "/100*");
        }
        /*
        incase the user inputs something like "7%", which the
        calculator will understand as 7/100*
        */
        if (output.endsWith("*")) {
            output = output.slice(0, -1);
        }

        if (output.includes("÷")) {
            output = output.replace(/÷/g, "/");
        }

        if (output.includes("×")) {
            output = output.replace(/×/g, "*");
        }

        answer.innerHTML = "=" + eval(output);
    } catch(error) {
        answer.innerHTML = "Math Error!";
    }
}

// the history section
const historyBtn = document.querySelector(".history > button");
const clearHistoryBtn =
document.querySelector(".clearBtnSection button:first-of-type");
const closeHistoryPageBtn =
document.querySelector(".clearBtnSection button:last-of-type");
let historyExpression =
document.getElementsByClassName("historyExpression");
let historyAnswer =
document.getElementsByClassName("historyAnswer");

historyBtn.addEventListener("click", () => {
    // if there is no stored history, don't display
    // the history page
    if (historyExpression[0].innerHTML.trim() === "") {
        notificationFunction("No History Saved!");
    } else {
        document.getElementById("historyPage").style.display = "block";
    }
});
clearHistoryBtn.addEventListener("click", clearHistory);
clearHistoryBtn.addEventListener("click", closeHistoryPage);
closeHistoryPageBtn.addEventListener("click", closeHistoryPage);

function closeHistoryPage() {
    document.getElementById("historyPage").style.display = "none";
}

function createHIstory() {
    /*
    if there is no localStorage with the key calculatorx
    where 0 < x <= 10, create one and store the most recent
    calculation in it.
    */
    if (localStorage.getItem("calculator1") === null) {
        localStorage.setItem(
            "calculator1",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator2") === null) {
        localStorage.setItem(
            "calculator2",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator3") === null) {
        localStorage.setItem(
            "calculator3",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator4") === null) {
        localStorage.setItem(
            "calculator4",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator5") === null) {
        localStorage.setItem(
            "calculator5",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator6") === null) {
        localStorage.setItem(
            "calculator6",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator7") === null) {
        localStorage.setItem(
            "calculator7",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator8") === null) {
        localStorage.setItem(
            "calculator8",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator9") === null) {
        localStorage.setItem(
            "calculator9",
            [question.innerHTML, answer.innerHTML]
        );
    } else if (localStorage.getItem("calculator10") === null) {
        localStorage.setItem(
            "calculator10",
            [question.innerHTML, answer.innerHTML]
        );
    }
    /*
    if there is a localStorage with the key calculator10,
    create calculator11 and store the most recent calculation
    in it.
    */
    else if (localStorage.getItem("calculator10") !== null) {
        localStorage.setItem(
            "calculator11",
            [question.innerHTML, answer.innerHTML]
        );

        // set the value of each localStorage to the value of
        // the localStorage just below them
        localStorage.setItem(
            "calculator1",
            localStorage.getItem("calculator2")
        );
        localStorage.setItem(
            "calculator2",
            localStorage.getItem("calculator3")
        );
        localStorage.setItem(
            "calculator3",
            localStorage.getItem("calculator4")
        );
        localStorage.setItem(
            "calculator4",
            localStorage.getItem("calculator5")
        );
        localStorage.setItem(
            "calculator5",
            localStorage.getItem("calculator6")
        );
        localStorage.setItem(
            "calculator6",
            localStorage.getItem("calculator7")
        );
        localStorage.setItem(
            "calculator7",
            localStorage.getItem("calculator8")
        );
        localStorage.setItem(
            "calculator8",
            localStorage.getItem("calculator9")
        );
        localStorage.setItem(
            "calculator9",
            localStorage.getItem("calculator10")
        );
        localStorage.setItem(
            "calculator10",
            localStorage.getItem("calculator11")
        );
    }
}

let id = setInterval(
    () => {
        for (let i = 0; i < historyExpression.length; i++) {
            if (localStorage.getItem(`calculator${i + 1}`) !== null) {
                let x =
                localStorage.getItem(`calculator${i + 1}`).split(",");
                historyExpression[i].innerHTML = x[0];
                historyAnswer[i].innerHTML = x[1];
            } else {
                return;
            }
        }
    }, 100
)

function clearHistory() {
    for (let i = 1; i <= 11; i++) {
        localStorage.removeItem(`calculator${i}`);
    }
    for (let i = 0; i < historyExpression.length; i++) {
        historyExpression[i].innerHTML = "";
        historyAnswer[i].innerHTML = "";
    }
}


/*
one method to handle floating point arithmetic (addition, I've
not tried it on subtraction) is to use the toFixed(x) method.
I noticed that the evaluation is most accurate when x is equal
to the number of digits after the decimal point of the operand
that has the most numbers after it's decimal point.
for example: 0.123 + 0.2134 = their answer.toFixed(4), since the
second operand has the most numbers after it's decimal point
*/

// if you are seeing this and you have any idea on how I
// can make this calculator handle floating point arithmetic
// better or you have any other contributions or questions,
// contact me:
// email: preciousozuru130@gmail.com
// twitter: @ignochi
// phone number: +234 811 431 6666