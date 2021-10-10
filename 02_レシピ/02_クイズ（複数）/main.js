const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")

// feedback内容
const feedbacks = [
  "乗せられて、気づけばハマっているタイプ",
  "思わず母性本能、父性本能が働いてしまうタイプ",
  "ダメ男ダメ女に引っかかりづらいタイプ",
  "人の良さが全面に出ていて、引っかかりやすいタイプ",
]

// 正解を判定する
const choose = function(choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
}

choice1.onclick = function() {
  choose(0)
}

choice2.onclick = function() {
  choose(1)
}

choice3.onclick = function() {
  choose(2)
}

choice4.onclick = function() {
  choose(3)
}
