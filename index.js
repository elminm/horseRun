const btn = document.querySelector('.btn-start');
const divider = document.querySelector('.divider');
const select= document.querySelector('#bet')
const depositInput = document.querySelector('#deposit');
const depositBtn = document.querySelector('.bet-btn');
const walletSpan = document.querySelector('#walletAmount');
let selected =1;
let amount = 0;
let wallet =0;
let i =0;
let j =0;
let k =0;
depositBtn.addEventListener('click',()=>{
    if(parseInt(depositInput.value)>0){
        selected =select.selectedOptions[0].innerHTML;
        amount = depositInput.value;
    alert(`You Bet ${amount}$ to ${selected} best of luck`)
    depositInput.value = '';
    }
    else {alert(`
    cannot be empty
    `)}
})
function winner(winner){
 wallet = parseInt(walletSpan.innerText);

    if(amount>0) {
 if(winner===selected){
    walletSpan.innerText = wallet + amount*2;
 }
}
alert(`winner is ${winner}`)
}

btn.addEventListener('click',()=>{
let audio = new Audio('./horse.wav')
let run = new Audio('./run.mp3')
audio.play();
btn.classList.add('disabled')

const timer = setInterval(() => {
run.play()
const horse1 = document.querySelector('.horse1')
const horse2 = document.querySelector('.horse2')
const horse3 = document.querySelector('.horse3')
let random1 = Math.random() * 3 + 1;
let random2 = Math.random() * 3 + 1;
let random3 = Math.random() * 3 + 1;
if(i+200>divider.getBoundingClientRect().left) {
run.pause()

clearInterval(timer);
    i = 0;
    j = 0;
    k = 0;
horse1.style.left = 0;
horse2.style.left = 0;
horse3.style.left =0;
btn.classList.remove('disabled')
winner('horse1')
return
}
else if(j+200>divider.getBoundingClientRect().left) {
    run.pause()
clearInterval(timer);
    i = 0;
    j = 0;
    k = 0;
horse1.style.left = 0;
horse2.style.left = 0;
horse3.style.left =0;
btn.classList.remove('disabled')
winner('horse2')
return
}
else if(k+200>divider.getBoundingClientRect().left) {
run.pause()
clearInterval(timer);
    i = 0;
    j = 0;
    k = 0;
horse1.style.left = 0;
horse2.style.left = 0;
horse3.style.left =0;
btn.classList.remove('disabled')
winner('horse3')
return
}
i+=random1
j+=random2
k+=random3
horse1.style.left = i+'px'
horse2.style.left = j+'px'
horse3.style.left = k+'px'
}, 50)
})
