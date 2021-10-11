const inputElement = document.getElementById("input-todo")
const cardsContainer = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// ボタンを押したらテキストが下に追加される
addButton.onclick = function() {
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = inputElement.value

  if (inputElement.value !== "") {
    const sakuzyo = document.createElement("div")
    sakuzyo.className = "sakuzyo"
    sakuzyo.textContent = "削除"

    cardsContainer.appendChild(card)
    cardsContainer.appendChild(sakuzyo)
    inputElement.value = ""

    sakuzyo.onclick = function() {
      card.remove()
      sakuzyo.remove()
    }
  }
}
