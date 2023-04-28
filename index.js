const btn = document.querySelector('.btn-start');
let divider = document.querySelector('.divider');
console.log();
let i =0;
let j =0;
let k =0;
btn.addEventListener('click',()=>{
let audio = new Audio('./horse.wav')
audio.play();
const timer = setInterval(() => {
    
const horse1 = document.querySelector('.horse1')
const horse2 = document.querySelector('.horse2')
const horse3 = document.querySelector('.horse3')
let random1 = Math.random() * 3 +1
let random2 = Math.random() * 3 +1
let random3 = Math.random() * 3 +1

if(i+200>divider.getBoundingClientRect().left) {
alert('winner horse 1')
clearInterval(timer);
    i = 0;
    j = 0;
    k = 0;
horse1.style.left = 0;
horse2.style.left = 0;
horse3.style.left =0;
}
else if(j+200>divider.getBoundingClientRect().left) {
alert('winner horse 2')
clearInterval(timer);
    i = 0;
    j = 0;
    k = 0;
horse1.style.left = 0;
horse2.style.left = 0;
horse3.style.left =0;
}
else if(k+200>divider.getBoundingClientRect().left) {
alert('winner horse 3')
clearInterval(timer);
    i = 0;
    j = 0;
    k = 0;
horse1.style.left = 0;
horse2.style.left = 0;
horse3.style.left =0;
}

i+=random1
j+=random2
k+=random3
horse1.style.left = i+'px'
horse2.style.left = j+'px'
horse3.style.left = k+'px'


}, 50)})
