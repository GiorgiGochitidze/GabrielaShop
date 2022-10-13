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
  if(input.value.trim() == bot_questions[0] || input.value.trim() == "გამარჯობა ჯარვის" || input.value.trim() == "ჯარვის გამარჯობა"){
      chatContainer.innerHTML += `   
      <div class="chat-box">${answers[0]}</div>`
      input.value = "";
}

if(input.value.trim() == bot_questions[1] || input.value.trim() == "ვინ ხარ"){
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

const submiting = document.querySelector('.submites-button')

submiting.addEventListener('click', () => {
    if(input.value.trim() == "დამაკავშირე შენს პატრონთან" || input.value.trim() == "დამაკავშირე შენს შემქმნელთან" || input.value.trim() == "დამაკავშირე პატრონთან"
|| input.value.trim() == "დამაკავშირე შემქმნელთან"){
    window.open(`https://mail.google.com/mail/u/0/#inbox`, "_blank")
    input.value = "";
}
})




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

if(input.value.trim() == "რასაკეთებ" || input.value.trim() == "რაშობი" || input.value.trim() == "სხვა" || input.value.trim() == "ამის გარდა" || input.value.trim() == "მაგის გარდა"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: არაფერს ისეთს თქვენ გესაუბრებით</div>`
    input.value = "";
}



if(input.value.includes("გახსენი გუგლი") || input.value.includes("გუგლი") || input.value.includes("ჯარვის გახსენი გუგლი")
|| input.value.includes("ჯარვის გუგლი გახსენი")){
    window.open(`https://www.google.com/`, "_self")
    input.value = "";
}

if(input.value.includes("გახსენი მთავარი გვერდი") || input.value.includes("გახსენი მთავარი") || input.value.includes("მთავარი")
|| input.value.includes("ჯარვის მთავარი") || input.value.includes("ჯარვის გახსენი მთავარი")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/index.html`, "_self")
    input.value = "";
}

if(input.value.includes("გახსენი დახმარების გვერდი") || input.value.includes("გახსენი დახმარება") || input.value.includes("დახმარება")
|| input.value.includes("ჯარვის დახმარება") || input.value.includes("ჯარვის გახსენი დახმარება")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/daxmareba.html`, "_self")
    input.value = "";
}

if(input.value.includes("გახსენი კონტაქტების გვერდი") || input.value.includes("გახსენი კონტაქტები") || input.value.includes("კონტაქტები")
|| input.value.includes("ჯარვის კონტაქტები") || input.value.includes("ჯარვის გახსენი კონტაქტები")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/kontaqtebi.html`, "_self")
    input.value = "";
}
})