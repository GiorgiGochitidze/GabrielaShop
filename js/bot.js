const bot_questions = ["how old are you?", "whats your name", "whats your parents name", "i know where you live", "dont look behind :))) "]

let currentQuestion = 0


const chatContainer = document.querySelector('.chat-container')
const form = document.querySelector('form')
const input = document.querySelector('textarea')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  chatContainer.innerHTML += `   
  <div class="chat-box me">${input.value.trim()}</div>`
  chatContainer.innerHTML += `   
  <div class="chat-box">${bot_questions[currentQuestion]}</div>`
  
  input.value = ""
  
  currentQuestion++
})
