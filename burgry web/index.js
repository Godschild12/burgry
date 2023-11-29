let btnfood = document.getElementById('food')
let btnsnack= document.getElementById('snack')
let btnbeverage=document.getElementById('beverage')

let div1 = document.getElementById('container')
let div2 = document.getElementById('container1')
let div3 = document.getElementById('container2')
let div4 = document.getElementById('container3')
let div5 = document.getElementById('container4')
let div6 = document.getElementById('container5')

let one = document.getElementById('page1')
let page = document.getElementById('facpage')

one.addEventListener('mouseover',function(){
    page.style.visibility='visible'
})
one.addEventListener('mouseout',function(){
    page.style.visibility='hidden'
})

btnfood.style.backgroundColor='#FFBA00'
btnfood.style.color='black'



btnsnack.addEventListener('mouseover',function(){
    btnsnack.style.backgroundColor='#FFBA00'
    btnsnack.style.color='black'
    btnbeverage.style.backgroundColor='black'
    btnbeverage.style.color='white'
})
btnfood.addEventListener('mouseover',function(){
    btnsnack.style.backgroundColor='black'
    btnsnack.style.color='white'
    btnbeverage.style.backgroundColor='black'
    btnbeverage.style.color='white'

})
btnbeverage.addEventListener('mouseover',function(){
    btnsnack.style.backgroundColor='black'
    btnsnack.style.color='white'
    btnbeverage.style.backgroundColor='#FFBA00'
    btnbeverage.style.color='black'
})
btnsnack.addEventListener('mouseout',function(){
    btnsnack.style.backgroundColor='black'
    btnsnack.style.color='white'
})
btnbeverage.addEventListener('mouseout',function(){
    btnbeverage.style.backgroundColor='black'
    btnbeverage.style.color='white'

})

btnfood.addEventListener('click',function(){
    div1.style.visibility='visible'
    div2.style.visibility='visible'
    div3.style.visibility='hidden'
    div4.style.visibility='hidden'
    div5.style.visibility='hidden'
    div6.style.visibility='hidden'
    btnfood.style.backgroundColor='#FFBA00'
    btnfood.style.color='black'
    btnsnack.style.backgroundColor='black'
    btnsnack.style.color='white'
    btnbeverage.style.backgroundColor='black'
    btnbeverage.style.color='white'

})
btnsnack.addEventListener('click',function(){
    div1.style.visibility='hidden'
    div2.style.visibility='hidden'
    div3.style.visibility='visible'
    div4.style.visibility='visible'
    div5.style.visibility='hidden'
    div6.style.visibility='hidden'
    btnfood.style.backgroundColor='black'
    btnfood.style.color='white'
    btnsnack.style.backgroundColor='#FFBA00'
    btnsnack.style.color='black'
    btnbeverage.style.backgroundColor='black'
    btnbeverage.style.color='white'

})
btnbeverage.addEventListener('click',function(){
    div1.style.visibility='hidden'
    div2.style.visibility='hidden'
    div3.style.visibility='hidden'
    div5.style.visibility='visible'
    div6.style.visibility='visible'
    btnfood.style.backgroundColor='black'
    btnfood.style.color='white'
    btnsnack.style.backgroundColor='black'
    btnsnack.style.color='white'
    btnbeverage.style.backgroundColor='#FFBA00'
    btnbeverage.style.color='black'

})

