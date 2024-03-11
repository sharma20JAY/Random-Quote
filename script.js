const btn = document.getElementById("btn")
const output = document.querySelector(".output")

let quote = ["Success is not final, failure is not fatal: It is the courage to continue that counts.",
"The only way to do great work is to love what you do.",
"Believe you can and you're halfway there.",
"Strive not to be a success, but rather to be of value.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"If you want to lift yourself up, lift up someone else.",
"The future belongs to those who believe in the beauty of their dreams.",
"In the middle of difficulty lies opportunity.",
"The journey of a thousand miles begins with one step.",
"You are never too old to set another goal or to dream a new dream."]


btn.addEventListener("click",()=>{
    console.log("Clicked")
    let random = Math.floor(Math.random()*quote.length)
    output.textContent = quote[random];
})