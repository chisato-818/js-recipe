const inputElement = document.getElementById("input-todo")
const addButton = document.getElementById("add-button")
const container = document.getElementById("cards-container")

// 追加ボタンを押したら
addButton.onclick = function() {
  // 入力欄を空にする
  inputElement.value = ""
}
