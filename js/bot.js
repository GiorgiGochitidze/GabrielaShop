const bot_questions = ["გამარჯობა", "რაგქვია", "ვინ არის შენი შემქმნელი", "რისთვის ხარ განკუთვნილი", "როდის შეიქმენი"]

const answers = ["JARVIS: გამარჯობა!!", "JARVIS: მე მქვია ჯარვისი", "JARVIS: ჩემი შემქნელია: გიორგი გოჩიტიძე",
"JARVIS: მე ვარ შექმნილი იმისთვის რომ დაგეხმაროთ, დაგეხმაროთ ყიდვაში და ა.შ", "JARVIS: კარგად თქვენ?", "JARVIS: კარგია", "JARVIS: დაკავშირება შეგიძლიათ აქ: https://www.facebook.com/giorgi.gochitidze.395/",
//                          3                                                           4
"JARVIS: მე შევიქმენი 2022 წლის 11 ოქტომბერს, ღამის 12 საათზე, და დანარჩენი შენ გამოთვალე XD :)))", "JARVIS: თუ გინდათ რომ განახორციელოთ პროდუქტის ყიდვა გადადით მთავარ მენიუში შემდეგ კი პროდუქტზე მდებარე ყიდვის ღილაკს დააჭირეთ",
"JARVIS: თქვენ შეგიძლიათ გამოიყენოთ შემდეგი სიტყვები: გამარჯობა, რაგქვია, როგორ ხარ, რას აკეთებ, რისთვის ხარ შექმნილი, როდის შეიქმენი, დამაკავშირე პატრონთან/შემქმნელთან, რამდენის ხარ, სად ვიყიდო, რასაკეთებ, რა შეგეკითხო"]
let currentQuestion = 0


const chatContainer = document.querySelector('.chat-container')
const form = document.querySelector('form')
const input = document.querySelector('textarea')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(input.value.trim() == bot_questions[0]){
      chatContainer.innerHTML += `   
      <div class="chat-box">${answers[0]}</div>`
      input.value = "";
}

if(input.value.trim() == bot_questions[1]){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[1]}</div>`
    input.value = "";
}
    
if(input.value.trim() == bot_questions[2] || input.value.trim() == "ვინ შეგქმნა" || input.value.trim() == "შემქმნელი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[2]}</div>`
    input.value = "";
}

if(input.value.trim() == bot_questions[3] || input.value.trim() == "რისთვის ხარ" || input.value.trim() == "რა არის შენი დანიშნულება"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[3]}</div>`
    input.value = "";
}


if(input.value.trim() == "როგორ ხარ"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[4]}</div>`
    input.value = "";
}
if(input.value.trim() == "მეც კარგად" || input.value.trim() == "მეც"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[5]}</div>`
    input.value = "";
}

if(input.value.trim() == "დამაკავშირე შენს პატრონთან" || input.value.trim() == "დამაკავშირე შენს შემქმნელთან" || input.value.trim() == "დამაკავშირე პატრონთან"
|| input.value.trim() == "დამაკავშირე შემქმნელთან"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[6]}</div>`
    input.value = "";
}

if(input.value.trim() == "რამდენის ხარ" || input.value.trim() == "რამდენი წლის ხარ" || input.value.trim() == "როდის შეიქმენი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[7]}</div>`
    input.value = "";
}

if(input.value.trim() == "სად ვიყიდო" || input.value.trim() == "როგორ ვიყიდო" || input.value.trim() == "როგორ ვიყიდო ნივთი"
|| input.value.trim() == "როგორ ვიყიდო პროდუქტი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[8]}</div>`
    input.value = "";
}

if(input.value.trim() == "როგორ გესაუბროთ" || input.value.trim() == "როგორ გესაუბრო" || input.value.trim() == "რა კითხვების დასმა შემიძლია"
|| input.value.trim() == "რა შეგეკითხო"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[9]}</div>`
    input.value = "";
}

if(input.value.trim() == "რასაკეთებ" || input.value.trim() == "რაშობი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: არაფერს ისეთს თქვენ გესაუბრებით</div>`
    input.value = "";
}
})
