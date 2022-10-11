const bot_questions = ["გამარჯობა", "რაგქვია", "ვინ არის შენი შემქმნელი", "რისთვის ხარ განკუთვნილი", "როდის შეიქქმენი"]

const answers = ["JARVIS: გამარჯობა!!", "JARVIS: მე მქვია ჯარვისი", "JARVIS: ჩემი შემქნელია: გიორგი გოჩიტიძე",
"JARVIS: მე ვარ შექმნილი იმისთვის რომ დაგეხმაროთ, დაგეხმაროთ ყიდვაში და ა.შ"]

let currentQuestion = 0


const chatContainer = document.querySelector('.chat-container')
const form = document.querySelector('form')
const input = document.querySelector('textarea')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(input.value.trim() == bot_questions[0]){
      chatContainer.innerHTML += `   
      <div class="chat-box">${answers[0]}</div>`
}

if(input.value.trim() == bot_questions[1]){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[1]}</div>`
}
    
if(input.value.trim() == bot_questions[2] || input.value.trim() == "ვინ შეგქმნა" || input.value.trim() == "შემქმნელი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[2]}</div>`
}

if(input.value.trim() == bot_questions[3] || input.value.trim() == "რისთვის ხარ" || input.value.trim() == "რა არის შენი დანიშნულება"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[3]}</div>`
}

})
