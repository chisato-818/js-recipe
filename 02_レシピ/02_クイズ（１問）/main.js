const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

// feedback の内容
const feedbacks = [
  "写真毎回それでしょ笑",
  "脳内酒だらけ",
  "👊、はい君の負け〜〜",
]

// 正解を判定する
const choose = function(choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}
