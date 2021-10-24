const memoinput = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

button.onclick = function() {
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = memoinput.value
  memocontainer.appendChild(card)

  memoinput.value = ""
}
