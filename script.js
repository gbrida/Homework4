var questionlist = [
    {
        question: "who is Sigmund Freud?",
        choices: ["neurologist", "basketball player", "baseball player", "volleyball player"],
        correctanswer: "neurologist"
    },
    {
        question: "what color is the sky?",
        choices: ["red", "blue", "grey", "black"],
        correctanswer: "blue"
    },
    {
        question: "what is 2 + 2?",
        choices: ["1", "2", "3", "4"],
        correctanswer: "4"
    },
    {
        question: "what year is it?",
        choices: ["1942", "1812", "2002", "2020"],
        correctanswer: ["2020"]
    }
]

var timeremaining = questionlist.length * 15
var setintervalid
var i = 0


document.getElementById("start-quiz").addEventListener("click", function () {
    document.getElementById("title").classList.add("hide")
    document.getElementById("start").classList.remove("hide")

    setintervalid = setInterval(countdown, 1000)
})


function countdown() {
    timeremaining = timeremaining - 1
    document.getElementById("time").textContent = timeremaining

    document.getElementById("question").textContent = questionlist[i].question
    document.getElementById("choices").textContent = ""
    var choices = questionlist[i].choices
    for (let index = 0; index < choices.length; index++) {
        var li = document.createElement("li")
        li.textContent = choices[index]
        li.onclick = function () {
            if (i < questionlist.length) {
                i++
            }
            else {
                clearInterval(setintervalid)
                document.getElementById("start").classList.add("hide")
                document.getElementById("input").classList.remove("hide")

            }


        }
        document.getElementById("choices").appendChild(li)
    }

}


document.getElementById("savescore").addEventListener("click", function () {

    localStorage.setItem("highscore", timeremaining)
    document.getElementById("timediv").classList.add("hide")
    document.getElementById("input").classList.add("hide")
    document.getElementById("viewhighscore").classList.remove("hide")

    document.getElementById("score").textContent = localStorage.getItem("highscore")

})


document.getElementById("goback").addEventListener("click", function () {
    window.location.reload()
})

document.getElementById("clearscore").addEventListener("click", function () {
    localStorage.clear()
})